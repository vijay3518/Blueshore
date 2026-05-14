"use client";

import Link from "next/link";
import { useMemo } from "react";
import { 
  RevealOnScroll, 
  SplitTextReveal, 
  StaggerCards, 
  MagneticButton 
} from "./AnimationKit";

const SERVICES = [
  {
    title: "Study Abroad Counselling",
    desc: "Personalised roadmaps from shortlisting to arrival with counsellor continuity.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
        <circle cx="32" cy="32" r="22" fill="#E3F2FD" stroke="#1565C0" strokeWidth="2" />
        <path d="M22 40 L32 18 L42 40 Z" fill="#0A1F5C" />
        <circle cx="32" cy="44" r="4" fill="#F4A800" />
      </svg>
    ),
  },
  {
    title: "University Shortlisting",
    desc: "Data-backed lists aligned to academics, budget, intakes, and career arcs.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
        <rect x="14" y="16" width="36" height="36" rx="6" fill="#fff" stroke="#1565C0" strokeWidth="2" />
        <path d="M22 28h20M22 36h14M22 44h18" stroke="#0A1F5C" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 22l4 4-8 8-4-4 8-8z" fill="#F4A800" />
      </svg>
    ),
  },
  {
    title: "Visa Assistance",
    desc: "Document perfection, financial narratives, and interview rehearsals that convert.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
        <rect x="12" y="18" width="40" height="30" rx="4" fill="#E8EEF7" stroke="#0A1F5C" strokeWidth="2" />
        <rect x="18" y="26" width="18" height="18" rx="2" fill="#1565C0" opacity="0.25" />
        <path d="M34 30h12M34 36h10" stroke="#0A1F5C" strokeWidth="2" strokeLinecap="round" />
        <circle cx="44" cy="40" r="6" fill="#F4A800" />
      </svg>
    ),
  },
  {
    title: "Career Support & Placement",
    desc: "Internships, referrals, and alumni mentors to accelerate your first global role.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
        <rect x="14" y="22" width="36" height="26" rx="4" fill="#fff" stroke="#1565C0" strokeWidth="2" />
        <path d="M22 34h20M22 40h12" stroke="#0A1F5C" strokeWidth="2" strokeLinecap="round" />
        <path d="M38 18 L46 10 L50 14 L42 22 Z" fill="#F4A800" />
      </svg>
    ),
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden>
      <path
        d="M11.5 4.5a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.4-1.4l3.3-3.3H3a1 1 0 1 1 0-2h11.8l-3.3-3.3a1 1 0 0 1 0-1.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  highlight,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  highlight: string;
}) {
  return (
    <div data-stagger-card className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_-40px_rgba(2,8,31,0.25)] transition-all duration-500 hover:shadow-[0_48px_100px_-30px_rgba(2,8,31,0.3)] hover:-translate-y-2 hover:border-[#1565c0]/30">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#1565c0]/5 blur-3xl transition group-hover:bg-[#f4a800]/10"
        aria-hidden
      />
      <div className="flex flex-col gap-6">
        <div className="shrink-0 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100 w-fit">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1565c0]">
            {highlight}
          </p>
          <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-[#0a1f5c]">{title}</h3>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{desc}</p>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between border-t border-slate-50 pt-6">
        <span className="inline-flex items-center gap-3 text-sm font-black text-[#0a1f5c]">
          Learn more
          <span className="text-[#1565c0] transition group-hover:translate-x-1">
            <ArrowIcon />
          </span>
        </span>
        <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-[#1565c0] group-hover:bg-[#1565c0] group-hover:text-white transition-colors duration-500">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
             <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const highlights = useMemo(
    () => ["Strategy", "Selection", "Visa-ready", "Career edge"],
    [],
  );

  return (
    <section
      id="services"
      className="relative scroll-mt-28 bg-gradient-to-b from-white via-slate-50/50 to-white px-4 py-28 sm:px-8 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(circle_at_30%_20%,rgba(21,101,192,0.08),transparent_70%),radial-gradient(circle_at_75%_10%,rgba(244,168,0,0.06),transparent_60%)]"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="text-left relative z-10">
            <RevealOnScroll direction="left">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#1565c0]">
                Our Expertise
              </p>
            </RevealOnScroll>
            
            <div className="mt-6">
              <SplitTextReveal 
                text="Built like a consultancy. Delivered like a mentor." 
                className="max-w-xl font-display text-3xl font-bold leading-tight text-[#0a1f5c] sm:text-4xl lg:text-5xl"
              />
            </div>

            <RevealOnScroll delay={0.2} direction="up">
              <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                We don’t sell “packages.” We design a decision-ready plan—university fit, documentation quality, and visa
                strategy—so every step increases your odds.
              </p>
            </RevealOnScroll>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                { k: "Profile evaluation", v: "Clear strengths, gaps, and target range" },
                { k: "Shortlisting", v: "3 tiers: safe / match / ambitious" },
                { k: "Application build", v: "SOP, LOR, CV, and timelines" },
                { k: "Visa readiness", v: "Docs, finances, and mock interview" },
              ].map((x, i) => (
                <RevealOnScroll key={x.k} delay={0.3 + i * 0.1} direction="up">
                  <div className="h-full rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow group">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 group-hover:text-[#1565c0] transition-colors">{x.k}</p>
                    <p className="mt-3 text-sm font-bold text-[#0a1f5c]">{x.v}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row">
              <MagneticButton className="w-full sm:w-auto">
                <Link
                  href="/#contact"
                  className="inline-flex w-full items-center justify-center bg-[#0a1f5c] px-10 py-5 text-sm font-black text-white transition hover:bg-[#1565c0] shadow-2xl shadow-[#0a1f5c]/20"
                >
                  Get a free strategy call
                </Link>
              </MagneticButton>
            </div>
          </div>

          <StaggerCards className="grid gap-6 sm:grid-cols-2 relative z-10">
            {SERVICES.map((s, idx) => (
              <ServiceCard
                key={s.title}
                icon={s.icon}
                title={s.title}
                desc={s.desc}
                highlight={highlights[idx] ?? "Service"}
              />
            ))}
          </StaggerCards>
        </div>

        <RevealOnScroll direction="up" className="mt-20">
          <div className="rounded-[3rem] border border-slate-100 bg-white p-8 sm:p-12 shadow-[0_40px_100px_-30px_rgba(2,8,31,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1565c0]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between relative z-10">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#1565c0]">
                  The BlueShore DNA
                </p>
                <h3 className="mt-4 max-w-2xl font-display text-2xl font-bold text-[#0a1f5c] sm:text-3xl lg:text-4xl">
                  A repeatable system that keeps you on-track—deadlines, docs, and decisions.
                </h3>
              </div>
              <MagneticButton className="w-full sm:w-auto">
                <Link
                  href="/#destinations"
                  className="inline-flex w-full sm:w-auto items-center justify-center border-2 border-slate-200 bg-white px-8 py-4 text-sm font-black text-[#0a1f5c] transition hover:border-[#1565c0] hover:text-[#1565c0]"
                >
                  See destinations
                </Link>
              </MagneticButton>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-2 sm:gap-6 md:grid-cols-3">
              {[
                { n: "01", t: "CLARITY" },
                { n: "02", t: "FIT" },
                { n: "03", t: "PROOF" },
              ].map((s, i) => (
                <RevealOnScroll key={s.n} delay={i * 0.1} direction="up" className="h-full">
                  <div className="flex flex-col justify-center h-full border-l-[3px] sm:border-l-[4px] border-[#1f7373] bg-white p-3 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <span className="font-display text-xl sm:text-4xl font-black text-[#05162e]">{s.n}</span>
                    <p className="mt-2 sm:mt-6 text-[8px] sm:text-xs font-black tracking-[0.2em] text-[#1f7373] uppercase">{s.t}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
