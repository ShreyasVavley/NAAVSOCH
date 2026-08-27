"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
        <div className="w-[600px] h-[600px] bg-naavsoch-gold rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="w-[500px] h-[500px] bg-naavsoch-blue rounded-full mix-blend-screen filter blur-[100px] absolute translate-x-32 -translate-y-32"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          Uncage Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-naavsoch-gold to-yellow-200">Ideas</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-foreground/80 max-w-2xl"
        >
          Naavsoch Studio is a creative storytelling platform where imagination meets reality. Explore interactive tales, cinematic experiences, and uncaged creativity.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex gap-4 pt-4"
        >
          <Link href="#stories" className="group flex items-center gap-2 bg-naavsoch-gold text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors">
            Explore Stories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
