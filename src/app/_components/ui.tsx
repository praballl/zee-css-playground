import type { ReactNode } from "react";
import { generateCSSForClass } from "@zee-css/core";

/* ------------------------------------------------------------------
   Shared docs chrome. Every one of these is styled with zee-css
   utility classes — no CSS modules, no Tailwind, no inline styles
   except where a demo is specifically about a raw value.
   ------------------------------------------------------------------ */

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="mb-12 pb-8 border-b border-slate-200 dark:border-slate-800">
      <p className="text-overline text-indigo-600 dark:text-indigo-400 mb-2">
        {eyebrow}
      </p>
      <h1 className="text-h3 font-bold tracking-tight text-slate-900 dark:text-white mb-4">
        {title}
      </h1>
      <p className="text-body1 leading-relaxed text-slate-600 dark:text-slate-400 max-w-[62ch]">
        {intro}
      </p>
    </header>
  );
}

export function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mb-16 scroll-mt-8">
      <h2 className="text-h5 font-semibold text-slate-900 dark:text-white mb-2">
        {title}
      </h2>
      {description ? (
        <p className="text-body2 leading-relaxed text-slate-600 dark:text-slate-400 mb-6 max-w-[70ch]">
          {description}
        </p>
      ) : (
        <div className="mb-6" />
      )}
      <div className="column gap-6">{children}</div>
    </section>
  );
}

/**
 * A live demo card: rendered output on top, the exact class string below.
 * `code` is what the user should copy; `children` is the real markup.
 */
export function Demo({
  code,
  note,
  children,
  plain,
}: {
  code: string;
  note?: string;
  children: ReactNode;
  plain?: boolean;
}) {
  return (
    <figure className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900">
      <div
        className={
          plain
            ? "pa-6"
            : "pa-6 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
        }
      >
        {children}
      </div>
      <figcaption className="pa-4 flex flex-wrap items-center gap-3 border-t border-slate-200 dark:border-slate-800">
        <code className="text-caption font-mono text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950 px-2 py-1 rounded-md break-all">
          {code}
        </code>
        {note ? (
          <span className="text-caption text-slate-500 dark:text-slate-500">
            {note}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}

/** A neutral swatch/box used inside demos so the utility is what stands out. */
export function Box({
  children,
  className = "",
  label,
}: {
  children?: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={
        "rounded-md bg-indigo-500 text-white text-caption font-medium flex items-center justify-center " +
        className
      }
    >
      {children ?? label ?? ""}
    </div>
  );
}

/**
 * Renders the *actual* CSS that @zee-css/core emits for each class.
 * This runs on the server against the installed package, so the tables
 * in these docs can never drift from the library.
 */
export function RuleTable({
  classes,
  caption,
}: {
  classes: string[];
  caption?: string;
}) {
  const rows = classes.map((cls) => {
    const rule = generateCSSForClass(cls, { minify: true });
    const body = rule
      ? rule.css.replace(/^[^{]*\{/, "").replace(/\}\s*$/, "").trim()
      : null;
    return { cls, body };
  });

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900">
      {caption ? (
        <p className="pa-4 text-caption text-slate-500 dark:text-slate-500 border-b border-slate-200 dark:border-slate-800">
          {caption}
        </p>
      ) : null}
      <div className="overflow-x-auto zc-scroll">
        <table className="w-full table-auto border-collapse">
          <tbody className="divide-y divide-slate-100">
            {rows.map(({ cls, body }) => (
              <tr key={cls} className="odd:bg-slate-50">
                <td className="pa-3 align-top whitespace-nowrap">
                  <code className="text-caption font-mono text-indigo-700 dark:text-indigo-300">
                    {cls}
                  </code>
                </td>
                <td className="pa-3 align-top">
                  <code className="text-caption font-mono text-slate-600 dark:text-slate-400 break-all">
                    {body ?? "— not supported —"}
                  </code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Code({ children }: { children: string }) {
  return (
    <pre className="zc-scroll overflow-x-auto rounded-xl bg-slate-900 dark:bg-black text-slate-100 pa-5 text-caption leading-relaxed border border-slate-800">
      <code>{children}</code>
    </pre>
  );
}

export function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "warn";
  title: string;
  children: ReactNode;
}) {
  const toneCls =
    tone === "warn"
      ? "border-amber-300 bg-amber-50 dark:bg-amber-950 dark:border-amber-800"
      : "border-cyan-300 bg-cyan-50 dark:bg-cyan-950 dark:border-cyan-800";
  return (
    <div className={"rounded-xl border-l-4 pa-5 " + toneCls}>
      <p className="text-body2 font-semibold text-slate-900 dark:text-white mb-1">
        {title}
      </p>
      <div className="text-caption leading-relaxed text-slate-700 dark:text-slate-300">
        {children}
      </div>
    </div>
  );
}
