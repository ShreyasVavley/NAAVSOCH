"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "A standard digital transformation or website project takes 4-8 weeks depending on the complexity of the requirements and the speed of feedback."
    },
    {
      question: "Do you offer post-launch support and maintenance?",
      answer: "Absolutely. We offer dedicated retainer packages that cover security updates, performance monitoring, new feature rollouts, and ongoing technical support."
    },
    {
      question: "How do you integrate AI into your workflow?",
      answer: "We use proprietary AI agents for rapid prototyping, deep market research, and content structuring. This allows our senior designers and engineers to focus strictly on high-level strategic execution and pixel-perfect quality."
    },
    {
      question: "Can you handle complex e-commerce architectures?",
      answer: "Yes, we specialize in high-performance, headless e-commerce builds using frameworks like Next.js, Shopify Plus, and custom backend APIs."
    }
  ];

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
      {faqs.map((faq, index) => {
        const isActive = activeIndex === index;
        return (
          <div 
            key={index} 
            className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isActive ? 'bg-[#0A0A0A] border-white/20' : 'bg-[black] border-white/5 hover:border-white/10'}`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <h3 className={`text-lg md:text-xl font-bold transition-colors ${isActive ? 'text-white' : 'text-white/80'}`}>
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: isActive ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${isActive ? 'bg-naavsoch-blue text-white' : 'bg-white/5 text-white/50'}`}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-6 pb-6 text-white/60 leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
