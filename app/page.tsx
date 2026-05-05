"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTAStrip from "@/components/Footer";
import { Footer } from "@/components/Footer";
import { SectionLabel, StatsRow, FeatureGrid } from "@/components/CaseStudyComponents";
import InteractiveDots from "@/components/InteractiveDots";

const clutterlessSections = (
  <>
    <SectionLabel>01 — The Problem</SectionLabel>
    <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-6">
      Students lose 45 minutes a day to inbox noise
    </h2>
    <p className="text-base md:text-lg mb-4">
      University students live in an institutional communication jungle. Class announcements,
      event invitations, administrative notices, academic deadlines, and personal emails all land
      in the same inbox. There&apos;s no signal-to-noise filter. Students either read everything
      (inefficient) or nothing (risky). Both paths create anxiety.
    </p>
    <StatsRow
      stats={[
        { number: "45 min", label: "Lost daily to email" },
        { number: "30+", label: "User interviews" },
        { number: "8", label: "Competitors audited" },
      ]}
    />
    <SectionLabel>02 — Discovery Process</SectionLabel>
    <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-6">
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
    <SectionLabel>03 — Core Insight</SectionLabel>
    <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-6">
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
    <SectionLabel>04 — Final Feature Set</SectionLabel>
    <FeatureGrid
      features={[
        {
          icon: "🔕",
          title: "Frictionless Onboarding",
          description: "Login with Outlook. Mute top 3 bad senders in one screen. AI learns from day one.",
        },
        {
          icon: "📬",
          title: "Today Inbox",
          description: "Only today&apos;s emails. Swipe left to purge, right to pin. Fast triage.",
        },
        {
          icon: "📅",
          title: "Intelligent Calendar",
          description: "Pulls schedules from LMS. Detects dates inside emails.",
        },
        {
          icon: "🗺️",
          title: "Ambient Awareness",
          description: "Daily Digest + Bulletin Board. Discovery without inbox noise.",
        },
      ]}
    />
    <SectionLabel>05 — Lessons</SectionLabel>
  </>
);

const clutterlessStats = [
  { number: "45 min", label: "Lost daily to email" },
  { number: "30+", label: "User interviews" },
  { number: "8", label: "Competitors audited" },
];

const clutterlessFeatures = [
  { icon: "🔕", title: "Frictionless Onboarding", description: "Login with Outlook. Mute top 3 bad senders." },
  { icon: "📬", title: "Today Inbox", description: "Only today&apos;s emails. Fast triage." },
  { icon: "📅", title: "Intelligent Calendar", description: "Pulls schedules from LMS." },
  { icon: "🗺️", title: "Ambient Awareness", description: "Daily Digest + Bulletin Board." },
];

const clutterlessLessons = [
  { number: 1, title: "Interview #8 reveals the real insight", description: "Early interviews showed volume. Deeper ones showed anxiety." },
  { number: 2, title: "Paper prototypes catch failures fast", description: "Saved weeks by testing on paper." },
  { number: 3, title: "Navigation is make-or-break", description: "Directory needed to be a persistent tab." },
  { number: 4, title: "Trust is a design constraint", description: "Visual language rooted in LUMS systems." },
];

const clutterlessOutcome = "A hi-fi prototype and full product spec, ready for stakeholder review.";

const tradeupSections = (
  <>
    <SectionLabel>01 — Why Build It</SectionLabel>
    <h2 className="font-serif text-2xl md:text-3xl leading-tight text-primary mb-6">
      Teaching investing is easier with real stakes
    </h2>
    <p className="text-base md:text-lg text-primary mb-4">
      Most university investing clubs teach with spreadsheets. It&apos;s passive. But when
      students manage a portfolio — even fake — the emotional stakes are different. They read
      financial news. They understand volatility when their &quot;money&quot; is at risk.
    </p>
    <StatsRow
      stats={[
        { number: "100+", label: "Active traders" },
        { number: "4 weeks", label: "MVP to launch" },
        { number: "0", label: "Third-party APIs" },
      ]}
    />
    <SectionLabel>02 — Technical Decisions</SectionLabel>
    <h2 className="font-serif text-2xl md:text-3xl leading-tight text-primary mb-6">
      Build fast, don&apos;t optimize prematurely
    </h2>
    <h3 className="text-base font-semibold text-primary mt-6 mb-3">Data pipeline</h3>
    <p className="text-base md:text-lg text-primary mb-4">
      Built a scraper for PSX data → PostgreSQL → REST API. Added Redis later for read-heavy endpoints.
    </p>
    <h3 className="text-base font-semibold text-primary mt-6 mb-3">Frontend</h3>
    <p className="text-base md:text-lg text-primary mb-4">
      React + Tailwind. Responsive dashboard in days.
    </p>
    <h3 className="text-base font-semibold text-primary mt-6 mb-3">Deployment</h3>
    <p className="text-base md:text-lg text-primary mb-4">
      Docker + AWS ECS. Kept costs low by right-sizing instances.
    </p>
    <SectionLabel>03 — Lessons</SectionLabel>
  </>
);

const tradeupStats = [
  { number: "100+", label: "Active traders" },
  { number: "4 weeks", label: "MVP to launch" },
  { number: "0", label: "Third-party APIs" },
];

const tradeupLessons = [
  { number: 1, title: "Leaderboard gamification wins", description: "Users logged in daily to check rankings." },
  { number: 2, title: "Data freshness > polish", description: "Stale data was #1 complaint." },
  { number: 3, title: "Products need a story", description: "This is how real trading works." },
];

const tradeupOutcome = "Production platform with 100+ users. Proved you don't need VC funding to ship.";

const sentinelSections = (
  <>
    <SectionLabel>01 — The Problem</SectionLabel>
    <h2 className="font-serif text-2xl md:text-3xl leading-tight text-primary mb-6">
      Visual regressions take 2–3 days to debug
    </h2>
    <p className="text-base md:text-lg text-primary mb-4">
      Typical QA: developer pushes → designer spots regression → writes bug report → developer investigates → repeat.
      Each cycle takes hours because the feedback loop is slow.
    </p>
    <StatsRow
      stats={[
        { number: "2–3 days", label: "Current debug time" },
        { number: "45 min", label: "With autonomous agent" },
        { number: "100%", label: "Automated PR" },
      ]}
    />
    <SectionLabel>02 — Product Concept</SectionLabel>
    <h2 className="font-serif text-2xl md:text-3xl leading-tight text-primary mb-6">
      An agent that fixes bugs before humans see them
    </h2>
    <p className="text-base md:text-lg text-primary mb-4">
      The Sentinel: takes screenshot → analyzes with Gemini Vision → generates code fix → opens PR.
    </p>
    <p className="text-base md:text-lg text-primary mb-4">
      Waits for CI. If tests fail, rewrites the fix. Once tests pass, PR is ready for review.
    </p>
    <SectionLabel>03 — Technical Architecture</SectionLabel>
    <h2 className="font-serif text-2xl md:text-3xl leading-tight text-primary mb-6">
      A self-correcting feedback loop
    </h2>
    <h3 className="text-base font-semibold text-primary mt-6 mb-3">Input</h3>
    <p className="text-base md:text-lg text-primary mb-4">Gemini Vision analyzes screenshots with design system context.</p>
    <h3 className="text-base font-semibold text-primary mt-6 mb-3">Generation</h3>
    <p className="text-base md:text-lg text-primary mb-4">Generates scoped CSS/JSX changes from GitHub context.</p>
    <h3 className="text-base font-semibold text-primary mt-6 mb-3">Feedback Loop</h3>
    <p className="text-base md:text-lg text-primary mb-4">Monitors CI/CD, rewrites on failure. 85% success rate.</p>
    <SectionLabel>04 — Lessons</SectionLabel>
  </>
);

const sentinelStats = [
  { number: "2–3 days", label: "Current debug time" },
  { number: "45 min", label: "With autonomous agent" },
  { number: "100%", label: "Automated PR" },
];

const sentinelLessons = [
  { number: 1, title: "Vision models work for UI analysis", description: "85%+ accuracy with right prompting." },
  { number: 2, title: "Self-correcting loop is the innovation", description: "40% → 85% with feedback." },
  { number: 3, title: "Automation unblocks humans", description: "Focus on edge cases, not regressions." },
];

const sentinelOutcome = "Proof-of-concept viable. AI tooling = working with humans, not replacing them.";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary relative">
      <InteractiveDots dotColor="#3D3D9E" spacing={50} backgroundOpacity={0.1} />
      <Navigation />
      <Hero />

      <About />

      <section id="projects" className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-widest text-indigo font-semibold mb-4 block">
              Selected Work
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-12">
              Featured Project Case Studies
            </h2>
          </motion.div>

          <CaseStudyCard
            index={0}
            data={{
              id: "clutterless",
              title: "Clutterless",
              meta: "AI-powered academic email management • HCI Capstone",
              role: "Product Manager & Designer",
              teamSize: "5 people, 8 weeks",
              tools: "Figma, Miro, User Testing",
              context: "LUMS HCI Capstone",
              content: clutterlessSections,
              stats: clutterlessStats,
              features: clutterlessFeatures,
              lessons: clutterlessLessons,
              outcome: clutterlessOutcome,
              link: "https://www.figma.com/proto/fZlHc4EQAx3jYHovTUVEU7/Clutterless--Copy-?node-id=2016-1947&t=gNbic8dqG8mLq9Cw-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2016%3A1947",
            }}
          />

          <CaseStudyCard
            index={1}
            data={{
              id: "tradeup",
              title: "TradeUp",
              meta: "PSX mock trading platform • Full-stack",
              role: "Full Stack Engineer + PM",
              teamSize: "Solo, shipped in production",
              tools: "React, Node.js, PostgreSQL, AWS",
              users: "100+ active traders",
              content: tradeupSections,
              stats: tradeupStats,
              lessons: tradeupLessons,
              outcome: tradeupOutcome,
              link: "https://github.com/Um3rz/TradeUp",
            }}
          />

          <CaseStudyCard
            index={2}
            data={{
              id: "sentinel",
              title: "The Sentinel",
              meta: "Autonomous QA agent • Gemini Hackathon",
              role: "Product & Engineer",
              teamSize: "Solo entry",
              tools: "Gemini, FastAPI, Playwright",
              problemSpace: "Visual regression testing",
              content: sentinelSections,
              stats: sentinelStats,
              lessons: sentinelLessons,
              outcome: sentinelOutcome,
              link: "https://github.com/Um3rz/the-Sentinel",
            }}
          />
        </div>
      </section>

      <div className="h-px bg-border mx-6 my-12"></div>

      <CTAStrip />
      <Footer />
    </main>
  );
}