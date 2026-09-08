"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(64, 123, 255, 0.16)",
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch(
      typeof window !== "undefined" &&
        (window.innerWidth < 1024 || "ontouchstart" in window || navigator.maxTouchPoints > 0)
    );
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isTouch || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    [isTouch]
  );

  const handleMouseEnter = useCallback(() => {
    if (!isTouch) setOpacity(1);
  }, [isTouch]);

  const handleMouseLeave = useCallback(() => {
    if (!isTouch) setOpacity(0);
  }, [isTouch]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      {!isTouch && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
          style={{
            opacity,
            background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 65%)`,
          }}
        />
      )}
      <div className="relative z-20 w-full h-full">
        {children}
      </div>
    </div>
  );
}
