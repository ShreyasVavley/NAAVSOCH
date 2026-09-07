"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Template({ children }: { children: React.ReactNode }) {
  // Ultra-smooth easing curve
  const ease = [0.85, 0, 0.15, 1] as const;
  
  // 5x5 Grid
  const rows = 5;
  const cols = 5;

  return (
    <>
      {/* Geometric Grid Implosion Curtain */}
      <div className="fixed inset-0 z-[1000] pointer-events-none flex flex-col w-full h-full">
        
        {/* Center Logo */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-50"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 0, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.8, ease, delay: 0 }}
        >
          <Image 
            src="/logo-full.png" 
            alt="Naavsoch Logo" 
            width={200} 
            height={200} 
            className="w-40 h-40 md:w-52 md:h-52 object-contain opacity-95 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            priority
          />
        </motion.div>

        {[...Array(rows)].map((_, r) => (
          <div key={`row-${r}`} className="flex-1 flex w-full relative z-40">
            {[...Array(cols)].map((_, c) => {
              // Calculate distance from the center (r=2, c=2) to create a ripple effect
              const dist = Math.abs(2 - r) + Math.abs(2 - c);
              
              return (
                <motion.div
                  key={`cell-${r}-${c}`}
                  initial={{ scale: 1, opacity: 1, rotate: 0 }}
                  animate={{ scale: 0, opacity: 0, rotate: 90 }}
                  transition={{
                    duration: 0.8,
                    ease,
                    delay: dist * 0.08, // The center disappears first, rippling outward
                  }}
                  className="flex-1 h-full bg-[black] border border-white/5 relative"
                  style={{ transformOrigin: "center center" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#407BFF]/10 to-transparent opacity-30" />
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Page Content Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease, delay: 0.5 }}
        className="w-full relative z-10"
      >
        {children}
      </motion.div>
    </>
  );
}
