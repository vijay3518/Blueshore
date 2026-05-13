"use client";

import { Logo } from "@/components/brand/Logo";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motion } from "framer-motion";

const WORDS = ["Your", "Dream.", "Our", "Guidance.", "Global", "Future."];

export function PageIntro() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[80] flex items-center justify-center bg-gradient-to-b from-[#050b28] via-[#0b2168] to-[#1565C0]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ delay: 1.55, duration: 0.55 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="flex max-w-3xl flex-col items-center gap-10 px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.45 }}
        >
          <Logo inverted className="justify-center" />
        </motion.div>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 font-display text-2xl font-semibold text-white sm:text-3xl">
          {WORDS.map((w, i) => (
            <motion.span
              key={w + i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.3, duration: 0.35 }}
              className={
                w.includes("Dream") || w.includes("Guidance") ? "text-bs-gold" : "text-white"
              }
            >
              {w}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
