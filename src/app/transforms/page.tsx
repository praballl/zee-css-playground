import { PageHeader, Section, Demo, RuleTable, Callout } from "../_components/ui";

export default function TransformsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Utilities"
        title="Transforms &amp; Animation"
        intro="Transitions, the transform family, and four keyframe animations that ship their @keyframes blocks with the generated stylesheet — you never hand-write them."
      />

      <Section
        id="transition"
        title="Transitions"
        description="transition covers the common properties; the -colors, -opacity, -shadow and -transform variants narrow it. duration, delay and the easing curves are separate utilities."
      >
        <Demo code="transition-colors duration-300 hover:bg-indigo-600" note="hover me">
          <div className="pa-5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-body2 font-medium hover:bg-indigo-600 transition-colors duration-300 cursor-pointer inline-block">
            slow color change
          </div>
        </Demo>

        <Demo code="duration-150 vs duration-700" note="hover both">
          <div className="flex flex-wrap gap-4">
            <div className="pa-5 rounded-xl bg-emerald-200 dark:bg-emerald-900 text-caption hover:bg-emerald-600 hover:text-white transition-colors duration-150 cursor-pointer">
              duration-150
            </div>
            <div className="pa-5 rounded-xl bg-emerald-200 dark:bg-emerald-900 text-caption hover:bg-emerald-600 hover:text-white transition-colors duration-700 cursor-pointer">
              duration-700
            </div>
          </div>
        </Demo>

        <RuleTable classes={["transition", "transition-all", "transition-colors", "transition-opacity", "transition-shadow", "transition-transform", "transition-none", "duration-75", "duration-150", "duration-300", "duration-700", "delay-100", "delay-500", "ease-linear", "ease-in", "ease-out", "ease-in-out"]} />
      </Section>

      <Section
        id="transform"
        title="Transforms"
        description="Scale, rotate, translate and skew. Pair them with a state variant and a transition and you have an interaction."
      >
        <Demo code="hover:scale-110 transition duration-300" note="hover me">
          <div className="w-32 h-24 rounded-xl bg-indigo-500 text-white text-caption flex items-center justify-center hover:scale-110 transition duration-300 cursor-pointer">
            scale-110
          </div>
        </Demo>

        <Demo code="rotate-6 / -rotate-6 / rotate-45">
          <div className="flex flex-wrap gap-8 pa-4">
            <div className="w-20 h-20 rounded-lg bg-purple-500 text-white text-caption flex items-center justify-center rotate-6">6</div>
            <div className="w-20 h-20 rounded-lg bg-purple-500 text-white text-caption flex items-center justify-center -rotate-6">-6</div>
            <div className="w-20 h-20 rounded-lg bg-purple-500 text-white text-caption flex items-center justify-center rotate-45">45</div>
          </div>
        </Demo>

        <Demo code="hover:-translate-y-2 transition" note="hover the cards">
          <div className="flex flex-wrap gap-4">
            <div className="pa-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md text-caption text-slate-700 dark:text-slate-300 hover:-translate-y-2 hover:shadow-xl transition duration-200 cursor-pointer">
              lifts on hover
            </div>
            <div className="pa-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md text-caption text-slate-700 dark:text-slate-300 hover:-translate-y-2 hover:shadow-xl transition duration-200 cursor-pointer">
              so does this
            </div>
          </div>
        </Demo>

        <Demo code="skew-x-12 / skew-y-6">
          <div className="flex flex-wrap gap-8 pa-4">
            <div className="w-24 h-16 rounded-lg bg-rose-500 text-white text-caption flex items-center justify-center skew-x-12">skew-x-12</div>
            <div className="w-24 h-16 rounded-lg bg-rose-500 text-white text-caption flex items-center justify-center skew-y-6">skew-y-6</div>
          </div>
        </Demo>

        <RuleTable classes={["scale-95", "scale-105", "scale-110", "scale-x-50", "scale-y-150", "rotate-6", "rotate-45", "rotate-180", "-rotate-6", "translate-x-4", "translate-y-2", "-translate-y-4", "skew-x-6", "skew-y-12", "origin-center", "origin-top-left", "origin-bottom", "transform-none", "transform-gpu"]} />
      </Section>

      <Section
        id="animate"
        title="Animations"
        description="Four looping animations. The generator emits the matching @keyframes into the stylesheet automatically the first time you use one."
      >
        <Demo code="animate-spin / animate-ping / animate-pulse / animate-bounce">
          <div className="flex flex-wrap gap-10 pa-4 items-center">
            <div className="column items-center gap-3">
              <div className="w-10 h-10 rounded-full border-4 border-indigo-200 animate-spin" style={{ borderTopColor: "#6366f1" }} />
              <span className="text-caption font-mono text-slate-500 dark:text-slate-500">animate-spin</span>
            </div>
            <div className="column items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-500 animate-ping" />
              <span className="text-caption font-mono text-slate-500 dark:text-slate-500">animate-ping</span>
            </div>
            <div className="column items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500 animate-pulse" />
              <span className="text-caption font-mono text-slate-500 dark:text-slate-500">animate-pulse</span>
            </div>
            <div className="column items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500 animate-bounce" />
              <span className="text-caption font-mono text-slate-500 dark:text-slate-500">animate-bounce</span>
            </div>
          </div>
        </Demo>

        <Demo code="animate-pulse as a skeleton loader">
          <div className="column gap-3 max-w-96">
            <div className="h-4 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
            <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
            <div className="h-4 w-1/2 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
          </div>
        </Demo>

        <RuleTable classes={["animate-spin", "animate-ping", "animate-pulse", "animate-bounce", "animate-none"]} />
      </Section>

      <Section
        id="willchange"
        title="will-change"
        description="A hint to the browser to promote an element to its own layer before an animation starts."
      >
        <RuleTable classes={["will-change-auto", "will-change-scroll", "will-change-contents", "will-change-transform"]} />
      </Section>

      <Callout tone="info" title="Respect reduced motion">
        Wrap animations in the <code className="font-mono">motion-safe:</code>{" "}
        variant so they only run for users who have not asked their OS to reduce
        motion — <code className="font-mono">motion-safe:animate-spin</code>. See
        the Variants page.
      </Callout>
    </>
  );
}
