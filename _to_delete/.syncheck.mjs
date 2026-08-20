import ts from "/sessions/rcw-01lh1w3t7ddhptorvpg4bar7/mnt/zee-css-playground/node_modules/typescript/lib/typescript.js";
import { readFileSync, existsSync } from "node:fs";
import { glob } from "glob";
import path from "node:path";

const files = (await glob("src/**/*.{tsx,ts}", { ignore: ["**/node_modules/**"] })).sort();
let errs = 0;
for (const f of files) {
  const src = readFileSync(f, "utf8");
  const sf = ts.createSourceFile(f, src, ts.ScriptTarget.ESNext, true, ts.ScriptKind.TSX);
  const diags = sf.parseDiagnostics ?? [];
  for (const d of diags) {
    const { line, character } = sf.getLineAndCharacterOfPosition(d.start);
    console.log(`SYNTAX ${f}:${line + 1}:${character + 1} ${ts.flattenDiagnosticMessageText(d.messageText, " ")}`);
    errs++;
  }
  // relative import targets
  for (const m of src.matchAll(/from\s+"(\.[^"]+)"/g)) {
    const base = path.resolve(path.dirname(f), m[1]);
    const ok = [".tsx", ".ts", ".css", ""].some((e) => existsSync(base + e));
    if (!ok) { console.log(`IMPORT ${f} -> ${m[1]} NOT FOUND`); errs++; }
  }
}
console.log(`\n${files.length} files checked, ${errs} problem(s)`);
