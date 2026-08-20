import {
  generateCSS,
  generateCSSForClass,
  addColor,
  addBreakpoint,
  setBreakpoint,
  clearCache,
  breakpoints,
  rules,
  colorScale,
} from "@zee-css/core";
import { PageHeader, Section, Demo, Code, Callout } from "../_components/ui";

/* ------------------------------------------------------------------
   Everything below runs on the server while this page renders, using
   the installed @zee-css/core. The output is not transcribed.
   ------------------------------------------------------------------ */

function liveExamples() {
  // --- generateCSSForClass -------------------------------------
  const single = generateCSSForClass("md:hover:bg-indigo-600")?.css ?? "";

  // --- generateCSS with options --------------------------------
  const pretty = generateCSS(["pa-4", "md:pa-8", "dark:text-white", "animate-spin"]);
  const minified = generateCSS(["pa-4", "md:pa-8", "hover:bg-blue-500"], { minify: true });
  const important = generateCSS(["pa-4", "text-red-500"], { important: true });
  const prefixed = generateCSS(["pa-4", "hover:bg-blue-500"], { prefix: "z-" });
  const darkClass = generateCSS(["dark:bg-slate-900", "dark:text-white"], { darkMode: "class" });

  // --- autoResponsive ------------------------------------------
  const fluidOff = generateCSS(["fs-sm", "fs-2xl", "text-h2"], { minify: true });
  const fluidOn = generateCSS(["fs-sm", "fs-2xl", "text-h2"], {
    minify: true,
    autoResponsive: true,
  });

  // --- addColor ------------------------------------------------
  addColor("brand", "#14b8a6");
  addColor("brand-dark", "#0f766e");
  clearCache();
  const brand = generateCSS(["bg-brand", "text-brand-dark", "ring-brand", "border-brand"]);

  // --- breakpoints ---------------------------------------------
  // Additive: a brand-new breakpoint, usable immediately as 3xl:*
  addBreakpoint("3xl", "1920px");
  clearCache();
  const newBp = generateCSSForClass("3xl:pa-12")?.css ?? "";

  // Override md, capture the result, then restore it so the rest of
  // this site keeps rendering against the stock breakpoints.
  const originalMd = breakpoints.md;
  setBreakpoint("md", "900px");
  clearCache();
  const movedBp = generateCSSForClass("md:pa-8")?.css ?? "";
  setBreakpoint("md", originalMd);
  clearCache();

  return {
    single, pretty, minified, important, prefixed, darkClass,
    fluidOff, fluidOn, brand, newBp, movedBp,
  };
}

export default function ApiPage() {
  const ex = liveExamples();

  return (
    <>
      <PageHeader
        eyebrow="Advanced"
        title="Programmatic API"
        intro={`@zee-css/core is a library first and a CLI second. ${rules.length} rule patterns and ${Object.keys(colorScale).length} colors are all reachable from TypeScript, so you can generate stylesheets, extend the palette and move breakpoints from your own build script.`}
      />

      <Section
        id="single"
        title="generateCSSForClass"
        description="Resolve one class to one rule. Returns null if nothing matches, which makes it a convenient validator."
      >
        <Code>{`import { generateCSSForClass } from "@zee-css/core";

generateCSSForClass("md:hover:bg-indigo-600")?.css;`}</Code>
        <Code>{ex.single.trim()}</Code>
      </Section>

      <Section
        id="many"
        title="generateCSS"
        description="Takes an array or a Set, deduplicates, preserves insertion order, groups media queries and collects any @keyframes the classes need."
      >
        <Code>{`generateCSS(["pa-4", "md:pa-8", "dark:text-white", "animate-spin"]);`}</Code>
        <Code>{ex.pretty.trim()}</Code>
      </Section>

      <Section
        id="options"
        title="GeneratorOptions"
        description="Five options, all optional. Each block below is the real output for the same input with a different option set."
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          <div className="column gap-2">
            <p className="text-caption font-mono text-indigo-700 dark:text-indigo-300">
              &#123; minify: true &#125;
            </p>
            <Code>{ex.minified.trim()}</Code>
          </div>
          <div className="column gap-2">
            <p className="text-caption font-mono text-indigo-700 dark:text-indigo-300">
              &#123; important: true &#125;
            </p>
            <Code>{ex.important.trim()}</Code>
          </div>
          <div className="column gap-2">
            <p className="text-caption font-mono text-indigo-700 dark:text-indigo-300">
              &#123; prefix: &quot;z-&quot; &#125;
            </p>
            <Code>{ex.prefixed.trim()}</Code>
          </div>
          <div className="column gap-2">
            <p className="text-caption font-mono text-indigo-700 dark:text-indigo-300">
              &#123; darkMode: &quot;class&quot; &#125;
            </p>
            <Code>{ex.darkClass.trim()}</Code>
          </div>
        </div>
      </Section>

      <Section
        id="fluid"
        title="autoResponsive"
        description="Rewrites every font-size as a clamp() that scales from a mobile floor to the desktop target. One option replaces a whole set of breakpoint overrides."
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          <div className="column gap-2">
            <p className="text-caption font-mono text-slate-500 dark:text-slate-500">off</p>
            <Code>{ex.fluidOff.trim()}</Code>
          </div>
          <div className="column gap-2">
            <p className="text-caption font-mono text-indigo-700 dark:text-indigo-300">
              autoResponsive: true
            </p>
            <Code>{ex.fluidOn.trim()}</Code>
          </div>
        </div>
      </Section>

      <Section
        id="colors"
        title="addColor &amp; setColor"
        description="Register a name once and every color-aware utility picks it up — background, text, border, ring, divide, outline, gradient stops, fill, stroke, accent and caret. Always clearCache() afterwards."
      >
        <Code>{`addColor("brand", "#14b8a6");
addColor("brand-dark", "#0f766e");
clearCache();

generateCSS(["bg-brand", "text-brand-dark", "ring-brand", "border-brand"]);`}</Code>
        <Code>{ex.brand.trim()}</Code>

        <Demo code="bg-[rgb(20,184,166)] — the same color, via an arbitrary class" plain>
          <div className="flex flex-wrap gap-3">
            <div className="pa-4 rounded-lg bg-[rgb(20,184,166)] text-white text-caption">
              rgb(20,184,166)
            </div>
            <div className="pa-4 rounded-lg bg-[rgb(15,118,110)] text-white text-caption">
              rgb(15,118,110)
            </div>
            <div className="pa-4 rounded-lg border-2 border-teal-500 text-caption text-slate-700 dark:text-slate-300">
              border-teal-500
            </div>
          </div>
        </Demo>

        <Callout tone="warn" title="The CLI cannot see a runtime-registered color">
          <code className="font-mono">addColor</code> runs inside{" "}
          <em>this page&apos;s</em> render, so the CSS above is real — but{" "}
          <code className="font-mono">zee-css</code> the CLI never executes your
          app code, so it would emit nothing for a{" "}
          <code className="font-mono">bg-brand</code> class in your markup. The
          swatches therefore use arbitrary values instead — in rgb() form,
          because a hex value produces a selector CSS parsers reject. To get real{" "}
          <code className="font-mono">bg-brand</code> classes, register the color
          in the same script that generates the stylesheet — the build script at
          the bottom of this page does exactly that.
        </Callout>

      </Section>

      <Section
        id="breakpoints"
        title="setBreakpoint &amp; addBreakpoint"
        description="addBreakpoint creates a new prefix and is a no-op if the name is taken. setBreakpoint overrides an existing one. Both need a clearCache() to take effect."
      >
        <Code>{`addBreakpoint("3xl", "1920px");
clearCache();
generateCSSForClass("3xl:pa-12")?.css;`}</Code>
        <Code>{ex.newBp.trim()}</Code>

        <Code>{`setBreakpoint("md", "900px");   // was 768px
clearCache();
generateCSSForClass("md:pa-8")?.css;`}</Code>
        <Code>{ex.movedBp.trim()}</Code>

        <Callout tone="info" title="This page restores what it changes">
          The md override above is reverted immediately after the snippet is
          captured, so the rest of this site still renders against the stock
          768px breakpoint.
        </Callout>
      </Section>

      <Section
        id="script"
        title="A build script that replaces the CLI"
        description="The CLI now covers dark mode, fluid type, prefixes and custom content globs. What it still cannot do is run your code — so if you register colors or breakpoints at runtime, generate the stylesheet from the same script that registers them."
      >
        <Code>{`// scripts/build-css.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { glob } from "glob";
import {
  generateCSS, addColor, addBreakpoint, clearCache,
} from "@zee-css/core";

// 1. Extend the framework however you like
addColor("brand", "#14b8a6");
addBreakpoint("3xl", "1920px");
clearCache();

// 2. Scan your sources for class names
const files = await glob("src/**/*.{tsx,ts,jsx,js,html,mdx}", {
  ignore: ["**/node_modules/**"],
});

const found = new Set();
for (const file of files) {
  const src = readFileSync(file, "utf8");
  for (const m of src.matchAll(/class(?:Name)?=["'\`]([^"'\`]+)["'\`]/g)) {
    for (const cls of m[1].split(/\\s+/)) if (cls) found.add(cls);
  }
}

// 3. Generate with the options you actually want
const css = generateCSS(found, {
  darkMode: "class",
  autoResponsive: true,
  minify: process.env.NODE_ENV === "production",
});

mkdirSync(dirname("src/app/zee.css"), { recursive: true });
writeFileSync("src/app/zee.css", css, "utf8");
console.log(\`\${found.size} classes -> src/app/zee.css\`);`}</Code>

        <Callout tone="info" title="Full export surface">
          <code className="font-mono">
            generateCSS, generateCSSForClass, clearCache, rules, colorScale,
            resolveColor, addColor, setColor, resolveSpacing, resolveSizing,
            breakpoints, setBreakpoint, addBreakpoint, stateVariants,
            spacingScale, spacingNames, fontSizeScale, fluidFontScale,
            fontWeightScale, lineHeightScale, letterSpacingScale, opacityScale,
            shadowScale, blurScale, borderRadiusScale
          </code>
        </Callout>
      </Section>
    </>
  );
}
