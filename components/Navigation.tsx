"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "mailto:umarzubaircs@gmail.com", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-primary border-b border-theme py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            onClick={closeMobile}
            className="font-serif text-xl text-indigo font-semibold no-underline z-50"
          >
            Umar Zubair
          </Link>

          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted no-underline tracking-wide transition-all duration-200 hover:text-indigo hover:translate-y-[-2px]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="mailto:umarzubaircs@gmail.com"
                className="btn-primary text-sm px-5 py-2.5"
              >
                Let&apos;s Talk
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>

          <button
            className="md:hidden z-50 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-primary transition-all duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: scrolled ? "60px" : "80px" }}
      >
        <ul className="flex flex-col items-center justify-center gap-8 h-full list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={closeMobile}
                className="font-serif text-3xl no-underline hover:text-indigo transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Link
              href="mailto:umarzubaircs@gmail.com"
              onClick={closeMobile}
              className="btn-primary text-lg px-8 py-4"
            >
              Let&apos;s Talk
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}