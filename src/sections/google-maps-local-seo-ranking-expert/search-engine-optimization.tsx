"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, Link2, FileText, Layout, PenTool, Target, ChevronRight } from 'lucide-react';

const seoEngineData = [
  { id: 0, percentage: 60, title: "Google Maps Optimization", label: "FOUNDATION", desc: "The core engine of local dominance. We calibrate your profile to own the map 3-pack.", icon: <Map size={24}/>, color: "#10b981" },
  { id: 1, percentage: 20, title: "Building Backlinks", label: "AUTHORITY", desc: "High-tier manual outreach that forces Google to recognize your site as the leader.", icon: <Link2 size={24}/>, color: "#059669" },
  { id: 2, percentage: 10, title: "Citation Management", label: "TRUST", desc: "Surgical accuracy across directories to lock in your business's footprint.", icon: <FileText size={24}/>, color: "#047857" },
  { id: 3, percentage: 5, title: "UI & UX Optimization", label: "CONVERSION", desc: "Optimizing the path from click to customer with elite interface engineering.", icon: <Layout size={24}/>, color: "#065f46" },
  { id: 4, percentage: 5, title: "Manual Content", label: "RELEVANCE", desc: "Human-centric, SEO-mapped content that captures high-intent searchers.", icon: <PenTool size={24}/>, color: "#064e3b" }
];

const TopographicSEOEngine = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-[#020202] py-24 px-6 overflow-hidden min-h-screen flex flex-col items-center">
      {/* Precision Grid */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] [background-size:100px_100px]" />
      
      {/* Header Architecture */}
      <div className="relative z-30 text-center mb-16 mt-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Target className="text-emerald-500 animate-pulse" size={16} />
          <span className="text-emerald-500 font-black tracking-[0.8em] text-[10px] uppercase">Scientific Authority Protocol</span>
        </div>
        <h2 className="text-5xl md:text-[100px] font-black text-white tracking-tighter leading-[0.85] uppercase">
          Local Ranking <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-zinc-800">Visualizer</span>
        </h2>
      </div>

      <div className="relative w-full max-w-[1600px] h-[700px] flex items-center justify-center">
        
        {/* CENTER VISUAL: THE TOPOGRAPHIC MESH */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-[800px] h-[500px] rotate-x-60 -rotate-z-12">
            {/* The Wireframe Grid */}
            <div className="absolute inset-0 border border-emerald-500/20 [background-image:linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] [background-size:40px_40px]" />
            
            {/* Dynamic Ranking Peak */}
            <motion.div 
              animate={{ 
                height: [100, 250, 200],
                y: active === 0 ? -150 : -50,
                scale: active === 0 ? 1.5 : 1
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 w-40 bg-gradient-to-t from-emerald-500/0 via-emerald-500/40 to-emerald-400 blur-sm"
              style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_30px_#fff]" />
          </div>
        </div>

        {/* SURROUNDING CONTENT: DISTRIBUTED LAYOUT */}
        <div className="w-full h-full relative z-20">
            {/* LEFT SIDE MODULES */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
                {[seoEngineData[4], seoEngineData[3]].map((item) => (
                    <ModuleCard key={item.id} item={item} isActive={active === item.id} onHover={() => setActive(item.id)} />
                ))}
            </div>

            {/* RIGHT SIDE MODULES */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
                {[seoEngineData[1], seoEngineData[2]].map((item) => (
                    <ModuleCard key={item.id} item={item} isActive={active === item.id} onHover={() => setActive(item.id)} />
                ))}
            </div>

            {/* TOP CENTER - THE 60% ANCHOR */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <ModuleCard item={seoEngineData[0]} isActive={active === 0} onHover={() => setActive(0)} isMain />
            </div>
        </div>
      </div>
    </section>
  );
};

/* Module Component for Sharpness & Clarity */
const ModuleCard = ({ item, isActive, onHover, isMain = false }: any) => (
  <motion.div
    onMouseEnter={onHover}
    className={`relative group cursor-pointer p-8 transition-all duration-500 ${
        isMain ? 'w-[450px]' : 'w-[380px]'
    } ${isActive ? 'scale-105 opacity-100' : 'opacity-40 hover:opacity-100'}`}
  >
    {/* Clean border logic - No heavy blur */}
    <div className={`absolute inset-0 border-2 rounded-sm transition-colors ${
        isActive ? 'border-emerald-500 bg-zinc-950 shadow-[20px_20px_0px_#10b98110]' : 'border-white/5 bg-transparent'
    }`} />
    
    <div className="relative z-10 flex items-start gap-6">
      <div className={`w-14 h-14 flex items-center justify-center transition-all ${
          isActive ? 'bg-emerald-500 text-black shadow-[0_0_20px_#10b981]' : 'bg-zinc-900 text-zinc-500'
      }`}>
        {item.icon}
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-black tracking-[0.4em] text-emerald-500">{item.label}</span>
            <span className="text-2xl font-mono font-black text-white">{item.percentage}%</span>
        </div>
        <h4 className="text-xl font-bold text-white uppercase mb-2 leading-none">{item.title}</h4>
        <AnimatePresence>
            {isActive && (
                <motion.p initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} className="text-zinc-500 text-xs leading-relaxed">
                    {item.desc}
                </motion.p>
            )}
        </AnimatePresence>
      </div>
    </div>
  </motion.div>
);

export default TopographicSEOEngine;