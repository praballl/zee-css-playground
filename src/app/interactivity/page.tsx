import { PageHeader, Section, Demo, RuleTable } from "../_components/ui";

export default function InteractivityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Utilities"
        title="Interactivity, Scroll &amp; SVG"
        intro="Cursors, pointer and selection behaviour, touch actions, form appearance, scroll margin and snapping, screen-reader helpers, and the SVG fill and stroke utilities."
      />

      <Section
        id="cursor"
        title="Cursors"
        description="The complete cursor keyword set, including every resize direction."
      >
        <Demo code="cursor-pointer / cursor-not-allowed / cursor-grab / cursor-zoom-in" note="hover each box">
          <div className="flex flex-wrap gap-3">
            <div className="pa-4 rounded-lg bg-slate-100 dark:bg-slate-800 text-caption cursor-pointer">pointer</div>
            <div className="pa-4 rounded-lg bg-slate-100 dark:bg-slate-800 text-caption cursor-not-allowed">not-allowed</div>
            <div className="pa-4 rounded-lg bg-slate-100 dark:bg-slate-800 text-caption cursor-grab">grab</div>
            <div className="pa-4 rounded-lg bg-slate-100 dark:bg-slate-800 text-caption cursor-zoom-in">zoom-in</div>
            <div className="pa-4 rounded-lg bg-slate-100 dark:bg-slate-800 text-caption cursor-wait">wait</div>
            <div className="pa-4 rounded-lg bg-slate-100 dark:bg-slate-800 text-caption cursor-crosshair">crosshair</div>
            <div className="pa-4 rounded-lg bg-slate-100 dark:bg-slate-800 text-caption cursor-col-resize">col-resize</div>
            <div className="pa-4 rounded-lg bg-slate-100 dark:bg-slate-800 text-caption cursor-help">help</div>
          </div>
        </Demo>

        <RuleTable classes={["cursor-auto", "cursor-default", "cursor-pointer", "cursor-wait", "cursor-text", "cursor-move", "cursor-not-allowed", "cursor-grab", "cursor-grabbing", "cursor-crosshair", "cursor-help", "cursor-none", "cursor-progress", "cursor-copy", "cursor-zoom-in", "cursor-zoom-out", "cursor-col-resize", "cursor-ew-resize", "cursor-nwse-resize"]} />
      </Section>

      <Section
        id="selection"
        title="Selection &amp; pointer events"
        description="Control what the user can select and whether an element receives pointer input at all."
      >
        <Demo code="select-none / select-all" note="try selecting the text">
          <div className="column gap-3">
            <p className="pa-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-caption select-none">
              select-none — this text cannot be selected.
            </p>
            <p className="pa-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-caption select-all">
              select-all — one click selects the whole block.
            </p>
          </div>
        </Demo>

        <RuleTable classes={["select-none", "select-text", "select-all", "select-auto", "pointer-events-none", "pointer-events-auto"]} />
      </Section>

      <Section
        id="forms"
        title="Form controls"
        description="accent- and caret- take any palette color; appearance-none strips native styling."
      >
        <Demo code="accent-purple-500 / caret-pink-500">
          <div className="flex flex-wrap items-center gap-6">
            <label className="flex items-center gap-2 text-caption text-slate-700 dark:text-slate-300 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-purple-500 w-4 h-4" />
              accent-purple-500
            </label>
            <label className="flex items-center gap-2 text-caption text-slate-700 dark:text-slate-300 cursor-pointer">
              <input type="radio" name="demo" defaultChecked className="accent-emerald-500 w-4 h-4" />
              accent-emerald-500
            </label>
            <input
              type="text"
              placeholder="caret-pink-500"
              className="px-3 py-2 rounded-lg caret-pink-500 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-caption text-slate-800 dark:text-slate-200 outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-slate-400"
            />
          </div>
        </Demo>

        <Demo code="resize-y">
          <textarea
            defaultValue="resize-y — drag the bottom edge"
            className="resize-y w-full max-w-96 h-24 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-caption text-slate-800 dark:text-slate-200 outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </Demo>

        <RuleTable classes={["accent-auto", "accent-purple-500", "caret-pink-500", "appearance-none", "appearance-auto", "resize", "resize-x", "resize-y", "resize-none"]} />
      </Section>

      <Section
        id="touch"
        title="Touch actions"
        description="What gestures the browser should handle natively on an element."
      >
        <RuleTable classes={["touch-auto", "touch-none", "touch-pan-x", "touch-pan-y", "touch-pinch-zoom", "touch-manipulation"]} />
      </Section>

      <Section
        id="snap"
        title="Scroll snap &amp; scroll margin"
        description="snap-x on the container plus snap-start on the children gives a carousel with no JavaScript. scroll-mt-* keeps anchored headings clear of a sticky header."
      >
        <Demo code="snap-x snap-mandatory + snap-center" note="scroll the strip sideways">
          <div className="flex gap-4 overflow-x-auto zc-scroll snap-x snap-mandatory pb-3">
            {["one", "two", "three", "four", "five"].map((n) => (
              <div
                key={n}
                className="snap-center shrink-0 w-56 h-28 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 text-white flex items-center justify-center text-body2 font-semibold"
              >
                {n}
              </div>
            ))}
          </div>
        </Demo>

        <RuleTable classes={["snap-none", "snap-x", "snap-y", "snap-both", "snap-mandatory", "snap-proximity", "snap-start", "snap-center", "snap-end", "snap-align-none", "snap-normal", "snap-always", "scroll-auto", "scroll-smooth", "scroll-m-4", "scroll-mt-8", "scroll-p-4", "scroll-pt-8"]} />
      </Section>

      <Section
        id="svg"
        title="SVG"
        description="fill- and stroke- take any palette color; stroke-{0,1,2} sets the width. stroke-current and fill-current inherit the text color."
      >
        <Demo code="fill-indigo-500 / fill-none stroke-rose-500 stroke-2 / fill-current">
          <div className="flex flex-wrap items-center gap-8 text-emerald-600 dark:text-emerald-400">
            <svg width="64" height="64" viewBox="0 0 64 64" aria-label="filled circle">
              <circle cx="32" cy="32" r="26" className="fill-indigo-500" />
            </svg>
            <svg width="64" height="64" viewBox="0 0 64 64" aria-label="stroked square">
              <rect x="10" y="10" width="44" height="44" rx="8" className="fill-none stroke-rose-500 stroke-2" />
            </svg>
            <svg width="64" height="64" viewBox="0 0 64 64" aria-label="current color triangle">
              <path d="M32 8 L58 54 L6 54 Z" className="fill-current" />
            </svg>
            <svg width="64" height="64" viewBox="0 0 64 64" aria-label="current color outline">
              <path d="M32 8 L58 54 L6 54 Z" className="fill-none stroke-current stroke-2" />
            </svg>
          </div>
        </Demo>

        <RuleTable classes={["fill-none", "fill-current", "fill-indigo-500", "stroke-none", "stroke-current", "stroke-rose-500", "stroke-0", "stroke-1", "stroke-2"]} />
      </Section>

      <Section
        id="a11y"
        title="Accessibility &amp; print"
        description="sr-only hides content visually while leaving it available to assistive technology. no-print drops an element from the printed page."
      >
        <Demo code="sr-only">
          <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-caption font-medium">
            <span aria-hidden="true">&#9881;</span>
            <span className="sr-only">Open settings</span>
          </button>
        </Demo>

        <RuleTable classes={["sr-only", "not-sr-only", "no-print"]} />
      </Section>
    </>
  );
}
