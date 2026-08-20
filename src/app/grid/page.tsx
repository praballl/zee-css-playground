import { PageHeader, Section, Demo, RuleTable } from "../_components/ui";

export default function GridPage() {
  return (
    <>
      <PageHeader
        eyebrow="Utilities"
        title="Grid"
        intro="Native CSS Grid utilities for templates, spans, explicit placement and auto-flow — plus the classic 12-column flex grid that predates it."
      />

      <Section
        id="cols"
        title="Grid templates"
        description="grid-cols-{1-12} and grid-rows-{1-12} build equal tracks with minmax(0, 1fr), so long content cannot blow out a column."
      >
        <Demo code="grid grid-cols-3 gap-3">
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="pa-4 rounded-lg bg-indigo-500 text-white text-caption text-center">
                {n}
              </div>
            ))}
          </div>
        </Demo>

        <Demo code="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" note="responsive">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {["sm", "md", "lg", "xl"].map((n) => (
              <div key={n} className="pa-4 rounded-lg bg-purple-500 text-white text-caption text-center">
                {n}
              </div>
            ))}
          </div>
        </Demo>

        <RuleTable classes={["grid-cols-1", "grid-cols-3", "grid-cols-12", "grid-cols-none", "grid-cols-subgrid", "grid-rows-2", "grid-rows-6", "grid-rows-none", "grid-rows-subgrid"]} />
      </Section>

      <Section
        id="span"
        title="Spanning"
        description="col-span-* and row-span-* stretch an item across tracks. col-span-full and row-span-full take the whole line."
      >
        <Demo code="col-span-2 / col-span-full">
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-2 pa-4 rounded-lg bg-emerald-500 text-white text-caption text-center">
              col-span-2
            </div>
            <div className="pa-4 rounded-lg bg-emerald-400 text-white text-caption text-center">1</div>
            <div className="pa-4 rounded-lg bg-emerald-400 text-white text-caption text-center">1</div>
            <div className="col-span-full pa-4 rounded-lg bg-emerald-600 text-white text-caption text-center">
              col-span-full
            </div>
          </div>
        </Demo>

        <Demo code="row-span-2">
          <div className="grid grid-cols-3 grid-rows-2 gap-3">
            <div className="row-span-2 pa-4 rounded-lg bg-rose-600 text-white text-caption flex items-center justify-center">
              row-span-2
            </div>
            <div className="pa-4 rounded-lg bg-rose-400 text-white text-caption text-center">a</div>
            <div className="pa-4 rounded-lg bg-rose-400 text-white text-caption text-center">b</div>
            <div className="pa-4 rounded-lg bg-rose-400 text-white text-caption text-center">c</div>
            <div className="pa-4 rounded-lg bg-rose-400 text-white text-caption text-center">d</div>
          </div>
        </Demo>

        <RuleTable classes={["col-span-1", "col-span-6", "col-span-12", "col-span-full", "row-span-2", "row-span-full"]} />
      </Section>

      <Section
        id="placement"
        title="Explicit placement"
        description="col-start / col-end and row-start / row-end pin an item to specific grid lines."
      >
        <Demo code="col-start-2 col-end-4">
          <div className="grid grid-cols-4 gap-3">
            <div className="col-start-2 col-end-4 pa-4 rounded-lg bg-amber-500 text-white text-caption text-center">
              lines 2 to 4
            </div>
          </div>
        </Demo>

        <RuleTable classes={["col-start-1", "col-start-2", "col-end-4", "col-end-13", "row-start-2", "row-end-4"]} />
      </Section>

      <Section
        id="autoflow"
        title="Auto flow &amp; implicit tracks"
        description="grid-flow-* controls how items without an explicit position are placed; auto-cols-* and auto-rows-* size the tracks that get created for them."
      >
        <Demo code="grid-flow-col auto-cols-fr">
          <div className="grid grid-flow-col auto-cols-fr gap-3">
            <div className="pa-4 rounded-lg bg-sky-500 text-white text-caption text-center">1</div>
            <div className="pa-4 rounded-lg bg-sky-500 text-white text-caption text-center">2</div>
            <div className="pa-4 rounded-lg bg-sky-500 text-white text-caption text-center">3</div>
          </div>
        </Demo>

        <RuleTable classes={["grid-flow-row", "grid-flow-col", "grid-flow-dense", "grid-flow-row-dense", "grid-flow-col-dense", "auto-cols-auto", "auto-cols-min", "auto-cols-max", "auto-cols-fr", "auto-rows-auto", "auto-rows-min", "auto-rows-max", "auto-rows-fr"]} />
      </Section>

      <Section
        id="gap"
        title="Gap"
        description="One gap vocabulary shared by flex and grid, on the spacing scale."
      >
        <Demo code="grid grid-cols-3 gap-x-8 gap-y-2">
          <div className="grid grid-cols-3 gap-x-8 gap-y-2">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="pa-3 rounded bg-violet-500 text-white text-caption text-center">
                {n}
              </div>
            ))}
          </div>
        </Demo>
        <RuleTable classes={["gap-0", "gap-2", "gap-8", "gap-x-4", "gap-y-4", "gap-px"]} />
      </Section>

      <Section
        id="flexgrid"
        title="The 12-column flex grid"
        description="col-{1-12} and offset-{1-12} give percentage widths on a flex row — useful when you want the old grid semantics without CSS Grid."
      >
        <Demo code="row + col-8 / col-4">
          <div className="row gap-3">
            <div className="col-8 pa-4 rounded-lg bg-teal-600 text-white text-caption text-center">col-8</div>
            <div className="col-4 pa-4 rounded-lg bg-teal-400 text-white text-caption text-center">col-4</div>
          </div>
        </Demo>

        <Demo code="offset-4 col-4">
          <div className="row">
            <div className="offset-4 col-4 pa-4 rounded-lg bg-orange-500 text-white text-caption text-center">
              offset-4 col-4
            </div>
          </div>
        </Demo>

        <RuleTable classes={["col-1", "col-6", "col-12", "col-auto", "col-grow", "col-shrink", "offset-2", "offset-6"]} />
      </Section>
    </>
  );
}
