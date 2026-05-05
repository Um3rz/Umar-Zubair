"use client";

interface MetaStripProps {
  items: { key: string; value: string }[];
}

export function MetaStrip({ items }: MetaStripProps) {
  return (
    <div className="flex flex-wrap gap-8 py-6 border-b-2 border-theme mb-10">
      {items.map((item) => (
        <div key={item.key} className="flex flex-col gap-0.5">
          <span className="text-xs uppercase tracking-widest text-muted font-semibold">
            {item.key}
          </span>
          <span className="text-sm font-medium">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

interface StatsRowProps {
  stats: { number: string; label: string }[];
}

export function StatsRow({ stats }: StatsRowProps) {
  return (
    <div className="flex flex-wrap border-2 border-theme shadow-neoLg w-fit mb-10">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`px-5 py-4 ${idx < stats.length - 1 ? "border-r-2 border-theme" : ""}`}
        >
          <div className="font-serif text-2xl text-indigo leading-none mb-1">
            {stat.number}
          </div>
          <div className="text-xs uppercase tracking-widest text-muted font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="text-xs uppercase tracking-widest text-muted font-semibold mt-8 mb-3">
      {children}
    </div>
  );
}

interface FeatureGridProps {
  features: { icon: React.ReactNode; title: string; description: string }[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="p-5 border-2 border-theme bg-secondary opacity-90"
        >
          <div className="text-2xl mb-3">{feature.icon}</div>
          <h4 className="text-base font-semibold mb-3">
            {feature.title}
          </h4>
          <p className="text-sm text-muted leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}

interface Lesson {
  number: number;
  title: string;
  description: string;
}

interface LessonListProps {
  lessons: Lesson[];
}

export function LessonList({ lessons }: LessonListProps) {
  return (
    <div className="my-8">
      {lessons.map((lesson, idx) => (
        <div
          key={idx}
          className={`flex gap-6 py-8 ${idx < lessons.length - 1 ? "border-b border-theme" : ""
            }`}
        >
          <div className="font-serif text-2xl text-indigo flex-shrink-0">
            {lesson.number}
          </div>
          <div>
            <strong className="block font-semibold mb-2">
              {lesson.title}
            </strong>
            <p className="text-sm text-muted leading-relaxed">
              {lesson.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

interface CalloutProps {
  children: React.ReactNode;
}

export function Callout({ children }: CalloutProps) {
  return (
    <div className="p-6 border-2 border-indigo bg-indigo/10 my-8 text-sm leading-relaxed">
      {children}
    </div>
  );
}