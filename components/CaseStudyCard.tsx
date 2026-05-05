"use client";

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
  isExpanded: boolean;
  onToggle: () => void;
}

const projectColors = [
  {
    bg: "bg-[#3D3D9E]/20",
    border: "border-[#3D3D9E]",
    accent: "text-[#3D3D9E]",
    light: "#3D3D9E"
  },
  {
    bg: "bg-emerald-500/20",
    border: "border-emerald-500",
    accent: "text-emerald-500",
    light: "#10B981"
  },
  {
    bg: "bg-[#D97706]/20",
    border: "border-[#D97706]",
    accent: "text-[#D97706]",
    light: "#D97706"
  },
  {
    bg: "bg-rose-500/20",
    border: "border-rose-500",
    accent: "text-rose-500",
    light: "#F43F5E"
  },
];

export default function CaseStudyCard({ data, index, isExpanded, onToggle }: CaseStudyCardProps) {
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
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      onClick={onToggle}
      className={`
        ${colors.bg} border-2 ${colors.border} 
        overflow-hidden transition-all duration-300
        cursor-pointer
        ${isExpanded ? "col-span-1 md:col-span-2" : "col-span-1"}
      `}
      style={{ borderColor: colors.light }}
    >
      <motion.div
        className="w-full p-6 md:p-8 text-left cursor-pointer"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: colors.light }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div
                className="w-8 h-1 rounded-full"
                style={{ backgroundColor: colors.light }}
              />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              {data.title}
            </h3>
            <p className="text-sm text-muted">{data.meta}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-muted mt-2"
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="border-t-2"
            style={{ borderColor: colors.light }}
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
                    className="text-sm font-semibold hover:underline flex items-center gap-2"
                    style={{ color: colors.light }}
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