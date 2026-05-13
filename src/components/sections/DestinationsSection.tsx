"use client";

import { DESTINATION_PINS, UNIVERSITY_ENTRIES } from "@/lib/constants";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRef } from "react";

const GlobeCanvas = dynamic(
  () => import("./globe/GlobeCanvas").then((m) => m.GlobeCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[min(72vh,560px)] w-full items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-b from-[#050b28] to-[#0b2168] text-sm text-white/80">
        Loading interactive globe…
      </div>
    ),
  },
);

export function DestinationsSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="destinations"
      className="scroll-mt-28 bg-gradient-to-b from-[#02081f] via-[#06153d] to-[#0A1F5C] px-4 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-bs-gold/90">
              Global Destinations
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              A global footprint—built for visa outcomes.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-white/75 sm:text-base">
              Hover pins to preview university clusters and typical visa windows. The globe rotates
              gently—pause by interacting with a destination.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                {
                  k: "Visa strategy",
                  v: "Documentation audits + mock interviews",
                },
                {
                  k: "University fit",
                  v: "Shortlisting aligned to budget & profile",
                },
                {
                  k: "Timeline clarity",
                  v: "Intakes, deadlines, and visa windows",
                },
                {
                  k: "1:1 guidance",
                  v: "Counsellor support end-to-end",
                },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-2xl border border-white/12 bg-white/[0.06] p-4 backdrop-blur-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                    {item.k}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white/90">{item.v}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              {DESTINATION_PINS.map((p) => (
                <span
                  key={p.id}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white/85"
                >
                  <span className="text-sm">{p.flag}</span>
                  <span>{p.country}</span>
                </span>
              ))}
            </div>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-bs-gold px-7 py-3.5 text-sm font-bold text-bs-navy shadow-[0_16px_44px_rgba(244,168,0,0.28)] transition hover:-translate-y-0.5 hover:bg-[#ffc845]"
            >
              Get a destination shortlist
            </Link>
          </div>

          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-8 rounded-[40px] bg-gradient-to-br from-bs-sky/10 via-transparent to-bs-gold/10 blur-2xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.04] p-3 backdrop-blur-md">
              <GlobeCanvas />
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative mx-auto mt-14 max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 py-5"
        onMouseEnter={() => {
          if (marqueeRef.current) marqueeRef.current.style.animationPlayState = "paused";
        }}
        onMouseLeave={() => {
          if (marqueeRef.current) marqueeRef.current.style.animationPlayState = "running";
        }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#06153d] to-transparent" aria-hidden />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#06153d] to-transparent" aria-hidden />
        <div
          ref={marqueeRef}
          className="flex w-max items-center gap-10"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {[...UNIVERSITY_ENTRIES, ...UNIVERSITY_ENTRIES].map((u, i) => (
            <div
              key={`${u.name}-${i}`}
              className="flex h-14 min-w-[220px] items-center justify-center rounded-2xl bg-white/10 px-6 text-sm font-semibold text-white/90 ring-1 ring-white/20"
            >
              {u.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
