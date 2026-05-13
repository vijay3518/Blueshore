"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    const sync = () =>
      setEnabled(!prefersReduced.matches && !coarse.matches);
    sync();
    prefersReduced.addEventListener("change", sync);
    coarse.addEventListener("change", sync);
    return () => {
      prefersReduced.removeEventListener("change", sync);
      coarse.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    document.body.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeEventListener("mouseleave", leave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden mix-blend-difference md:block"
      animate={{
        x: pos.x - 6,
        y: pos.y - 6,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.2 }}
      aria-hidden
    >
      <span className="block h-3 w-3 rounded-full bg-bs-gold shadow-[0_0_12px_rgba(244,168,0,0.9)] ring-2 ring-white/40" />
    </motion.div>
  );
}
