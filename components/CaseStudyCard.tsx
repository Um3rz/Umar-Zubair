"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import {
  MetaStrip,
  StatsRow,
  FeatureGrid,
  LessonList,
  Callout,
} from "./CaseStudyComponents";
import { useEffect } from "react";

interface Feature {
  icon: React.ReactNode;
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
  colSpan?: string;
  rowSpan?: string;
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

export default function CaseStudyCard({ data, index, isExpanded, onToggle, colSpan = "col-span-1", rowSpan = "row-span-1" }: CaseStudyCardProps) {
  const colors = projectColors[index % projectColors.length];

  const metaItems = [
    ...(data.role ? [{ key: "Role", value: data.role }] : []),
    ...(data.teamSize ? [{ key: "Team Size", value: data.teamSize }] : []),
    ...(data.tools ? [{ key: "Tools", value: data.tools }] : []),
    ...(data.context ? [{ key: "Context", value: data.context }] : []),
    ...(data.users ? [{ key: "Users", value: data.users }] : []),
    ...(data.problemSpace ? [{ key: "Problem Space", value: data.problemSpace }] : []),
  ];

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isExpanded]);

  return (
    <>
      {/* Grid Tile */}
      <motion.div
        id={data.id}
        layoutId={`card-${data.id}`}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
        onClick={onToggle}
        className={`
          ${colors.bg} border-2 ${colors.border} 
          overflow-hidden cursor-pointer relative group
          flex flex-col justify-end p-6 md:p-8
          ${colSpan} ${rowSpan}
        `}
        style={{ borderColor: colors.light, minHeight: rowSpan.includes('2') ? '400px' : '250px' }}
        whileHover={{ scale: 0.98 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
        
        <div className="z-10 relative">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="text-xs font-semibold uppercase tracking-widest bg-primary/80 px-2 py-1 backdrop-blur-md"
              style={{ color: colors.light }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-white drop-shadow-md">
            {data.title}
          </h3>
          <p className="text-sm text-white/90 drop-shadow-sm flex items-center gap-2">
            {data.meta}
            <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
          </p>
        </div>
      </motion.div>

      {/* Full Screen Overlay / Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/40 backdrop-blur-sm"
            onClick={onToggle}
          >
            <motion.div
              layoutId={`card-${data.id}`}
              className="bg-primary w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto border-2 shadow-2xl relative flex flex-col"
              style={{ borderColor: colors.light }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-primary/95 backdrop-blur-md z-20 border-b-2 flex justify-between items-center p-6 md:px-8 md:py-6" style={{ borderColor: colors.light }}>
                <div>
                  <h2 className="text-2xl md:text-4xl font-semibold">{data.title}</h2>
                  <p className="text-sm text-muted mt-1">{data.meta}</p>
                </div>
                <button 
                  onClick={onToggle}
                  className="p-2 hover:bg-secondary rounded-full transition-colors"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10 flex-1">
                {metaItems.length > 0 && <MetaStrip items={metaItems} />}
                <div className="prose prose-invert max-w-none">
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
                    <div className="mt-12 flex justify-start">
                      <a
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center gap-2"
                        style={{ backgroundColor: colors.light }}
                      >
                        View Live Project <ChevronRight size={18} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}