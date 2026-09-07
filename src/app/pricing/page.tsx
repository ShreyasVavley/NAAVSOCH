"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function PricingPage() {
  const topCards = [
    {
      tag: "BRANDING SYSTEMS",
      title: "Custom Proposal",
      sub: "SCOPED TO YOUR BRAND",
      desc: "Identity systems, brand strategy and visual language for ambitious businesses.",
      bullets: ["Brand strategy workshop", "Logo & identity system", "Visual guidelines", "Packaging & collateral", "Launch support"],
      btnText: "Request Proposal ↗",
      btnLink: "/contact",
      isPopular: false
    },
    {
      tag: "WEBSITE & DIGITAL SYSTEMS",
      title: "Custom Proposal",
      sub: "BY PROJECT COMPLEXITY",
      desc: "High-performance websites, landing pages and e-commerce — engineered to convert.",
      bullets: ["Custom design & dev", "Mobile-first, fast load", "SEO foundations", "Lead routing + WhatsApp", "Ongoing maintenance"],
      btnText: "Request Proposal ↗",
      btnLink: "/contact",
      isPopular: false
    },
    {
      tag: "SOCIAL MEDIA GROWTH",
      title: "Monthly Retainer",
      sub: "ONGOING PARTNERSHIP",
      desc: "Daily content, visual design and community growth — your full social engine.",
      bullets: ["Strategy & content calendar", "Video & media production", "Design & captions", "Community management", "Monthly performance review"],
      btnText: "Most Picked ↗",
      btnLink: "/contact",
      isPopular: true
    }
  ];

  const bottomCards = [
    {
      tag: "PERFORMANCE MARKETING",
      title: "Custom Scope",
      sub: "AD SPEND + MANAGEMENT",
      desc: "Meta & Google ads engineered for measurable ROI and qualified leads.",
      bullets: ["Audience research", "Creative production", "Campaign management", "Retargeting funnels", "Weekly reporting"],
      btnText: "Request Proposal ↗",
      btnLink: "/contact"
    },
    {
      tag: "GROWTH PARTNERSHIP",
      title: "Tailored Engagement",
      sub: "FULL-STACK RETAINER",
      desc: "End-to-end partnership — strategy, content, ads, web and brand under one roof.",
      bullets: ["Dedicated brand team", "Quarterly strategy sprints", "All services bundled", "Founders on speed-dial", "Long-horizon roadmap"],
      btnText: "Talk to Founders ↗",
      btnLink: "/contact"
    }
  ];

  interface CardData {
    tag: string;
    title: string;
    sub: string;
    desc: string;
    bullets: string[];
    btnText: string;
    btnLink: string;
    isPopular?: boolean;
  }

  const Card = ({ data }: { data: CardData }) => (
    <motion.div
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={fadeUp} 
      className={`relative p-8 md:p-10 rounded-3xl flex flex-col h-full bg-[#0A0A0A] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] ${data.isPopular ? 'border border-naavsoch-gold/40 hover:border-naavsoch-gold/80' : 'border border-white/5 hover:border-white/15'}`}
    >
      {data.isPopular && (
        <div className="absolute -top-4 right-8 bg-naavsoch-gold text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-2">
          <span>★</span> MOST POPULAR
        </div>
      )}
      
      <div className={`text-[9px] font-bold tracking-[0.3em] uppercase mb-6 ${data.isPopular ? 'text-white/60' : 'text-white/40'}`}>
        {data.tag}
      </div>
      
      <h3 className="text-3xl font-black mb-2 tracking-tight">{data.title}</h3>
      <div className={`text-[10px] tracking-[0.2em] font-medium uppercase mb-6 ${data.isPopular ? 'text-white/50' : 'text-white/40'}`}>
        {data.sub}
      </div>
      
      <p className="text-white/60 mb-10 text-sm leading-relaxed">
        {data.desc}
      </p>
      
      <ul className="space-y-4 mb-12 flex-grow">
        {data.bullets.map((bullet: string, idx: number) => (
          <li key={idx} className="flex items-start gap-4 text-sm text-white/80">
            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${data.isPopular ? 'bg-naavsoch-gold' : 'bg-blue-500'}`} /> 
            {bullet}
          </li>
        ))}
      </ul>
      
      <div className="w-full mt-auto">
        <Link 
          href={data.btnLink} 
          className={`w-full py-4 rounded-2xl font-medium text-sm flex items-center justify-center transition-all duration-300 ${
            data.isPopular 
              ? 'bg-naavsoch-gold text-black hover:bg-white' 
              : 'bg-[#111111] text-white border border-white/5 hover:border-white/20 hover:bg-[#1A1A1A]'
          }`}
        >
          {data.btnText}
        </Link>
      </div>
    </motion.div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-white font-sans pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-20 mt-10">
          <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-bold mb-6">Engagement Models</p>
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-black mb-6 leading-[1.18] tracking-tight">
            Built Around <span className="text-blue-500">Your<br className="hidden md:block" />Brand.</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Every brand is different. Every engagement is scoped to fit. Pick the shape of partnership that matches where you are.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {topCards.map((card, i) => (
            <Card key={i} data={card} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {bottomCards.map((card, i) => (
            <Card key={i + 3} data={card} />
          ))}
        </div>

        <p className="text-center text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] text-white/30 font-bold uppercase mb-32">
          Every engagement begins with a strategy conversation. No templates, no surprises.
        </p>

        {/* HONEST NOTE */}
        <div className="py-24 border-t border-white/5 mt-10">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.3em] text-naavsoch-gold uppercase font-bold mb-6 flex items-center justify-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full border border-naavsoch-gold flex items-center justify-center text-[8px]">!</span> HONEST NOTE
            </p>
            <h2 className="text-5xl md:text-7xl font-black leading-[1.18] tracking-tight">
              We May Not Be the<br/>
              <span className="text-[#FF6B6B]">Right Fit</span> If...
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-32">
            {[
              "You only want the cheapest option",
              "You expect overnight results",
              "You don't value strategy",
              "You micromanage design",
              "You are not ready to scale",
              "You see marketing as a cost, not investment"
            ].map((text, i) => (
              <motion.div 
                key={i} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#0A0A0A] border border-white/5 p-6 rounded-2xl flex items-center gap-4"
              >
                <div className="w-6 h-6 rounded-full border border-[#FF6B6B]/30 flex items-center justify-center shrink-0">
                  <span className="text-[#FF6B6B] text-[10px] font-black font-sans">✕</span>
                </div>
                <span className="text-sm text-white/90 font-medium">{text}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-black leading-tight tracking-tight">
              We work best with businesses serious about building long-term value.
            </h3>
          </div>
        </div>

        {/* FAQ ACCORDION */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-white/60">Everything you need to know about working with us.</p>
          </div>
          <FaqAccordion />
        </div>
      </div>
    </div>
  );
}
