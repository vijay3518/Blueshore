"use client";

import { motion } from "framer-motion";
import { FloatingPlane2D, FloatingStar2D } from "./AnimationKit";

export function UniqueVideoAnimation() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#07111f]">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-40 mix-blend-screen transition-opacity duration-1000 scale-105"
      >
        {/* Abstract futuristic blue/gold animation placeholder */}
        <source src="https://player.vimeo.com/external/450371454.sd.mp4?s=f52097e387c2688009d73d2a33c16641&profile_id=139" type="video/mp4" />
      </video>
      
      {/* Advanced Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#0a1f5c]/90 via-[#07111f]/60 to-transparent" />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(0deg,rgba(7,17,31,1),transparent_50%)]" />

      {/* Floating Elements for "Animation" feel */}
      <FloatingPlane2D className="absolute top-[20%] right-[20%] z-20 opacity-40" size={100} delay={0.5} />
      <FloatingStar2D className="absolute bottom-[25%] left-[15%] z-20 opacity-30" size={40} delay={1} color="#f4a800" />
      
      {/* Animated Rings/Circles for High-Tech Vibe */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="absolute h-[600px] w-[600px] rounded-full border border-white/5"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute h-[800px] w-[800px] rounded-full border border-white/10 border-dashed"
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main Content Overlay */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="flex h-32 w-32 items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_60px_rgba(244,168,0,0.15)] mb-10"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
            <div className="h-4 w-4 rounded-full bg-[#f4a800] animate-ping" />
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[10px] font-black uppercase tracking-[0.4em] text-[#f4a800]"
        >
          Visualizing Your Journey
        </motion.p>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl"
        >
          From application <br /> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4a800] to-[#ffc53d]">arrival</span>.
        </motion.h3>
        
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 120 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mt-12 h-[2px] bg-gradient-to-r from-transparent via-[#f4a800] to-transparent"
        />
      </div>
    </div>
  );
}
