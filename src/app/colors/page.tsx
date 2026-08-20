import { colorScale, resolveColor } from "@zee-css/core";
import { PageHeader, Section, Demo, RuleTable, Code, Callout } from "../_components/ui";

const FAMILIES = [
  "slate", "gray", "zinc", "neutral", "stone",
  "red", "orange", "amber", "yellow", "lime",
  "green", "emerald", "teal", "cyan", "sky",
  "blue", "indigo", "violet", "purple", "fuchsia",
  "pink", "rose",
];

const SHADES = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];

const THEME_TOKENS = ["primary", "secondary", "accent", "positive", "negative", "info", "warning"];

export default function ColorsPage() {
  const total = Object.keys(colorScale).length;

  return (
    <>
      <PageHeader
        eyebrow="Utilities"
        title="Colors"
        intro={`Twenty-two families across eleven shades, seven CSS-variable theme tokens, and the usual keywords — ${total} entries in all. Any of them works anywhere a color is accepted.`}
      />

      <Section
        id="prefixes"
        title="Where colors apply"
        description="The same color name is shared by every color-consuming utility, so learning the palette once covers the whole framework."
      >
        <Demo code="bg-emerald-500 / text-emerald-700 / border-emerald-400 / ring-emerald-300">
          <div className="flex flex-wrap gap-3">
            <div className="pa-4 rounded-lg bg-emerald-500 text-white text-caption">bg-</div>
            <div className="pa-4 rounded-lg bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 text-caption font-semibold border border-slate-200 dark:border-slate-800">
              text-
            </div>
            <div className="pa-4 rounded-lg border-2 border-emerald-400 text-caption text-slate-700 dark:text-slate-300">
              border-
            </div>
            <div className="pa-4 rounded-lg ring-4 ring-emerald-300 text-caption text-slate-700 dark:text-slate-300">
              ring-
            </div>
            <div className="pa-4 rounded-lg divide-y divide-emerald-300 text-caption text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
              <p className="pb-2">divide-</p>
              <p className="pt-2">between rows</p>
            </div>
          </div>
        </Demo>

        <RuleTable
          caption="Every color-aware prefix, resolved live"
          classes={["bg-emerald-500", "text-emerald-700", "border-emerald-400", "ring-emerald-300", "ring-offset-emerald-100", "divide-emerald-300", "outline-emerald-500", "from-emerald-400", "via-emerald-500", "to-emerald-600", "fill-emerald-500", "stroke-emerald-600", "accent-emerald-500", "caret-emerald-500"]}
        />
      </Section>

      <Section
        id="palette"
        title="The full palette"
        description="Swatches below read straight out of colorScale in @zee-css/core — the same object the generator consults, so nothing here can drift from the library."
      >
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 pa-5 overflow-x-auto zc-scroll">
          <div className="column gap-3 min-w-[42rem]">
            <div className="flex gap-2 items-center">
              <span className="w-20 shrink-0" />
              {SHADES.map((s) => (
                <span key={s} className="flex-1 text-center text-caption font-mono text-slate-400 dark:text-slate-600">
                  {s}
                </span>
              ))}
            </div>
            {FAMILIES.map((fam) => (
              <div key={fam} className="flex gap-2 items-center">
                <span className="w-20 shrink-0 text-caption font-mono text-slate-600 dark:text-slate-400">
                  {fam}
                </span>
                {SHADES.map((s) => {
                  const hex = resolveColor(`${fam}-${s}`);
                  return (
                    <span
                      key={s}
                      title={`bg-${fam}-${s} — ${hex}`}
                      style={{ background: hex ?? "transparent" }}
                      className="flex-1 h-8 rounded-md border border-slate-200 dark:border-slate-800"
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        id="theme"
        title="Theme tokens"
        description="Seven semantic names resolve to CSS custom properties instead of hex literals, so you can retheme an app at runtime without regenerating any CSS."
      >
        <Demo code="bg-primary / bg-accent / bg-positive / bg-negative">
          <div className="flex flex-wrap gap-3">
            <div className="pa-4 rounded-lg bg-primary text-white text-caption">primary</div>
            <div className="pa-4 rounded-lg bg-secondary text-white text-caption">secondary</div>
            <div className="pa-4 rounded-lg bg-accent text-white text-caption">accent</div>
            <div className="pa-4 rounded-lg bg-positive text-white text-caption">positive</div>
            <div className="pa-4 rounded-lg bg-negative text-white text-caption">negative</div>
            <div className="pa-4 rounded-lg bg-info text-white text-caption">info</div>
            <div className="pa-4 rounded-lg bg-warning text-white text-caption">warning</div>
          </div>
        </Demo>

        <RuleTable classes={THEME_TOKENS.map((t) => `bg-${t}`)} />

        <Code>{`/* src/app/globals.css — change these and every
   bg-primary / text-accent / ring-info updates instantly. */
:root {
  --z-primary:   #6366f1;
  --z-secondary: #8b5cf6;
  --z-accent:    #ec4899;
  --z-positive:  #22c55e;
  --z-negative:  #ef4444;
  --z-info:      #06b6d4;
  --z-warning:   #f59e0b;
}`}</Code>
      </Section>

      <Section
        id="keywords"
        title="Keywords &amp; opacity"
        description="The CSS-wide keywords are in the scale too, and opacity is a separate utility on a 0–100 range."
      >
        <Demo code="opacity-100 / 75 / 50 / 25 / 10">
          <div className="flex flex-wrap gap-3">
            <div className="pa-4 rounded-lg bg-indigo-600 text-white text-caption opacity-100">100</div>
            <div className="pa-4 rounded-lg bg-indigo-600 text-white text-caption opacity-75">75</div>
            <div className="pa-4 rounded-lg bg-indigo-600 text-white text-caption opacity-50">50</div>
            <div className="pa-4 rounded-lg bg-indigo-600 text-white text-caption opacity-25">25</div>
            <div className="pa-4 rounded-lg bg-indigo-600 text-white text-caption opacity-10">10</div>
          </div>
        </Demo>

        <RuleTable classes={["bg-white", "bg-black", "bg-transparent", "bg-current", "text-inherit", "text-transparent", "opacity-0", "opacity-50", "opacity-100"]} />
      </Section>

      <Callout tone="info" title="Adding your own colors">
        <code className="font-mono">addColor(&quot;brand&quot;, &quot;#6366f1&quot;)</code> registers a
        new name for every color-aware utility at once —{" "}
        <code className="font-mono">bg-brand</code>,{" "}
        <code className="font-mono">text-brand</code>,{" "}
        <code className="font-mono">ring-brand</code>, and the rest. The
        Programmatic API page has a working example.
      </Callout>
    </>
  );
}
