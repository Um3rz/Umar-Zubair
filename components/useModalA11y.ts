"use client";

import { useEffect, useRef } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Modal accessibility for the specimen vitrine: Escape to close, focus moved in
 * on open and returned to the trigger on close, Tab cycled inside the dialog,
 * and body scroll locked to whatever it was before rather than to "auto".
 *
 * Attach the returned ref to the dialog element itself, not the scrim.
 */
export function useModalA11y(isOpen: boolean, onClose: () => void) {
  const modalRef = useRef<HTMLDivElement>(null);
  // Callers pass a fresh arrow each render; keep it out of the effect deps so
  // the effect doesn't tear down and re-steal focus on every parent render.
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (!isOpen) return;

    const trigger = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const visibleFocusable = () =>
      Array.from(
        modalRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []
      ).filter((el) => el.offsetParent !== null);

    // Let the open animation mount before reaching for the first control.
    const focusTimer = window.setTimeout(() => visibleFocusable()[0]?.focus(), 0);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeRef.current();
        return;
      }
      if (e.key !== "Tab") return;

      const items = visibleFocusable();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
      trigger?.focus();
    };
  }, [isOpen]);

  return modalRef;
}

/**
 * Makes a non-button element behave like one for keyboard users. Spread onto
 * the tile roots, which can't be real <button>s without nesting a heading
 * inside one — invalid HTML, and it would flatten the h3 that screen readers
 * use to browse the wall.
 */
export function triggerProps(onToggle: () => void, isExpanded: boolean) {
  return {
    role: "button",
    tabIndex: 0,
    "aria-expanded": isExpanded,
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onToggle();
      }
    },
  };
}
