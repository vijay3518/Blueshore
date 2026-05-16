"use client";

import { ButtonCelebration } from "@/components/ButtonCelebration";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { RevealOnScroll, MagneticButton } from "./AnimationKit";

const BLUEPRINT_CARDS = [
  { id: 1, country: "gb", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600", title: "UK G5 Roadmap", meta: "Russell Group Strategy" },
  { id: 2, country: "ca", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=600", title: "Canada SDS Path", meta: "Post-Grad Work Focus" },
  { id: 3, country: "au", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=600", title: "Australia Go8", meta: "Sandstone Uni Selection" },
  { id: 4, country: "de", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=600", title: "Germany Public", meta: "Zero-Tuition Strategy" },
  { id: 5, country: "us", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=600", title: "USA Ivy League", meta: "STEM & Research Track" },
  { id: 6, country: "ie", image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=600", title: "Ireland Tech Hub", meta: "Dublin Tech Corridor" },
  { id: 7, country: "nz", image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=600", title: "NZ Sustainability", meta: "Green Tech Research" },
  { id: 8, country: "fr", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600", title: "France Grande École", meta: "Paris Arts & Business" },
  { id: 9, country: "nl", image: "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?auto=format&fit=crop&q=80&w=600", title: "Dutch Research", meta: "Amsterdam Innovation" },
  { id: 10, country: "sg", image: "https://images.unsplash.com/photo-1529154036614-a60975f5c760?auto=format&fit=crop&q=80&w=600", title: "Singapore Global", meta: "Asia-Pacific Finance" },
  { id: 11, country: "se", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600", title: "Sweden Innovation", meta: "Stockholm STEM" },
  { id: 12, country: "ch", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=600", title: "Swiss Excellence", meta: "Hospitality & Finance" },
  { id: 13, country: "it", image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=600", title: "Italy Heritage", meta: "Milan Design Path" },
  { id: 14, country: "es", image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80&w=600", title: "Spain IESE Path", meta: "Barcelona Business" },
  { id: 15, country: "pl", image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&q=80&w=600", title: "Poland Medical", meta: "EU STEM Corridor" },
];

function Card({ card, index }: { card: typeof BLUEPRINT_CARDS[0]; index: number }) {
  // Create a subtle shift effect based on index
  const rotation = (index % 5 - 2) * 2;
  const yOffset = Math.abs(index % 5 - 2) * 10;

  return (
    <motion.div
      style={{ rotate: rotation, y: yOffset }}
      className="relative aspect-[4/5] w-64 shrink-0 overflow-hidden rounded-2xl bg-white p-4 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
    >
      <div className="relative h-[78%] w-full overflow-hidden rounded-xl bg-slate-50">
        <Image 
          src={card.image} 
          alt={card.title} 
          fill 
          className="object-cover transition-transform duration-700 hover:scale-105" 
          sizes="260px" 
        />
        <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/95 shadow-md backdrop-blur-md overflow-hidden border border-white/20">
          <Image
            src={`https://flagcdn.com/w80/${card.country}.png`}
            alt={`${card.country} flag`}
            width={80}
            height={60}
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="pt-5 text-center">
        <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#0c6b6a]">
          {card.meta}
        </p>
        <h4 className="mt-2 font-display text-[14px] font-bold leading-tight text-[#07111f]">
          {card.title}
        </h4>
      </div>
    </motion.div>
  );
}

export function BlueprintHeroSection() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Double the cards for infinite loop
  const infiniteCards = [...BLUEPRINT_CARDS, ...BLUEPRINT_CARDS];

  return (
    <section id="destinations" className="relative overflow-hidden bg-gradient-to-br from-[#f3f0ff] via-[#fdfdff] to-[#e0f2fe] py-32 sm:py-40 scroll-mt-28">
      {/* Ambient Lighting */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_70%)]" />
      
      <div className="mx-auto max-w-[100vw] overflow-hidden">
        {/* Infinite Draggable Carousel */}
        <div 
          className="relative mb-24 cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={{ left: -2000, right: 0 }}
            animate={isPaused ? {} : { x: [0, -1800] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              }
            }}
            className="flex gap-8 px-12 perspective-1000"
            style={{ width: "fit-content" }}
          >
            {infiniteCards.map((card, idx) => (
              <Card key={`${card.id}-${idx}`} card={card} index={idx} />
            ))}
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-4">
          <RevealOnScroll direction="up">
            <h2 className="mx-auto max-w-4xl font-display text-3xl font-bold tracking-tight text-[#07111f] sm:text-5xl lg:text-7xl">
              Just tell us where <br className="hidden sm:block" /> you want to go.
            </h2>
          </RevealOnScroll>
          
          <RevealOnScroll direction="up" delay={0.2}>
            <p className="mt-8 text-lg text-slate-500 sm:text-xl">
              BlueShore designs the custom education roadmap you need, instantly.
            </p>
          </RevealOnScroll>

          <div className="mt-12 flex justify-center">
            <RevealOnScroll direction="up" delay={0.4}>
              <MagneticButton>
                <Link 
                  href="/contact"
                  scroll={false}
                  className="btn-fx group relative flex h-16 items-center justify-center rounded-full bg-[#f4a800] px-12 text-sm font-black text-white shadow-[0_20px_50px_-10px_rgba(244,168,0,0.4)] transition hover:bg-[#d69300]"
                >
                  <span className="btn-fx-content">Let&apos;s Go</span>
                  <ButtonCelebration variant="wave" />
                </Link>
              </MagneticButton>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
