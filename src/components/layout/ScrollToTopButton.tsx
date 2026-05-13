"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SHOW_AFTER_PX = 400;

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const moveToTop = useCallback(() => {
    const el = document.getElementById("home");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={moveToTop}
      className="group fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#0a1f5c]/92 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:scale-105 hover:border-bs-gold/50 hover:shadow-[0_16px_48px_rgba(244,168,0,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bs-gold/80 sm:bottom-8 sm:right-8"
      aria-label="Move to top"
    >
      {/* Top-down art: rotate so the nose points upward (scroll direction) */}
      <span className="relative block h-10 w-10 shrink-0 rotate-[90deg]">
        <Image
          src="/scroll-to-top-plane.png"
          alt=""
          fill
          sizes="40px"
          className="object-contain transition group-hover:brightness-110"
        />
      </span>
    </button>
  );
}
