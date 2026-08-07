# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # dev server (webpack cache disabled in next.config.js)
npm run build   # production build
npm run start   # serve the build
npm run lint    # next lint
```

No test suite exists.

## What this is

Single-page Next.js 14 App Router portfolio (TypeScript, Tailwind, framer-motion, react-three-fiber). Deployed on Vercel (`@vercel/analytics`). Only one route: `app/page.tsx`.

## Architecture

**All content lives in `app/page.tsx`.** Case-study copy is hardcoded as module-level consts above the `Home` component — `<name>Sections` (JSX blocks), `<name>Stats`, `<name>Features`, `<name>Lessons`, `<name>Outcome` — then passed into `<CaseStudyCard data={...}>`. There is no CMS, MDX, or data file. Editing portfolio content means editing those consts.

**Card expansion is a single lifted state.** `Home` holds `expandedCard: number | string | null`; each `CaseStudyCard` and the `About` tile receives `isExpanded` + `onToggle`. Only one can be open. `CaseStudyCard` renders a bento grid tile and a `layoutId`-shared framer-motion full-screen modal; it also toggles `document.body.style.overflow` while open. Adding a card means adding it to the grid *and* giving it a unique index/id.

**Loader gates the page.** `Loader` (a three.js torus) calls `onLoadComplete` after a timer; `Home` renders nothing but the loader until `isLoaded` is true.

**Presentational case-study primitives** live in `components/CaseStudyComponents.tsx`: `MetaStrip`, `StatsRow`, `SectionLabel`, `FeatureGrid`, `LessonList`, `Callout`. Reuse these instead of writing new section markup. Note `CaseStudyCard` renders `stats`/`features`/`lessons`/`outcome` *after* `content`, so don't duplicate a `StatsRow` in `content` and in the `stats` prop unless you want it twice.

## Theming (the fiddly part)

Three layers stack, and they fight:

1. `app/globals.css` defines CSS vars per `html.dark` / `html.light`, plus utility classes `bg-primary`, `bg-secondary`, `bg-card`, `text-primary`, `text-secondary`, `text-muted`, `border-theme` that read them. **Use these classes for anything theme-aware** — not raw Tailwind colors.
2. `components/ThemeContext.tsx` swaps the `dark`/`light` class on `<html>`, persists to localStorage, and also sets inline `document.body.style` colors.
3. A "legacy color mappings" block in `globals.css` overrides the Tailwind palette names (`bg-nearBlack`, `text-midGray`, …) with `!important` per theme. Older components still use those names.

`app/layout.tsx` hardcodes `className="dark"` on `<body>` with `suppressHydrationWarning`; the real theme class goes on `<html>` client-side.

`DESIGN_SYSTEM.md` documents the intended light-first visual language (colors, type scale, spacing, motion). It predates the dark-default redesign — treat it as design intent, not a description of current CSS.

## Dead components

`DotGrid`, `FloatingHeader`, `Navigation`, `VerticalDialNav` are not imported by any rendered path (`Navigation` only pulls in `ThemeToggle`). Don't wire new work into them assuming they're live. Active tree: `TopNav` → `ThemeToggle`, `Hero`, `About` → `ThreeBackground`, `CaseStudyCard` → `CaseStudyComponents`, `InteractiveDots`, `Footer` (exports both default `CTAStrip` and named `Footer`).

## Conventions

- `@/*` maps to the repo root; components import each other with relative paths.
- Anything using hooks, framer-motion, or three.js needs `"use client"` — effectively every component here.
- Fonts load via `@import` from Google Fonts in `globals.css` and are exposed as `--font-serif` / `--font-sans` → Tailwind's `font-serif` / `font-sans`.
- Neo-brutalist offset shadows are Tailwind extensions: `shadow-neo`, `shadow-neoLg`. Buttons: `.btn-primary` / `.btn-secondary` in `globals.css`.
