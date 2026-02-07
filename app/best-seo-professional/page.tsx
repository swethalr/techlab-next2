'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/app/best-seo-professional/HeroSection'
import { MainHeader } from '@/src/layout/header'
import TopBar from '@/app/best-seo-professional/TopBar'
const BestSEOProfessional: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState('');

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
      <div className="bg-[#1a1a2e] text-white py-2">
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
      <header className="bg-white shadow-md sticky top-0 z-50">
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
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 text-white py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <Image src="https://it2.tv/img/it2-logo.svg" alt="Zammy Zaif" width={80} height={80} className="mx-auto mb-6" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{slides[currentSlide].title}</h1>
            <h6 className="text-xl md:text-2xl mb-8 text-gray-200">{slides[currentSlide].subtitle}</h6>
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
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold text-blue-600">01</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">Google SEO</h4>
                  <p className="text-gray-600">Want to Rank No.1 on Google</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold text-blue-600">02</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">My Business Optimization</h4>
                  <p className="text-gray-600">Get your business profile on top</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold text-blue-600">03</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">Rank No.1 in Google</h4>
                  <p className="text-gray-600">Get your website rank no.1 in Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Best Google SEO Professional */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src="https://it2.tv/assets/images/seo-expert-india/google-certified-seo-expert-india.webp" 
                alt="Google certified SEO Expert" 
                width={600} 
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <div className="mb-6">
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-blue-600">18+</h3>
                    <p className="text-gray-600 text-sm">Years Of Experience</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-blue-600">2T+</h3>
                    <p className="text-gray-600 text-sm">Plus Clients</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-blue-600">3K+</h3>
                    <p className="text-gray-600 text-sm">Projects</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-2">Proven Ranking Mastery Since 2008</p>
                <h2 className="text-3xl font-bold mb-4">Best Google SEO Professional</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Zammy Zaif earns the global title of the best SEO professional through his unmatched track record of delivering #1 Google rankings for clients globally since 2008. Zaif's strategies consistently secure First & Top positions by adhering strictly to Google guidelines, transforming small businesses into lead-generating powerhouses. His shift since 2014 to prioritize the #1 spot has boosted organic traffic by up to 50% and click-through rates by 20% for websites. This precision stems from deep technical audits, on-page optimization and ethical link-building that align with evolving algorithms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Google recognizes Zaif via featured snippets and Search Central mentions, spotlighting his content as authoritative since 2018. Over 20 years, his methods have engaged 5 million+ users monthly without third-party shortcuts, earning trust from 1000+ entrepreneurs. As CEO of Versa Forge, he resolves complex issues like map spam and profile hurdles for local dominance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h6 className="font-bold text-lg mb-3">Rank #1 Achiever</h6>
              <p className="text-gray-600 text-sm mb-4">We are a leading SEO firm that achieves #1 rankings for websites in Google.</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">Get In Touch</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h6 className="font-bold text-lg mb-3">Industries & Countries</h6>
              <p className="text-gray-600 text-sm mb-4">We worked with over 300 clients from various industries & locations.</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">Get In Touch</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h6 className="font-bold text-lg mb-3">No. of Students</h6>
              <p className="text-gray-600 text-sm mb-4">225 people have learned ethical SEO from Zammy until March 2023.</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">Get In Touch</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h6 className="font-bold text-lg mb-3">White Hat SEO</h6>
              <p className="text-gray-600 text-sm mb-4">Because of preserving brand integrity we only practise white hat SEO.</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">Get In Touch</button>
            </div>
          </div>
        </div>
      </section>

      {/* Looking for More Traffic */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">Looking for More Traffic & Leads?</h3>
          <p className="text-xl mb-8">We have helped 38 top brands in the world and 250+ local brands for the last 20+ years.</p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-all">
            Enquiry Now!
          </button>
          <div className="flex justify-center gap-8 mt-12">
            <Image src="https://it2.tv/img/seoscore1.png" alt="SEO Score" width={150} height={100} />
            <Image src="https://it2.tv/img/seoscore2.png" alt="SEO Score" width={150} height={100} />
            <Image src="https://it2.tv/img/seoscore3.png" alt="SEO Score" width={150} height={100} />
          </div>
        </div>
      </section>

      {/* Client Impact and Innovation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Client Impact and Innovation</h2>
            <p className="text-gray-700 leading-relaxed">
              Zaif customizes plans around audience insights, competitors and AIDA frameworks to drive sales conversions beyond mere visibility. His content creation - optimized blogs, SOPs, and meta structures—elevates brand credibility worldwide. Businesses hail him for measurable growth, from lead surges to top SERP presence, solidifying his global reputation.
            </p>
          </div>
        </div>
      </section>

      {/* Diverse Industries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="https://it2.tv/img/elements.png" alt="SEO Expert" width={40} height={40} />
                <span className="text-sm text-gray-500">Extensive Professional Experience</span>
              </div>
              <h3 className="text-2xl font-bold mb-6">Diverse Industries & Geographies</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Delving into Zammy's professional background, prior to starting his company he has worked with over 3000+ clients worldwide. From various leading advertising agencies across industries such as educational institutions, healthcare, tourism, construction and hyperlocal businesses located in numerous geographic regions. Spreading across India, Canada, United Kingdom, United States of America, Australia, Ireland, France, UAE, Malaysia, Cambodia, Germany, Singapore, Sweden, Switzerland, New Zealand, South Korea, Bahrain, Kuwait, Qatar, Oman, Saudi Arabia, Norway, Panama, Denmark, Finland and Mexico.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all">
                Contact Now
              </button>
            </div>
            <div>
              <Image 
                src="https://it2.tv/assets/images/seo-expert-india/different-industry-experience.webp" 
                alt="Variety of Industries & Geographies" 
                width={600} 
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Master in SEO */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-blue-600 mb-2 uppercase tracking-wide">Featured SEO Course</p>
              <h2 className="text-3xl font-bold mb-6">Master in SEO</h2>
              <p className="text-gray-700 leading-relaxed">
                The future of SEO, revolves around upholding brand integrity, building trust and gaining authority through partnerships. Thus, every individual should pursue the most suitable path towards success and learn SEO from Zammy. As of July 2023, a total of 250 individuals have been taught ethical SEO by the Master himself.
              </p>
            </div>
            <div>
              <Image 
                src="https://it2.tv/assets/images/seo-expert-india/master-in-seo.webp" 
                alt="Master in SEO" 
                width={600} 
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Zammy's SEO Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Zammy's SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: 'https://it2.tv/assets/images/seo-expert-india/global-seo.webp',
                title: 'Global SEO',
                desc: 'Specializing in multilingual SEO, they excel at enhancing the visibility of businesses on a global scale through customized strategies for SERP domination.'
              },
              {
                img: 'https://it2.tv/assets/images/seo-expert-india/local-seo.webp',
                title: 'Local SEO',
                desc: 'Enhance your website and GMB listing to improve local SEO rankings. Optimization increases organic exposure, helps you rank first on Google SERPs and drives more local sales.'
              },
              {
                img: 'https://it2.tv/assets/images/seo-expert-india/technical-seo.webp',
                title: 'Technical SEO',
                desc: 'Audit your website thoroughly to identify any technological flaws or faults that may cause quality difficulties when spiders crawl the site.'
              },
              {
                img: 'https://it2.tv/assets/images/seo-expert-india/ecommerce-seo.webp',
                title: 'Ecommerce SEO',
                desc: 'Ecommerce SEO is the process of increasing the visibility of your online business when customers search for your products and categories on search engine results pages.'
              },
              {
                img: 'https://it2.tv/assets/images/seo-expert-india/content-strategy.webp',
                title: 'Content Strategy',
                desc: 'With a proper content strategy, selecting right words to build a solid information structure and ensure competitive search engine rankings compared to others.'
              },
              {
                img: 'https://it2.tv/assets/images/seo-expert-india/pr-link-building.webp',
                title: 'PR Link Building',
                desc: 'Developing effective public relations strategies such as PR and media pitching to get valuable editorial links in order to build trust and authority in highly competitive areas.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image src={service.img} alt={service.title} width={400} height={250} className="w-full" />
                <div className="p-6">
                  <h5 className="text-xl font-bold mb-3">{service.title}</h5>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing or SEO Professional */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Image 
                src="https://it2.tv/assets/images/seo-expert-india/website-rank-on-google.webp" 
                alt="Website Rank on Google" 
                width={400} 
                height={300}
                className="mx-auto mb-6"
              />
              <p className="text-sm text-blue-600 uppercase tracking-wide mb-2">Trusting Experts Isn't Much Easy</p>
              <h3 className="text-2xl font-bold mb-6">Digital Marketing or SEO Professional</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Anyone on the internet may now claim themselves to be the best SEO expert. There are 1.5 million digital marketing specialists. All of them are claiming them as a digital marketing experts or SEO experts. Engineers are classified into several categories, including Civil Engineer, Computer Engineer, Software Engineer, Electronics & Communication Engineer, Electrical & Electronics Engineer, Mechanical Engineer, and so on. Similarly, there are several sectors in digital marketing. Facebook Marketing, LinkedIn Marketing, Instagram Marketing, Search Engine Marketing, Search Engine Optimization, Social Media Optimization, Pay Per Click Experts, Youtube Marketing, Youtube SEO Experts, Normal SEO Experts, Google SEO Experts, and so on. It is quite impossible for one individual to be the best expert in everything.
            </p>
          </div>
        </div>
      </section>

      {/* ROI Focused SEO Expert */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">ROI Focused SEO Expert</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Anyone can perform SEO to reach the first page of SERP, but only the ROI based SEO expert, Mr Zammy promises to secure the top position in Google search engine results for his client's websites. As previously indicated, with expert use of White Hat Search Engine Optimization methodology Zammy has successfully improved the rankings of several websites to appear first on Google. This rank increases the website's traffic, sales qualified leads and ROI for the organization. By using of ethical techniques, Google has recognized him as the world's leading Google Ranking expert and featured his image in a snippet.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all">
                Contact Now
              </button>
            </div>
            <div>
              <Image 
                src="https://it2.tv/assets/images/seo-expert-india/seo-expert-in-india.webp" 
                alt="Zammy Zaif" 
                width={600} 
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Google Guidelines Based SEO Expert */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src="https://it2.tv/assets/images/seo-expert-india/recover-google-penalty-website.webp" 
                alt="Recover Google Penalty Website" 
                width={600} 
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-sm text-blue-600 uppercase tracking-wide mb-2">Zammy Zaif</p>
              <h2 className="text-3xl font-bold mb-6">Google Guidelines Based SEO Expert</h2>
              <p className="text-gray-700 leading-relaxed">
                Since 2008, Zammy Zaif has been a Google Guidelines-based SEO Expert, assisting businesses in building strong online network. By adhering to all the latest Google guidelines, he specializes in achieving #1 rank on Google for his clients, and also provides potential customers with the most valuable and relevant information on Google SERP. Zammy Zaif the CEO of Versa Forge provides extensive Google SEO services and optimizes Google Business Profiles for various local companies. As an SEO specialist, his expertise extends to generating new leads by expanding businesses, handling map spam, complex profile obstacles and resolving Google ranking issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical SEO Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technical SEO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Website Migrations',
                desc: 'Migrating your site with adequate planning & taking necessary precautions so that you don\'t loose your existing authority and rankings. Without an organic SEO expert your migrations can result in drop in traffic & rankings.'
              },
              {
                title: 'SEO Audits',
                desc: 'A detailed website audit that will give you exact idea of what is the status of your website w.r.t to Technology, Content & Authority and what are the issues that you have to fix to grow your organic rankings and Traffic.'
              },
              {
                title: 'Penalty Removal',
                desc: 'Hit by a Manal action or a Google core update ? Don\'t worry I have it all covered in this. I will help you remove your existing penalty and get you where you were before.'
              },
              {
                title: 'Website Hacked ?',
                desc: 'Website is hacked ? or Spamdexed by an attacker. I will help your website get back in shape and suggest ways to improve your website\'s security to avoid any future Attacks.'
              },
              {
                title: 'Javascript SEO',
                desc: 'Website not getting crawled by Google ? I will help your website to fix all the crawlability issues related to Javascript SEO and Make sure your website gets rendered by Google.'
              },
              {
                title: 'Core web Vitals',
                desc: 'As a Google SEO specialist, page speed & page experience are essential. I will assist you in improving your webpage speed using Google core web vitals & passing your pages through Search Console.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h5 className="text-xl font-bold mb-3">{service.title}</h5>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google #1 Rank Specialist */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-blue-600 uppercase tracking-wide mb-2">Why Zammy Zaif</p>
              <h2 className="text-3xl font-bold mb-6">Google #1 Rank Specialist</h2>
              <p className="text-gray-700 leading-relaxed">
                Considering various factors of Google's standards, Zammy is a First Rank SEO Professional of the Google search engine. He diligently adheres to all of Google's ranking algorithms and do not use any third-party SEO tools or plugins. This approach eliminates the possibility of being penalized by Google officials. By staying updated with the latest trends of Google's crore sources, he maintains a comprehensive understanding of the dynamic search engine. With his expertise, he consistently makes practical decisions based on the data provided by Google. He understands the both perspectives of potential customers and business owners and ensure their mutual growth and impact of sales.
              </p>
            </div>
            <div>
              <Image 
                src="https://it2.tv/assets/images/seo-expert-india/best-seo-expert-in-india.webp" 
                alt="Best SEO Expert in India" 
                width={600} 
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Versa Forge - Best SEO Company */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src="https://it2.tv/assets/images/seo-expert-india/best-seo-company.webp" 
                alt="Best SEO Company" 
                width={600} 
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-sm text-blue-600 uppercase tracking-wide mb-2">An Excellent Team of SEO Experts Led by ZammyZaif</p>
              <h3 className="text-2xl font-bold mb-6">Versa Forge – Best SEO Company</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Versa Forge is the best SEO company, with a team of SEO experts that has been providing cost-effective SEO services for various types of businesses for years. It enhances online visibility and conversion rates organically. This Google SEO agency is under the leadership of Zammy Zaif, a best SEO Professional globally with over a decade of experience. He has in-depth understanding of SEO dynamics and its potential advantages for businesses. Over the time, recognizing the significance of the digital world and SEO for your business, Mr. Zaif can assist you in increasing page traffic with his comprehensive SEO services.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-2">Email Newsletters!</h4>
            <p className="mb-6">Sign up for new updates & offers.</p>
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-900"
                required
              />
              <button type="submit" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full transition-all">
                Subscribe
              </button>
            </form>
            <div className="flex justify-center gap-4 mt-8">
              <Image src="https://it2.tv/img/subscr-gear.png" alt="Gear" width={50} height={50} />
              <Image src="https://it2.tv/img/subscr1.png" alt="Mail" width={50} height={50} />
              <Image src="https://it2.tv/img/subscr-mailopen.png" alt="Mail Open" width={50} height={50} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">About Zammy!</h4>
              <p className="text-gray-300 text-sm mb-4">
                Zammy Zaif - Helping small businesses scale into medium and large companies worldwide by optimizing their website and Google Business Profile from first page to Rank #1 on Google | Google Ranking Expert
              </p>
              <div className="flex gap-3">
                <a href="https://goo.gl/maps/ihFiQeqtGGQfrkqh7" target="_blank" rel="noopener noreferrer">
                  <Image src="https://it2.tv/img/google.webp" alt="Google" width={30} height={30} />
                </a>
                <a href="https://www.facebook.com/googleseospecialist" target="_blank" rel="noopener noreferrer">
                  <Image src="https://it2.tv/img/fb.webp" alt="Facebook" width={30} height={30} />
                </a>
                <a href="https://twitter.com/gseospecialist" target="_blank" rel="noopener noreferrer">
                  <Image src="https://it2.tv/img/twitter.webp" alt="Twitter" width={30} height={30} />
                </a>
                <a href="https://www.instagram.com/googlerankingexpert/" target="_blank" rel="noopener noreferrer">
                  <Image src="https://it2.tv/img/instagram.webp" alt="Instagram" width={30} height={30} />
                </a>
                <a href="https://www.linkedin.com/in/googlerankingexpert/" target="_blank" rel="noopener noreferrer">
                  <Image src="https://it2.tv/img/linkedin.webp" alt="LinkedIn" width={30} height={30} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://it2.tv/google-ranking-expert.php" className="hover:text-blue-400">Google Ranking Expert</a></li>
                <li><a href="https://it2.tv/google-my-business-expert.php" className="hover:text-blue-400">GMB Ranking Specialist</a></li>
                <li><a href="https://it2.tv/best-seo-expert-india.php" className="hover:text-blue-400">Best SEO Expert</a></li>
                <li><a href="https://it2.tv/internet-influencer.php" className="hover:text-blue-400">Internet Influencer</a></li>
                <li><a href="https://it2.tv/google-influencer.php" className="hover:text-blue-400">Google Influencer</a></li>
                <li><a href="https://it2.tv/best-local-seo-expert-india.php" className="hover:text-blue-400">Best Local SEO Expert</a></li>
                <li><a href="https://it2.tv/seo-update/gseo-certificate-verification/" className="hover:text-blue-400">Course Verification</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">&nbsp;</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://it2.tv/academy/ai-based-google-seo-course-tamil.php" className="hover:text-blue-400">Google SEO Training</a></li>
                <li><a href="https://it2.tv/privacy-policy.php" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Cookie Policy</a></li>
                <li><a href="https://it2.tv/contact-zammy-zaif.php" className="hover:text-blue-400">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <Image src="https://it2.tv/img/contact4.png" alt="Phone" width={30} height={30} />
                  <div>
                    <a href="tel:+919344618144" className="hover:text-blue-400">+91 9344 618 144</a>
                    <p className="text-xs text-gray-400">Mon-Sat 10am-6pm</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <Image src="https://it2.tv/img/contact5.png" alt="Email" width={30} height={30} />
                  <div>
                    <a href="mailto:info@bamstechnologies.org" className="hover:text-blue-400">info@bamstechnologies.org</a>
                    <p className="text-xs text-gray-400">online support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            Copyright ©2025 All Rights Reserved by <a href="https://versa-forge.com/" className="text-blue-400 hover:text-blue-300">Versa Forge</a>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-50">
        <a 
          href="https://wa.me/919344618144" 
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2"
        >
          <Image src="https://it2.tv/img/whatsapp.webp" alt="WhatsApp" width={24} height={24} />
          <span className="text-sm font-semibold">Live Chat</span>
        </a>
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2">
          <Image src="https://it2.tv/img/mail.webp" alt="Mail" width={24} height={24} />
          <span className="text-sm font-semibold">Mail us</span>
        </button>
      </div>
            </div>
            </>
  );
};

export default BestSEOProfessional;