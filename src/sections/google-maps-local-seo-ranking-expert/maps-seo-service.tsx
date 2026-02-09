"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Zap, BarChart3, ChevronRight, ChevronLeft, 
  Search, MapPin, Target, Globe, MessageSquare, Trophy 
} from 'lucide-react';

// Swiper Essential Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  { title: "45-Day 1st Rank Challenge", desc: "We fully optimize your profile to achieve 5 primary and 10 secondary keywords in the first position within an 8-mile radius in just 45 business days. Experience rapid results with our expertise.", icon: <Zap size={24} />, tag: "Speed" },
  { title: "No Monthly Charges", desc: "We fully optimize your profile to achieve 5 primary and 10 secondary keywords in the first position within an 8-mile radius in just 45 business days. Experience rapid results with our expertise.", icon: <ShieldCheck size={24} />, tag: "Value" },
  { title: "Proven Track Record", desc: "With over 830 profiles ranked No. 1 and more than 1280 successfully troubleshot, our expertise speaks volumes. Trust our history of delivering results for clients worldwide.<", icon: <BarChart3 size={24} />, tag: "Authority" },
  { title: "100% Transparency", desc: "By granting us manager access, you’ll see live updates on your Google Business profile. We regularly optimize your services, products, and offers for maximum effectiveness.", icon: <MapPin size={24} />, tag: "Setup" },
  { title: "Follow Google Guidelines", desc: "From day one, we align your business profile with Google Business Profile Guidelines, ensuring compliance and optimal performance. Experience a complete profile transformation.", icon: <Search size={24} />, tag: "Insight" },
  { title: "Consistent Results", desc: "Our boosted listings maintain the No. 1 position even after six months. We provide a simple checklist to ensure consistent results, making success easy to achieve.", icon: <MessageSquare size={24} />, tag: "Trust" },
  { title: "Website Optimization", desc: "We optimize your website’s title, description, and headings, ensuring compatibility with your profile. A well-designed website is essential for ranking No. 1 on Google Maps.", icon: <Target size={24} />, tag: "Growth" },
  { title: "One City - One Category", desc: "We serve only one client per business category in each city, guaranteeing exclusive first-rank results and eliminating competition among our clients.", icon: <Globe size={24} />, tag: "Global" }
];

const FuturisticServices = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 lg:py-32">
      {/* Dynamic Background: Subtle & Clean  bg-[#050505]*/}
      <div className="pointer-events-none absolute inset-0 opacity-[0.01] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#10b98105_0%,transparent_70%)]" />

             <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Optimized Header for Readability */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Trophy size={14} className="text-emerald-400" />
              <span className="text-[12px] uppercase tracking-[0.2em] text-emerald-400">Continuous Performance</span>
            </div>
            <h2 className="h2 text-white tracking-[0.01em] leading-[0.9] mb-6">
              Google Maps {' '}
              <span className="text-emerald-500">SEO Services</span>
            </h2>
          </div>
          
          {/* High-Contrast Controls */}
          <div className="flex gap-3 mb-2">
            <button className="nav-prev p-5 rounded-full bg-zinc-900 border border-white/10 text-white hover:bg-emerald-500 hover:text-black transition-all active:scale-95 shadow-xl">
              <ChevronLeft size={28} />
            </button>
            <button className="nav-next p-5 rounded-full bg-zinc-900 border border-white/10 text-white hover:bg-emerald-500 hover:text-black transition-all active:scale-95 shadow-xl">
              <ChevronRight size={28} />
            </button>
          </div>
        </div>

        {/* 100/100 UX Slider: No tilting, just pure focus */}
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination, FreeMode]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            speed={800}
            grabCursor={true}
            navigation={{ nextEl: '.nav-next', prevEl: '.nav-prev' }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
            }}
            className="!overflow-visible"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="transition-all duration-500 ease-out py-10">
                {/* The Card: Obsidian Glass Style */}
                <div className="group relative h-full min-h-[400px] p-10 rounded-[3rem] bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:border-emerald-500/40 transition-all duration-500 flex flex-col justify-between overflow-hidden">
                  
                  {/* Subtle Card Glow */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 blur-[80px]  group-hover:bg-emerald-500/20 transition-all" />

                  <div>
                    <div className="w-16 h-16 rounded-[1.5rem] bg-emerald-500/10 flex items-center justify-center mb-10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      {service.icon}
                    </div>
                    
                    <span className="text-sm  uppercase tracking-[0.3em] text-emerald-500/90 mb-4 block">
                      {service.tag}
                    </span>
                    
                    <h4 className="h4 font-bold text-white mb-6  leading-snug group-hover:text-emerald-400 transition-colors service-card-heading">
                      {service.title}
                    </h4>
                    
                    <p className="text-gray-400 p max-w-xl leading-relaxed font-medium">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-8 mt-auto flex items-center justify-between text-white font-bold text-xs uppercase tracking-widest group-hover:text-emerald-400 transition-colors">
                    <span>Contact us</span>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-500 group-hover:translate-x-2 transition-all">
                       <ChevronRight size={18} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Clean Progress Pagination */}
          <div className="custom-pagination mt-16 flex justify-center gap-3" />
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 40px;
          height: 4px;
          border-radius: 2px;
          background: rgba(255,255,255,0.05);
          opacity: 1;
          transition: all 0.4s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #10b981 !important;
          box-shadow: 0 0 20px rgba(16,185,129,0.4);
        }
        .swiper-slide-active {
          transform: scale(1.05);
          z-index: 10;

        }
        .swiper-slide-active > div {
          background: rgba(24, 24, 27, 0.8) !important;
          border-color: rgba(16, 185, 129, 0.4) !important;
          
        }
          .service-card-heading {
  color: #ffffff !important;
  transition: color 0.5s ease;
}
          .swiper-slide-active .service-card-heading {
  color: #34d399  !important;
}
      `}</style>
    </section>
  );
};

export default FuturisticServices;