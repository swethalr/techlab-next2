'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/app/best-seo-professional/HeroSection'
import { MainHeader } from '@/src/layout/header'
import TopBar from '@/app/best-seo-professional/TopBar'
import LeadForm from 'src/components/LeadForm';
import Newsletter from 'src/components/NewsLetter';
import { Footer } from '@/src/layout/footer/v1';
const BestSEOProfessional: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');

const services = [
  {
    title: "Website Migrations",
    desc: `Migrating your site with adequate planning & taking necessary
precautions so that you don't loose your existing authority and
rankings. Without an organic SEO expert your migrations can
result in drop in traffic & rankings.`,
  },
  {
    title: "SEO Audits",
    desc: `A detailed website audit that will give you exact idea of what is the
status of your website w.r.t to Technology, Content & Authority
and what are the issues that you have to fix to grow your organic
rankings and Traffic.`,
  },
  {
    title: "Penalty Removal",
    desc: `Hit by a Manal action or a Google core update ? Don't worry I have
it all covered in this. I will help you remove your existing penalty
and get you where you were before.`,
  },
  {
    title: "Website Hacked ?",
    desc: `Website is hacked ? or Spamdexed by an attacker. I will help your
website get back in shape and suggest ways to improve your
website's security to avoid any future Attacks.`,
  },
  {
    title: "Javascript SEO",
    desc: `Website not getting crawled by Google ? I will help your website to fix all the crawlability issues related to Javascript SEO and Make sure your website gets rendered by Google.`,
  },
  {
    title: "Core Web Vitals",
    desc: `As a Google SEO specialist, page speed & page experience are essential. I will assist you in improving your webpage speed using Google core web vitals & passing your pages through Search Console.`,
  },
];

  const slides = [
    {
      title: 'Do you want to Hire a Best SEO Expert',
      subtitle: 'Hire the best google seo expert to boost your google search engine rankings',
    },
    {
      title: 'Google #1 Rank Specialist',
      subtitle: 'Obtaining high-quality targeted organic traffic without paying paid ads.',
    },
    {
      title: 'Best Google SEO Professional',
      subtitle: 'Grow Your Business with New Clients? Contact us immediately',
    },
  ];
type CardItem = {
  title: string;
  desc: string;
  active?: boolean; // optional
};

  const cards: CardItem[] = [
  {
    title: "Rank #1 Achiever",
    desc: "We are a leading SEO firm that achieves #1 rankings for websites in Google.",
  },
  {
    title: "Industries & Countries",
    desc: "We worked with over 300 clients from various industries & locations.",
  },
  {
    title: "No. of Students",
    desc: "225 people have learned ethical SEO from Zammy until March 2023.",
    
  },
  {
    title: "White Hat SEO",
    desc: "Because of preserving brand integrity we only practise white hat SEO.",
  },
];

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
  };

    return (
        <>
           <TopBar/>
            <MainHeader version="2" />
            
            <HeroSection/>
   <div className="min-h-screen bg-white">
      {/* Top Bar */}
     {/* <div className="bg-[#1a1a2e] text-white py-2">
        <div className="container mx-auto px-4"> 
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Image src="https://it2.tv/img/call.webp" alt="Call" width={20} height={20} />
                <a href="https://wa.me/919344618144" className="hover:text-blue-400">Live Chat with Expert</a>
              </div>
              <a href="mailto:enquiry@it2.tv" className="hover:text-blue-400">enquiry@it2.tv</a>
            </div>
            <div className="flex items-center gap-2">
              <span>Follow us:</span>
              <div className="flex gap-2">
                <a href="https://goo.gl/maps/ihFiQeqtGGQfrkqh7" target="_blank" rel="noopener noreferrer">
                  <Image src="https://it2.tv/img/google.webp" alt="Google" width={20} height={20} />
                </a>
                <a href="https://www.facebook.com/googleseospecialist" target="_blank" rel="noopener noreferrer">
                  <Image src="https://it2.tv/img/fb.webp" alt="Facebook" width={20} height={20} />
                </a>
                <a href="https://twitter.com/gseospecialist" target="_blank" rel="noopener noreferrer">
                  <Image src="https://it2.tv/img/twitter.webp" alt="Twitter" width={20} height={20} />
                </a>
                <a href="https://www.instagram.com/googlerankingexpert/" target="_blank" rel="noopener noreferrer">
                  <Image src="https://it2.tv/img/instagram.webp" alt="Instagram" width={20} height={20} />
                </a>
                <a href="https://www.linkedin.com/in/googlerankingexpert/" target="_blank" rel="noopener noreferrer">
                  <Image src="https://it2.tv/img/linkedin.webp" alt="LinkedIn" width={20} height={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
    {/*  <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/">
              <Image src="https://it2.tv/img/it2-logo.svg" alt="Zammy Zaif Logo" width={150} height={50} />
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="https://it2.tv/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link href="https://it2.tv/about-zammy-zaif.php" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
              <Link href="https://it2.tv/our-services.php" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
              <Link href="https://it2.tv/case-studies.php" className="text-gray-700 hover:text-blue-600 font-medium">Case Studies</Link>
              <Link href="https://it2.tv/pricing-details.php" className="text-gray-700 hover:text-blue-600 font-medium">Pricing</Link>
              <Link href="https://it2.tv/seo-update/" className="text-gray-700 hover:text-blue-600 font-medium">Updates</Link>
              <Link href="https://it2.tv/contact-zammy-zaif.php" className="text-gray-700 hover:text-blue-600 font-medium">Contacts</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Slider */}
    {/*  <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <Image src="https://it2.tv/img/it2-logo.svg" alt="Zammy Zaif" width={80} height={80} className="mx-auto mb-6" />
            </div>
            <h1 className="h1 font-bold mb-4">{slides[currentSlide].title}</h1>
            <h6 className="h6 mb-8 text-gray-200">{slides[currentSlide].subtitle}</h6>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all">
              Get Started
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Service Cards */}
    {/*  <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold text-blue-600">01</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">Google SEO</h4>
                  <p className="text-gray-600 p">Want to Rank No.1 on Google</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold text-blue-600">02</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">My Business Optimization</h4>
                  <p className="text-gray-600 p">Get your business profile on top</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold text-blue-600">03</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">Rank No.1 in Google</h4>
                  <p className="text-gray-600 text-[18px]">Get your website rank no.1 in Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          </section>*/}
          
          <section className="bg-white relative py-16 md:py-24 font-sans">
            
 <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>

  <div className="container mx-auto px-4 max-w-7xl">
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

      {/* Left Side */}
      <div className="w-full lg:w-[40%]">
        <div className="bg-[#29cc84] rounded-xl p-8 md:p-12 text-center shadow-lg">

          <div className="bg-white p-2 rounded-lg shadow-md mb-10 overflow-hidden">
            <img
              src="/assets/images/best-seo-expert/google-certified-seo-expert-india.webp"
              alt="Zammy Zaif Certificate"
              className="w-full h-auto block rounded"
            />
          </div>

          <div className="flex flex-col ">
            <div>
              <div className="text-white text-xl font-bold">18+</div>
              <span className="text-white text-[18px] block ">
                Years Of Experience
              </span>
            </div>

            <div>
              <div className="text-white text-xl font-bold">2T+</div>
              <span className="text-white text-[18px] block ">
                 Clients
              </span>
            </div>

            <div>
              <div className="text-white text-xl font-bold">3K+</div>
              <span className="text-white text-[18px] block ">
                Projects
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-[60%]">
        <span className="text-[#29cc84] text-[24px] font-semibold block mb-2">
          Proven Ranking Mastery Since 2008
        </span>

        <h2 className="text-[#222222] max-w-7xl h2 mb-4">
          Best Google SEO Professional
        </h2>

        <div className="w-16 h-[3px] bg-[#29cc84] mb-8"></div>

        <div className="space-y-6 text-[#444444] leading-[2em]">
          <p>
           Zammy Zaif earns the global title of the best SEO professional through his unmatched track record of delivering #1 Google rankings for clients globally since 2008. Zaif's strategies consistently secure First & Top positions by adhering strictly to Google guidelines, transforming small businesses into lead-generating powerhouses. His shift since 2014 to prioritize the #1 spot has boosted organic traffic by up to 50% and click-through rates by 20% for websites. This precision stems from deep technical audits, on-page optimization and ethical link-building that align with evolving algorithms.
          </p>

          <p>
            Google recognizes Zaif via featured snippets and Search Central mentions, spotlighting his content as authoritative since 2018. Over 20 years, his methods have engaged 5 million+ users monthly without third-party shortcuts, earning trust from 1000+ entrepreneurs. As CEO of Versa Forge, he resolves complex issues like map spam and profile hurdles for local dominance.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-2xl border-4 border-[#3cb878] bg-white p-8
                transition-colors duration-500 group
                ${card.active ? "text-white" : "text-[#222]"}
              `}
            >
              {/* WATER FILL LAYER */}
              <span
                className={`
                  absolute inset-0 bg-[#39b36b]
                  transform scale-x-0 origin-left
                  transition-transform duration-700 ease-in-out
                  group-hover:scale-x-100
                  ${card.active ? "scale-x-100" : ""}
                `}
              />

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg tracking-tighter font-semibold mb-4"> 
                  {card.title}
                </h3>

                <p
                  className={`
                    text-[18px] leading-relaxed mb-8
                    ${
                      card.active
                        ? "text-white"
                        : "text-black group-hover:text-white"
                    }
                  `}
                >
                  {card.desc}
                </p>

                <Link
                  href="/contact"
                  className={`
                    mt-auto inline-flex items-center gap-2 font-medium
                    transition-colors duration-300
                    ${
                      card.active
                        ? "text-white"
                        : "text-[#222] group-hover:text-white"
                    }
                  `}
                >
                  Get In Touch
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
          <LeadForm/>
<section className="relative bg-[#3bc878]/50  overflow-hidden py-20 md:py-28">
      
      {/* Decorative Background Image bg-[#29cc84] */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/assets/images/best-seo-expert/elements.png"
          alt=""
          fill
          priority
          aria-hidden
          className="
            object-contain
            opacity-100
            hidden md:block
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-black h3 font-bold mb-4">
          Client Impact and Innovation
        </h3>

        {/* Divider */}
        <div className="flex justify-center mb-6">
          <span className="block w-12 h-[2px] bg-white opacity-70"></span>
          <span className="block w-12 h-[2px] bg-white opacity-40 mx-2"></span>
          <span className="block w-12 h-[2px] bg-white opacity-70"></span>
        </div>

        <p className="text-black p leading-relaxed max-w-3xl mx-auto">
          Zaif customizes plans around audience insights, competitors and AIDA
          frameworks to drive sales conversions beyond mere visibility. His
          content creation - optimized blogs, SOPs, and meta structures—elevates
          brand credibility worldwide. Businesses hail him for measurable
          growth, from lead surges to top SERP presence, solidifying his global
          reputation.
        </p>
      </div>

    </section> 


          <section className="overflow-hidden relative py-24 selection:bg-orange-100 lg:py-32">
         <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
     
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-16 lg:flex-row-reverse lg:gap-24">
            {/* --- IMAGE CONTAINER --- */}
            <div className="group relative w-full lg:w-[50%]">
              {/* Modern Bordered Wrapper */}
              <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-[3rem]">
                  {/* Main Platform Illustration */}
                  <img
                    src="/assets/images/best-seo-expert/different-industry-experience.webp"
                    alt="Google Ranking Platforms Cloud"
                    className=" h-full w-full "
                  />
                </div>
              </div>
              {/* Decorative Background Aura */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
            </div>
            {/* --- CONTENT AREA --- */}
            <div className="w-full space-y-10 lg:w-[60%]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#3cb878]] h-0.5 w-12" />                  
                </div>
                 <h5 className="h5 mb-1 font-bold uppercase tracking-wider text-[#3cb878]">
            Extensive Professional Experience
            </h5>
                <h3 className="h3 leading-[0.95]  text-slate-900">                                    
                    Diverse Industries & Geographies
                </h3>
              </div>

              <div className="space-y-6">
                <p className="p leading-relaxed text-black">
                  
                Delving into Zammy's professional background, prior to starting his company he has worked with over 3000+ clients worldwide. From various leading advertising agencies across industries such as educational institutions, healthcare, tourism, construction and hyperlocal businesses located in numerous geographic regions. Spreading across India, Canada, United Kingdom, United States of America, Australia, Ireland, France, UAE, Malaysia, Cambodia, Germany, Singapore, Sweden, Switzerland, New Zealand, South Korea, Bahrain, Kuwait, Qatar, Oman, Saudi Arabia, Norway, Panama, Denmark, Finland and Mexico.
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
          <section className=" relative py-20 md:py-28">
            
 {/* Background Grids and Glows */}
     
      
        

      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Small Heading */}
        <span className="block h5 font-semibold tracking-widest text-[#2bb7a9] mb-3">
          FEATURED SEO COURSE
        </span>

        {/* Main Heading */}
        <h2 className="h2 font-bold text-[#222222] mb-4">
          Master in SEO
        </h2>

        {/* Divider */}
        <div className="flex justify-center mb-6">
          <span className="block w-10 h-[2px] bg-[#2bb7a9]"></span>
          <span className="block w-10 h-[2px] bg-[#2bb7a9] ml-3"></span>
        </div>

        {/* Description */}
        <p className="max-w-5xl mx-auto text-black text-[18px] leading-relaxed mb-14">
          The future of SEO, revolves around upholding brand integrity, building
          trust and gaining authority through partnerships. Thus, every
          individual should pursue the most suitable path towards success and
          learn SEO from Zammy. As of July 2023, a total of 250 individuals have
          been taught ethical SEO by the Master himself.
        </p>

        {/* Illustration */}
        <div className="relative w-full max-w-2xl mx-auto">
          <Image
            src="/assets/images/best-seo-expert/master-in-seo.webp"
            alt="Master in SEO course illustration"
            width={900}
            height={500}
            className="w-full h-auto mx-auto"
            priority
          />
        </div>

      </div>
          </section>
          
          <section className=" relative py-20 md:py-28">
            
   {/* Background Grids and Glows */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[100px]" />
      </div>
          


      <div className="max-w-6xl mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h3 className="h3 font-bold text-[#222222] mb-4">
            Zammy&apos;s SEO Services
          </h3>

          <div className="flex justify-center">
            <span className="block w-12 h-[2px] bg-[#2bb7a5]"></span>
            <span className="block w-12 h-[2px] bg-[#2bb7a5] mx-2 opacity-50"></span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14">

          {/* Global SEO */}
          <div className="flex items-start gap-5">
            <Image
              src="/assets/images/best-seo-expert/global-seo.webp"
              alt="Global SEO"
              width={100}
              height={100}
              className="shrink-0"
            />
            <div>
              <h4 className="h4 font-semibold text-[#222222] mb-2">
                Global SEO
              </h4>
              <p className="text-black text-[18px] leading-relaxed">
                Specializing in multilingual SEO, they excel at enhancing the
                visibility of businesses on a global scale through customized
                strategies for SERP domination.
              </p>
            </div>
          </div>

          {/* Local SEO */}
          <div className="flex items-start gap-5">
            <Image
              src="/assets/images/best-seo-expert/local-seo.webp"
              alt="Local SEO"
              width={100}
              height={100}
              className="shrink-0"
            />
            <div>
              <h4 className="h4 font-semibold text-[#222222] mb-2">
                Local SEO
              </h4>
               <p className="text-black text-[18px] leading-relaxed">
                Enhance your website and GMB listing to improve local SEO
                rankings. Optimization increases organic exposure, helps you
                rank first on Google SERPs and drives more local sales.
              </p>
            </div>
          </div>

          {/* Technical SEO */}
          <div className="flex items-start gap-5">
            <Image
              src="/assets/images/best-seo-expert/technical-seo.webp"
              alt="Technical Seo"
              width={100}
              height={100}
              className="shrink-0"
            />
            <div>
              <h4 className="h4 font-semibold text-[#222222] mb-2">
                Technical SEO
              </h4>
              <p className="text-black text-[18px] leading-relaxed">
                Audit your website thoroughly to identify any technological
                flaws or faults that may cause quality difficulties when
                spiders crawl the site.
              </p>
            </div>
          </div>

          {/* Ecommerce SEO */}
          <div className="flex items-start gap-5">
            <Image
              src="/assets/images/best-seo-expert/ecommerce-seo.webp"
              alt="Ecommerce SEO"
              width={100}
              height={100}
              className="shrink-0"
            />
            <div>
              <h4 className="h4 font-semibold text-[#222222] mb-2">
                Ecommerce SEO
              </h4>
               <p className="text-black text-[18px] leading-relaxed">
                Ecommerce SEO is the process of increasing the visibility of
                your online business when customers search for your products
                and categories on search engine results pages.
              </p>
            </div>
          </div>

          {/* Content Strategy */}
          <div className="flex items-start gap-5">
            <Image
              src="/assets/images/best-seo-expert/content-strategy.webp"
              alt="Content Strategy"
              width={100}
              height={100}
              className="shrink-0"
            />
            <div>
              <h4 className="h4 font-semibold text-[#222222] mb-2">
                Content Strategy
              </h4>
               <p className="text-black text-[18px] leading-relaxed">
                With a proper content strategy, selecting right words to build
                a solid information structure and ensure competitive search
                engine rankings compared to others.
              </p>
            </div>
          </div>

          {/* PR Link Building */}
          <div className="flex items-start gap-5">
            <Image
              src="/assets/images/best-seo-expert/pr-link-building.webp"
              alt="PR Link Building"
              width={100}
              height={100}
              className="shrink-0"
            />
            <div>
              <h4 className="h4 font-semibold text-[#222222] mb-2">
                PR Link Building
              </h4>
               <p className="text-black text-[18px] leading-relaxed">
                Developing effective public relations strategies such as PR and
                media pitching to get valuable editorial links in order to
                build trust and authority in highly competitive areas.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

          <section className="overflow-hidden relative bg-white py-24 selection:bg-orange-100 lg:py-32">
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-16">
            {/* --- IMAGE CONTAINER --- */}
            <div className="group relative w-full lg:w-[50%]">
              {/* Modern Bordered Wrapper */}
              <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-[3rem]">
                  {/* Main Platform Illustration */}
                  <img
                    src="/assets/images/best-seo-expert/website-rank-on-google.webp"
                    alt="Google Ranking Platforms Cloud"
                    className=" h-full w-full "
    
                  />
                </div>
              </div>

              {/* Decorative Background Aura */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="w-full space-y-5 lg:w-[60%]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#3cb878]] h-0.5 w-12" />
                  
                </div>
                 <h5 className="h5 mb-1 font-bold uppercase tracking-wider text-[#3cb878]">
           TRUSTING EXPERTS ISN'T MUCH EASY
            </h5>
                <h3 className="h3 leading-[0.95]  text-slate-900">
                 
                   
                   Digital Marketing or SEO Professional
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-[16px] leading-[2em] text-black">
                  Anyone on the internet may now claim themselves to be the best SEO expert. There are 1.5 million digital marketing specialists. All of them are claiming them as a digital marketing experts or SEO experts. Engineers are classified into several categories, including Civil Engineer, Computer Engineer, Software Engineer, Electronics & Communication Engineer, Electrical & Electronics Engineer, Mechanical Engineer, and so on. Similarly, there are several sectors in digital marketing. Facebook Marketing, LinkedIn Marketing, Instagram Marketing, Search Engine Marketing, Search Engine Optimization, Social Media Optimization, Pay Per Click Experts, Youtube Marketing, Youtube SEO Experts, Normal SEO Experts, Google SEO Experts, and so on. It is quite impossible for one individual to be the best expert in everything.
                </p>
              </div>

             
            </div>
          </div>
        </div>

      
        
          </section>

          
          <section className="overflow-hidden relative bg-white py-24 selection:bg-orange-100 lg:py-32">
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-16 lg:flex-row-reverse lg:gap-16">
            {/* --- IMAGE CONTAINER --- */}
            <div className="group relative w-full lg:w-[50%]">
              {/* Modern Bordered Wrapper */}
              <div className=" relative z-10 rounded-[3.5rem]  p-2 border border-black transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-[3rem]">
                  {/* Main Platform Illustration */}
                  <img
                    src="/assets/images/best-seo-expert/seo-expert-in-india.webp"
                    alt="Google Ranking Platforms Cloud"
                    className=" h-full w-full "
    
                  />
                </div>
              </div>

              {/* Decorative Background Aura */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="w-full space-y-5 lg:w-[60%]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                </div>
                <h3 className="h3 leading-[0.95]  text-slate-900">
                  ROI Focused SEO Expert
                </h3>
              </div>
              <div className="space-y-6">
                <p className="text-[16px] leading-[2em] text-black">
                 Anyone can perform SEO to reach the first page of SERP, but only the ROI based SEO expert, Mr Zammy promises to secure the top position in Google search engine results for his client’s websites. As previously indicated, with expert use of White Hat Search Engine Optimization methodology Zammy has successfully improved the rankings of several websites to appear first on Google. This rank increases the website’s traffic, sales qualified leads and ROI for the organization. By using of ethical techniques, Google has recognized him as the world's leading Google Ranking expert and featured his image in a snippet.
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
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-16">
            {/* --- IMAGE CONTAINER --- */}
            <div className="group relative w-full lg:w-[50%]">
              {/* Modern Bordered Wrapper */}
              <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-[3rem]">
                  {/* Main Platform Illustration */}
                  <img
                    src="/assets/images/best-seo-expert/recover-google-penalty-website.webp"
                    alt="Google Ranking Platforms Cloud"
                    className=" h-full w-full "
    
                  />
                </div>
              </div>

              {/* Decorative Background Aura */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="w-full space-y-5 lg:w-[60%]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#3cb878]] h-0.5 w-12" />
                  
                </div>
                 <h5 className="h5 mb-1 font-bold uppercase tracking-wider text-[#3cb878]">
           ZAMMY ZAIF
            </h5>
                <h3 className="h3 leading-[0.95]  text-slate-900">
                 
                   
                  Google Guidelines Based SEO Expert
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-[16px] leading-[2em] text-black">
                 Since 2008, Zammy Zaif has been a Google Guidelines-based SEO Expert, assisting businesses in building strong online network. By adhering to all the latest Google guidelines, he specializes in achieving #1 rank on Google for his clients, and also provides potential customers with the most valuable and relevant information on Google SERP. Zammy Zaif the CEO of Versa Forge provides extensive Google SEO services and optimizes Google Business Profiles for various local companies. As an SEO specialist, his expertise extends to generating new leads by expanding businesses, handling map spam, complex profile obstacles and resolving Google ranking issues.
                </p>
              </div>

             
            </div>
          </div>
        </div>

      
        
          </section>

 
  <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-center h2 font-bold text-gray-900">
          Technical SEO Services
        </h2>

        {/* Underline */}
        <div className="flex justify-center mt-4 mb-14">
          <span className="w-6 h-[3px] bg-teal-400 rounded-full"></span>
          <span className="w-10 h-[3px] bg-teal-400 rounded-full mx-2"></span>
          <span className="w-6 h-[3px] bg-teal-400 rounded-full"></span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md p-8 relative"
            >
              {/* Left green line */}
              <span className="absolute left-0 top-0 h-full w-[5px] bg-emerald-400 rounded-l-md"></span>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-900 leading-relaxed text-[18px] ">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
          </section>
          
           <section className="overflow-hidden relative bg-white py-24 selection:bg-orange-100 lg:py-32">
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-16 lg:flex-row-reverse lg:gap-16">
            {/* --- IMAGE CONTAINER --- */}
            <div className="group relative w-full lg:w-[50%]">
              {/* Modern Bordered Wrapper */}
              <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-[3rem]">
                  {/* Main Platform Illustration */}
                  <img
                    src="/assets/images/best-seo-expert/best-seo-expert-in-india.webp" 
                    alt="Google Ranking Platforms Cloud"
                    className=" h-full w-full "
    
                  />
                </div>
              </div>

              {/* Decorative Background Aura */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="w-full space-y-5 lg:w-[60%]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#3cb878]] h-0.5 w-12" />
                  
                </div>
                 <h5 className="h5 mb-1 font-bold uppercase tracking-wider text-[#3cb878]">
           WHY ZAMMY ZAIF
            </h5>
                <h3 className="h3 leading-[0.95]  text-slate-900">
                 
                   
                  Google #1 Rank Specialist
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-[16px] leading-[2em] text-black">
                Considering various factors of Google's standards, Zammy is a First Rank SEO Professional of the Google search engine. He diligently adheres to all of Google's ranking algorithms and do not use any third-party SEO tools or plugins. This approach eliminates the possibility of being penalized by Google officials. By staying updated with the latest trends of Google's crore sources, he maintains a comprehensive understanding of the dynamic search engine. With his expertise, he consistently makes practical decisions based on the data provided by Google. He understands the both perspectives of potential customers and business owners and ensure their mutual growth and impact of sales.
                </p>
              </div>

             
            </div>
          </div>
        </div>
          </section>

           <section className="overflow-hidden relative bg-white py-24 selection:bg-orange-100 lg:py-32">
         <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
            {/* --- IMAGE CONTAINER --- */}
            <div className="group relative w-full lg:w-[50%]">
              {/* Modern Bordered Wrapper */}
              <div className=" relative z-10 rounded-[3.5rem]  p-2  transition-transform duration-700 group-hover:scale-[1.02]">
                <div className="overflow-hidden rounded-[3rem]">
                  {/* Main Platform Illustration */}
                  <img
                    src="/assets/images/best-seo-expert/best-seo-company.webp"
                    alt="Google Ranking Platforms Cloud"
                    className=" h-full w-full "
    
                  />
                </div>
              </div>

              {/* Decorative Background Aura */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3cb878] blur-[100px]" />
            </div>

            {/* --- CONTENT AREA --- */}
            <div className="w-full space-y-10 lg:w-[60%]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#3cb878]] h-0.5 w-12" />
                  
                </div>
                 <h5 className="h5 mb-1 font-bold uppercase tracking-wider text-[#3cb878]">
            AN EXCELLENT TEAM OF SEO EXPERTS LED BY ZAMMYZAIF
            </h5>
                <h3 className="h3 leading-[0.95]  text-slate-900">
                 
                   
                    Versa Forge – Best SEO Company
                </h3>
              </div>

              <div className="space-y-6">
                <p className="p leading-relaxed text-black"> 
                  
                Versa Forge is the best SEO company, with a team of SEO experts that has been providing cost-effective SEO services for various types of businesses for years. It enhances online visibility and conversion rates organically. This Google SEO agency is under the leadership of Zammy Zaif, a best SEO Professional globally with over a decade of experience. He has in-depth understanding of SEO dynamics and its potential advantages for businesses. Over the time, recognizing the significance of the digital world and SEO for your business, Mr. Zaif can assist you in increasing page traffic with his comprehensive SEO services.
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

          <Newsletter />
          <Footer/>
     

      
            </div>
            </>
  );
};

export default BestSEOProfessional;