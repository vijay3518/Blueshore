"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useCountUp(active: boolean, end: number, durationMs = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, end, durationMs]);
  return val;
}

function StatTile({
  label,
  endValue,
  suffix,
}: {
  label: string;
  endValue: number;
  suffix: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { once: true, margin: "-10%" });
  const n = useCountUp(active, endValue);

  return (
    <div
      ref={ref}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-inner shadow-black/20 backdrop-blur-md"
    >
      <p className="font-display text-4xl font-semibold text-bs-gold sm:text-5xl">
        {n}
        {suffix}
      </p>
      <p className="mt-3 text-sm font-medium uppercase tracking-wide text-white/75">{label}</p>
    </div>
  );
}

function StatTileK({
  label,
  endK,
}: {
  label: string;
  endK: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { once: true, margin: "-10%" });
  const n = useCountUp(active, endK);

  return (
    <div
      ref={ref}
      className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-inner shadow-black/20 backdrop-blur-md"
    >
      <p className="font-display text-4xl font-semibold text-bs-gold sm:text-5xl">
        {n}K+
      </p>
      <p className="mt-3 text-sm font-medium uppercase tracking-wide text-white/75">{label}</p>
    </div>
  );
}

const FEATURES = [
  "Ethics-first counselling—no commissioned shortcuts",
  "Unified CRM—transparent milestones for families",
  "Regional visa desks tuned to embassy nuances",
  "Alumni mentors across STEM, Business & Creative Arts",
];

function CheckRow({ text, delay }: { text: string; delay: number }) {
  const pathRef = useRef<SVGPathElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rowRef, { once: true, margin: "-10%" });

  useEffect(() => {
    if (!inView || !pathRef.current) return;
    const path = pathRef.current;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;
    path.getBoundingClientRect();
    requestAnimationFrame(() => {
      path.style.transition = "stroke-dashoffset 0.85s ease";
      path.style.strokeDashoffset = "0";
    });
  }, [inView]);

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, x: 18 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className="flex items-start gap-4 rounded-2xl bg-white/5 px-4 py-4 ring-1 ring-white/10"
    >
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden className="mt-0.5 shrink-0">
        <circle cx="14" cy="14" r="13" stroke="#F4A800" strokeWidth="2" fill="none" opacity="0.35" />
        <path
          ref={pathRef}
          d="M7 14 L12 19 L21 9"
          stroke="#F4A800"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-sm leading-relaxed text-white/85 sm:text-base">{text}</p>
    </motion.div>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-bs-navy px-4 py-24 text-white sm:px-8 lg:px-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-35 motion-safe:animate-[gold-rays_140s_linear_infinite]"
        aria-hidden
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(244,168,0,0.07) 0, rgba(244,168,0,0.07) 1px, transparent 1px, transparent 20px)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-bs-gold">
            Why BlueShore
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
            Numbers that reflect relentless execution—and hearts that remember every student story.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <StatTile label="Years Experience" endValue={15} suffix="+" />
            <StatTile label="Expert Counsellors" endValue={50} suffix="+" />
            <StatTile label="Success Rate" endValue={98} suffix="%" />
            <StatTileK label="Happy Students" endK={10} />
          </div>
        </div>

        <div className="relative space-y-5">
          <h3 className="font-display text-2xl font-semibold text-white">
            Built for clarity. Engineered for outcomes.
          </h3>
          {FEATURES.map((f, i) => (
            <CheckRow key={f} text={f} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
