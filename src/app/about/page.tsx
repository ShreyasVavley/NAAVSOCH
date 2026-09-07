"use client";

import { motion, Variants } from "framer-motion";
import { Check, X } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AboutPage() {
  return (
    <div className="w-full bg-transparent text-white min-h-screen font-sans selection:bg-naavsoch-gold/30 pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6">About Us</h1>
          <p className="text-xl text-white/60">We are an independent digital agency that builds bold, uncompromising brand experiences.</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0A0A0A] p-10 md:p-16 rounded-3xl border border-white/5 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-naavsoch-gold/5 blur-[80px] rounded-full pointer-events-none" />
          <h2 className="text-3xl font-bold mb-6 text-naavsoch-gold">Our Philosophy</h2>
          <p className="text-lg text-white/70 leading-relaxed mb-6">
            At Naavsoch Studio, we believe that great brands aren&apos;t just seen—they are felt. 
            We combine strategic thinking with premium design standards to craft digital experiences that leave a lasting impact.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            Our tagline <strong className="text-white">&quot;Your Ideas, Uncaged!&quot;</strong> reflects our commitment to taking your raw vision and engineering it into a scalable, high-performance business asset.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stat: "100+", label: "Projects Delivered" },
            { stat: "50+", label: "Brands Served" },
            { stat: "10+", label: "Years Combined Exp." },
            { stat: "24/7", label: "Client Support" }
          ].map((s, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#0A0A0A] border border-white/5 p-6 rounded-2xl text-center">
              <div className="text-3xl font-black text-naavsoch-blue mb-2">{s.stat}</div>
              <div className="text-xs text-white/50 uppercase tracking-widest">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* THE DIFFERENCE TABLE */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-24">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-bold mb-6">The Difference</p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.18] tracking-tight">
              Why Businesses<br/>
              Switch to <span className="text-naavsoch-gold">NaavSoch.</span>
            </h2>
          </div>

          <div className="bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[700px]">
                <thead>
                  <tr className="border-b border-white/5 bg-[#050505]">
                    <th className="py-6 px-8 text-[10px] tracking-[0.2em] text-white/40 font-medium uppercase w-1/3">Dimension</th>
                    <th className="py-6 px-8 text-[10px] tracking-[0.2em] font-medium uppercase w-1/3 text-white/40">
                      <div className="flex items-center gap-2">
                        <X className="w-3.5 h-3.5 text-red-500/80" /> Traditional Agency
                      </div>
                    </th>
                    <th className="py-6 px-8 text-[10px] tracking-[0.2em] text-naavsoch-gold font-medium uppercase w-1/3 border-l border-white/5">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5" /> NaavSoch
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { label: "Approach", bad: "Creates content", good: "Builds growth systems" },
                    { label: "Mindset", bad: "Works reactively", good: "Strategic first approach" },
                    { label: "Process", bad: "Uses templates", good: "Custom execution" },
                    { label: "Metric", bad: "Focuses on activity", good: "Focuses on outcomes" },
                    { label: "Structure", bad: "Multiple vendors", good: "One integrated partner" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-6 px-8 text-[10px] tracking-[0.2em] text-white/40 font-medium uppercase">{row.label}</td>
                      <td className="py-6 px-8 text-sm font-medium text-white/60">
                        <div className="flex items-center gap-3">
                          <X className="w-4 h-4 text-red-500/80 shrink-0" /> {row.bad}
                        </div>
                      </td>
                      <td className="py-6 px-8 text-sm font-medium text-white/90 border-l border-white/5 bg-white/[0.01]">
                        <div className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-green-500 shrink-0" /> {row.good}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
