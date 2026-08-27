"use client";

import { useRef, useState } from "react";
import { motion, Variants, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import TextReveal from "./TextReveal";
import Link from "next/link";
import { 
  Film, PlayCircle
} from "lucide-react";
import UiverseButton from "./UiverseButton";
import UiverseButtonSecondary from "./UiverseButtonSecondary";
import MagneticButton from "./MagneticButton";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
};

const wordAnimation = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.4 }
  }),
};

export default function LandingPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const work = [
    { title: "Premium Showroom", subtitle: "Showroom Digital Transformation", category: "WEBSITE", img: "/durge_sales.jpg" },
    { title: "Luxury Interiors", subtitle: "Interiors Brand Identity", category: "BRANDING", img: "/home_world.jpg" },
    { title: "Timber Supplier", subtitle: "B2B Growth Campaign", category: "PERFORMANCE MARKETING", img: "/sri_laxmi.jpg" },
    { title: "Architectural Doors", subtitle: "Product Awareness Campaign", category: "SOCIAL MEDIA", img: "/suraksha_doors.jpg" },
    { title: "Industrial Retailer", subtitle: "Industrial Brand Refresh", category: "BRANDING", img: "/dev_electricals.jpg" }
  ];

  const reels = [
    { title: "Premium product hero films", category: "PRODUCT REELS", img: "/durge_sales.jpg" },
    { title: "Showroom & space storytelling", category: "INTERIOR REELS", img: "/home_world.jpg" },
    { title: "Identity-led brand films", category: "BRANDING REELS", img: "/sri_laxmi.jpg" },
    { title: "Sale, launch & event spots", category: "PROMOTIONAL REELS", img: "/suraksha_doors.jpg" },
    { title: "Founder & customer stories", category: "STORYTELLING REELS", img: "/dev_electricals.jpg" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-white selection:bg-naavsoch-gold/30 font-sans">
      
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-b from-black to-[black]">
        
        {/* Background Image with Parallax */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
          <Image 
            src="/hero.jpg" 
            alt="Hero Background" 
            fill 
            className="object-cover opacity-20 grayscale" 
            priority
          />
          {/* Dark gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[black]" />
        </motion.div>

        {/* Soft Ambient Radial Glow */}
        <motion.div style={{ y: bgY, opacity: bgOpacity }} className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] opacity-20 rounded-full" style={{ background: "radial-gradient(circle, rgba(64,123,255,1) 0%, rgba(64,123,255,0) 70%)" }} />
        </motion.div>
        
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.div style={{ y: textY, scale: textScale }} initial="hidden" animate="visible">
            
            {/* Staggered text reveal for Hero */}
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-black mb-6 leading-[0.9] tracking-tighter flex flex-wrap justify-center overflow-hidden">
              {["We", "Build", "Brands"].map((word, i) => (
                <motion.span key={i} custom={i} variants={wordAnimation} className="inline-block mr-4 md:mr-8 mb-2">
                  {word}
                </motion.span>
              ))}
              <div className="w-full h-0" />
              {["People"].map((word, i) => (
                <motion.span key={i + 3} custom={i + 3} variants={wordAnimation} className="inline-block mr-4 md:mr-8">
                  {word}
                </motion.span>
              ))}
              <motion.span custom={4} variants={wordAnimation} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#407BFF] to-[#3060E0]">
                Remember.
              </motion.span>
            </h1>

            <motion.p custom={5} variants={wordAnimation} className="text-lg md:text-xl text-white/60 mb-4 max-w-2xl mx-auto font-light tracking-widest uppercase">
              Strategy. Creativity. Technology. Growth.
            </motion.p>

            <motion.p custom={6} variants={wordAnimation} className="text-base md:text-lg text-white/40 mb-12 max-w-2xl mx-auto tracking-wide">
              We help ambitious brands build authority, attract customers and scale through branding, content, websites and performance.
            </motion.p>
            
            <motion.div custom={7} variants={wordAnimation} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
              <MagneticButton><UiverseButton text="Start Your Project" href="/contact" /></MagneticButton>
              <MagneticButton><UiverseButtonSecondary text="View Our Work" href="/work" /></MagneticButton>
            </motion.div>

            {/* Social Proof Metrics */}
            <motion.div custom={7} variants={wordAnimation} className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 text-white/60 font-bold uppercase tracking-widest text-xs md:text-sm">
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl text-white">100+</span>
                <span>Projects Delivered</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl text-white">50+</span>
                <span>Clients Scaled</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl text-white">24/7</span>
                <span>Dedicated Support</span>
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
            <span key={i} className="mx-4 text-white/5 hover:text-white/20 transition-colors duration-300">
              {text.split('✦').map((word: string, j: number, arr: string[]) => (
                <span key={j}>
                  {word}
                  {j < arr.length - 1 && <span className="text-white/10 mx-4">✦</span>}
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
          <TextReveal className="text-3xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tighter justify-center text-center">
            We don&apos;t just build websites. We engineer cinematic digital experiences that help brands grow.
          </TextReveal>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="py-12 bg-transparent relative z-10">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="bg-[#050505] border border-white/5 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-white/5">
              {[
                { num: "100+", text: "PROJECTS DELIVERED" },
                { num: "50+", text: "BRANDS SERVED" },
                { num: "500+", text: "REELS CREATED" },
                { num: "1000+", text: "CREATIVE ASSETS" },
                { num: "3+", text: "YEARS EXPERIENCE" },
                { num: "24/7", text: "SUPPORT SYSTEM" }
              ].map((stat, i) => (
                <div key={i} className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-blue-500">{stat.num}</h3>
                  <p className="text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] text-white/40 uppercase font-bold">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      {/* WORK SHOWCASE */}
      <section className="py-24 bg-transparent relative z-10">
        <div className="container mx-auto px-4 max-w-[1400px]">
          
          <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 gap-8">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-bold mb-6">Our Work</p>
              <h2 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
                Case <span className="text-naavsoch-gold">Studies.</span>
              </h2>
            </div>
            <p className="text-white/60 text-lg max-w-lg mb-2">
              Every project is a transformation story. Challenge &rarr; Strategy &rarr; Execution &rarr; Outcome.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-12">
            {["ALL", "BRANDING", "WEBSITE", "PERFORMANCE MARKETING", "SOCIAL MEDIA"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-[0.15em] transition-colors border border-white/10 ${
                  activeFilter === filter 
                    ? "bg-blue-500 text-white border-blue-500" 
                    : "bg-transparent text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
              {work
              .filter(item => activeFilter === "ALL" || item.category === activeFilter)
              .map((item) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={item.title}
                  className="group relative overflow-hidden rounded-[2rem] bg-[#0A0A0A] border border-white/5 aspect-[4/3] flex flex-col"
                >
                  <Image src={item.img} alt={item.title} fill className="object-cover transition-all duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[black] via-[black]/40 to-transparent opacity-90 transition-opacity duration-200 group-hover:opacity-80" />
                  
                  <div className="absolute top-6 left-6 z-10 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-naavsoch-gold uppercase">{item.category}</span>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                    <h3 className="text-3xl font-black mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-white/70 mb-6 text-sm">{item.subtitle}</p>
                    <Link href="/work" className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/80 hover:text-white flex items-center gap-2 group/link">
                      Read Story <span className="font-sans text-sm group-hover/link:translate-x-1 transition-transform">â†—</span>
                    </Link>
                  </div>
                </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
        </div>
      </section>

      {/* FEATURED REELS */}
      <section className="py-24 bg-transparent relative z-10 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-[1400px]">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Film className="w-4 h-4 text-naavsoch-gold" />
                <p className="text-[10px] tracking-[0.3em] text-naavsoch-gold uppercase font-bold">Featured Reels</p>
              </div>
              <h2 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
                Content That Moves<br className="hidden md:block" />
                <span className="text-blue-500">People.</span>
              </h2>
            </div>
            <p className="text-white/60 text-sm md:text-base lg:text-lg max-w-sm lg:text-right">
              Scroll-stopping reels engineered for retention, conversion and brand recall. From product hero films to founder stories.
            </p>
          </div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-16"
          >
            {reels.map((reel, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-[2rem] bg-[#0A0A0A] border border-white/5 aspect-[9/16] flex flex-col"
              >
                <Image src={reel.img} alt={reel.title} fill className="object-cover transition-all duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-black/60 transition-colors duration-200 group-hover:bg-black/30" />
                
                <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
                  <span className="text-[8px] font-bold tracking-[0.2em] text-blue-400 uppercase">{reel.category}</span>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white transition-all duration-300">
                    <PlayCircle className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                  <h3 className="text-lg md:text-xl font-black tracking-tight leading-tight text-white">{reel.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="flex justify-center">
            <MagneticButton>
              <Link href="/contact" className="px-8 py-4 bg-naavsoch-gold text-black rounded-full font-bold text-sm tracking-wide hover:bg-white transition-colors flex items-center gap-3">
                <Film className="w-4 h-4" />
                Get Your Reels Made
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

    </div>
  );
}
