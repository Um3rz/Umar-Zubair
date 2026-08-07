"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
      whileTap={{ scale: 0.92, transition: { duration: 0.1 } }}
      onClick={toggleTheme}
      className="relative px-2.5 py-1.5 border-2 border-theme font-mono text-[0.6875rem] font-bold uppercase tracking-[0.1em] transition-colors duration-150 hover:bg-[var(--ink)] hover:text-[var(--paper)] overflow-hidden"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} print`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} print`}
    >
      {/* NEG/POS reads as a print flipping, not just a label swap. */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="inline-block"
        >
          {theme === "dark" ? "NEG" : "POS"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
