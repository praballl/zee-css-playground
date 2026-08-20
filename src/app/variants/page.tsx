import { breakpoints, stateVariants } from "@zee-css/core";
import { PageHeader, Section, Demo, RuleTable, Code, Callout } from "../_components/ui";

export default function VariantsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Utilities"
        title="Variants"
        intro="Any utility can be prefixed. Breakpoints, pseudo-states, dark mode, print and motion preferences all stack onto the same class, left to right."
      />

      <Section
        id="responsive"
        title="Responsive"
        description="Five mobile-first breakpoints. An unprefixed class applies everywhere; a prefixed one applies from that width up."
      >
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
          <div className="overflow-x-auto zc-scroll">
            <table className="w-full table-auto border-collapse">
              <tbody className="divide-y divide-slate-100">
                {Object.entries(breakpoints).map(([name, value]) => (
                  <tr key={name} className="odd:bg-slate-50">
                    <td className="pa-3 whitespace-nowrap">
                      <code className="text-caption font-mono text-indigo-700 dark:text-indigo-300">
                        {name}:
                      </code>
                    </td>
                    <td className="pa-3">
                      <code className="text-caption font-mono text-slate-600 dark:text-slate-400">
                        @media (min-width: {value})
                      </code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Demo code="pa-3 md:pa-8 lg:pa-12" note="resize the window">
          <div className="pa-3 md:pa-8 lg:pa-12 rounded-xl bg-indigo-100 dark:bg-indigo-950">
            <div className="pa-3 rounded bg-indigo-600 text-white text-caption text-center">
              my padding grows at md and lg
            </div>
          </div>
        </Demo>

        <Demo code="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" note="resize the window">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="pa-4 rounded-lg bg-purple-500 text-white text-caption text-center">
                {n}
              </div>
            ))}
          </div>
        </Demo>

        <Demo code="hidden md:block / block md:hidden" note="one of these is showing right now">
          <div className="column gap-3">
            <div className="hidden md:block pa-3 rounded-lg bg-emerald-500 text-white text-caption">
              visible from md up
            </div>
            <div className="block md:hidden pa-3 rounded-lg bg-amber-500 text-white text-caption">
              visible below md
            </div>
          </div>
        </Demo>

        <RuleTable classes={["md:pa-8", "lg:grid-cols-4", "2xl:text-h4"]} />

        <Callout tone="info" title="Why 2xl: has a strange-looking selector">
          A CSS identifier may not begin with an unescaped digit, so{" "}
          <code className="font-mono">2xl:pa-8</code> is written as{" "}
          <code className="font-mono">.\32 xl\:pa-8</code> — a numeric
          code-point escape, trailing space included. It looks odd and it is
          correct. In 1.0.0 the escaper emitted a bare{" "}
          <code className="font-mono">.2xl\:pa-8</code>, which every parser
          rejects, so the entire <code className="font-mono">2xl</code>{" "}
          breakpoint silently did nothing. The same fix covers any{" "}
          <code className="font-mono">addBreakpoint</code> name starting with a
          digit.
        </Callout>
      </Section>

      <Section
        id="state"
        title="State variants"
        description="Twelve pseudo-class and pseudo-element prefixes. They compose with breakpoints — md:hover:bg-blue-600 works."
      >
        <div className="flex flex-wrap gap-2">
          {Object.entries(stateVariants).map(([name, selector]) => (
            <span
              key={name}
              className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-caption font-mono text-slate-600 dark:text-slate-400"
            >
              {name}: &rarr; {selector}
            </span>
          ))}
        </div>

        <Demo code="hover:bg-indigo-600 hover:text-white focus:ring-2 active:scale-95" note="hover, tab to, and click">
          <button className="px-5 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-body2 font-semibold text-slate-800 dark:text-slate-200 hover:bg-indigo-600 hover:text-white focus:ring-2 focus:ring-indigo-400 active:scale-95 outline-none transition duration-150">
            interactive button
          </button>
        </Demo>

        <Demo code="disabled:opacity-50 disabled:cursor-not-allowed">
          <button
            disabled
            className="px-5 py-3 rounded-lg bg-indigo-600 text-white text-body2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            disabled button
          </button>
        </Demo>

        <Demo code="odd:bg-slate-50 first:pt-0 last:pb-0">
          <ul className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
            {["Alpha", "Bravo", "Charlie", "Delta"].map((n) => (
              <li key={n} className="pa-3 text-caption text-slate-700 dark:text-slate-300 odd:bg-slate-50 first:pt-0 last:pb-0">
                {n}
              </li>
            ))}
          </ul>
        </Demo>

        <Demo code="placeholder:text-slate-400 focus-visible:ring-2">
          <input
            type="text"
            placeholder="styled placeholder"
            className="px-4 py-3 rounded-lg w-full max-w-72 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-body2 text-slate-800 dark:text-slate-200 outline-none placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-violet-500 transition-shadow duration-150"
          />
        </Demo>

        <RuleTable classes={["hover:bg-indigo-600", "focus:ring-2", "focus-within:border-indigo-500", "focus-visible:ring-2", "active:scale-95", "visited:text-purple-600", "disabled:opacity-50", "first:pt-0", "last:pb-0", "odd:bg-slate-50", "even:bg-white", "placeholder:text-slate-400", "md:hover:bg-blue-600"]} />
      </Section>

      <Section
        id="dark"
        title="Dark mode"
        description="dark: follows the operating system by default. Switch your OS or browser to dark and this whole site changes — every panel here is a bg-white dark:bg-slate-900 pair."
      >
        <Demo code="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
          <div className="pa-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <p className="text-body1 font-semibold text-slate-900 dark:text-white mb-1">
              Adapts automatically
            </p>
            <p className="text-caption text-slate-600 dark:text-slate-400">
              No toggle, no JavaScript, no flash of the wrong theme.
            </p>
          </div>
        </Demo>

        <RuleTable classes={["dark:bg-slate-900", "dark:text-white", "md:dark:pa-8"]} />

        <Callout tone="info" title="Driving dark mode from a class instead">
          <code className="font-mono">zee-css . --dark-mode class</code> emits{" "}
          <code className="font-mono">.dark .foo</code> selectors with no media
          query, so a toggle can control the theme. This site stays on the
          media-query default because following the OS needs no JavaScript and
          cannot flash the wrong theme on first paint.
        </Callout>
      </Section>

      <Section
        id="media"
        title="Print &amp; motion"
        description="Three more media-query prefixes, for printed output and for users who have asked their OS to reduce motion."
      >
        <Demo code="motion-safe:animate-bounce" note="stops if you enable reduce-motion">
          <div className="w-10 h-10 rounded-lg bg-cyan-500 motion-safe:animate-bounce" />
        </Demo>

        <Demo code="no-print / print:text-black">
          <div className="column gap-3">
            <div className="pa-3 rounded-lg bg-rose-100 dark:bg-rose-950 text-caption text-rose-700 dark:text-rose-300 no-print">
              no-print — dropped from the printed page
            </div>
            <div className="pa-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-caption print:text-black">
              print:text-black — forced to black on paper
            </div>
          </div>
        </Demo>

        <RuleTable classes={["print:text-black", "motion-safe:animate-spin", "motion-reduce:transition-none", "no-print"]} />
      </Section>

      <Section
        id="stacking"
        title="Stacking order"
        description="Prefixes are read left to right and can be combined freely. The utility itself is always last."
      >
        <Code>{`md:hover:bg-blue-600      // from md up, on hover
lg:dark:text-white        // from lg up, in dark mode
2xl:focus:ring-4          // from 2xl up, on focus
!md:pa-8                  // important + responsive`}</Code>
      </Section>
    </>
  );
}
