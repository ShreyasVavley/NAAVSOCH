"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  BarChart3, Palette, Camera, DoorClosed, Trees, Wrench, HardHat, ShoppingBag, Heart, Briefcase, Rocket, ChevronDown, Monitor, MapPin, Brain
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const services = [
  { 
    icon: Palette, 
    title: "Branding & Identity", 
    desc: "Strategic brand development that positions you as a market leader.", 
    list: ["Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines", "Packaging Design", "Naming & Positioning"] 
  },
  { 
    icon: Camera, 
    title: "Social Media & Content", 
    desc: "Complete social media management that builds engaged communities.", 
    list: ["Content Strategy", "Content Calendar", "Short-Form Video", "Static Posts", "Community Management", "Social Media Audits"] 
  },
  { 
    icon: Monitor, 
    title: "Web & Digital Systems", 
    desc: "High-performance web solutions that drive conversions and establish digital presence.", 
    list: ["Corporate Websites", "Landing Pages", "E-commerce Websites", "UI/UX Design", "SEO Foundations", "Website Maintenance"] 
  },
  { 
    icon: BarChart3, 
    title: "Performance Marketing", 
    desc: "Data-driven campaigns that deliver measurable ROI.", 
    list: ["Meta Ads", "Google Ads", "Lead Generation", "Conversion Optimization", "Retargeting Campaigns", "Analytics Reporting"] 
  },
  { 
    icon: Rocket, 
    title: "Creative Production", 
    desc: "Premium visual content that captures attention and drives engagement.", 
    list: ["Product Photography", "Product Videography", "Video Production", "Motion Graphics", "Promotional Films", "Corporate Videos"] 
  },
  { 
    icon: Briefcase, 
    title: "Business Growth Systems", 
    desc: "Automated systems that scale your business efficiently.", 
    list: ["CRM Setup", "Funnel Design", "WhatsApp Automation", "Email Marketing", "Lead Tracking", "Marketing Automation"] 
  },
  { 
    icon: MapPin, 
    title: "Local Business Growth", 
    desc: "Show up where your customers are searching — on Maps, search and reviews.", 
    list: ["Google Business Profile Optimization", "Local SEO", "Maps Ranking", "Review Management"] 
  },
  { 
    icon: Brain, 
    title: "AI & Intelligence", 
    desc: "Integrating AI into your marketing, content, and growth operations.", 
    list: ["AI Marketing Workflows", "Content Automation", "Predictive Analytics", "AI Conversational Agents", "Process Optimization"] 
  }
];

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    // Check if there is a hash in the URL on mount
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace('#', '');
      const targetIndex = services.findIndex(
        s => s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === targetId
      );
      if (targetIndex !== -1) {
        setOpenIndex(targetIndex);
        // Add a slight delay to allow rendering before scrolling
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            // Offset for fixed header
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 300);
      }
    }
  }, []);

  const toggleService = (i: number) => {
    if (openIndex === i) {
      setOpenIndex(null);
    } else {
      setOpenIndex(i);
    }
  };

  return (
    <div className="w-full bg-transparent text-white min-h-screen font-sans selection:bg-naavsoch-gold/30 pt-32 pb-32">
      <div className="container mx-auto px-4 max-w-[1400px]">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 mt-10 gap-8"
        >
          <div>
            <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-bold mb-6">Our Services</p>
            <h1 className="text-5xl md:text-7xl lg:text-[90px] font-black leading-[1.18] tracking-tight">
              A to Z Digital<br/>
              <span className="text-blue-500">Solutions.</span>
            </h1>
          </div>
          <p className="text-white/60 text-lg md:text-xl max-w-lg lg:pb-4">
            Everything your brand needs to dominate the digital landscape, executed under one premium roof.
          </p>
        </motion.div>

        {/* SERVICES ACCORDION */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="max-w-4xl mx-auto mb-32 space-y-4"
        >
          {services.map((srv, i) => (
            <motion.div 
              key={i} 
              id={srv.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
              variants={fadeUp}
              className={`bg-[#0A0A0A] border transition-all duration-300 rounded-3xl overflow-hidden ${openIndex === i ? 'border-blue-500/50 shadow-[0_0_30px_rgba(64,123,255,0.1)]' : 'border-white/5 hover:border-white/10'}`}
            >
              <button 
                onClick={() => toggleService(i)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${openIndex === i ? 'bg-blue-500 text-white shadow-[0_0_15px_rgba(64,123,255,0.4)]' : 'bg-black text-white/50 border border-white/5'}`}>
                    <srv.icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-xl md:text-3xl font-black transition-colors ${openIndex === i ? 'text-white' : 'text-white/80'}`}>
                    {srv.title}
                  </h3>
                </div>
                <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-blue-500' : 'text-white/30'}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-2">
                      <p className="text-white/60 mb-8 max-w-2xl text-lg">{srv.desc}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {srv.list.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span className="text-white/80 text-sm md:text-base">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* INDUSTRIES */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } }
          }}
        >
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-bold mb-6">Who We Help</p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.18] tracking-tight">
              Industries We <span className="text-naavsoch-gold">Dominate.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: DoorClosed, label: "Interiors & Decor" },
              { icon: Trees, label: "Timber & Wood" },
              { icon: Wrench, label: "Hardware" },
              { icon: HardHat, label: "Construction" },
              { icon: ShoppingBag, label: "Retail Brands" },
              { icon: Heart, label: "Healthcare" },
              { icon: Briefcase, label: "B2B Services" },
            ].map((ind, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                className="bg-[#0A0A0A] border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 hover:border-white/10 transition-colors"
              >
                <ind.icon className="w-6 h-6 text-white/40" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">{ind.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}