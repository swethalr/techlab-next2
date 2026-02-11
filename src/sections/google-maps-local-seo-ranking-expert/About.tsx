"use client";
import React from 'react';
import { motion , AnimatePresence} from 'framer-motion';
import { MapPin, Trophy, Users, Globe, ArrowRight,  X, TrendingUp, Send } from 'lucide-react';
import { useState } from 'react';


const PremiumSEOExpert = () => {
  const stats = [
    { label: "Experience", value: "18+", icon: <Trophy className="w-5 h-5" /> }, //
    { label: "Clients", value: "2T+", icon: <Users className="w-5 h-5" /> }, //
    { label: "Projects", value: "3K+", icon: <Globe className="w-5 h-5" /> } //
  ];
const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center py-20 bg-[#050505] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/5 blur-[100px]" />
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: Premium Card with Glassmorphism */}
          <div className="lg:col-span-5 relative group">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] p-1.5 bg-gradient-to-br from-emerald-500/30 via-transparent to-white/10 backdrop-blur-2xl border border-white/10 shadow-2xl"
            >
              <div className="relative overflow-hidden rounded-[1.8rem] bg-zinc-900">
                <img 
                  src="/assets/images/best-seo-expert/local-seo-expert.webp" 
                  alt="Zammy Zaif" 
                  className="w-full h-auto object-contain grayscale group-hover:grayscale-0  transition-all duration-1000 scale-100 group-hover:scale-98"
                />
                
                {/* Dynamic Rank Badge */}
                {/*      
                <div className="absolute top-6 right-6 bg-emerald-500 text-black px-5 py-2 rounded-2xl font-black text-xs tracking-widest shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                  #1 LOCAL RANKING EXPERT
                </div>
                */}
              </div>

              {/* High-End Stats Overlay */}
              <div className="grid grid-cols-3 gap-0 bg-white/[0.03] backdrop-blur-md rounded-b-[1.8rem] border-t border-white/10">
                {stats.map((stat, i) => (
                  <div key={i} className={`p-6 text-center ${i !== 2 ? 'border-r border-white/5' : ''}`}>
                    <div className="flex justify-center text-emerald-400 mb-2">{stat.icon}</div>
                    <div className="text-xl font-bold text-white tracking-tighter">{stat.value}</div>
                    <div className="text-[16px] uppercase tracking-[0.2em] text-emerald-500/60 font-bold mt-1.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: High-Converting Content */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs  font-medium tracking-[0.2em] uppercase mb-8 shadow-lg">
                <MapPin className="w-4 h-4 animate-bounce" /> Proven Mastery Since 2008
              </div>

              <h2 className="h2 text-white leading-[0.85] tracking-tighter mb-8">
                Expert in 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-100 to-green-500">
                 {' '} Local SEO #1 Rank
                </span>
              </h2>

              <div className="space-y-8 text-gray-300 p leading-[2em]  max-w-2xl border-l-2 border-emerald-500/20 pl-8">
                <p>
                                  Zammy Zaif and our team possess extensive expertise in securing first-rank results for Google Business Profiles.
                                  Drawing from our experience with over 1,200 projects, we have developed tailored strategies for various industries.
                                  We have established a streamlined pipeline approach to optimize Google Maps business listings, ensuring strict adherence
                                  to Google&apos;s guidelines. This enables us to achieve No. 1 local SEO rankings within 45 business days. Our proven
                                  strategy has been successfully implemented for over 800 businesses, consistently delivering top rankings.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 pt-4">
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-colors group">
                    <div className="text-emerald-400 font-secondary font-bold text-xl  mb-1">1200+</div>
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Projects</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-colors group">
                    <div className="text-emerald-400 font-secondary font-bold text-xl mb-1">800+</div>
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Businesses</p>
                  </div>
                </div>
              </div>

              <div className="pt-10 flex flex-col md:flex-row items-center gap-8">
                <motion.button
                  onClick={() => setIsModalOpen(true)} // Opens the modal
                  className="group relative w-full md:w-auto px-6 py-4 bg-emerald-500 text-black font-bold uppercase tracking-tighter rounded-2xl overflow-hidden transition-all hover:shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:-translate-y-1">
                  <span className="relative z-10 flex items-center justify-center gap-3 text-sm">
                    Get Your 1st Rank Now <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                </motion.button>
                
                 {/* --- PREMIUM MODAL OVERLAY --- */}
            <AnimatePresence>
              {isModalOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsModalOpen(false)}
                    className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl"
                  />

                  {/* Modal Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 40 }}
                    className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-[3rem] bg-white shadow-2xl md:flex-row"
                  >
                    {/* Left Side: Brand Accent */}
                    <div className="hidden w-1/3 flex-col justify-between bg-[#3cb878] p-10 text-white md:flex">
                      <div className="space-y-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                          <TrendingUp size={24} />
                        </div>
                        <h3 className="text-2xl font-black uppercase leading-none tracking-tighter">
                          Let's Build Your Success
                        </h3>
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                        Manual SEO Strategy • 100% ROI Focused
                      </p>
                    </div>

                    {/* Right Side: The Form */}
                    <div className="relative flex-1 p-8 md:p-12">
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute right-6 top-6 p-2 text-slate-400 transition-colors hover:text-[#3cb878]"
                      >
                        <X size={24} />
                      </button>

                      <div className="mb-8">
                        <h4 className="text-xl font-black uppercase tracking-tight text-slate-900">
                          Contact us Now
                        </h4>
                        <p className="p mt-1 text-slate-700">
                          Fill in the details to start your journey to #1.
                        </p>
                      </div>

                      <form
                        className="space-y-4"
                        onSubmit={(e) => {
                          e.preventDefault();
                          setIsModalOpen(false);
                        }}
                      >
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="Full Name"
                              required
                              className="form-input-premium"
                            />
                          </div>
                          <div className="relative">
                            <input
                              type="email"
                              placeholder="Email Address"
                              required
                              className="form-input-premium"
                            />
                          </div>
                        </div>

                        <div className="relative">
                          <input
                            type="url"
                            placeholder="Website URL"
                            required
                            className="form-input-premium"
                          />
                        </div>

                        <div className="relative">
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                            className="form-input-premium"
                          />
                        </div>

                        <textarea
                          placeholder="Briefly describe your growth goals..."
                          rows={3}
                          className="w-full resize-none rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878]"
                        ></textarea>

                        <button
                          type="submit"
                          className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#3cb878] py-5 text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-orange-200 transition-all hover:bg-slate-900"
                        >
                          Submit Application{' '}
                          <Send
                            size={16}
                            className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                          />
                        </button>
                      </form>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            <style jsx>{`
              .form-input-premium {
                @apply w-full rounded-2xl border border-slate-100 bg-slate-50 py-4 pl-12 pr-5 text-sm font-medium outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#3cb878];
              }
            `}</style>


                <div className="flex flex-col gap-3">
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PremiumSEOExpert;