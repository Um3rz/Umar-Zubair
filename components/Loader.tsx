"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  onLoadComplete: () => void;
}

/** Sheet-load: a rule draws itself in, under a beat, then the document is up.
 *  No 3D — the loader exists only to mask the Google Fonts FOIT. */
export default function Loader({ onLoadComplete }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(false);
      return;
    }

    // Cap it: document.fonts.ready can hang on a blocked or slow font host.
    const cap = setTimeout(() => setIsVisible(false), 900);
    let settle: ReturnType<typeof setTimeout>;

    // Optional chaining is load-bearing: this effect throwing would leave the
    // loader up forever, and the loader gates the entire page.
    document.fonts?.ready.then(() => {
      clearTimeout(cap);
      settle = setTimeout(() => setIsVisible(false), 250);
    });

    return () => {
      clearTimeout(cap);
      clearTimeout(settle);
    };
  }, []);

  return (
    /* Fires after the exit animation instead of a second timer racing it. */
    <AnimatePresence onExitComplete={onLoadComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary gap-4"
        >
          <div className="w-56 md:w-72 overflow-hidden">
            <motion.div
              initial={{ scaleX: reduced ? 1 : 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
              className="h-[3px] bg-signal"
            />
          </div>
          <motion.span
            initial={{ opacity: reduced ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.3 }}
            className="font-mono text-xs uppercase tracking-[0.14em] text-muted"
          >
            Doc UZ-2026
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
