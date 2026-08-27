"use client";

import Link from "next/link";
import React from "react";

interface UiverseButtonSecondaryProps {
  href: string;
  text: string;
}

export default function UiverseButtonSecondary({ href, text }: UiverseButtonSecondaryProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .uiverse-btn-sec {
          position: relative;
          padding: 1rem 2.5rem;
          border-radius: 9999px;
          background: black;
          color: white;
          font-weight: 700;
          font-size: 1.125rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .uiverse-btn-sec::before {
          content: "";
          position: absolute;
          top: -2px; left: -2px; right: -2px; bottom: -2px;
          background: linear-gradient(45deg, #407BFF, #3060E0, #739bf5, #407BFF);
          background-size: 400%;
          z-index: -1;
          border-radius: 9999px;
          animation: glowingBorder 8s linear infinite;
          opacity: 0.6;
          transition: opacity 0.3s ease-in-out, filter 0.3s ease-in-out;
        }

        .uiverse-btn-sec::after {
          content: "";
          position: absolute;
          inset: 2px;
          background: rgba(4, 8, 20, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 9999px;
          z-index: -1;
          transition: background 0.3s ease;
        }

        .uiverse-btn-sec:hover {
          transform: scale(1.05);
        }

        .uiverse-btn-sec:hover::before {
          opacity: 1;
          filter: blur(8px);
        }

        .uiverse-btn-sec:hover::after {
          background: rgba(4, 8, 20, 0.7);
        }

        @keyframes glowingBorder {
          0% { background-position: 0 0; }
          50% { background-position: 400% 0; }
          100% { background-position: 0 0; }
        }
      `}} />
      <Link href={href} className="uiverse-btn-sec">
        {text}
      </Link>
    </>
  );
}
