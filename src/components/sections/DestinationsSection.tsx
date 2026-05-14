"use client";

import { DESTINATION_PINS, UNIVERSITY_ENTRIES } from "@/lib/constants";
import dynamic from "next/dynamic";
import Link from "next/link";
import { 
  RevealOnScroll, 
  SplitTextReveal, 
  InfiniteMarquee, 
  MagneticButton,
  FloatingStar2D
} from "./AnimationKit";

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
  const uniNames = UNIVERSITY_ENTRIES.map(u => u.name);

  return (
    <section
      id="destinations"
      className="relative scroll-mt-28 bg-gradient-to-b from-[#02081f] via-[#06153d] to-[#0A1F5C] px-4 py-28 text-white sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-20 right-10 opacity-20 pointer-events-none">
        <FloatingStar2D size={120} delay={0} color="#f4a800" />
      </div>
      <div className="absolute bottom-40 left-10 opacity-10 pointer-events-none">
        <FloatingStar2D size={80} delay={2} color="#1687d9" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="text-left">
            <RevealOnScroll direction="left">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#f4a800]">
                Global Destinations
              </p>
            </RevealOnScroll>
            
            <div className="mt-6">
              <SplitTextReveal 
                text="A global footprint—built for visa outcomes." 
                className="font-display text-4xl font-bold leading-tight sm:text-5xl"
              />
            </div>

            <RevealOnScroll delay={0.2} direction="up">
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75">
                Hover pins to preview university clusters and typical visa windows. The globe rotates
                gently—pause by interacting with a destination.
              </p>
            </RevealOnScroll>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { k: "Visa strategy", v: "Documentation audits + mock interviews" },
                { k: "University fit", v: "Shortlisting aligned to budget & profile" },
                { k: "Timeline clarity", v: "Intakes, deadlines, and visa windows" },
                { k: "1:1 guidance", v: "Counsellor support end-to-end" },
              ].map((item, i) => (
                <RevealOnScroll key={item.k} delay={0.3 + i * 0.1} direction="up">
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl group hover:bg-white/10 transition-colors">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#f4a800]/70 group-hover:text-[#f4a800] transition-colors">
                      {item.k}
                    </p>
                    <p className="mt-3 text-sm font-bold text-white/90">{item.v}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {DESTINATION_PINS.map((p, i) => (
                <RevealOnScroll key={p.id} delay={0.4 + i * 0.05} direction="scale">
                  <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-black text-white/90 ring-1 ring-white/5 hover:ring-[#f4a800]/50 transition-all">
                    <span className="text-base">{p.flag}</span>
                    <span>{p.country}</span>
                  </span>
                </RevealOnScroll>
              ))}
            </div>

            <div className="mt-12">
              <MagneticButton>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center bg-[#f4a800] px-10 py-5 text-sm font-black text-[#02081f] transition hover:bg-[#ffd15a] shadow-2xl shadow-[#f4a800]/20"
                >
                  Get a destination shortlist
                </Link>
              </MagneticButton>
            </div>
          </div>

          <RevealOnScroll direction="scale" delay={0.2} className="relative">
             {/* Glow effect */}
            <div
              className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-br from-[#1687d9]/20 via-transparent to-[#f4a800]/20 blur-3xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl shadow-[0_60px_120px_-40px_rgba(0,0,0,0.5)]">
              <GlobeCanvas />
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <RevealOnScroll direction="up" delay={0.5} className="mt-24">
        <div className="relative mx-auto max-w-7xl">
           <div className="flex items-center gap-6 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Partner Universities</p>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
           </div>
           <div className="relative rounded-3xl border border-white/5 bg-white/5 py-8 overflow-hidden group">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#06153d] to-transparent z-10" aria-hidden />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#06153d] to-transparent z-10" aria-hidden />
              
              <InfiniteMarquee 
                items={uniNames} 
                speed={50} 
                itemClassName="flex h-16 min-w-[280px] items-center justify-center rounded-2xl bg-white/5 px-8 text-sm font-black text-white/80 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition-all cursor-default"
              />
           </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
