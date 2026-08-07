"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

/** The document header rail — cream field, ink text, thick black bottom rule,
 *  sticky so it reads as a fixed frame around the whole bento page. */
export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 bg-primary border-b-2 border-theme">
      <div className="max-w-[1180px] mx-auto px-4 md:px-8 h-14 md:h-16 flex items-center justify-between gap-4">
        <button
          type="button"
          aria-label="Back to top"
          className="font-display font-extrabold uppercase tracking-wide text-sm md:text-base shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Umar Zubair
        </button>

        <div className="flex items-center gap-3 md:gap-5 shrink-0">
          <a
            href="#work"
            className="hidden sm:block font-mono text-xs font-semibold uppercase tracking-[0.1em] hover:text-signal transition-colors"
          >
            Work
          </a>
          <a
            href="#manufacturer"
            className="hidden sm:block font-mono text-xs font-semibold uppercase tracking-[0.1em] hover:text-signal transition-colors"
          >
            About
          </a>
          <a
            href="mailto:umarzubaircs@gmail.com"
            className="hidden sm:block font-mono text-xs font-semibold uppercase tracking-[0.1em] hover:text-signal transition-colors"
          >
            Contact
          </a>
          <Link
            href="https://linkedin.com/in/umar-zubair960"
            target="_blank"
            className="hidden lg:block font-mono text-xs font-semibold uppercase tracking-[0.1em] hover:text-signal transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/Um3rz"
            target="_blank"
            className="hidden lg:block font-mono text-xs font-semibold uppercase tracking-[0.1em] hover:text-signal transition-colors"
          >
            GitHub
          </Link>
          <motion.a
            whileTap={{ scale: 0.94, transition: { duration: 0.1 } }}
            href="/Umarzubair__AI-Frontend-Engineer_Resume_2026.pdf"
            download="Umar_Zubair_CV.pdf"
            className="font-mono text-xs font-bold uppercase tracking-[0.1em] px-3 py-1.5 border-2 border-theme hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
          >
            CV ↓
          </motion.a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
