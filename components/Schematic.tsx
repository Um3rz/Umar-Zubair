"use client";

/** Hand-laid block diagrams — the "Typical Application" schematics inside the
 *  four architecture-heavy sheets. Nodes and edges are authored per-diagram
 *  data below; this file only supplies the shared renderer, since the same
 *  box-and-arrow grammar repeats across all four. */

interface SNode {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  gate?: boolean;
}

interface SEdge {
  from: string;
  to: string;
  label?: string;
  back?: boolean;
}

interface SchematicProps {
  viewBox: string;
  nodes: SNode[];
  edges: SEdge[];
  caption: string;
}

function side(n: SNode, s: "left" | "right") {
  return s === "left" ? { x: n.x, y: n.y + n.h / 2 } : { x: n.x + n.w, y: n.y + n.h / 2 };
}

function Schematic({ viewBox, nodes, edges, caption }: SchematicProps) {
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  return (
    <figure className="my-8 border-2 border-theme not-prose">
      <div className="overflow-x-auto bg-secondary">
        <svg viewBox={viewBox} className="w-full min-w-[560px] h-auto" role="img" aria-label={caption}>
          <defs>
            <marker id="arrowhead" markerWidth="7" markerHeight="7" refX="5" refY="2.5" orient="auto">
              <path d="M0,0 L5,2.5 L0,5 Z" style={{ fill: "var(--signal-field)" }} />
            </marker>
          </defs>

          {edges.map((e, i) => {
            const a = byId[e.from];
            const b = byId[e.to];
            if (!a || !b) return null;

            if (e.back) {
              const startX = a.x + a.w * 0.25;
              const startY = a.y + a.h;
              const endX = b.x + b.w * 0.75;
              const endY = b.y + b.h;
              const dip = Math.max(a.y, b.y) + Math.max(a.h, b.h) + 40;
              return (
                <g key={i}>
                  <path
                    d={`M ${startX} ${startY} C ${startX} ${dip}, ${endX} ${dip}, ${endX} ${endY}`}
                    fill="none"
                    style={{ stroke: "var(--signal-field)" }}
                    strokeWidth={2}
                    strokeDasharray="4 3"
                    markerEnd="url(#arrowhead)"
                  />
                  {e.label && (
                    <text
                      x={(startX + endX) / 2}
                      y={dip + 3}
                      textAnchor="middle"
                      fontFamily="var(--font-mono)"
                      fontSize="9.5"
                      style={{ fill: "var(--signal-text)" }}
                    >
                      {e.label}
                    </text>
                  )}
                </g>
              );
            }

            const p1 = side(a, "right");
            const p2 = side(b, "left");
            return (
              <g key={i}>
                <line
                  x1={p1.x}
                  y1={p1.y}
                  x2={p2.x}
                  y2={p2.y}
                  style={{ stroke: "var(--ink-2)" }}
                  strokeWidth={2}
                  markerEnd="url(#arrowhead)"
                />
                {e.label && (
                  <text
                    x={(p1.x + p2.x) / 2}
                    y={Math.min(p1.y, p2.y) - 8}
                    textAnchor="middle"
                    fontFamily="var(--font-mono)"
                    fontSize="9.5"
                    style={{ fill: "var(--ink-2)" }}
                  >
                    {e.label}
                  </text>
                )}
              </g>
            );
          })}

          {nodes.map((n) => (
            <g key={n.id}>
              <rect
                x={n.x}
                y={n.y}
                width={n.w}
                height={n.h}
                style={{
                  fill: n.gate ? "var(--signal-field)" : "var(--paper)",
                  stroke: n.gate ? "var(--signal-field)" : "var(--ink)",
                }}
                strokeWidth={2}
              />
              <text
                x={n.x + n.w / 2}
                y={n.y + n.h / 2 - (n.sub ? 6 : 0)}
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="var(--font-mono)"
                fontWeight={700}
                fontSize="10.5"
                style={{ fill: n.gate ? "var(--on-signal)" : "var(--ink)" }}
              >
                {n.label.toUpperCase()}
              </text>
              {n.sub && (
                <text
                  x={n.x + n.w / 2}
                  y={n.y + n.h / 2 + 12}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="var(--font-mono)"
                  fontSize="9"
                  style={{ fill: n.gate ? "var(--on-signal)" : "var(--ink-2)" }}
                >
                  {n.sub}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>
      <figcaption className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted px-4 py-2 border-t-2 border-theme">
        {caption}
      </figcaption>
    </figure>
  );
}

export function DevStudioSchematic() {
  return (
    <Schematic
      viewBox="0 0 978 210"
      caption="Typical Application — Seven-Node Pipeline, Two Hard Gates"
      nodes={[
        { id: "director", x: 20, y: 70, w: 104, h: 54, label: "Director" },
        { id: "architect", x: 146, y: 70, w: 104, h: 54, label: "Architect" },
        { id: "engineer", x: 272, y: 70, w: 104, h: 54, label: "Engineer" },
        { id: "filewriter", x: 398, y: 70, w: 110, h: 54, label: "File Writer" },
        { id: "gate1", x: 530, y: 70, w: 50, h: 54, label: "Gate", gate: true },
        { id: "exec", x: 602, y: 70, w: 104, h: 54, label: "Exec Mgr" },
        { id: "qa", x: 728, y: 70, w: 112, h: 54, label: "QA Eng" },
        { id: "scorer", x: 862, y: 70, w: 96, h: 54, label: "Scorer" },
      ]}
      edges={[
        { from: "director", to: "architect" },
        { from: "architect", to: "engineer" },
        { from: "engineer", to: "filewriter" },
        { from: "filewriter", to: "gate1" },
        { from: "gate1", to: "exec" },
        { from: "exec", to: "qa" },
        { from: "qa", to: "scorer" },
        { from: "scorer", to: "engineer", back: true, label: "Gate · Refine" },
      ]}
    />
  );
}

export function MedallionSchematic() {
  return (
    <Schematic
      viewBox="0 0 676 252"
      caption="Typical Application — Bronze / Silver / Gold Stream"
      nodes={[
        { id: "loader", x: 20, y: 110, w: 110, h: 54, label: "Auto Loader" },
        { id: "bronze", x: 152, y: 110, w: 96, h: 54, label: "Bronze", sub: "rescue" },
        { id: "silver", x: 270, y: 110, w: 100, h: 54, label: "Silver", sub: "CDC merge" },
        { id: "gold", x: 392, y: 110, w: 90, h: 54, label: "Gold" },
        { id: "g1", x: 506, y: 20, w: 150, h: 44, label: "Monthly Delay" },
        { id: "g2", x: 506, y: 76, w: 150, h: 44, label: "Biweekly Dist." },
        { id: "g3", x: 506, y: 132, w: 150, h: 44, label: "Worst Route" },
        { id: "g4", x: 506, y: 188, w: 150, h: 44, label: "Hourly Counts" },
      ]}
      edges={[
        { from: "loader", to: "bronze" },
        { from: "bronze", to: "silver" },
        { from: "silver", to: "gold" },
        { from: "gold", to: "g1" },
        { from: "gold", to: "g2" },
        { from: "gold", to: "g3" },
        { from: "gold", to: "g4" },
      ]}
    />
  );
}

export function ViTSchematic() {
  return (
    <Schematic
      viewBox="0 0 652 170"
      caption="Typical Application — MobileNetV2 + ViT Head"
      nodes={[
        { id: "input", x: 20, y: 70, w: 110, h: 60, label: "MRI 160²", sub: "input" },
        { id: "backbone", x: 154, y: 70, w: 150, h: 60, label: "MobileNetV2", sub: "phase 1: frozen" },
        { id: "vit", x: 328, y: 70, w: 150, h: 60, label: "ViT Head", sub: "patch + CLS + pos" },
        { id: "output", x: 502, y: 70, w: 130, h: 60, label: "4-Class Out", sub: "CN/EMCI/LMCI/AD" },
      ]}
      edges={[
        { from: "input", to: "backbone" },
        { from: "backbone", to: "vit", label: "phase 2: fine-tune e2e" },
        { from: "vit", to: "output" },
      ]}
    />
  );
}

export function SentinelSchematic() {
  return (
    <Schematic
      viewBox="0 0 800 210"
      caption="Typical Application — Self-Correcting Fix Loop"
      nodes={[
        { id: "shot", x: 20, y: 70, w: 110, h: 54, label: "Screenshot" },
        { id: "vision", x: 152, y: 70, w: 120, h: 54, label: "Vision Analysis" },
        { id: "fix", x: 294, y: 70, w: 110, h: 54, label: "Generate Fix" },
        { id: "pr", x: 426, y: 70, w: 100, h: 54, label: "Open PR" },
        { id: "ci", x: 548, y: 70, w: 90, h: 54, label: "CI Gate", gate: true },
        { id: "ready", x: 660, y: 70, w: 120, h: 54, label: "Ready: Review" },
      ]}
      edges={[
        { from: "shot", to: "vision" },
        { from: "vision", to: "fix" },
        { from: "fix", to: "pr" },
        { from: "pr", to: "ci" },
        { from: "ci", to: "ready" },
        { from: "ci", to: "fix", back: true, label: "Fail · 40%→85%" },
      ]}
    />
  );
}
