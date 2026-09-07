"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export default function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  
  // Extract number and suffix (e.g., "100+" -> number: 100, suffix: "+", "24/7" -> handled as string)
  const match = value.match(/^(\d+)(.*)$/);
  const targetNumber = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (!isInView || targetNumber === null) return;

    const duration = 1400; // 1.4s
    const startTime = performance.now();

    function updateCounter(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(easeOut * targetNumber!);
      
      setDisplayCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    const frameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, targetNumber]);

  if (targetNumber === null) {
    return <span ref={ref} className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {isInView ? displayCount : 0}{suffix}
    </span>
  );
}
