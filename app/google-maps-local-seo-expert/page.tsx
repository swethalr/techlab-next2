'use client';
import Hero from "@/src/sections/google-maps-local-seo-ranking-expert/Hero";
import MapsSeoCarousel from "@/src/sections/google-maps-local-seo-ranking-expert/MapsSeoCarousel"
import LeadFormDark from 'src/components/LeadFormDark';
import { MainHeader } from '@/src/layout/header';
import PremiumSEOExpert from '@/src/sections/google-maps-local-seo-ranking-expert/About'
import FuturisticServices from '@/src/sections/google-maps-local-seo-ranking-expert/maps-seo-service'
import RadarSection from '@/src/sections/google-maps-local-seo-ranking-expert/ranking-radius'
import RankingEngine from '@/src/sections/google-maps-local-seo-ranking-expert/search-engine-optimization'
import { Footer } from '@/src/layout/footer/v1';
import WorkSectionDark from '@/src/sections/worksection/worksectiondark';
import {
  motion,
 
} from 'framer-motion';
import { Trophy, Quote,ChevronDown} from 'lucide-react';


import ReCAPTCHA from 'react-google-recaptcha';
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
          
         
      <PremiumSEOExpert />


 <section className="relative overflow-hidden bg-black py-24 lg:py-32">
         <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
        {/* Premium Background Accents */}
        <div className="absolute left-1/4 top-0 -z-10 h-96 w-96 rounded-full  opacity-60 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className="mx-auto mb-6 max-w-7xl space-y-6 text-center"> 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#3cb878] bg-[#dbffce] px-4 py-2"
            >
              <Trophy size={14} className="text-[#3cb878]" />
              <span className="p  font-bold uppercase  text-[#3cb878]">
                Our First Rank Result speak for us
              </span>
            </motion.div>
            <h2 className="h2 tracking-tighter text-white">
              1st Rank {' '}
              <span className=" text-[#3cb878]">
               Result in 45 Days
              </span>
            </h2>
           
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
      <LeadFormDark />

       {/* --- SECTION: CLIENT'S REVIEWS --- */}
          <section
            id="testimonials"
            className="overflow-hidden bg-black py-16"
          >
            <div className="mx-auto max-w-3xl px-6">
              {/* Header Area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 space-y-4 text-center"
              >
                <h5 className="h5  font-bold uppercase tracking-[0.2em] text-[#3cb878]">
                  Successful Businesses Testimonials
                </h5>
                <h3 className="h3  leading-[0.9] tracking-tighter text-white">
                  Client&apos;s <span className="text-[#3cb878]"> Reviews</span>
                </h3>
              </motion.div>

              {/* Premium Carousel Container */}
              <div className="relative   px-4">
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
                        className="relative mx-auto max-w-4xl bg-emerald-500/30 overflow-hidden rounded-[3rem] border border-slate-100  p-10 text-center shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] md:p-16"
                      >
                        {/* Massive Decorative Quote Icon */}
                        <Quote
                          className="absolute right-10 top-10 text-white/10"
                          size={120}
                        />

                        <div className="relative  z-10 space-y-8">
                          <p className="p italic leading-relaxed text-white">
                            &quot;{review.quote}&quot;
                          </p>

                          <div className="flex flex-col  items-center gap-4">
                            {/* Client Logo using the dynamic logoUrl */}
                            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4 border-orange-50 bg-white p-2 shadow-sm">
                              <img
                                src={review.logoUrl}
                                alt={review.name}
                                className="h-full w-full object-contain"
                              />
                            </div>

                            <div>
                              <h4 className="h4 font-black uppercase tracking-tighter text-white">
                                {review.name}
                              </h4>
                              <p className="p mt-1 text-xs font-black uppercase tracking-widest text-emerald-300">
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
                  className=" group rounded-2xl bg-emerald-700/50 px-10 py-5 text-white shadow-xl transition-all duration-500 hover:bg-white hover:text-[#3cb878]"
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
      
      <FuturisticServices />
      <RadarSection />

<section className="relative bg-black  py-20 overflow-hidden">
  

  <div className="relative max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center"> 

      
      {/* IMAGE SIDE */}
      <div className="relative group lg:col-span-5">

        <div className="absolute inset-0 bg-black rounded-3xl blur-xl  group-hover:opacity-100 transition"></div>

        <img
          src="/assets/images/best-seo-expert/global-google-ranking-expert.webp"
          alt="Local SEO 1st Rank Expert"
          className="relative z-10 w-full rounded-3xl shadow-2xl border border-green-100"
        />
      </div>

      {/* CONTENT SIDE */}
     <div className="lg:col-span-7">
       <span className="p text-emerald-400 font-medium uppercase">Zammy Zaif</span>
        <h2 className="h2 text-white max-w-6xl leading-tight"> 
         Global Google Ranking Expert
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-4 mb-6"></div>
   
        <p className="text-white p leading-relaxed">
          Zammy Zaif is a recognized authority in Google Business Profile (formerly Google My Business) optimization, celebrated for his profound understanding of Google’s guidelines, ranking factors, and algorithms. With a proven track record across various industries and countries, he has effectively resolved claims and verification issues while optimizing profiles to secure the No. 1 rank. Since the platform's inception, Zammy has adhered to best practices to achieve and maintain top rankings for businesses on Google Maps.
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

      
      <section className="relative bg-black  py-20 overflow-hidden">
  

  <div className="relative max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center"> 

      
            
              {/* CONTENT SIDE */}
     <div className="lg:col-span-7">
       <span className="p text-emerald-400 font-medium uppercase">Zammy Zaif</span>
        <h2 className="h2 text-white max-w-6xl leading-tight"> 
        Expert Local SEO Consultant
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-4 mb-6"></div>
   
        <p className="text-white p leading-relaxed">As a team, we have successfully completed numerous local, city, state, national, and global SEO projects, focusing on tailored competition, keyword, and user intent analysis to identify keywords that drive business and revenue for our clients. After finalizing target keywords, we consult with our clients in detail before initiating each project, ensuring our commitment to achieving No. 1 rankings for local SEO within 45 working days. For city-based projects, we typically achieve first rankings within 6 months, while state-level rankings take about 9 months. Country-level rankings require 12 to 16 months, and general keyword rankings on a global scale can take between 24 to 36 months. Our expertise in data analysis and strategic implementation has solidified our reputation as leading experts in Local SEO, helping businesses maximize their visibility and performance in local search results.
        </p>

       
            </div>
            
      {/* IMAGE SIDE */}
      <div className="relative group lg:col-span-5">

        <div className="absolute inset-0 bg-black rounded-3xl blur-xl  group-hover:opacity-100 transition"></div>

        <img
          src="/assets/images/best-seo-expert/expert-local-seo-consultant.webp"
          alt="Local SEO 1st Rank Expert"
          className="relative z-10 w-full rounded-3xl shadow-2xl border border-green-100"
        />
      </div>

    
    </div>
  </div> 
      </section>


<WorkSectionDark/>




      <section className="relative bg-black  py-20 overflow-hidden">
  

  <div className="relative max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center"> 

      
      {/* IMAGE SIDE */}
      <div className="relative group lg:col-span-5">

        <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl  group-hover:opacity-100 transition"></div>

        <img
          src="/assets/images/best-seo-expert/local-seo (1).webp"
          alt="Local SEO 1st Rank Expert"
          className="relative z-10 w-full rounded-3xl shadow-2xl border border-green-100"
        />
      </div>

      {/* CONTENT SIDE */}
     <div className="lg:col-span-7">
      
        <h2 className="h2 text-white max-w-6xl leading-tight"> 
         Google Places to Google Maps
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-4 mb-6"></div>
   
        <p className="text-white p leading-relaxed">
         In early 2009, Google introduced Google Places as a simple way for businesses to claim their location on Google Maps. By 2014, it was rebranded as Google My Business, a free tool that allows businesses to manage their online presence across Google. It’s a crucial platform for local businesses, as nearly half of Google’s 4 billion daily searches are for local businesses. In 2020, Google My Business was renamed Google Business Profile, merging with Google Maps to help businesses better manage their online presence. This shift emphasizes the importance of having a physical location to appear on Google Maps, providing an essential connection between local businesses and customers.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300">
            Contact Now
            <span className="inline-block transform group-hover:translate-x-1 transition">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  </div> 
      </section>


      
      
      <RankingEngine/>
     
      


            <section className="font-sans flex min-h-[650px] w-full flex-col bg-black lg:flex-row">
              {/* LEFT SIDE: ONLY IMAGE - CLEAN VERSION */}
              <div className="relative flex w-full items-end justify-center overflow-hidden bg-emerald-900/40 pt-10 lg:w-1/2 lg:pt-20">
                <div className="relative z-10 w-full px-4 lg:px-10">
                  <img
                    src="https://it2.tv/img/google-maps-local-seo-ranking-expert/first-rank-expert.webp"
                    alt="Best SEO Expert"
                    className="mx-auto block h-auto max-h-[600px] w-full object-contain"
                  />
                </div>
              </div>
      
              {/* RIGHT SIDE: FORM COLUMN */}
              <div className="flex w-full items-center justify-center bg-emerald-900/50 p-6 md:p-12 lg:w-1/2 lg:p-16">
                <div className="w-full max-w-2xl rounded-[2.5rem] border-[3px] border-white/30 p-8 md:p-12">
                  {/* Form Heading: H2 inside H2 as requested */}
                  <h4 className="h4 mb-10 text-center tracking-tight text-white">
                    Get a free SEO plan
                  </h4>
      
                  <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Name*"
                      required
                      className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Your Phone*"
                      required
                      className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Your Email*"
                      required
                      className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
                    />
      
                    <div className="relative">
                      <select className="h-14 w-full cursor-pointer appearance-none rounded-full bg-white px-6 text-slate-500 focus:outline-none">
                        <option value="">Website SEO Services</option>
                        <option value="google-ranking">Google Ranking</option>
                        <option value="local-seo">Local SEO</option>
                      </select>
                      <ChevronDown
                        className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-slate-400"
                        size={20}
                      />
                    </div>
      
                    <input
                      type="text"
                      placeholder="GBP or Website URL"
                      className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="h-14 w-full rounded-full bg-white px-6 text-slate-800 placeholder:text-slate-400 focus:outline-none"
                    />
      
                    {/* ReCAPTCHA Container */}
                    <div className="flex justify-center py-2 md:col-span-2">
                      <div className="scale-90 transform rounded-xl bg-white p-2 shadow-md md:scale-100">
                        <ReCAPTCHA
                          sitekey="YOUR_RECAPTCHA_SITE_KEY"
                          onChange={(val: string | null) => console.log(val)}
                        />
                      </div>
                    </div>
      
                    <button
                      type="submit"
                      className="mt-2 rounded-full bg-emerald-400/40 py-5 font-black uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:bg-slate-900 active:scale-95 md:col-span-2"
                    >
                      Submit Seo Estimate Request
                    </button>
                  </form>
                </div>
              </div>
            </section>
      <Footer/>
    </main>
    
  );
}
