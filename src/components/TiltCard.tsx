"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TiltCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches || 'ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the card center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Convert to rotation degrees (max 10 degrees)
    const multiplier = 15;
    setRotateX(-(y / (rect.height / 2)) * multiplier);
    setRotateY((x / (rect.width / 2)) * multiplier);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setRotateX(0);
    setRotateY(0);
  };

  if (isMobile) {
    return <div className={`w-full ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 800, damping: 30, mass: 0.1 }}
      style={{ perspective: 1000 }}
      className={`relative w-full ${className}`}
    >
      <div className="w-full h-full pointer-events-none">
        {children}
      </div>
    </motion.div>
  );
}
