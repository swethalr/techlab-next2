'use client';

import React from 'react';
import { Mail, Smartphone, Settings } from 'lucide-react';

export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Email captured:", formData.get('email'));
  };

  return (
    <section 
      className="bg-[#3cb878] py-16 lg:py-20 relative overflow-hidden"
      aria-labelledby="newsletter-heading"
    >
      {/* Background Decorative Icons (Optional - Matches your screenshot's flair) */}
      <div className="absolute top-10 right-10 opacity-20 hidden lg:block animate-spin-slow">
        <Settings size={48} className="text-white" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
         <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <div className="relative max-w-[280px] md:max-w-[350px] animate-float">
              <img 
                src="/assets/images/google-ranking-services/subscr1.png" 
                alt="Newsletter Subscription "
                className="w-full h-auto object-contain"
               
              />
            </div>
          </div>

          {/* Right Side: Content & Form */}
          <div className="w-full lg:w-2/3 text-center lg:text-left space-y-6">
            <div className="space-y-2">
              <h4 
                id="newsletter-heading" 
                className="h4 text-white tracking-[0.02em] "
              >
                Email Newsletters!
              </h4>
              <p className="text-white/90 font-medium text-lg">
                Sign up for new updates & offers.
              </p>
            </div>

            <form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch gap-0 max-w-2xl mx-auto lg:mx-0 shadow-2xl rounded-2xl sm:rounded-full overflow-hidden"
            >
              <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="Your Email Address"
                className="flex-grow px-8  text-slate-800 focus:outline-none text-lg font-medium"
              />
              <button
                type="submit"
                className="bg-slate-900 text-[#3cb878] px-10 py-5 font-black uppercase tracking-widest hover:bg-white  hover:text-slate-900 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Animated Style logic for the spin-slow gear */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
}