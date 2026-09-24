"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import profilePhoto from "./profile-photo.png";

interface HeroProps {
  className?: string;
  onLearnMore?: () => void;
  onViewWork?: () => void;
}

const HEADLINE = "Building the right thing, then building it right.";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Slow type-hold-delete loop. The h1 below reserves a fixed min-height for
// this text so the hero box never grows/shrinks as characters come and go.
function useTypewriter(text: string) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const phaseRef = useRef<"typing" | "waiting" | "deleting">("typing");
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
          timeout = setTimeout(animate, 95);
        } else {
          phaseRef.current = "waiting";
          timeout = setTimeout(() => {
            phaseRef.current = "deleting";
            animate();
          }, 2600);
        }
      } else if (phaseRef.current === "deleting") {
        if (indexRef.current > 0) {
          indexRef.current--;
          setDisplayText(text.slice(0, indexRef.current));
          timeout = setTimeout(animate, 45);
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
      className={`bg-primary border-2 border-theme shadow-neo bg-dot-grid text-center px-6 py-12 md:py-16 ${className}`}
    >
      {/* Scattered sticker row */}
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex flex-wrap items-center justify-center gap-3 mb-8"
      >
        <span className="sticker tile-limit shadow-neo -rotate-2">Hey, I&apos;m Umar 👋</span>
        <span className="sticker bg-secondary rotate-0">Technical Product Owner</span>
        <div className="w-14 h-14 border-2 border-theme shadow-neo overflow-hidden shrink-0 rotate-2">
          <Image
            src={profilePhoto}
            alt="Umar Zubair"
            placeholder="blur"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Name badge */}
      <motion.div
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="inline-block border-2 border-theme shadow-neo-lg px-8 py-4 md:px-12 md:py-6 mb-8 bg-secondary"
      >
        <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tight leading-none">
          Umar Zubair
        </h2>
      </motion.div>

      <motion.h1
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="font-display text-xl md:text-3xl font-bold leading-snug max-w-[36ch] mx-auto mb-6 min-h-[2.8em] text-balance"
      >
        {displayText}
        <span
          aria-hidden="true"
          className={`inline-block w-[0.5ch] -mb-0.5 h-[0.9em] align-middle bg-[var(--ink)] ml-1 ${showCursor ? "opacity-100" : "opacity-0"
            }`}
        />
      </motion.h1>

      <motion.p
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-sm md:text-base leading-relaxed max-w-[56ch] mx-auto mb-8 text-secondary"
      >
        I am a technical product builder who takes customer problems to shipped features. I own Odoo Dashboards webapp , and Ontology based BI and Forecasting AI feature, an analytics product live across ~300 client branches, from discovery and roadmap to the code that ships it.
      </motion.p>

      <motion.div
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex flex-wrap items-center justify-center gap-3 mb-8"
      >
        <motion.button
          whileHover={{ x: -2, y: -2, boxShadow: "6px 6px 0 0 var(--ink)", transition: { duration: 0.15 } }}
          whileTap={{ scale: 0.98, x: 0, y: 0, boxShadow: "0 0 0 0 var(--ink)", transition: { duration: 0.1 } }}
          onClick={onViewWork}
          className="tile-limit border-2 border-theme shadow-neo px-6 py-3 text-sm font-mono font-semibold tracking-wide cursor-pointer"
        >
          View My Work →
        </motion.button>
        <motion.button
          whileHover={{ x: -2, y: -2, boxShadow: "6px 6px 0 0 var(--ink)", transition: { duration: 0.15 } }}
          whileTap={{ scale: 0.98, x: 0, y: 0, boxShadow: "0 0 0 0 var(--ink)", transition: { duration: 0.1 } }}
          onClick={onLearnMore}
          className="bg-secondary border-2 border-theme shadow-neo px-6 py-3 text-sm font-mono font-semibold tracking-wide cursor-pointer"
        >
          More About Me →
        </motion.button>
      </motion.div>

      <motion.div
        custom={5}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex items-center justify-center gap-2"
      >
        {[
          { href: "https://github.com/Um3rz", label: "GitHub", Icon: Github },
          { href: "https://linkedin.com/in/umar-zubair960", label: "LinkedIn", Icon: Linkedin },
          { href: "mailto:umarzubaircs@gmail.com", label: "Email", Icon: Mail },
        ].map(({ href, label, Icon }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            whileHover={{ x: -1, y: -1, boxShadow: "3px 3px 0 0 var(--ink)", transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.94 }}
            className="bg-secondary border-2 border-theme p-2.5"
          >
            <Icon size={16} />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
