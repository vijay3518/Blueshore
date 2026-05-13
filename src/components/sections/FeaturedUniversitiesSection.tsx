"use client";

import { UNIVERSITY_ENTRIES } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const COUNTRIES = ["All", ...Array.from(new Set(UNIVERSITY_ENTRIES.map((u) => u.code)))];

const FLAG_BY_CODE: Record<string, string> = {
  UK: "🇬🇧",
  USA: "🇺🇸",
  Canada: "🇨🇦",
  Australia: "🇦🇺",
  Germany: "🇩🇪",
  France: "🇫🇷",
  UAE: "🇦🇪",
  Singapore: "🇸🇬",
  Ireland: "🇮🇪",
  "New Zealand": "🇳🇿",
};

function universityInitials(name: string) {
  const ignore = new Set(["of", "the", "and"]);
  return name
    .split(" ")
    .filter((word) => !ignore.has(word.toLowerCase()))
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

export function FeaturedUniversitiesSection() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return [...UNIVERSITY_ENTRIES];
    return UNIVERSITY_ENTRIES.filter((u) => u.code === filter);
  }, [filter]);

  return (
    <section className="bg-slate-50 px-4 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-bs-ocean">
            Featured Universities
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-bs-navy sm:text-4xl">
            Where BlueShore scholars thrive—filter by destination.
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {COUNTRIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === c
                  ? "bg-bs-navy text-white shadow-lg shadow-bs-navy/25"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
              }`}
            >
              {c === "All" ? "All" : `${FLAG_BY_CODE[c] ?? ""} ${c}`}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((u) => (
              <motion.article
                layout
                key={u.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-200/70"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-bs-sky/10 blur-2xl transition group-hover:bg-bs-gold/20"
                  aria-hidden
                />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-bs-ocean/15 bg-gradient-to-br from-bs-navy via-bs-ocean to-bs-sky shadow-inner">
                      <div className="absolute inset-x-0 bottom-0 h-5 bg-bs-gold/85" />
                      <span className="relative font-display text-xl font-semibold text-white">
                        {universityInitials(u.name)}
                      </span>
                    </div>
                    <div className="min-w-0">
                    <p className="font-display text-lg font-semibold text-bs-navy transition-transform duration-300 group-hover:scale-[1.02]">
                      {u.name}
                    </p>
                    <span className="mt-3 inline-flex rounded-full bg-bs-gold/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-bs-navy opacity-0 transition group-hover:opacity-100">
                      {FLAG_BY_CODE[u.code] ?? ""} {u.country}
                    </span>
                    </div>
                  </div>
                  <span className="rounded-xl bg-bs-ocean/10 px-3 py-2 text-xs font-bold uppercase tracking-wide text-bs-navy">
                    {u.code}
                  </span>
                </div>
                <button
                  type="button"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-bs-ocean underline-offset-4 opacity-0 transition group-hover:opacity-100 group-hover:underline"
                >
                  Learn More
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
