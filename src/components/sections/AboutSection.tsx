"use client";

import Image from "next/image";
import { 
  RevealOnScroll, 
  SplitTextReveal, 
  FloatingStar2D 
} from "./AnimationKit";

const COMPANY_POINTS = [
  "Student-first counselling from profile review to departure",
  "Visa-focused documentation and interview preparation",
  "University pathways across priority global destinations",
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-28 overflow-hidden bg-gradient-to-br from-white via-[#f4fbff] to-[#eef7ff] px-4 py-28 sm:px-8 lg:min-h-[85vh] lg:px-12 flex items-center"
    >
      {/* Decorative accents */}
      <div className="absolute top-1/4 right-1/4 opacity-10 pointer-events-none">
        <FloatingStar2D size={120} delay={0} />
      </div>
      <div className="absolute bottom-1/4 left-1/4 opacity-5 pointer-events-none">
        <FloatingStar2D size={80} delay={2} />
      </div>

      <div className="mx-auto grid max-w-7xlgap-16 lg:grid-cols-[1fr_0.85fr] lg:items-center relative z-10">
        <div>
          <RevealOnScroll direction="left">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#1565c0]">
              About BlueShore
            </p>
          </RevealOnScroll>
          
          <div className="mt-6">
            <SplitTextReveal 
              text="Global education guidance built on trust, clarity, and outcomes." 
              className="font-display text-4xl font-bold leading-tight text-[#0a1f5c] sm:text-5xl"
            />
          </div>

          <RevealOnScroll delay={0.2} direction="up">
            <p className="mt-8 text-lg leading-relaxed text-slate-600 max-w-xl">
              BlueShore Overseas partners with ambitious students and families to navigate
              admissions, visas, and career pathways across leading universities worldwide.
              Our counsellors combine regional expertise with a deeply personal approach, so
              every milestone feels intentional.
            </p>
          </RevealOnScroll>

          <ul className="mt-10 space-y-5">
            {COMPANY_POINTS.map((item, i) => (
              <RevealOnScroll key={item} delay={0.3 + i * 0.1} direction="up">
                <li className="flex gap-4 text-base font-bold text-[#0a1f5c] group">
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#f4a800] shadow-[0_0_20px_rgba(244,168,0,0.4)] group-hover:scale-125 transition-transform" />
                  <span className="group-hover:text-[#1565c0] transition-colors">{item}</span>
                </li>
              </RevealOnScroll>
            ))}
          </ul>
        </div>

        <RevealOnScroll direction="scale" delay={0.1}>
          <div className="relative mx-auto flex w-full max-w-[480px] justify-center lg:max-w-none">
            <div className="relative aspect-square w-full max-w-[500px] group">
              {/* Premium glass card for logo */}
              <div className="absolute inset-0 rounded-[3rem] bg-white shadow-[0_48px_90px_-20px_rgba(10,31,92,0.15)] ring-1 ring-slate-100 transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="absolute inset-6 rounded-[2.5rem] border-2 border-dashed border-[#1565c0]/10" />
              
              <Image
                src="/images/blueshore-logo-transparent.png"
                alt="BlueShore Overseas"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-contain p-12 drop-shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                priority
              />

              {/* Float highlights */}
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#f4a800] to-[#ffd15a] opacity-20 blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#1565c0] to-[#42a5f5] opacity-10 blur-3xl" />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
