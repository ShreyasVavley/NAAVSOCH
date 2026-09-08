"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import TextReveal from "./TextReveal";
import UiverseButton from "./UiverseButton";
import MagneticButton from "./MagneticButton";
import AnimatedCounter from "./AnimatedCounter";
import ScrollReveal from "./ScrollReveal";
import StaggeredText from "./StaggeredText";

const wordAnimation = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.4 }
  }),
};

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-white selection:bg-naavsoch-gold/30 font-sans">
      
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 overflow-hidden bg-black">
        
        {/* Cinematic Backdrop Image - Desktop & Mobile */}
        <motion.div 
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          {/* Mobile Optimized Backdrop (9:16 Portrait) */}
          <Image 
            src="/hero-backdrop-mobile.jpg"
            alt="Hero Cinematic Backdrop Mobile"
            fill
            priority
            className="block md:hidden object-cover object-top opacity-55 select-none"
          />
          {/* Desktop Optimized Backdrop (16:9 Landscape) */}
          <Image 
            src="/hero-backdrop.jpg"
            alt="Hero Cinematic Backdrop Desktop"
            fill
            priority
            className="hidden md:block object-cover object-center opacity-45 select-none"
          />
          {/* Subtle Dark Vignette & Edge Blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/70 pointer-events-none" />
        </motion.div>

        {/* Minimalist Dot Matrix Pattern with Radial Fade Mask */}
        <motion.div 
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <div 
            className="w-full h-full opacity-15"
            style={{
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.25) 1.25px, transparent 1.25px)',
              backgroundSize: '32px 32px',
              maskImage: 'radial-gradient(ellipse 80% 65% at 50% 45%, black 20%, transparent 85%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 65% at 50% 45%, black 20%, transparent 85%)',
            }}
          />
        </motion.div>

        {/* Soft Ambient Center Radial Glow and Aurora */}
        <motion.div 
          style={{ opacity: bgOpacity }} 
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden"
        >
          <div 
            className="absolute w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] opacity-20 rounded-full blur-[100px] animate-aurora-1" 
            style={{ background: "radial-gradient(circle, rgba(64,123,255,0.8) 0%, rgba(64,123,255,0) 70%)", top: '20%', left: '10%' }} 
          />
          <div 
            className="absolute w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] opacity-20 rounded-full blur-[90px] animate-aurora-2" 
            style={{ background: "radial-gradient(circle, rgba(221,162,72,0.6) 0%, rgba(221,162,72,0) 70%)", bottom: '10%', right: '15%' }} 
          />
          <div 
            className="absolute w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] opacity-15 rounded-full blur-[120px] animate-aurora-3" 
            style={{ background: "radial-gradient(circle, rgba(48,96,224,0.7) 0%, rgba(48,96,224,0) 70%)", top: '30%', left: '40%' }} 
          />
        </motion.div>

        {/* Bottom Fade Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-0" />
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.div style={{ y: textY, scale: textScale }} initial="hidden" animate="visible">
            
            {/* Staggered text reveal for Hero */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-display font-bold mb-6 leading-[1.2] sm:leading-[1.15] tracking-tight flex flex-wrap justify-center overflow-hidden">
              {["We", "Build", "Brands"].map((word, i) => (
                <motion.span key={i} custom={i} variants={wordAnimation} className="inline-block mr-2 sm:mr-4 md:mr-8 mb-1 sm:mb-2">
                  {word}
                </motion.span>
              ))}
              <div className="w-full h-0 basis-full" />
              {["People"].map((word, i) => (
                <motion.span key={i + 3} custom={i + 3} variants={wordAnimation} className="inline-block mr-2 sm:mr-4 md:mr-8">
                  {word}
                </motion.span>
              ))}
              <motion.span custom={4} variants={wordAnimation} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#407BFF] to-[#3060E0]">
                Remember.
              </motion.span>
            </h1>

            <motion.div custom={6} variants={wordAnimation} className="text-sm sm:text-base md:text-lg text-white/50 mb-8 sm:mb-12 max-w-2xl mx-auto tracking-wide px-2 mt-6">
              <StaggeredText text="Most agencies sell you templates and vanity metrics. We act as your actual growth partner—building your brand, running your ads, and designing websites that make you money." className="justify-center" />
            </motion.div>
            
            <motion.div custom={7} variants={wordAnimation} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 w-full max-w-xs sm:max-w-none mx-auto">
              <MagneticButton><UiverseButton text="Start Your Project" href="/contact" /></MagneticButton>
            </motion.div>

            {/* Social Proof Metrics */}
            <motion.div custom={7} variants={wordAnimation} className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 text-white/60 font-bold uppercase tracking-widest text-xs md:text-sm">
              <div className="flex flex-col items-center gap-2">
                <AnimatedCounter value="100+" className="text-3xl text-white font-bold" />
                <span>Brands Launched</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <AnimatedCounter value="50+" className="text-3xl text-white font-bold" />
                <span>Businesses Grown</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <AnimatedCounter value="24/7" className="text-3xl text-white font-bold" />
                <span>Zero Outsourcing</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* INFINITE MARQUEE SECTION */}
      <section className="py-20 bg-transparent overflow-hidden border-y border-white/5 relative z-10 flex flex-col gap-6">
        
        {/* Top Marquee (Fast, Left) */}
        <div className="flex whitespace-nowrap text-5xl md:text-8xl font-black tracking-tighter animate-marqueeLeft">
          {Array(8).fill("DESIGN ✦ DEVELOP ✦ BRAND ✦ GROW ✦ SCALE ✦ ").map((text, i) => (
            <span key={i} className="mx-8 text-white">
              {text.split('✦').map((word: string, j: number, arr: string[]) => (
                <span key={j}>
                  {word}
                  {j < arr.length - 1 && <span className="text-naavsoch-blue mx-8">✦</span>}
                </span>
              ))}
            </span>
          ))}
        </div>

        {/* Bottom Marquee (Slow, Right) - Tool Stack */}
        <div className="flex whitespace-nowrap text-3xl md:text-5xl font-black tracking-tighter animate-marqueeRight">
          {Array(10).fill("FIGMA ✦ NEXT.JS ✦ VERCEL ✦ META ✦ STRIPE ✦ SHOPIFY ✦ FRAMER ✦ AWS ✦ ").map((text, i) => (
            <span key={i} className="mx-4 text-white/50 hover:text-white transition-colors duration-300">
              {text.split('✦').map((word: string, j: number, arr: string[]) => (
                <span key={j}>
                  {word}
                  {j < arr.length - 1 && <span className="text-blue-500 mx-4">✦</span>}
                </span>
              ))}
            </span>
          ))}
        </div>
        
        {/* Fading Edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[black] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[black] to-transparent z-10 pointer-events-none" />
      </section>

      {/* TEXT REVEAL SECTION */}
      <section className="py-32 bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <TextReveal className="text-3xl md:text-5xl lg:text-7xl font-display font-normal leading-tight tracking-tight justify-center text-center">
            We don&apos;t just build websites. We engineer cinematic digital experiences that help brands grow.
          </TextReveal>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="py-12 bg-transparent relative z-10">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <ScrollReveal>
            <div className="bg-[#050505] border border-white/5 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-white/5">
                {[
                  { num: "100+", text: "PROJECTS DELIVERED" },
                  { num: "50+", text: "BRANDS SERVED" },
                  { num: "500+", text: "CAMPAIGNS LAUNCHED" },
                  { num: "1000+", text: "CREATIVE ASSETS" },
                  { num: "3+", text: "YEARS EXPERIENCE" },
                  { num: "24/7", text: "SUPPORT SYSTEM" }
                ].map((stat, i) => (
                  <div key={i} className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-blue-500">
                      <AnimatedCounter value={stat.num} />
                    </h3>
                    <p className="text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] text-white/40 uppercase font-bold">{stat.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      


    </div>
  );
}
