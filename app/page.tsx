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
  FileText 
} from "lucide-react";

import TopNav from "@/components/TopNav";
import Loader from "@/components/Loader";
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
          icon: <BellOff size={28} />,
          title: "Frictionless Onboarding",
          description: "Login with Outlook. Mute top 3 bad senders in one screen. AI learns from day one.",
        },
        {
          icon: <Inbox size={28} />,
          title: "Today Inbox",
          description: "Only today&apos;s emails. Swipe left to purge, right to pin. Fast triage.",
        },
        {
          icon: <Calendar size={28} />,
          title: "Intelligent Calendar",
          description: "Pulls schedules from LMS. Detects dates inside emails.",
        },
        {
          icon: <Map size={28} />,
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
  { icon: <BellOff size={24} />, title: "Frictionless Onboarding", description: "Login with Outlook. Mute top 3 bad senders." },
  { icon: <Inbox size={24} />, title: "Today Inbox", description: "Only today&apos;s emails. Fast triage." },
  { icon: <Calendar size={24} />, title: "Intelligent Calendar", description: "Pulls schedules from LMS." },
  { icon: <Map size={24} />, title: "Ambient Awareness", description: "Daily Digest + Bulletin Board." },
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

const tradeupOutcome = "Production platform tested with 50+ users.";

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

const serenelySections = (
  <>
    <SectionLabel>01 — The Problem</SectionLabel>
    <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-6">
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
    <StatsRow
      stats={[
        { number: "6 weeks", label: "Counseling waitlist" },
        { number: "70%", label: "Avoid seeking help due to stigma" },
        { number: "50+", label: "Active pilot users" },
      ]}
    />
    <SectionLabel>02 — Discovery Process</SectionLabel>
    <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-6">
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
    <SectionLabel>03 — Core Insight</SectionLabel>
    <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-6">
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
    <SectionLabel>04 — Design Iterations</SectionLabel>
    <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-6">
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
    <SectionLabel>05 — Final Feature Set</SectionLabel>
    <FeatureGrid
      features={[
        {
          icon: <Phone size={28} />,
          title: "Voice Interface",
          description: "Call in anytime. No appointment friction. AI answers immediately.",
        },
        {
          icon: <Brain size={28} />,
          title: "Empathetic AI",
          description: "System prompt built around validation, curiosity, non-judgment.",
        },
        {
          icon: <Activity size={28} />,
          title: "Stress Toolkit",
          description: "4-7-8 breathing, grounding exercises offered when anxiety detected.",
        },
        {
          icon: <FileText size={28} />,
          title: "Session Summaries",
          description: "Private text summary after each call. Encrypted. Only user sees it.",
        },
      ]}
    />
    <SectionLabel>06 — Lessons</SectionLabel>
  </>
);

const serenelyStats = [
  { number: "50+", label: "Active users in pilot" },
  { number: "70%", label: "Signups used at least once" },
  { number: "40%", label: "Used weekly" },
];

const serenelyFeatures = [
  { icon: <Phone size={24} />, title: "Voice Interface", description: "Call anytime, no appointment needed." },
  { icon: <Brain size={24} />, title: "Empathetic AI", description: "Validation-first, not advice-first." },
  { icon: <Activity size={24} />, title: "Stress Toolkit", description: "Breathing exercises on demand." },
  { icon: <FileText size={24} />, title: "Session Summaries", description: "Private, encrypted summaries." },
];

const serenelyLessons = [
  { number: 1, title: "Tone of voice matters more than features", description: "Same tech, completely different feeling with empathetic prompts." },
  { number: 2, title: "You don't need to be a therapist", description: "Led with empathy and iteration, not expertise." },
  { number: 3, title: "Privacy is a requirement, not a feature", description: "Encryption and secure handling built in from day one." },
  { number: 4, title: "Low-friction entry beats comprehensive features", description: "One thing: call right now and talk." },
];

const serenelyOutcome = "50+ active users. 70% engagement. Key insight: technology doesn't solve mental health — empathy does.";

export default function Home() {
  const [expandedCard, setExpandedCard] = useState<number | string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleToggle = (id: number | string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Loader onLoadComplete={() => setIsLoaded(true)} />
      
      {isLoaded && (
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen bg-primary relative pt-24"
        >
          <InteractiveDots dotColor="#3D3D9E" spacing={50} backgroundOpacity={0.1} />
          <TopNav />

          <section id="projects" className="px-4 md:px-8 pb-24">
            <div className="max-w-[1400px] mx-auto">
              
              {/* Main Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-min">
                
                {/* Hero Tile */}
                <Hero 
                  className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 shadow-neoLg rounded-xl" 
                  onLearnMore={() => setExpandedCard('about')}
                  onViewWork={scrollToProjects}
                />
                
                {/* About Tile */}
                <About 
                  className="col-span-1 md:col-span-1 lg:col-span-2 row-span-2 shadow-neo rounded-xl" 
                  isExpanded={expandedCard === 'about'}
                  onToggle={() => handleToggle('about')}
                />

                {/* Case Study 1 - Serenely (Featured) */}
                <CaseStudyCard
                  index={3}
                  isExpanded={expandedCard === 3}
                  onToggle={() => handleToggle(3)}
                  colSpan="col-span-1 md:col-span-2 lg:col-span-2"
                  rowSpan="row-span-1 md:row-span-2 rounded-xl shadow-neo"
                  data={{
                    id: "serenely",
                    title: "Serenely",
                    meta: "AI voice therapy companion",
                    role: "Product Manager & Technical Lead",
                    teamSize: "5 engineers, 3-month sprint",
                    tools: "FastAPI, React, OpenAI API, PostgreSQL, Twilio",
                    users: "50+ active during pilot",
                    context: "LUMS Software Engineering Capstone",
                    content: serenelySections,
                    stats: serenelyStats,
                    features: serenelyFeatures,
                    lessons: serenelyLessons,
                    outcome: serenelyOutcome,
                    link: "https://github.com/Um3rz/serenely"
                  }}
                />

                {/* Case Study 2 - Clutterless */}
                <CaseStudyCard
                  index={0}
                  isExpanded={expandedCard === 0}
                  onToggle={() => handleToggle(0)}
                  colSpan="col-span-1 md:col-span-2 lg:col-span-2"
                  rowSpan="row-span-1 rounded-xl shadow-neo"
                  data={{
                    id: "clutterless",
                    title: "Clutterless",
                    meta: "AI-powered academic email management",
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

                {/* Case Study 3 - TradeUp */}
                <CaseStudyCard
                  index={1}
                  isExpanded={expandedCard === 1}
                  onToggle={() => handleToggle(1)}
                  colSpan="col-span-1 md:col-span-1 lg:col-span-1"
                  rowSpan="row-span-1 rounded-xl shadow-neo"
                  data={{
                    id: "tradeup",
                    title: "TradeUp",
                    meta: "PSX mock trading platform",
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

                {/* Case Study 4 - Sentinel */}
                <CaseStudyCard
                  index={2}
                  isExpanded={expandedCard === 2}
                  onToggle={() => handleToggle(2)}
                  colSpan="col-span-1 md:col-span-1 lg:col-span-1"
                  rowSpan="row-span-1 rounded-xl shadow-neo"
                  data={{
                    id: "sentinel",
                    title: "The Sentinel",
                    meta: "Autonomous QA agent",
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
            </div>
          </section>

          <div className="h-px bg-border mx-6 my-12"></div>

          <CTAStrip />
          <Footer />
        </motion.main>
      )}
    </>
  );
}