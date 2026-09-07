"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const links = [
    { href: '/about', label: 'ABOUT' },
    { href: '/services', label: 'SERVICES' },
    { href: '/framework', label: 'FRAMEWORK' },
    { href: '/work', label: 'WORK' },
    { href: '/pricing', label: 'PRICING' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        className="fixed top-4 md:top-6 inset-x-0 z-[100] flex justify-center px-4 md:px-0"
      >
        <div className="w-full md:w-[95%] max-w-[1400px] bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full px-4 lg:px-5 xl:px-6 py-3 lg:py-3.5 xl:py-4 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
          
          {/* Left: Logo Lockup */}
          <Link href="/" className="flex items-center relative z-50 group shrink-0">
            <Image 
              src="/logo-horizontal.png" 
              alt="Naavsoch Studios" 
              width={260} 
              height={48} 
              priority
              className="h-7 sm:h-8 lg:h-9 xl:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>
          
          {/* Center: Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-10 justify-center shrink-0">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`relative text-[10px] xl:text-[11px] font-medium tracking-[0.2em] transition-all duration-300 hover:text-white hover:-translate-y-0.5 whitespace-nowrap ${pathname === link.href ? 'text-white' : 'text-white/50'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden lg:block">
               <Link href="/contact" className="px-6 py-3 xl:px-7 xl:py-3.5 rounded-full bg-gradient-to-r from-[#407BFF] to-[#3060E0] hover:brightness-110 hover:scale-105 active:scale-95 text-white transition-all duration-300 text-[13px] xl:text-[14px] font-bold tracking-wide shadow-lg shadow-blue-500/20 whitespace-nowrap">
                 Start Project
               </Link>
            </div>

            {/* Mobile Hamburger Toggle - 44px HIG target */}
            <button 
              className="lg:hidden w-11 h-11 text-white relative z-50 rounded-full bg-white/5 border border-white/10 flex items-center justify-center touch-manipulation active:scale-95 active:bg-white/15 transition-all"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Dropdown Nav */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'
        } flex flex-col items-center justify-center gap-6 px-6 pt-24 pb-12 overflow-y-auto`}
      >
        <div className="flex flex-col items-center gap-4 w-full max-w-xs">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className={`text-xl sm:text-2xl font-display tracking-[0.2em] uppercase transition-colors py-2 px-4 rounded-xl text-center w-full touch-manipulation ${
                pathname === link.href ? 'text-white bg-white/10' : 'text-white/60 hover:text-white hover:bg-white/5 active:bg-white/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-4 w-full max-w-xs" onClick={() => setIsOpen(false)}>
           <Link 
             href="/contact" 
             className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#407BFF] to-[#3060E0] text-white font-bold tracking-wide hover:brightness-110 shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center touch-manipulation active:scale-95"
           >
             Start Project
           </Link>
        </div>
      </div>
    </>
  );
}
