# zee-css live docs — Next.js portfolio

A Next.js 16 App Router site that documents every utility in
[zee-css](https://www.npmjs.com/package/@zee-css/core) (v1.1.0) and is itself styled
with nothing but zee-css. There is no Tailwind, no CSS modules and no styled
components — `src/app/globals.css` is a 60-line reset plus theme tokens, and
everything else comes from the generated stylesheet.

## Run it

```bash
npm install     # pulls @zee-css/core and @zee-css/cli from npm
npm run dev     # generates src/app/zee.css, then starts Next.js
```

## Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Regenerate CSS, then `next dev` |
| `npm run build` | Regenerate minified CSS, then `next build` |
| `npm run zee:build` | Regenerate `src/app/zee.css` only |
| `npm run zee:watch` | Rebuild the CSS on every source change |
| `npm run zee:audit` | Fail if any class is unresolvable, unparseable, or missing from the stylesheet |

## How the CSS is produced

`@zee-css/cli` scans `<project>/src/**` for class names and writes one
stylesheet containing only the rules those classes need. That is why the app
lives under `src/app` rather than `app` — the v1.0.0 CLI hardcodes the `src`
subdirectory as its scan root.

```
src/app/**.tsx  ──scan──►  @zee-css/cli  ──generate──►  src/app/zee.css
                                │
                                └── @zee-css/core (415 rule patterns)
```

`src/app/layout.tsx` imports `globals.css` first and `zee.css` second, so
utilities always win the cascade.

## The audit script

`scripts/zee-audit.mjs` is a build-time check, not a workaround. It walks every
`className` attribute in the source tree and, for each class, asks
`@zee-css/core` three questions:

1. Does any rule match it? (catches typos and utilities that do not exist)
2. Is the selector it emits something a CSS parser will accept? (catches
   escaping regressions)
3. Did it actually make it into `zee.css`? (catches scanner blind spots)

It exits non-zero on any failure, so it works as a CI gate. Run it with
`npm run zee:audit`.

This project originally needed a generated safelist component, because the
zee-css v1.0.0 scanner could not see class names inside a conditional
expression. That is fixed in 1.1.0 and the safelist is gone.

## Pages

| Route | Covers |
|---|---|
| `/` | Install, wiring, live `generateCSS` output |
| `/spacing` | Padding, margin, negative margin, space-between, RTL logical props, gap |
| `/layout` | Display, flex, alignment, position, sizing, overflow, object fit, columns |
| `/grid` | Templates, spans, explicit placement, auto flow, the 12-column flex grid |
| `/typography` | Material scale, size scale, weight, family, rhythm, wrapping, lists |
| `/colors` | All 22 families x 11 shades, theme tokens, every color-aware prefix |
| `/backgrounds` | Position, size, repeat, clip, gradients, gradient text, blend modes |
| `/effects` | Shadows, rings, borders, radius, dividers, outlines, filters, backdrop filters |
| `/transforms` | Transitions, transforms, the four keyframe animations, will-change |
| `/interactivity` | Cursors, selection, form controls, touch, scroll snap, SVG, a11y |
| `/variants` | Breakpoints, 12 state variants, dark mode, print, motion |
| `/arbitrary` | `[value]` syntax, the prefix map, per-class `!important` |
| `/api` | `generateCSS`, options, `addColor`, breakpoints, a replacement build script |

The class-to-CSS tables on every page are rendered by calling
`generateCSSForClass()` from a Server Component, so they are generated from the
installed package at render time and cannot drift from the library.

## Bugs this project found in zee-css v1.0.0

Building the docs site surfaced six real defects. All are fixed in the local
zee-css checkout and released as **1.1.0**, with regression tests added to
`packages/core/src/__tests__/rules.test.ts` (76 passing).

| Bug | Symptom | Fix |
|---|---|---|
| Incomplete selector escaping | `bg-[#14b8a6]` emitted `.bg-\[#14b8a6\]`. The bare `#` opens a hash token, so Turbopack **fails the build** and other bundlers drop the rule silently. Same for `%` in `hsl()`. | `escapeClassName` now follows the `CSS.escape` rules |
| Leading digit not escaped | `.2xl\:pa-8` is not a valid identifier, so the entire `2xl` breakpoint silently did nothing | leading digits emit a numeric code-point escape (`.\32 xl\:pa-8`) |
| Scanner ignored expressions | `className={active ? "a" : "b"}` generated no CSS at all — a large share of conditional styling in any React app | the scanner reads the whole brace-balanced attribute value |
| `--auto-responsive` was a no-op | documented in the README, never read from `argv` | wired up, plus a new `--dark-mode <media\|class>` |
| Scan root hardcoded to `<dir>/src` | a Next.js `app/` project generated an empty stylesheet with no error | new `--content <glob>`, and the default falls back to `<dir>` when there is no `src/` |
| Missing utilities | `flex-col`, `border-l-4`, `max-w-lg` and `h-1/2` all produced nothing, though `w-1/2` worked | added direction aliases, per-side border widths, a named min/max size scale, and fractions on the block axis |

The first one is worth calling out: it is a build-breaking bug that only shows
up once you use an arbitrary color value, which is exactly the kind of thing a
docs site does and a smoke test does not.

## Layout

```
src/app/
├── globals.css              reset, theme tokens, body font
├── zee.css                  GENERATED — do not edit
├── layout.tsx               shell, sidebar, imports both stylesheets
├── page.tsx                 overview
├── _components/
│   ├── ui.tsx               PageHeader, Section, Demo, RuleTable, Code, Callout
│   └── Nav.tsx              sidebar + prev/next (client component)
└── <category>/page.tsx      one route per utility category
scripts/
└── zee-audit.mjs            class audit / CI gate
```
