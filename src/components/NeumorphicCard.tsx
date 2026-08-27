"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface NeumorphicCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  href: string;
}

export default function NeumorphicCard({ title, description, icon, color, href }: NeumorphicCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="w-full h-full relative  [perspective:1000px]"
    >
      <div 
        className="w-full h-full p-8 rounded-3xl bg-neu-bg shadow-neu-dark flex flex-col items-start transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
        style={{ transform: "translateZ(30px)" }}
      >
        <div 
          className="w-16 h-16 rounded-2xl bg-neu-bg shadow-neu-dark-sm flex items-center justify-center mb-8 transition-all duration-300 group-hover:shadow-neu-dark-pressed-sm"
          style={{ color: color, transform: "translateZ(50px)" }}
        >
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-white" style={{ transform: "translateZ(40px)" }}>{title}</h3>
        <p className="text-white/60 text-base leading-relaxed mb-8 flex-grow" style={{ transform: "translateZ(30px)" }}>{description}</p>
        
        <Link 
          href={href} 
          className="mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neu-bg shadow-neu-dark-sm font-bold text-sm transition-all duration-300 hover:shadow-neu-dark-pressed-sm hover:text-white"
          style={{ color: color, transform: "translateZ(40px)" }}
        >
          Learn more <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
