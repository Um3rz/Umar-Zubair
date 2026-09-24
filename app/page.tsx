"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BellOff,
  Inbox,
  Calendar,
  Map,
  Phone,
  Brain,
  Activity,
  FileText,
  Workflow,
  ShieldCheck,
  Layers,
  Gauge,
  ChevronRight,
  Award
} from "lucide-react";

import TopNav from "@/components/TopNav";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import About, { tools, experiences, certifications } from "@/components/About";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTAStrip from "@/components/Footer";
import { Footer } from "@/components/Footer";
import { SectionBar, SpecTable, BlockDiagram } from "@/components/CaseStudyComponents";
import { DevStudioSchematic, MedallionSchematic, ViTSchematic, SentinelSchematic } from "@/components/Schematic";

const H2 = "font-display text-2xl md:text-3xl font-bold uppercase tracking-wide mb-6 text-balance";
const H3 = "font-mono text-sm font-semibold uppercase tracking-[0.08em] mt-6 mb-3 text-secondary";

const clutterlessSections = (
  <>
    <SectionBar>01 — The Problem</SectionBar>
    <h2 className={H2}>
      Students lose 45 minutes a day to inbox noise
    </h2>
    <p className="text-base md:text-lg mb-4">
      University students live in an institutional communication jungle. Class announcements,
      event invitations, administrative notices, academic deadlines, and personal emails all land
      in the same inbox. There&apos;s no signal-to-noise filter. Students either read everything
      (inefficient) or nothing (risky). Both paths create anxiety.
    </p>
    <SpecTable
      stats={[
        { number: "45 min", label: "Lost daily to email" },
        { number: "30+", label: "User interviews" },
        { number: "8", label: "Competitors audited" },
      ]}
    />
    <SectionBar>02 — Discovery Process</SectionBar>
    <h2 className={H2}>
      How I validated the problem
    </h2>
    <p className="text-base md:text-lg mb-4">
      I started with casual observation. Watched LUMS students check their email. Asked questions.
      Most said they felt &quot;behind&quot; on important announcements. Specific email quote:{" "}
      <em>&quot;I miss deadlines because everything feels equally important.&quot;</em>
    </p>
    <p className="text-base md:text-lg mb-4">
      Then ran 30+ semi-structured interviews across three student populations.
    </p>
    <ul className="list-disc ml-6 mb-4 text-base">
      <li><strong>CS/Engineering students</strong> (n=12): Want granular control.</li>
      <li><strong>Business/Social Sciences</strong> (n=11): Prefer simplicity.</li>
      <li><strong>Humanities/Languages</strong> (n=8): Rarely check settings.</li>
    </ul>
    <SectionBar>03 — Core Insight</SectionBar>
    <h2 className={H2}>
      The emotional angle matters more than the feature angle
    </h2>
    <p className="text-base md:text-lg mb-4">
      When I started the project, I thought the problem was &quot;how do we reduce email
      volume?&quot; But interviews showed the real problem was <em>anxiety.</em> Students
      described their inboxes as &quot;stressful,&quot; &quot;overwhelming,&quot; and &quot;daunting.&quot;
    </p>
    <p className="text-base md:text-lg mb-4">
      The feature set needed to reduce not just time spent on email, but the emotional
      burden of knowing what you&apos;re missing.
    </p>
    <SectionBar>04 — Final Feature Set</SectionBar>
    <BlockDiagram
      features={[
        {
          icon: <BellOff size={24} />,
          title: "Frictionless Onboarding",
          description: "Login with Outlook. Mute top 3 bad senders in one screen. AI learns from day one.",
        },
        {
          icon: <Inbox size={24} />,
          title: "Today Inbox",
          description: "Only today's emails. Swipe left to purge, right to pin. Fast triage.",
        },
        {
          icon: <Calendar size={24} />,
          title: "Intelligent Calendar",
          description: "Pulls schedules from LMS. Detects dates inside emails.",
        },
        {
          icon: <Map size={24} />,
          title: "Ambient Awareness",
          description: "Daily Digest + Bulletin Board. Discovery without inbox noise.",
        },
      ]}
    />
    <SectionBar>05 — Lessons</SectionBar>
  </>
);

const clutterlessLessons = [
  { number: 1, title: "Interview #8 reveals the real insight", description: "Early interviews showed volume. Deeper ones showed anxiety." },
  { number: 2, title: "Paper prototypes catch failures fast", description: "Saved weeks by testing on paper." },
  { number: 3, title: "Navigation is make-or-break", description: "Directory needed to be a persistent tab." },
  { number: 4, title: "Trust is a design constraint", description: "Visual language rooted in LUMS systems." },
];

const clutterlessOutcome = "A hi-fi prototype and full product spec, ready for stakeholder review.";

const tradeupSections = (
  <>
    <SectionBar>01 — Why Build It</SectionBar>
    <h2 className={H2}>
      Teaching investing is easier with real stakes
    </h2>
    <p className="text-base md:text-lg mb-4">
      Most university investing clubs teach with spreadsheets. It&apos;s passive. But when
      students manage a portfolio — even fake — the emotional stakes are different. They read
      financial news. They understand volatility when their &quot;money&quot; is at risk.
    </p>
    <SpecTable
      stats={[
        { number: "100+", label: "Active traders" },
        { number: "4 weeks", label: "MVP to launch" },
        { number: "0", label: "Third-party APIs" },
      ]}
    />
    <SectionBar>02 — Technical Decisions</SectionBar>
    <h2 className={H2}>
      Build fast, don&apos;t optimize prematurely
    </h2>
    <h3 className={H3}>Data pipeline</h3>
    <p className="text-base md:text-lg mb-4">
      Built a scraper for PSX data → PostgreSQL → REST API. Added Redis later for read-heavy endpoints.
    </p>
    <h3 className={H3}>Frontend</h3>
    <p className="text-base md:text-lg mb-4">
      React + Tailwind. Responsive dashboard in days.
    </p>
    <h3 className={H3}>Deployment</h3>
    <p className="text-base md:text-lg mb-4">
      Docker + AWS ECS. Kept costs low by right-sizing instances.
    </p>
    <SectionBar>03 — Lessons</SectionBar>
  </>
);

const tradeupLessons = [
  { number: 1, title: "Leaderboard gamification wins", description: "Users logged in daily to check rankings." },
  { number: 2, title: "Data freshness > polish", description: "Stale data was #1 complaint." },
  { number: 3, title: "Products need a story", description: "This is how real trading works." },
];

const tradeupOutcome = "Production platform with 100+ active traders.";

const sentinelSections = (
  <>
    <SectionBar>01 — The Problem</SectionBar>
    <h2 className={H2}>
      Visual regressions take 2–3 days to debug
    </h2>
    <p className="text-base md:text-lg mb-4">
      Typical QA: developer pushes → designer spots regression → writes bug report → developer investigates → repeat.
      Each cycle takes hours because the feedback loop is slow.
    </p>
    <SpecTable
      stats={[
        { number: "2–3 days", label: "Current debug time" },
        { number: "45 min", label: "With autonomous agent" },
        { number: "85%", label: "Fix success rate" },
      ]}
    />
    <SectionBar>02 — Product Concept</SectionBar>
    <h2 className={H2}>
      An agent that fixes bugs before humans see them
    </h2>
    <p className="text-base md:text-lg mb-4">
      The Sentinel: takes screenshot → analyzes with Gemini Vision → generates code fix → opens PR.
    </p>
    <p className="text-base md:text-lg mb-4">
      Waits for CI. If tests fail, rewrites the fix. Once tests pass, PR is ready for review.
    </p>
    <SectionBar>03 — Technical Architecture</SectionBar>
    <h2 className={H2}>
      A self-correcting feedback loop
    </h2>
    <SentinelSchematic />
    <h3 className={H3}>Input</h3>
    <p className="text-base md:text-lg mb-4">Gemini Vision analyzes screenshots with design system context.</p>
    <h3 className={H3}>Generation</h3>
    <p className="text-base md:text-lg mb-4">Generates scoped CSS/JSX changes from GitHub context.</p>
    <h3 className={H3}>Feedback Loop</h3>
    <p className="text-base md:text-lg mb-4">Monitors CI/CD, rewrites on failure. 85% success rate.</p>
    <SectionBar>04 — Lessons</SectionBar>
  </>
);

const sentinelLessons = [
  { number: 1, title: "Vision models work for UI analysis", description: "85%+ accuracy with right prompting." },
  { number: 2, title: "Self-correcting loop is the innovation", description: "40% → 85% with feedback." },
  { number: 3, title: "Automation unblocks humans", description: "Focus on edge cases, not regressions." },
];

const sentinelOutcome = "Proof-of-concept viable. AI tooling = working with humans, not replacing them.";

const serenelySections = (
  <>
    <SectionBar>01 — The Problem</SectionBar>
    <h2 className={H2}>
      University students are drowning in stress with no immediate support
    </h2>
    <p className="text-base md:text-lg mb-4">
      Classes, exams, family pressure, financial anxiety, homesickness — it all lands at once.
      But the counseling center has a 6-week waitlist. The few who reach out get one hour a
      week, which doesn&apos;t cover the 3 AM panic attack or the Sunday night spiral before exams.
    </p>
    <p className="text-base md:text-lg mb-4">
      There&apos;s a market gap between &quot;nothing&quot; and &quot;professional therapy.&quot;
      Students need something: immediate, low-friction, non-judgmental.
    </p>
    <SpecTable
      stats={[
        { number: "6 weeks", label: "Counseling waitlist" },
        { number: "70%", label: "Avoid seeking help due to stigma" },
        { number: "50+", label: "Active pilot users" },
      ]}
    />
    <SectionBar>02 — Discovery Process</SectionBar>
    <h2 className={H2}>
      What students actually need
    </h2>
    <p className="text-base md:text-lg mb-4">
      Spent two weeks talking to students about their mental health habits. Ran a survey with 80 students.
    </p>
    <ul className="list-disc ml-6 mb-4 text-base">
      <li><strong>70%</strong> avoid seeking help because the process feels &quot;formal and scary&quot;</li>
      <li><strong>65%</strong> would use a voice AI if it felt human and kept conversations private</li>
      <li>They need support <em>now</em>, not in 6 weeks</li>
    </ul>
    <SectionBar>03 — Core Insight</SectionBar>
    <h2 className={H2}>
      Friction is the enemy, not information
    </h2>
    <p className="text-base md:text-lg mb-4">
      Students know counseling exists. The barrier is the friction: scheduling, sitting in an office,
      worrying about being judged. All of that happens before you even talk.
    </p>
    <p className="text-base md:text-lg mb-4">
      <em>Insight:</em> This wasn&apos;t about building a therapist replacement. It was about building a
      friction-free entry point to emotional processing.
    </p>
    <SectionBar>04 — Design Iterations</SectionBar>
    <h2 className={H2}>
      From text bot to empathetic voice
    </h2>
    <p className="text-base md:text-lg mb-4">
      <strong>Version 1:</strong> Text-based chatbot. Felt &quot;cold and impersonal.&quot; Users wanted to hear a voice.
    </p>
    <p className="text-base md:text-lg mb-4">
      <strong>Version 2:</strong> Voice call with speech-to-text. More human, but robotic TTS voice.
    </p>
    <p className="text-base md:text-lg mb-4">
      <strong>Version 3:</strong> Empathetic system prompt + better voice model. Game changer.
      Rewrote prompts to validate first: &quot;That sounds really hard. Tell me more.&quot; Added natural pauses.
    </p>
    <SectionBar>05 — Final Feature Set</SectionBar>
    <BlockDiagram
      features={[
        {
          icon: <Phone size={24} />,
          title: "Voice Interface",
          description: "Call in anytime. No appointment friction. AI answers immediately.",
        },
        {
          icon: <Brain size={24} />,
          title: "Empathetic AI",
          description: "System prompt built around validation, curiosity, non-judgment.",
        },
        {
          icon: <Activity size={24} />,
          title: "Stress Toolkit",
          description: "4-7-8 breathing, grounding exercises offered when anxiety detected.",
        },
        {
          icon: <FileText size={24} />,
          title: "Session Summaries",
          description: "Private text summary after each call. Encrypted. Only user sees it.",
        },
      ]}
    />
    <SectionBar>06 — Lessons</SectionBar>
  </>
);

const serenelyLessons = [
  { number: 1, title: "Tone of voice matters more than features", description: "Same tech, completely different feeling with empathetic prompts." },
  { number: 2, title: "You don't need to be a therapist", description: "Led with empathy and iteration, not expertise." },
  { number: 3, title: "Privacy is a requirement, not a feature", description: "Encryption and secure handling built in from day one." },
  { number: 4, title: "Low-friction entry beats comprehensive features", description: "One thing: call right now and talk." },
];

const serenelyOutcome = "50+ active pilot users. 70% of signups used it at least once, 40% weekly. Key insight: technology doesn't solve mental health — empathy does.";

const devStudioSections = (
  <>
    <SectionBar>01 — Why Build It</SectionBar>
    <h2 className={H2}>
      Single-shot code generation is a coin flip
    </h2>
    <p className="text-base md:text-lg mb-4 max-w-[70ch]">
      Ask a model for a working game and you get plausible code that crashes on the first run.
      The gap isn&apos;t reasoning — it&apos;s that nothing ever executes the output, reads the
      error, and tries again. A real engineering team doesn&apos;t ship its first draft either.
      It has a design review, a build, and a QA pass.
    </p>
    <SpecTable
      stats={[
        { number: "7", label: "Pipeline nodes" },
        { number: "2", label: "Human approval gates" },
        { number: "1–10", label: "QA score per pass" },
      ]}
    />
    <SectionBar>02 — System Design</SectionBar>
    <h2 className={H2}>
      An engineering team, modelled as a graph
    </h2>
    <DevStudioSchematic />
    <p className="text-base md:text-lg mb-4 max-w-[70ch]">
      Seven specialised nodes, each with one job. <strong>Director</strong> captures the objective.
      <strong> Architect</strong> turns it into a system design. <strong>Engineer</strong> writes the
      Pygame code from that design plus any prior QA feedback. <strong>File Writer</strong> persists it.
      <strong> Execution Manager</strong> runs it in a subprocess with a timeout and captures the output.
      <strong> QA Engineer</strong> reads that output back against the original requirements.
      <strong> Scorer</strong> rates the result out of ten.
    </p>
    <p className="text-base md:text-lg mb-4 max-w-[70ch]">
      The graph then cycles back to the Engineer — not a fresh one, the same one, still holding
      every prior iteration.
    </p>
    <SectionBar>03 — The Hard Part</SectionBar>
    <h2 className={H2}>
      Memory that accumulates instead of overwriting
    </h2>
    <p className="text-base md:text-lg mb-4 max-w-[70ch]">
      LangGraph replaces a state field by default when a node writes to it. That quietly destroys
      the thing the loop depends on: by iteration three the Engineer needs iteration one&apos;s design
      and iteration two&apos;s QA notes, not just the newest message. Routing the message fields
      through additive reducers keeps the full history in scope, so each pass refines rather than
      restarts.
    </p>
    <SectionBar>04 — Safety</SectionBar>
    <h2 className={H2}>
      The graph never runs its own output unsupervised
    </h2>
    <p className="text-base md:text-lg mb-4 max-w-[70ch]">
      A pipeline that writes code and executes it is a pipeline that can execute anything it writes.
      Two hard human-in-the-loop gates sit inside the graph: one before any generated file is run,
      one before a refinement iteration is triggered. Neither is a warning you can click past —
      the graph pauses and waits.
    </p>
    <BlockDiagram
      features={[
        {
          icon: <Workflow size={24} />,
          title: "Seven-Node Pipeline",
          description: "Director, Architect, Engineer, File Writer, Execution Manager, QA, Scorer — each with one job.",
        },
        {
          icon: <ShieldCheck size={24} />,
          title: "Hard Approval Gates",
          description: "Execution halts for a human before any generated file is allowed to run.",
        },
        {
          icon: <Layers size={24} />,
          title: "Accumulating State",
          description: "Additive reducers keep every design, build, and critique inside the Engineer's context.",
        },
        {
          icon: <Gauge size={24} />,
          title: "Scored Iterations",
          description: "A rating out of ten makes “is this better?” a decision rather than a feeling.",
        },
      ]}
    />
    <SectionBar>05 — Lessons</SectionBar>
  </>
);

const devStudioLessons = [
  { number: 1, title: "Execution is the only honest test", description: "Static review of generated code says very little. Running it and reading stderr says everything." },
  { number: 2, title: "Reducers, not overwrites", description: "Default state behaviour silently deleted the context the loop ran on. A small fix, and the entire difference in output quality." },
  { number: 3, title: "Autonomy needs a stop", description: "The useful question wasn't how much the agents could do alone. It was where a human had to stay in the path." },
  { number: 4, title: "Roles beat prompts", description: "Splitting one “write me a game” prompt into an Architect and an Engineer produced better code than any single prompt did." },
];

const devStudioOutcome = "A working design → build → run → critique → refine loop that produces a playable Pygame build, with a human holding the execute key.";

const medallionSections = (
  <>
    <SectionBar>01 — The Problem</SectionBar>
    <h2 className={H2}>
      Streaming pipelines break on the data nobody predicted
    </h2>
    <p className="text-base md:text-lg mb-4 max-w-[70ch]">
      A batch job that hits an unexpected column fails, and you rerun it. A streaming job that hits
      one dies mid-flight and takes the freshness of every downstream table with it. Add flight data
      that arrives asynchronously and out of order, and correctness and uptime start pulling in
      opposite directions.
    </p>
    <SpecTable
      stats={[
        { number: "3", label: "Medallion layers" },
        { number: "4", label: "Gold aggregations" },
        { number: "7 days", label: "Late-arrival watermark" },
      ]}
    />
    <SectionBar>02 — Architecture</SectionBar>
    <h2 className={H2}>
      Bronze catches, silver corrects, gold aggregates
    </h2>
    <MedallionSchematic />
    <h3 className={H3}>Bronze</h3>
    <p className="text-base md:text-lg mb-4 max-w-[70ch]">
      Auto Loader watches a landing zone with schema evolution set to <em>rescue</em>, so an
      unexpected column lands in a rescue field instead of killing the stream. Every row carries its
      ingestion timestamp. Writes are append-only to Delta.
    </p>
    <h3 className={H3}>Silver</h3>
    <p className="text-base md:text-lg mb-4 max-w-[70ch]">
      Type casting, a derived event timestamp, and two broadcast joins against airport reference
      data — one for origin, one for destination. Late corrections arrive as CDC and apply through
      a guarded <code>MERGE INTO</code>, where the sequence number decides the winner. An older
      update can never overwrite a newer one just by arriving later.
    </p>
    <h3 className={H3}>Gold</h3>
    <p className="text-base md:text-lg mb-4 max-w-[70ch]">
      Four windowed aggregations: monthly delay averages, biweekly distance totals, worst route per
      month, and hourly flight counts.
    </p>
    <SectionBar>03 — Cost Decisions</SectionBar>
    <h2 className={H2}>
      Correctness you can afford to leave running
    </h2>
    <p className="text-base md:text-lg mb-4 max-w-[70ch]">
      Three choices that were about the bill as much as the output. <strong>availableNow</strong> triggers
      process everything currently available and then stop, so no cluster idles waiting for files.
      <strong> Broadcast joins</strong> ship the small airport table out to every worker instead of
      shuffling the large stream across the network. <strong>Seven-day watermarks</strong> let late
      records land without recomputing history.
    </p>
    <SectionBar>04 — Lessons</SectionBar>
  </>
);

const medallionLessons = [
  { number: 1, title: "Rescue beats strictness", description: "Rejecting an unexpected column protects the table and kills the pipeline. Rescuing it protects both." },
  { number: 2, title: "Arrival order is not event order", description: "A sequence-guarded merge was the difference between a correct table and a merely plausible one." },
  { number: 3, title: "Watermarks are a cost lever", description: "Bounding lateness to seven days is what makes “handle late data” something other than “recompute everything, forever.”" },
  { number: 4, title: "Idle clusters are the real bill", description: "Trigger choice turned a continuously-running cost into a per-batch one, with no change to the output." },
];

const medallionOutcome = "A continuously-running medallion pipeline that survives schema drift, corrects out-of-order records, and doesn't bill for idle time.";

const vitSections = (
  <>
    <SectionBar>01 — The Problem</SectionBar>
    <h2 className={H2}>
      Staging matters more than detection
    </h2>
    <p className="text-base md:text-lg mb-4 max-w-[70ch]">
      Whether Alzheimer&apos;s is present is a smaller question than how far it has progressed —
      the intervention differs at each stage. That turns a binary problem into a four-class one
      across CN, EMCI, LMCI and AD, where the boundaries between adjacent stages are exactly where
      the visual differences are smallest.
    </p>
    <SpecTable
      stats={[
        { number: "95%", label: "Accuracy on OASIS" },
        { number: "4", label: "Disease stages" },
        { number: "2", label: "Training phases" },
      ]}
    />
    <SectionBar>02 — Architecture</SectionBar>
    <h2 className={H2}>
      A convolutional backbone under a transformer head
    </h2>
    <ViTSchematic />
    <p className="text-base md:text-lg mb-4 max-w-[70ch]">
      A pretrained MobileNetV2 extracts features from 160×160 MRI slices; a custom Vision Transformer
      head sits on top with patch projection, a class token, and positional embeddings. The
      convolution handles local texture, the transformer relates regions across the whole scan.
    </p>
    <p className="text-base md:text-lg mb-4 max-w-[70ch]">
      SWIN and DeiT were tried first. Both wanted more data than these datasets provided, and that
      constraint is what chose the architecture.
    </p>
    <SectionBar>03 — Training</SectionBar>
    <h2 className={H2}>
      Freeze, then fine-tune
    </h2>
    <p className="text-base md:text-lg mb-4 max-w-[70ch]">
      Phase one trains only the ViT head — projection, class token, positional embeddings — with
      roughly 90% of the backbone frozen, so the new head learns against stable features. Phase two
      unfreezes the backbone and fine-tunes end to end at a reduced learning rate, with early
      stopping on validation loss.
    </p>
    <p className="text-base md:text-lg mb-4 max-w-[70ch]">
      Data came from ADNI, labelled across the four stages, and OASIS. The full pipeline — loading,
      preprocessing, training, and evaluation — was built end to end.
    </p>
    <SectionBar>04 — Lessons</SectionBar>
  </>
);

const vitLessons = [
  { number: 1, title: "Data volume picks the architecture", description: "SWIN was the better model on paper and the wrong one for this dataset. The constraint decided, not the benchmark." },
  { number: 2, title: "Transfer learning is staged, not switched", description: "Fine-tuning everything from the start washes out the pretrained features that were worth keeping." },
  { number: 3, title: "The pipeline is most of the work", description: "Loading, preprocessing, and evaluation took more effort than defining the model did." },
];

const vitOutcome = "95% accuracy on OASIS from a MobileNetV2 + ViT hybrid, trained end to end on a self-built data pipeline.";

const CASE_STUDIES = [
  {
    id: "serenely",
    title: "Serenely",
    category: "Health · Voice AI",
    meta: "AI voice therapy companion",
    proof: "50+ pilot users · 70% returned",
    role: "PM & Tech Lead",
    teamSize: "5 eng, 3mo",
    tools: "FastAPI, React, OpenAI API, PostgreSQL, Twilio",
    users: "50+ active during pilot",
    context: "LUMS SE Capstone",
    content: serenelySections,
    lessons: serenelyLessons,
    outcome: serenelyOutcome,
    link: "https://github.com/Um3rz/serenely",
  },
  {
    id: "clutterless",
    title: "Clutterless",
    category: "Product · AI",
    meta: "AI-powered academic email management",
    proof: "30+ interviews · hi-fi spec",
    role: "PM & Designer",
    teamSize: "5 ppl, 8wk",
    tools: "Figma, Miro, User Testing",
    context: "LUMS HCI Capstone",
    content: clutterlessSections,
    lessons: clutterlessLessons,
    outcome: clutterlessOutcome,
    link: "https://www.figma.com/proto/fZlHc4EQAx3jYHovTUVEU7/Clutterless--Copy-?node-id=2016-1947&t=gNbic8dqG8mLq9Cw-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2016%3A1947",
  },
  {
    id: "tradeup",
    title: "TradeUp",
    category: "Fintech · Web",
    meta: "PSX mock trading platform",
    proof: "100+ traders · 4wk launch",
    role: "Full Stack + PM",
    teamSize: "Solo",
    tools: "React, Node.js, PostgreSQL, AWS",
    users: "100+ active traders",
    content: tradeupSections,
    lessons: tradeupLessons,
    outcome: tradeupOutcome,
    link: "https://github.com/Um3rz/TradeUp",
  },
  {
    id: "sentinel",
    title: "The Sentinel",
    category: "Infra · Agents",
    meta: "Autonomous QA agent",
    proof: "85% fix rate · 2d → 45min",
    role: "Product & Engineer",
    teamSize: "Solo",
    tools: "Gemini, FastAPI, Playwright",
    problemSpace: "Visual regression testing",
    content: sentinelSections,
    lessons: sentinelLessons,
    outcome: sentinelOutcome,
    link: "https://github.com/Um3rz/the-Sentinel",
  },
  {
    id: "dev-studio",
    title: "Autonomous Dev Studio",
    category: "Agents · Tooling",
    meta: "Multi-agent pipeline that writes and tests its own code",
    proof: "7-node graph · 2 gates",
    role: "Solo — agent architecture",
    teamSize: "Solo",
    tools: "LangGraph, LangChain, OpenAI API, Pygame, Python",
    problemSpace: "Autonomous code generation",
    content: devStudioSections,
    lessons: devStudioLessons,
    outcome: devStudioOutcome,
    link: "https://github.com/Um3rz/Agentic-Game-Studio",
  },
  {
    id: "medallion",
    title: "Real-Time Medallion Pipeline",
    category: "Data · Streaming",
    meta: "Fault-tolerant streaming on Databricks",
    proof: "3 layers · 7-day late arrivals",
    role: "Solo — pipeline design",
    teamSize: "Solo",
    tools: "Databricks, PySpark, Structured Streaming, Delta Lake",
    problemSpace: "Real-time flight delay analytics",
    content: medallionSections,
    lessons: medallionLessons,
    outcome: medallionOutcome,
    link: "https://github.com/Um3rz/Medallion-databricks",
  },
  {
    id: "vit-alzheimers",
    title: "Vision Transformer for Alzheimer's",
    category: "ML · Research",
    meta: "Staging disease progression from MRI",
    proof: "95% accuracy · 4 stages",
    role: "Solo — model & pipeline",
    teamSize: "Solo",
    tools: "TensorFlow, Keras, Python",
    problemSpace: "Medical imaging / disease staging",
    content: vitSections,
    lessons: vitLessons,
    outcome: vitOutcome,
    link: "https://github.com/Um3rz/Alzheimers_Progress_Classification_w_ViT",
  },
];

export default function Home() {
  const [expandedCard, setExpandedCard] = useState<number | string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleToggle = (id: number | string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const scrollToProjects = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Loader onLoadComplete={() => setIsLoaded(true)} />

      {isLoaded && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="min-h-screen bg-primary"
        >
          <TopNav />

          <section id="intro" className="px-4 md:px-8 py-8 md:py-10">
            <div className="max-w-[1400px] mx-auto">
              <Hero onLearnMore={() => setExpandedCard("about")} onViewWork={scrollToProjects} />
            </div>
          </section>

          {/* Detail modal only — the tiles this used to render are replaced
              below by the Skills / Featured Projects / Certifications /
              Experience sections, all of which reuse the same underlying data. */}
          <About isExpanded={expandedCard === "about"} onToggle={() => handleToggle("about")} hideTiles />

          <section className="px-4 md:px-8 pb-10 md:pb-12">
            <div className="max-w-[1400px] mx-auto tile-ink border-2 border-theme shadow-neo-lg p-5 md:px-8 md:py-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="sticker tile-limit shadow-neo">Skills →</span>
              </div>
              <div className="overflow-hidden">
                <div className="marquee-track flex items-center gap-10 w-max">
                  {[...tools, ...tools].map((tool, idx) => (
                    <span key={`${tool.name}-${idx}`} className="flex items-center gap-2 shrink-0 font-mono text-xs uppercase tracking-[0.08em]">
                      {tool.icon}
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="px-4 md:px-8 pb-10 md:pb-12">
            <div className="max-w-[1400px] mx-auto">
              <div className="section-bar mb-4">Experience</div>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div
                    key={exp.role}
                    className="bg-secondary border-2 border-theme shadow-neo p-5 md:p-6 grid grid-cols-1 md:grid-cols-[9rem_1fr] gap-3 md:gap-6"
                  >
                    <div className="font-mono text-xs text-signal font-semibold uppercase tracking-[0.1em]">
                      {exp.date}
                    </div>
                    <div>
                      <h4 className="font-display font-bold uppercase tracking-wide text-base mb-0.5">
                        {exp.role}
                      </h4>
                      <p className="text-sm text-secondary mb-2">{exp.company} · {exp.location}</p>
                      <p className="text-sm text-muted">{exp.points[0]}</p>
                    </div>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ x: -2, y: -2, boxShadow: "6px 6px 0 0 var(--ink)", transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.98, x: 0, y: 0, boxShadow: "0 0 0 0 var(--ink)", transition: { duration: 0.1 } }}
                onClick={() => handleToggle("about")}
                className="mt-4 inline-flex items-center gap-1.5 bg-secondary border-2 border-theme shadow-neo px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.1em]"
              >
                View Full Resume <ChevronRight size={14} />
              </motion.button>
            </div>
          </section>

          <section id="work" className="px-4 md:px-8 pb-10 md:pb-12">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 md:gap-5 items-start">
              <div>
                <div className="section-bar flex items-center justify-between mb-4">
                  <span>Featured Projects</span>
                  <span className="opacity-90">{CASE_STUDIES.length} Projects · 2024–2026</span>
                </div>

                <div>
                  {CASE_STUDIES.map((study, idx) => (
                    <CaseStudyCard
                      key={study.id}
                      ordinal={idx + 1}
                      isExpanded={expandedCard === idx}
                      onToggle={() => handleToggle(idx)}
                      data={study}
                    />
                  ))}
                </div>
              </div>

              <div>
                <div className="section-bar mb-4">Certifications</div>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="bg-secondary border-2 border-theme shadow-neo p-4">
                      <Award size={18} className="text-signal mb-2" />
                      <h4 className="font-display font-bold uppercase text-sm tracking-wide mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-muted font-mono">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ x: -2, y: -2, boxShadow: "6px 6px 0 0 var(--ink)", transition: { duration: 0.15 } }}
                  whileTap={{ scale: 0.98, x: 0, y: 0, boxShadow: "0 0 0 0 var(--ink)", transition: { duration: 0.1 } }}
                  onClick={() => handleToggle("about")}
                  className="mt-4 w-full flex items-center justify-center gap-1.5 bg-secondary border-2 border-theme shadow-neo px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.1em]"
                >
                  View Full Profile <ChevronRight size={14} />
                </motion.button>
              </div>
            </div>
          </section>

          <section className="px-4 md:px-8 pb-10 md:pb-12">
            <div className="max-w-[1400px] mx-auto shadow-neo-lg">
              <CTAStrip />
            </div>
          </section>

          <Footer />
        </motion.main>
      )}
    </>
  );
}
