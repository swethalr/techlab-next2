"use client";
import Image from "next/image";

import { Typewriter } from "react-simple-typewriter";
export default function GoogleMapsHero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] text-white">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-400/10 blur-[120px]" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
                  <div >
                      <span className="inline-flex items-center font-medium gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-[16px] text-green-400 mb-6">
              Zammy Zaif
            </span>
            <h1 className=" h1 font-bold max-w-xl leading-tight">
              Google Maps Local SEO 
              <span className="text-green-400"> Ranking Expert</span>
            </h1>
              
                <h4 className="mt-2 h4 text-gray-300 max-w-xl">
      <span className="text-white font-medium">
        Are you facing problems with your Google Maps{" "}
      </span>

      <span className="text-green-400 font-semibold">
        <Typewriter
          words={[
            "listing?",
            "phone verification?",
            "suspended profile?",
            "number updation?",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1800}
        />
      </span>
    </h4>
                      <p>
              Since 2008, Zammy Zaif has been one of leading Google SEO Expert.<br/>
               Our Primary Objective is achieving 1st Rank Result in Google.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-green-500 px-8 py-3 font-semibold text-black transition-all duration-300 hover:bg-green-400">
                Contact Us
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <span className="flex items-center gap-2 text-sm text-gray-400">
                ⭐ Trusted since 2008
              </span>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Floating Map Pins */}
            <div className="absolute -top-10 left-10 w-4 h-4 rounded-full bg-green-400 animate-ping" />
            <div className="absolute top-1/2 -left-6 w-3 h-3 rounded-full bg-emerald-300 animate-pulse" />

            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-green-500/10 blur-3xl" />

            <Image
              src="/assets/images/best-seo-expert/google-seo-consultant.webp"
              alt="Google Maps Local SEO Ranking Expert"
              width={480}
              height={640}
              className="relative z-10 rounded-3xl object-cover shadow-[0_0_80px_rgba(34,197,94,0.25)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
