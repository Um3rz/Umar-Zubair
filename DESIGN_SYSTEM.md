# Umar Zubair — PM Portfolio | Design System Document

## Overview

This document defines the visual language, typography, color system, spacing, and component patterns for a one-page PM portfolio. The design system bridges three different project contexts (product research, software engineering, AI tooling) on a single page without visual fragmentation.

**Design Principle:** Show evidence of thought, not just taste. Every design decision should communicate something about how you approach product problems.

---

## 1. Color System

### Primary Palette

```
Deep Indigo:      #3D3D9E
  — Institutional authority. Primary action. Headings.
  — Why: Echoes LUMS brand while feeling tech-forward.

Near-Black:       #111118
  — Primary text. Section dividers. Borders. Shadows.
  — Why: True black (#000000) causes eye strain on screens; this reads darker.

Off-White:        #F5F5F7
  — Background. Breathing room. Light UI elements.
  — Why: Warmer than pure white; prevents harsh contrast while staying clean.

Mid-Gray:         #6B6B7B
  — Secondary text. Labels. Subdued hierarchy.
  — Why: Clear enough to read, quiet enough to not compete with primary text.

Light-Gray:       #E2E2E8
  — Subtle borders. Dividers between sections.
  — Why: Provides visual separation without heaviness.
```

### Accent Colors

```
Warm Amber:       #F5A623
  — Interactive highlights. Hover states. Call-to-action elements.
  — Why: Signals interactivity. Warm without being saturated.

Soft Crimson:     #E84545
  — Error states. Destructive actions. Caution signals.
  — Why: Only used in specific, purposeful contexts (not decorative).
```

### Usage Rules

- **Backgrounds:** Off-White only. Never white, never gray.
- **Primary Text:** Near-Black only.
- **Dividers:** Light-Gray for subtle breaks; 2px Near-Black borders for section boundaries.
- **Accent:** Indigo for interactive elements, call-to-actions, and section headers.
- **Hover States:** Lighten Indigo to #4F4FBF or darken background to #ECECEF.

---

## 2. Typography System

### Typeface Pairing

**DM Serif Display** (Serif – Display/Headings)
```
Provider: Google Fonts
Weights: 400, 700
Use case: H1, section eyebrows, stat numbers
Characteristics: Elegant, geometric, carries weight without size
```

**DM Sans** (Humanist Sans – Body/UI)
```
Provider: Google Fonts
Weights: 300, 400, 500, 600
Optical sizes: 9..40px (variable)
Use case: Body copy, labels, nav, buttons, meta text
Characteristics: High legibility. Designed for screens. Pairs well with serif.
```

### Type Scale

```
H1 (Hero/Title)
  — Font: DM Serif Display
  — Size: clamp(2.8rem, 5vw, 4.2rem)
  — Line-height: 1.1
  — Color: Near-Black
  — Use: Page title, case study title

H2 (Section Heading)
  — Font: DM Serif Display
  — Size: 1.85rem
  — Line-height: 1.2
  — Color: Near-Black
  — Weight: 400
  — Margin-bottom: 28px
  — Use: Section subheadings, discovery/process/result headers

H3 (Subsection)
  — Font: DM Sans
  — Size: 1.1rem
  — Weight: 600
  — Line-height: 1.4
  — Color: Near-Black
  — Margin-top: 32px
  — Use: Feature titles, key insight headers

Body Text
  — Font: DM Sans
  — Size: 17px
  — Weight: 400
  — Line-height: 1.75
  — Color: Near-Black
  — Max-width: 760px per line (comfortable reading)

Small Text / Labels
  — Font: DM Sans
  — Size: 0.78rem (12.5px)
  — Weight: 600
  — Text-transform: uppercase
  — Letter-spacing: 0.12em
  — Color: Mid-Gray

Meta Text (dates, tags)
  — Font: DM Sans
  — Size: 0.9rem
  — Weight: 500
  — Color: Mid-Gray
  — Use: Job titles, timeline info
```

### Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&display=swap" rel="stylesheet" />
```

---

## 3. Spacing System

**Base Unit: 8px** — All spacing is a multiple of 8 for consistency.

### Spacing Scale

```
4px   — Micro gaps (between elements within a card)
8px   — Small gap (space between inline elements)
12px  — Small-medium
16px  — Medium (padding in cards, small margins)
20px  — Medium-large
24px  — Large (section padding, margin between paragraphs)
32px  — Extra-large (major padding)
40px  — Extra-large+ (padding inside sections)
48px  — Jumbo (margin between major sections)
64px  — Massive (section top/bottom padding)
80px  — Page-level (hero, footer spacing)
120px — Page break spacing
```

### Common Patterns

```
Container padding (left/right):     32px
Section top/bottom padding:         80px
Card internal padding:              20px 32px
List item margins:                  20px top, 20px bottom
Button internal padding:            12px 24px
Input field padding:                12px 16px
Border radius:                      0 (hard corners, no rounding)
```

---

## 4. Components & Patterns

### Borders & Shadows

```css
/* Standard border */
border: 2px solid #111118;

/* Soft divider */
border: 1px solid #E2E2E8;

/* Card/element shadow (Neo-Brutalist) */
box-shadow: 4px 4px 0px #111118;

/* Larger shadow (hero card, featured element) */
box-shadow: 6px 6px 0px #111118;
```

**Why Neo-Brutalism for a PM portfolio?**
- Hard borders and shadows signal precision and intentionality.
- Opposite of smooth/gradient design = intentional, not generic.
- Mirrors Clutterless visual identity (shows consistency across projects).
- On a text-heavy page, sharp geometry helps hierarchy and scannability.

### Buttons

```
Primary Button (CTA):
  — Background: Indigo (#3D3D9E)
  — Color: Off-White
  — Padding: 12px 24px
  — Font: DM Sans, 500, 0.95rem
  — Border: none
  — Box-shadow: 4px 4px 0px #111118
  — Hover: background #4F4FBF
  — Cursor: pointer

Secondary Button:
  — Background: transparent
  — Color: Indigo
  — Border: 2px solid Indigo
  — Padding: 12px 24px
  — Box-shadow: 4px 4px 0px #111118
  — Hover: background #F5F5F7
```

### Case Study Cards (Collapsed State)

```
Layout: Flex row, space-between
Padding: 20px 32px
Border: 2px solid #E2E2E8
Background: Off-White
Box-shadow: 4px 4px 0px #111118

Left side:
  — Project title (H3, bold)
  — One-line description (small, gray)

Right side:
  — Expand icon (chevron, rotates on open)

Hover:
  — Background becomes Off-White (no change, already there)
  — Cursor pointer
  — Border-color remains Light-Gray
```

### Case Study Cards (Expanded State)

```
Same structure, but adds:
  — Expanded content below the header
  — Padding increases to 32px
  — Border remains 2px solid
  — Content flows vertically with section breaks
```

### Meta Strip (Timeline / Key Facts)

```
Layout: Flex wrap, gap 24px
Padding: 20px 0
Border-bottom: 2px solid #E2E2E8
Margin-bottom: 64px

Item structure:
  .meta-key: 0.72rem, uppercase, weight 600, Mid-Gray
  .meta-val: 0.9rem, weight 500, Near-Black
```

### Hero Eyebrow

```
Layout: Inline-flex, gap 8px
Font-size: 0.78rem
Font-weight: 600
Text-transform: uppercase
Letter-spacing: 0.12em
Color: Indigo

Line accent:
  — Width: 24px
  — Height: 2px
  — Background: Indigo
  — Placed left of text
```

### Section Label (Numbered)

```
Format: "01 — Section Name"
Font: DM Sans, 0.78rem, weight 500
Color: Mid-Gray
Letter-spacing: 0.12em
Margin-bottom: 12px
```

---

## 5. Layout Grid

**Container widths:**
```
Narrow (body text, readable length):  780px max-width
Standard (most content):              900px max-width
Wide (featured content):              1060px max-width
Full bleed (background to background): no max-width
```

**Margins/Padding:**
```
Desktop (1024px+):    32px left/right padding on container
Tablet (768px+):      24px left/right padding
Mobile (<768px):      16px left/right padding
```

**Two-column grids (for features, stats):**
```
Desktop:  2 columns, gap 40px
Tablet:   2 columns, gap 32px
Mobile:   1 column, gap 20px
```

---

## 6. Interaction & Motion

### Transitions

```css
/* Standard transition for color, opacity, transform */
transition: all 0.15s ease-out;

/* Hover states for buttons and links */
:hover { transform: translateY(-2px); box-shadow: 6px 6px 0px #111118; }

/* Expand/collapse animation */
max-height: 0; overflow: hidden;
&.open { max-height: 2000px; transition: max-height 0.3s ease-out; }
```

### Scroll Behavior

```css
html { scroll-behavior: smooth; }  /* Smooth scrolling to case studies */
```

### Sticky Navigation (Optional for long pages)

```
Position: sticky; top: 0;
Background: Off-White with backdrop blur
Border-bottom: 2px solid Near-Black
z-index: 100
```

---

## 7. Responsive Behavior

### Breakpoints

```
Mobile:     < 480px
Tablet:     480px – 1024px
Desktop:    > 1024px
Large:      > 1440px
```

### Key Responsive Rules

```
Hero heading: clamp(2.8rem, 5vw, 4.2rem)
  — Scales with viewport width, never below 2.8rem or above 4.2rem

Body text: always 17px (readable on all screens)

Spacing: reduces by ~20% on mobile
  — Section padding: 80px desktop → 48px mobile
  — Container padding: 32px desktop → 16px mobile

Images: 100% width, max-width of container
  — Never overflow on mobile

Flex grids: reflow to 1 column below 768px

Case study cards: full-width on mobile (no side margins)
```

---

## 8. Tone & Voice

### Text Style

**Headlines:**
- Declarative. Action-oriented. Show ownership.
- "Took full ownership of…" not "Helped with…"
- "Led a 5-person team…" not "Was part of a team…"

**Body Copy:**
- Specific over vague. "45 min/day" not "a lot of time."
- Human over corporate. "Users skipped settings" not "Optimization opportunity identified."
- Explain the 'why' before the 'what.' "Because students are overloaded, we built…"

**Meta Information:**
- Clean, dates in format: "June 2025 – July 2025"
- Location/role in format: "Remote  |  AI Engineering Intern"
- Metrics with units: "25% reduction in query time" not "25% improvement"

---

## 9. Dark Mode (Optional Future Enhancement)

If dark mode is added later:

```
Background:       #1A1A22 (instead of Off-White)
Text:             #F5F5F7 (instead of Near-Black)
Secondary text:   #B0B0C0 (instead of Mid-Gray)
Borders:          #333344 (instead of Light-Gray)
Accent (Indigo):  #6D7FED (lighter version)
Shadows:          rgba(0,0,0,0.4) with hard offset style preserved
```

---

## 10. Accessibility

### Color Contrast

- All text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text).
- Indigo on Off-White: 5.2:1 ✓
- Near-Black on Off-White: 18:1 ✓
- Mid-Gray on Off-White: 5.8:1 ✓

### Keyboard Navigation

```
Tab order: Nav → Hero CTA → Case study 1 → Case study 2 → Case study 3 → Footer CTA
All interactive elements must be keyboard accessible
Expand/collapse case studies: Enter to toggle
Focus indicators: 2px Indigo outline with 2px offset
```

### Screen Reader

```
H1: Page title once per page
H2: Major section headings
H3: Subsections
Role="button" for expand/collapse toggles
aria-expanded="true|false" for collapsible cards
alt text for any images (none in current design, but if added)
```

---

## 11. File Organization (Frontend Setup)

```
portfolio/
├── index.html          (one-page structure)
├── styles/
│   └── main.css        (all styling, CSS variables at top)
├── js/
│   └── portfolio.js    (case study expand/collapse, smooth scroll)
├── images/
│   ├── figma-clutterless.png
│   ├── tradeup-dashboard.png
│   └── sentinel-architecture.png
└── fonts/              (Google Fonts loaded in <head>)
```

### CSS Custom Properties (Variables)

```css
:root {
  --indigo: #3D3D9E;
  --indigo-dark: #2a2a72;
  --near-black: #111118;
  --off-white: #F5F5F7;
  --mid-gray: #6b6b7b;
  --light-gray: #E2E2E8;
  --amber: #F5A623;
  --crimson: #E84545;
  
  --shadow: 4px 4px 0px var(--near-black);
  --shadow-lg: 6px 6px 0px var(--near-black);
  
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;
  --spacing-xl: 64px;
  --spacing-2xl: 80px;
}
```

---

## 12. Performance Considerations

### Font Loading Strategy

```
Display: swap — Use system fonts while Google Fonts load
Only load used weights: 400, 500, 600, 700
Variable fonts reduce file size
```

### Image Optimization

```
Figma screenshots: export as WebP, fallback to PNG
Max width: 1060px (no need for larger)
Lazy-load images below the fold
Compress to < 200KB per image
```

### CSS

```
Minify for production
No unused styles
Critical CSS (above-the-fold) inline in <head>
Non-critical CSS loaded async
```

---

## 13. Component Checklist (For Implementation)

- [ ] Navigation (sticky or static, links to case studies)
- [ ] Hero section (heading, subheading, CTA to first case study)
- [ ] Three collapsible case study cards (Clutterless, TradeUp, The Sentinel)
- [ ] Meta strip (timeline, role, team size, tools)
- [ ] Section headers with numbered labels
- [ ] Feature grids (2 columns, responsive)
- [ ] Callout boxes (key insights, reflection)
- [ ] Lesson numbered list
- [ ] Footer with CTA
- [ ] Smooth scroll behavior
- [ ] Keyboard navigation
- [ ] Mobile responsiveness tested at 480px, 768px, 1024px

---

## Design Rationale: Why This System?

**Neo-Brutalism (hard borders, shadows, no curves):**
- Clutterless used it; this portfolio continues that visual story.
- Signals intentionality. A PM who has taste and logic, not just aesthetic sense.

**DM Serif + DM Sans pairing:**
- Serif for headings: elegant, authoritative, memorable.
- Sans for body: modern, high-legibility, screen-optimized.
- Together: approachable but professional.

**Specific, constrained color palette:**
- Three structural colors (indigo, gray, black) + two accents (amber, crimson).
- No decoration. Every color has a job.
- Makes the portfolio feel cohesive across three different projects.

**Spacing from 8px grid:**
- Predictable. Scales well across breakpoints.
- Easier to maintain. No arbitrary "let's add 15px here."

**Accordions for case studies:**
- Respect reader's time. Show the title, expand if interested.
- Inspired by design portfolios (Qorry'aina) and PM portfolio best practices.
- Keeps one page from becoming overwhelming.

---

## Implementation Checklist

- [ ] Google Fonts loaded with display: swap
- [ ] CSS variables defined in :root
- [ ] Border radius is 0 everywhere (no rounding)
- [ ] Shadows use 4px 4px and 6px 6px only
- [ ] All text uses DM Sans or DM Serif Display (no fallbacks to system fonts)
- [ ] Hover states change color or shadow, not both
- [ ] Mobile viewport meta tag present
- [ ] Keyboard focus indicators visible
- [ ] All links have underlines or clear visual indicator
- [ ] CTA buttons have box-shadow (not flat design)
- [ ] Image alt text present for all images
- [ ] Color contrast checked with WebAIM
- [ ] Performance: Lighthouse score > 90

---

**Design System Version:** 1.0  
**Last Updated:** May 2026  
**Created for:** Umar Zubair PM Portfolio  
**Status:** Ready for implementation
