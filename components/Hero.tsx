"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const fullText = "Building the right thing, then building it right.";

type Phase = "typing" | "waiting" | "deleting";

export default function Hero() {
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

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10">
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
          className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6"
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
          className="text-lg md:text-xl mb-10 leading-relaxed"
        >
          Specializing in AI and User-Centered Design.
          <br className="hidden md:block" />
          {" "}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button onClick={scrollToProjects} className="btn-primary text-base px-8 py-4">
            View My Work
          </button>
          <button onClick={scrollToAbout} className="btn-secondary text-base px-8 py-4">
            Learn More
          </button>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hover:text-indigo transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </motion.button>
    </section>
  );
}