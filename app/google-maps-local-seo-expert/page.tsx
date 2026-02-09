'use client';
import Hero from "@/src/sections/google-maps-local-seo-ranking-expert/Hero";
import MapsSeoCarousel from "@/src/sections/google-maps-local-seo-ranking-expert/MapsSeoCarousel"
import LeadForm from 'src/components/LeadForm';
import { MainHeader } from '@/src/layout/header';
import PremiumSEOExpert from '@/src/sections/google-maps-local-seo-ranking-expert/About'
import FuturisticServices from '@/src/sections/google-maps-local-seo-ranking-expert/maps-seo-service'
import RadarSection from '@/src/sections/google-maps-local-seo-ranking-expert/ranking-radius'
import RankingEngine from '@/src/sections/google-maps-local-seo-ranking-expert/search-engine-optimization'
import {
  motion,
 
} from 'framer-motion';
import { Trophy, Quote} from 'lucide-react';



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';




export default function GoogleMapsLocalSeoRankingExpertPage() {
  const reviews = [
  {
    name: 'Zain Towing Service LLC',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/zain-towing-service-lousiana.svg',
    quote:
      'Working with Zammy Zaif has been a game-changer for our business. His expertise as a Google SEO Consultant has helped us achieve first-rank results for multiple keywords, including those crucial to our towing service. Zammy’s strategic approach and dedication have significantly boosted our visibility and customer inquiries. We highly recommend his services to anyone looking to dominate their local search results.',
  },
  {
    name: 'Ambica Gold Buyers',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/ambica-gold-bommanahalli.svg',
    quote:
      'Zammy Zaif’s exceptional skills as a Google SEO Expert have truly transformed our online presence. He successfully secured top rankings for our key phrases related to gold buying services. His meticulous approach to SEO and commitment to delivering results have made a remarkable difference in our business’s visibility and growth. We are incredibly satisfied with his work and would gladly endorse his services.',
  },
  {
    name: 'Sri Sairam Tution Centre',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/sairam-tuition-chennai.svg',
    quote:
      'We’ve been thoroughly impressed with Zammy Zaif’s expertise as a Google SEO Consultant. Thanks to his strategic SEO efforts, we now rank at the top for numerous keywords related to our physics tuition services. His attention to detail and ability to achieve first-rank results have been instrumental in attracting more students to our centre. Zammy’s work has exceeded our expectations, and we highly recommend him.',
  },
  {
    name: 'Studio7RK Photography',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/studio7rk-salem.svg',
    quote:
      'Zammy Zaif has done an outstanding job in boosting our online presence. As a Google SEO Expert, he achieved first-rank results for various keywords related to our photography services. His expertise and dedication to SEO have greatly increased our visibility and client inquiries. We are delighted with the results and highly recommend Zammy for anyone looking to enhance their search engine rankings.',
  },
  {
    name: 'Orange Beauty Clinic',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/orange-clinic-chennai.svg',
    quote:
      'Thanks to Zammy Zaif’s exceptional skills as a Google SEO Consultant, we have seen significant improvements in our online search rankings. His expertise led to top positions for several keywords related to our scar removal clinic. Zammy’s professional approach and effective SEO strategies have had a substantial positive impact on our business. We are very pleased with his services and recommend him without reservation.',
  },
  {
    name: 'Kathleen Black International Inc.',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/kathleena-black-toronto.svg',
    quote:
      'Zammy Zaif’s work as a Google SEO Expert has been pivotal for our real estate business coaching services. His strategic SEO efforts have secured top rankings for many of our targeted keywords, enhancing our global visibility. Zammy’s dedication and results-oriented approach have been instrumental in our growth. We are extremely satisfied with his services and highly recommend him.',
  },
  {
    name: 'Infant Traders',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/infant-traders-tuticorin.svg',
    quote:
      'Zammy Zaif’s expertise as a Google SEO Consultant has greatly improved our online presence. His effective SEO strategies achieved first-rank results for multiple keywords related to scuba products in Tuticorin. Zammy’s thorough and professional approach has significantly boosted our visibility and customer engagement. We are thrilled with the results and highly recommend his services.',
  },
  {
    name: 'Prima Properties',
    title: 'Valuable Client',
    logoUrl:
      'https://it2.tv/seo-services/img/demo-content/clients/prima-properties-london.svg',
    quote:
      'We are very pleased with Zammy Zaif’s work as a Google SEO Expert. His strategic SEO efforts led to top rankings for several keywords related to our property buying services in London. Zammy’s ability to deliver first-rank results and his commitment to our success have been invaluable. We highly recommend him to anyone seeking to enhance their search engine performance.',
  },
];
  return (
    
    <main className="overflow-x-hidden">
      <MainHeader version="2" />
          <Hero />
          
          <section className="relative bg-gradient-to-br from-white via-green-50 to-white py-20 overflow-hidden">
  {/* subtle background glow */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-200/30 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

      
      {/* IMAGE SIDE */}
      <div className="relative group lg:col-span-5">

        <div className="absolute inset-0 bg-gradient-to-tr from-green-400/20 to-emerald-400/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition"></div>

        <img
          src="/assets/images/best-seo-expert/local-seo-expert.webp"
          alt="Local SEO 1st Rank Expert"
          className="relative z-10 w-full rounded-3xl shadow-2xl border border-green-100"
        />
      </div>

      {/* CONTENT SIDE */}
     <div className="lg:col-span-7">

        <h2 className="h2 text-gray-700 max-w-6xl leading-tight"> 
          Expert in Local SEO #1 Rank 
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-4 mb-6"></div>

        <p className="text-black p leading-relaxed">
          Zammy Zaif and our team possess extensive expertise in securing first-rank
          results for Google Business Profiles. Drawing from our experience with over
          1,200 projects, we have developed tailored strategies for various industries.
          We have established a streamlined pipeline approach to optimize Google Maps
          business listings, ensuring strict adherence to Google’s guidelines. This
          enables us to achieve No. 1 local SEO rankings within 45 business days. Our
          proven strategy has been successfully implemented for over 800 businesses,
          consistently delivering top rankings.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300">
            GET QUOTE
            <span className="inline-block transform group-hover:translate-x-1 transition">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  </div> 
      </section>
      <PremiumSEOExpert />
      <FuturisticServices />
      <RadarSection />
      <RankingEngine />
      
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
            <p className="p text-black  max-w-7xl" >Google Ranking Services specializes in achieving the first rank on Google's SERP for clients locally & globally. We offer comprehensive services, including competitor analysis, strategic content creation, high-quality backlinks, GBP optimization & on-page technical optimization tailored to align with Google's algorithms. Our team of Google Rank Experts attracts the right audience for your business with our specialized SEO ranking services.</p>
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

      <LeadForm />
      
     {/* --- SECTION: CLIENT'S REVIEWS --- */}
          <section
            id="testimonials"
            className="overflow-hidden bg-slate-50 py-16"
          >
            <div className="mx-auto max-w-3xl px-6">
              {/* Header Area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 space-y-4 text-center"
              >
                <h5 className="h5  font-bold uppercase tracking-[0.4em] text-[#3cb878]">
                  Successful Businesses Testimonials
                </h5>
                <h3 className="h3  leading-[0.9] tracking-tighter text-slate-900">
                  Client&apos;s <span className="text-[#3cb878]"> Reviews</span>
                </h3>
              </motion.div>

              {/* Premium Carousel Container */}
              <div className="relative px-4">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 6000, disableOnInteraction: false }}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  className="pb-20"
                >
                  {/* Map through your actual reviews data */}
                  {reviews.map((review, i) => (
                    <SwiperSlide key={i}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="relative mx-auto max-w-4xl overflow-hidden rounded-[3rem] border border-slate-100 bg-white p-10 text-center shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] md:p-16"
                      >
                        {/* Massive Decorative Quote Icon */}
                        <Quote
                          className="absolute right-10 top-10 text-[#3cb878]/10"
                          size={120}
                        />

                        <div className="relative z-10 space-y-8">
                          <p className="p italic leading-relaxed text-slate-900">
                            &quot;{review.quote}&quot;
                          </p>

                          <div className="flex flex-col items-center gap-4">
                            {/* Client Logo using the dynamic logoUrl */}
                            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4 border-orange-50 bg-white p-2 shadow-sm">
                              <img
                                src={review.logoUrl}
                                alt={review.name}
                                className="h-full w-full object-contain"
                              />
                            </div>

                            <div>
                              <h4 className="h4 font-black uppercase tracking-tighter text-slate-900">
                                {review.name}
                              </h4>
                              <p className="p mt-1 text-xs font-black uppercase tracking-widest text-[#3cb878]">
                                {review.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* CTA: Our Google Reviews Button */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-10 text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=" group rounded-2xl bg-slate-900 px-10 py-5 text-white shadow-xl transition-all duration-500 hover:bg-white hover:text-[#3cb878]"
                >
                  <span className="p flex items-center gap-3 font-bold uppercase tracking-[0.25em]">
                    Our Google Reviews
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="text-[#3cb878] group-hover:text-[#3cb878]"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </span>
                </motion.button>
              </motion.div>
            </div>

            {/* Custom CSS for Pagination Bullets */}
            <style jsx global>{`
              .swiper-pagination-bullet {
                background: #cbd5e1 !important;
                opacity: 1 !important;
                width: 10px !important;
                height: 10px !important;
                transition: all 0.3s ease;
              }
              .swiper-pagination-bullet-active {
                background: #3cb878 !important;

                width: 30px !important;
                border-radius: 5px !important;
              }
            `}</style>
          </section>

      <MapsSeoCarousel />
      <RadarSection />
    </main>
  );
}
