"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "./routes";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Documentation"
      className="column gap-1 pa-4 lg:h-screen lg:sticky lg:top-0 overflow-y-auto zc-scroll border-b lg:border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
    >
      <Link href="/" className="flex items-center gap-3 pa-3 mb-2 rounded-lg">
        <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg">
          Z
        </span>
        <span className="column">
          <span className="text-body2 font-bold text-slate-900 dark:text-white leading-tight">
            zee-css
          </span>
          <span className="text-caption text-slate-500 dark:text-slate-500 leading-tight">
            v1.0.0 · live docs
          </span>
        </span>
      </Link>

      {ROUTES.map((r) => {
        const active = pathname === r.href;
        return (
          <Link
            key={r.href}
            href={r.href}
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "column px-3 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-950 border-l-4 border-indigo-500 transition-colors duration-150"
                : "column px-3 py-2 rounded-lg border-l-4 border-transparent hover:bg-slate-100 transition-colors duration-150"
            }
          >
            <span
              className={
                active
                  ? "text-body2 font-semibold text-indigo-700 dark:text-indigo-300 leading-snug"
                  : "text-body2 font-medium text-slate-700 dark:text-slate-300 leading-snug"
              }
            >
              {r.label}
            </span>
            <span className="text-caption text-slate-400 dark:text-slate-600 leading-tight">
              {r.blurb}
            </span>
          </Link>
        );
      })}

      <a
        href="https://www.npmjs.com/package/@zee-css/core"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-3 py-2 rounded-lg text-caption text-slate-500 dark:text-slate-500 hover:bg-slate-100 transition-colors duration-150"
      >
        @zee-css/core on npm &#8599;
      </a>
    </nav>
  );
}

export function PrevNext() {
  const pathname = usePathname();
  const i = ROUTES.findIndex((r) => r.href === pathname);
  const prev = i > 0 ? ROUTES[i - 1] : null;
  const next = i >= 0 && i < ROUTES.length - 1 ? ROUTES[i + 1] : null;

  return (
    <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 justify-between">
      {prev ? (
        <Link
          href={prev.href}
          className="column px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 transition-colors duration-150"
        >
          <span className="text-caption text-slate-400 dark:text-slate-600">
            &#8592; Previous
          </span>
          <span className="text-body2 font-semibold text-slate-800 dark:text-slate-200">
            {prev.label}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={next.href}
          className="column px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 transition-colors duration-150 text-end"
        >
          <span className="text-caption text-slate-400 dark:text-slate-600">
            Next &#8594;
          </span>
          <span className="text-body2 font-semibold text-slate-800 dark:text-slate-200">
            {next.label}
          </span>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
