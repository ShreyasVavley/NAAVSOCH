"use client";

export default function AtmosphericBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
      {/* Deep Black base with Smoky Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/80 to-black opacity-90" />
      
      {/* Liquid Smoke Orbs (Optimized with CSS Animation & Radial Gradients instead of CSS Blur) */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full opacity-60 animate-[float_25s_linear_infinite]"
        style={{
          background: 'radial-gradient(circle, rgba(15,15,15,1) 0%, rgba(15,15,15,0) 70%)'
        }}
      />
      
      <div
        className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full opacity-50 animate-[floatReverse_30s_linear_infinite]"
        style={{
          background: 'radial-gradient(circle, rgba(20,20,20,1) 0%, rgba(20,20,20,0) 70%)'
        }}
      />

      <div
        className="absolute top-[20%] left-[20%] w-[60vw] h-[60vw] rounded-[40%_60%_70%_30%] opacity-20 animate-[spinSlow_40s_linear_infinite]"
        style={{
          background: 'radial-gradient(circle, rgba(26,26,26,1) 0%, rgba(26,26,26,0) 70%)'
        }}
      />

      {/* Translucent Swirling Ring Patterns (Optimized) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] rounded-[45%_55%_65%_35%] border-[1px] border-white/5 opacity-50 animate-[spin_20s_linear_infinite]"
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] md:w-[100vw] md:h-[100vw] rounded-[55%_45%_35%_65%] border-[2px] border-white/5 opacity-40 animate-[spinReverse_25s_linear_infinite]"
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160vw] h-[160vw] md:w-[120vw] md:h-[120vw] rounded-[35%_65%_55%_45%] border-[1px] border-white/10 opacity-30 animate-[spin_30s_linear_infinite]"
      />

      {/* Cinematic Film Grain Overlay (Optimized without SVG noise on mix-blend-overlay) */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />
    </div>
  );
}
