"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide splash screen after 2.8 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  // To prevent scrolling while splash screen is active
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%", filter: "blur(10px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#07111f] overflow-hidden"
        >
          {/* Animated Background Elements */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.05 }}
            transition={{ duration: 2 }}
            className="absolute h-[800px] w-[800px] rounded-full border border-[#f4a800] border-dashed animate-[spin_30s_linear_infinite]" 
          />
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.03 }}
            transition={{ duration: 2, delay: 0.2 }}
            className="absolute h-[600px] w-[600px] rounded-full border-[10px] border-[#1687d9] animate-[spin_20s_linear_infinite_reverse]" 
          />
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Image Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative h-28 w-72 md:h-36 md:w-96"
            >
              <Image 
                src="/images/blueshore-logo-transparent.png" 
                alt="BlueShore Logo" 
                fill 
                className="object-contain drop-shadow-[0_0_20px_rgba(244,168,0,0.3)]" 
                priority
              />
            </motion.div>

            {/* Unique Text Animation */}
            <div className="mt-8 flex flex-col items-center">
              <div className="flex flex-col items-center text-center font-display font-black tracking-[0.2em] uppercase" style={{ perspective: "1000px" }}>
                
                {/* Top Line: BlueShore */}
                <div className="flex text-4xl md:text-6xl mb-3">
                  {"BlueShore".split("").map((char, index) => (
                    <motion.span
                      key={`blue-${index}`}
                      initial={{ 
                        opacity: 0, 
                        y: index % 2 === 0 ? -100 : 100, 
                        x: index % 3 === 0 ? -50 : 50, 
                        rotate: index % 2 === 0 ? -90 : 90, 
                        scale: 0.1, 
                        filter: "blur(12px)" 
                      }}
                      animate={{ opacity: 1, y: 0, x: 0, rotate: 0, scale: 1, filter: "blur(0px)" }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 250, 
                        damping: 12, 
                        mass: 0.8,
                        delay: 0.2 + index * 0.08 
                      }}
                      className="inline-block text-[#1687d9]"
                      style={{ textShadow: "0 0 20px rgba(22, 135, 217, 0.4)" }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom Line: Overseas */}
                <div className="flex text-3xl md:text-5xl">
                  {"Overseas".split("").map((char, index) => (
                    <motion.span
                      key={`over-${index}`}
                      initial={{ 
                        opacity: 0, 
                        y: index % 2 === 0 ? 100 : -100, 
                        x: index % 3 === 0 ? 50 : -50, 
                        rotate: index % 2 === 0 ? 90 : -90, 
                        scale: 0.1, 
                        filter: "blur(12px)" 
                      }}
                      animate={{ opacity: 1, y: 0, x: 0, rotate: 0, scale: 1, filter: "blur(0px)" }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 250, 
                        damping: 12, 
                        mass: 0.8,
                        delay: 0.3 + (index + 9) * 0.08 
                      }}
                      className="inline-block text-[#f4a800]"
                      style={{ textShadow: "0 0 20px rgba(244, 168, 0, 0.4)" }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Slogan */}
              <motion.p
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 2.0 }}
                className="mt-6 text-xs font-semibold tracking-[0.3em] text-white uppercase text-center md:text-sm drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              >
                Connecting Dreams Across Borders
              </motion.p>
              
              {/* Glowing Line */}
              <motion.div 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "280px", opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 2.3 }}
                className="mt-6 h-[2px] bg-gradient-to-r from-transparent via-[#1687d9] to-transparent shadow-[0_0_15px_rgba(22,135,217,0.9)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
