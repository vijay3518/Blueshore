"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STEPS = [
  {
    title: "Free Counselling Session",
    desc: "Discovery call to map academics, budget, and destination fit.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
        <path
          d="M12 30c0-6 4.5-10 12-10s12 4 12 10"
          stroke="#1565C0"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="24" cy="18" r="7" fill="#0A1F5C" />
      </svg>
    ),
  },
  {
    title: "University & Course Selection",
    desc: "Ranked shortlists with ROI, scholarships, and cohort insights.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
        <path d="M10 34 L24 10 L38 34 Z" fill="#1565C0" />
        <rect x="14" y="34" width="20" height="6" rx="2" fill="#F4A800" />
      </svg>
    ),
  },
  {
    title: "Application & Documentation",
    desc: "Essays, LORs, transcripts—crafted and audited for precision.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
        <rect x="12" y="10" width="24" height="30" rx="3" fill="#fff" stroke="#0A1F5C" strokeWidth="2" />
        <path d="M16 18h16M16 24h12M16 30h16" stroke="#1565C0" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Visa Application Support",
    desc: "Financial narratives, appointment scheduling, and mock interviews.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
        <rect x="10" y="14" width="28" height="22" rx="3" fill="#E8EEF7" stroke="#0A1F5C" strokeWidth="2" />
        <circle cx="24" cy="25" r="6" fill="#F4A800" />
      </svg>
    ),
  },
  {
    title: "Pre-Departure & Arrival Help",
    desc: "Accommodation, forex, insurance, and airport touchdown checklist.",
    icon: (
      <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
        <path
          d="M8 30 L40 18 L26 26 L28 38 Z"
          fill="#1565C0"
          stroke="#0A1F5C"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function HowItWorksSection() {
  const rootRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const mobileStepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const [mobileActiveStep, setMobileActiveStep] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    const path = pathRef.current;
    const plane = planeRef.current;
    if (!root || !path || !plane) return;

    const len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });

    if (reducedMotion) {
      gsap.set(path, { strokeDashoffset: 0 });
      gsap.set(plane, { left: "92%" });
      return;
    }

    let lastStep = -1;
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 65%",
            end: "bottom 45%",
            scrub: 0.8,
            onUpdate(self) {
              const p = self.progress;
              const next = Math.min(4, Math.max(0, Math.floor(p * 5 + 0.02)));
              if (next !== lastStep) {
                lastStep = next;
                setActiveStep(next);
              }
            },
          },
        })
        .to(path, { strokeDashoffset: 0, ease: "none" }, 0)
        .to(plane, { left: "92%", ease: "none" }, 0);
    }, root);

    return () => ctx.revert();
  }, [reducedMotion]);

  useEffect(() => {
    const items = mobileStepRefs.current;
    const observers = items.map((el, i) => {
      if (!el) return null;
      const io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting && e.intersectionRatio >= 0.35) {
            setMobileActiveStep(i);
          }
        },
        { threshold: [0.2, 0.35, 0.5], rootMargin: "-12% 0px -18% 0px" },
      );
      io.observe(el);
      return io;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section
      ref={rootRef}
      id="how-it-works"
      className="relative scroll-mt-28 bg-white px-4 py-24 sm:px-8 lg:px-12"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-bs-ocean">
            How It Works
          </p>
          <h2 id="how-heading" className="mt-4 font-display text-3xl font-semibold text-bs-navy sm:text-4xl">
            Your journey—from first chat to first lecture.
          </h2>
        </div>

        <div className="relative mt-16 hidden md:block">
          <svg
            className="pointer-events-none absolute left-0 right-0 top-10 h-24 w-full"
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M40 80 C 200 20, 400 140, 520 80 S 820 20, 960 80"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              ref={pathRef}
              d="M40 80 C 200 20, 400 140, 520 80 S 820 20, 960 80"
              fill="none"
              stroke="#F4A800"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>

          <div
            ref={planeRef}
            className="absolute left-[6%] top-2 z-20 w-14 -translate-x-1/2 will-change-[left]"
          >
            <svg viewBox="0 0 64 64" aria-hidden>
              <path
                d="M6 34 L34 28 L52 30 L58 34 L52 38 L34 40 L6 34 Z"
                fill="#1565C0"
                stroke="#0A1F5C"
                strokeWidth="2"
              />
              <path d="M34 28 L44 14 L48 16 L38 30 Z" fill="#F4A800" />
            </svg>
          </div>

          <div className="relative grid grid-cols-5 gap-4 pt-28">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="relative rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center shadow-sm"
              >
                <div
                  className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md ring-2 ring-offset-2 ring-offset-slate-50 motion-reduce:animate-none ${
                    reducedMotion
                      ? "ring-4 ring-bs-gold"
                      : activeStep === i
                        ? "how-step-ring--active ring-bs-gold/60"
                        : "ring-bs-gold/60"
                  }`}
                >
                  {s.icon}
                </div>
                <h3 className="font-display text-base font-semibold text-bs-navy">{s.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <ol className="relative mt-14 space-y-8 md:hidden">
          <div className="absolute bottom-4 left-[21px] top-2 w-px bg-gradient-to-b from-bs-gold via-bs-ocean to-bs-navy" />
          {STEPS.map((s, i) => (
            <motion.li
              key={s.title}
              ref={(el) => {
                mobileStepRefs.current[i] = el;
              }}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="relative flex gap-5"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-md ring-2 ring-bs-gold/40 motion-reduce:animate-none ${
                  mobileActiveStep === i ? "how-step-ring--active ring-bs-gold" : ""
                }`}
              >
                <span className="text-xs font-bold text-bs-navy">{i + 1}</span>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  {s.icon}
                  <h3 className="font-display text-lg font-semibold text-bs-navy">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">{s.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
