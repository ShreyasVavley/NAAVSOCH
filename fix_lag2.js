const fs = require('fs');
let lp = fs.readFileSync('src/components/LandingPage.tsx', 'utf8');

lp = lp.replace('opacity-30 mix-blend-luminosity grayscale', 'opacity-20 grayscale');
lp = lp.replace('bg-[#407BFF] opacity-15 blur-[120px] rounded-full mix-blend-screen', 'bg-[#407BFF] opacity-10 blur-[100px] rounded-full');

// Replace Top Marquee
lp = lp.replace(
  '<motion.div \n            animate={{ x: ["0%", "-50%"] }} \n            transition={{ ease: "linear", duration: 15, repeat: Infinity }}\n            className="flex whitespace-nowrap text-5xl md:text-8xl font-black tracking-tighter"\n          >',
  '<div className="flex whitespace-nowrap text-5xl md:text-8xl font-black tracking-tighter animate-[marquee_15s_linear_infinite]">'
);
// It was motion.div, so we need to replace the closing tag too.
// Let's just find the exact block and replace the whole thing.
