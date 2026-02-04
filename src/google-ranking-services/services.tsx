'use client';
import React, { useState, useRef } from 'react';
import { motion, Variants, AnimatePresence , useTransform, useSpring} from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  Globe,
  ArrowRight,
  MousePointer2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Star,
  ExternalLink,
  BarChart3,
  Trophy,
  Search,
  Activity, PieChart,Check, ArrowUpRight,Flag, Target,Sparkles
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
  EffectFade,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function GoogleRankingExpertPage() {
const pricingData = [
  {
    id: "gbp-local",
    title: "GBP Local SEO",
    prices: { usd: "$750", inr: "₹61,000", gbp: "£600", aed: "2750", cad: "1000" },
    features: ["45 Days Timeframe", "5-10 Miles of Area Radius", "5 Major Category Keywords", "5 Business Related Keywords", "1 Google Business Profile", "Website Ranking"]
  },
  {
    id: "city-based",
    title: "City Based SEO",
    prices: { usd: "$999/Month", inr: "₹81,000/Month", gbp: "£899/Month", aed: "3750/Month", cad: "1300/Month" },
    features: ["3-6 Months Timeframe", "A Particular City or District", "1st Rank for 25 Keywords", "1st page Rank for 75 Keywords", "1 Google Business Profile", "300 HQ White Hat Backlinks"]
  },
  {
    id: "state-level",
    title: "State Level SEO",
    prices: { usd: "$1350/Month", inr: "₹1,10,000/Month", gbp: "£1100/Month", aed: "5000/Month", cad: "1800/Month" },
    features: ["6-9 Months Timeframe", "State Level 1st Rank", "1st Rank for 25 Keywords", "1st Page Rank for 125 Key", "1-5 Google Business Profiles", "500 HQ White Hat Backlinks"]
  },
  {
    id: "country-level",
    title: "Country Level SEO",
    prices: { usd: "$1800/Month", inr: "₹1,50,000/Month", gbp: "£1400/Month", aed: "6600/Month", cad: "2400/Month" },
    features: ["9-12 Months Timeframe", "Country Level 1st Rank", "1st Rank for 50 Keywords", "1st Page Rank for 75 Keywords", "1-10 Google Business Profiles", "750 HQ White Hat Backlinks"]
  }
];
const [currency, setCurrency] = useState('usd');
  const RANKING_CASES = [
    {
      id: 1,
      src: '/assets/images/results/case-1.jpg',
      title: '45 Days Challenge',
      location: 'New Gurgaon, India',
    },
    {
      id: 2,
      src: '/assets/images/results/case-2.jpg',
      title: 'GMB Performance Max',
      location: 'London, UK',
    },
    {
      id: 3,
      src: '/assets/images/results/case-3.jpg',
      title: 'Top #1 AI Ranking',
      location: 'Toronto, Canada',
    },
    {
      id: 4,
      src: '/assets/images/results/case-4.jpg',
      title: 'SEO Success Story',
      location: 'Dubai, UAE',
    },
    {
      id: 5,
      src: '/assets/images/results/case-5.jpg',
      title: 'Map Pack Dominance',
      location: 'New York, USA',
    },
  ];
 
  return (
    <main className="min-h-screen bg-white selection:bg-[#3cb878] selection:text-white">
      {/* --- 1. YOUR BANNER CODE (AS PROVIDED) --- */}
      <section className="relative mt-28 overflow-hidden bg-[#3cb878] pb-24 pt-32 text-center">
        <div className="container relative z-10 mx-auto px-6">
          <h1 className="h1  mb-6 tracking-tighter text-white drop-shadow-md">
            Google Ranking Services
          </h1>
          <p className="p font-bold uppercase tracking-[0.4em] text-white/90">
            Home <span className="mx-2">/</span> Google Ranking Expert
          </p>
        </div>
        {/* Abstract pattern for premium feel */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)',
            backgroundSize: '40px 40px',
          }}
        />
      </section>

      <section className="overflow-hidden bg-white py-24 selection:bg-orange-100 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
            {/* --- IMAGE CONTAINER --- */}
            <div className="group relative w-full lg:w-[45%]">
              {/* Modern Bordered Wrapper */}
              <div className="relative z-10 rounded-[3.5rem] border border-orange-100 bg-white p-2 shadow-[0_40px_100px_-20px_rgba(249,115,22,0.1)] transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-[3rem]">
                  {/* Main Platform Illustration */}
                  <img
                    src="/assets/images/google-ranking-services/rank-your-business-everywhere.webp"
                    alt="Google Ranking Platforms Cloud"
                    className="object-fit h-auto max-h-[550px] w-full transform transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Decorative Background Aura */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="w-full space-y-10 lg:w-1/2">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-0.5 w-12 bg-[#3cb878]" />
                  <span className="p text-[18px] font-bold uppercase tracking-[0.4em] text-[#3cb878]">
                    Market Dominance
                  </span>
                </div>
                <h3 className="h3 leading-[0.95] tracking-tighter  text-slate-900">
                  Rank your Business
                  <span className="italic text-[#3cb878]"> Everywhere!</span>
                </h3>
              </div>

              <div className="space-y-6">
                <p className="p p font-medium leading-relaxed text-slate-700">
                  Our specialized Google & AI SEO Ranking services are
                  engineered to propel your online visibility with a
                  multi-pronged approach for{' '}
                  <span className="font-bold text-slate-900 ">Future 2026</span>
                  . We optimize your Google Business Profile for{' '}
                  <span className="font-bold text-[#3cb878]">
                    Prime (#1 Spot)
                  </span>
                  placement and architect your website to dominate search
                  results. Our cutting-edge strategies now fully integrate
                  highly dominant rich experiences across all AI platforms
                  including{' '}
                  <span className="font-bold text-slate-800">
                    ChatGPT, Gemini, DeepSeek, and Claude
                  </span>
                  . By capturing high-intent organic traffic directly, we drive
                  a greater volume of qualified inquiries and sustainable
                  growth.
                </p>
              </div>

              {/* Premium CTA Button */}
              <div className="pt-4">
                <button className="group relative overflow-hidden rounded-2xl bg-[#3cb878] px-6 py-5 shadow-2xl shadow-slate-200 transition-all hover:scale-105 active:scale-95">
                  {/* Shimmer Effect */}
                  <div className="ease-[cubic-bezier(0.22,1,0.36,1)] absolute inset-0 translate-y-full  bg-white transition-transform duration-500 group-hover:translate-y-0" />
                  <span className="h6 relative z-10 flex items-center gap-4 uppercase tracking-widest text-white group-hover:text-[#3cb878]">
                    Get Free Audit Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover:translate-x-2"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(-50%) translateY(0); }
      50% { transform: translateY(-50%) translateY(-15px); }
    }
    .animate-bounce-slow {
      animation: bounce-slow 4s ease-in-out infinite;
    }
  `,
          }}
        />
      </section>
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        {/* Premium Background Accents */}
        <div className="absolute left-1/4 top-0 -z-10 h-96 w-96 rounded-full  opacity-60 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-3xl space-y-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#3cb878] bg-[#dbffce] px-4 py-2"
            >
              <Trophy size={14} className="text-[#3cb878]" />
              <span className="p text-[12px] uppercase font-bold tracking-[0.3em] text-[#3cb878]">
                Our First Rank Results
              </span>
            </motion.div>
            <h2 className="h2 tracking-tighter text-slate-900">
              Expert in{' '}
              <span className="italic text-[#3cb878]">Google Ranking Services</span>
            </h2>
          </div>

 {/* Carousel Wrapper: This div prevents the spillover into the sidebar */}
            <div className="relative w-full overflow-hidden py-4">
              <Swiper
                modules={[Autoplay, Pagination, EffectCoverflow]}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination-premium',
                }}
                // Fixed width behavior to stay inside Main
                className="!static w-full"
              >
                {[
                  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1974&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1974&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1974&auto=format&fit=crop',
                ].map((imgSrc, index) => (
                  <SwiperSlide
                    key={index}
                    className="max-w-[100%] px-10 md:max-w-[400px] lg:max-w-[450px]"
                  >
                    <div className="overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-xl md:rounded-[2.5rem]">
                      <img
                        src={imgSrc}
                        alt={`SEO Result ${index + 1}`}
                        className="block h-auto w-full object-contain transition-transform duration-500 hover:scale-[1.01]"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Elegant Pagination (Inside Main Only) */}
              <div className="swiper-pagination-premium mt-10 flex justify-center gap-2" />
            </div>
        </div>
         <style jsx global>{`
              .swiper-pagination-premium .swiper-pagination-bullet {
                width: 8px;
                height: 8px;
                background: #cbd5e1;
                opacity: 1;
                transition: all 0.3s ease;
              }
              .swiper-pagination-premium .swiper-pagination-bullet-active {
                background: #3cb878 !important;
                width: 24px;
                border-radius: 4px;
              }
            `}</style>
      </section>
 <section className="py-16 bg-[#fafafa] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1480px]">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-[#3cb878] font-bold text-xs mb-1 uppercase tracking-wider">Local to Global Ranking</p>
          <h2 className="h2 font-extrabold text-[#1a202c]">Cost of SEO Rank Services</h2>
          <div className="w-16 h-1 bg-[#3cb878] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* SWIPER CONTAINER */}
        <div className="relative px-12"> {/* Padding added for icons */}
          
          {/* Custom Navigation Icons - EXACT MATCH */}
          <button className="swiper-prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#3cb878] text-black rounded-full flex items-center justify-center shadow-xl hover:bg-black transition-all">
            <ChevronLeft size={24} />
          </button>
          
          <button className="swiper-next-btn absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#3cb878] text-white rounded-full flex items-center justify-center shadow-xl hover:bg-black transition-all">
            <ChevronRight size={24} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-prev-btn',
              nextEl: '.swiper-next-btn',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-12"
          >
            {pricingData.map((plan) => (
              <SwiperSlide key={plan.id}>
                <div className="bg-white rounded-[2rem] p-8 text-black h-full flex flex-col border-4 border-[#3cb878] shadow-lg">
                  <h4 className="h4 font-bold mb-6 text-center border-b  border-[#3cb878] pb-4">
                    {plan.title}
                  </h4>
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-[16px] font-semibold leading-tight">
                        <Check size={16} className="shrink-0 bg-[#3cb878] text-white font-bold rounded" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center mt-auto">
                    <p className="text-[14px] font-bold uppercase opacity-80 mb-1">Starts from</p>
                    <p className="text-lg font-bold tracking-tighter mb-6">
                      {plan.prices.usd}
                    </p>
                     <button className="w-full bg-[#3cb878] border-2 border-white text-white font-bold py-4 rounded-full font-bold uppercase text-[14px] tracking-widest hover:bg-white hover:border-[#3cb878] hover:text-[#3cb878] transition-all">
                      Contact Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
    </main>
  );
}
