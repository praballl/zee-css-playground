import { PageHeader, Section, Demo, RuleTable } from "../_components/ui";

export default function BackgroundsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Utilities"
        title="Backgrounds &amp; Gradients"
        intro="Background positioning, sizing, repetition, attachment and clipping — plus a three-stop linear gradient system that composes from four separate utilities."
      />

      <Section
        id="gradients"
        title="Gradients"
        description="bg-gradient-to-{direction} sets up the gradient; from-, via- and to- supply the stops. via- is optional."
      >
        <Demo code="bg-gradient-to-r from-indigo-500 to-pink-500">
          <div className="h-24 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500" />
        </Demo>

        <Demo code="bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600" note="three stops">
          <div className="h-24 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600" />
        </Demo>

        <Demo code="all eight directions">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="h-20 rounded-lg bg-gradient-to-t from-amber-500 to-rose-500 flex items-end justify-center pb-1 text-caption text-white">to-t</div>
            <div className="h-20 rounded-lg bg-gradient-to-tr from-amber-500 to-rose-500 flex items-end justify-center pb-1 text-caption text-white">to-tr</div>
            <div className="h-20 rounded-lg bg-gradient-to-r from-amber-500 to-rose-500 flex items-end justify-center pb-1 text-caption text-white">to-r</div>
            <div className="h-20 rounded-lg bg-gradient-to-br from-amber-500 to-rose-500 flex items-end justify-center pb-1 text-caption text-white">to-br</div>
            <div className="h-20 rounded-lg bg-gradient-to-b from-amber-500 to-rose-500 flex items-end justify-center pb-1 text-caption text-white">to-b</div>
            <div className="h-20 rounded-lg bg-gradient-to-bl from-amber-500 to-rose-500 flex items-end justify-center pb-1 text-caption text-white">to-bl</div>
            <div className="h-20 rounded-lg bg-gradient-to-l from-amber-500 to-rose-500 flex items-end justify-center pb-1 text-caption text-white">to-l</div>
            <div className="h-20 rounded-lg bg-gradient-to-tl from-amber-500 to-rose-500 flex items-end justify-center pb-1 text-caption text-white">to-tl</div>
          </div>
        </Demo>

        <RuleTable classes={["bg-gradient-to-t", "bg-gradient-to-tr", "bg-gradient-to-r", "bg-gradient-to-br", "bg-gradient-to-b", "bg-gradient-to-bl", "bg-gradient-to-l", "bg-gradient-to-tl", "from-indigo-500", "via-purple-500", "to-pink-500"]} />
      </Section>

      <Section
        id="clip-text"
        title="Gradient text"
        description="Combine bg-clip-text with text-transparent and the text takes the gradient instead of the box."
      >
        <Demo code="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent" plain>
          <p className="text-h4 font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Gradient headline
          </p>
        </Demo>

        <RuleTable classes={["bg-clip-border", "bg-clip-padding", "bg-clip-content", "bg-clip-text", "bg-origin-border", "bg-origin-padding", "bg-origin-content"]} />
      </Section>

      <Section
        id="size-position"
        title="Size, position &amp; repeat"
        description="The full set of background-size, background-position, background-repeat and background-attachment utilities."
      >
        <Demo code="bg-cover bg-center bg-no-repeat" note="applied to an inline gradient image">
          <div
            className="h-28 rounded-xl bg-cover bg-center bg-no-repeat border border-slate-200 dark:border-slate-800"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, #6366f1 0 12px, #8b5cf6 12px 24px)",
            }}
          />
        </Demo>

        <RuleTable
          classes={["bg-cover", "bg-contain", "bg-auto", "bg-center", "bg-top", "bg-bottom", "bg-left", "bg-right", "bg-left-top", "bg-right-bottom", "bg-repeat", "bg-no-repeat", "bg-repeat-x", "bg-repeat-y", "bg-repeat-round", "bg-repeat-space", "bg-fixed", "bg-scroll", "bg-local"]}
        />
      </Section>

      <Section
        id="blend"
        title="Blend modes"
        description="mix-blend-* blends an element with what is behind it; bg-blend-* blends an element's own background layers."
      >
        <Demo code="mix-blend-multiply / mix-blend-screen / mix-blend-overlay">
          <div className="relative h-32 rounded-xl bg-gradient-to-r from-yellow-300 to-cyan-300 overflow-hidden">
            <div className="absolute top-4 left-6 w-20 h-20 rounded-full bg-red-500 mix-blend-multiply" />
            <div className="absolute top-4 left-20 w-20 h-20 rounded-full bg-blue-500 mix-blend-multiply" />
            <div className="absolute top-4 left-32 w-20 h-20 rounded-full bg-green-500 mix-blend-multiply" />
          </div>
        </Demo>

        <RuleTable classes={["mix-blend-normal", "mix-blend-multiply", "mix-blend-screen", "mix-blend-overlay", "mix-blend-darken", "mix-blend-lighten", "mix-blend-difference", "mix-blend-luminosity", "bg-blend-multiply", "bg-blend-screen", "bg-blend-overlay"]} />
      </Section>
    </>
  );
}
