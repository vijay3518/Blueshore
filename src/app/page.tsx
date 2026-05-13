import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const heroStats = [
  { value: "10k+", label: "visa milestones" },
  { value: "35+", label: "destination countries" },
  { value: "4.9", label: "student rating" },
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
  },
  {
    country: "Canada",
    signal: "Co-op pathways, PR-aligned province selection",
    intake: "Sep / Jan / May",
    accent: "#2dd4bf",
  },
  {
    country: "Australia",
    signal: "High-demand skills, campus-to-career sequencing",
    intake: "Feb / Jul",
    accent: "#fb7185",
  },
  {
    country: "Germany",
    signal: "Low-tuition public options, language-ready plans",
    intake: "Oct / Apr",
    accent: "#60a5fa",
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
    image: "/images/library-hall.jpg",
  },
  {
    title: "Pre-Departure Week Without Panic",
    type: "Arrival",
    image: "/images/airport-luggage.jpg",
  },
  {
    title: "Visa Interview Narrative Drill",
    type: "Visa",
    image: "/images/airport-terminal.jpg",
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

function SectionLabel({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <p
      className={`text-xs font-black uppercase tracking-[0.28em] ${
        tone === "light" ? "text-[#f4a800]" : "text-[#0c6b6a]"
      }`}
    >
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main className="bg-[#f4f0e8] text-[#101827]">
        <section
          id="home"
          className="relative isolate min-h-[88svh] scroll-mt-28 overflow-hidden bg-[#07111f] px-4 pb-14 pt-28 text-white sm:px-8 lg:px-12"
        >
          <Image
            src="/images/hero_section.png"
            alt="Graduates walking through a university campus"
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 -z-20 object-cover object-[52%_44%]"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,8,18,0.94)_0%,rgba(5,15,31,0.78)_44%,rgba(5,15,31,0.32)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(0deg,#f4f0e8_0%,rgba(244,240,232,0)_100%)]" />

          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.06fr)_minmax(320px,0.94fr)] lg:items-end">
            <div className="max-w-3xl pb-4">
              <div className="inline-flex items-center gap-3 border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/85 backdrop-blur">
                <span className="h-2 w-2 bg-[#f4a800]" aria-hidden />
                Study abroad command room
              </div>
              <h1 className="mt-7 font-display text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                BlueShore Overseas
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.82] sm:text-xl">
                A sharper overseas education experience for students who want university fit,
                visa confidence, and a plan their family can actually trust.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#f4a800] px-6 py-3.5 text-sm font-black text-[#07111f] transition hover:bg-[#ffd15a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4a800] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f]"
                >
                  Build my shortlist
                  <ArrowIcon />
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center justify-center border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-black text-white backdrop-blur transition hover:bg-white/[0.18] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f]"
                >
                  Explore the method
                </Link>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-3 border-y border-white/[0.18]">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="py-5 pr-4">
                    <p className="font-display text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-white/[0.62]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

           
          </div>
        </section>

        <section id="about" className="scroll-mt-28 px-4 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div className="relative min-h-[520px] overflow-hidden bg-[#07111f]">
              <Image
                src="/images/airport-terminal.jpg"
                alt="Traveler moving through an airport terminal"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(7,17,31,0.94),rgba(7,17,31,0))] p-6 text-white">
                <p className="max-w-sm text-sm font-bold uppercase tracking-[0.24em] text-[#f4a800]">
                  Arrival is designed before departure
                </p>
              </div>
            </div>

            <div className="lg:pl-8">
              <SectionLabel>About the new BlueShore</SectionLabel>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-[#07111f] sm:text-5xl">
                Not counselling as a package. Counselling as a decision system.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                The redesigned BlueShore experience treats every student file like a route map.
                You see the destination options, risk points, document gaps, and next action
                without waiting for vague follow-ups.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {["Clarity", "Fit", "Proof"].map((item, index) => (
                  <div key={item} className="border-l-4 border-[#0c6b6a] bg-white p-5 shadow-sm">
                    <p className="font-display text-3xl font-semibold text-[#07111f]">
                      0{index + 1}
                    </p>
                    <p className="mt-3 text-sm font-black uppercase tracking-[0.18em] text-[#0c6b6a]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <ul className="mt-9 space-y-4">
                {proofs.map((proof) => (
                  <li key={proof} className="flex gap-4 text-sm font-semibold text-slate-800 sm:text-base">
                    <span className="mt-2 h-2 w-8 bg-[#f4a800]" aria-hidden />
                    <span>{proof}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-28 bg-white px-4 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <SectionLabel>Services</SectionLabel>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-[#07111f] sm:text-5xl">
                  Four lanes, one clean journey.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-slate-600 lg:justify-self-end">
                BlueShore connects counselling, applications, visa readiness, and arrival support
                into one visible workflow. The student always knows what is complete, what is at
                risk, and what happens next.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {serviceLanes.map((lane) => (
                <article
                  key={lane.title}
                  className="group min-h-72 border border-slate-200 bg-[#f9f7f1] p-6 transition hover:-translate-y-1 hover:border-[#0c6b6a] hover:bg-white"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-4xl font-semibold text-[#f4a800]">
                      {lane.step}
                    </span>
                    <span className="h-10 w-10 border border-slate-300 bg-white transition group-hover:bg-[#0c6b6a]" />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-semibold text-[#07111f]">
                    {lane.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{lane.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="destinations"
          className="relative isolate scroll-mt-28 overflow-hidden bg-[#07111f] px-4 py-20 text-white sm:px-8 lg:px-12"
        >
          <Image
            src="/images/library-hall.jpg"
            alt="University library interior"
            fill
            sizes="100vw"
            className="absolute inset-0 -z-20 object-cover opacity-[0.22]"
          />
          <div className="absolute inset-0 -z-10 bg-[#07111f]/88" />
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <SectionLabel tone="light">Destination radar</SectionLabel>
                <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
                  Countries are not picked from a brochure. They are matched to outcomes.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-white/[0.72]">
                  The same student can have very different odds by country, intake, course, and
                  visa evidence. BlueShore turns that complexity into a shortlist you can compare.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {destinations.map((destination) => (
                  <article
                    key={destination.country}
                    className="border border-white/[0.14] bg-white/[0.08] p-5 backdrop-blur-md"
                    style={{ borderTopColor: destination.accent, borderTopWidth: 4 }}
                  >
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-white/[0.52]">
                      {destination.intake}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-semibold">{destination.country}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/70">{destination.signal}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="success" className="scroll-mt-28 bg-[#f4f0e8] px-4 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionLabel>Success stories</SectionLabel>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-[#07111f] sm:text-5xl">
                The result should feel calm before it feels exciting.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700">
                Students come to BlueShore for admission ambition, but the lasting value is the
                feeling that every document, interview answer, and travel step has already been
                thought through.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["10,247", "visa approvals guided"],
                  ["1:1", "advisor continuity"],
                  ["72 hr", "profile action plan"],
                ].map(([value, label]) => (
                  <div key={label} className="border border-slate-200 bg-white p-5">
                    <p className="font-display text-3xl font-semibold text-[#07111f]">{value}</p>
                    <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[500px] overflow-hidden bg-[#07111f]">
              <Image
                src="/images/campus-graduates.jpg"
                alt="Students graduating on campus"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.05),rgba(7,17,31,0.82))]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f4a800]">
                  Student outcome note
                </p>
                <p className="mt-3 max-w-sm font-display text-3xl font-semibold leading-tight">
                  Admitted, documented, visa-ready, and ready to land.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="scroll-mt-28 bg-white px-4 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionLabel>Resources</SectionLabel>
                <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-[#07111f] sm:text-5xl">
                  Field notes for ambitious applications.
                </h2>
              </div>
              <Link
                href="/#contact"
                className="inline-flex w-fit items-center gap-2 border border-slate-300 px-5 py-3 text-sm font-black text-[#07111f] transition hover:border-[#0c6b6a] hover:text-[#0c6b6a]"
              >
                Ask for a roadmap
                <ArrowIcon />
              </Link>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {resources.map((resource) => (
                <article key={resource.title} className="group border border-slate-200 bg-[#f9f7f1]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                    <Image
                      src={resource.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0c6b6a]">
                      {resource.type}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-[#07111f]">
                      {resource.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative isolate scroll-mt-28 overflow-hidden bg-[#07111f] px-4 py-24 text-white sm:px-8 lg:px-12"
        >
          <Image
            src="/images/airport-luggage.jpg"
            alt="Suitcase waiting in an airport terminal"
            fill
            sizes="100vw"
            className="absolute inset-0 -z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,17,31,0.94),rgba(7,17,31,0.66),rgba(7,17,31,0.24))]" />
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <SectionLabel tone="light">Start here</SectionLabel>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
                Bring your marks, budget, and dream country. We will bring the map.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.76]">
                Book a free counselling session and leave with a practical first shortlist,
                application risks, and your next three actions.
              </p>
            </div>

            <div className="border border-white/[0.18] bg-white/10 p-6 backdrop-blur-md">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/[0.62]">
                Counselling desk
              </p>
              <div className="mt-6 space-y-4 text-sm text-white/[0.78]">
                <a className="block border-b border-white/[0.14] pb-4 transition hover:text-white" href="tel:+919876543210">
                  +91 98765 43210
                </a>
                <a
                  className="block border-b border-white/[0.14] pb-4 transition hover:text-white"
                  href="mailto:hello@blueshoreoverseas.com"
                >
                  hello@blueshoreoverseas.com
                </a>
                <p>Bengaluru / Mumbai / Dubai / London</p>
              </div>
              <Link
                href="mailto:hello@blueshoreoverseas.com"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-[#f4a800] px-6 py-3.5 text-sm font-black text-[#07111f] transition hover:bg-[#ffd15a]"
              >
                Request counselling
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
