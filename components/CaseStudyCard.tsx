"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  MetaStrip,
  StatsRow,
  FeatureGrid,
  LessonList,
  Callout,
} from "./CaseStudyComponents";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Lesson {
  number: number;
  title: string;
  description: string;
}

interface CaseStudyData {
  id: string;
  title: string;
  meta: string;
  role?: string;
  teamSize?: string;
  tools?: string;
  context?: string;
  users?: string;
  problemSpace?: string;
  content: React.ReactNode;
  stats?: { number: string; label: string }[];
  features?: Feature[];
  lessons?: Lesson[];
  outcome?: string;
  link?: string;
}

interface CaseStudyCardProps {
  data: CaseStudyData;
  index: number;
}

const projectColors = [
  { border: "border-l-indigo-500", gradient: "from-indigo/20 to-transparent", accent: "text-indigo" },
  { border: "border-l-emerald-500", gradient: "from-emerald-20 to-transparent", accent: "text-emerald-500" },
  { border: "border-l-amber-500", gradient: "from-amber-20 to-transparent", accent: "text-amber-500" },
  { border: "border-l-rose-500", gradient: "from-rose-20 to-transparent", accent: "text-rose-500" },
  { border: "border-l-violet-500", gradient: "from-violet-20 to-transparent", accent: "text-violet-500" },
  { border: "border-l-cyan-500", gradient: "from-cyan-20 to-transparent", accent: "text-cyan-500" },
];

export default function CaseStudyCard({ data, index }: CaseStudyCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const colors = projectColors[index % projectColors.length];

  const metaItems = [
    ...(data.role ? [{ key: "Role", value: data.role }] : []),
    ...(data.teamSize ? [{ key: "Team Size", value: data.teamSize }] : []),
    ...(data.tools ? [{ key: "Tools", value: data.tools }] : []),
    ...(data.context ? [{ key: "Context", value: data.context }] : []),
    ...(data.users ? [{ key: "Users", value: data.users }] : []),
    ...(data.problemSpace ? [{ key: "Problem Space", value: data.problemSpace }] : []),
  ];

  return (
    <motion.div
      id={data.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`border-l-4 ${colors.border} shadow-neo mb-8 overflow-hidden`}
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 md:p-8 text-left cursor-pointer hover:bg-border/30 transition-colors"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <span className={`text-xs font-semibold ${colors.accent} uppercase tracking-widest`}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-xl md:text-2xl font-semibold">
              {data.title}
            </h3>
          </div>
          <p className="text-sm text-muted">{data.meta}</p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-muted"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="border-t border-border"
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              {metaItems.length > 0 && <MetaStrip items={metaItems} />}
              {data.content}
              {data.stats && data.stats.length > 0 && (
                <StatsRow stats={data.stats} />
              )}
              {data.features && data.features.length > 0 && (
                <FeatureGrid
                  features={data.features.map((f) => ({
                    icon: f.icon,
                    title: f.title,
                    description: f.description,
                  }))}
                />
              )}
              {data.lessons && data.lessons.length > 0 && (
                <LessonList lessons={data.lessons} />
              )}
              {data.outcome && <Callout>{data.outcome}</Callout>}
              {data.link && (
                <div className="mt-8 flex justify-end">
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-semibold ${colors.accent} hover:underline flex items-center gap-2`}
                  >
                    View Project <ChevronDown size={16} className="rotate-90" />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}