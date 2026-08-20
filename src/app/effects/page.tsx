import { PageHeader, Section, Demo, RuleTable } from "../_components/ui";

export default function EffectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Utilities"
        title="Effects, Borders &amp; Filters"
        intro="Shadows, focus rings, borders and radii, dividers, outlines, CSS filters and backdrop filters — everything that decorates a box rather than positioning it."
      />

      <Section
        id="shadow"
        title="Shadows"
        description="Seven steps from sm to 2xl, plus an inset shadow and a none reset."
      >
        <Demo code="shadow-sm / shadow / shadow-md / shadow-lg / shadow-xl / shadow-2xl">
          <div className="flex flex-wrap gap-5 pa-2">
            <div className="w-24 h-20 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-caption text-slate-600 dark:text-slate-400">sm</div>
            <div className="w-24 h-20 rounded-xl bg-white dark:bg-slate-800 shadow flex items-center justify-center text-caption text-slate-600 dark:text-slate-400">base</div>
            <div className="w-24 h-20 rounded-xl bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-caption text-slate-600 dark:text-slate-400">md</div>
            <div className="w-24 h-20 rounded-xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center text-caption text-slate-600 dark:text-slate-400">lg</div>
            <div className="w-24 h-20 rounded-xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center text-caption text-slate-600 dark:text-slate-400">xl</div>
            <div className="w-24 h-20 rounded-xl bg-white dark:bg-slate-800 shadow-2xl flex items-center justify-center text-caption text-slate-600 dark:text-slate-400">2xl</div>
          </div>
        </Demo>

        <Demo code="shadow-inner">
          <div className="w-40 h-20 rounded-xl bg-slate-100 dark:bg-slate-800 shadow-inner flex items-center justify-center text-caption text-slate-600 dark:text-slate-400">
            shadow-inner
          </div>
        </Demo>

        <RuleTable classes={["shadow", "shadow-sm", "shadow-md", "shadow-lg", "shadow-xl", "shadow-2xl", "shadow-inner", "shadow-none"]} />
      </Section>

      <Section
        id="ring"
        title="Rings"
        description="Rings are box-shadow outlines that do not affect layout — the usual choice for focus states. Width, color, inset and offset are separate utilities."
      >
        <Demo code="ring-2 ring-indigo-500 / ring-4 ring-offset-2 / ring-inset">
          <div className="flex flex-wrap gap-6 pa-2">
            <div className="pa-4 rounded-lg bg-white dark:bg-slate-800 ring-2 ring-indigo-500 text-caption text-slate-700 dark:text-slate-300">ring-2</div>
            <div className="pa-4 rounded-lg bg-white dark:bg-slate-800 ring-4 ring-purple-500 ring-offset-2 text-caption text-slate-700 dark:text-slate-300">ring-4 + offset-2</div>
            <div className="pa-4 rounded-lg bg-white dark:bg-slate-800 ring-4 ring-pink-500 ring-inset text-caption text-slate-700 dark:text-slate-300">ring-inset</div>
          </div>
        </Demo>

        <Demo code="focus:ring-2 focus:ring-cyan-500 outline-none" note="click the input">
          <input
            type="text"
            placeholder="focus me"
            className="px-4 py-3 rounded-lg w-full max-w-72 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-body2 text-slate-800 dark:text-slate-200 outline-none focus:ring-2 focus:ring-cyan-500 placeholder:text-slate-400 transition-shadow duration-150"
          />
        </Demo>

        <RuleTable classes={["ring", "ring-0", "ring-1", "ring-2", "ring-4", "ring-8", "ring-inset", "ring-indigo-500", "ring-offset-2", "ring-offset-white"]} />
      </Section>

      <Section
        id="border"
        title="Borders &amp; radius"
        description="Width, side, style and color are independent. Radius has per-side and RTL-safe per-corner variants."
      >
        <Demo code="border-2 border-dashed / border-l-4 / border-4 border-dotted">
          <div className="flex flex-wrap gap-4">
            <div className="pa-4 rounded-lg border border-slate-300 dark:border-slate-700 text-caption text-slate-700 dark:text-slate-300">border</div>
            <div className="pa-4 rounded-lg border-2 border-dashed border-blue-400 text-caption text-slate-700 dark:text-slate-300">border-2 dashed</div>
            <div className="pa-4 rounded-lg border-4 border-dotted border-violet-400 text-caption text-slate-700 dark:text-slate-300">border-4 dotted</div>
            <div className="pa-4 border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-950 text-caption text-slate-700 dark:text-slate-300">border-l-4</div>
          </div>
        </Demo>

        <Demo code="rounded-none / rounded-sm / rounded / rounded-lg / rounded-2xl / rounded-full">
          <div className="flex flex-wrap gap-4">
            <div className="w-24 h-16 bg-indigo-500 text-white text-caption flex items-center justify-center rounded-none">none</div>
            <div className="w-24 h-16 bg-indigo-500 text-white text-caption flex items-center justify-center rounded-sm">sm</div>
            <div className="w-24 h-16 bg-indigo-500 text-white text-caption flex items-center justify-center rounded">base</div>
            <div className="w-24 h-16 bg-indigo-500 text-white text-caption flex items-center justify-center rounded-lg">lg</div>
            <div className="w-24 h-16 bg-indigo-500 text-white text-caption flex items-center justify-center rounded-2xl">2xl</div>
            <div className="w-24 h-16 bg-indigo-500 text-white text-caption flex items-center justify-center rounded-full">full</div>
          </div>
        </Demo>

        <Demo code="rounded-t-2xl / rounded-b-2xl">
          <div className="flex gap-4">
            <div className="w-28 h-16 bg-purple-500 rounded-t-2xl" />
            <div className="w-28 h-16 bg-purple-500 rounded-b-2xl" />
            <div className="w-28 h-16 bg-purple-500 rounded-l-2xl" />
            <div className="w-28 h-16 bg-purple-500 rounded-r-2xl" />
          </div>
        </Demo>

        <RuleTable classes={["border", "border-0", "border-2", "border-4", "border-8", "border-none", "border-t", "border-b", "border-l", "border-r", "border-s", "border-e", "border-l-4", "border-t-2", "border-x", "border-y-4", "border-solid", "border-dashed", "border-dotted", "border-double", "rounded", "rounded-none", "rounded-sm", "rounded-md", "rounded-lg", "rounded-xl", "rounded-2xl", "rounded-3xl", "rounded-full", "rounded-t-lg", "rounded-b-lg", "rounded-s-lg", "rounded-e-lg"]} />
      </Section>

      <Section
        id="divide"
        title="Dividers"
        description="divide-* puts a border between siblings without touching the first one — no last-child resets needed."
      >
        <Demo code="divide-y divide-slate-200">
          <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="pa-4 text-caption text-slate-700 dark:text-slate-300">Row one</div>
            <div className="pa-4 text-caption text-slate-700 dark:text-slate-300">Row two</div>
            <div className="pa-4 text-caption text-slate-700 dark:text-slate-300">Row three</div>
          </div>
        </Demo>

        <Demo code="row divide-x divide-slate-300">
          <div className="row divide-x divide-slate-300 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="pa-4 text-caption text-slate-700 dark:text-slate-300">Col A</div>
            <div className="pa-4 text-caption text-slate-700 dark:text-slate-300">Col B</div>
            <div className="pa-4 text-caption text-slate-700 dark:text-slate-300">Col C</div>
          </div>
        </Demo>

        <RuleTable classes={["divide-x", "divide-y", "divide-x-2", "divide-y-4", "divide-slate-300", "divide-dashed", "divide-none"]} />
      </Section>

      <Section
        id="outline"
        title="Outlines"
        description="Real CSS outlines, which sit outside the border box and follow the border radius."
      >
        <Demo code="outline outline-2 outline-offset-2 outline-blue-500">
          <div className="pa-4 inline-block rounded-lg outline outline-2 outline-offset-2 outline-blue-500 text-caption text-slate-700 dark:text-slate-300">
            outlined
          </div>
        </Demo>

        <RuleTable classes={["outline", "outline-none", "outline-0", "outline-1", "outline-2", "outline-4", "outline-8", "outline-dashed", "outline-dotted", "outline-double", "outline-offset-2", "outline-blue-500"]} />
      </Section>

      <Section
        id="filters"
        title="Filters"
        description="Blur, brightness, contrast, saturation, grayscale, sepia, invert and hue rotation, each on a numeric or named scale."
      >
        <Demo code="blur-sm / brightness-150 / contrast-200 / saturate-200 / grayscale / sepia / invert / hue-rotate-90">
          <div className="flex flex-wrap gap-4">
              <div className="column items-center gap-2">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-orange-400 via-rose-500 to-purple-600" />
                <span className="text-caption font-mono text-slate-500 dark:text-slate-500">none</span>
              </div>
              <div className="column items-center gap-2">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-orange-400 via-rose-500 to-purple-600 blur-sm" />
                <span className="text-caption font-mono text-slate-500 dark:text-slate-500">blur-sm</span>
              </div>
              <div className="column items-center gap-2">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-orange-400 via-rose-500 to-purple-600 brightness-150" />
                <span className="text-caption font-mono text-slate-500 dark:text-slate-500">brightness-150</span>
              </div>
              <div className="column items-center gap-2">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-orange-400 via-rose-500 to-purple-600 contrast-200" />
                <span className="text-caption font-mono text-slate-500 dark:text-slate-500">contrast-200</span>
              </div>
              <div className="column items-center gap-2">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-orange-400 via-rose-500 to-purple-600 saturate-200" />
                <span className="text-caption font-mono text-slate-500 dark:text-slate-500">saturate-200</span>
              </div>
              <div className="column items-center gap-2">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-orange-400 via-rose-500 to-purple-600 grayscale" />
                <span className="text-caption font-mono text-slate-500 dark:text-slate-500">grayscale</span>
              </div>
              <div className="column items-center gap-2">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-orange-400 via-rose-500 to-purple-600 sepia" />
                <span className="text-caption font-mono text-slate-500 dark:text-slate-500">sepia</span>
              </div>
              <div className="column items-center gap-2">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-orange-400 via-rose-500 to-purple-600 invert" />
                <span className="text-caption font-mono text-slate-500 dark:text-slate-500">invert</span>
              </div>
              <div className="column items-center gap-2">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-orange-400 via-rose-500 to-purple-600 hue-rotate-90" />
                <span className="text-caption font-mono text-slate-500 dark:text-slate-500">hue-rotate-90</span>
              </div>
          </div>
        </Demo>

        <RuleTable classes={["blur", "blur-none", "blur-sm", "blur-md", "blur-lg", "blur-xl", "blur-3xl", "brightness-50", "brightness-150", "contrast-125", "saturate-150", "grayscale", "grayscale-0", "sepia", "invert", "hue-rotate-90", "-hue-rotate-45"]} />
      </Section>

      <Section
        id="backdrop"
        title="Backdrop filters"
        description="The same filter vocabulary applied to whatever sits behind the element — the frosted-glass effect."
      >
        <Demo code="backdrop-blur-md bg-white/… over a gradient">
          <div className="relative h-40 rounded-xl overflow-hidden bg-gradient-to-br from-fuchsia-500 via-orange-400 to-cyan-400">
            <div className="absolute inset-8 rounded-xl backdrop-blur-md backdrop-brightness-125 border border-white flex items-center justify-center text-white text-body2 font-semibold">
              backdrop-blur-md
            </div>
          </div>
        </Demo>

        <RuleTable classes={["backdrop-blur", "backdrop-blur-sm", "backdrop-blur-md", "backdrop-blur-xl", "backdrop-brightness-75", "backdrop-contrast-125", "backdrop-grayscale", "backdrop-invert", "backdrop-opacity-50", "backdrop-saturate-150", "backdrop-sepia"]} />
      </Section>
    </>
  );
}
