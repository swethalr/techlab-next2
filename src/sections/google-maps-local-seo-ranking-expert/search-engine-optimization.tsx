"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, Link2, FileText, Layout, PenTool, Globe, Zap, Target , MapPin} from 'lucide-react';

const seoEngineData = [
  { id: 0, percentage: 60, title: "Google Maps Optimization", label: "DOMINANCE", desc: "Our Local Seo service enhances your visibility in map-based searches, placing your business on the map with complete, accurate information to attract local customers and drive in-store visits.", icon: <Map size={20}/>, angle: -90 },
  { id: 1, percentage: 5, title: "Building Backlings", label: "AUTHORITY", desc: "Through ethical, high-quality link-building strategies, we boost your authority & search ranking. Our manual outreach creates valuable, relevant backlinks to help your business achieve long-term search results.", icon: <Link2 size={20}/>, angle: -18 },
  { id: 2, percentage: 20, title: "Citation", label: "CONSISTENCY", desc: "We create and manage citations on top directories and local platforms to ensure consistent business information across the web, reinforcing local SEO efforts and improving your business’s online reputation.", icon: <FileText size={20}/>, angle: 54 },
  { id: 3, percentage: 10, title: "UI & UX", label: "PERFORMANCE", desc: "Our UI and UX services boost engagement with intuitive design, restructuring your site per SEO guidelines, enhancing performance, and creating local-targeted pages for better relevance, user experience, and visibility in specific areas.", icon: <Layout size={20}/>, angle: 126 },
  { id: 4, percentage: 5, title: "Manual Content Writing", label: "RELEVANCE", desc: "Our professional writers craft high-quality, unique content tailored to your audience and SEO needs, enhancing your brand's authority, driving organic traffic, and resonating with local search users for stronger engagement.", icon: <PenTool size={20}/>, angle: 198 }
];

const formula = [
    { value: 60, color: "#10b981", delay: 0 }, // GBP
    { value: 20, color: "#059669", delay: 0.2 }, // Citations
    { value: 10, color: "#064e3b", delay: 0.4 }, // UI/UX
    { value: 5, color: "#166534", delay: 0.6 }, // Backlinks
    { value: 5, color: "#14532d", delay: 0.8 }, // Reviews
  ];
const AwwwardsSEOEngine = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-[#050505] py-32 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden font-sans">

   <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>

      {/* High-Contrast Technical Grid */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] [background-size:100px_100px]" />

      {/* Header Architecture */}
      <div className="relative z-30 text-center mb-16 lg:mb-0 lg:absolute lg:top-20">
        <div className="flex items-center justify-center gap-3 mb-4">
          
        </div>
        <h2 className="h2 text-white tracking-tighter leading-none">
         Local
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-900"> Search Engine Optimization</span>
        </h2>
      </div>

      {/* DESKTOP ORBITAL VIEW */}
      <div className="relative w-full max-w-[1400px] h-[1400px] hidden lg:flex items-center justify-center">
        
        {/* THE CENTER PIECE: 3D PRISM */}
        <div className="relative w-64 h-64 z-20 flex items-center justify-center">
          {/* Decorative Outer Ring */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-40px] border border-emerald-500/10 rounded-full border-dashed" 
          />
          
          {/* THE 3D INTERACTIVE CORE */}
          <motion.div
            animate={{ rotate: seoEngineData[active].angle + 90 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative w-32 h-32 bg-emerald-500 rounded-none rotate-45 flex items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.4)]"
          >
            <div className="bg-black w-[90%] h-[90%] flex items-center justify-center -rotate-45">
               <Target className="text-emerald-500 animate-pulse" size={40} />
            </div>
          </motion.div>

          {/* LASER BEAM TO ACTIVE MODULE */}
          <motion.div 
            animate={{ rotate: seoEngineData[active].angle }}
            className="absolute w-[200px] h-[2px] bg-gradient-to-r from-emerald-500 to-transparent origin-left left-1/2"
          />
        </div>

        {/* CIRCULAR DATA MODULES */}
        {seoEngineData.map((item, idx) => {
          const radius = 420;
          const x = Math.cos((item.angle * Math.PI) / 180) * radius;
          const y = Math.sin((item.angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={item.id}
              onMouseEnter={() => setActive(idx)}
              style={{ x, y }}
              className={`absolute w-[380px] z-30 transition-all duration-500 cursor-pointer`}
            >
              <div className={`p-8 border-2 transition-all duration-500 ${
                active === idx ? 'bg-zinc-950 border-emerald-500 scale-110 shadow-2xl' : 'bg-black border-white/5 '
              }`}>
                <div className="flex justify-between items-center mb-4">
                  <div className={`p-2 rounded-none border ${active === idx ? 'border-emerald-500 text-emerald-500' : 'border-zinc-800 text-zinc-300'}`}>
                    {item.icon}
                  </div>
                  <Target className="text-emerald-500" size={32} />
                 {/*  <span className="text-emerald-500 font-mono font-black text-xl">{item.percentage}%</span>*/}
                </div>
                <h4 className="text-white font-bold text-lg mb-2 uppercase tracking-tighter">{item.title}</h4>
                <p className="text-zinc-300 text-[16px] leading-relaxed  ">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* MOBILE RESPONSIVE STACK */}
      <div className="flex lg:hidden flex-col gap-6 w-full max-w-xl z-30">
        <div className="w-full aspect-square flex items-center justify-center">
            <div className="w-32 h-32 bg-emerald-500 flex items-center justify-center rotate-45">
                <Target className="text-black -rotate-45" size={40} />
            </div>
        </div>
        {seoEngineData.map((item) => (
          <div key={item.id} className="p-8 bg-zinc-950 border-2 border-white/5">
             <div className="flex justify-between items-center mb-4">
               <span className="text-emerald-500 font-black text-xl">{item.percentage}%</span>
               <div className="text-zinc-700">{item.icon}</div>
             </div>
             <h4 className="text-white font-bold uppercase mb-2 tracking-tighter">{item.title}</h4>
             <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>


      



{/* 100/100 PREMIUM IMAGE WRAPPER */}
<div className="relative w-full max-w-[1400px] mx-auto py-20 px-6 overflow-hidden">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT: THE KINETIC BLUEPRINT (60% Width) */}
        <div className="lg:col-span-7 w-full h-[500px] bg-[#030303] border border-white/5 rounded-[3rem] relative flex items-center justify-center overflow-hidden">
          
          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] [background-size:40px_40px]" />
          
          {/* THE VISUAL STACK (No Text) */}
          <div className="relative z-10 w-full max-w-md space-y-4">
            {formula.map((item, i) => (
              <div key={i} className="relative flex items-center gap-6">
                {/* Dynamic Value Pulse */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2, delay: item.delay }}
                  className="w-12 text-right font-mono text-xl font-black italic text-white"
                >
                  {item.value}
                </motion.div>

                {/* The "Authority Bar" */}
                <div className="flex-1 h-12 bg-zinc-900/50 rounded-xl overflow-hidden border border-white/5   relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value + 30}%` }}
                    transition={{ duration: 2, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
                    style={{ backgroundColor: item.color }}
                    className="h-full relative shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                  >
                    {/* Interior Scan Line */}
                    <motion.div 
                      animate={{ x: ['-100%', '200%'] }} 
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" 
                    />
                  </motion.div>
                </div>
              </div>
            ))}

            {/* Orbiting Tech Nodes at the Base */}
            <div className="pt-8 flex justify-center gap-4">
               {[1, 2, 3].map(i => (
                 <motion.div 
                   key={i}
                   animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
                   transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                   className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_15px_#10b981]" 
                 />
               ))}
            </div>
          </div>
        </div>

        {/* RIGHT: THE RESULT TERMINAL (40% Width) */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <div className="relative group w-full max-w-[400px]">
            {/* Emerald Glow Aura */}
            <div className="absolute -inset-4 bg-emerald-500/10 blur-[80px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative p-2 bg-zinc-950 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden group-hover:border-emerald-500/40 transition-colors">
              {/* 2D Laser Scanner */}
              <motion.div 
                animate={{ top: ['0%', '100%'] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 h-[2px] bg-emerald-400 z-30 shadow-[0_0_15px_#10b981]" 
              />
              
              <img 
                src="/assets/images/best-seo-expert/dominate-ai-search-ranking.webp" 
                alt="Dominate ai search ranking" 
                className="w-full h-auto rounded-[2rem]  group-hover:opacity-100 transition-all duration-1000 grayscale-0 group-hover:grayscale-0"
              />

              {/* Verified Pulse Marker */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                 <div className="h-px w-24 bg-emerald-500/50" />
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
      
    </section>
  );
};

export default AwwwardsSEOEngine;