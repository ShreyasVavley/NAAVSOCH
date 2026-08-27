"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCounter({ 
  value, 
  suffix = "", 
  prefix = "" 
}: { 
  value: number, 
  suffix?: string, 
  prefix?: string 
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    mass: 1,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        // Format with 1 decimal if it's a small float, else integer
        const formatted = latest % 1 !== 0 && value < 10 
          ? latest.toFixed(1) 
          : Math.floor(latest).toString();
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix, value]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}
