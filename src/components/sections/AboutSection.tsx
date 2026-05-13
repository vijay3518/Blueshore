"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const COMPANY_POINTS = [
  "Student-first counselling from profile review to departure",
  "Visa-focused documentation and interview preparation",
  "University pathways across priority global destinations",
] as const;

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  return (
    <section
      ref={ref}
      id="about"
      className="relative scroll-mt-28 overflow-hidden bg-gradient-to-br from-white via-[#f4fbff] to-[#e3f2fd] px-4 py-24 sm:px-8 sm:py-28 lg:min-h-[88vh] lg:px-12"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-bs-gold" aria-hidden />

      <div className="mx-auto grid max-w-6xl gap-12 lg:min-h-[calc(88vh-14rem)] lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-bs-ocean">
            About BlueShore
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-bs-navy sm:text-4xl">
            Global education guidance built on trust, clarity, and outcomes.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            BlueShore Overseas partners with ambitious students and families to navigate
            admissions, visas, and career pathways across leading universities worldwide.
            Our counsellors combine regional expertise with a deeply personal approach, so
            every milestone feels intentional.
          </p>

          <ul className="mt-8 space-y-4">
            {COMPANY_POINTS.map((item) => (
              <li key={item} className="flex gap-3 text-sm font-semibold text-bs-navy sm:text-base">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-bs-gold shadow-[0_0_0_5px_rgba(244,168,0,0.14)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 26 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="relative z-10 mx-auto flex w-full max-w-[420px] justify-center lg:max-w-none"
        >
          <div className="relative aspect-square w-[min(78vw,420px)] lg:w-[min(38vw,520px)]">
            <div className="absolute inset-0 rounded-[2rem] bg-white/70 shadow-[0_34px_80px_rgba(10,31,92,0.16)] ring-1 ring-bs-ocean/10 backdrop-blur" />
            <div className="absolute inset-4 rounded-[1.5rem] border border-bs-gold/30" />
            <Image
              src="/blueshore-logo-full.png"
              alt="BlueShore Overseas"
              fill
              sizes="(max-width: 1024px) 78vw, 520px"
              className="object-contain p-8 drop-shadow-[0_24px_45px_rgba(10,31,92,0.22)]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
