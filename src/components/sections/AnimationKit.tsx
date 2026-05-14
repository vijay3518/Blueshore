"use client";

import { motion, useInView, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/* ─── Staggered fade+slide reveal ─────────────────────────────── */
export function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale" | "diagonal" | "perspective" | "lens";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 48 : direction === "diagonal" ? 100 : 0,
      x: direction === "left" ? -60 : direction === "right" ? 60 : direction === "diagonal" ? 100 : 0,
      scale: direction === "scale" ? 0.88 : direction === "lens" ? 1.15 : 1,
      rotateY: direction === "perspective" ? -15 : 0,
      z: direction === "perspective" ? -100 : 0,
      filter: direction === "lens" ? "blur(12px)" : "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotateY: 0,
      z: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Word-by-word split text reveal ──────────────────────────── */
export function SplitTextReveal({
  text,
  className = "",
  wordClassName = "",
  stagger = 0.06,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`flex flex-wrap gap-x-[0.28em] gap-y-1 ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block ${wordClassName}`}
          initial={{ opacity: 0, y: 32, rotateX: -30, filter: "blur(6px)" }}
          animate={
            inView
              ? { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }
              : {}
          }
          transition={{
            duration: 0.65,
            delay: i * stagger,
            ease: [0.22, 1, 0.36, 1] as any,
          }}
          style={{ perspective: "600px", transformStyle: "preserve-3d" }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

/* ─── Animated number counter ──────────────────────────────────── */
export function CountUp({
  to,
  suffix = "",
  className = "",
  duration = 2.2,
}: {
  to: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      // ease out expo
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ─── Horizontal scroll marquee (infinite) ─────────────────────── */
export function InfiniteMarquee({
  items,
  speed = 35,
  className = "",
  itemClassName = "",
}: {
  items: string[];
  speed?: number;
  className?: string;
  itemClassName?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden>
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: [0, `-${50}%`] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span key={i} className={`shrink-0 ${itemClassName}`}>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}


/* ─── GSAP card stagger section ────────────────────────────────── */
export function StaggerCards({ children, className = "" }: { children: ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll("[data-stagger-card]");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60, scale: 0.94 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

/* ─── Horizontal line draw on scroll ──────────────────────────── */
export function DrawLine({ className = "", color = "#f4a800" }: { className?: string; color?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        className="h-[2px] w-full origin-left"
        style={{ background: color }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] as any }}
      />
    </div>
  );
}

/* ─── Magnetic hover button wrapper ───────────────────────────── */
export function MagneticButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 180, damping: 18 });
  const y = useSpring(0, { stiffness: 180, damping: 18 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ─── Floating 2D graduation cap SVG ──────────────────────────── */
export function FloatingCap2D({
  className = "",
  size = 64,
  delay = 0,
}: {
  className?: string;
  size?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
      animate={{
        y: [0, -18, 0],
        rotate: [-4, 4, -4],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        {/* Board */}
        <polygon points="32,6 62,22 32,38 2,22" fill="#0a1f5c" />
        {/* Highlight */}
        <polygon points="32,6 62,22 32,24 2,22" fill="#15265f" opacity="0.5" />
        {/* Cap */}
        <rect x="26" y="22" width="12" height="18" rx="2" fill="#0a1f5c" />
        {/* Gold tassel button */}
        <circle cx="32" cy="10" r="3.5" fill="#f4a800" />
        {/* Tassel string */}
        <line x1="32" y1="10" x2="44" y2="28" stroke="#f4a800" strokeWidth="2" strokeLinecap="round" />
        {/* Tassel end */}
        <circle cx="44" cy="30" r="4" fill="#f4a800" opacity="0.85" />
        {/* Shine */}
        <ellipse cx="22" cy="18" rx="5" ry="2" fill="white" opacity="0.12" transform="rotate(-20 22 18)" />
      </svg>
    </motion.div>
  );
}

/* ─── Floating 2D Airplane ─────────────────────────────────────── */
export function FloatingPlane2D({
  className = "",
  size = 48,
  delay = 0,
}: {
  className?: string;
  size?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
      animate={{ x: [0, 14, 0], y: [0, -10, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M4 24L44 8 36 24 44 40 4 24Z" fill="#1687d9" />
        <path d="M4 24L28 20 36 24 28 28 4 24Z" fill="#0a5fa0" />
        <path d="M20 24L36 18 40 24 36 30 20 24Z" fill="#1687d9" opacity="0.5" />
        <circle cx="38" cy="24" r="3" fill="#f4a800" />
      </svg>
    </motion.div>
  );
}

/* ─── Floating 2D Star ─────────────────────────────────────────── */
export function FloatingStar2D({
  className = "",
  size = 28,
  delay = 0,
  color = "#f4a800",
}: {
  className?: string;
  size?: number;
  delay?: number;
  color?: string;
}) {
  return (
    <motion.div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
      animate={{ y: [0, -12, 0], scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 3.5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <svg viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
      </svg>
    </motion.div>
  );
}

/* ─── Section with GSAP horizontal pinned scroll ─────────────── */
export function PinnedScrollSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const totalWidth = track.scrollWidth - track.offsetWidth;

    gsap.to(track, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${totalWidth}`,
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className={className}>
      <div ref={trackRef} className="flex will-change-transform">
        {children}
      </div>
    </div>
  );
}
/* ─── Wipe Reveal Section (Horizontal wipe) ──────────────────── */
export function WipeRevealSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const revealProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const clipPath = useTransform(revealProgress, (v) => `inset(0 ${100 - v}% 0 0)`);

  return (
    <div ref={sectionRef} className={`relative isolate overflow-hidden ${className}`}>
      {/* Content that gets revealed */}
      <motion.div style={{ clipPath }} className="relative z-10">
        {children}
      </motion.div>
      
      {/* Background/Shadow content that is always there (optional) */}
      <div className="absolute inset-0 -z-10 opacity-5 bg-[#07111f]/10" />
    </div>
  );
}
/* ─── Parallax Layer (Parallel Axis Scrolling) ───────────────── */
export function ParallaxLayer({
  children,
  speed = 0.2,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 50}%`, `-${speed * 50}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 h-[150%] w-full">
        {children}
      </motion.div>
    </div>
  );
}

/* ─── Hero Typewriter (Hover Pause) ────────────────────────── */
export function HeroTypewriter() {
  const fullText = "BlueShore Overseas";
  const [displayedText, setDisplayedText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2500); // Wait before deleting
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        } else {
          setTimeout(() => setIsDeleting(false), 500); // Wait before re-typing
        }
      }
    }, isDeleting ? 40 : 120);

    return () => clearTimeout(timeout);
  }, [displayedText, isHovered, isDeleting]);

  // Render "Blue" as blue if it's typed
  const bluePart = displayedText.slice(0, 4);
  const restPart = displayedText.slice(4);

  return (
    <span 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-default min-h-[1.2em] inline"
    >
      <span className="text-[#2196F3]">{bluePart}</span>
      <span className="whitespace-pre-wrap">{restPart}</span>
      <span className="ml-1 inline-block h-[0.85em] w-1.5 animate-pulse bg-[#2196F3] opacity-80 align-baseline relative top-[0.1em]" />
    </span>
  );
}
