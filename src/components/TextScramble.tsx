"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CHARS = "!<>-_\\/[]{}—=+*^?#_";

export default function TextScramble({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;

    const startScramble = () => {
      setIsScrambling(true);
      clearInterval(interval);

      interval = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (letter === " ") return " ";
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsScrambling(false);
        }

        iteration += 1 / 3;
      }, 30);
    };

    startScramble();

    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
    </motion.span>
  );
}
