"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function TopNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        scrolled ? "bg-primary/90 backdrop-blur-md border-border-color py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Links */}
        <div className="flex items-center gap-6 md:gap-10">
          <button onClick={() => scrollToSection("projects")} className="text-sm font-semibold tracking-wide uppercase hover:text-indigo transition-colors">
            Work
          </button>
          <button onClick={() => scrollToSection("about")} className="text-sm font-semibold tracking-wide uppercase hover:text-indigo transition-colors hidden sm:block">
            About
          </button>
          <a href="mailto:umarzubaircs@gmail.com" className="text-sm font-semibold tracking-wide uppercase hover:text-indigo transition-colors hidden md:block">
            Contact
          </a>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className="font-serif text-3xl font-bold tracking-tight">
            Umar<span className="text-indigo">.</span>
          </span>
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-4 md:gap-8">
          <Link href="https://linkedin.com/in/um3rz" target="_blank" className="text-sm font-semibold tracking-wide uppercase hover:text-indigo transition-colors hidden sm:block">
            LinkedIn
          </Link>
          <Link href="https://github.com/Um3rz" target="_blank" className="text-sm font-semibold tracking-wide uppercase hover:text-indigo transition-colors hidden sm:block">
            GitHub
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
