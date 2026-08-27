"use client";

export default function BrandMarquee() {
  const brands = [
    "TECHNOVA", "ELEVATE", "NEXUS", "LUMINA", "VANGUARD", 
    "HORIZON", "PULSE", "SYNERGY", "QUANTUM", "ZENITH"
  ];

  return (
    <div className="w-full bg-naavsoch-gold/5 border-y border-white/5 py-8 overflow-hidden flex whitespace-nowrap">
      <div className="animate-[marquee_30s_linear_infinite] flex gap-16 px-8 items-center">
        {[...brands, ...brands, ...brands].map((brand, i) => (
          <span key={i} className="text-xl md:text-2xl font-black tracking-widest text-white/20 uppercase">
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}
