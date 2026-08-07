"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
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

  // Native morph only when the browser supports it and the visitor allows motion;
  // everything else keeps the existing layoutId crossfade untouched below.
  const [useNativeTransition] = useState(
    () =>
      typeof document !== "undefined" &&
      !!document.startViewTransition &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches === false
  );
  const tileRef = useRef<HTMLDivElement>(null);
  // Ignore re-entrant toggles (Escape-then-click, fast double-click) until the
  // current transition settles, since starting one mid-flight throws.
  const transitionInFlight = useRef(false);
  const handleToggle = useNativeTransition
    ? () => {
        if (transitionInFlight.current) return;
        transitionInFlight.current = true;
        const transition = document.startViewTransition!(() => flushSync(() => onToggle()));
        // The browser can legally skip the visual transition (e.g. no longer the
        // focused tab) while still applying the DOM update — `ready` rejects in
        // that case even though nothing is actually broken, so it needs a catch
        // or it logs as an unhandled-rejection exception on every such toggle.
        transition.ready.catch(() => {});
        transition.finished.finally(() => {
          transitionInFlight.current = false;
        });
      }
    : onToggle;

  const modalRef = useModalA11y(isExpanded, handleToggle);

  // Hand the shared name to whichever element is about to be on-screen, so the
  // browser morphs the row into the sheet instead of crossfading two snapshots.
  useLayoutEffect(() => {
    if (!useNativeTransition) return;
    tileRef.current?.style.setProperty("view-transition-name", isExpanded ? "none" : `card-${data.id}`);
    modalRef.current?.style.setProperty("view-transition-name", isExpanded ? `card-${data.id}` : "none");
  }, [isExpanded, useNativeTransition, data.id, modalRef]);

  return (
    <>
      {/* Bento work card */}
      <motion.div
        ref={tileRef}
        id={data.id}
        layoutId={useNativeTransition ? undefined : `card-${data.id}`}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 0.99, transition: { duration: 0.15, ease: "easeOut" } }}
        whileTap={{ scale: 0.97, transition: { duration: 0.1, ease: "easeOut" } }}
        transition={{ delay: (ordinal - 1) * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-50px" }}
        onClick={handleToggle}
        {...triggerProps(handleToggle, isExpanded)}
        className={`group flex flex-col justify-between border-2 border-theme p-5 md:p-6 min-h-[200px]
          transition-colors duration-150 cursor-pointer ${variant} ${colored ? "hover:opacity-90" : "hover:bg-row-wash"}`}
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <span
              className={`font-mono font-semibold text-xs uppercase tracking-[0.1em] ${
                colored ? "opacity-80" : "text-signal"
              }`}
            >
              {part.replace("UZ-", "")} / {data.category ?? "Project"}
            </span>
            <ChevronRight
              size={18}
              className={`group-hover:translate-x-1 transition-all ${
                colored ? "opacity-70 group-hover:opacity-100" : "text-muted group-hover:text-signal"
              }`}
            />
          </div>
          <h3 className="font-display text-xl md:text-2xl font-black uppercase tracking-tight mb-2">
            {data.title}
          </h3>
          <p className={`text-sm ${colored ? "opacity-80" : "text-muted"}`}>{data.meta}</p>
        </div>

        <span
          className={`mt-6 inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-[0.1em] ${
            colored ? "" : "text-signal"
          }`}
        >
          Read Case Study
          <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </motion.div>

      {/* Full sheet */}
      {useNativeTransition ? (
        isExpanded && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/40 backdrop-blur-sm"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) handleToggle();
            }}
          >
            <div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${data.id}-title`}
              className="bg-primary w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto border-2 border-theme relative flex flex-col"
            >
              <ModalContent data={data} part={part} metaItems={metaItems} onClose={handleToggle} />
            </div>
          </div>
        )
      ) : (
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
      )}
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
