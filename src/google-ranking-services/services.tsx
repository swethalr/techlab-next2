'use client';
import React, { useState, useRef } from 'react';
import {
  motion,
  Variants,
  AnimatePresence,
  useTransform,
  useSpring,
} from 'framer-motion';
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
  Activity,
  PieChart,
  Check,
  ArrowUpRight,
  Flag,
  Target,
  Sparkles,
  ChevronDown,
  HelpCircle
} from 'lucide-react';
import LeadForm from 'src/components/LeadForm';
import Newsletter from 'src/components/NewsLetter';
import ClientReviews from 'src/components/ClientReview'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function GoogleRankingExpertPage() {
  const pricingData = [
    {
      id: 'gbp-local',
      title: 'GBP Local SEO',
        bgColor: '#e4ffeb',
      prices: {
        usd: '$750',
        inr: '₹61,000',
        gbp: '£600',
        aed: 'AED 2750',
        cad: 'C$1000',
      },
      features: [
        '45 Days Timeframe',
        '5-10 Miles of Area Radius',
        '5 Major Category Keywords',
        '5 Business Related Keywords',
        '1 Google Business Profile',
        'Website Ranking',
      ],
    },
    {
      id: 'city-based',
      title: 'City Based SEO',
       bgColor: '#e4ffeb',
      prices: {
        usd: '$999/Month',
        inr: '₹81,000/Month',
        gbp: '£899/Month',
        aed: 'AED 3750/Month',
        cad: 'C$1300/Month',
      },
      features: [
        '3-6 Months Timeframe',
        'A Particular City or District',
        '1st Rank for 25 Keywords',
        '1st page Rank for 75 Keywords',
        '1 Google Business Profile',
        '300 HQ White Hat Backlinks',
      ],
    },
    {
      id: 'state-level',
      title: 'State Level SEO',
       bgColor: '#e4ffeb',
      prices: {
        usd: '$1350/Month',
        inr: '₹1,10,000/Month',
        gbp: '£1100/Month',
        aed: 'AED 5000/Month',
        cad: 'C$1800/Month',
      },
      features: [
        '6-9 Months Timeframe',
        'State Level 1st Rank',
        '1st Rank for 25 Keywords',
        '1st Page Rank for 125 Key',
        '1-5 Google Business Profiles',
        '500 HQ White Hat Backlinks',
      ],
    },
    {
      id: 'country-level',
      title: 'Country Level SEO',
       bgColor: '#e4ffeb',
      prices: {
        usd: '$1800/Month',
        inr: '₹1,50,000/Month',
        gbp: '£1400/Month',
        aed: 'AED 6600/Month',
        cad: 'C$2400/Month',
      },
      features: [
        '9-12 Months Timeframe',
        'Country Level 1st Rank',
        '1st Rank for 50 Keywords',
        '1st Page Rank for 75 Keywords',
        '1-10 Google Business Profiles',
        '750 HQ White Hat Backlinks',
      ],
    },
    {
      id: 'global-level',
      title: 'Global SEO',
       bgColor: '#e4ffeb',
      prices: {
        usd: '$2000/Month',
        inr: '₹1,70,000/Month',
        gbp: '£1600/Month',
        aed: 'AED 7350/Month',
        cad: 'C$2550/Month',
      },
      features: [
        '12-24 Months Timeframe',
        'Global Level 1st Rank',
        '1st Rank for 75 Keywords',
        '1st Page Rank for 125 Keywords',
        'Snippet Featured Results ',
        '1550 HQ White Hat Backlinks',
      ],
    },
  ];
const [pricingSwiper, setPricingSwiper] = React.useState<SwiperType | null>(null);
  const [currency, setCurrency] = React.useState('usd');
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

  const faqData = [
  {
    question: "Who is world's best google ranking expert?",
    answer:
      'In recognition of his decade-long experience in the SEO industry, Zammy Zaif has earned the prestigious title of Google Ranking Expert. This Google-certified specialist utilizes white hat SEO techniques and puts tremendous effort into securing higher positions for websites on the Google search results page.',
  },
  {
    question: 'Who is google ranking expert?',
    answer:
      "Zammy Zaif stands out as a remarkable Certified Google Ranking Expert, providing exceptional SEO services to his clients. What sets him apart is his commitment to relying solely on the Google algorithm, adhering strictly to Google's guidelines and leveraging Google Ranking Factors, without any reliance on third-party tools or plugins.",
  },
  {
    question: 'Why we need a Google Ranking Expert?',
    answer:
      "A Google Ranking Expert is an individual or professional who specializes in optimizing websites to achieve higher rankings in Google search results. They possess in-depth knowledge of Google's search algorithms and implement various strategies to improve a website's visibility and organic traffic.",
  },
  {
    question: 'What services do Google Ranking Experts provide?',
    answer:
      'Google Ranking Experts offer a range of services aimed at improving your websites rankings. These services may include keyword research, on-page optimization, technical SEO audits, link building, content creation and optimization, website speed optimization, mobile optimization, local SEO, and tracking and reporting on keyword rankings and website performance.',
  },
  {
    question:
      'How long does it take to see results with Google Ranking Services?',
    answer:
      'The time it takes to see results from Google Ranking Services can vary depending on various factors, including the competitiveness of your industry, the current state of your websites SEO, and the strategies implemented by the expert. Generally, it can take 90 days to 180 days notice significant improvements in your websites rankings, but consistent efforts and ongoing optimization can lead to long-term success.',
  },
  ];
   const [expanded, setExpanded] = useState<number | null>(0);
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
            <div className="w-full space-y-10 lg:w-4xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#3cb878]] h-0.5 w-12" />
                 
                </div>
                <h2 className="h2 leading-[0.95] tracking-tighter text-slate-900">
                  Rank your Business
                  <span className=" text-[#3cb878]"> Everywhere!</span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="p  font-medium leading-relaxed text-slate-700">
                  
                  Our specialized Google & AI SEO Ranking services are engineered to propel your online visibility
                  with a multi-pronged approach for Future 2026.
                  <span className="font-bold text-[#3cb878]">
                    We optimize your Google Business Profile for Prime (#1 Spot in Top 3 Rank) placement
                  </span> {' '}and architect your website to dominate search results. Our cutting-edge strategies now fully integrate <span className ="font-bold text-slate-900">AEO (Answer Engine Optimization),</span>
                  ensuring <span className="font-bold text-[#3cb878]"> {' '} your content wins visibility across all AI platforms (Chatgpt, Gemini, CoPilot, DeepSeek, Claude, Preplexity) and answer engines.
                    </span>
                  We develop user-centric, semantic-rich experiences that decisively outpace the competition. This comprehensive methodology is designed to
                  capture the next wave of search behavior. The result is a significant and sustained increase in high-intent organic traffic.
                  This directly
                  <span className ="font-bold text-slate-900">drives a greater volume of qualified inquiries and those all-important sales conversions.</span> Our focus is building
                  a future-proof digital foundation that delivers lasting growth.
                 
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
         <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
        {/* Premium Background Accents */}
        <div className="absolute left-1/4 top-0 -z-10 h-96 w-96 rounded-full  opacity-60 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className="mx-auto mb-16 max-w-7xl space-y-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#3cb878] bg-[#dbffce] px-4 py-2"
            >
              <Trophy size={14} className="text-[#3cb878]" />
              <span className="p  font-bold uppercase  text-[#3cb878]">
                Our First Rank Results
              </span>
            </motion.div>
            <h2 className="h2 tracking-tighter text-slate-900">
              Expert in{' '}
              <span className=" text-[#3cb878]">
                Google Ranking Services
              </span>
            </h2>
            <p className="p text-slate-700 font-medium max-w-7xl" >Google Ranking Services specializes in achieving the first rank on Google's SERP for clients locally & globally. We offer comprehensive services, including competitor analysis, strategic content creation, high-quality backlinks, GBP optimization & on-page technical optimization tailored to align with Google's algorithms. Our team of Google Rank Experts attracts the right audience for your business with our specialized SEO ranking services.</p>
          </div>

          {/* Carousel Wrapper: This div prevents the spillover into the sidebar */}
          <div className="relative w-full overflow-hidden py-4">
            <Swiper
              modules={[Autoplay, Pagination]}
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
               '/assets/images/google-ranking-services/preston-dental-seo-win.webp',
                  '/assets/images/google-ranking-services/realestate-coach.webp',
                  '/assets/images/google-ranking-services/property-buyers-in-london-result.webp',
                  '/assets/images/google-ranking-services/shingle-roofing-experts-los-angeles-result.webp',
                  '/assets/images/google-ranking-services/dentru.webp',
                  '/assets/images/google-ranking-services/google-business-ranking-performance.webp',
                  '/assets/images/google-ranking-services/roy-cleeves.webp',
                  '/assets/images/google-ranking-services/dentru-gurgaon.webp',
                  '/assets/images/google-ranking-services/studio-7rk.webp',
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

      < LeadForm />


      <section className="relative overflow-hidden bg-[#fafafa] py-16">
        <div className="container mx-auto max-w-[1480px] px-4">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <h5 className="h5 mb-1 font-bold uppercase tracking-wider text-[#3cb878]">
              Local to Global Ranking
            </h5>
            <h2 className="h2 text-[#1a202c]">Cost of SEO Rank Services</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#3cb878]"></div>

            {/* Currency Switcher - Fixed Visibility */}
            <div className="mt-8 inline-flex rounded-full bg-slate-900 p-1 shadow-lg">
              {['usd', 'inr', 'gbp', 'aed', 'cad'].map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`rounded-full px-5 py-2 text-[16px] font-bold uppercase transition-all ${
                    currency === curr
                      ? 'bg-[#3cb878] text-white'
                      : 'text-white hover:text-[#3cb878]'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>

          {/* SWIPER CONTAINER */}
          <div className="relative px-2 lg:px-14 z-10">
            {/* Navigation Arrows - Increased Z-Index to 50 */}
            <button
              onClick={() => pricingSwiper?.slidePrev()}
              className="absolute left-0 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#3cb878] text-white shadow-xl transition-all hover:bg-black active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => pricingSwiper?.slideNext()}
              className="absolute right-0 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#3cb878] text-white shadow-xl transition-all hover:bg-black active:scale-90"
            >
              <ChevronRight size={24} />
            </button>

            <Swiper
              onSwiper={setPricingSwiper}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              grabCursor={true}
              loop={true}
              allowTouchMove={true}
              watchSlidesProgress={true}
              
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="pb-12"
            >
              {pricingData.map((plan) => (
                <SwiperSlide key={plan.id}>
                  <div className="flex h-[580px] flex-col rounded-[2rem] border-4 border-[#3cb878] bg-white p-8 text-black font-bold shadow-lg" style={{ backgroundColor: plan.bgColor }}>
                    <h5 className="h5 mb-6 border-b border-[#3cb878] pb-4 text-center font-bold uppercase">
                      {plan.title}
                    </h5>

                    <ul className="mb-8 flex-grow space-y-5">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[16px] font-semibold leading-tight"
                        >
                          <div className="mt-0.5 shrink-0 rounded bg-[#3cb878] p-0.5">
                            <Check
                              size={12}
                              className="stroke-[4px] text-white"
                            />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto text-center">
                      <p className="mb-1 text-[12px] font-bold uppercase opacity-80">
                        Starts from
                      </p>
                      <p className="mb-6 text-[22px] font-bold ">
                        {plan.prices[currency as keyof typeof plan.prices]}
                      </p>
                      <button className="w-full rounded-full border-2 border-[#3cb878] bg-[#3cb878] py-4 text-[14px] font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-[#3cb878]">
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
      <section className="overflow-hidden relative bg-white py-24 selection:bg-orange-100 lg:py-32">
         <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
            {/* --- IMAGE CONTAINER --- */}
            <div className="group relative w-full lg:w-[45%]">
              {/* Modern Bordered Wrapper */}
              <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-[3rem]">
                  {/* Main Platform Illustration */}
                  <img
                    src="/assets/images/google-ranking-services/google-no1-business-pride.svg"
                    alt="Google Ranking Platforms Cloud"
                    className=" h-full w-full "
    
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
                  <div className="bg-[#3cb878]] h-0.5 w-12" />
                  
                </div>
                <h3 className="h3 leading-[0.95]  text-slate-900">
                 
                   
                  <span className=" text-[#3cb878]">  Google's No.1 - </span> Your Business Pride
                </h3>
              </div>

              <div className="space-y-6">
                <p className="p  font-medium leading-relaxed text-slate-700">
                  
                 Google's #1 ranking as a search engine directly benefits businesses because it drives immense traffic to websites that appear at the top of search results. High visibility on Google translates to increased brand awareness, more potential customers finding your website, and ultimately a boost in lead generation and sales. Essentially, strong Google search performance equates to an inherent competitive advantage and signifies success in the digital landscape, making it a point of pride for any business.
                </p>
              </div>

              {/* Premium CTA Button */}
              <div className="pt-4">
                <button className="group relative overflow-hidden rounded-2xl bg-[#3cb878] px-6 py-5 shadow-2xl shadow-slate-200 transition-all hover:scale-105 active:scale-95">
                  {/* Shimmer Effect */}
                  <div className="ease-[cubic-bezier(0.22,1,0.36,1)] absolute inset-0 translate-y-full  bg-white transition-transform duration-500 group-hover:translate-y-0" />
                  <span className="h6 relative z-10 flex items-center gap-4 uppercase tracking-widest text-white group-hover:text-[#3cb878]">
                    Contact Now
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
       <section className="overflow-hidden relative bg-white py-24 selection:bg-orange-100 lg:py-32">
         <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-16 lg:flex-row-reverse lg:gap-24">
            {/* --- IMAGE CONTAINER --- */}
            <div className="group relative w-full lg:w-[45%]">
              {/* Modern Bordered Wrapper */}
              <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-[3rem]">
                  {/* Main Platform Illustration */}
                  <img
                    src="/assets/images/google-ranking-services/grow-with-google-business-profile.GIF"
                    alt="Google Ranking Platforms Cloud"
                    className=" h-full w-full "
    
                  />
                </div>
              </div>

              {/* Decorative Background Aura */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="w-full space-y-10 lg:w-[70%]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#3cb878]] h-0.5 w-12" />
                  
                </div>
                 <h5 className="h5 mb-1 font-bold uppercase tracking-wider text-[#3cb878]">
             GBP is Your Key to Attract Local Audience
            </h5>
                <h3 className="h3 leading-[0.95]  text-slate-900">
                 
                   
                  <span className=" text-[#3cb878]">  Grow Leads  </span> with Google Business Profile
                </h3>
              </div>

              <div className="space-y-6">
                <p className="p  font-medium leading-relaxed text-slate-700">
                  
                Our team specializes in optimizing your Google Business Profile to maximize visibility and attract qualified leads in your local area. We'll ensure your profile is complete, accurate, and showcases positive customer reviews. Additionally, we'll strategically use Google Posts, messaging features, and targeted Q&A responses to build trust and convert searchers into customers. Our service helps you dominate local search results and drive a consistent stream of warm leads directly to your business.
                </p>
              </div>

              {/* Premium CTA Button */}
              <div className="pt-4">
                <button className="group relative overflow-hidden rounded-2xl bg-[#3cb878] px-6 py-5 shadow-2xl shadow-slate-200 transition-all hover:scale-105 active:scale-95">
                  {/* Shimmer Effect */}
                  <div className="ease-[cubic-bezier(0.22,1,0.36,1)] absolute inset-0 translate-y-full  bg-white transition-transform duration-500 group-hover:translate-y-0" />
                  <span className="h6 relative z-10 flex items-center gap-4 uppercase tracking-widest text-white group-hover:text-[#3cb878]">
                    Contact Now
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

        <section className="overflow-hidden relative bg-white py-24 selection:bg-orange-100 lg:py-32">
         <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
            {/* --- IMAGE CONTAINER --- */}
            <div className="group relative w-full lg:w-[45%]">
              {/* Modern Bordered Wrapper */}
              <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-[3rem]">
                  {/* Main Platform Illustration */}
                  <img
                    src="/assets/images/google-ranking-services/boost-website-visibility.svg"
                    alt="Google Ranking Platforms Cloud"
                    className=" h-full w-full "
    
                  />
                </div>
              </div>

              {/* Decorative Background Aura */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="w-full space-y-10 lg:w-[70%]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#3cb878]] h-0.5 w-12" />
                  
                </div>
               
                <h3 className="h3 leading-[0.95]  text-slate-900">
                 
                   
                  <span className=" text-[#3cb878]">  
Boost Website Visibility - </span> Accelerate Sales
                </h3>
              </div>

              <div className="space-y-6">
                <p className="p  font-medium leading-relaxed text-slate-700">
                  The visibility of a website is one of the most important factors for running a successful business. Accelerate your sales by boosting your website's visibility. Our data-driven optimization strategies transform your website presence into a high-performing sales machine. With customized design enhancements, persuasive copywriting and targeted A/B testing, we focus on relevant business-enquiry keywords to lead you towards sales qualified leads.
                </p>
                <p className="p font-medium leading-relaxed text-slate-700 ">
                  This increased visibility will take your business website to the top of search results, driving more organic traffic and has high chances of converting those leads into customers. By attracting more business, our optimization method builds strong credibility to help you stand out among your competitors easily. This active engagement will earn the trust of your targeted audience, resulting in more clicks. Choose our ranking services to quickly increase your business growth with high number of sales.
                </p>
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
      
        <section className="overflow-hidden relative bg-black py-24 selection:bg-orange-100 lg:py-32">
         <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
        <div className="mx-auto max-w-7xl px-6">
           <h2 className="h2 leading-[0.95] text-center mx-auto text-white">
                 
                   
                  <span className=" text-[#3cb878]">  
Dominating GEO & </span> Ai Search Rankings
                </h2>
          <div className="flex flex-col items-center gap-16 lg:flex-row-reverse lg:gap-24">
             
            {/* --- IMAGE CONTAINER --- */}
            <div className="group relative mt-16 w-full lg:w-[35%]">
              {/* Modern Bordered Wrapper */}
              <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="overflow-hidden ">
                  {/* Main Platform Illustration */}
                  <img
                    src="/assets/images/google-ranking-services/dominate-ai-search-ranking.webp"
                    alt="Google Ranking Platforms Cloud"
                    className=" h-full w-full "
    
                  />
                </div>
              </div>

              {/* Decorative Background Aura */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="w-full space-y-10  lg:w-[70%]">
              <div className="space-y-4">
                <div className="flex items-center  gap-3">
                  <div className="bg-[#3cb878]] h-0.5 w-12" />
                  
                </div>
               
                
              </div>

              <div className="space-y-6">
                <p className="p  font-medium leading-relaxed text-white">
                  Search engine ranking defines where a website or URL appears on search engine results pages. Pages that rank well are placed at the top, attracting more visitors and engagement. Dominating GEO and AI search rankings means becoming the leading choice for local and AI-driven search queries, elevating your visibility in location-based and AI-powered search environments. Higher rankings not only boost your presence but establish your brand as an authoritative and trusted resource. Our strategies ensure you don’t just appear in search results— you stand out prominently, becoming the focal point in both the digital and local search landscapes.
                </p>
                <p className="p font-medium leading-relaxed text-white ">
                 We leverage advanced location targeting, AI-powered content optimization including AEO, and user behavior signals to capture traffic from both traditional and emerging AI platforms. This approach helps you maintain a competitive edge as search evolves in 2026, ensuring your business thrives across all search dimensions.
                </p>
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
              <section className="overflow-hidden relative bg-white py-24 selection:bg-orange-100 lg:py-32">
         <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
            {/* --- IMAGE CONTAINER --- */}
            <div className="group relative bg-transparent w-full lg:w-[45%]">
              {/* Modern Bordered Wrapper */}
              <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-[3rem]">
                  {/* Main Platform Illustration */}
                  <img
                    src="/assets/images/google-ranking-services/website-1st-rank-result.GIF"
                    alt="Google Ranking Platforms Cloud"
                    className=" h-full w-full "
    
                  />
                </div>
              </div>

              {/* Decorative Background Aura */}
            
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="w-full space-y-10 lg:w-[70%]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#3cb878]] h-0.5 w-12" />
                  
                </div>
               
                <h3 className="h3 leading-[0.95]  text-slate-900">
                 
                   Website{' '}
                  <span className=" text-[#3cb878]">  
 1st Rank  </span> Search Result
                </h3>
              </div>

              <div className="space-y-6">
                <p className="p  font-medium leading-relaxed text-slate-700">
                 Benefit from our seasoned SEO experts who are committed to delivering Website Ranking Optimization services aimed at securing the prestigious No.1 position on Google. With a track record dating back to 2008, we've consistently assisted businesses in dominating search results and reaching the summit of Google. Harness the potency of top-tier outcomes through our unwavering SEO services. Since 2014, we've enabled businesses of all scales to conquer search rankings and secure coveted first-page placements on Google.
                </p>
                <p className="p font-medium leading-relaxed text-slate-700 ">
                   With our unwavering dedication to tangible results, we assure you of substantial sales growth and heightened online visibility. Join forces with us to elevate your business to the pinnacle of Google's rankings.
                </p>
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
       <section className="overflow-hidden relative bg-white py-24 selection:bg-orange-100 lg:py-32">
         <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-16 lg:flex-row-reverse lg:gap-24">
            {/* --- IMAGE CONTAINER --- */}
            <div className="group relative w-full lg:w-[45%]">
              {/* Modern Bordered Wrapper */}
              <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-[3rem]">
                  {/* Main Platform Illustration */}
                  <img
                    src="/assets/images/google-ranking-services/revolutionize-with-google-seo-services.svg"
                    alt="Google Ranking Platforms Cloud"
                    className=" h-full w-full "
    
                  />
                </div>
              </div>

              {/* Decorative Background Aura */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="w-full space-y-10 lg:w-[70%]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#3cb878]] h-0.5 w-12" />
                  
                </div>
                 <h5 className="h5 mb-1 font-bold uppercase tracking-wider text-[#3cb878]">
            Transform Your Google Presence: Be Found, Be Chosen
            </h5>
                <h3 className="h3 leading-[0.95]  text-slate-900">
                 Revolutionize with {' '}
                   
                  <span className=" text-[#3cb878]">  Google SEO Service </span> 
                </h3>
              </div>

              <div className="space-y-6">
                <p className="p  font-medium leading-relaxed text-slate-700">
                  
                Focusing your business growth with Google offers several compelling advantages. Google's dominance in search makes mastering Search Engine Optimization (SEO) critical – aligning your website with Google's algorithms boosts visibility and attracts organic traffic. Moreover, Google provides an array of invaluable free tools: Google Analytics helps you understand website performance, Google My Business enhances local search presence, and Google Search Console aids in technical SEO management. Leveraging these resources alongside strategic SEO practices positions your business to thrive within the vast Google ecosystem, driving increased traffic, leads, and ultimately sustainable growth.
                </p>
              </div>

              {/* Premium CTA Button */}
              <div className="pt-4">
                <button className="group relative overflow-hidden rounded-2xl bg-[#3cb878] px-6 py-5 shadow-2xl shadow-slate-200 transition-all hover:scale-105 active:scale-95">
                  {/* Shimmer Effect */}
                  <div className="ease-[cubic-bezier(0.22,1,0.36,1)] absolute inset-0 translate-y-full  bg-white transition-transform duration-500 group-hover:translate-y-0" />
                  <span className="h6 relative z-10 flex items-center gap-4 uppercase tracking-widest text-white group-hover:text-[#3cb878]">
                    Contact Now
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

      
                 <section className="overflow-hidden relative bg-white py-24 selection:bg-orange-100 lg:py-32">
         <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
            {/* --- IMAGE CONTAINER --- */}
            <div className="group relative bg-transparent w-full lg:w-[45%]">
              {/* Modern Bordered Wrapper */}
              <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-[3rem]">
                  {/* Main Platform Illustration */}
                  <img
                    src="/assets/images/google-ranking-services/website-1st-rank-result.GIF"
                    alt="Google Ranking Platforms Cloud"
                    className=" h-full w-full "
    
                  />
                </div>
              </div>

              {/* Decorative Background Aura */}
            
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="w-full space-y-10 lg:w-[70%]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#3cb878]] h-0.5 w-12" />
                  
                </div>
               
                <h3 className="h3 leading-[0.95]  text-slate-900">
                 
                   Website{' '}
                  <span className=" text-[#3cb878]">  
 1st Rank  </span> Search Result
                </h3>
              </div>

              <div className="space-y-6">
                <p className="p  font-medium leading-relaxed text-slate-700">
                 Benefit from our seasoned SEO experts who are committed to delivering Website Ranking Optimization services aimed at securing the prestigious No.1 position on Google. With a track record dating back to 2008, we've consistently assisted businesses in dominating search results and reaching the summit of Google. Harness the potency of top-tier outcomes through our unwavering SEO services. Since 2014, we've enabled businesses of all scales to conquer search rankings and secure coveted first-page placements on Google.
                </p>
                <p className="p font-medium leading-relaxed text-slate-700 ">
                   With our unwavering dedication to tangible results, we assure you of substantial sales growth and heightened online visibility. Join forces with us to elevate your business to the pinnacle of Google's rankings.
                </p>
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
       <section className="overflow-hidden relative bg-white py-24 selection:bg-orange-100 lg:py-32">
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-16 lg:flex-row-reverse lg:gap-24">
            {/* --- IMAGE CONTAINER --- */}
            <div className="group relative w-full lg:w-[45%]">
              {/* Modern Bordered Wrapper */}
              <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-[3rem]">
                  {/* Main Platform Illustration */}
                  <img
                    src="/assets/images/google-ranking-services/win-google-algorithm.webp"
                    alt="Google Ranking Platforms Cloud"
                    className=" h-full w-full "
    
                  />
                </div>
              </div>

              {/* Decorative Background Aura */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="w-full space-y-10 lg:w-[70%]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#3cb878]] h-0.5 w-12" />
                  
                </div>
                 <h5 className="h5 mb-1 font-bold uppercase tracking-wider text-[#3cb878]">
           ZAMMY ZAIF
            </h5>
                <h3 className="h3 leading-[0.95]  text-slate-900">
                  
                  <span className=" text-[#3cb878]">  Win Google Algorithm  </span>  & Win Competition
                </h3>
              </div>

              <div className="space-y-6">
                <p className="p  font-medium leading-relaxed text-slate-700">
                  Winning Google's algorithm and emerging victorious in competitions requires a multifaceted approach focused on high-quality, user-centric content. Prioritize original, in-depth content that addresses searcher intent while adhering to Google's quality guidelines. Employ technical SEO best practices, ensuring your site is fast, mobile-friendly, and crawlable. Build authority through reputable backlinks from relevant websites. Stay updated on algorithm changes, and don't engage in manipulative tactics that violate Google's guidelines. Remember that genuine value for users lies at the heart of long-term success.
                </p>
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

<ClientReviews/>

        <section
            id="faq-premium"
            className="relative overflow-hidden bg-white py-24"
      >
         <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
            {/* Background Creative Elements */}
            <div className="absolute right-0 top-0 -z-10 h-[600px] w-[600px] translate-x-1/2 rounded-full bg-orange-50/50 blur-[120px]" />
            <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-slate-50 blur-[100px]" />

            <div className="mx-auto max-w-3xl px-6">
              {/* Header with Animation */}
              <div className="mb-16 space-y-4 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="mb-2 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-[#DBFFEC] px-4 py-2 text-[#3cb878]"
                >
                  <Sparkles size={16} className="animate-pulse" />
                  <h5 className="h5 font-bold uppercase ">Common Inquiries</h5>
                </motion.div>

                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="h4 tracking-tighter  text-slate-900"
                >
                  Google's <span className="text-[#3cb878]"> Choice</span>
                </motion.h4>
              </div>

              {/* FAQ List */}
              <div className="space-y-4">
                {faqData.map((item, index) => {
                  const isOpen = expanded === index;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative overflow-hidden rounded-[2rem] border transition-all duration-500 ${
                        isOpen
                          ? 'border-[#3cb878] bg-white shadow-[0_20px_40px_rgba(249,115,22,0.08)]'
                          : 'border-slate-100 bg-slate-50/50 hover:border-[#3cb878]'
                      }`}
                    >
                      <button
                        onClick={() => setExpanded(isOpen ? null : index)}
                        className="group flex w-full items-center justify-between p-6 text-left transition-all md:p-8"
                      >
                        <div className="flex items-center gap-4 md:gap-6">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-2xl transition-all duration-500 md:h-12 md:w-12 ${
                              isOpen
                                ? 'rotate-12 bg-[#3cb878] text-white'
                                : 'bg-white text-slate-400 shadow-sm group-hover:text-[#3cb878]'
                            }`}
                          >
                            <HelpCircle size={24} strokeWidth={1.5} />
                          </div>
                          <span
                            className={`p font-bold transition-colors duration-300 ${
                              isOpen
                                ? 'text-slate-900'
                                : 'text-slate-600 group-hover:text-slate-900'
                            }`}
                          >
                            {item.question}
                          </span>
                        </div>

                        <div
                          className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-[#3cb878]' : 'text-slate-300'}`}
                        >
                          <ChevronDown size={24} />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.4,
                              ease: [0.04, 0.62, 0.23, 0.98],
                            }}
                          >
                            <div className="px-6 pb-8 md:px-24 md:pb-10">
                              <div className="mb-6 h-px w-full bg-slate-100" />
                              <p className="text-sm font-medium leading-relaxed text-slate-500 md:text-base">
                                {item.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
      </section>
      <Newsletter/>
      

    </main>
  );
}
