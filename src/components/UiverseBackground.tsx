"use client";

import React from "react";

export default function UiverseBackground() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .uiverse-bg-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-color: black;
          z-index: 0;
          overflow: hidden;
        }

        .uiverse-grid {
          position: absolute;
          inset: -50%;
          width: 200%;
          height: 200%;
          background-image: 
            linear-gradient(rgba(64, 123, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(64, 123, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          transform: perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px);
          animation: gridMove 10s linear infinite;
        }

        .uiverse-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(221,162,72,0.15) 0%, rgba(5,5,5,0) 70%);
          transform: translate(-50%, -50%);
          border-radius: 50%;
          pointer-events: none;
        }

        @keyframes gridMove {
          0% {
            transform: perspective(500px) rotateX(60deg) translateY(0) translateZ(-200px);
          }
          100% {
            transform: perspective(500px) rotateX(60deg) translateY(40px) translateZ(-200px);
          }
        }
      `}} />
      <div className="uiverse-bg-container">
        <div className="uiverse-grid"></div>
        <div className="uiverse-glow"></div>
      </div>
    </>
  );
}
