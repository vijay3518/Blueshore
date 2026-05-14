"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const SUCCESS_CLIPS = [
  { 
    id: 1, 
    title: "Strategic Audit", 
    video: "https://player.vimeo.com/external/403209357.sd.mp4?s=8435d8866509f6e1f37e408544e31e5f085734e5&profile_id=139", 
    poster: "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    id: 2, 
    title: "Profile Mapping", 
    video: "https://player.vimeo.com/external/370331493.sd.mp4?s=338d350a237583fc003d6d027b6f68c3&profile_id=139", 
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    id: 3, 
    title: "Admission Victory", 
    video: "https://player.vimeo.com/external/450371454.sd.mp4?s=f52097e387c2688009d73d2a33c16641&profile_id=139", 
    poster: "https://images.unsplash.com/photo-1523050853053-f69449019d53?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    id: 4, 
    title: "Visa Command", 
    video: "https://player.vimeo.com/external/482613045.sd.mp4?s=40428d0e74b5c777d12a76f281e05d050519302e&profile_id=139", 
    poster: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200" 
  },
];

export function SuccessRoadMarquee() {
  const infiniteClips = [...SUCCESS_CLIPS, ...SUCCESS_CLIPS];

  return (
    <div id="success" className="relative h-full w-full overflow-hidden bg-[#07111f] scroll-mt-28">
      {/* Cinematic Film Strip Mask */}
      <div className="absolute inset-x-0 top-0 z-20 h-48 bg-gradient-to-b from-[#07111f] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-20 h-48 bg-gradient-to-t from-[#07111f] to-transparent" />
      
      <motion.div
        animate={{ y: [0, -1400] }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }
        }}
        className="flex flex-col gap-0"
      >
        {infiniteClips.map((clip, idx) => (
          <div 
            key={`${clip.id}-${idx}`}
            className="group relative aspect-[16/10] w-full overflow-hidden border-b border-white/5"
          >
            {/* Primary Visual: High-Contrast Premium Asset */}
            <div className="absolute inset-0 bg-[#07111f]">
              <img 
                src={clip.poster} 
                alt={clip.title}
                className="h-full w-full object-cover opacity-35 transition-transform duration-1000 group-hover:scale-110"
              />
            </div>

            {/* Secondary Visual: Cinematic Video Overlay */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 z-10 h-full w-full object-cover mix-blend-screen opacity-50 transition-all duration-1000 group-hover:opacity-80"
            >
              <source src={clip.video} type="video/mp4" />
            </video>
            
            {/* Deep Luminous Overlay */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#07111f] via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-12 left-12 z-30">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f4a800]">
                Success Milestone
              </p>
              <p className="mt-3 font-display text-4xl font-bold tracking-tight text-white">
                {clip.title}
              </p>
            </div>

            {/* Industrial Overlay */}
            <div className="absolute inset-0 z-40 pointer-events-none border-[20px] border-transparent transition-all duration-700 group-hover:border-[#f4a800]/5" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
