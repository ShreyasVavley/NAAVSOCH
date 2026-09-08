import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-tenor)", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'naavsoch-gold': "var(--naavsoch-gold)",
        'naavsoch-blue': "var(--naavsoch-blue)",
        'neu-bg': '#1e1e1e',
      },
      boxShadow: {
        'neu-dark': '8px 8px 16px #131313, -8px -8px 16px #292929',
        'neu-dark-pressed': 'inset 8px 8px 16px #131313, inset -8px -8px 16px #292929',
        'neu-dark-sm': '4px 4px 8px #131313, -4px -4px 8px #292929',
        'neu-dark-pressed-sm': 'inset 4px 4px 8px #131313, inset -4px -4px 8px #292929',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.22', transform: 'scale(1)' },
          '50%': { opacity: '0.38', transform: 'scale(1.08)' },
        },
        'shimmer-sweep': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'aurora-blob': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'shimmer-sweep': 'shimmer-sweep 3s ease-in-out infinite',
        'aurora-1': 'aurora-blob 20s ease-in-out infinite',
        'aurora-2': 'aurora-blob 25s ease-in-out infinite reverse',
        'aurora-3': 'aurora-blob 30s ease-in-out infinite 2s',
      }
    },
  },
  plugins: [],
};
export default config;
