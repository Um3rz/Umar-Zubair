"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface HeroProps {
  className?: string;
  onLearnMore?: () => void;
  onViewWork?: () => void;
}

const ROLES = ["Product Manager", "AI Engineering"];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Original site's headline treatment — types, holds, deletes, repeats.
const HEADLINE = "Building the right thing, then building it right.";
type Phase = "typing" | "waiting" | "deleting";

function useTypewriter(text: string) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const phaseRef = useRef<Phase>("typing");
  const indexRef = useRef(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayText(text);
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;
    const animate = () => {
      if (phaseRef.current === "typing") {
        if (indexRef.current < text.length) {
          indexRef.current++;
          setDisplayText(text.slice(0, indexRef.current));
          timeout = setTimeout(animate, 50);
        } else {
          phaseRef.current = "waiting";
          timeout = setTimeout(() => {
            phaseRef.current = "deleting";
            animate();
          }, 2000);
        }
      } else if (phaseRef.current === "deleting") {
        if (indexRef.current > 0) {
          indexRef.current--;
          setDisplayText(text.slice(0, indexRef.current));
          timeout = setTimeout(animate, 30);
        } else {
          phaseRef.current = "typing";
          animate();
        }
      }
    };

    animate();
    return () => clearTimeout(timeout);
  }, [text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return { displayText, showCursor };
}

export default function Hero({ className = "", onLearnMore, onViewWork }: HeroProps) {
  const { displayText, showCursor } = useTypewriter(HEADLINE);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`tile-signal border-2 border-theme p-6 md:p-12 ${className}`}
    >
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex items-center justify-between gap-4 mb-8 font-mono text-xs uppercase tracking-[0.14em] font-semibold"
      >
        <span>{ROLES.join(" · ")}</span>
        <span className="hidden sm:block shrink-0">Riyadh,SA</span>
      </motion.div>

      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-6 max-w-[20ch] min-h-[2.85em] text-balance"
      >
        {displayText}
        <span
          aria-hidden="true"
          className={`inline-block w-[0.55ch] md:w-[0.5ch] -mb-1 h-[0.85em] align-middle bg-[var(--ink)] ml-1 ${showCursor ? "opacity-100" : "opacity-0"
            }`}
        />
      </motion.h1>

      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-base md:text-lg leading-relaxed max-w-[62ch] mb-10 font-medium"
      >
        Research, PRD, and implementation on all seven projects below (same person, no handoff). Currently building the customer-facing platform at Odoo Dashboards.
      </motion.p>

      <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show" className="flex flex-wrap gap-3">
        <motion.button whileTap={{ scale: 0.96 }} onClick={onViewWork} className="btn-invert">
          See the Work →
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={onLearnMore}
          className="px-6 py-3 text-sm font-mono font-semibold tracking-wide border-2 border-[var(--ink)] cursor-pointer hover:bg-[var(--ink)]/10 transition-colors"
        >
          More About Me →
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
