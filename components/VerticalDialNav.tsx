"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeContext";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#footer" },
];

export default function VerticalDialNav() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const projects = document.getElementById("projects");
      const about = document.getElementById("about");

      const scrollPos = window.scrollY + window.innerHeight / 2;

      if (footer && scrollPos > footer.getBoundingClientRect().top + window.scrollY) {
        setActiveIndex(3);
      } else if (projects && scrollPos > projects.getBoundingClientRect().top + window.scrollY) {
        setActiveIndex(2);
      } else if (about && scrollPos > about.getBoundingClientRect().top + window.scrollY) {
        setActiveIndex(1);
      } else {
        setActiveIndex(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
    setMobileOpen(false);
  };

  const bgColor = isDark ? "#1A1A24" : "#F8F9FA";
  const activeColor = isDark ? "#F5F5F7" : "#111118";
  const inactiveColor = isDark ? "#9CA3AF" : "#6B7280";

  if (!mounted) return null;

  return (
    <>
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-[60] hidden md:flex flex-col items-start gap-1">
        <div
          className="absolute left-0 top-0 w-16 rounded-full transition-all duration-300"
          style={{
            backgroundColor: bgColor,
            height: "40px",
            transform: `translateY(${activeIndex * 44}px)`,
          }}
        />

        {navItems.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => handleNavClick(index)}
            className="relative z-10 w-16 h-10 flex items-center justify-start px-3 rounded-full text-xs font-medium no-underline transition-colors duration-200 whitespace-nowrap"
            style={{ color: activeIndex === index ? activeColor : inactiveColor }}
          >
            {item.label}
          </Link>
        ))}
        
        <button
          onClick={toggleTheme}
          className="relative z-10 w-16 h-10 flex items-center justify-start px-3 rounded-full text-xs font-medium no-underline transition-colors duration-200 whitespace-nowrap mt-2"
          style={{ color: inactiveColor }}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </nav>

      <button
        className="md:hidden fixed right-16 top-4 z-[60] p-2 rounded-full"
        style={{ backgroundColor: bgColor }}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun size={20} style={{ color: activeColor }} />
        ) : (
          <Moon size={20} style={{ color: activeColor }} />
        )}
      </button>

      <button
        className="md:hidden fixed right-4 top-4 z-[60] p-2 rounded-full"
        style={{ backgroundColor: bgColor }}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? (
          <X size={24} style={{ color: activeColor }} />
        ) : (
          <Menu size={24} style={{ color: activeColor }} />
        )}
      </button>

      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 pt-20 px-6"
          style={{ backgroundColor: isDark ? "#111118" : "#FFFFFF" }}
        >
          <nav className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(index)}
                className="text-2xl font-medium no-underline transition-colors"
                style={{ 
                  color: activeIndex === index ? activeColor : inactiveColor,
                  fontFamily: '"DM Serif Display", serif'
                }}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="h-px bg-border my-4" />
            
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 text-xl font-medium no-underline transition-colors"
              style={{ color: inactiveColor }}
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </nav>
        </div>
      )}
    </>
  );
}