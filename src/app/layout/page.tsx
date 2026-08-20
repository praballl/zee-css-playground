import { PageHeader, Section, Demo, RuleTable } from "../_components/ui";

export default function LayoutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Utilities"
        title="Layout"
        intro="Display modes, flexbox alignment, positioning, sizing, overflow, object fit and the table primitives — the structural half of the framework."
      />

      <Section
        id="display"
        title="Display"
        description="Every CSS display value has a utility, including the full set of table displays and flow-root."
      >
        <RuleTable
          classes={["block", "inline-block", "inline", "flex", "inline-flex", "grid", "inline-grid", "contents", "flow-root", "hidden", "table", "table-row", "table-cell", "table-auto", "table-fixed", "border-collapse", "border-separate"]}
        />
      </Section>

      <Section
        id="flex-direction"
        title="Flex direction"
        description="row and column are shorthands that set display:flex and the direction in one class — you do not need a separate flex."
      >
        <Demo code="row gap-3">
          <div className="row gap-3">
            <div className="pa-3 rounded bg-sky-500 text-white text-caption">1</div>
            <div className="pa-3 rounded bg-sky-500 text-white text-caption">2</div>
            <div className="pa-3 rounded bg-sky-500 text-white text-caption">3</div>
          </div>
        </Demo>

        <Demo code="column gap-3">
          <div className="column gap-3">
            <div className="pa-3 rounded bg-blue-500 text-white text-caption">1</div>
            <div className="pa-3 rounded bg-blue-500 text-white text-caption">2</div>
          </div>
        </Demo>

        <RuleTable classes={["row", "column", "row-reverse", "column-reverse", "flex-wrap", "flex-nowrap", "flex-wrap-reverse"]} />
      </Section>

      <Section
        id="alignment"
        title="Alignment"
        description="items-* on the cross axis, justify-* on the main axis, self-* to override a single child, and the place-* shorthands for both at once."
      >
        <Demo code="flex items-center justify-between">
          <div className="flex items-center justify-between h-24 pa-3 rounded-lg bg-slate-100 dark:bg-slate-800">
            <div className="pa-3 rounded bg-emerald-500 text-white text-caption">start</div>
            <div className="pa-3 rounded bg-emerald-500 text-white text-caption">end</div>
          </div>
        </Demo>

        <Demo code="flex items-end justify-center gap-3">
          <div className="flex items-end justify-center gap-3 h-32 pa-3 rounded-lg bg-slate-100 dark:bg-slate-800">
            <div className="pa-3 h-10 rounded bg-purple-500 text-white text-caption">a</div>
            <div className="pa-3 h-20 rounded bg-purple-500 text-white text-caption">b</div>
            <div className="pa-3 h-14 rounded bg-purple-500 text-white text-caption">c</div>
          </div>
        </Demo>

        <Demo code="self-end on the middle child">
          <div className="flex items-start gap-3 h-32 pa-3 rounded-lg bg-slate-100 dark:bg-slate-800">
            <div className="pa-3 rounded bg-orange-500 text-white text-caption">start</div>
            <div className="self-end pa-3 rounded bg-orange-600 text-white text-caption">self-end</div>
            <div className="pa-3 rounded bg-orange-500 text-white text-caption">start</div>
          </div>
        </Demo>

        <RuleTable
          classes={["items-start", "items-center", "items-end", "items-stretch", "items-baseline", "justify-start", "justify-center", "justify-between", "justify-around", "justify-evenly", "self-center", "self-end", "justify-self-end", "place-items-center", "place-content-between", "place-self-center", "content-between"]}
        />
      </Section>

      <Section
        id="flex-child"
        title="Flex children"
        description="Growth, shrink and ordering for individual flex items."
      >
        <Demo code="flex-1 on the middle child">
          <div className="flex gap-3">
            <div className="pa-3 rounded bg-lime-500 text-white text-caption">auto</div>
            <div className="flex-1 pa-3 rounded bg-lime-600 text-white text-caption text-center">
              flex-1 takes the rest
            </div>
            <div className="pa-3 rounded bg-lime-500 text-white text-caption">auto</div>
          </div>
        </Demo>

        <Demo code="order-first / order-last">
          <div className="flex gap-3">
            <div className="order-last pa-3 rounded bg-fuchsia-500 text-white text-caption">
              written 1st, order-last
            </div>
            <div className="order-first pa-3 rounded bg-fuchsia-600 text-white text-caption">
              written 2nd, order-first
            </div>
          </div>
        </Demo>

        <RuleTable classes={["flex-1", "flex-auto", "flex-initial", "flex-none", "grow", "grow-0", "shrink", "shrink-0", "order-1", "order-first", "order-last", "order-none"]} />
      </Section>

      <Section
        id="position"
        title="Position &amp; inset"
        description="Positioning keywords are bare class names. Inset utilities take the same scale as spacing, including negative values, plus the logical start-/end- pair."
      >
        <Demo code="relative + absolute top-2 right-2">
          <div className="relative h-32 rounded-lg bg-slate-100 dark:bg-slate-800">
            <div className="absolute top-2 right-2 pa-2 rounded bg-red-500 text-white text-caption">
              top-2 right-2
            </div>
            <div className="absolute bottom-2 left-2 pa-2 rounded bg-red-600 text-white text-caption">
              bottom-2 left-2
            </div>
          </div>
        </Demo>

        <Demo code="absolute inset-4">
          <div className="relative h-32 rounded-lg bg-slate-100 dark:bg-slate-800">
            <div className="absolute inset-4 rounded bg-indigo-500 opacity-70 flex items-center justify-center text-white text-caption">
              inset-4
            </div>
          </div>
        </Demo>

        <RuleTable classes={["relative", "absolute", "fixed", "sticky", "static", "top-4", "-top-4", "inset-0", "inset-x-4", "inset-y-2", "start-4", "end-4", "z-10", "z-50", "z-auto", "isolate", "isolation-auto"]} />
      </Section>

      <Section
        id="sizing"
        title="Sizing"
        description="Width accepts fractions as well as the numeric scale; height does not. Both accept full, screen, auto, min, max, fit and px."
      >
        <Demo code="w-1/2 / w-1/3 / w-1/4">
          <div className="column gap-2">
            <div className="w-1/2 pa-2 rounded bg-cyan-500 text-white text-caption">w-1/2</div>
            <div className="w-1/3 pa-2 rounded bg-cyan-500 text-white text-caption">w-1/3</div>
            <div className="w-1/4 pa-2 rounded bg-cyan-500 text-white text-caption">w-1/4</div>
          </div>
        </Demo>

        <Demo code="w-full max-w-56">
          <div className="w-full max-w-56 pa-3 rounded bg-teal-500 text-white text-caption">
            capped at 14rem
          </div>
        </Demo>

        <RuleTable classes={["w-full", "w-auto", "w-screen", "w-min", "w-max", "w-fit", "w-px", "w-1/2", "w-2/3", "w-48", "h-full", "h-screen", "h-auto", "h-32", "min-w-0", "min-h-full", "max-w-full", "max-w-96", "max-h-96", "max-w-lg"]} />
      </Section>

      <Section
        id="overflow"
        title="Overflow, float &amp; clear"
        description="Axis-specific overflow and overscroll behaviour, plus the classic float utilities."
      >
        <Demo code="overflow-y-auto h-32">
          <div className="overflow-y-auto zc-scroll h-32 rounded-lg border border-slate-200 dark:border-slate-800 pa-3 space-y-2">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="pa-2 rounded bg-slate-100 dark:bg-slate-800 text-caption">
                scrollable row {i + 1}
              </div>
            ))}
          </div>
        </Demo>

        <RuleTable classes={["overflow-auto", "overflow-hidden", "overflow-clip", "overflow-x-scroll", "overflow-y-auto", "overscroll-contain", "overscroll-y-none", "float-left", "float-right", "float-none", "clear-both", "visible", "invisible", "collapse"]} />
      </Section>

      <Section
        id="object"
        title="Object fit, aspect ratio &amp; columns"
        description="For media and multi-column text."
      >
        <Demo code="aspect-video">
          <div className="aspect-video w-full max-w-96 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white text-caption">
            16 / 9
          </div>
        </Demo>

        <Demo code="columns-3 gap-6">
          <div className="columns-3 gap-6 text-caption leading-relaxed text-slate-600 dark:text-slate-400">
            Utility classes are small, single-purpose rules. Because each one
            does exactly one thing, they compose without specificity fights, and
            a scanner can prove which ones your project actually needs. That is
            what makes the generated stylesheet small.
          </div>
        </Demo>

        <RuleTable classes={["object-cover", "object-contain", "object-fill", "object-center", "object-top", "aspect-square", "aspect-video", "aspect-auto", "columns-2", "columns-3", "columns-auto", "box-border", "box-content", "break-inside-avoid"]} />
      </Section>

      <Section id="aliases" title="Convenience aliases" description="A few shorthands the framework adds on top of the CSS vocabulary.">
        <RuleTable classes={["container", "fit", "full-width", "full-height"]} />
      </Section>
    </>
  );
}
