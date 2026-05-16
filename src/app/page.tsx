"use client";

import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { ButtonCelebration } from "@/components/ButtonCelebration";
import { StudentJourneySection } from "@/components/sections/StudentJourneySection";
import { HeroCanvas } from "@/components/sections/HeroCanvas";
import { BlueprintHeroSection } from "@/components/sections/BlueprintHeroSection";
import { SuccessRoadMarquee } from "@/components/sections/SuccessRoadMarquee";
import { motion } from "framer-motion";
import {
  RevealOnScroll,
  SplitTextReveal,
  CountUp,
  StaggerCards,
  DrawLine,
  HeroCoverReveal,
  MagneticButton,
  WipeRevealSection,
  ParallaxLayer,
  ScribbleImageReveal,
  FloatingPlane2D,
  FloatingStar2D,
  HeroTypewriter,
} from "@/components/sections/AnimationKit";

// Local UI Components
function SectionLabel({ children, tone = "dark" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <div className={`flex items-center gap-4 ${tone === "light" ? "text-[#f4a800]" : "text-[#07111f]"}`}>
      <span className={`h-px w-12 ${tone === "light" ? "bg-[#f4a800]" : "bg-[#07111f]"}`} />
      <span className="text-[10px] font-black uppercase tracking-[0.4em]">{children}</span>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";

const heroStats = [
  { value: 10, suffix: "k+", label: "visa milestones" },
  { value: 35, suffix: "+", label: "destination countries" },
  { value: 4.9, suffix: "", label: "student rating" },
] as const;

const universityLogos = [
  {
    name: "University of Oxford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/University_of_Oxford.svg",
    width: 220,
    mono: true,
  },
  {
    name: "University of Toronto",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/UofT_Wordmark.png",
    width: 220,
    mono: true,
  },
  {
    name: "Monash University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Monash_University_logo.svg",
    width: 210,
    mono: true,
  },
  {
    name: "Technical University of Munich",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Logo_of_the_Technical_University_of_Munich.svg",
    width: 180,
    mono: true,
  },
  {
    name: "National University of Singapore",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/9b/NationalUniversityofSingapore.svg",
    width: 220,
    mono: true,
  },
  {
    name: "University of Melbourne",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/50/The_University_of_Melbourne_Logo.svg",
    width: 190,
    mono: false,
  },
  {
    name: "UCL London",
    wordmark: "UCL",
    caption: "London",
  },
  {
    name: "University of British Columbia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/British_columbia_ca_univ_logo.svg",
    width: 220,
    mono: true,
  },
] as const;

const serviceLanes = [
  {
    step: "01",
    title: "Profile intelligence",
    copy: "Academic fit, budget, intakes, test scores, and career goals mapped before any shortlist is built.",
  },
  {
    step: "02",
    title: "University strategy",
    copy: "Safe, match, and ambitious options with scholarship potential, employability, and visa context.",
  },
  {
    step: "03",
    title: "Application craft",
    copy: "SOP, LOR, CV, and evidence packs shaped into a consistent admissions narrative.",
  },
  {
    step: "04",
    title: "Visa readiness",
    copy: "Document audits, financial storylines, mock interviews, and pre-departure planning.",
  },
] as const;

const destinations = [
  {
    country: "United Kingdom",
    signal: "Research-led programs, fast graduate route planning",
    intake: "Sep / Jan",
    accent: "#f4a800",
    image: "/images/dest-uk.png",
  },
  {
    country: "Canada",
    signal: "Co-op pathways, PR-aligned province selection",
    intake: "Sep / Jan / May",
    accent: "#2dd4bf",
    image: "/images/dest-canada.png",
  },
  {
    country: "Australia",
    signal: "High-demand skills, campus-to-career sequencing",
    intake: "Feb / Jul",
    accent: "#fb7185",
    image: "/images/dest-australia.png",
  },
  {
    country: "Germany",
    signal: "Low-tuition public options, language-ready plans",
    intake: "Oct / Apr",
    accent: "#60a5fa",
    image: "/images/dest-germany.png",
  },
] as const;

const proofs = [
  "Visa files reviewed like decision documents, not paperwork bundles.",
  "Shortlists built from fit, employability, budget, and family constraints.",
  "Every student gets a living timeline with accountability checkpoints.",
] as const;

const resources = [
  {
    title: "SOPs That Read Like Evidence",
    type: "Applications",
    image: "/images/journey-university.png",
  },
  {
    title: "Pre-Departure Week Without Panic",
    type: "Arrival",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Visa Interview Narrative Drill",
    type: "Visa",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
  },
] as const;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden>
      <path
        d="M10.7 4.3a1 1 0 0 1 1.4 0l4.9 4.9a1 1 0 0 1 0 1.4l-4.9 4.9a1 1 0 0 1-1.4-1.4l3.2-3.2H3.8a1 1 0 1 1 0-2h10.1l-3.2-3.2a1 1 0 0 1 0-1.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

type UniversityLogo = (typeof universityLogos)[number];

function UniversityLogoTile({ university }: { university: UniversityLogo }) {
  return (
    <div className="group flex h-24 w-[260px] shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.055] px-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:border-[#f4a800]/50 hover:bg-white/[0.09]">
      {"logo" in university ? (
        <Image
          src={university.logo}
          alt={`${university.name} logo`}
          width={university.width}
          height={72}
          unoptimized
          className={`h-auto max-h-12 w-auto max-w-full object-contain opacity-75 transition duration-300 group-hover:opacity-100 group-hover:drop-shadow-[0_0_18px_rgba(244,168,0,0.25)] ${university.mono ? "brightness-0 invert" : ""
            }`}
        />
      ) : (
        <div className="flex flex-col items-center text-white/80 transition duration-300 group-hover:text-white">
          <span className="text-4xl font-black leading-none tracking-[0.12em]">{university.wordmark}</span>
          <span className="mt-1 text-[10px] font-black uppercase tracking-[0.32em] text-[#f4a800]/80">
            {university.caption}
          </span>
        </div>
      )}
    </div>
  );
}

function UniversityLogoRow({ reverse = false }: { reverse?: boolean }) {
  const repeatedLogos = [...universityLogos, ...universityLogos];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex w-max gap-5 py-2 motion-reduce:animate-none ${reverse
            ? "animate-[marquee_44s_linear_infinite] [animation-direction:reverse]"
            : "animate-[marquee_40s_linear_infinite]"
          }`}
      >
        {repeatedLogos.map((university, index) => (
          <UniversityLogoTile key={`${university.name}-${index}`} university={university} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
      <ScrollProgress />
      <Navigation />
      <main className="bg-[#f4f0e8] text-[#101827]">
        <section
          id="home"
          className="relative isolate min-h-[92svh] scroll-mt-28 overflow-hidden bg-[#07111f] px-4 pb-14 pt-20 mt-20 text-white sm:px-8 lg:px-12"
        >
          {/* Background Image */}
          <div className="absolute inset-0 -z-30">
            <Image
              src="/images/hero_section.png"
              alt="Graduates walking through a university campus"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top opacity-60"
            />
          </div>

          {/* 3D Canvas Layer */}
          <HeroCanvas />
          <HeroCoverReveal />

          {/* Floating Accents */}
          <FloatingPlane2D className="absolute left-[10%] top-[40%] z-10 opacity-30 hidden lg:block" delay={1.2} size={60} />
          <FloatingStar2D className="absolute right-[25%] bottom-[30%] z-10 opacity-50 hidden lg:block" delay={0.8} />

          {/* Light gradient overlay on the left only */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,17,31,0.35)_0%,rgba(7,17,31,0.15)_40%,transparent_100%)]" />

          {/* Bottom fade into main page */}
          <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(0deg,#f4f0e8_0%,transparent_100%)]" />

          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:items-end relative z-10">
            <div className="max-w-3xl pb-4">
              <RevealOnScroll direction="left">
                <div className="inline-flex items-center gap-3 border border-white/20 bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#f4a800] backdrop-blur">
                  <span className="h-2 w-2 bg-[#f4a800]" aria-hidden />
                  Study abroad command room
                </div>
              </RevealOnScroll>

              <div className="mt-7">
                <RevealOnScroll delay={0.1}>
                  <h1 className="font-display text-3xl font-extrabold leading-[0.95] text-white sm:text-5xl lg:text-7xl">
                    <HeroTypewriter />
                  </h1>
                </RevealOnScroll>
              </div>

              <RevealOnScroll delay={0.3}>
                <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-white/80 sm:text-xl">
                  A sharper overseas education experience for students who want university fit,
                  visa confidence, and a plan their family can actually trust.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.5} className="mt-9 flex flex-col gap-4 sm:flex-row">
                <MagneticButton className="w-full sm:w-auto">
                  <Link
                    href="/contact"
                    scroll={false}
                    className="btn-fx inline-flex w-full items-center justify-center bg-[#f4a800] px-8 py-4 text-sm font-black text-[#07111f] shadow-xl shadow-black/20 transition hover:bg-[#ffd15a]"
                  >
                    <span className="btn-fx-content">
                      Build my shortlist
                      <ArrowIcon />
                    </span>
                    <ButtonCelebration variant="scholar" />
                  </Link>
                </MagneticButton>
                <Link
                  href="/services"
                  scroll={false}
                  className="btn-fx inline-flex w-full items-center justify-center border border-white/30 bg-white/10 px-8 py-4 text-sm font-black text-white shadow-xl shadow-black/10 backdrop-blur transition hover:bg-white/20 sm:w-auto"
                >
                  <span className="btn-fx-content">Explore the method</span>
                  <ButtonCelebration variant="plane" />
                </Link>
              </RevealOnScroll>

              <div className="mt-12 grid max-w-2xl grid-cols-3 gap-2 sm:gap-6 border-y border-white/20">
                {heroStats.map((stat, i) => (
                  <RevealOnScroll key={stat.label} delay={0.6 + i * 0.1} direction="up" className="py-6">
                    <p className="font-display text-2xl font-extrabold text-white sm:text-4xl">
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-2 max-w-[120px] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/50 leading-tight break-words">
                      {stat.label}
                    </p>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* University Logo Trust Strip */}
        <section className="relative isolate overflow-hidden border-y border-[#f4a800]/20 bg-[#07111f] py-12 text-white sm:py-16">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#07111f_0%,#0a1f5c_52%,#0c6b6a_100%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-[#f4a800]/50" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

          <div className="space-y-8">
            <UniversityLogoRow />
            <RevealOnScroll direction="up">
              <div className="mx-auto max-w-5xl px-4 py-5 text-center sm:px-8">
                <p className="text-[10px] font-black uppercase tracking-[0.34em] text-[#f4a800]">
                  Empowering students for world-class institutions
                </p>
                <h2 className="mx-auto mt-4 max-w-4xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Global university ambition, guided with BlueShore clarity.
                </h2>
              </div>
            </RevealOnScroll>
            <UniversityLogoRow reverse />
          </div>
        </section>

        <RevealOnScroll>
          <StudentJourneySection />
        </RevealOnScroll>

        <section id="about" className="scroll-mt-28 px-4 py-24 sm:px-8 lg:px-12 overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <RevealOnScroll direction="left" className="relative">
              <ScribbleImageReveal className="min-h-[560px] bg-[#07111f] shadow-2xl">
                <Image
                  src="/images/journey-counselling.png"
                  alt="Strategic education counselling as a decision system"
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(7,17,31,0.95),transparent)] p-8 text-white">
                  <p className="max-w-sm text-sm font-bold uppercase tracking-[0.24em] text-[#f4a800]">
                    Arrival is designed before departure
                  </p>
                </div>
              </ScribbleImageReveal>
              <FloatingStar2D className="absolute -right-6 -top-6 z-10" color="#f4a800" size={48} delay={0.2} />
            </RevealOnScroll>

            <div className="lg:pl-8">
              <RevealOnScroll direction="right">
                <SectionLabel>About the new BlueShore</SectionLabel>
                <div className="mt-5">
                  <SplitTextReveal
                    text="Not counselling as a package. Counselling as a decision system."
                    className="max-w-3xl font-display text-4xl font-bold leading-tight text-[#07111f] sm:text-5xl"
                  />
                </div>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700">
                  The redesigned BlueShore experience treats every student file like a route map.
                  You see the destination options, risk points, document gaps, and next action
                  without waiting for vague follow-ups.
                </p>

                <div className="mt-12 grid gap-6 sm:grid-cols-3">
                  {["Clarity", "Fit", "Proof"].map((item, index) => (
                    <RevealOnScroll key={item} delay={index * 0.15} direction="up" className="group border-l-4 border-[#0c6b6a] bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                      <p className="font-display text-4xl font-bold text-[#07111f] group-hover:text-[#0c6b6a] transition-colors">
                        0{index + 1}
                      </p>
                      <p className="mt-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#0c6b6a]">
                        {item}
                      </p>
                    </RevealOnScroll>
                  ))}
                </div>

                <ul className="mt-12 space-y-5">
                  {proofs.map((proof, i) => (
                    <RevealOnScroll key={proof} delay={0.4 + i * 0.1} direction="left">
                      <li className="flex gap-5 text-sm font-semibold text-slate-800 sm:text-base">
                        <span className="mt-2 h-[2px] w-10 bg-[#f4a800] shrink-0" aria-hidden />
                        <span>{proof}</span>
                      </li>
                    </RevealOnScroll>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-28 bg-white px-4 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <RevealOnScroll direction="up">
                  <SectionLabel>Services</SectionLabel>
                  <div className="mt-5">
                    <SplitTextReveal
                      text="Four lanes, one clean journey."
                      className="font-display text-4xl font-bold leading-tight text-[#07111f] sm:text-5xl"
                    />
                  </div>
                </RevealOnScroll>
              </div>
              <RevealOnScroll direction="up" delay={0.2}>
                <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
                  BlueShore connects counselling, applications, visa readiness, and arrival support
                  into one visible workflow. The student always knows what is complete, what is at
                  risk, and what happens next.
                </p>
              </RevealOnScroll>
            </div>

            <StaggerCards className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {serviceLanes.map((lane) => (
                <article
                  key={lane.title}
                  data-stagger-card
                  className="group relative min-h-80 border border-slate-100 bg-[#f9f7f1] p-8 transition-all duration-500 hover:border-[#0c6b6a] hover:bg-white hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-5xl font-bold text-[#f4a800] opacity-50 group-hover:opacity-100 transition-opacity">
                      {lane.step}
                    </span>
                    <div className="h-12 w-12 border border-slate-200 bg-white p-2 transition-all duration-500 group-hover:bg-[#0c6b6a] group-hover:border-[#0c6b6a] group-hover:rotate-12 flex items-center justify-center">
                      <ArrowIcon />
                    </div>
                  </div>
                  <h3 className="mt-10 font-display text-2xl font-bold text-[#07111f]">
                    {lane.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-slate-600">{lane.copy}</p>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#0c6b6a] transition-all duration-500 group-hover:w-full" />
                </article>
              ))}
            </StaggerCards>
          </div>
        </section>

        <section
          id="destinations"
          className="relative isolate scroll-mt-28 overflow-hidden bg-[#07111f] px-4 py-28 text-white sm:px-8 lg:px-12"
        >
          <ParallaxLayer speed={0.12} className="absolute inset-0 -z-20 pointer-events-none">
            <Image
              src="/images/library-hall.jpg"
              alt="University library interior"
              fill
              sizes="100vw"
              className="object-cover opacity-[0.25]"
            />
            <div className="absolute inset-0 bg-[#07111f]/90" />
          </ParallaxLayer>

          <FloatingPlane2D className="absolute right-[5%] top-[15%] z-0 opacity-20 rotate-45" size={100} delay={0.5} />

          <div className="mx-auto max-w-7xl relative z-10">
            <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <RevealOnScroll direction="left">
                  <SectionLabel tone="light">Destination radar</SectionLabel>
                  <div className="mt-6">
                    <SplitTextReveal
                      text="Countries are not picked from a brochure. They are matched to outcomes."
                      className="font-display text-4xl font-bold leading-tight sm:text-5xl"
                    />
                  </div>
                  <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">
                    The same student can have very different odds by country, intake, course, and
                    visa evidence. BlueShore turns that complexity into a shortlist you can compare.
                  </p>

                  <DrawLine className="mt-10 max-w-xs" />
                </RevealOnScroll>
              </div>

              <StaggerCards className="grid gap-6 sm:grid-cols-2">
                {destinations.map((destination) => (
                  <RevealOnScroll key={destination.country} direction="perspective" delay={0.1}>
                    <article
                      data-stagger-card
                      className="group relative isolate overflow-hidden border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:shadow-2xl h-full"
                      style={{ borderTopColor: destination.accent, borderTopWidth: 4 }}
                    >
                      {/* Destination Image Background */}
                      <Image
                        src={destination.image}
                        alt={destination.country}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="absolute inset-0 -z-10 object-cover opacity-20 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
                      />
                      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-[#07111f]/60" />

                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40 group-hover:text-white/60 transition-colors">
                        {destination.intake}
                      </p>
                      <h3 className="mt-6 font-display text-3xl font-bold">{destination.country}</h3>
                      <p className="mt-4 text-sm leading-7 text-white/60 group-hover:text-white/80 transition-colors">{destination.signal}</p>

                      <div className="mt-8 flex justify-end">
                        <div className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#07111f] transition-all">
                          <ArrowIcon />
                        </div>
                      </div>
                    </article>
                  </RevealOnScroll>
                ))}
              </StaggerCards>
            </div>
          </div>
        </section>

        <section id="success" className="scroll-mt-28 bg-[#f4f0e8] px-4 py-28 sm:px-8 lg:px-12 overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <RevealOnScroll direction="lens">
                <SectionLabel>Success stories</SectionLabel>
                <div className="mt-6">
                  <SplitTextReveal
                    text="The result should feel calm before it feels exciting."
                    className="max-w-3xl font-display text-4xl font-bold leading-tight text-[#07111f] sm:text-5xl"
                  />
                </div>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-700">
                  Students come to BlueShore for admission ambition, but the lasting value is the
                  feeling that every document, interview answer, and travel step has already been
                  thought through.
                </p>

                <div className="mt-12 grid gap-6 sm:grid-cols-3">
                  {[
                    { value: 10247, label: "visa approvals guided" },
                    { value: 1, label: "advisor continuity", suffix: ":1" },
                    { value: 72, label: "profile action plan", suffix: " hr" },
                  ].map((stat, i) => (
                    <RevealOnScroll key={stat.label} delay={i * 0.15} className="border border-slate-200 bg-white p-7 shadow-sm">
                      <p className="font-display text-4xl font-bold text-[#07111f]">
                        <CountUp to={stat.value} suffix={stat.suffix || ""} />
                      </p>
                      <p className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 leading-tight">
                        {stat.label}
                      </p>
                    </RevealOnScroll>
                  ))}
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll direction="perspective" className="relative group">
              <ScribbleImageReveal className="min-h-[540px] bg-white shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200"
                  alt="Successful student with quiet confidence"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover opacity-90 transition-all duration-1000 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-transparent" />

                <div className="absolute inset-x-0 top-0 p-8 text-[#07111f] z-10 text-left">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f4a800]">
                    Student outcome
                  </p>
                  <p className="mt-5 max-w-sm font-display text-4xl font-bold leading-tight">
                    Admitted, documented, visa-ready, and ready to land.
                  </p>
                </div>
              </ScribbleImageReveal>
            </RevealOnScroll>
          </div>
        </section>

        <WipeRevealSection>
          <section id="blog" className="scroll-mt-28 bg-white px-4 py-28 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <RevealOnScroll direction="up">
                  <SectionLabel>Resources</SectionLabel>
                  <div className="mt-5">
                    <SplitTextReveal
                      text="Field notes for ambitious applications."
                      className="max-w-2xl font-display text-4xl font-bold leading-tight text-[#07111f] sm:text-5xl"
                    />
                  </div>
                </RevealOnScroll>

                <RevealOnScroll direction="up" delay={0.2}>
                  <MagneticButton>
                    <Link
                      href="/contact"
                      scroll={false}
                      className="btn-fx inline-flex w-fit items-center border-2 border-[#07111f] px-8 py-4 text-sm font-black text-[#07111f] transition hover:bg-[#07111f] hover:text-white"
                    >
                      <span className="btn-fx-content">
                        Ask for a roadmap
                        <ArrowIcon />
                      </span>
                      <ButtonCelebration variant="confetti" />
                    </Link>
                  </MagneticButton>
                </RevealOnScroll>
              </div>

              <StaggerCards className="mt-16 grid gap-8 lg:grid-cols-3">
                {resources.map((resource, i) => (
                  <RevealOnScroll key={resource.title} direction="diagonal" delay={i * 0.1}>
                    <article data-stagger-card className="group cursor-pointer">
                      <ScribbleImageReveal className="aspect-[4/3] bg-slate-900">
                        <Image
                          src={resource.image}
                          alt={resource.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 30vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent opacity-60" />
                        <div className="absolute left-6 top-6">
                          <span className="bg-[#f4a800] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#07111f]">
                            {resource.type}
                          </span>
                        </div>
                      </ScribbleImageReveal>
                      <div className="mt-6">
                        <h3 className="font-display text-xl font-bold text-[#07111f] group-hover:text-[#f4a800] transition-colors">
                          {resource.title}
                        </h3>
                        <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                          <span>Read field note</span>
                          <div className="h-[1px] w-8 bg-slate-200 transition-all group-hover:w-12 group-hover:bg-[#f4a800]" />
                        </div>
                      </div>
                    </article>
                  </RevealOnScroll>
                ))}
              </StaggerCards>
            </div>
          </section>
        </WipeRevealSection>
        <BlueprintHeroSection />

        <section
          id="contact"
          className="relative isolate h-screen overflow-hidden bg-[#07111f] text-white"
        >
          {/* Background Strategy Map */}
          <div className="absolute inset-0 -z-10 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1800"
              alt="Global strategy grid"
              fill
              priority
              loading="eager"
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="grid h-full lg:grid-cols-2">

            {/* Left: Perfectly Aligned Strategic Form (Sticky Header) */}
            <div className="relative z-30 h-full w-full overflow-y-auto scrollbar-hide">

              {/* STICKY HEADER: Always Visible at the top of the scrollable column */}
              <div className="sticky top-0 z-40 px-6 pt-16 pb-10 sm:px-12 lg:px-20 bg-[#07111f]">
                <div className="mx-auto w-full max-w-2xl">
                  <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-start text-left"
                  >
                    <SectionLabel tone="light">Strategy Desk</SectionLabel>
                    <h2 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">
                      Get your <span className="text-[#f4a800]">Global Blueprint</span>
                    </h2>
                    <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/60">
                      Submit your profile for a deep-dive audit. <br />
                      <span className="text-white font-bold text-sm uppercase tracking-widest">Strategy Mapping—At Zero Cost.</span>
                    </p>
                  </motion.div>
                </div>
                {/* Fade-out mask for fields sliding under */}
                <div className="absolute inset-x-0 bottom-0 h-10 translate-y-full bg-gradient-to-b from-[#07111f] to-transparent pointer-events-none" />
              </div>

              {/* SCROLLABLE CONTENT: Data Entry Fields */}
              <div className="px-6 pb-20 sm:px-12 lg:px-20">
                <div className="mx-auto w-full max-w-2xl">
                  <form
                    className="grid gap-10 sm:grid-cols-2"
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Strategy Request Received. An advisor will contact you shortly.");
                    }}
                  >
                    {[
                      { l: "First name*", p: "Enter first name", full: false },
                      { l: "Last name", p: "Enter last name", full: false },
                      { l: "Email address*", p: "hello@blueshore.com", full: true },
                    ].map((field) => (
                      <div
                        key={field.l}
                        className={`group space-y-1 ${field.full ? "sm:col-span-2" : ""}`}
                      >
                        <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50 group-focus-within:text-[#f4a800] transition-colors">{field.l}</label>
                        <input type="text" placeholder={field.p} className="w-full border-b border-white/20 bg-transparent py-2 text-lg font-medium text-white focus:border-[#f4a800] focus:outline-none transition-all placeholder:text-white/5" />
                      </div>
                    ))}

                    <div className="group space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50 group-focus-within:text-[#f4a800] transition-colors">Mobile number*</label>
                      <div className="flex gap-6">
                        <div className="flex w-14 items-center border-b border-white/20 text-lg font-bold text-white/40">+91</div>
                        <input type="tel" placeholder="98765 43210" className="flex-1 border-b border-white/20 bg-transparent py-2 text-lg font-medium text-white focus:border-[#f4a800] focus:outline-none transition-all placeholder:text-white/5" />
                      </div>
                    </div>

                    {[
                      { l: "Destination*", o: ["Select", "UK", "Canada", "Australia", "Germany", "USA"] },
                      { l: "Timeframe*", o: ["Select", "Within 3 months", "3-6 months", "6-12 months"] },
                      { l: "Office*", o: ["Select", "Online", "Main Office", "Regional Hub"] },
                      { l: "Consultation*", o: ["Select", "Video Call", "Voice Call", "WhatsApp"] },
                      { l: "Study level*", o: ["Select", "Undergraduate", "Postgraduate", "PhD"] },
                      { l: "Funding*", o: ["Select", "Self-funded", "Education Loan", "Scholarship"] },
                    ].map((field) => (
                      <div key={field.l} className="group space-y-1">
                        <label className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50 group-focus-within:text-[#f4a800] transition-colors">{field.l}</label>
                        <select className="w-full appearance-none border-b border-white/20 bg-transparent py-2 text-lg font-medium text-white focus:border-[#f4a800] focus:outline-none transition-all cursor-pointer">
                          {field.o.map(opt => <option key={opt} className="bg-[#07111f] text-white">{opt}</option>)}
                        </select>
                      </div>
                    ))}

                    <div className="mt-10 sm:col-span-2">
                      <MagneticButton className="w-full">
                        <button type="submit" className="btn-fx group relative flex w-full items-center justify-center rounded-2xl bg-[#f4a800] py-6 text-xs font-black uppercase tracking-[0.4em] text-[#07111f] shadow-2xl transition hover:bg-white">
                          <span className="btn-fx-content gap-6">
                            Generate Roadmap
                            <svg className="h-4 w-4 transition-transform group-hover:translate-x-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </span>
                          <ButtonCelebration variant="passport" />
                        </button>
                      </MagneticButton>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Right: Aligned Luminous Success Road (100vh) */}
            <div className="relative hidden lg:block h-full overflow-hidden">
              <SuccessRoadMarquee />
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
