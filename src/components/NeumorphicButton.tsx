"use client";

import React from "react";
import Link from "next/link";

interface NeumorphicButtonProps {
  href: string;
  text: string;
  primary?: boolean;
}

export default function NeumorphicButton({ href, text, primary = false }: NeumorphicButtonProps) {
  return (
    <Link 
      href={href}
      className={`
        relative overflow-hidden  inline-flex items-center justify-center 
        px-10 py-5 rounded-full font-bold text-lg transition-all duration-300
        ${primary 
          ? "bg-neu-bg text-naavsoch-gold shadow-[8px_8px_16px_#131313,-8px_-8px_16px_#292929,inset_0_0_0_transparent] hover:shadow-[inset_8px_8px_16px_#131313,inset_-8px_-8px_16px_#292929] hover:text-yellow-300" 
          : "bg-neu-bg text-white shadow-neu-dark hover:shadow-neu-dark-pressed hover:text-white/80"
        }
      `}
    >
      {text}
    </Link>
  );
}
