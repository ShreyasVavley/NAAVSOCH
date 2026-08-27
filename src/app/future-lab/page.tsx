"use client";

import { useState, useRef, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Sparkles, Send, Bot, User, BookOpen, BrainCircuit, Globe, Activity, TrendingUp, Target, Briefcase, Cpu } from "lucide-react";


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const articles = [
  { title: "AI Won't Replace Creative Thinking. It Will Change How We Use It.", cat: "AI & Marketing", readTime: "5 MIN READ" },
  { title: "Why Most Brands Are Forgettable.", cat: "Brand Psychology", readTime: "4 MIN READ" },
  { title: "The Next Generation of Business Websites.", cat: "Web & Technology", readTime: "6 MIN READ" },
  { title: "How Traditional Businesses Can Compete Digitally.", cat: "Digital Experiences", readTime: "7 MIN READ" }
];

const engineCategories = [
  { icon: Globe, title: "MARKET INTELLIGENCE", desc: "Industry retrends and opportunity discovery." },
  { icon: Target, title: "COMPETITOR INTELLIGENCE", desc: "Competitor analysis, positioning gaps and market opportunities." },
  { icon: Sparkles, title: "CONTENT INTELLIGENCE", desc: "Trend discovery, content opportunities and creative direction." },
  { icon: Briefcase, title: "BRAND INTELLIGENCE", desc: "Audience insights, messaging and positioning." },
  { icon: TrendingUp, title: "GROWTH INTELLIGENCE", desc: "Funnels, customer journeys and conversion opportunities." },
  { icon: Activity, title: "CAMPAIGN INTELLIGENCE", desc: "Campaign planning, creative analysis and optimization." }
];

const simulatedResponses: Record<string, string> = {
  "What will AI marketing look like next?": "The next wave of AI marketing moves beyond basic content generation to hyper-personalized, predictive customer journeys. AI will dynamically assemble websites, ads, and messaging in real-time based on the exact psychological profile of the user viewing it. Brands that use AI for strategy rather than just cheap execution will dominate.",
  "How can an interior brand become premium?": "Becoming premium is about reducing friction and increasing aesthetic authority. It requires: 1) A minimalist, cinematic visual identity. 2) Showcasing the 'process' behind the design, not just the final product. 3) Eliminating generic sales language in favor of editorial storytelling. 4) A frictionless digital experience that mirrors the feeling of walking into a luxury showroom.",
  "What digital opportunities exist for my business?": "Every traditional business currently has a 2-3 year window to out-position competitors who are slow to adopt modern digital systems. The biggest opportunities lie in: automated lead-nurturing funnels, short-form educational video content that builds founder authority, and transitioning from a 'brochure website' to a conversion-focused digital flagship.",
  "How is AI changing advertising?": "AI is shifting advertising from 'testing creatives' to 'testing concepts'. Machine learning now handles the media buying and bidding automatically. The competitive advantage is shifting entirely to creative strategy—using AI to rapidly prototype hooks, analyze competitor ad angles, and generate variations of winning concepts faster than a human team could."
};

export default function FutureLabPage() {
  const [prompt, setPrompt] = useState("");
  const [chatLog, setChatLog] = useState<{role: 'user' | 'ai', content: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatLog, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    setChatLog(prev => [...prev, { role: 'user', content: text }]);
    setPrompt("");
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = simulatedResponses[text] || "I'm an AI assistant in training. Please select one of the suggested prompts to see my capabilities in action, or contact our team to discuss your brand's future.";
      setChatLog(prev => [...prev, { role: 'ai', content: response }]);
      setIsTyping(false);
    }, 400);
  };

  const copyResponse = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const clearChat = () => {
    setChatLog([]);
  };

  return (
    <div className="w-full bg-[#020202] text-white min-h-screen font-sans selection:bg-naavsoch-gold/30 pt-32 pb-32">
      
      {/* 1. FUTURE LAB HEADER */}
      <section className="container mx-auto px-4 max-w-5xl mb-32">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center">
          <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-bold mb-6 flex items-center justify-center gap-2">
            <Cpu className="w-4 h-4 text-naavsoch-blue" />
            NAAVSOCH FUTURE LAB™
          </p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tighter">
            Ideas, Intelligence <br className="hidden md:block"/>
            <span className="text-naavsoch-blue">& What&apos;s Next.</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            We explore the technologies, behaviours and ideas shaping the future of brands.
          </p>
        </motion.div>
      </section>

      {/* 2. ASK FUTURE LAB (AI INTERFACE) */}
      <section className="container mx-auto px-4 max-w-4xl mb-40">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[600px]">
            
            {/* Chat Header */}
            <div className="p-4 border-b border-white/5 bg-[#050505] flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <BrainCircuit className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Ask Future Lab™</h3>
                  <p className="text-[10px] text-white/40 tracking-widest uppercase">AI Research Assistant</p>
                </div>
              </div>
              {chatLog.length > 0 && (
                <button onClick={clearChat} className="text-[10px] tracking-widest uppercase text-white/40 hover:text-white transition-colors">
                  Clear
                </button>
              )}
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 scrollbar-hide">
              {chatLog.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center opacity-50">
                  <Bot className="w-12 h-12 mb-4 text-white/20" />
                  <h4 className="text-xl font-bold mb-2">What do you want to explore?</h4>
                  <p className="text-sm max-w-md">Ask a question about the future of branding, marketing, or technology.</p>
                </div>
              ) : (
                <AnimatePresence>
                  {chatLog.map((msg, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {msg.role === 'ai' && (
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                          <Bot className="w-4 h-4 text-blue-500" />
                        </div>
                      )}
                      <div className={`p-4 rounded-2xl max-w-[85%] ${msg.role === 'user' ? 'bg-white/10 rounded-tr-sm text-sm' : 'bg-transparent border border-white/5 rounded-tl-sm text-sm leading-relaxed text-white/80'}`}>
                        {msg.content}
                        {msg.role === 'ai' && (
                          <div className="mt-4 pt-4 border-t border-white/5 flex gap-4">
                            <button onClick={() => copyResponse(msg.content)} className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white flex items-center gap-1">
                              Copy Response
                            </button>
                            <button onClick={() => handleSend(chatLog[i-1].content)} className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white flex items-center gap-1">
                              Regenerate
                            </button>
                          </div>
                        )}
                      </div>
                      {msg.role === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                          <User className="w-4 h-4 text-white/60" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 justify-start">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                        <Bot className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="p-4 bg-transparent border border-white/5 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Suggested Prompts */}
            {chatLog.length === 0 && (
              <div className="px-6 pb-2">
                <p className="text-[10px] tracking-widest text-white/30 uppercase mb-3 ml-2">Suggested Explorations</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.keys(simulatedResponses).map((q, i) => (
                    <button 
                      key={i} 
                      onClick={() => handleSend(q)}
                      className="text-xs bg-white/5 hover:bg-white/10 border border-white/5 px-3 py-2 rounded-lg transition-colors text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Box */}
            <div className="p-4 border-t border-white/5 bg-[#050505]">
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend(prompt)}
                  placeholder="What do you want to explore?" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-4 pr-12 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                />
                <button 
                  onClick={() => handleSend(prompt)}
                  disabled={!prompt.trim() || isTyping}
                  className="absolute right-2 w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:bg-white/10 disabled:text-white/40 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* 3. EDITORIAL ARTICLES */}
      <section className="container mx-auto px-4 max-w-6xl mb-40">
        <div className="mb-12 flex justify-between items-end border-b border-white/10 pb-6">
          <h2 className="text-3xl font-black tracking-tight">Editorial & Insights</h2>
          <div className="hidden md:flex gap-4">
            {["AI & Marketing", "Brand Psychology", "Social Media", "Digital Experiences", "Web & Technology", "Industry Intelligence"].map((cat, i) => (
              <span key={i} className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white cursor-pointer transition-colors">{cat}</span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((art, i) => (
            <motion.div 
              key={i} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeUp}
              className="group cursor-pointer"
            >
              <div className="h-64 bg-[#0A0A0A] border border-white/5 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-white/10 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="flex gap-4 items-center mb-3 text-[10px] tracking-widest uppercase font-bold text-naavsoch-gold">
                <span>{art.cat}</span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span className="text-white/40">{art.readTime}</span>
              </div>
              <h3 className="text-2xl font-bold leading-snug group-hover:text-blue-500 transition-colors">{art.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. NAAVSOCH INTELLIGENCE ENGINE */}
      <section className="container mx-auto px-4 max-w-6xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#050505] border border-white/5 rounded-[2rem] p-8 md:p-16 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-3xl mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">
              NAAVSOCH INTELLIGENCE ENGINE™
            </h2>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6 text-xs font-bold tracking-widest uppercase">
              <User className="w-3.5 h-3.5 text-white/60" /> Human Creativity
              <span className="text-blue-500">+</span>
              <Bot className="w-3.5 h-3.5 text-blue-500" /> AI Intelligence
            </div>
            <p className="text-white/60 text-lg leading-relaxed">
              Our internal AI-powered intelligence layer helps our team research faster, identify opportunities, develop stronger strategies and accelerate creative execution. We don&apos;t use AI to replace work—we use it to engineer better outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {engineCategories.map((cat, i) => (
              <div key={i} className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.02] transition-colors">
                <cat.icon className="w-6 h-6 text-blue-500 mb-6" />
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] mb-3 text-white/90">{cat.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>

        </motion.div>
      </section>

    </div>
  );
}
