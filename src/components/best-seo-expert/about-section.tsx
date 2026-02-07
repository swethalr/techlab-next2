"use client";

import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* LEFT SIDE: THE GREEN BOX (Fixed Layout) */}
          <div className="w-full lg:w-[450px] flex-shrink-0">
            <div className="bg-[#2ecc71] rounded-[20px] p-8 md:p-12 relative flex flex-col items-center">
              
              {/* The White Certificate Card - Exactly as shown in it2.tv */}
              <div className="w-full bg-white rounded-[10px] shadow-xl p-2 mb-10 -mt-20 lg:-ml-16 transform hover:scale-105 transition-transform duration-300">
                <div className="relative aspect-[1.4/1] w-full overflow-hidden rounded-[5px]">
                  <Image 
                    src="/img/zammy-zaif-certificate.webp" 
                    alt="Zammy Zaif Certificate"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* The Stats - Vertically aligned below the card */}
              <div className="w-full space-y-8 text-white">
                <div className="flex items-center gap-5">
                  <span className="text-5xl font-black min-w-[80px]">18+</span>
                  <span className="text-[13px] font-bold uppercase tracking-wider leading-tight">
                    Years Of <br/> Experience
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="text-5xl font-black min-w-[80px]">2T</span>
                  <span className="text-[13px] font-bold uppercase tracking-wider leading-tight">
                    Plus <br/> Clients
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="text-5xl font-black min-w-[80px]">3K+</span>
                  <span className="text-[13px] font-bold uppercase tracking-wider leading-tight">
                    Projects <br/> Completed
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: THE CONTENT */}
          <div className="flex-1 lg:pl-10">
            <h5 className="text-[#2ecc71] text-[16px] font-bold mb-3 tracking-wide">
              Proven Ranking Mastery Since 2008
            </h5>
            <h2 className="text-[#1a1a1a] text-[36px] md:text-[44px] font-black leading-[1.1] mb-8 uppercase">
              Best Google SEO Professional
            </h2>
            
            <div className="text-[#555] text-[16px] leading-[1.8] space-y-6 font-medium">
              <p>
                Zammy Zaif earns the global title of the best SEO professional through his unmatched 
                track record of delivering #1 Google rankings for clients globally since 2008. 
                Zaif's strategies consistently secure First & Top positions by adhering strictly to 
                Google guidelines, transforming small businesses into lead-generating powerhouses. 
                <span className="font-bold text-[#1a1a1a]"> His shift since 2014 to prioritize the #1 spot </span> 
                has boosted organic traffic by up to 50% and click-through rates by 20% for websites.
              </p>
              
              <p>
                Google recognizes Zaif via featured snippets and Search Central mentions, 
                spotlighting his content as authoritative since 2018. Over 20 years, his methods 
                have engaged 5 million+ users monthly without third-party shortcuts, earning trust 
                from 1000+ entrepreneurs. As CEO of Versa Forge, he resolves complex issues 
                like map spam and profile hurdles for local dominance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}