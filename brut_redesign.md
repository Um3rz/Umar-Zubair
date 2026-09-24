# BRUT.-inspired redesign

## Context

The user wants the portfolio's layout/composition pushed toward the reference "BRUT." studio site — oversized display type, a numbered stacked work list with alternating solid-color rows, a two-column hero with a photo block, and a stronger numbered/mono-label idiom — **without changing the color palette** just set up (Asparagus green `--signal-field`, Faded Orange `--limit-field`, Navajo White `--paper`, Limed Spruce `--ink`).

Good news: the codebase is already a zero-radius, thick-bordered, no-shadow neobrutalist system (`border-2 border-theme`, `.tile-ink/.tile-signal/.tile-limit`, `.section-bar`, `.pill`, Archivo/Archivo Expanded/Azeret Mono fonts). This is a **composition and scale** change, not a system rebuild. `CLAUDE.md`/`DESIGN.md` are stale (wrong component names, wrong fonts/colors, mention dead components/shadow classes that no longer exist) — the plan below is based on the actual current code.

Scope, per user's decisions:
1. **Work section**: switch from the 2-col `CaseStudyCard` grid to full-width numbered stacked rows (01, 02, 03…), alternating tile fills, same click-to-expand modal.
2. **Hero**: add a two-column composition — headline + a photo/texture block, plus a small availability pill.
3. **No new sections** (no marquee/ticker, no services accordion). About stays structurally as-is (it's already the asymmetric bento the reference implies). Only Hero, Work, and type scale get touched; CTAStrip/Footer untouched.

## Changes

### 1. `components/CaseStudyCard.tsx` — tile → full-width row

Edit in place, no new `CaseStudyRow.tsx`. `CaseStudyCard` has exactly one call site (`app/page.tsx`), so a `row`/`grid` variant prop or a parallel component would be an unrequested abstraction — everything about the modal system (view-transition/`layoutId` dual path, `useModalA11y`, `ModalContent`, `metaItems`) stays untouched.

- Replace the collapsed tile's `motion.div` classes (currently `border-2 border-theme p-5 md:p-6 min-h-[200px]`) with a full-bleed row: `border-2 border-theme border-t-0 first:border-t-2 p-5 md:px-8 md:py-6`, rows touching (no `gap`), sharing borders as dividers.
- Restructure the inner JSX from stacked header/footer to one row on `md:+`: number/category (mono, left) — title (`font-display`, flex-grow) — chevron (right). Mobile keeps a stacked fallback so the "Read Case Study" affordance survives at narrow widths.
- `TILE_VARIANTS` cycling (`["", "tile-ink", "tile-limit", "tile-signal"]`, `(ordinal-1) % 4`) stays exactly where it is — only the JSX shape around `variant` changes, not the indexing logic (only reader, no reason to hoist it into a shared module).

### 2. `app/page.tsx` — work list wrapper + heading bump

- Line ~686: replace `grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5` wrapper around `CASE_STUDIES.map(...)` with a plain stacked container (e.g. `border-t-2 border-theme`, or nothing if the row's own `first:border-t-2` handles the top rule). The `.map()` body, keys, and props passed to `CaseStudyCard` don't change.
- `H2` const (line 30): modest bump `text-xl md:text-2xl` → `text-2xl md:text-3xl` (in-modal section headings — small nudge, not hero-scale). `H3` (mono eyebrow) stays as-is; it's already the small-label idiom to extend, not enlarge.

### 3. `components/Hero.tsx` — two-column composition

- Change the outer `tile-signal border-2 border-theme p-6 md:p-12` block into `grid grid-cols-1 md:grid-cols-[1.6fr_1fr] border-2 border-theme`, moving padding onto an inner left-column wrapper so the right column can bleed to the border edge; add `md:border-l-2 border-theme` between columns.
- Left column: existing role/location line, typewriter `h1`, paragraph, buttons — unchanged, just reparented. Push H1 size up using **arbitrary Tailwind values** (`text-5xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem]`, not new `tailwind.config.ts` scale entries — a headline-only size used in one place doesn't earn a named config step). Recheck the `min-h-[2.85em]` typewriter reserve height against the new size so it doesn't visibly reflow.
- Right column: reuse `components/profile-photo.png` (already a static import elsewhere in `About.tsx`) in a `hidden md:block relative` column with `fill`/`object-cover` — satisfies the "photo/texture block" without new assets or CSS-pattern code.
- Availability tag: reuse the existing `.pill` class — `<span className="pill absolute top-3 right-3 md:top-4 md:right-4 bg-primary">Available — Riyadh, SA</span>` positioned over the image column. Trim the now-redundant `Riyadh,SA` inline span from the top-row meta line since the pill carries it.

### 4. `app/globals.css` — likely untouched

Reuses `.pill`, `.tile-*`, `.section-bar`, `.border-theme` as-is. Only add a helper class if the row divider pattern (`border-t-0 first:border-t-2`) ends up repeated 3+ times elsewhere — default to inline Tailwind.

### 5. Out of scope (explicitly, per user answers)

- `components/About.tsx` — no structural change (its asymmetric grid already matches the bento idea).
- No marquee/ticker strip, no new services/accordion section.
- `components/Footer.tsx` (`CTAStrip`/`Footer`) — untouched.
- `tailwind.config.ts` — no new font-size scale entries (arbitrary values used instead); colors untouched (already correct per prior task).

## Verification

1. `npm run dev`, open the site.
2. Hero: two-column layout at `md:+` (headline + photo + pill), collapses to single column with photo hidden below `md:`; typewriter still animates without visible jump at the larger H1 size.
3. Work section: rows render full-width and stacked, fills cycle tile-ink/tile-signal/tile-limit/plain in order (check an early row and index 4+ to confirm the 4-variant wrap), no doubled borders between rows, click still opens the existing modal via the same crossfade/view-transition path.
4. About: pixel-unchanged (no accidental regression from shared classes touched elsewhere).
5. Toggle dark mode (`ThemeToggle`) and repeat steps 2–4 — confirm all new elements (row fills, Hero photo/pill) read correctly against inverted paper/ink tokens.
6. Resize to mobile (~375px): Hero single-column with photo hidden, Work rows stack without title overflow at the bumped size, CTAStrip/Footer unaffected.
7. Keyboard/a11y: Tab to a work row, Enter/Space opens the modal, Escape closes it — confirms the new row DOM didn't break `useModalA11y`'s focus order.
