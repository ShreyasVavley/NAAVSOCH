import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        }
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
