import { PageHeader, Section, Demo, RuleTable, Code, Callout } from "../_components/ui";

export default function ArbitraryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Utilities"
        title="Arbitrary values &amp; !important"
        intro="Two escape hatches for when the scale does not have what you need: square-bracket values for one-off measurements, and a leading bang to raise a single class above the cascade."
      />

      <Section
        id="arbitrary"
        title="Arbitrary values"
        description="If a class does not match any rule, the generator falls back to square-bracket syntax and maps the prefix to a CSS property directly."
      >
        <Demo code="w-[220px] h-[70px]">
          <div className="w-[220px] h-[70px] rounded-xl bg-indigo-500 text-white text-caption flex items-center justify-center">
            exactly 220 x 70
          </div>
        </Demo>

        <Demo code="p-[13px] text-[#e74c3c] bg-[#fdf2f0]">
          <div className="p-[13px] text-[#e74c3c] bg-[#fdf2f0] rounded-lg text-caption font-semibold inline-block">
            values the scale does not have
          </div>
        </Demo>

        <Demo code="text-[rgb(231,76,60)] bg-[rgb(253,242,240)]" note="any CSS color notation works">
          <div className="p-[13px] text-[rgb(231,76,60)] bg-[rgb(253,242,240)] rounded-lg text-caption font-semibold inline-block">
            rgb() instead of hex
          </div>
        </Demo>

        <Demo code="max-w-[42ch] leading-[1.9]">
          <p className="max-w-[42ch] leading-[1.9] text-caption text-slate-700 dark:text-slate-300">
            A measure set in ch units and a line height set as a raw ratio. Both
            are perfectly ordinary CSS values that no utility scale would sensibly
            enumerate, which is exactly what the bracket syntax is for.
          </p>
        </Demo>

        <Demo code="rounded-[28px] tracking-[0.3em] z-[60]">
          <div className="rounded-[28px] tracking-[0.3em] pa-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-caption uppercase inline-block">
            custom radius
          </div>
        </Demo>

        <RuleTable
          caption="Arbitrary values resolved live by the generator"
          classes={["w-[220px]", "h-[70px]", "min-w-[10rem]", "max-w-[42ch]", "p-[13px]", "px-[18px]", "mt-[3px]", "top-[7px]", "inset-[2px]", "gap-[9px]", "gap-x-[5px]", "text-[#e74c3c]", "bg-[#fdf2f0]", "text-[rgb(231,76,60)]", "border-[3px]", "rounded-[28px]", "opacity-[0.42]", "z-[60]", "basis-[240px]", "tracking-[0.3em]", "leading-[1.9]", "indent-[2ch]"]}
        />

        <Callout tone="info" title="Escaping is what makes these work">
          Everything outside <code className="font-mono">[A-Za-z0-9_-]</code> is
          backslash-escaped in the selector, so{" "}
          <code className="font-mono">bg-[#14b8a6]</code> becomes{" "}
          <code className="font-mono">.bg-\[\#14b8a6\]</code>. Version 1.0.0
          escaped only <code className="font-mono">[ ] : . / ( ) , !</code> and
          left <code className="font-mono">#</code> and{" "}
          <code className="font-mono">%</code> bare, which meant any hex or{" "}
          <code className="font-mono">hsl()</code> arbitrary value produced a
          rule no parser would accept — Turbopack failed the build outright.
        </Callout>
      </Section>

      <Section
        id="prefixes"
        title="Which prefixes accept brackets"
        description="Arbitrary values are not universal — a fixed map decides which prefix becomes which CSS property. Anything outside the map returns no rule."
      >
        <Code>{`w  h  min-w  max-w  min-h  max-h
p  pt  pb  pl  pr  px  py
m  mt  mb  ml  mr  mx  my
top  right  bottom  left  inset
gap  gap-x  gap-y
text  bg  border  rounded  opacity  z
basis  tracking  leading  indent`}</Code>

        <Callout tone="warn" title="Padding uses p-, not pa-, inside brackets">
          The scale utility is <code className="font-mono">pa-4</code>, but the
          arbitrary form is <code className="font-mono">p-[13px]</code>.
          Likewise margin is <code className="font-mono">ma-4</code> against{" "}
          <code className="font-mono">m-[13px]</code>. Underscores in a bracket
          value become spaces, so{" "}
          <code className="font-mono">m-[0_auto]</code> is{" "}
          <code className="font-mono">margin: 0 auto</code>.
        </Callout>

        <RuleTable classes={["m-[0_auto]", "shadow-[0_0_0_3px_red]", "grid-cols-[1fr_2fr]"]} caption="The last two fall outside the map — they produce nothing." />
      </Section>

      <Section
        id="important"
        title="Per-class !important"
        description="A leading exclamation mark marks one class important, without turning on the global --important flag for the whole stylesheet."
      >
        <Demo code="!pa-8" note="wins over the pa-2 written after it">
          <div className="!pa-8 pa-2 rounded-xl bg-amber-100 dark:bg-amber-950 inline-block">
            <div className="pa-2 rounded bg-amber-500 text-white text-caption">
              !pa-8 wins
            </div>
          </div>
        </Demo>

        <RuleTable classes={["!pa-4", "!text-red-500", "!md:pa-8", "!hover:bg-blue-600"]} />

        <Code>{`# Or make the whole sheet important, from the CLI:
zee-css . -o src/app/zee.css --important

# Or namespace every selector to avoid collisions:
zee-css . -o src/app/zee.css --prefix z-
#   .pa-4  ->  .z-pa-4`}</Code>
      </Section>
    </>
  );
}
