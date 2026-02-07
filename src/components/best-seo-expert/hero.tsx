"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const slides = [
  {
    title: "Google #1 Rank Specialist",
    text: "Obtaining high-quality targeted organic traffic without paying paid ads.",
    img: "/assets/images/best-seo-expert/seo-analytics.webp",
    btnColor: "bg-[#51cb93]"
  },
  {
    title: "Best Google SEO Professional",
    text: "Grow Your Business with New Clients? Contact us immediately",
    img: "/assets/images/best-seo-expert/seo-strategy.webp",
    btnColor: "bg-[#ffb142]"
  }
];

export default function HeroSection() {
  return (
    <div className="w-full">
      <section className="relative w-full h-[calc(100vh-140px)] bg-black overflow-hidden">
        <Swiper
          modules={[EffectFade, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={800}
          grabCursor={true}
          simulateTouch={true}
          touchRatio={1.5}
          navigation={{ nextEl: '.s-next', prevEl: '.s-prev' }}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0">
                    <Image src={slide.img} alt="Hero" fill className="object-cover opacity-60" priority />
                  </div>

                  {isActive && (
                    <div className="relative z-20 text-center px-4 max-w-[940px] animate-in fade-in duration-700">
                      <span className="inline-block bg-white/20 text-white px-3 py-1 text-[18px] font-semibold mb-6">Zammy Zaif</span>
                      <h1 className="text-white text-[32px] md:text-[60px] lg:text-[72px] font-black leading-tight uppercase mb-4">
                        {slide.title}
                      </h1>
                      <p className="text-white/80 text-[18px] max-w-2xl mx-auto mb-10">
                        {slide.text}
                      </p>
                      <button className={`${slide.btnColor} text-white px-12 py-4 rounded-full font-bold uppercase text-[14px] tracking-[2px]`}>
                        Get Started
                      </button>
                    </div>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}

          {/* Sticky Sidebar */}
          <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[500] hidden lg:flex flex-col">
            <div className="bg-[#28a745] py-10 px-3 text-white text-[10px] font-black uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 border-b border-white/10 cursor-pointer">Live Chat</div>
            <div className="bg-[#007bff] py-10 px-3 text-white text-[10px] font-black uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 cursor-pointer">Mail Us</div>
          </div>

          <button className="s-prev absolute left-10 top-1/2 z-50 text-white/90 hover:text-white text-4xl font-bold">←</button>
          <button className="s-next absolute right-10 top-1/2 z-50 text-white/90 hover:text-white text-4xl font-bold">→</button>
        </Swiper>
      </section>

      {/* 100% Identical Bottom Boxes - PLACED AFTER THE VIEWPORT */}
      <div className="w-full hidden lg:grid grid-cols-3 h-[130px]">
        <div className="bg-[#3cb878] flex flex-col justify-center px-12 relative border-r border-white/5 group overflow-hidden cursor-pointer">
          <h4 className="text-white font-bold text-[20px]">Google SEO</h4>
          <p className="text-white/40 text-[12px] uppercase">Want to Rank No.1 on Google</p>
          <span className="absolute right-8 bottom-0 text-white/5 text-[100px] font-black italic -mb-5">01</span>
          <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#d63384] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </div>
        
        <div className="bg-[#dbffce] flex flex-col justify-center px-12 relative border-r border-white/5 cursor-pointer">
          <h4 className="text-white font-bold text-[20px]">Business Optimization</h4>
          <p className="text-white/80 text-[12px] uppercase">Get business profile on top</p>
          <span className="absolute right-8 bottom-0 text-white/10 text-[100px] font-black italic -mb-5">02</span>
        </div>

        <div className="bg-[#3cb878] flex flex-col justify-center px-12 relative cursor-pointer">
          <h4 className="text-white font-bold text-[20px]">Rank No.1 in Google</h4>
          <p className="text-white/80 text-[12px] uppercase">Get website rank no.1</p>
          <span className="absolute right-8 bottom-0 text-white/10 text-[100px] font-black italic -mb-5">03</span>
        </div>
      </div>
    </div>
  );
}