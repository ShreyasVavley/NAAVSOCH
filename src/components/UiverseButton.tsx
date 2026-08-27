"use client";

import Link from "next/link";
import React from "react";

interface UiverseButtonProps {
  href: string;
  text: string;
}

export default function UiverseButton({ href, text }: UiverseButtonProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .uiverse-btn {
          --color: #407BFF;
          padding: 1rem 2rem;
          background-color: transparent;
          border-radius: 9999px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: .5s;
          font-weight: 700;
          font-size: 1.125rem;
          border: 1px solid var(--color);
          font-family: inherit;
          color: var(--color);
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .uiverse-btn::before, .uiverse-btn::after {
          content: '';
          display: block;
          width: 50px;
          height: 50px;
          transform: translate(-50%, -50%);
          position: absolute;
          border-radius: 50%;
          z-index: -1;
          background-color: var(--color);
          transition: 1s ease;
        }

        .uiverse-btn::before {
          top: -1em;
          left: -1em;
        }

        .uiverse-btn::after {
          left: calc(100% + 1em);
          top: calc(100% + 1em);
        }

        .uiverse-btn:hover::before, .uiverse-btn:hover::after {
          height: 410px;
          width: 410px;
        }

        .uiverse-btn:hover {
          color: black;
          transform: scale(1.05);
        }
        
        .uiverse-btn:active {
          filter: brightness(.8);
          transform: scale(0.95);
        }
      `}} />
      <Link href={href} className="uiverse-btn">
        {text}
      </Link>
    </>
  );
}
