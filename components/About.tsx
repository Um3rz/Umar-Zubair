"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import profilePhoto from "./profile-photo.png";
import {
  Palette,
  ClipboardList,
  PenTool,
  CheckSquare,
  Terminal,
  FileCode2,
  Atom,
  Globe,
  Wind,
  Layers,
  Sparkles,
  Server,
  Cat,
  Share2,
  Database,
  Braces,
  Container,
  Cloud,
  Link,
  Users,
  Bot,
  Cpu,
  MessageSquare,
  TestTube,
  X,
  ChevronRight,
} from "lucide-react";
import { useModalA11y, triggerProps } from "./useModalA11y";

const skills = [
  "Product Management",
  "AI/ML",
  "Next.js",
  "TypeScript",
  "Figma",
  "FastAPI",
  "LangGraph",
  "UX Research",
  "n8n",
  "System Design",
];

const tools = [
  { name: "Figma", icon: <Palette size={16} /> },
  { name: "Miro", icon: <ClipboardList size={16} /> },
  { name: "Notion", icon: <PenTool size={16} /> },
  { name: "Jira", icon: <CheckSquare size={16} /> },
  { name: "Python", icon: <Terminal size={16} /> },
  { name: "TypeScript", icon: <FileCode2 size={16} /> },
  { name: "React", icon: <Atom size={16} /> },
  { name: "Next.js", icon: <Globe size={16} /> },
  { name: "Tailwind", icon: <Wind size={16} /> },
  { name: "Shadcn", icon: <Layers size={16} /> },
  { name: "Framer Motion", icon: <Sparkles size={16} /> },
  { name: "FastAPI", icon: <Server size={16} /> },
  { name: "NestJS", icon: <Cat size={16} /> },
  { name: "GraphQL", icon: <Share2 size={16} /> },
  { name: "PostgreSQL", icon: <Database size={16} /> },
  { name: "MongoDB", icon: <Braces size={16} /> },
  { name: "Docker", icon: <Container size={16} /> },
  { name: "AWS", icon: <Cloud size={16} /> },
  { name: "LangChain", icon: <Link size={16} /> },
  { name: "CrewAI", icon: <Users size={16} /> },
  { name: "Claude Code", icon: <Bot size={16} /> },
  { name: "MCP", icon: <Cpu size={16} /> },
  { name: "Claude API", icon: <MessageSquare size={16} /> },
  { name: "Playwright", icon: <TestTube size={16} /> },
];

const experiences = [
  {
    role: "AI Product Engineer",
    company: "Odoo Dashboards",
    date: "Jun 2026 – Present",
    location: "Riyadh, KSA",
    points: [
      "Rebuilt the product frontend as a Next.js and TypeScript SPA with Shadcn, Tailwind and Framer Motion, moving the team off static templates onto shared design tokens and a documented component library; cut first-load JS with route-level code splitting and lazy imports, tracked on Web Vitals.",
      "Built the chat and query surface against a FastAPI backend, rendering streamed Claude tokens over SSE with React Query caching, optimistic updates and retry handling so long-running report jobs stay responsive.",
      "Replaced Supabase magic links with an n8n onboarding flow wired into FastAPI: trial signups get custom payloads, activation is verified against Polar.sh API keys, and leads land in Notion and the Odoo CRM with no manual entry.",
    ],
  },
  {
    role: "AI Engineering Intern",
    company: "Axon Build",
    date: "Jun 2025 – Jul 2025",
    location: "Remote",
    points: [
      "Shipped an AI-powered Shopify support bot end to end, from PRD and design reviews to the React chat widget in production, cutting query resolution time by 25%.",
      "Built an AI News Curator on the OpenAI Agent SDK and deployed it on Docker and AWS ECS at 99% uptime; three iterations on the agent and retrieval layer lifted feed relevance 25% and dropped delivery latency 35%.",
    ],
  },
];

const certifications = [
  { name: "Google AI Professional", issuer: "Google", year: "2024" },
  { name: "MCP for LLM Apps", issuer: "Anthropic", year: "2024" },
  { name: "System Design Maven", issuer: "System Design Maven", year: "2024" },
];

interface AboutProps {
  className?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export default function About({ className = "", isExpanded = false, onToggle }: AboutProps) {
  const toggle = onToggle ?? (() => { });
  const modalRef = useModalA11y(isExpanded, toggle);

  return (
    <>
      {/* Homepage bento cluster: About / Experience / Portrait / Toolset, all
          opening the same manufacturer-page modal below. */}
      <div className={`grid grid-cols-1 md:grid-cols-[1.4fr_1fr_0.9fr] md:grid-rows-2 gap-4 md:gap-5 ${className}`}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 0.99, transition: { duration: 0.15, ease: "easeOut" } }}
          whileTap={{ scale: 0.97, transition: { duration: 0.1, ease: "easeOut" } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          id="manufacturer"
          onClick={onToggle}
          {...triggerProps(toggle, isExpanded)}
          className="tile-ink border-2 border-theme p-6 md:p-8 md:row-span-2 cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.14em] font-semibold block mb-4 opacity-70">
              About
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight leading-none mb-4">
              Umar Zubair
            </h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90 max-w-[42ch]">
              Based in Riyadh. I focus on product management and AI system design. I care about building solid backend architecture and making sure our AI tools actually make sense for the end user.
            </p>
          </div>
          <span className="mt-8 inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-[0.1em]">
            More About Me
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 0.99, transition: { duration: 0.15, ease: "easeOut" } }}
          whileTap={{ scale: 0.97, transition: { duration: 0.1, ease: "easeOut" } }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          onClick={onToggle}
          {...triggerProps(toggle, isExpanded)}
          className="tile-limit border-2 border-theme p-5 md:p-6 cursor-pointer"
        >
          <span className="font-mono text-xs uppercase tracking-[0.14em] font-semibold block mb-4 opacity-80">
            Experience
          </span>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.role}>
                <span className="text-sm font-bold block leading-tight">{exp.role}</span>
                <span className="text-xs font-mono opacity-80">
                  {exp.company} · {exp.date}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          className="border-2 border-theme overflow-hidden hidden sm:block"
        >
          <Image
            src={profilePhoto}
            alt="Umar Zubair"
            placeholder="blur"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          className="tile-ink border-2 border-theme p-5 md:p-6 sm:col-span-2"
        >
          <span className="font-mono text-xs uppercase tracking-[0.14em] font-semibold block mb-4 opacity-70">
            Toolset
          </span>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="pill border-[var(--paper)]/40">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Full manufacturer page */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/40 backdrop-blur-sm"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) toggle();
            }}
          >
            <motion.div
              ref={modalRef}
              layoutId="about-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="about-modal-title"
              className="bg-primary w-full max-w-4xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto border-2 border-theme relative flex flex-col"
            >
              {/* Header */}
              <div className="sticky top-0 bg-primary z-20 border-b-2 border-theme flex justify-between items-start p-6 md:px-8 md:py-6 gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 border-2 border-theme overflow-hidden shrink-0">
                    <Image
                      src={profilePhoto}
                      alt="Umar Zubair"
                      sizes="48px"
                      placeholder="blur"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h2 id="about-modal-title" className="font-display text-xl md:text-2xl font-black uppercase tracking-tight">
                      Umar Zubair
                    </h2>
                    <p className="text-sm text-muted mt-0.5">AI Frontend Engineer / Technical PM</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.06, transition: { duration: 0.15 } }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                  onClick={onToggle}
                  aria-label="Close manufacturer page"
                  className="shrink-0 p-2 border-2 border-theme hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:border-[var(--ink)] transition-colors"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10 flex-1">
                <div className="section-bar mt-0 mb-4">General Description</div>
                <div className="max-w-[70ch] text-base leading-relaxed space-y-4 mb-4">
                  <p>
                    Based in Riyadh. I focus on product management and AI system design. I care about building solid backend architecture and making sure our AI tools actually make sense for the end user.
                  </p>
                  <p>
                    I believe the best products solve real problems while feeling effortless to
                    use. Whether it&apos;s an autonomous QA agent or a frictionless email manager
                    for students, I thrive on turning complex technical challenges into intuitive
                    user experiences.
                  </p>
                </div>

                <div className="section-bar mb-4">Experience</div>
                <div className="border-2 border-theme mb-4">
                  {experiences.map((exp, idx) => (
                    <div
                      key={exp.role}
                      className={`grid grid-cols-1 md:grid-cols-[11rem_1fr] ${idx < experiences.length - 1 ? "border-b-2 border-theme" : ""
                        }`}
                    >
                      <div className="bg-secondary p-4 md:p-5 md:border-r-2 border-theme">
                        <div className="font-mono text-xs text-signal font-semibold uppercase tracking-[0.1em] mb-1">
                          {exp.date}
                        </div>
                        <div className="font-mono text-xs text-muted uppercase tracking-[0.1em]">
                          {exp.location}
                        </div>
                      </div>
                      <div className="p-4 md:p-5">
                        <h4 className="font-display font-bold uppercase tracking-wide text-base mb-0.5">
                          {exp.role}
                        </h4>
                        <p className="text-sm text-secondary mb-3">{exp.company}</p>
                        <ul className="list-disc ml-5 space-y-2 text-sm md:text-base">
                          {exp.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="section-bar mb-4">Core Competencies</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skills.map((skill) => (
                    <span key={skill} className="pill bg-secondary border-theme">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="section-bar mb-4">Toolkit — Parts List</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tools.map((tool, idx) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-2 px-3 py-2 border border-theme"
                    >
                      <span className="font-mono text-xs text-signal font-semibold">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-signal">{tool.icon}</span>
                      <span className="text-xs font-medium">{tool.name}</span>
                    </div>
                  ))}
                </div>

                <div className="section-bar mb-4">Compliance Marks</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="border-2 border-theme p-4">
                      <div className="font-mono text-[0.6875rem] text-signal font-bold uppercase tracking-[0.14em] mb-2">
                        Cert
                      </div>
                      <h4 className="font-display font-bold uppercase text-sm tracking-wide mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-muted font-mono">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
