import { PageHeader, Section, Demo, RuleTable, Callout } from "../_components/ui";

export default function TypographyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Utilities"
        title="Typography"
        intro="Two type scales side by side — a Material Design semantic scale and a t-shirt size scale — plus weight, family, spacing, decoration, wrapping and alignment."
      />

      <Section
        id="md-scale"
        title="Material Design scale"
        description="text-h1 through text-overline set font-size, weight and letter-spacing together, so a heading is one class rather than four."
      >
        <Demo code="text-h3 / text-h5 / text-subtitle1 / text-body1 / text-caption / text-overline" plain>
          <div className="column gap-3 text-slate-900 dark:text-white">
            <p className="text-h3">text-h3 — display heading</p>
            <p className="text-h5">text-h5 — section heading</p>
            <p className="text-subtitle1">text-subtitle1 — supporting line</p>
            <p className="text-body1 text-slate-600 dark:text-slate-400">
              text-body1 — the default reading size for long-form copy.
            </p>
            <p className="text-body2 text-slate-600 dark:text-slate-400">
              text-body2 — a notch down, for dense UI.
            </p>
            <p className="text-caption text-slate-500 dark:text-slate-500">
              text-caption — captions and helper text.
            </p>
            <p className="text-overline text-indigo-600 dark:text-indigo-400">
              text-overline — eyebrow labels
            </p>
          </div>
        </Demo>

        <RuleTable classes={["text-h1", "text-h2", "text-h3", "text-h4", "text-h5", "text-h6", "text-subtitle1", "text-subtitle2", "text-body1", "text-body2", "text-caption", "text-overline"]} />
      </Section>

      <Section
        id="fs"
        title="Font size scale"
        description="fs-xs through fs-9xl for raw sizes. font-{px} sets a size in pixels, and font-{px}-{weight} sets both at once."
      >
        <Demo code="fs-xs … fs-4xl" plain>
          <div className="column gap-2 text-slate-900 dark:text-white">
            <p className="fs-xs">fs-xs</p>
            <p className="fs-sm">fs-sm</p>
            <p className="fs-base">fs-base</p>
            <p className="fs-lg">fs-lg</p>
            <p className="fs-2xl">fs-2xl</p>
            <p className="fs-4xl">fs-4xl</p>
          </div>
        </Demo>

        <RuleTable classes={["fs-xs", "fs-sm", "fs-base", "fs-lg", "fs-xl", "fs-2xl", "fs-4xl", "fs-6xl", "fs-9xl", "font-14", "font-18", "font-24-7"]} />
      </Section>

      <Section
        id="weight"
        title="Weight &amp; family"
        description="Nine named weights and the three standard families."
      >
        <Demo code="font-thin … font-black" plain>
          <div className="column gap-1 text-slate-900 dark:text-white text-body1">
            <p className="font-thin">font-thin</p>
            <p className="font-light">font-light</p>
            <p className="font-normal">font-normal</p>
            <p className="font-medium">font-medium</p>
            <p className="font-semibold">font-semibold</p>
            <p className="font-bold">font-bold</p>
            <p className="font-black">font-black</p>
          </div>
        </Demo>

        <Demo code="font-sans / font-serif / font-mono" plain>
          <div className="column gap-2 text-body1 text-slate-900 dark:text-white">
            <p className="font-sans">font-sans — the quick brown fox</p>
            <p className="font-serif">font-serif — the quick brown fox</p>
            <p className="font-mono">font-mono — the quick brown fox</p>
          </div>
        </Demo>

        <RuleTable classes={["font-thin", "font-extralight", "font-light", "font-normal", "font-medium", "font-semibold", "font-bold", "font-extrabold", "font-black", "font-sans", "font-serif", "font-mono"]} />
      </Section>

      <Section
        id="rhythm"
        title="Line height &amp; letter spacing"
        description="leading-* takes named steps or a raw number from the spacing scale; tracking-* adjusts letter-spacing."
      >
        <Demo code="leading-tight vs leading-loose" plain>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-caption text-slate-600 dark:text-slate-400">
            <p className="leading-tight">
              leading-tight. Utility classes are small, single-purpose rules that
              compose without specificity fights and can be proven unused.
            </p>
            <p className="leading-loose">
              leading-loose. Utility classes are small, single-purpose rules that
              compose without specificity fights and can be proven unused.
            </p>
          </div>
        </Demo>

        <Demo code="tracking-tighter / tracking-widest" plain>
          <div className="column gap-2 text-body1 text-slate-900 dark:text-white">
            <p className="tracking-tighter">tracking-tighter</p>
            <p className="tracking-normal">tracking-normal</p>
            <p className="tracking-wide">tracking-wide</p>
            <p className="tracking-widest">tracking-widest</p>
          </div>
        </Demo>

        <RuleTable classes={["leading-none", "leading-tight", "leading-snug", "leading-normal", "leading-relaxed", "leading-loose", "leading-6", "tracking-tighter", "tracking-tight", "tracking-normal", "tracking-wide", "tracking-wider", "tracking-widest"]} />
      </Section>

      <Section
        id="transform"
        title="Transform, decoration &amp; style"
        description="Casing, underlines and italics."
      >
        <Demo code="uppercase / capitalize / underline / line-through / italic" plain>
          <div className="column gap-2 text-body2 text-slate-900 dark:text-white">
            <p className="uppercase">uppercase text</p>
            <p className="lowercase">LOWERCASE TEXT</p>
            <p className="capitalize">capitalize each word</p>
            <p className="underline">underline</p>
            <p className="line-through">line-through</p>
            <p className="italic">italic</p>
          </div>
        </Demo>

        <RuleTable classes={["uppercase", "lowercase", "capitalize", "normal-case", "underline", "overline", "line-through", "no-underline", "italic", "not-italic"]} />
      </Section>

      <Section
        id="wrapping"
        title="Overflow &amp; wrapping"
        description="truncate is the one-line ellipsis shorthand; whitespace-* and break-* handle everything else."
      >
        <Demo code="truncate">
          <div className="max-w-56 truncate pa-3 rounded bg-slate-100 dark:bg-slate-800 text-caption text-slate-700 dark:text-slate-300">
            This sentence is deliberately far too long to fit inside the box.
          </div>
        </Demo>

        <Demo code="break-all">
          <div className="max-w-56 break-all pa-3 rounded bg-slate-100 dark:bg-slate-800 text-caption text-slate-700 dark:text-slate-300">
            supercalifragilisticexpialidociousandthensomemoreletters
          </div>
        </Demo>

        <RuleTable classes={["truncate", "text-ellipsis", "text-clip", "whitespace-normal", "whitespace-nowrap", "whitespace-pre", "whitespace-pre-wrap", "break-normal", "break-words", "break-all", "break-keep"]} />
      </Section>

      <Section
        id="align"
        title="Alignment, lists &amp; indent"
        description="Text alignment including the RTL-safe text-start / text-end pair, vertical-align, list markers and text-indent."
      >
        <Demo code="text-left / text-center / text-right" plain>
          <div className="column gap-2 text-caption text-slate-700 dark:text-slate-300">
            <p className="text-left">text-left</p>
            <p className="text-center">text-center</p>
            <p className="text-right">text-right</p>
            <p className="text-justify">
              text-justify spreads the line so both edges align, which reads well
              in narrow measures and badly in wide ones.
            </p>
          </div>
        </Demo>

        <Demo code="list-disc list-inside">
          <ul className="list-disc list-inside text-caption text-slate-700 dark:text-slate-300 space-y-1">
            <li>first item</li>
            <li>second item</li>
            <li>third item</li>
          </ul>
        </Demo>

        <RuleTable classes={["text-left", "text-center", "text-right", "text-justify", "text-start", "text-end", "align-top", "align-middle", "align-bottom", "align-baseline", "align-sub", "align-super", "list-none", "list-disc", "list-decimal", "list-inside", "list-outside", "indent-4", "content-none"]} />
      </Section>

      <Callout tone="info" title="Fluid type in one flag">
        <code className="font-mono">zee-css . --auto-responsive</code> rewrites
        every font-size as a <code className="font-mono">clamp()</code> that
        scales from mobile to desktop with no breakpoints —{" "}
        <code className="font-mono">fs-2xl</code> becomes{" "}
        <code className="font-mono">clamp(1.25rem, 3vw, 1.5rem)</code>. The core
        option is <code className="font-mono">&#123; autoResponsive: true &#125;</code>.
        The 1.0.0 README documented the flag but the CLI never read it; 1.1.0
        wires it up.
      </Callout>
    </>
  );
}
