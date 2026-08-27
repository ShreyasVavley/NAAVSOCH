"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating API call for demonstration of the Thank You experience
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 500);
  };

  return (
    <div className="w-full bg-[#020202] text-white min-h-screen font-sans selection:bg-naavsoch-gold/30 pt-40 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <AnimatePresence mode="wait">
          {!success ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
            >
              
              {/* Left Column: Contact Info */}
              <motion.div 
                initial="hidden" animate="visible" variants={staggerContainer} 
                className="flex flex-col justify-center"
              >
                <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tighter">
                  LET&apos;S BUILD SOMETHING <br/> <span className="text-blue-500">WORTH REMEMBERING.</span>
                </motion.h1>
                <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/60 font-light max-w-md mb-12 leading-relaxed">
                  We work best with businesses serious about building long-term value. LET&apos;S engineer your growth.
                </motion.p>

                <motion.div variants={fadeUp} className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 hover:border-blue-500/50 transition-colors">
                      <Mail className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Email</h4>
                      <a href="mailto:workatnaavsoch@gmail.com" className="text-lg font-bold hover:text-blue-500 transition-colors">workatnaavsoch@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10 hover:border-blue-500/50 transition-colors">
                      <Phone className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Phone</h4>
                      <a href="tel:+919663382836" className="text-lg font-bold hover:text-blue-500 transition-colors">+91 96633 82836</a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column: Form */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#0A0A0A] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        required 
                        placeholder="John Doe"
                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500/50 text-white placeholder:text-white/20 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        required 
                        placeholder="john@company.com"
                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500/50 text-white placeholder:text-white/20 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-white/40">Company Name</label>
                    <input 
                      type="text" 
                      name="company" 
                      id="company"
                      placeholder="Your Brand"
                      className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500/50 text-white placeholder:text-white/20 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-xs font-bold uppercase tracking-widest text-white/40">Primary Interest</label>
                    <div className="relative">
                      <select 
                        name="interest" 
                        id="interest" 
                        required
                        className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-4 appearance-none focus:outline-none focus:border-blue-500/50 text-white transition-colors"
                      >
                        <option value="" disabled selected>Select an area...</option>
                        <option value="Branding">Branding & Identity</option>
                        <option value="Web">Web & Digital Systems</option>
                        <option value="Social">Social Media Growth</option>
                        <option value="Ads">Performance Marketing</option>
                        <option value="FullStack">Full-Stack Growth Partnership</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-white/40">Project Details</label>
                    <textarea 
                      name="message" 
                      id="message" 
                      required 
                      rows={4}
                      placeholder="Tell us about your brand and what you're looking to achieve..."
                      className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500/50 text-white placeholder:text-white/20 transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold tracking-wide flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Request...
                      </span>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-3xl mx-auto bg-[#0A0A0A] border border-white/10 p-12 md:p-16 rounded-[2rem] text-center"
            >
              <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10 text-blue-500" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">THANK YOU FOR REACHING OUT.</h2>
              <p className="text-xl text-white/60 mb-12">We&apos;ll get back to you within 24 hours.</p>

              <div className="text-left bg-[#050505] border border-white/5 rounded-2xl p-8 max-w-lg mx-auto">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-naavsoch-gold mb-6">What Happens Next</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="text-blue-500 font-black">01</span>
                    <span className="text-white/80 font-medium">We review your requirements.</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-blue-500 font-black">02</span>
                    <span className="text-white/80 font-medium">We schedule a discovery conversation.</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-blue-500 font-black">03</span>
                    <span className="text-white/80 font-medium">We create a growth direction.</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-blue-500 font-black">04</span>
                    <span className="text-white/80 font-medium">Execution begins.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
