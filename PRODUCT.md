# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: people evaluating Umar Zubair for a role — recruiters screening from a LinkedIn or application link, hiring managers reading before an interview, and founders at small AI companies hiring for FDE/PM-shaped roles.

They arrive from a link, not a search. The mix is real but **skimmers win**: the page must answer "is this worth an interview?" in roughly a minute, with depth available on demand rather than in the way. A recruiter should be able to skim, download the CV, and leave with a correct impression; a hiring manager should be able to keep going and read a case study end to end.

## Product Purpose

A personal portfolio that converts a cold link into an interview. Success is a reply — an email, a message, or a scheduled call. Secondary success is the CV being downloaded.

It is a single-page site, one route, no CMS. It is the only self-authored artifact a stranger sees before deciding.

## Positioning

**Deliberately broad, by the owner's decision.** Umar is targeting AI PM, Forward-Deployed Engineer, and Product roles, and does not want to narrow to one of them. Three claims coexist across the page today and are meant to:

- "Product Engineer | Technical PM" (hero)
- "AI Product Manager" (about, footer)
- "Product Manager" (CV filename)

Future work must not collapse these into a single title without asking. The underlying substance across all three: someone who writes the spec, runs the research, and ships the implementation — the case studies show all three activities on the same projects.

## Operating Context

- Umar is based in Riyadh.
- Roles are being targeted in **Saudi/Gulf**, **remote-global**, and **Europe/UK**. Not currently Pakistan-focused, so the LUMS and PSX context is unfamiliar background to most visitors and cannot be assumed known.
- Two of four case studies originate as LUMS coursework (HCI capstone, Software Engineering capstone); two are self-directed builds. Both origins are stated plainly on the page today.
- Visitors are likely to open the page on desktop from a link in an email or LinkedIn message, and on mobile when the link is opened from a phone.

## Capabilities and Constraints

- Next.js 14 App Router, TypeScript, Tailwind, framer-motion, react-three-fiber. Deployed on Vercel with `@vercel/analytics`.
- One route: `app/page.tsx`. All case-study copy is hardcoded as module-level consts in that file. There is no CMS or data layer.
- Card expansion is a single lifted state in `Home`; only one card or the About tile can be open at a time.
- A three.js loader gates the entire page — nothing renders until it completes.
- Dark and light themes both ship, toggled client-side on `<html>`.
- Content is a set of seven case studies plus an About tile. Adding or removing one is a structural change, not a content edit: it requires a unique card index, a grid span at each breakpoint, and a slot in the `expandedCard` state.

## Brand Commitments

- Name: **Umar Zubair**. Wordmark on the page is `Umar.` with the period accented.
- Contact is `umarzubaircs@gmail.com` (note: the git author address differs; the site address is the one that ships).
- Links out to LinkedIn (`umar-zubair960`) and GitHub (`Um3rz`).
- Voice on the page is first-person, plain, and specific — "I started with casual observation," "Interview #8 reveals the real insight." No corporate abstraction. Preserve this.
- The CTA states openness to "AI PM, FDE, and Product roles."

## Evidence on Hand

Real, owner-confirmed, and defensible in an interview. **Do not invent, inflate, extrapolate, or round these, and do not add new figures.**

- **Serenely** (AI voice therapy companion, LUMS SE capstone, PM + technical lead, 5 engineers / 3 months): 50+ active pilot users, 70% of signups used it at least once, 40% weekly. 80-student survey: 70% avoid help due to stigma, 65% would use voice AI. Counseling waitlist of 6 weeks. Code: `github.com/Um3rz/serenely`.
- **Clutterless** (academic email management, LUMS HCI capstone, PM + designer, 5 people / 8 weeks): 45 min/day lost to email, 30+ semi-structured interviews (n=12 CS/Eng, n=11 Business/SocSci, n=8 Humanities), 8 competitors audited. Figma prototype linked.
- **TradeUp** (PSX mock trading platform, solo, in production): 100+ active traders, 4 weeks MVP to launch, 0 third-party APIs. Code: `github.com/Um3rz/TradeUp`.
- **The Sentinel** (autonomous QA agent, solo): 2–3 days current debug time vs. 45 min with the agent, 85% fix success rate after the self-correcting loop (up from 40%). Code: `github.com/Um3rz/the-Sentinel`.
- **Autonomous Dev Studio** (multi-agent code generation, solo): 7-node LangGraph pipeline (Director, Architect, Engineer, File Writer, Execution Manager, QA Engineer, Scorer), 2 human-in-the-loop approval gates, 1–10 QA score per pass, additive state reducers for cross-iteration memory. Produces playable Pygame builds. Code: `github.com/Um3rz/Agentic-Game-Studio`. **Note:** the repo is named "Agentic-Game-Studio"; the portfolio titles it "Autonomous Dev Studio" per the owner's CV wording.
- **Real-Time Medallion Pipeline** (streaming flight-delay analytics, solo): 3 medallion layers, 4 gold aggregations, 7-day watermark, Auto Loader with `schemaEvolutionMode=rescue`, sequence-guarded CDC `MERGE INTO`, broadcast joins, `availableNow` triggers. Data is Databricks' public flights dataset. Code: `github.com/Um3rz/Medallion-databricks`.
- **Vision Transformer for Alzheimer's** (disease staging from MRI, solo): 95% accuracy on OASIS, 4 stages (CN/EMCI/LMCI/AD), MobileNetV2 backbone + custom ViT head on 160×160 slices, two-phase training (~90% backbone frozen, then fine-tuned), early stopping. SWIN and DeiT were tried and rejected for data volume. Datasets: ADNI and OASIS. Code: `github.com/Um3rz/Alzheimers_Progress_Classification_w_ViT`. **Note:** a second, similar repo exists (`VIT-Model-for-Alzheimers-Detection`); the portfolio links the *progression* one.
- **Experience**: AI Product Manager Intern at Axon Build (Jun–Jul 2025, remote) — Shopify support bot, 25% cut in query resolution time; AI News Curator, 25% relevance improvement and 35% latency drop; 99% uptime. FullStack AI Engineer Intern at The Locate (May–Jun 2024, remote) — B2B marketplace MVP, 100+ active users.
- **Certifications**: Google AI Professional (Google, 2024), MCP for LLM Apps (Anthropic, 2024), System Design Maven (2024).
- **Assets**: `public/Umarzubair__Product_Manager_Resume_2026.pdf` (linked as "Download CV"), `components/profile-photo.png` (2.1 MB PNG, unoptimized).
- **Absent — never fabricate**: testimonials, references, quotes from managers or teammates, employer logos beyond the two named above, product screenshots or UI imagery of any of the four projects, press, awards, revenue, or funding.

## Product Principles

1. **A minute has to be enough.** Every layer below the first impression is optional. If a skimmer only reads the top of the page and the case-study titles, they should still leave with an accurate picture.
2. **Specificity is the proof.** The numbers and the named research moments are what separate this from a template portfolio. Never trade a concrete figure for a smoother sentence.
3. **Breadth is intentional; incoherence is not.** Three role claims are allowed to coexist, but the work shown must make the through-line legible rather than reading as indecision.
4. **Show the reasoning, not just the result.** The case studies are structured as problem → discovery → insight → decisions → lessons because how Umar thinks is the thing being hired.
5. **Context is not assumed.** LUMS, PSX, and the Pakistani university setting are unfamiliar to the target markets. Never rely on the reader knowing what they are.

## Accessibility & Inclusion

No product-specific standard was established. Baseline applies: the page ships both dark and light themes, so contrast must hold in both, and the loader gate plus heavy motion must not lock out anyone who cannot wait through it or who prefers reduced motion.
