"use client";

import Link from "next/link";

export default function CTAStrip() {
  return (
    <div className="bg-secondary px-8 py-16 flex flex-col md:flex-row justify-between items-center gap-10 border-t-2 border-theme border-b-2">
      <div>
        <h2 className="font-serif text-2xl mb-2">
          Let&apos;s talk about building products.
        </h2>
        <p className="text-sm text-muted">
          I&apos;m open to AI PM, FDE, and Product roles. Based in Riyadh, open to
          European markets.
        </p>
      </div>
      <Link
        href="mailto:umarzubaircs@gmail.com"
        className="btn-primary inline-block text-base whitespace-nowrap"
      >
        Get in Touch
      </Link>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="px-8 py-10 text-center text-xs text-muted border-b-2 border-theme">
      <p>
        Umar Zubair • AI Product Manager •{" "}
        <a
          href="https://linkedin.com/in/Umar-Zubair960"
          className="text-indigo no-underline hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        •{" "}
        <a
          href="https://github.com/um3rz"
          className="text-indigo no-underline hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}