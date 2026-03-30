"use client";

import { useEffect } from "react";
import { track } from "@/lib/gtm";

/**
 * Fires scroll_depth events at 25 / 50 / 75 / 90 percent thresholds.
 * Each threshold fires at most once per page load.
 */
export function useScrollDepth() {
  useEffect(() => {
    const thresholds = [25, 50, 75, 90];
    const fired = new Set<number>();

    function check() {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const pct = (scrolled / total) * 100;
      for (const t of thresholds) {
        if (pct >= t && !fired.has(t)) {
          fired.add(t);
          track({ event: "scroll_depth", depth: t, page_path: window.location.pathname });
        }
      }
    }

    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);
}
