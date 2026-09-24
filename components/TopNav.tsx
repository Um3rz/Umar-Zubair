"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

/** The document header rail — cream field, ink text, thick black bottom rule,
 *  sticky so it reads as a fixed frame around the whole bento page. */
export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 bg-primary border-b-2 border-theme">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-14 md:h-16 flex items-center justify-between gap-4">
        <button
          type="button"
          aria-label="Back to top"
          className="font-mono font-extrabold uppercase tracking-wide text-xs md:text-sm shrink-0 border-2 border-theme px-2.5 py-1.5 bg-secondary shadow-neo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {"</> "}UZ
        </button>

        <div className="flex items-center gap-3 md:gap-5 shrink-0">
          <a
            href="#work"
            className="hidden sm:block font-mono text-xs font-semibold uppercase tracking-[0.1em] hover:text-signal transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
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
            whileHover={{ x: -2, y: -2, boxShadow: "6px 6px 0 0 var(--ink)", transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.96, x: 0, y: 0, boxShadow: "0 0 0 0 var(--ink)", transition: { duration: 0.1 } }}
            href="/Umar_Zubair_Technical_Product_Manager_2026_Resume"
            download="Umar_Zubair_CV.pdf"
            className="font-mono text-xs font-bold uppercase tracking-[0.1em] px-3 py-1.5 border-2 border-theme tile-limit shadow-neo"
          >
            CV ↓
          </motion.a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
