"use client";

import Link from "next/link";
import Image from "next/image";
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);


const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Footer() {
  return (
    <footer className="bg-transparent pt-20 pb-8 mt-auto border-t border-white/10 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Main Footer Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
        >
          
          {/* Column 1: Brand */}
          <motion.div variants={itemVariants} className="lg:pr-8">
            <Link href="/" className="flex items-center mb-6 group">
              <Image 
                src="/logo-horizontal.png" 
                alt="Naavsoch Studios Logo" 
                width={260} 
                height={48} 
                className="h-8 lg:h-10 w-auto object-contain group-hover:scale-105 transition-transform" 
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              We build brands that lead. Strategy, creativity, technology, and intelligence.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/naavsoch?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-white/70 hover:text-white" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Studio */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Studio</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/framework" className="hover:text-white transition-colors">Framework</Link></li>
              <li><Link href="/work" className="hover:text-white transition-colors">Our Work</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Services</h4>
            <ul className="space-y-4 text-sm text-white/60 flex flex-col">
              <Link href="/services" className="hover:text-white transition-colors">Website & Digital Systems</Link>
              <Link href="/services" className="hover:text-white transition-colors">Branding & Identity</Link>
              <Link href="/services" className="hover:text-white transition-colors">Social Media Management</Link>
              <Link href="/services" className="hover:text-white transition-colors">Performance Marketing</Link>
              <Link href="/services" className="hover:text-white transition-colors">Creative Production</Link>
              <Link href="/services" className="hover:text-white transition-colors">Business Growth Systems</Link>
              <Link href="/services" className="hover:text-white transition-colors">Local Business Growth</Link>
            </ul>
          </motion.div>

          {/* Column 4: Reach Out */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-xs">Reach Out</h4>
            <ul className="space-y-4 text-sm text-white/60 mb-8">
              <li>
                <a href="mailto:workatnaavsoch@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                  workatnaavsoch@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919663382836" className="hover:text-white transition-colors flex items-center gap-2">
                  +91 9663382836
                </a>
              </li>
            </ul>
            <div className="pt-6 border-t border-white/10">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#407BFF] to-[#3060E0] text-white font-bold text-xs rounded-full uppercase tracking-widest hover:brightness-110 shadow-lg shadow-blue-500/20 transition-all">
                Start Project
              </Link>
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs font-medium text-white/40">
          <p>&copy; {new Date().getFullYear()} NAAVSOCH STUDIOS. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button - Optimized for Android & iOS */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[90] group">
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
        <a 
          href="https://wa.me/919663382836" 
          target="_blank" 
          rel="noreferrer" 
          aria-label="Chat with us on WhatsApp"
          className="relative bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold p-3.5 sm:py-3 sm:px-5 rounded-full flex items-center justify-center gap-2 shadow-xl shadow-[#25D366]/20 transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation min-w-[48px] min-h-[48px]"
        >
          <WhatsappIcon className="w-5 h-5 fill-current shrink-0" />
          <span className="hidden sm:inline text-sm font-bold tracking-wide">Chat with us</span>
        </a>
      </div>
    </footer>
  );
}
