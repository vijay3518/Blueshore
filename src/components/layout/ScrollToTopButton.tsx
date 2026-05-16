"use client";

import { useCallback, useEffect, useState } from "react";
import { ButtonCelebration } from "@/components/ButtonCelebration";

const SHOW_AFTER_PX = 400;

function AeroplaneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8 drop-shadow-[0_6px_14px_rgba(255,255,255,0.24)]"
      aria-hidden
    >
      <path
        d="M12 2.5c.58 0 1.05.47 1.05 1.05v5.7l7.37 4.42c.32.19.51.53.51.9v1.04c0 .45-.46.76-.88.59l-7-2.8v4.26l2.55 1.89c.27.2.42.51.42.84v.85c0 .36-.36.61-.69.48L12 20.42l-3.33 1.3c-.33.13-.69-.12-.69-.48v-.85c0-.33.16-.64.42-.84l2.55-1.89V13.4l-7 2.8c-.42.17-.88-.14-.88-.59v-1.04c0-.37.19-.71.51-.9l7.37-4.42v-5.7c0-.58.47-1.05 1.05-1.05Z"
        fill="currentColor"
      />

      <path
        d="M12 3.9v14.95"
        stroke="#0A1F5C"
        strokeOpacity="0.18"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const moveToTop = useCallback(() => {
    const homeElement = document.getElementById("home");

    if (homeElement) {
      homeElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={moveToTop}
      aria-label="Scroll to top"
      className="
        group
        fixed
        bottom-8
        right-8
        z-[9999]
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-white/20
        bg-[#0a1f5c]/95
        text-white
        shadow-[0_12px_40px_rgba(0,0,0,0.35)]
        backdrop-blur-md
        transition-all
        duration-300
        hover:scale-110
        hover:border-yellow-400/60
        hover:text-yellow-400
        hover:shadow-[0_16px_48px_rgba(244,168,0,0.28)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-yellow-400
      "
    >
      <span className="flex h-10 w-10 items-center justify-center transition-all duration-300">
        <AeroplaneIcon />
      </span>

      <ButtonCelebration variant="plane" />
    </button>
  );
}