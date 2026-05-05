"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "./ThemeContext";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
];

export default function FloatingHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";
  const bgPrimary = isDark ? "#111118" : "#FFFFFF";

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md"
      >
        <motion.nav
          animate={{ backgroundColor: bgPrimary }}
          className={`
            relative flex items-center justify-between px-6 py-3
            rounded-[20px] shadow-lg overflow-hidden border border-transparent
          `}
        >
          <Link
            href="/"
            className={`
              font-serif text-[26px] no-underline transition-colors
              ${isDark ? "text-[#F5F5F7]" : "text-[#111118]"}
            `}
            style={{
              fontFamily: '"DM Serif Display", serif',
            }}
          >
            Umar Zubair
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-10 p-1 cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X
                    size={24}
                    color={isDark ? "#F5F5F7" : "#111118"}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu
                    size={24}
                    color={isDark ? "#F5F5F7" : "#111118"}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40"
              style={{ top: "80px" }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-[88px] left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md"
            >
              <nav
                className={`
                  flex flex-col items-center gap-6 p-6
                  rounded-[20px] shadow-xl border
                  ${isDark ? "border-[#374151]" : "border-[#E5E7EB]"}
                `}
                style={{ backgroundColor: bgPrimary }}
              >
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      text-lg font-medium no-underline transition-colors
                      hover:opacity-70
                      ${isDark ? "text-[#F5F5F7]" : "text-[#111118]"}
                    `}
                  >
                    {item.label}
                  </Link>
                ))}

                <div
                  className={`w-full h-px ${
                    isDark ? "bg-[#374151]" : "bg-[#E5E7EB]"
                  }`}
                />

                <div
                  className={`
                    text-center text-sm
                    ${isDark ? "text-[#9CA3AF]" : "text-[#6B7280]"}
                  `}
                >
                  Product thinking at the intersection of AI, infrastructure, and user research.
                </div>

                <Link
                  href="mailto:umarzubaircs@gmail.com"
                  onClick={() => setIsOpen(false)}
                  className={`
                    px-6 py-3 rounded-full text-sm font-medium no-underline
                    transition-all duration-200 hover:opacity-80
                    ${
                      isDark
                        ? "bg-[#F5F5F7] text-[#111118]"
                        : "bg-[#111118] text-[#FFFFFF]"
                    }
                  `}
                >
                  Let&apos;s Talk
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}