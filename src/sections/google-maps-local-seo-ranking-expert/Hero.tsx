"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, TrendingUp, Send} from 'lucide-react';

export default function GoogleMapsHero() {
   const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505] text-white py-10 lg:py-0">
      {/* Background elements - responsive blur */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-green-500/20 blur-[100px] md:blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-emerald-400/10 blur-[80px] md:blur-[120px]" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* TEXT CONTENT - Responsive alignment */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            <span className="inline-flex items-center font-medium gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-[14px] md:text-[16px] text-green-400 mb-6">
              Zammy Zaif
            </span>
            <h1 className="h1 font-bold leading-tight">
              Google Maps Local SEO 
              <span className="text-green-400"> Ranking Expert</span>
            </h1>
              
            <h4 className="mt-4 h4 text-gray-300">
              <span className="text-white font-medium">
                Are you facing problems with your Google Maps{" "}
              </span>
              <span className="text-green-400 font-semibold">
                <Typewriter
                  words={["listing?", "phone verification?", "suspended profile?", "number updation?"]}
                  loop={0}
                  cursor
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1800}
                />
              </span>
            </h4>
            
            <p className="mt-6 text-sm md:text-base text-gray-100">
              Since 2008, Zammy Zaif has been one of leading Google SEO Expert.<br className="hidden md:block"/>
              Our Primary Objective is achieving 1st Rank Result in Google.
            </p>

            <div className="mt-8 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-5">
              <motion.button
              onClick={() => setIsModalOpen(true)} // Opens the modal
                className="w-full md:w-auto rounded-full bg-green-500 px-8 py-4 font-bold text-black hover:bg-green-400 transition-colors">
                Contact Us
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








              <span className="flex items-center gap-2 text-sm text-gray-400">
                ⭐ Trusted since 2008
              </span>
            </div>
          </div>

          {/* IMAGE - Responsive sizing */}
          <div className="relative order-2 lg:order-2 flex justify-center">
            <div className="absolute inset-0 rounded-full bg-green-500/10 blur-3xl" />
            <div className="relative w-full max-w-[320px] md:max-w-[480px]">
              <Image
                src="/assets/images/best-seo-expert/google-seo-consultant.webp"
                alt="Google Maps Local SEO Ranking Expert"
                width={480}
                height={640}
                className="rounded-3xl object-cover shadow-[0_0_50px_rgba(34,197,94,0.2)]"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}