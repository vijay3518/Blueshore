"use client";

import { hash01 } from "@/lib/hash01";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { 
  RevealOnScroll, 
  SplitTextReveal, 
  StaggerCards, 
  CountUp 
} from "./AnimationKit";

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
      className="relative scroll-mt-28 overflow-hidden bg-white px-4 py-28 sm:px-8 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400'%3E%3Cpath fill='%230A1F5C' d='M120 300c80-40 160-30 240 0s160 40 240 10'/%3E%3C/svg%3E\")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative flex min-h-[200px] flex-col items-center justify-center">
          <ConfettiBurst active={burst} />

          <motion.div
            initial={{ scale: 5, opacity: 0, rotate: -20, filter: "blur(20px)" }}
            animate={
              stampDone
                ? {
                    scale: [5, 0.9, 1.1, 0.98, 1],
                    opacity: [0, 1, 1, 1, 1],
                    rotate: [-20, -5, -2, -3.5, -3],
                    filter: ["blur(20px)", "blur(0px)", "blur(0px)", "blur(0px)", "blur(0px)"],
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              times: [0, 0.3, 0.5, 0.7, 1],
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="relative z-10 rounded-2xl border-[6px] border-[#c62828] bg-white px-10 py-6 shadow-[0_40px_100px_-20px_rgba(198,40,40,0.2)] sm:px-14 sm:py-8"
          >
            <p className="text-center font-display text-2xl font-black uppercase tracking-[0.2em] text-[#b71c1c] sm:text-4xl">
              VISA APPROVED
            </p>
            {/* Subtle texture for the stamp */}
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-col items-center justify-center">
             <div className="font-display text-5xl font-black text-[#0a1f5c] sm:text-7xl flex items-baseline gap-4">
                <CountUp to={10247} className="tabular-nums" />
                <span className="text-2xl font-bold text-[#f4a800] uppercase tracking-widest">+</span>
             </div>
             <p className="mt-4 text-xl font-bold text-[#0a1f5c] uppercase tracking-[0.4em]">Visas Secured</p>
          </div>
          
          <RevealOnScroll delay={0.3} direction="up">
            <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
              Milestones powered by meticulous counselling and embassy-ready narratives. Join the ranks of successful global students.
            </p>
          </RevealOnScroll>
        </div>

        <StaggerCards className="mt-20 grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              data-stagger-card
              className="flex flex-col rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_30px_70px_-20px_rgba(10,31,92,0.1)] hover:shadow-[0_50px_90px_-20px_rgba(10,31,92,0.15)] transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="flex items-center gap-5">
                <div className="relative">
                  <Image
                    src={t.img}
                    alt={`Portrait of ${t.name}`}
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-full object-cover ring-4 ring-[#f4a800]/20 group-hover:ring-[#f4a800]/40 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-[#1565c0] text-white p-1.5 rounded-full shadow-lg">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
                    </svg>
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-lg font-black text-[#0a1f5c]">{t.name}</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1565c0]">{t.country}</p>
                  <p className="text-xs text-slate-400 font-medium">{t.uni}</p>
                </div>
              </div>
              
              <div className="mt-8 flex gap-1.5 text-[#f4a800]">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              
              <div className="mt-6 relative">
                <span className="absolute -top-4 -left-2 text-6xl text-[#1565c0]/10 font-serif">“</span>
                <p className="relative z-10 text-base leading-relaxed text-slate-600 italic">
                  {t.quote}
                </p>
              </div>
            </div>
          ))}
        </StaggerCards>
      </div>
    </section>
  );
}
