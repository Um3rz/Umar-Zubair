"use client";

const LABEL = "font-mono text-[0.6875rem] uppercase tracking-[0.1em]";

interface SectionBarProps {
  children: React.ReactNode;
}

/** The reversed mono bar every section heading in the system uses. */
export function SectionBar({ children }: SectionBarProps) {
  return <div className="section-bar mt-10 mb-4 first:mt-0">{children}</div>;
}

interface OrderingInfoProps {
  items: { key: string; value: string }[];
}

/** Key/value strip — role, team, tools, context — framed like a parts spec. */
export function OrderingInfo({ items }: OrderingInfoProps) {
  return (
    <div className="flex flex-wrap border-2 border-theme mb-10">
      {items.map((item, idx) => (
        <div
          key={item.key}
          className={`flex-1 min-w-[140px] px-4 py-3 md:px-5 md:py-4 ${
            idx < items.length - 1 ? "border-r border-theme" : ""
          }`}
        >
          <div className={`${LABEL} text-muted mb-1 font-semibold`}>{item.key}</div>
          <div className="text-sm font-medium">{item.value}</div>
        </div>
      ))}
    </div>
  );
}

interface SpecTableProps {
  stats: { number: string; label: string }[];
}

/** Key Specifications well — solid ink blocks with the figure reversed out, one per stat. */
export function SpecTable({ stats }: SpecTableProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {stats.map((stat, idx) => (
        <div key={idx} className="tile-ink border-2 border-theme px-5 py-4 min-w-[7rem]">
          <div className="font-mono text-2xl font-bold leading-none mb-1 tabular-nums">
            {stat.number}
          </div>
          <div className={`${LABEL} opacity-70`}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

interface BlockDiagramProps {
  features: { icon: React.ReactNode; title: string; description: string }[];
}

/** Numbered spec cells in a ruled grid — the datasheet's feature-block idiom. */
export function BlockDiagram({ features }: BlockDiagramProps) {
  const cols = 2;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-theme my-8">
      {features.map((feature, idx) => {
        const isLastInRow = (idx + 1) % cols === 0 || idx === features.length - 1;
        const rowStart = features.length - (features.length % cols || cols);
        const isLastRow = idx >= rowStart;
        return (
          <div
            key={idx}
            className={`p-5 md:p-6 border-theme ${isLastInRow ? "" : "md:border-r-2"} ${
              isLastRow ? "" : "border-b-2"
            }`}
          >
            <div className="text-signal mb-3">{feature.icon}</div>
            <h4 className="font-display text-base font-bold uppercase tracking-wide mb-2">
              {feature.title}
            </h4>
            <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}

interface Revision {
  number: number;
  title: string;
  description: string;
}

interface RevisionHistoryProps {
  lessons: Revision[];
}

/** Revision history table — this is where the case study's lessons live. */
export function RevisionHistory({ lessons }: RevisionHistoryProps) {
  return (
    <div className="border-2 border-theme my-8">
      <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr] border-b-2 border-theme bg-secondary">
        <div className={`px-3 py-2 border-r border-theme ${LABEL} text-muted font-semibold`}>
          Rev
        </div>
        <div className={`px-4 py-2 ${LABEL} text-muted font-semibold`}>Description</div>
      </div>
      {lessons.map((lesson, idx) => (
        <div
          key={idx}
          className={`grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr] ${
            idx < lessons.length - 1 ? "border-b border-theme" : ""
          }`}
        >
          <div className="px-3 py-4 border-r border-theme font-mono text-signal font-semibold tabular-nums">
            {String(lesson.number).padStart(2, "0")}
          </div>
          <div className="px-4 py-4">
            <strong className="block font-semibold mb-1.5">{lesson.title}</strong>
            <p className="text-sm text-muted leading-relaxed">{lesson.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

interface OutcomeNoteProps {
  children: React.ReactNode;
}

/** The closing result — a full-bleed accent block, the same solid-fill
 *  language as the homepage bento tiles, so a case study ends on the same
 *  visual note it opened on. */
export function OutcomeNote({ children }: OutcomeNoteProps) {
  return (
    <div className="tile-limit border-2 border-theme p-6 md:p-8 my-8">
      <span className={`${LABEL} font-semibold block mb-2 opacity-80`}>Outcome</span>
      <p className="text-base md:text-lg font-medium leading-relaxed">{children}</p>
    </div>
  );
}
