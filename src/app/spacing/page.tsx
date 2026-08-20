import { PageHeader, Section, Demo, RuleTable, Callout } from "../_components/ui";

export default function SpacingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Utilities"
        title="Spacing"
        intro="Padding, margin, negative margin, sibling spacing and RTL-safe logical properties. The scale is rem-based on a 4px baseline, with named aliases layered on top."
      />

      <Section
        id="scale"
        title="The scale"
        description="Numeric steps run 0, px, 0.5, 1 … 96. Named steps (xs through 4xl) sit alongside them and are handy for component padding."
      >
        <RuleTable
          caption="Generated live by @zee-css/core"
          classes={["pa-0", "pa-px", "pa-0.5", "pa-1", "pa-2", "pa-4", "pa-6", "pa-8", "pa-12", "pa-16", "pa-xs", "pa-sm", "pa-md", "pa-lg", "pa-xl", "pa-2xl", "pa-3xl", "pa-4xl"]}
        />
      </Section>

      <Section
        id="padding"
        title="Padding"
        description="pa- sets all sides. px-/py- set an axis; pt-/pr-/pb-/pl- set one side."
      >
        <Demo code="pa-8">
          <div className="bg-indigo-100 dark:bg-indigo-950 rounded-lg inline-block">
            <div className="pa-8">
              <div className="bg-indigo-500 text-white text-caption pa-2 rounded">
                pa-8
              </div>
            </div>
          </div>
        </Demo>

        <Demo code="px-10 py-3">
          <div className="bg-purple-100 dark:bg-purple-950 rounded-lg inline-block">
            <div className="px-10 py-3">
              <div className="bg-purple-500 text-white text-caption pa-2 rounded">
                px-10 py-3
              </div>
            </div>
          </div>
        </Demo>

        <Demo code="pt-2 pr-4 pb-8 pl-16">
          <div className="bg-pink-100 dark:bg-pink-950 rounded-lg inline-block">
            <div className="pt-2 pr-4 pb-8 pl-16">
              <div className="bg-pink-500 text-white text-caption pa-2 rounded">
                four different sides
              </div>
            </div>
          </div>
        </Demo>
      </Section>

      <Section
        id="margin"
        title="Margin"
        description="Same shape as padding with an ma- prefix, plus auto for centering and a negative variant prefixed with a hyphen."
      >
        <Demo code="mx-auto max-w-56">
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg pa-4">
            <div className="mx-auto max-w-56 pa-3 rounded bg-emerald-500 text-white text-caption text-center">
              mx-auto centers me
            </div>
          </div>
        </Demo>

        <Demo code="-mt-6" note="negative margins pull an element back">
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg pa-6">
            <div className="pa-4 rounded bg-slate-300 dark:bg-slate-700 text-caption">
              first block
            </div>
            <div className="-mt-6 ml-8 pa-4 rounded bg-amber-500 text-white text-caption shadow-lg">
              -mt-6 overlaps upward
            </div>
          </div>
        </Demo>
      </Section>

      <Section
        id="space"
        title="Space between"
        description="space-x-* and space-y-* add margin to every child except the first, so you do not have to touch the children themselves."
      >
        <Demo code="flex space-x-4">
          <div className="flex space-x-4">
            <div className="pa-4 rounded bg-cyan-500 text-white text-caption">A</div>
            <div className="pa-4 rounded bg-cyan-500 text-white text-caption">B</div>
            <div className="pa-4 rounded bg-cyan-500 text-white text-caption">C</div>
          </div>
        </Demo>

        <Demo code="space-y-3">
          <div className="space-y-3">
            <div className="pa-3 rounded bg-teal-500 text-white text-caption">row one</div>
            <div className="pa-3 rounded bg-teal-500 text-white text-caption">row two</div>
            <div className="pa-3 rounded bg-teal-500 text-white text-caption">row three</div>
          </div>
        </Demo>

        <RuleTable classes={["space-x-4", "space-y-3", "space-x-reverse", "space-y-reverse"]} />
      </Section>

      <Section
        id="logical"
        title="Logical properties (RTL-safe)"
        description="ps-/pe- and ms-/me- map to padding-inline-start/end and margin-inline-start/end, so they flip automatically in right-to-left documents."
      >
        <Demo code="ps-12 pe-3" note="try dir=&quot;rtl&quot; on the container">
          <div className="bg-violet-100 dark:bg-violet-950 rounded-lg inline-block">
            <div className="ps-12 pe-3 py-3">
              <div className="bg-violet-500 text-white text-caption pa-2 rounded">
                inline-start gets the big padding
              </div>
            </div>
          </div>
        </Demo>

        <RuleTable classes={["ps-4", "pe-4", "ms-4", "me-4", "ms-auto", "me-auto"]} />
      </Section>

      <Section id="gap" title="Gap" description="Gap works on both flex and grid containers.">
        <Demo code="flex gap-6">
          <div className="flex gap-6">
            <div className="pa-4 rounded bg-rose-500 text-white text-caption">one</div>
            <div className="pa-4 rounded bg-rose-500 text-white text-caption">two</div>
            <div className="pa-4 rounded bg-rose-500 text-white text-caption">three</div>
          </div>
        </Demo>
        <RuleTable classes={["gap-4", "gap-x-8", "gap-y-2"]} />
      </Section>

      <Callout tone="info" title="Named steps mean different things per family">
        <code className="font-mono">pa-lg</code> is a spacing step (2rem), while{" "}
        <code className="font-mono">max-w-lg</code> is a measure (32rem) — the
        named min/max scale is deliberately separate from the spacing scale, and
        deliberately absent from <code className="font-mono">w-</code> and{" "}
        <code className="font-mono">h-</code>, where a t-shirt size would not
        mean anything. In 1.0.0 the min/max scale did not exist at all and{" "}
        <code className="font-mono">max-w-lg</code> returned no rule.
      </Callout>
    </>
  );
}
