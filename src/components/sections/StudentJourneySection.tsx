import { ButtonCelebration } from "@/components/ButtonCelebration";
import Image from "next/image";
import Link from "next/link";
import { 
  RevealOnScroll, 
  SplitTextReveal, 
  MagneticButton, 
  FloatingCap2D, 
  FloatingPlane2D 
} from "./AnimationKit";

const images = {
  airportDream: "/images/airport_dream.png",
  airplaneTakeoff: "/images/airplane_takeoff.png",
  passport:
    "https://images.unsplash.com/photo-1586441133374-ed1cb4007a47?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=82&w=1600",
  visaStamp: "/images/visa_stamp.png",
  counselling: "/images/journey-counselling.png",
  universityLibrary: "/images/journey-university.png",
  application:
    "https://images.unsplash.com/photo-1620829813573-7c9e1877706f?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=82&w=1600",
  offerLetter:
    "https://images.pexels.com/photos/4560083/pexels-photo-4560083.jpeg?auto=compress&cs=tinysrgb&w=1600",
  campus:
    "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=82&w=1800",
} as const;

const processSteps = [
  {
    step: "01",
    title: "Counselling",
    copy: "A counsellor reads the student profile, budget, intake, tests, and career goal before suggesting countries.",
    image: images.counselling,
    alt: "University students gathered around a laptop during a counselling discussion",
  },
  {
    step: "02",
    title: "University Selection",
    copy: "The shortlist is built around fit: course strength, campus life, scholarship chances, and visa feasibility.",
    image: images.campus,
    alt: "Modern university campus building with people walking outside",
  },
  {
    step: "03",
    title: "Application File",
    copy: "Documents, SOP, LORs, CV, transcripts, and evidence are shaped into one strong admission story.",
    image: images.application,
    alt: "Student working on a laptop for a university application",
  },
  {
    step: "04",
    title: "Offer Letter",
    copy: "Application outcomes are tracked, compared, and converted into a confident final university decision.",
    image: images.offerLetter,
    alt: "Student smiling with university acceptance documents and a laptop",
  },
  {
    step: "05",
    title: "Visa Filing",
    copy: "Passport, financial proof, visa form, appointment, and interview preparation are checked with precision.",
    image: images.visaStamp,
    alt: "Close up of passport pages with visa stamps",
  },
  {
    step: "06",
    title: "Flight Booking",
    copy: "Once the visa is approved, travel, luggage, arrival support, and pre-departure steps become clear.",
    image: images.passport,
    alt: "Passport and boarding pass ready for an international flight",
  },
] as const;

const highlights = [
  ["Passport", "Ready"],
  ["Visa", "Approved"],
  ["Flight", "Booked"],
  ["Campus", "Arrived"],
] as const;

function JourneyPhoto({
  src,
  alt,
  sizes,
  className = "",
  children,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative isolate overflow-hidden bg-[#07111f] ${className}`}>
      <Image
        src={src}
        alt=""
        fill
        sizes={sizes}
        className="absolute inset-0 -z-10 object-cover opacity-45 blur-xl scale-110"
        aria-hidden
      />
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-contain"
      />
      {children}
    </div>
  );
}

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

function PlaneMark() {
  return (
    <svg viewBox="0 0 42 42" className="h-7 w-7" aria-hidden>
      <path
        d="M5.8 23.1 36.4 8.4c1.7-.8 3.3.9 2.4 2.5L25.1 36.4l-4.8-10.2-10.5 4.1-4-7.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function StudentJourneySection() {
  return (
    <section
      id="student-journey"
      className="scroll-mt-28 overflow-hidden bg-[#eef7ff] px-4 py-24 text-[#07111f] sm:px-8 lg:px-12"
      aria-labelledby="student-journey-heading"
    >
      <div className="mx-auto max-w-7xl relative">
        <FloatingPlane2D className="absolute -left-12 top-0 z-0 opacity-20 hidden xl:block" size={80} delay={1} />
        <FloatingCap2D className="absolute -right-12 bottom-0 z-0 opacity-20 hidden xl:block" size={100} delay={2} />

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center relative z-10">
          <RevealOnScroll direction="left">
            <div className="bg-white p-8 shadow-[0_32px_80px_-40px_rgba(7,17,31,0.5)] sm:p-10 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#eef7ff] -rotate-45 translate-x-16 -translate-y-16" />
              
              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#1565c0]">
                  Passport to future
                </p>
                <div className="mt-6">
                  <SplitTextReveal 
                    text="A real student dream, from visa stamp to airplane takeoff." 
                    className="max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
                  />
                </div>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  This section now uses fresh real-world imagery for the exact journey students care
                  about: counselling, university selection, offer letter, visa approval, flight, and
                  arrival on a global campus.
                </p>
              </div>

              <div className="mt-8 lg:mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-[1px] border border-slate-100 bg-slate-100">
                {highlights.map(([label, value], i) => (
                  <RevealOnScroll key={label} delay={i * 0.1} direction="up" className="bg-[#f8fbff] p-4 xl:p-6 group min-w-0 overflow-hidden h-full flex flex-col justify-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 group-hover:text-[#1565c0] transition-colors truncate">
                      {label}
                    </p>
                    <p className="mt-2 font-display text-xl xl:text-2xl font-bold text-[#0a1f5c]">
                      {value}
                    </p>
                  </RevealOnScroll>
                ))}
              </div>

              <div className="mt-8 lg:mt-10 flex flex-col gap-4 sm:flex-row">
                <MagneticButton className="w-full sm:w-auto">
                  <Link
                    href="/contact"
                    scroll={false}
                    className="btn-fx inline-flex w-full items-center justify-center bg-[#f4a800] px-8 py-4 text-sm font-black text-[#07111f] shadow-xl shadow-[#f4a800]/20 transition hover:bg-[#ffd15a]"
                  >
                    <span className="btn-fx-content">
                      Start my journey
                      <ArrowIcon />
                    </span>
                    <ButtonCelebration variant="scholar" />
                  </Link>
                </MagneticButton>
                <Link
                  href="/services"
                  scroll={false}
                  className="btn-fx inline-flex w-full items-center justify-center border-2 border-slate-200 bg-white px-8 py-4 text-sm font-black text-[#07111f] transition hover:border-[#1565c0] hover:text-[#1565c0] sm:w-auto"
                >
                  <span className="btn-fx-content">See visa process</span>
                  <ButtonCelebration variant="passport" />
                </Link>
              </div>
            </div>
          </RevealOnScroll>

          <div className="grid gap-6">
            <RevealOnScroll direction="right">
              <JourneyPhoto
                src={images.airportDream}
                alt="Student traveler dreaming of studying abroad while watching an airplane from the airport"
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="aspect-[16/10] lg:aspect-[4/3] shadow-2xl group cursor-crosshair"
              >
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.8),transparent_60%,rgba(7,17,31,0.2))] transition-opacity duration-500 group-hover:opacity-70" />
                <div className="absolute left-6 top-6 flex items-center gap-4 border border-white/20 bg-[#07111f]/80 px-5 py-4 text-white backdrop-blur-xl transition-transform duration-500 group-hover:scale-105">
                  <div className="flex h-12 w-12 items-center justify-center bg-[#f4a800] text-[#07111f] animate-pulse">
                    <PlaneMark />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/50">
                      Dream route
                    </span>
                    <span className="mt-1 block text-base font-black">India to global campus</span>
                  </div>
                </div>

                <svg
                  className="pointer-events-none absolute inset-x-[9%] bottom-[12%] h-32 w-[82%]"
                  viewBox="0 0 720 140"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M20 104 C 146 12, 260 123, 390 62 S 610 14, 700 42"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeDasharray="12 14"
                    strokeLinecap="round"
                    strokeWidth="2"
                  />
                  <path
                    className="student-dream-route"
                    d="M20 104 C 146 12, 260 123, 390 62 S 610 14, 700 42"
                    fill="none"
                    stroke="#f4a800"
                    strokeLinecap="round"
                    strokeWidth="5"
                  />
                </svg>
              </JourneyPhoto>
            </RevealOnScroll>

            <div className="grid gap-6 sm:grid-cols-2">
              <RevealOnScroll direction="up" delay={0.2}>
                <JourneyPhoto
                  src={images.airplaneTakeoff}
                  alt="Real airplane taking off from an airport runway"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 27vw"
                  className="aspect-[16/10] lg:aspect-[4/3] shadow-xl group"
                >
                  <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:opacity-0" />
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(7,17,31,0.9),transparent)] p-6 text-white">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#f4a800]">
                      Real airplane
                    </p>
                    <p className="mt-3 font-display text-xl sm:text-2xl font-bold leading-tight">
                      Takeoff after approval.
                    </p>
                  </div>
                </JourneyPhoto>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.3}>
                <JourneyPhoto
                  src={images.visaStamp}
                  alt="Visa stamp pages in a passport"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 27vw"
                  className="aspect-[16/10] lg:aspect-[4/3] bg-white shadow-xl group"
                >
                  <div className="student-dream-stamp absolute right-6 top-6 border-4 border-[#b71c1c] bg-[#ffebee] px-5 py-3 text-[10px] font-black uppercase tracking-[0.25em] text-[#b71c1c] shadow-2xl">
                    Visa approved
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.95),transparent)] p-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1565c0]">
                      Decision moment
                    </p>
                    <p className="mt-3 font-display text-xl sm:text-2xl font-bold leading-tight text-[#0a1f5c]">
                      Passport, documents, confidence.
                    </p>
                  </div>
                </JourneyPhoto>
              </RevealOnScroll>
            </div>
          </div>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 0.1} direction="up">
              <li
                className="group grid overflow-hidden bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 sm:grid-cols-[0.95fr_1.05fr] md:grid-cols-1"
              >
                <div className="relative aspect-[4/3] min-h-0 overflow-hidden bg-[#07111f]">
                   <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <span className="absolute left-4 top-4 bg-[#f4a800] px-4 py-1.5 text-[10px] font-black text-[#07111f] shadow-xl z-10">
                    {item.step}
                  </span>
                  <div className="absolute inset-0 border-[8px] border-white/0 transition-all duration-500 group-hover:border-white/10" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight group-hover:text-[#1565c0] transition-colors">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-500">{item.copy}</p>
                </div>
              </li>
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </section>
  );
}
