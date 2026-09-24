"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTAStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-60px" }}
      className="tile-signal border-2 border-theme"
    >
      <div className="p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight">
            Open to Product roles
          </h2>
          <p className="text-sm mt-2 opacity-80">Based in Riyadh, KSA · Open to roles in EU</p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
          <motion.div whileTap={{ scale: 0.96 }}>
            <Link href="mailto:umarzubaircs@gmail.com" className="btn-invert inline-block whitespace-nowrap">
              Get in Touch →
            </Link>
          </motion.div>
          {/* Selectable fallback: a mailto: does nothing on a machine with no mail
              client, which is most corporate desktops and anyone on webmail. */}
          <a
            href="mailto:umarzubaircs@gmail.com"
            className="text-sm select-all hover:underline transition-colors font-mono opacity-80"
          >
            umarzubaircs@gmail.com
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Footer() {
  return (
    <footer id="footer" className="border-t-2 border-theme px-6 py-8 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
        Umar Zubair · Technical Product Owner ·{" "}
        <a
          href="https://linkedin.com/in/Umar-Zubair960"
          className="text-signal no-underline hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        ·{" "}
        <a
          href="https://github.com/um3rz"
          className="text-signal no-underline hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        ·{" "}
        <a href="mailto:umarzubaircs@gmail.com" className="text-signal no-underline hover:underline">
          umarzubaircs@gmail.com
        </a>
      </p>

    </footer>
  );
}
