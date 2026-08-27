"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface UiverseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color1: string;
  color2: string;
  href: string;
}

export default function UiverseCard({ title, description, icon, color1, color2, href }: UiverseCardProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .uiverse-card-container {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          background: black;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }

        .uiverse-card-container::before {
          content: '';
          position: absolute;
          width: 200%;
          height: 200%;
          background-image: linear-gradient(180deg, ${color1}, ${color2});
          top: -50%;
          left: -50%;
          animation: rotBGimg 4s linear infinite;
          transition: all 0.2s linear;
          opacity: 0;
          z-index: -2;
        }

        .uiverse-card-container:hover::before {
          opacity: 1;
        }

        @keyframes rotBGimg {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .uiverse-card-container::after {
          content: '';
          position: absolute;
          background: #0f0f0f;
          inset: 3px;
          border-radius: 17px;
          z-index: -1;
        }
      `}} />
      
      <div className="uiverse-card-container group">
        <div className="p-8 h-full flex flex-col z-10 ">
          <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ color: color1 }}>
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">{description}</p>
          <Link href={href} className="text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto" style={{ color: color1 }}>
            Learn more <ArrowRight className="w-4 h-4"/>
          </Link>
        </div>
      </div>
    </>
  );
}
