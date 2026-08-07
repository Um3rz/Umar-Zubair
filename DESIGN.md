---
name: Umar Zubair Portfolio
description: A dark specimen wall where each project is a framed, individually-lit exhibit.
colors:
  indigo: "#3D3D9E"
  indigo-light: "#4F4FBF"
  accent-text: "#8B8BE0"
  near-black: "#111118"
  surface-raised: "#1A1A24"
  off-white: "#F5F5F7"
  paper-white: "#FFFFFF"
  paper-tint: "#F8F9FA"
  ash: "#9CA3AF"
  slate: "#4B5563"
  stone: "#6B7280"
  hairline-dark: "#374151"
  hairline-light: "#E5E7EB"
  rotation-emerald: "#10B981"
  rotation-amber: "#D97706"
  rotation-rose: "#F43F5E"
typography:
  display:
    fontFamily: "DM Serif Display, serif"
    fontSize: "clamp(1.875rem, 5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "DM Serif Display, serif"
    fontSize: "clamp(1.5rem, 3vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "normal"
  title:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  none: "0px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "64px"
components:
  button-primary:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.paper-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.indigo-light}"
    textColor: "{colors.paper-white}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.indigo}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.off-white}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  specimen-tile:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.off-white}"
    typography: "{typography.title}"
    rounded: "{rounded.xl}"
    padding: "32px"
  stat-cell:
    backgroundColor: "transparent"
    textColor: "{colors.indigo}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "16px 20px"
---

# Design System: Umar Zubair Portfolio

## Overview

**Creative North Star: "The Specimen Wall"**

The page is a dark wall of mounted specimens. Each project sits in its own frame — bordered, individually lit by its own accent, casting a hard shadow onto the surface behind it. Nothing floats and nothing bleeds into anything else. The visitor scans the wall, picks a specimen, and it opens into a vitrine: the same frame, expanded to fill the room, holding the full article. The frame that was clicked is the frame that opens — the object is never swapped out for a different one.

This is why the system is built from borders rather than backgrounds. Every element that matters is enclosed by a visible 2px rule, and the enclosure is what makes it a specimen rather than a region of page. The shadow is cast, not diffused: a hard offset with zero blur, the shadow of a physical card pinned to a wall under a single light source. Depth here is literal, not atmospheric.

The palette is disciplined to one voice. Indigo is the only color that carries meaning — action, emphasis, the accent on the wordmark, the ring of the loader. The other tile colors are lighting, not signal: they keep a wall of frames from reading as a single gray block. The type does the tonal work instead. DM Serif Display carries every headline with an editorial confidence that says *this was written*, while DM Sans handles everything functional at a generous 17px/1.75 that treats a case study as something to actually read, not skim past.

**Key Characteristics:**
- Enclosure over fill: 2px borders define objects; backgrounds are near-transparent tints
- Hard-cast shadows with zero blur (`4px 4px 0`, `6px 6px 0`), never soft or ambient
- One meaningful accent (indigo) plus a decorative tile rotation that carries no information
- Editorial serif headlines against a functional sans body, no third voice
- Dark by default, with a full light theme that must hold the same rules
- Shared-element expansion: tiles grow into modals, they don't cross-fade into them

## Colors

A near-black wall, a single indigo voice, and a decorative rotation that exists only to keep adjacent frames distinguishable.

### Primary
- **Signal Indigo** (`{colors.indigo}`): The only color permitted to mean something. Primary buttons, the secondary button's border and text, all inline links, section-heading eyebrows in modals, the stat numbers in a `StatsRow`, the loader's torus and pulse dots, the interactive dot-grid background, the period in the `Umar.` wordmark, and every focus-worthy interactive edge.
- **Lifted Indigo** (`{colors.indigo-light}`): Hover state for the primary button and the theme toggle only. Never a resting color.
- **Accent Text** (`{colors.accent-text}`): The accent *as type*, resolved through `--accent-text` — `#8B8BE0` in dark theme, `#3D3D9E` in light. Signal Indigo is a fill color, not a text color: on the dark wall it measures **2.11:1**, below even the 3:1 large-text floor. Lightened, it reaches 6.15:1 on the page surface and 5.64:1 on a raised card. Carries the stat numerals, lesson numerals, the hero eyebrow, About-modal section headings, footer links, the secondary button's label and border, and the focus ring.

### Secondary
- **Rotation Emerald** (`{colors.rotation-emerald}`), **Rotation Amber** (`{colors.rotation-amber}`), **Rotation Rose** (`{colors.rotation-rose}`): Applied to specimen tiles by card index, at 20% opacity for the fill and full strength for the border and accent. These are decorative variety, not identity. A project does not own its color and the color does not encode a category — the index does the assigning, and re-ordering the grid re-colors the tiles. Treat them as stage lighting.

### Neutral
- **Wall Black** (`{colors.near-black}`): The dark theme's page surface, the light theme's primary text, and the cast-shadow color. Chosen over true black because it reads as a deep charcoal rather than an absence.
- **Raised Surface** (`{colors.surface-raised}`): Dark theme's card and secondary surface. One step off the wall, used for the CTA strip, feature cells, and chips.
- **Off-White** (`{colors.off-white}`): Dark theme's primary text.
- **Paper White** (`{colors.paper-white}`) / **Paper Tint** (`{colors.paper-tint}`): Light theme's primary and secondary surfaces.
- **Ash** (`{colors.ash}`): Dark theme's secondary and muted text — one value serving both roles.
- **Slate** (`{colors.slate}`) / **Stone** (`{colors.stone}`): Light theme's secondary and muted text respectively.
- **Hairline Dark** (`{colors.hairline-dark}`) / **Hairline Light** (`{colors.hairline-light}`): Border color per theme, consumed through `.border-theme`.

### Named Rules

**The Fill Is Not The Type Rule.** `#3D3D9E` is a fill. White on it is 8.9:1 and correct; it as text on the dark wall is 2.11:1 and is never acceptable. Any accent *text*, *icon*, or *control border* goes through `var(--accent-text)`. If you find yourself writing a literal indigo on a color property other than `background-color`, you are reintroducing the bug.

**The One Voice Rule.** Indigo is the only color that carries meaning. If a new element needs to signal *interactive*, *primary*, or *important*, it uses indigo. If it needs to look different from its neighbor, that is a job for the rotation, for a border, or for type weight — never for a new hue. The system has exactly one voice and adding a second dilutes it.

**The Rotation Is Not Semantic Rule.** Never write copy, a legend, or a filter that depends on a tile's color meaning something. The rotation is assigned by array index. If the grid order changes, every color changes, and nothing should break.

**The Theme Parity Rule.** Every color decision must be expressed through the theme-aware utilities (`bg-primary`, `bg-secondary`, `text-primary`, `text-muted`, `border-theme`) or through a value that has a defined counterpart in both themes. A hardcoded hex or a raw Tailwind palette color is a bug unless it is identical and correct in dark and light. The cast shadow and the tile hover wash both resolve through theme-scoped custom properties (`--shadow-color`, `--tile-wash`) for exactly this reason.

## Typography

**Display Font:** DM Serif Display (with `serif` fallback)
**Body Font:** DM Sans (with `sans-serif` fallback), variable optical size 9–40, weights 300–600
**Label/Mono Font:** none. There is no monospace face in the system.

**Character:** An editorial pairing under tension with a technical subject. The serif is high-contrast and unapologetically literary — it makes a case-study headline read like a feature article rather than a slide title. DM Sans underneath is neutral to the point of being invisible, which is the point: it gets out of the way of a 17px/1.75 reading experience. The pairing is warm where the palette is cold.

### Hierarchy
- **Display** (DM Serif Display, 400, `1.875rem → 3.75rem` responsive, line-height 1.1): The hero headline only. One per page.
- **Headline** (DM Serif Display, 400, `1.5rem → 1.875rem`, line-height ~1.25): Section headings inside case-study modals, the About tile's role line, the CTA strip's heading, and the numeral in a `LessonList`.
- **Title** (DM Sans, 600, `1.5rem → 2.25rem`, line-height 1.2): Specimen tile names on the wall and the modal header. Sans, not serif — the tile is an object label, the headline inside is prose.
- **Body** (DM Sans, 400, 17px, line-height 1.75): All reading copy. Set on `body` and inherited. Case-study prose steps up to `1.125rem` on desktop.
- **Label** (DM Sans, 600, 0.75rem, uppercase, letter-spacing 0.1em): Meta keys, section labels, stat captions, nav links, skill chips, and the "Recent Experience" / "Toolkit" headings. The hero's role line stretches to 0.2em as the single widest tracking in the system.

### Named Rules

**The Serif Speaks Rule.** DM Serif Display is reserved for prose that makes a claim — headlines, the display line, stat numerals, lesson numbers. It never sets a label, a button, a nav item, or a piece of UI chrome. When in doubt, the sans is correct.

**The Measure Rule.** Case-study body copy runs inside a `max-w-5xl` modal with `p-6 md:p-10`, which puts the measure well past a comfortable 65–75ch on a wide screen. New long-form blocks should carry their own `max-w-[70ch]` rather than filling the modal width.

## Layout

A single scrolling route composed of one asymmetric bento grid. The grid is `max-w-[1400px]`, centered, with `px-4 md:px-8` gutters and `gap-4 md:gap-6` between tiles. It steps 1 column → 3 columns (`md`) → 4 columns (`lg`), and tiles declare their own `colSpan` / `rowSpan` per breakpoint rather than flowing automatically. Tiles carry a `minHeight` of 250px, or 400px when they span two rows.

The fixed top navigation sits in a wider `max-w-screen-2xl` container with `px-6 md:px-12`, so the nav's edges sit outboard of the grid's. It is transparent at rest with `py-6`, and on scroll past 20px it compresses to `py-4`, gains `bg-primary/90`, a backdrop blur, and a bottom hairline. Content clears it with `pt-24` on the main element.

Expanded specimens are centered overlays: `max-w-5xl` for case studies, `max-w-4xl` for the About panel, both `max-h-[90vh]` with internal scroll on desktop and full-bleed full-height on mobile. Their headers are sticky with a blurred backdrop. Body scroll is locked while one is open.

Rhythm follows Tailwind's 4px scale. In practice the system uses a narrow set: 16px and 24px for grid gaps and internal groupings, 24–32px for tile and modal padding, 40px below a `StatsRow` or `MetaStrip`, and 48–64px for the vertical breaks between page-level bands.

**Breakpoints:** 640px (`sm`), 768px (`md`), 1024px (`lg`), 1280px (`xl`).

## Elevation & Depth

The system is neobrutalist and the shadow is a cast shadow, not an atmospheric one. There is no blur and no spread anywhere — every shadow is a hard-edged duplicate of the element offset down and to the right, as if a flat card were pinned a few millimetres off a wall under one hard light. Depth is communicated by that offset plus the 2px enclosing border. There are no soft shadows, no glows, and no layered elevation ramp.

The one place depth becomes atmospheric is the modal scrim: a `bg-black/40` with a backdrop blur, which pushes the whole wall out of focus so a single specimen can hold attention. That is a mode change, not an elevation step.

### Shadow Vocabulary
- **Cast** (`box-shadow: 4px 4px 0px var(--shadow-color)`): The default. Specimen tiles, the About tile, buttons at rest, the avatar frame.
- **Cast Lifted** (`box-shadow: 6px 6px 0px var(--shadow-color)`): The hero tile, `StatsRow`, and any button on hover. Paired with a `-translate-y-0.5` so the element lifts and its shadow grows together.

`--shadow-color` is Signal Indigo (`#3D3D9E`) in dark theme and wall black (`#111118`) in light. The shadow is always the value that contrasts with the surface behind it. In dark theme that makes it a cast *chromatic* shadow rather than a cast shade — the same physical idea, but the light source is the system's own accent, which keeps the One Voice Rule intact instead of introducing a second bright neutral.

### Named Rules

**The Zero Blur Rule.** Every shadow in this system has a blur radius of `0`. A shadow with blur belongs to a different world. If an element needs separation and cannot take an offset shadow, give it a border instead.

**The Shadow Needs A Wall Rule.** A cast shadow only reads against a surface lighter than the shadow itself. The shadow color must contrast with whatever is behind the element, which means it cannot be a fixed value across both themes.

## Shapes

Two form languages coexist, split by scale. **Frames are softened, contents are hard.** The large objects — specimen tiles, the hero, the About tile — carry `rounded-xl` (12px), which keeps a wall of big rectangles from feeling like a spreadsheet. Everything inside a frame is square-cornered: `StatsRow`, `MetaStrip`, `FeatureGrid` cells, `Callout`, and both buttons all sit at 0px radius. Small interactive tokens go fully round: skill chips, the avatar, the theme toggle, and the loader's pulse dots are all `rounded-full`. The only intermediate values are the toolkit tiles at 6px and the certification and tool cards at 8px.

Borders are the system's primary structural device and come in two weights. **2px** encloses an object — every tile, modal, button-secondary, `MetaStrip`, `StatsRow`, `FeatureGrid` cell, and `Callout`. **1px** separates within an object — chips, tool tiles, and the divider between lessons in a `LessonList`. A 2px border says *this is a thing*; a 1px border says *these are parts of one thing*.

## Components

### Buttons
- **Shape:** Perfectly square (0px radius). The only unsoftened rectangles at their scale, which is what makes them read as controls.
- **Primary:** Indigo fill, white text, 12px 24px padding (`px-6 py-3`), 0.875rem, weight 500, no border, Cast shadow.
- **Hover / Focus:** Fill lifts to Lifted Indigo, the element translates `-2px` on Y, and the shadow grows from Cast to Cast Lifted. 150ms, `ease-out`. The lift and the shadow growth are one gesture and must always change together.
- **Secondary:** Transparent fill, indigo text, 2px indigo border, same padding and same lift-plus-shadow hover. On hover it fills with indigo and flips its text to white — the border it already had becomes the fill, so the button gains weight without changing size.

### Chips
- **Style:** 1px `border-theme`, `rounded-full`, `px-3 py-1`, 0.75rem, weight 500, over a translucent surface (`bg-primary/40`).
- **State:** Static. Chips are labels, not controls — they carry no hover or selected state, and should not gain one without becoming actually interactive.

### Cards / Containers
- **Corner Style:** 12px (`rounded-xl`) for wall-level tiles; 0px for every container nested inside one.
- **Background:** The tile's rotation color at 20% opacity over the page surface. Never an opaque fill.
- **Shadow Strategy:** Cast on standard tiles, Cast Lifted on the hero. See Elevation & Depth.
- **Border:** 2px in the tile's full-strength rotation color, set inline so it survives the theme swap.
- **Internal Padding:** 24px, stepping to 32px at `md`.
- **Behavior:** Content is bottom-anchored (`justify-end`) so the tile reads as a label plate on a frame. A gradient wash fades in from the bottom on hover — darkening in dark theme, lightening in light, via `--tile-wash` — and a chevron slides in beside the meta line. The tile *shrinks* to 0.98 on hover rather than growing — a press-in, not a lift, which is the opposite of the button's gesture and deliberately so: tiles are surfaces to push into, buttons are objects to lift.

### Navigation
- **Style:** Fixed, full-width, transparent at rest, condensing to a blurred translucent bar with a bottom hairline after 20px of scroll. Slides down from `-100px` on mount with a 200ms delay.
- **Typography:** Label role — 0.875rem, weight 600, uppercase, wide tracking.
- **States:** Links shift to indigo on hover. The "Download CV" link is the exception: it renders as a filled indigo button with a 4px radius, the only rounded rectangle in the nav, which is what makes it the primary action.
- **Mobile:** Contact, LinkedIn, and GitHub links are hidden below `sm`/`md`; only the CV button, the centered wordmark, and the theme toggle survive. There is no drawer or hamburger — the nav degrades by subtraction.

### Signature Component: The Specimen Vitrine
The defining interaction. Every tile on the wall shares a framer-motion `layoutId` with its own expanded modal, so opening one is a continuous geometric transformation of the same object rather than a new panel appearing. The frame the visitor clicked physically grows into the reading surface, keeping its border color throughout. Exactly one specimen can be open at a time, enforced by a single lifted `expandedCard` state on the page. Opening locks body scroll; the scrim blurs the wall behind. Closing reverses the same transformation.

This is the one place the system spends its motion budget, and it should stay that way. New sections should not add competing entrance choreography.

**Its accessibility contract is part of the component, not an add-on.** Tile roots carry `role="button"`, `tabIndex={0}`, `aria-expanded`, and an Enter/Space handler — they are not real `<button>`s because that would nest the `<h3>` the wall is browsed by. The dialog carries `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` pointing at its title. `components/useModalA11y.ts` owns the shared behaviour: Escape closes, focus moves into the dialog on open and returns to the trigger on close, Tab cycles inside, and body scroll is restored to its prior value rather than to `auto`. The scrim closes on `mousedown` that *starts* on the scrim, so selecting text inside and releasing past the edge does not dismiss. Any new expandable surface reuses this hook rather than reimplementing it.

**Focus is always visible.** A single global `:focus-visible` rule draws a 2px `var(--accent-text)` outline at 2px offset. There is no element in this system that may suppress it.

## Do's and Don'ts

### Do:
- **Do** give every new interactive element a keyboard path and an accessible name, and reuse `useModalA11y` for anything that opens over the page.
- **Do** put accent color on `background-color` and route accent *text*, *icons*, and *control borders* through `var(--accent-text)`.
- **Do** route every color through the theme-aware utilities (`bg-primary`, `bg-secondary`, `text-primary`, `text-secondary`, `text-muted`, `border-theme`) or through a value verified correct in both themes.
- **Do** enclose new objects with a 2px border and separate their internal parts with 1px.
- **Do** pair the button's hover lift with its shadow growth — `-translate-y-0.5` and Cast → Cast Lifted always travel together.
- **Do** reuse the primitives in `components/CaseStudyComponents.tsx` (`MetaStrip`, `StatsRow`, `SectionLabel`, `FeatureGrid`, `LessonList`, `Callout`) instead of writing new section markup.
- **Do** give new long-form copy its own `max-w-[70ch]`; the modal is wider than a comfortable measure.
- **Do** draw icons from `lucide-react` at a consistent size within a group (20px in dense tool grids, 24–28px in feature cells).
- **Do** keep 12px radius for wall-level frames and 0px for everything nested inside them.

### Don't:
- **Don't** hardcode the cast-shadow color. It must stay `var(--shadow-color)` so it inverts per theme; a literal hex reproduces the bug where the shadow matched the dark background exactly and the system's signature depth cue vanished.
- **Don't** hardcode `text-white` on a tile. Specimen tile titles use `text-primary` and meta text uses `text-secondary`. Fixed white over a 20%-opacity accent tint lands at roughly 1.3:1 in light theme — unreadable, and a WCAG failure.
- **Don't** give the tile hover wash a fixed color. It must stay `var(--tile-wash)` — darkening on hover is correct in dark theme and destroys the now-dark tile text in light theme.
- **Don't** use `hover:bg-white` on `.btn-secondary`. A hardcoded white hover in a dark-default system inverts the button's contrast in the wrong direction; it fills with indigo instead.
- **Don't** add a blur to any shadow. See The Zero Blur Rule.
- **Don't** introduce a second meaningful accent color. See The One Voice Rule.
- **Don't** attach meaning to the tile rotation colors. See The Rotation Is Not Semantic Rule.
- **Don't** use `font-mono`. There is no monospace family in `tailwind.config.ts`, so the one existing use (experience dates in `About.tsx`) silently falls back to the browser default and breaks the two-face pairing. Either define a real mono face or remove the class.
- **Don't** extend the "legacy color mappings" block in `app/globals.css`. All eight `!important` overrides (`bg-nearBlack`, `text-midGray`, `border-lightGray`, …) are dead — no component references them. They should be deleted, not built on.
- **Don't** reach for `amber` (`#F5A623`) or `crimson` (`#E84545`) from `tailwind.config.ts`. Both are declared and never used; they are residue from the superseded design document, not part of this system.
- **Don't** put `text-indigo`'s literal `#3D3D9E` on any color property other than `background-color`. See The Fill Is Not The Type Rule.
- **Don't** ship a clickable `div` without `role`, `tabIndex`, and a key handler, or a dialog without `role="dialog"`, a label, Escape, and focus return.
- **Don't** add new entrance animations to sections. The motion budget belongs to the specimen vitrine transition.
