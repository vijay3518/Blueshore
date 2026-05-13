"use client";

import { hash01 } from "@/lib/hash01";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    name: "Ananya Krishnan",
    country: "Canada",
    uni: "University of Toronto",
    quote:
      "BlueShore demystified every document checkpoint—I flew out confident, calm, and admitted.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Rohan Mehta",
    country: "United Kingdom",
    uni: "Imperial College London",
    quote:
      "Mock visa interviews felt tougher than the real thing—in the best way. The counsellor bench is elite.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Sophie Nguyen",
    country: "Australia",
    uni: "University of Melbourne",
    quote:
      "Scholarship scouting plus course-fit scoring saved months of guesswork for my family.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b88?w=400&q=80",
  },
];

function ConfettiBurst({ active }: { active: boolean }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: 46 }, (_, i) => ({
        x: hash01(i, 11) * 100 - 50,
        y: hash01(i, 22) * -120 - 20,
        rot: hash01(i, 33) * 720 - 360,
        delay: hash01(i, 44) * 0.25,
        hue: hash01(i, 55) > 0.45 ? "#F4A800" : "#1565C0",
      })),
    [],
  );

  if (!active) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          className="absolute left-1/2 top-1/3 h-2 w-2 rounded-sm"
          style={{ backgroundColor: p.hue }}
          initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          animate={{
            opacity: 0,
            x: p.x * 4,
            y: p.y,
            rotate: p.rot,
          }}
          transition={{ duration: 1.15, delay: p.delay, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

export function SuccessStoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stampDone = useInView(sectionRef, { once: true, margin: "-15%" });
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    if (stampDone) {
      const t = setTimeout(() => setBurst(true), 250);
      return () => clearTimeout(t);
    }
  }, [stampDone]);

  return (
    <section
      ref={sectionRef}
      id="success"
      className="relative scroll-mt-28 overflow-hidden bg-slate-50 px-4 py-24 sm:px-8 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Cpath fill='%230A1F5C' d='M120 300c80-40 160-30 240 0s160 40 240 10'/%3E%3C/svg%3E\")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="relative flex min-h-[180px] flex-col items-center justify-center">
          <ConfettiBurst active={burst} />

          <motion.div
            initial={{ scale: 4, opacity: 0, rotate: -12 }}
            animate={
              stampDone
                ? {
                    scale: [4, 0.92, 1.06, 0.97, 1],
                    opacity: [0, 1, 1, 1, 1],
                    rotate: [-12, -5, -2.5, -3.5, -3],
                  }
                : { scale: 4, opacity: 0, rotate: -12 }
            }
            transition={{
              duration: 0.65,
              times: [0, 0.32, 0.52, 0.75, 1],
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="relative z-10 rounded-2xl border-4 border-[#c62828] bg-[#ffebee] px-8 py-5 shadow-xl sm:px-10 sm:py-6"
          >
            <p className="text-center font-display text-xl font-black uppercase tracking-[0.12em] text-[#b71c1c] sm:text-3xl sm:tracking-[0.2em]">
              VISA APPROVED
            </p>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-display text-4xl font-semibold text-bs-navy sm:text-5xl">
            <CountUp end={10247} suffix="" /> Visas Approved
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Milestones powered by meticulous counselling and embassy-ready narratives.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <motion.article
              key={t.name}
              initial={false}
              animate={
                stampDone
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: idx % 2 === 0 ? -56 : 56 }
              }
              transition={{
                duration: 0.65,
                delay: stampDone ? 0.48 + idx * 0.14 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={t.img}
                  alt={`Portrait of ${t.name}`}
                  width={72}
                  height={72}
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-bs-gold/60"
                  loading="lazy"
                />
                <div className="text-left">
                  <p className="font-semibold text-bs-navy">{t.name}</p>
                  <p className="text-xs uppercase tracking-wide text-bs-ocean">{t.country}</p>
                  <p className="text-xs text-slate-500">{t.uni}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1 text-bs-gold">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} aria-hidden>
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">&ldquo;{t.quote}&rdquo;</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
