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
          <Link href="/" className="flex items-center gap-3 xl:gap-4 relative z-50 group shrink-0">
            <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-[black] rounded-lg md:rounded-xl xl:rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden shadow-inner">
              <Image src="/logo-v2.png" alt="Naavsoch Studio Logo" width={40} height={40} className="object-contain opacity-90 group-hover:scale-110 transition-transform duration-500 w-6 h-6 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />
            </div>
            <div className="hidden lg:flex items-center gap-1.5 xl:gap-2 font-serif text-base xl:text-xl tracking-wider xl:tracking-widest">
              <span className="font-normal text-white">NAAVSOCH</span>
              <span className="font-light text-white/50">STUDIOS</span>
            </div>
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

            {/* Mobile Hamburger Toggle */}
            <button 
              className="lg:hidden p-3 text-white relative z-50 rounded-full bg-white/5 border border-white/10"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Dropdown Nav */}
      <div className={`lg:hidden fixed inset-0 bg-[black] z-40 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'} flex flex-col items-center justify-center gap-8`}>
        {links.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            onClick={() => setIsOpen(false)}
            className={`text-2xl font-bold tracking-widest uppercase transition-colors hover:text-white ${pathname === link.href ? 'text-white' : 'text-white/60'}`}
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-8" onClick={() => setIsOpen(false)}>
           <Link href="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#407BFF] to-[#3060E0] text-white font-bold tracking-wide hover:brightness-110 shadow-lg shadow-blue-500/20 transition-all">Start Project</Link>
        </div>
      </div>
    </>
  );
}
