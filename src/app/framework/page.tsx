"use client";

import { motion } from "framer-motion";
import { Search, Compass, Sparkles, Hammer, Rocket } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import TiltCard from "@/components/TiltCard";

export default function FrameworkPage() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      icon: Search,
      color: "text-blue-500",
      dotColor: "bg-blue-500",
      items: ["Market Research", "Competitor Analysis", "Audience Insights", "Opportunity Identification"]
    },
    {
      num: "02",
      title: "Position",
      icon: Compass,
      color: "text-naavsoch-gold",
      dotColor: "bg-naavsoch-gold",
      items: ["Brand Strategy", "Messaging Architecture", "Market Differentiation", "Brand Positioning"]
    },
    {
      num: "03",
      title: "Create",
      icon: Sparkles,
      color: "text-blue-500",
      dotColor: "bg-blue-500",
      items: ["Content Systems", "Creative Assets", "Visual Identity", "Brand Experiences"]
    },
    {
      num: "04",
      title: "Build",
      icon: Hammer,
      color: "text-naavsoch-gold",
      dotColor: "bg-naavsoch-gold",
      items: ["Websites", "Landing Pages", "Funnels", "Growth Infrastructure"]
    },
    {
      num: "05",
      title: "Scale",
      icon: Rocket,
      color: "text-green-500",
      dotColor: "bg-green-500",
      items: ["Advertising", "Optimization", "Analytics", "Revenue Growth"]
    }
  ];

  return (
    <div className="w-full bg-transparent text-white min-h-screen font-sans pt-32 pb-32">
      <div className="container mx-auto px-4 max-w-[1400px]">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 mt-10"
        >
          <p className="text-[10px] md:text-xs tracking-[0.3em] text-naavsoch-gold font-bold uppercase mb-6">How We Work</p>
          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-black leading-[1.18] tracking-tight mb-8">
            The<br className="hidden md:block"/>
            <span className="text-blue-500">Process.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl">
            We don&apos;t guess. We follow a strict process to make sure your business actually grows. <span className="text-white">No fluff. Just execution.</span>
          </p>
        </motion.div>

        {/* 5-STEP TIMELINE */}
        <div className="relative">
          {/* Horizontal Connecting Line (Desktop Only) */}
          <div className="absolute top-[52px] left-[5%] right-[5%] h-px bg-white/5 hidden lg:block z-0" />
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-wrap justify-center gap-6 relative z-10"
          >
            {steps.map((step) => (
              <motion.div 
                key={step.num}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <TiltCard className="h-full">
                  <div className="h-full bg-[#0A0A0A] border border-white/5 rounded-[2rem] flex flex-col group hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
                    <SpotlightCard className="w-full h-full p-8 flex flex-col">
                      {/* Header: Icon & Big Number */}
                      <div className="flex items-center justify-between mb-10">
                        <div className="w-12 h-12 rounded-xl bg-black border border-white/5 flex items-center justify-center shadow-inner group-hover:bg-white/5 transition-colors relative z-10">
                          <step.icon className={`w-5 h-5 ${step.color}`} />
                        </div>
                        <span className="text-5xl font-black text-white/10 tracking-tight select-none">{step.num}</span>
                      </div>

                      <h3 className="text-2xl font-black tracking-tight mb-6">{step.title}</h3>
                      
                      <ul className="space-y-4">
                        {step.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm text-white/70">
                            <span className={`w-1.5 h-1.5 rounded-full ${step.dotColor}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </SpotlightCard>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
