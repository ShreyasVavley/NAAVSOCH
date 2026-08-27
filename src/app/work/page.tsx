"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const outcomes = [
  {
    title: "Premium Showroom",
    subtitle: "SHOWROOM",
    points: ["Increased showroom visibility", "Consistent premium brand presence"],
    link: "/contact"
  },
  {
    title: "Luxury Interiors",
    subtitle: "INTERIORS",
    points: ["Stronger positioning in interiors segment", "Improved digital engagement"],
    link: "/contact"
  },
  {
    title: "Timber Supplier",
    subtitle: "TIMBER & WOOD",
    points: ["Better online visibility", "Consistent content ecosystem"],
    link: "/contact"
  },
  {
    title: "Architectural Doors",
    subtitle: "BUILDING MATERIALS",
    points: ["Stronger product awareness", "Premium product presentation"],
    link: "/contact"
  },
  {
    title: "Industrial Retailer",
    subtitle: "INDUSTRIAL RETAIL",
    points: ["Improved industrial branding", "Better digital communication"],
    link: "/contact"
  }
];

export default function WorkPage() {
  return (
    <div className="w-full bg-transparent text-white min-h-screen font-sans selection:bg-naavsoch-gold/30 pt-32 pb-32">
      <div className="container mx-auto px-4 max-w-[1400px]">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 mt-10"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <svg className="w-4 h-4 text-naavsoch-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <p className="text-[10px] md:text-xs tracking-[0.3em] text-naavsoch-gold font-bold uppercase">
              Outcomes That Matter
            </p>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-black leading-[1.05] tracking-tighter mb-8">
            Real Results.<br className="hidden md:block"/>
            <span className="text-blue-500">Real Businesses.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
            No vanity metrics. Measurable shifts in visibility, perception and consistent presence for the brands we partner with.
          </p>
        </motion.div>

        {/* OUTCOMES GRID */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {outcomes.map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col group hover:border-white/10 transition-colors relative"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-3xl font-black tracking-tight">{item.title}</h3>
                <span className="text-naavsoch-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </div>
              
              <p className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase mb-10">
                {item.subtitle}
              </p>
              
              <ul className="space-y-5 mb-12 flex-grow">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href={item.link} 
                className="w-full py-4 px-6 rounded-2xl border border-white/5 text-center text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 group-hover:text-white group-hover:bg-white/5 transition-all flex items-center justify-between"
              >
                <span>View Transformation</span>
                <span className="font-sans text-sm">↗</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
