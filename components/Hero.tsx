"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const fullText = "Building the right thing, then building it right.";

type Phase = "typing" | "waiting" | "deleting";

interface HeroProps {
  className?: string;
  onLearnMore?: () => void;
  onViewWork?: () => void;
}

export default function Hero({ className = "", onLearnMore, onViewWork }: HeroProps) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const phaseRef = useRef<Phase>("typing");
  const indexRef = useRef(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animate = () => {
      if (phaseRef.current === "typing") {
        if (indexRef.current < fullText.length) {
          indexRef.current++;
          setDisplayText(fullText.slice(0, indexRef.current));
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
          setDisplayText(fullText.slice(0, indexRef.current));
          timeout = setTimeout(animate, 30);
        } else {
          phaseRef.current = "typing";
          animate();
        }
      }
    };

    animate();

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div id="hero" className={`relative flex flex-col justify-center p-8 bg-indigo/10 border-2 border-indigo overflow-hidden ${className}`}>
      <div className="z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase font-semibold tracking-[0.2em] text-indigo mb-4 block">
            AI Product Manager
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-6"
        >
          {displayText}
          <motion.span
            animate={{ opacity: showCursor ? 1 : 0 }}
            className="border-l-2 border-indigo ml-1"
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base md:text-lg mb-8 leading-relaxed max-w-lg"
        >
          Specializing in AI and User-Centered Design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button onClick={onViewWork} className="btn-primary text-sm px-6 py-3">
            View My Work
          </button>
          <button onClick={onLearnMore} className="btn-secondary text-sm px-6 py-3">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
}