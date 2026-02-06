'use client';

import React from 'react';

export default function ClientReviews() {
  return (
    <section className="bg-[#dbffce] py-16 lg:py-24 relative overflow-hidden">
      {/* Container */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content Area */}
          <div className="w-full lg:w-[40%] text-center lg:text-left relative">
            <h4 className="h4 text-slate-900 mb-6">
              Happy Clients About Us
            </h4>
            <div className="w-16 h-1 bg-[#3cb878] mb-8 mx-auto lg:mx-0" />
            <p className="text-slate-900 p font-bold leading-tight tracking-tight">
              Read what our client say about our SEO services, our client support & other things.
            </p>

            {/* Megaphone Image Positioned Bottom Left of Text */}
            <div className="hidden lg:block absolute -bottom-15 -right-10 w-64">
              <img 
                src="/assets/images/google-ranking-services/testimonial2.png" 
                alt="Megaphone Illustration" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Review Card Area */}
          <div className="w-full lg:w-[60%] relative">
            {/* Avatar Speech Bubble Tip */}
            <div className="absolute -top-12 left-10 lg:left-20 z-20">
              
            </div>

            {/* Decorative Gear & Path (Top Right of Card) */}
            <div className="absolute -top-20 -right-4 lg:right-10 w-48 hidden md:block">
              <img 
                src="/assets/images/google-ranking-services/testimonial1.png" 
                alt="Decoration" 
                className="w-full h-auto"
              />
            </div>

            {/* The Review Card */}
            <div className="bg-slate-800 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
              <p className="text-white/90  leading-relaxed font-medium mb-10">
                Thank you for providing SEO services. My company was ranked first in Google Search and in Bahrain. 
                In Bahrain, you may find printers, lasers, CNC machines, cutting plotters, machineries, and spare parts. 
                Your SEO strategy worked for me; I'm pleased with the high-quality backlinks that were established, 
                and I used all professional marketing techniques to get my website to the top of the Google search results. 
                Expertise designed to establish a successful SEO strategy for my business. For my company, you've created 
                a result-oriented SEO approach.
              </p>

              <div className="space-y-1">
                <h4 className="text-[#3cb878] text-xl font-bold">Ahmed Abdulaal</h4>
                <p className="text-slate-300 text-sm uppercase font-medium tracking-widest">
                  Founder (NABTAKER SIGN)
                </p>
              </div>

              {/* Large Quote Mark Decoration */}
              <div className="absolute bottom-8 right-12 opacity-10">
                 <span className="text-white text-9xl font-serif">“</span>
              </div>
            </div>
            
            {/* Pagination Dots (Placeholder for slider functionality) */}
            <div className="flex justify-center mt-8 gap-3">
               <div className="w-3 h-3 rounded-full border-2 border-white" />
               <div className="w-3 h-3 rounded-full border-2 border-white bg-white" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}