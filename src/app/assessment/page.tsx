"use client";

import { useState } from "react";
import { motion, AnimatePresence,  } from "framer-motion";
import { ChevronRight, Target, Activity, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const questions = [
  {
    category: "Brand",
    q: "Does your brand visually look like a premium market leader compared to competitors?",
    options: ["Yes, absolutely.", "Somewhat, but it needs an update.", "No, we blend in with the rest."]
  },
  {
    category: "Positioning",
    q: "Is it immediately clear to a visitor why they should choose you over a cheaper alternative?",
    options: ["Yes, our value proposition is dialed in.", "Sort of, we explain it if they ask.", "No, we struggle to communicate our unique value."]
  },
  {
    category: "Website",
    q: "Is your website a high-converting digital asset, or just an online brochure?",
    options: ["High-converting, it generates leads automatically.", "It's okay, but it could be much better.", "It's just a brochure. It doesn't generate business."]
  },
  {
    category: "Content",
    q: "Are you consistently publishing high-quality, strategic content that builds authority?",
    options: ["Yes, our content engine is strong.", "We post occasionally when we have time.", "No, our social presence is weak or non-existent."]
  },
  {
    category: "Lead Generation",
    q: "Do you have a predictable, scalable system for acquiring new customers digitally?",
    options: ["Yes, we have campaigns running with clear ROI.", "We rely mostly on word-of-mouth and referrals.", "No, our digital lead flow is unpredictable."]
  }
];

export default function AssessmentPage() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const startQuiz = () => setStep(0);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateScore(newAnswers);
    }
  };

  const calculateScore = (finalAnswers: number[]) => {
    setStep(questions.length);
    setIsCalculating(true);
    
    // Simple scoring logic: index 0 = 20pts, index 1 = 10pts, index 2 = 0pts
    // Total possible: 100
    const totalScore = finalAnswers.reduce((acc, curr) => {
      if (curr === 0) return acc + 20;
      if (curr === 1) return acc + 10;
      return acc;
    }, 0);

    setTimeout(() => {
      setScore(totalScore);
      setIsCalculating(false);
    }, 600); // Fast calculation
  };

  return (
    <div className="w-full bg-[#020202] text-white min-h-screen font-sans selection:bg-naavsoch-gold/30 pt-32 pb-32 flex flex-col justify-center">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <AnimatePresence mode="wait">
          {/* INTRO SCREEN */}
          {step === -1 && (
            <motion.div 
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-naavsoch-gold/30 bg-naavsoch-gold/5 mb-8">
                <Target className="w-3.5 h-3.5 text-naavsoch-gold" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-naavsoch-gold uppercase">Proprietary Tool</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tighter">
                DIGITAL GROWTH <span className="text-blue-500">SCOREÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                Evaluate your brand&apos;s digital maturity across 5 critical dimensions: Brand, Positioning, Website, Content, and Lead Generation.
              </p>
              
              <button 
                onClick={startQuiz}
                className="group px-8 py-4 rounded-full bg-white text-black font-bold tracking-wide hover:bg-gray-200 transition-colors inline-flex items-center gap-3"
              >
                GET YOUR GROWTH ASSESSMENT
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[10px] uppercase tracking-widest text-white/30 mt-8 max-w-md mx-auto">
                Note: This is a strategic assessment designed to identify growth bottlenecks, not a scientific measurement.
              </p>
            </motion.div>
          )}

          {/* QUESTION SCREENS */}
          {step >= 0 && step < questions.length && (
            <motion.div 
              key={`question-${step}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-[#0A0A0A] border border-white/5 p-8 md:p-12 rounded-3xl"
            >
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-naavsoch-gold">
                  {questions[step].category}
                </span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-white/40">
                  {step + 1} / {questions.length}
                </span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-black leading-tight mb-10">
                {questions[step].q}
              </h2>

              <div className="flex flex-col gap-4">
                {questions[step].options.map((opt, i) => (
                  <button 
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className="w-full text-left p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all font-medium flex items-center justify-between group"
                  >
                    <span>{opt}</span>
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* CALCULATION / RESULT SCREEN */}
          {step === questions.length && (
            <motion.div 
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-[#0A0A0A] border border-white/5 p-8 md:p-16 rounded-3xl text-center relative overflow-hidden"
            >
              {isCalculating ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <Activity className="w-12 h-12 text-blue-500 animate-pulse mb-6" />
                  <h3 className="text-2xl font-bold mb-2">Analyzing your digital maturity...</h3>
                  <p className="text-white/50">Processing inputs against our growth benchmarks.</p>
                </div>
              ) : (
                <div className="relative z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
                  
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-blue-500 uppercase">Analysis Complete</span>
                  </div>

                  <h2 className="text-[10px] tracking-[0.3em] font-bold text-white/40 uppercase mb-4">Your Growth Score</h2>
                  <div className="text-8xl md:text-[120px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-8">
                    {score}<span className="text-4xl text-white/20">/100</span>
                  </div>

                  <div className="max-w-xl mx-auto mb-12">
                    {score! >= 80 ? (
                      <p className="text-lg text-white/80">Excellent foundation. You are positioned as a market leader. The next step is optimizing your funnels for maximum scale.</p>
                    ) : score! >= 50 ? (
                      <p className="text-lg text-white/80">You have momentum, but you are leaving money on the table due to friction in your positioning or digital systems.</p>
                    ) : (
                      <p className="text-lg text-white/80">Your digital ecosystem requires a complete strategic overhaul to remain competitive in today&apos;s landscape.</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/contact" className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold tracking-wide hover:bg-blue-700 transition-colors w-full sm:w-auto">
                      Discuss Your Results
                    </Link>
                    <button onClick={() => {setStep(-1); setAnswers([]);}} className="px-8 py-4 rounded-full border border-white/20 text-white font-bold tracking-wide hover:bg-white/5 transition-colors w-full sm:w-auto">
                      Retake Assessment
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
