"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";

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

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const EASE = [0.22, 1, 0.36, 1] as const;

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

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
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_20px_55px_-35px_rgba(2,8,31,0.35)] transition hover:-translate-y-1 hover:border-bs-gold/60">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-bs-sky/10 blur-2xl transition group-hover:bg-bs-gold/10"
        aria-hidden
      />
      <div className="flex items-start gap-4">
        <div className="shrink-0 rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-100">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bs-ocean/90">
            {highlight}
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold text-bs-navy">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-bs-navy/80">
          Learn more
          <span className="text-bs-ocean transition group-hover:translate-x-0.5">
            <ArrowIcon />
          </span>
        </span>
        <span className="h-9 w-9 rounded-full border border-slate-200 bg-white/80" aria-hidden />
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
      className="relative scroll-mt-28 bg-gradient-to-b from-white via-slate-50 to-white px-4 py-24 sm:px-8 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_30%_20%,rgba(33,150,243,0.14),transparent_55%),radial-gradient(circle_at_75%_10%,rgba(244,168,0,0.10),transparent_50%)]"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-bs-ocean">
              Services
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold text-bs-navy sm:text-4xl">
              Built like a consultancy. Delivered like a mentor.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-slate-600 sm:text-base">
              We don’t sell “packages.” We design a decision-ready plan—university fit, documentation quality, and visa
              strategy—so every step increases your odds.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { k: "Profile evaluation", v: "Clear strengths, gaps, and target range" },
                { k: "Shortlisting", v: "3 tiers: safe / match / ambitious" },
                { k: "Application build", v: "SOP, LOR, CV, and timelines" },
                { k: "Visa readiness", v: "Docs, finances, and mock interview" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{x.k}</p>
                  <p className="mt-2 text-sm font-semibold text-bs-navy/90">{x.v}</p>
                </div>
              ))}
            </div>

            <Link
              href="/#contact"
              className="mt-9 inline-flex items-center justify-center rounded-full bg-bs-gold px-7 py-3.5 text-sm font-bold text-bs-navy shadow-[0_16px_44px_rgba(244,168,0,0.28)] transition hover:-translate-y-0.5 hover:bg-[#ffc845]"
            >
              Get a free strategy call
            </Link>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {SERVICES.map((s, idx) => (
              <motion.div key={s.title} variants={item}>
                <ServiceCard
                  icon={s.icon}
                  title={s.title}
                  desc={s.desc}
                  highlight={highlights[idx] ?? "Service"}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_20px_55px_-35px_rgba(2,8,31,0.35)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                The BlueShore DNA
              </p>
              <p className="mt-2 max-w-2xl font-display text-2xl font-semibold text-bs-navy">
                A repeatable system that keeps you on-track—deadlines, docs, and decisions.
              </p>
            </div>
            <Link
              href="/#destinations"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-bold text-bs-navy transition hover:-translate-y-0.5 hover:bg-white"
            >
              See destinations
            </Link>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-4">
            {[
              { n: "01", t: "Discover", d: "Profile + goals + constraints" },
              { n: "02", t: "Design", d: "Shortlist + timeline + costs" },
              { n: "03", t: "Build", d: "Applications + SOP/LOR/CV" },
              { n: "04", t: "Launch", d: "Visa + pre-departure plan" },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-semibold text-bs-gold">{s.n}</span>
                  <span className="h-10 w-10 rounded-full bg-bs-sky/10" aria-hidden />
                </div>
                <p className="mt-3 text-sm font-semibold text-bs-navy">{s.t}</p>
                <p className="mt-1 text-sm text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
