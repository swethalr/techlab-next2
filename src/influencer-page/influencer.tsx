"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * CINEMATIC EXPERIENCE: THE SINGULARITY
 * Concept: 0% Static. 100% Motion.
 * Focus: High-velocity SEO results
 */
export default function CinematicExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20
  });

  // Camera Zoom Logic: Everything flies toward the screen
  const scale1 = useTransform(smoothScroll, [0, 0.2], [0.5, 2]);
  const opacity1 = useTransform(smoothScroll, [0, 0.1, 0.2], [0, 1, 0]);
  
  const scale2 = useTransform(smoothScroll, [0.2, 0.4], [0.5, 2]);
  const opacity2 = useTransform(smoothScroll, [0.2, 0.3, 0.4], [0, 1, 0]);

  const scale3 = useTransform(smoothScroll, [0.4, 0.6], [0.5, 3]);
  const opacity3 = useTransform(smoothScroll, [0.4, 0.5, 0.6], [0, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* CINEMATIC BACKGROUND: VORTEX */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3cb8781a] via-transparent to-transparent opacity-50" />
        
        {/* SCENE 1: THE TRACK RECORD */}
        <motion.div 
          style={{ scale: scale1, opacity: opacity1 }}
          className="absolute flex flex-col items-center text-center"
        >
          <h2 className="h2 md:text-[10vw] font-black text-white leading-none uppercase italic">
            2,500+ <br /> <span className="text-[#3cb878]">PROJECTS</span>
          </h2>
          <p className="text-[#3cb878] font-mono tracking-[1em] mt-4">GLOBAL DOMINATION</p>
        </motion.div>

        {/* SCENE 2: THE SPEED */}
        <motion.div 
          style={{ scale: scale2, opacity: opacity2 }}
          className="absolute flex flex-col items-center text-center"
        >
          <h2 className="text-6xl md:text-[8vw] font-black text-white leading-none uppercase">
            800 LOCAL <br /> <span className="text-[#3cb878]">BUSINESSES</span>
          </h2>
          <p className="text-white/50 font-mono tracking-[0.5em] mt-4">RANKED IN 45 DAYS</p>
        </motion.div>

        {/* SCENE 3: THE RESULT */}
        <motion.div 
          style={{ scale: scale3, opacity: opacity3 }}
          className="absolute w-full max-w-4xl px-6"
        >
          <div className="relative border-y border-white/10 py-20 overflow-hidden">
            <h2 className="text-center text-5xl md:text-7xl font-light text-white leading-tight">
              FROM <span className="italic">INVISIBILITY</span> <br />
              TO THE <span className="text-[#3cb878] font-black">#1 SPOT</span>
            </h2>
          </div>
        </motion.div>

        {/* PERSISTENT NAVIGATION OVERLAY */}
        <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
           <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
             Zammy Zaif / VersaForge / 2026
           </div>
           <div className="h-[1px] flex-1 mx-10 bg-white/10 mb-1" />
           <div className="text-[10px] font-mono text-[#3cb878] uppercase tracking-widest">
             Scroll to Accelerate
           </div>
        </div>
      </div>
    </div>
  );
}