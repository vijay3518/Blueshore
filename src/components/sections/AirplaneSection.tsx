"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    value: 150,
    suffix: "+",
    label: "Partner Universities",
    icon: "university",
  },
  {
    value: 35,
    suffix: "+",
    label: "Countries",
    icon: "globe",
  },
  {
    value: 98,
    suffix: "%",
    label: "Visa Approval Rate",
    icon: "visa",
  },
  {
    value: 10000,
    suffix: "+",
    label: "Students Placed",
    icon: "students",
  },
] as const;

function StatIcon({ type }: { type: (typeof STATS)[number]["icon"] }) {
  if (type === "university") {
    return (
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
        <path d="M5 13 16 6l11 7v2H5v-2z" fill="#1565C0" />
        <path d="M8 16h3v8H8zm6.5 0h3v8h-3zm6.5 0h3v8h-3z" fill="#0A1F5C" />
        <path d="M6 25h20v2H6z" fill="#F4A800" />
      </svg>
    );
  }

  if (type === "globe") {
    return (
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
        <circle cx="16" cy="16" r="11" fill="#E3F2FD" stroke="#1565C0" strokeWidth="2" />
        <path d="M5 16h22M16 5c4 4 4 18 0 22M16 5c-4 4-4 18 0 22" stroke="#0A1F5C" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "visa") {
    return (
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
        <rect x="6" y="8" width="20" height="16" rx="3" fill="#E3F2FD" stroke="#0A1F5C" strokeWidth="2" />
        <circle cx="14" cy="16" r="4" fill="#F4A800" />
        <path d="M18 14h5M18 18h4" stroke="#1565C0" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
      <circle cx="12" cy="12" r="4" fill="#1565C0" />
      <circle cx="21" cy="13" r="3.5" fill="#F4A800" />
      <path d="M5 25c1-5 4-8 8-8s7 3 8 8" fill="#E3F2FD" stroke="#0A1F5C" strokeWidth="2" strokeLinecap="round" />
      <path d="M17 24c1-4 3-6 6-6 2 0 4 2 5 6" fill="none" stroke="#1565C0" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function AnimatedCounter({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <>
      {current.toLocaleString()}
      {suffix}
    </>
  );
}

function BrandLogoBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute left-1/2 top-[8%] h-[clamp(300px,72vw,620px)] w-[clamp(300px,72vw,620px)] -translate-x-1/2 opacity-30 sm:top-[4%] lg:left-[68%] lg:top-1/2 lg:h-[min(72vh,720px)] lg:w-[min(72vh,720px)] lg:-translate-y-1/2 lg:opacity-40">
        <Image
          src="/blueshore-logo-full.png"
          alt=""
          fill
          sizes="(max-width: 1024px) 72vw, 720px"
          className="object-contain drop-shadow-[0_28px_70px_rgba(10,31,92,0.26)]"
        />
      </div>
    </div>
  );
}

function AirplaneSvg() {
  return (
    <svg viewBox="0 0 180 70" className="h-[70px] w-[180px] drop-shadow-[0_18px_22px_rgba(10,31,92,0.24)]" aria-hidden>
      <defs>
        <linearGradient id="plane-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E3F2FD" />
        </linearGradient>
      </defs>
      <path
        d="M12 38 C42 27, 92 18, 151 22 C163 23, 171 28, 174 34 C168 39, 157 43, 141 44 L26 51 C17 51, 12 47, 12 38Z"
        fill="url(#plane-body)"
        stroke="#0A1F5C"
        strokeWidth="1.6"
      />
      <path d="M28 43 C64 35, 112 30, 159 31" stroke="#1565C0" strokeWidth="3" strokeLinecap="round" />
      <path d="M70 43 L110 62 L125 60 L92 39 Z" fill="#FFFFFF" stroke="#1565C0" strokeWidth="1.6" />
      <path d="M78 37 L117 12 L128 14 L98 39 Z" fill="#FFFFFF" stroke="#1565C0" strokeWidth="1.6" />
      <path d="M26 36 L13 18 L22 16 L46 33 Z" fill="#FFFFFF" stroke="#1565C0" strokeWidth="1.5" />
      <path d="M31 47 L16 61 L28 61 L53 47 Z" fill="#FFFFFF" stroke="#1565C0" strokeWidth="1.5" />
      <path d="M73 48 h29" stroke="#0A1F5C" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="81" cy="53" rx="10" ry="4" fill="#0A1F5C" />
      <ellipse cx="111" cy="50" rx="10" ry="4" fill="#0A1F5C" />
      {[60, 75, 90, 105, 120].map((x) => (
        <circle key={x} cx={x} cy="30" r="2.5" fill="#BBDEFB" stroke="#1565C0" strokeWidth="0.7" />
      ))}
      <text x="48" y="41" fontSize="7" fontWeight="700" fill="#0A1F5C" letterSpacing="0.2">
        BlueShore
      </text>
      <path d="M158 26 L173 34 L158 39" fill="none" stroke="#1565C0" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function AirplaneSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const contrailRef = useRef<SVGPathElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [countersActive, setCountersActive] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const plane = planeRef.current;
    const contrail = contrailRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current;

    if (!section || !plane || !contrail || !heading || !cards) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const contrailLength = contrail.getTotalLength();
    const cardItems = gsap.utils.toArray<HTMLElement>(cards.children);
    let counterStarted = false;

    gsap.set(contrail, {
      strokeDasharray: contrailLength,
      strokeDashoffset: contrailLength,
    });
    gsap.set(heading, { opacity: 0, y: 24 });
    gsap.set(cardItems, { opacity: 0, y: 40 });

    if (reduceMotion) {
      gsap.set(plane, { y: -200, x: 60, rotation: -5, opacity: 1 });
      gsap.set(contrail, { strokeDashoffset: 0 });
      gsap.set(heading, { opacity: 1, y: 0 });
      gsap.set(cardItems, { opacity: 1, y: 0 });
      const frame = requestAnimationFrame(() => setCountersActive(true));
      return () => cancelAnimationFrame(frame);
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          onUpdate(self) {
            if (!counterStarted && self.progress >= 0.4) {
              counterStarted = true;
              setCountersActive(true);
            }
          },
        },
      });

      tl.fromTo(
        plane,
        { y: 400, x: 0, rotation: -15, opacity: 0 },
        { y: -200, x: 60, rotation: -5, opacity: 1, ease: "power2.out" },
        0,
      );

      tl.to(contrail, { strokeDashoffset: 0, ease: "none" }, 0);
      tl.to(heading, { opacity: 1, y: 0, ease: "power2.out" }, 0.2);
      tl.to(
        cardItems,
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power2.out",
        },
        0.4,
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[150vh] overflow-hidden bg-gradient-to-b from-[#E3F2FD] to-[#BBDEFB]"
      aria-labelledby="airplane-heading"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <BrandLogoBackdrop />

        <svg
          className="pointer-events-none absolute inset-0 z-10 h-full w-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="airplane-contrail-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#F4A800" stopOpacity="0" />
              <stop offset="45%" stopColor="#F4A800" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F4A800" stopOpacity="0.35" />
            </linearGradient>
            <mask id="airplane-contrail-mask">
              <path
                ref={contrailRef}
                d="M500 1040 C 470 820, 505 640, 555 500 C 605 360, 590 240, 520 120"
                fill="none"
                stroke="white"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </mask>
          </defs>
          <path
            d="M500 1040 C 470 820, 505 640, 555 500 C 605 360, 590 240, 520 120"
            fill="none"
            stroke="url(#airplane-contrail-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="8 6"
            mask="url(#airplane-contrail-mask)"
          />
        </svg>

        <div
          ref={headingRef}
          className="absolute left-1/2 top-[18%] z-20 w-[min(92vw,760px)] -translate-x-1/2 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-bs-ocean">
            Global pathways
          </p>
          <h2
            id="airplane-heading"
            className="mt-3 font-display text-[2.5rem] font-semibold leading-tight text-bs-navy"
          >
            Connecting Dreams Across Borders
          </h2>
          <p className="mt-3 text-base font-medium text-blue-600 sm:text-lg">
            Your destination, our expertise.
          </p>
        </div>

        <div
          ref={planeRef}
          className="absolute bottom-[-100px] z-30 h-[70px] w-[180px] will-change-transform"
          style={{ left: "calc(50% - 90px)" }}
        >
          <AirplaneSvg />
        </div>

        <div
          ref={cardsRef}
          className="absolute left-1/2 top-1/2 z-20 grid w-[min(92vw,620px)] -translate-x-1/2 -translate-y-1/2 grid-cols-2 gap-4 sm:gap-5"
        >
          {STATS.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-white/80 border-t-4 border-t-bs-gold bg-white/90 p-4 text-center shadow-xl shadow-bs-ocean/10 backdrop-blur-md sm:p-5"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-bs-sky/10">
                <StatIcon type={stat.icon} />
              </div>
              <p className="mt-3 font-display text-3xl font-semibold text-bs-navy sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} active={countersActive} />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-600 sm:text-sm">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
