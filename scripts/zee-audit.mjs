/**
 * zee-audit — a scanner companion for @zee-css/cli v1.0.0.
 *
 * The CLI's scanner only understands `className="..."` and `className={`...`}`.
 * Class names that live inside a conditional or concatenated expression --
 *   className={active ? "border-indigo-500" : "border-transparent"}
 * -- are invisible to it, so their CSS never gets generated.
 *
 * This script walks the whole className attribute value (brace-balanced) and
 * collects every string literal inside it.
 *
 *   node scripts/zee-audit.mjs --write   regenerate the safelist component
 *   node scripts/zee-audit.mjs           report unresolved + missing classes
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { glob } from "glob";
import { generateCSSForClass } from "@zee-css/core";

const WRITE = process.argv.includes("--write");
const SAFELIST = "src/app/_components/safelist.tsx";
const SHEET = "src/app/zee.css";

/** Classes defined by hand in globals.css, not by zee-css. */
const IGNORE = new Set(["zc-scroll"]);

/** Every className attribute value in a file, brace-balanced. */
function classNameValues(src) {
  const out = [];
  const re = /class(?:Name)?=/g;
  let m;
  while ((m = re.exec(src))) {
    let i = m.index + m[0].length;
    const ch = src[i];
    if (ch === '"' || ch === "'") {
      const end = src.indexOf(ch, i + 1);
      if (end > -1) out.push(src.slice(i + 1, end));
    } else if (ch === "{") {
      let depth = 0;
      let j = i;
      for (; j < src.length; j++) {
        if (src[j] === "{") depth++;
        else if (src[j] === "}" && --depth === 0) break;
      }
      out.push(src.slice(i + 1, j));
    }
  }
  return out;
}

function stringLiterals(expr) {
  const out = [];
  const re = /"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|`([^`\\]*(?:\\.[^`\\]*)*)`/g;
  let m;
  while ((m = re.exec(expr))) out.push(m[1] ?? m[2] ?? m[3]);
  return out;
}

/**
 * Validate the selector the generator actually emitted, rather than
 * reimplementing its escaping rules here.
 *
 * A CSS identifier may contain only [A-Za-z0-9_-] and non-ASCII characters
 * unescaped, and may not begin with an unescaped digit. @zee-css/core 1.0.0
 * escaped only  : . / [ ] ( ) , !  which left `#` and `%` bare and never
 * handled a leading digit -- so `bg-[#14b8a6]` and `2xl:pa-8` both produced
 * rules that no parser accepts. Turbopack fails the build on them; other
 * bundlers drop the rule silently, which is worse. Fixed in 1.1.0; this check
 * stays so a regression shows up here instead of in a build log.
 */
function selectorProblem(css) {
  // Blank out declaration bodies first, or a value like `padding: 0.125rem`
  // looks like a class selector called `.125rem`.
  let prelude = css;
  for (let i = 0; i < 4; i++) prelude = prelude.replace(/\{[^{}]*\}/g, "{}");

  const matches = [...prelude.matchAll(/\.((?:\\[0-9a-fA-F]{1,6} |\\.|[^\s{,:>+~()])+)/g)];
  if (!matches.length) return null;
  const sel = matches[matches.length - 1][1];

  let i = 0;
  let atStart = true;
  while (i < sel.length) {
    const ch = sel[i];

    if (ch === "\\") {
      const hex = /^\\[0-9a-fA-F]{1,6} /.exec(sel.slice(i));
      i += hex ? hex[0].length : 2;
      atStart = false;
      continue;
    }
    if (atStart && ch >= "0" && ch <= "9") {
      return "selector starts with an unescaped digit";
    }
    if (ch.charCodeAt(0) < 0x80 && !/[A-Za-z0-9_-]/.test(ch)) {
      return `unescaped "${ch}" in the selector`;
    }
    i++;
    atStart = false;
  }
  return null;
}

const files = (await glob("src/**/*.{tsx,ts,jsx,js}", { ignore: ["**/node_modules/**"] }))
  .filter((f) => !f.endsWith("safelist.tsx"))
  .sort();

const used = new Map(); // class -> Set<file>
for (const file of files) {
  const src = readFileSync(file, "utf8");
  for (const value of classNameValues(src)) {
    const chunks = /["'`]/.test(value) ? stringLiterals(value) : [value];
    for (const chunk of chunks) {
      for (const cls of chunk.replace(/\$\{[^}]*\}/g, " ").split(/\s+/)) {
        if (!cls || IGNORE.has(cls)) continue;
        if (!/^[!\w[\]#().,/:%-]+$/.test(cls)) continue;
        if (!used.has(cls)) used.set(cls, new Set());
        used.get(cls).add(file);
      }
    }
  }
}

const resolvable = [];
const unresolved = [];
const invalid = [];
for (const [cls, where] of used) {
  const rule = generateCSSForClass(cls);
  if (!rule) {
    unresolved.push([cls, [...where]]);
    continue;
  }
  const why = selectorProblem(rule.css);
  if (why) invalid.push([cls, [...where], why]);
  else resolvable.push([cls, [...where]]);
}
const byName = ([a], [b]) => a.localeCompare(b);
resolvable.sort(byName);
unresolved.sort(byName);
invalid.sort(byName);

if (WRITE) {
  // 12 classes per line keeps the file readable and each attribute short.
  const lines = [];
  for (let i = 0; i < resolvable.length; i += 12) {
    lines.push(
      `    <i className="${resolvable.slice(i, i + 12).map(([c]) => c).join(" ")}" />`
    );
  }
  const body = `/* AUTO-GENERATED by scripts/zee-audit.mjs — do not edit by hand.
 *
 * The @zee-css/cli v1.0.0 scanner reads className="..." attributes only, so
 * classes written inside a conditional expression never reach the generator.
 * This component restates every class the project uses as a plain attribute,
 * which is all the scanner needs. It is never rendered.
 *
 * ${resolvable.length} classes across ${files.length} files.
 */
export function ZeeSafelist() {
  return (
    <>
${lines.join("\n")}
    </>
  );
}
`;
  writeFileSync(SAFELIST, body, "utf8");
  console.log(`safelist: ${resolvable.length} classes -> ${SAFELIST}`);
  if (invalid.length) {
    console.log(`\n${invalid.length} class(es) generate an unparseable selector:`);
    for (const [c, w, why] of invalid) console.log(`  ${c}  — ${why}  (${w.join(", ")})`);
  }
  if (unresolved.length) {
    console.log(`\n${unresolved.length} class(es) have no rule in @zee-css/core:`);
    for (const [c, w] of unresolved) console.log(`  ${c}  (${w.join(", ")})`);
  }
} else {
  console.log(`${files.length} files, ${used.size} distinct classes\n`);
  console.log(`UNRESOLVED (${unresolved.length}) — no rule in @zee-css/core`);
  for (const [c, w] of unresolved) console.log(`  ${c}\n      ${w.join(", ")}`);

  console.log(`\nUNPARSEABLE SELECTOR (${invalid.length}) — the CSS is generated but no browser accepts it`);
  for (const [c, w, why] of invalid) console.log(`  ${c}  — ${why}\n      ${w.join(", ")}`);

  if (!existsSync(SHEET)) {
    console.log(`\n${SHEET} not found — run npm run zee:build first.`);
    process.exit(unresolved.length || invalid.length ? 1 : 0);
  }
  const sheet = readFileSync(SHEET, "utf8");
  // Ask the generator what selector it writes, then look for that exact string
  // -- no second copy of the escaping rules to keep in sync.
  const selectorOf = (cls) => {
    const css = generateCSSForClass(cls)?.css ?? "";
    let prelude = css;
    for (let i = 0; i < 4; i++) prelude = prelude.replace(/\{[^{}]*\}/g, "{}");
    const m = [...prelude.matchAll(/\.((?:\\[0-9a-fA-F]{1,6} |\\.|[^\s{,:>+~()])+)/g)];
    return m.length ? "." + m[m.length - 1][1] : null;
  };
  const missing = resolvable.filter(([c]) => {
    const sel = selectorOf(c);
    return sel ? !sheet.includes(sel) : false;
  });
  console.log(`\nMISSING FROM ${SHEET} (${missing.length})`);
  for (const [c] of missing) console.log(`  ${c}`);
  process.exit(unresolved.length || invalid.length || missing.length ? 1 : 0);
}
