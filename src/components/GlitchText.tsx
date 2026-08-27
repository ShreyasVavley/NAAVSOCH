"use client";

import React from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .glitch-wrapper {
          position: relative;
          display: inline-block;
        }
        .glitch {
          position: relative;
          color: inherit;
          font-weight: 900;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: black;
        }
        .glitch::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        .glitch::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim2 5s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% { clip: rect(10px, 9999px, 86px, 0); }
          5% { clip: rect(61px, 9999px, 56px, 0); }
          10% { clip: rect(12px, 9999px, 73px, 0); }
          15% { clip: rect(8px, 9999px, 81px, 0); }
          20% { clip: rect(11px, 9999px, 12px, 0); }
          25% { clip: rect(31px, 9999px, 77px, 0); }
          30% { clip: rect(66px, 9999px, 89px, 0); }
          35% { clip: rect(34px, 9999px, 7px, 0); }
          40% { clip: rect(42px, 9999px, 90px, 0); }
          45% { clip: rect(11px, 9999px, 35px, 0); }
          50% { clip: rect(66px, 9999px, 96px, 0); }
          55% { clip: rect(2px, 9999px, 41px, 0); }
          60% { clip: rect(88px, 9999px, 93px, 0); }
          65% { clip: rect(24px, 9999px, 56px, 0); }
          70% { clip: rect(15px, 9999px, 81px, 0); }
          75% { clip: rect(81px, 9999px, 14px, 0); }
          80% { clip: rect(67px, 9999px, 84px, 0); }
          85% { clip: rect(89px, 9999px, 96px, 0); }
          90% { clip: rect(51px, 9999px, 18px, 0); }
          95% { clip: rect(93px, 9999px, 39px, 0); }
          100% { clip: rect(28px, 9999px, 79px, 0); }
        }
        @keyframes glitch-anim2 {
          0% { clip: rect(79px, 9999px, 84px, 0); }
          5% { clip: rect(30px, 9999px, 98px, 0); }
          10% { clip: rect(12px, 9999px, 35px, 0); }
          15% { clip: rect(61px, 9999px, 54px, 0); }
          20% { clip: rect(41px, 9999px, 45px, 0); }
          25% { clip: rect(8px, 9999px, 19px, 0); }
          30% { clip: rect(81px, 9999px, 49px, 0); }
          35% { clip: rect(69px, 9999px, 34px, 0); }
          40% { clip: rect(2px, 9999px, 91px, 0); }
          45% { clip: rect(88px, 9999px, 56px, 0); }
          50% { clip: rect(15px, 9999px, 81px, 0); }
          55% { clip: rect(67px, 9999px, 93px, 0); }
          60% { clip: rect(89px, 9999px, 96px, 0); }
          65% { clip: rect(24px, 9999px, 56px, 0); }
          70% { clip: rect(15px, 9999px, 81px, 0); }
          75% { clip: rect(81px, 9999px, 14px, 0); }
          80% { clip: rect(67px, 9999px, 84px, 0); }
          85% { clip: rect(89px, 9999px, 96px, 0); }
          90% { clip: rect(51px, 9999px, 18px, 0); }
          95% { clip: rect(93px, 9999px, 39px, 0); }
          100% { clip: rect(28px, 9999px, 79px, 0); }
        }
      `}} />
      <div className={`glitch-wrapper ${className}`}>
        <span className="glitch" data-text={text}>
          {text}
        </span>
      </div>
    </>
  );
}
