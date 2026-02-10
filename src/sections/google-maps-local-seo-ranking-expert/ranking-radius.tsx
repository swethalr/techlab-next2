"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Search, Zap, Trophy, Target } from 'lucide-react';

const radarData = [
  { 
    id: 0, 
    title: "Business Proximity", 
    desc: "The closer a user is to a business, the more likely that business will rank higher. Google tends to show businesses that are geographically closer to the searcher.", 
    radius: "25%", 
    stats: "0-5 Miles", 
    icon: <MapPin size={20}/>,
    labelTop: "40%", // Positioned on the 1st ring
    labelRight: "40%"
  },
  { 
    id: 1, 
    title: "Search Intent", 
    desc: " If a search has a local intent (e.g., “dentist near me”), Google will prioritize showing results based on the user’s location, typically within a 5-20 km radius for city-based searches. In smaller towns, this radius can be larger.", 
    radius: "50%", 
    stats: "5-20 KM", 
    icon: <Search size={20}/>,
    labelTop: "30%", // Positioned on the 2nd ring
    labelRight: "30%"
  },
  { 
    id: 2, 
    title: "Local SEO Optimization", 
    desc: "The better optimized a business is for its local area (through NAP consistency, reviews, Google Business Profile optimizations, etc.), the wider the radius it can rank in. Highly authoritative profiles may rank beyond 20-30 km for broader keywords.", 
    radius: "75%", 
    stats: "20-30 KM", 
    icon: <Zap size={20}/>,
    labelTop: "20%", // Positioned on the 3rd ring
    labelRight: "20%"
  },
  { 
    id: 3, 
    title: "Market Dominance", 
    desc: " For highly competitive industries, the radius may shrink, and businesses might only rank within 1-5 km, while for less competitive sectors, it could extend up to 50+ km.", 
    radius: "100%", 
    stats: "50+ KM", 
    icon: <Trophy size={20}/>,
    labelTop: "10%", // Positioned on the 4th ring
    labelRight: "10%"
  }
];

const RankingRadar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-[#050505] py-24 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Background Grid for Technical Trust */}
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:60px_60px]" />
      
          {/*  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">*/}
          <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-8 items-center relative z-10">
              
            
        
       {/* LEFT: THE RADAR - Shifted for balance */}
<div className="lg:col-span-5 relative flex items-center justify-center lg:justify-start lg:-ml-5">
  
  {/* NEW: Inner Anchor Div that ensures all absolute children center on the Target */}
  <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
    
    {/* Static Concentric Rings */}
    {[25, 50, 75, 100].map((size) => (
      <div 
        key={size} 
        className="absolute rounded-full border border-emerald-500/10" 
        style={{ width: `${size}%`, height: `${size}%` }} 
      />
    ))}

    {/* Active Pulse - Perfectly centered */}
    <motion.div 
      initial={false}
      animate={{ 
        width: radarData[activeIndex].radius, 
        height: radarData[activeIndex].radius 
      }}
      className="absolute rounded-full bg-emerald-500/30 border border-emerald-500/40 backdrop-blur-[4px]"
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    />

    {/* Center Business Pin - The Anchor point */}
    <div className="z-30 relative">
      <div className="absolute -inset-8 bg-emerald-500/20 blur-3xl animate-pulse rounded-full" />
      <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.7)]">
        <Target className="text-black" size={32} />
      </div>
    </div>

    {/* Labels - Correctly positioned on the rings */}
    {radarData.map((item, idx) => (
      <motion.div
        key={item.id}
        animate={{ 
          opacity: activeIndex === idx ? 1 : 0.1,
          scale: activeIndex === idx ? 1.1 : 0.9 
        }}
        className="absolute z-40 flex flex-col items-center gap-1"
        style={{ top: item.labelTop, right: item.labelRight }}
      >
        <div className={`px-2 py-1 rounded text-[10px] font-black border tracking-tighter ${
          activeIndex === idx ? "bg-emerald-500 text-black border-emerald-400" : "bg-zinc-900 text-emerald-500"
        }`}>
          RANK #1 
        </div>
        <div className={`w-3 h-3 rounded-full ${activeIndex === idx ? "bg-emerald-400 shadow-[0_0_15px_#10b981]" : "bg-zinc-800"}`} />
      </motion.div>
    ))}
  </div>
</div>

        {/* RIGHT: THE CONTENT (Educational) */}
              {/*  <div className="flex flex-col  there is gap-6 ''''''bg-emarad-500 text-black border-emarald summan'''''gap-6">*/}
              <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-10">
          <div className="mb-4">
            
            <h3 className="h3 text-white tracking-tighter  leading-[0.9]  mb-6">
             Google Maps Ranking Radius for {' '}
              <span className="text-emerald-500">Local Keywords </span>
            </h3>
            <p className="text-zinc-400 p max-w-2xl">
             The radius within which a business or keyword ranks 1st on Google Maps (Google Business Profile) depends on several factors, including:
            </p>
          </div>

          <div className="grid gap-4">
            {radarData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`group relative w-full text-left p-6 rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
                  activeIndex === index 
                  ? 'bg-zinc-900 border-emerald-500/50 shadow-2xl translate-x-2' 
                  : 'bg-transparent border-white/5 opacity-1000 hover:opacity-100 hover:border-white/10'
                }`}
              >
                {/* Active Indicator Bar */}
                {activeIndex === index && (
                  <motion.div layoutId="activeBar" className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
                )}

                <div className="flex items-center gap-2">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    activeIndex === index 
                    ? 'bg-emerald-500 text-black rotate-3' 
                    : 'bg-zinc-800 text-emerald-500 group-hover:bg-zinc-700'
                  }`}>
                    {item.icon}
                  </div>
                  
                  <div className="flex-1"> 
                    <div className="flex justify-between items-center ">
                      <h4 className={`h4 font-bold transition-colors ${activeIndex === index ? 'text-emerald-400' : 'text-zinc-200'}`}>
                        {item.title}
                      </h4>
                      {/*  <span className={`text-lg font-mono font-bold ${activeIndex === index ? 'text-emerald-400' : 'text-zinc-200'}`}>
                        {item.stats}
                      </span>*/}
                    </div>
                    <p className={`text-[16px] leading-relaxed transition-colors ${activeIndex === index ? 'text-zinc-300' : 'text-zinc-300'}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
                </button>
                
            ))}
                      <p className="text-emerald-400 p mt-25">
                          Generally, Google Maps results for 1st rank tend to cover up to 10-20 km in urban areas and potentially 50+ km in rural or less competitive areas, but this can vary based on the specific optimization and user location.
                      </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankingRadar;