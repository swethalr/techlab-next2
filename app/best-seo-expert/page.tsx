import React from 'react';
import { Metadata } from 'next';
import Hero from '@/src/components/best-seo-expert/hero'
import { MainHeader } from '@/src/layout/header';
import { Footer } from '@/src/layout/footer/v1';
import TopBar from '@/src/components/best-seo-expert/Topbar'
import AboutSection from '@/src/components/best-seo-expert/about-section'
// 1. CRITICAL SEO METADATA - DO NOT CHANGE THESE
export const metadata: Metadata = {
  title: "Best SEO Expert in India | Google #1 Rank Specialist - Zammy Zaif",
  description: "Zammy Zaif is a Google Guidelines based SEO expert since 2008. Specializing in #1 rankings, technical SEO, and ROI focused strategies for local and global brands.",
};

export default function FullSEOPage() {
    return (
      <>
        
         
      
      
        
          <MainHeader version="2" />
          
    <div className="bg-white text-[#444] font-sans selection:bg-[#3cb878] selection:text-white">
          <Hero />
          <AboutSection/>
      {/* --- SECTION 1: SERVICES GRID --- */}
      <section className="py-20 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {[
            { title: "Local SEO", text: "Enhance your website and GMB listing to improve local SEO rankings. Optimization increases organic exposure, helps you rank first on Google SERPs and drives more local sales." },
            { title: "Technical SEO", text: "Audit your website thoroughly to identify any technological flaws or faults that may cause quality difficulties when spiders crawl the site." },
            { title: "Ecommerce SEO", text: "Ecommerce SEO is the process of increasing the visibility of your online business when customers search for your products and categories on search engine results pages." },
            { title: "Content Strategy", text: "With a proper content strategy, selecting right words to build a solid information structure and ensure competitive search engine rankings compared to others." },
            { title: "PR Link Building", text: "Developing effective public relations strategies such as PR and media pitching to get valuable editorial links in order to build trust and authority in highly competitive areas." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-5 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-[#3cb878] flex items-center justify-center text-[#3cb878] group-hover:bg-[#3cb878] group-hover:text-white transition-all duration-300">
                <span className="text-xl font-bold italic">{item.title.charAt(0)}</span>
              </div>
              <div>
                <h5 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h5>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 2: TRUSTING EXPERTS (Light Theme) --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="/assets/images/best-seo-expert/seo-analytics.webp" 
                alt="website rank on google" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="text-[#3cb878] font-bold tracking-[3px] uppercase text-xs">TRUSTING EXPERTS ISN'T MUCH EASY</span>
              <h3 className="h3 font-extrabold text-gray-900 mt-2 mb-4">Digital Marketing or SEO Specialist</h3>
              <div className="flex items-center gap-1 mb-8">
                <span className="h-1 w-6 bg-[#3cb878]"></span>
                <span className="h-1 w-20 bg-[#3cb878]"></span>
              </div>
              <p className="text-justify text-gray-600 leading-relaxed">
                Anyone on the internet may now claim themselves to be the best SEO expert. There are 1.5 million digital marketing specialists. All of them are claiming them as a digital marketing experts or SEO experts... [Include original full text here]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: ROI FOCUSED (Full Green Theme) --- */}
      <section className="py-24 bg-[#3cb878] text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="h2 font-bold mb-4">ROI Focused SEO Expert</h2>
              <div className="flex items-center gap-1 mb-10">
                <span className="h-1 w-6 bg-white/40"></span>
                <span className="h-1 w-24 bg-white"></span>
              </div>
              <p className="text-xl mb-10 text-justify leading-relaxed opacity-95">
                Anyone can perform SEO to reach the first page of SERP, but only the ROI based SEO expert, Mr Zammy promises to secure the top position in Google search engine results for his client’s websites... [Include original full text here]
              </p>
              <a href="contact-zammy-zaif.php" className="inline-block bg-gray-900 text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl">
                Contact Now
              </a>
            </div>
            <div className="lg:w-1/2">
              <img 
                src='/assets/images/best-seo-expert/seo-plan.webp'
                alt="Zammy Zaif"
                className="border-[6px] border-black rounded-[40px] shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: GOOGLE GUIDELINES --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-5/12 order-2 lg:order-1">
              <img 
                src="/assets/images/best-seo-expert/recover-google-penalty-website.webp" 
                alt="recover google penalty website" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="lg:w-7/12 order-1 lg:order-2">
              <span className="text-[#3cb878] font-bold tracking-[3px] uppercase text-xs">ZAMMY ZAIF</span>
              <h2 className="h2 font-extrabold text-gray-900 mt-2 mb-4">Google Guidelines Based SEO Expert</h2>
              <div className="flex items-center gap-1 mb-8">
                <span className="h-1 w-6 bg-[#3cb878]"></span>
                <span className="h-1 w-20 bg-[#3cb878]"></span>
              </div>
              <p className="text-justify text-gray-600 leading-relaxed">
                Since 2008, Zammy Zaif has been a Google Guidelines-based SEO Expert... [Include original full text here]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: TECHNICAL SERVICES LIST --- */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="h2 font-black text-gray-900">Technical SEO Services</h2>
            <div className="flex justify-center items-center gap-1 mt-4">
              <span className="h-1 w-4 bg-[#3cb878]"></span>
              <span className="h-1 w-20 bg-[#3cb878]"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Website Migrations", d: "Migrating your site with adequate planning & taking necessary precautions..." },
              { t: "SEO Audits", d: "A detailed website audit that will give you exact idea of what is the status..." },
              { t: "Penalty Removal", d: "Hit by a Manual action or a Google core update? Don't worry..." },
              { t: "Website Hacked?", d: "Website is hacked? or Spamdexed by an attacker. I will help..." },
              { t: "Javascript SEO", d: "Website not getting crawled by Google? I will fix all crawlability issues..." },
              { t: "Core web Vitals", d: "Improve speed using Google core web vitals & passing your pages..." }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-10 border-b-4 border-[#3cb878] shadow-sm hover:shadow-xl transition-all">
                <h5 className="font-bold text-xl mb-4 text-gray-900">{service.t}</h5>
                <p className="text-gray-600 leading-relaxed text-justify">{service.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: WHY ZAMMY (GOOGLE #1 SPECIALIST) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-7/12">
              <span className="text-[#3cb878] font-bold tracking-[3px] uppercase text-xs">WHY ZAMMY ZAIF</span>
              <h2 className="h2 font-extrabold text-gray-900 mt-2 mb-4">Google #1 Rank Specialist</h2>
              <div className="flex items-center gap-1 mb-8">
                <span className="h-1 w-6 bg-[#3cb878]"></span>
                <span className="h-1 w-20 bg-[#3cb878]"></span>
              </div>
              <p className="text-justify text-gray-600 leading-relaxed">
                Considering various factors of Google's standards, Zammy is a First Rank SEO specialist... [Include original full text here]
              </p>
            </div>
            <div className="lg:w-5/12">
              <img 
                src="/assets/images/seo-expert-india/best-seo-expert-in-india.webp" 
                alt="Best SEO Expert" 
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: VERSA FORGE --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-5/12">
              <img 
                src="/assets/images/seo-expert-india/best-seo-company.webp" 
                alt="Best SEO Company" 
                className="w-full"
              />
            </div>
            <div className="lg:w-7/12">
              <span className="text-[#3cb878] font-bold tracking-[3px] uppercase text-xs">AN EXCELLENT TEAM LED BY ZAMMY ZAIF</span>
              <h3 className="h3 font-extrabold text-gray-900 mt-2 mb-4">Versa Forge – Best SEO Company</h3>
              <div className="flex items-center gap-1 mb-8">
                <span className="h-1 w-6 bg-[#3cb878]"></span>
                <span className="h-1 w-20 bg-[#3cb878]"></span>
              </div>
              <p className="text-justify text-gray-600 leading-relaxed mb-10">
                Versa Forge is the best SEO company, with a team of SEO experts... [Include original full text here]
              </p>
              <a href="contact-zammy-zaif.php" className="bg-[#3cb878] text-white px-12 py-4 rounded-full font-bold uppercase hover:bg-[#2e915d] transition-all">
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 8: NEWSLETTER (GREEN) --- */}
      <section className="py-16 bg-[#3cb878]">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white text-center md:text-left">
            <h4 className="text-3xl font-bold">Email Newsletters!</h4>
            <p className="text-white/80 mt-1">Sign up for new updates & offers.</p>
          </div>
          <form className="flex w-full md:w-auto shadow-2xl">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="p-5 rounded-l-md w-full md:w-80 outline-none text-gray-800" 
            />
            <button className="bg-gray-900 text-white px-8 py-5 rounded-r-md font-bold uppercase hover:bg-black transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>

            </div>
            <Footer/>
            </>
  );
}