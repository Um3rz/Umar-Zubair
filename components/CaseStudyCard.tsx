"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import {
  OrderingInfo,
  SpecTable,
  BlockDiagram,
  RevisionHistory,
  OutcomeNote,
} from "./CaseStudyComponents";
import { useModalA11y, triggerProps } from "./useModalA11y";

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
  category?: string;
  role?: string;
  teamSize?: string;
  tools?: string;
  context?: string;
  users?: string;
  problemSpace?: string;
  /** The one quotable figure for the selection-table row. Must already appear in the study. */
  proof?: string;
  content: React.ReactNode;
  stats?: { number: string; label: string }[];
  features?: Feature[];
  lessons?: Lesson[];
  outcome?: string;
  link?: string;
}

interface CaseStudyCardProps {
  data: CaseStudyData;
  /** Row position. Drives the printed PART number and the entrance stagger. */
  ordinal: number;
  isExpanded: boolean;
  onToggle: () => void;
}

// Cycles cream / black / orange / green across the grid, same palette as the
// rest of the bento system, so the work section isn't a wall of white cards.
const TILE_VARIANTS = ["", "tile-ink", "tile-limit", "tile-signal"];

export default function CaseStudyCard({ data, ordinal, isExpanded, onToggle }: CaseStudyCardProps) {
  const part = `UZ-${String(ordinal).padStart(2, "0")}`;
  const variant = TILE_VARIANTS[(ordinal - 1) % TILE_VARIANTS.length];
  const colored = variant !== "";

  const metaItems = [
    ...(data.role ? [{ key: "Role", value: data.role }] : []),
    ...(data.teamSize ? [{ key: "Team Size", value: data.teamSize }] : []),
    ...(data.tools ? [{ key: "Tools", value: data.tools }] : []),
    ...(data.context ? [{ key: "Context", value: data.context }] : []),
    ...(data.users ? [{ key: "Users", value: data.users }] : []),
    ...(data.problemSpace ? [{ key: "Problem Space", value: data.problemSpace }] : []),
  ];

  // Same mechanism as the About modal: a plain layoutId crossfade, no native
  // view-transition path. That path forced the DOM update through flushSync
  // ahead of the browser's own snapshot timing, which is what caused the
  // open-transition glitch — the crossfade doesn't have that race.
  const modalRef = useModalA11y(isExpanded, onToggle);

  return (
    <>
      {/* Numbered work row */}
      <motion.div
        id={data.id}
        layoutId={`card-${data.id}`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileTap={{ scale: 0.99, transition: { duration: 0.1, ease: "easeOut" } }}
        transition={{ delay: (ordinal - 1) * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-50px" }}
        onClick={onToggle}
        {...triggerProps(onToggle, isExpanded)}
        className={`group relative flex flex-col md:flex-row md:items-center gap-2 md:gap-6 border-2 border-theme border-t-0 first:border-t-2
          p-5 md:px-8 md:py-6 transition-colors duration-150 cursor-pointer ${variant} ${colored ? "hover:opacity-90" : "hover:bg-row-wash"}`}
      >
        <span
          className={`font-mono font-semibold text-xs uppercase tracking-[0.1em] shrink-0 md:w-40 ${
            colored ? "opacity-80" : "text-signal"
          }`}
        >
          {part.replace("UZ-", "")} / {data.category ?? "Project"}
        </span>

        <h3 className="font-display text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight flex-1">
          {data.title}
        </h3>

        <div className="flex items-center justify-between md:justify-end gap-4 md:shrink-0">
          <span
            className={`inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-[0.1em] ${
              colored ? "" : "text-signal"
            }`}
          >
            Read Case Study
          </span>
          <ChevronRight
            size={20}
            className={`group-hover:translate-x-1 transition-all ${
              colored ? "opacity-70 group-hover:opacity-100" : "text-muted group-hover:text-signal"
            }`}
          />
        </div>
      </motion.div>

      {/* Full sheet */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/40 backdrop-blur-sm"
            /* Close only when the press *starts* on the scrim, so selecting text
               inside the dialog and releasing past its edge doesn't dismiss it. */
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) onToggle();
            }}
          >
            <motion.div
              ref={modalRef}
              layoutId={`card-${data.id}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${data.id}-title`}
              className="bg-primary w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto border-2 border-theme relative flex flex-col"
            >
              <ModalContent data={data} part={part} metaItems={metaItems} onClose={onToggle} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ModalContent({
  data,
  part,
  metaItems,
  onClose,
}: {
  data: CaseStudyData;
  part: string;
  metaItems: { key: string; value: string }[];
  onClose: () => void;
}) {
  return (
    <>
      {/* Header */}
      <div className="sticky top-0 bg-primary z-20 border-b-2 border-theme flex justify-between items-start p-6 md:px-8 md:py-6 gap-4">
        <div className="min-w-0">
          <div className="font-mono text-signal text-xs font-bold uppercase tracking-[0.14em] mb-1">
            {part} / {data.category ?? "Project"}
          </div>
          <h2 id={`${data.id}-title`} className="font-display text-2xl md:text-4xl font-black uppercase tracking-tight">
            {data.title}
          </h2>
          <p className="text-sm text-muted mt-1">{data.meta}</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.06, transition: { duration: 0.15 } }}
          whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
          onClick={onClose}
          aria-label={`Close ${data.title}`}
          className="shrink-0 p-2 border-2 border-theme hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:border-[var(--ink)] transition-colors"
        >
          <X size={24} />
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-6 md:p-10 flex-1">
        {metaItems.length > 0 && <OrderingInfo items={metaItems} />}
        {/* DESIGN.md's Measure Rule: the modal is wider than a comfortable
            reading line, so content constrains its own width rather than
            filling the frame. */}
        <div className="max-w-[70ch]">
          {data.content}
          {data.stats && data.stats.length > 0 && <SpecTable stats={data.stats} />}
          {data.features && data.features.length > 0 && (
            <BlockDiagram
              features={data.features.map((f) => ({
                icon: f.icon,
                title: f.title,
                description: f.description,
              }))}
            />
          )}
          {data.lessons && data.lessons.length > 0 && <RevisionHistory lessons={data.lessons} />}
          {data.outcome && <OutcomeNote>{data.outcome}</OutcomeNote>}
          {data.link && (
            <div className="mt-12 flex justify-start">
              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                View Live Project <ChevronRight size={18} />
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
