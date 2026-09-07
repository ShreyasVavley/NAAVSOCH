"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Subtle top shimmer glow on route transition */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0.8 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#407BFF] to-transparent origin-left z-[110] pointer-events-none"
      />

      {/* High-performance GPU-accelerated page entrance */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-full relative z-10 flex-grow flex flex-col"
      >
        {children}
      </motion.div>
    </>
  );
}
