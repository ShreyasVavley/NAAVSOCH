"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

export default function TextReveal({ children, className = "" }: { children: string, className?: string }) {
  const container = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 85%", "end 50%"]
  });

  const words = children.split(" ");

  return (
    <p ref={container} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-[0.25em] mt-2">
      <span className="opacity-10">{children}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0 text-white">
        {children}
      </motion.span>
    </span>
  );
};
