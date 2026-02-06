'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

interface FormValues {
  web: string;
  phone: string;
  email: string;
  subject: string;
  honeypot: string; // Anti-spam hidden field
}

export default function LeadForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    // If honeypot is filled, it's likely a bot
    if (data.honeypot) return;

    console.log('Form Submitted:', data);
    // Replace with your Next.js API route or Server Action
    // const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
  };
 const onReCAPTCHAChange = (val: string | null) => {
    console.log('Captcha Value:', val);
  };
  return (
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
          
            <div className="pointer-events-none absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-5%] top-[-10%] h-[30%] w-[95%] rounded-full bg-[#3cb878]/10 blur-[190px]" />
      </div>
      {/* Background Images Decoration (Optional) */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-slate-100 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h3 className="h3 text-slate-900 mb-4 tracking-tight">
            Looking for More Traffic & Leads?
          </h3>
          <p className="text-slate-600 p font-medium max-w-2xl mx-auto">
            We have helped 38 top brands in the world and 250+ local brands for the last 20+ years.
          </p>
        </div>

        <div className="bg-[#DBFFCE] rounded-[2rem] p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Row 1: Website, Phone, Email */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5">
                <input
                  {...register('web', { required: 'URL is required' })}
                  placeholder="Type in your Website URL*"
                  className="w-full bg-white border-none text-white rounded-full px-6 py-4 focus:ring-2 focus:ring-[#3cb878] outline-none transition-all"
                />
                {errors.web && <span className="text-red-400 text-xs ml-4">{errors.web.message}</span>}
              </div>

              <div className="md:col-span-3">
                <input
                  {...register('phone', { required: 'Phone is required' })}
                  type="number"
                  placeholder="Your Phone*"
                  className="w-full bg-white border-none text-slate-900 rounded-full px-6 py-4 focus:ring-2 focus:ring-[#3cb878] outline-none transition-all"
                />
              </div>

              <div className="md:col-span-4">
                <input
                  {...register('email', { required: 'Email is required' })}
                  type="email"
                  placeholder="Your Email*"
                  className="w-full bg-white border-none text-slate-900 rounded-full px-6 py-4 focus:ring-2 focus:ring-[#3cb878] outline-none transition-all"
                />
              </div>
            </div>

            {/* Row 2: Subject */}
            <div className="w-full">
              <input
                {...register('subject', { required: 'Subject is required' })}
                placeholder="Subject"
                className="w-full bg-white border-none text-slate-900 rounded-full px-6 py-4 focus:ring-2 focus:ring-[#3cb878] outline-none transition-all"
              />
            </div>

            {/* Honeypot Field (Hidden from users) */}
            <input type="text" {...register('honeypot')} className="hidden" />

            
            
                 {/* ReCAPTCHA Container */}
              <div className="flex justify-center py-2 md:col-span-2">
                <div className="scale-90 transform rounded-xl bg-white p-2 shadow-md md:scale-100">
                  <ReCAPTCHA
                    sitekey="6LfipWIsAAAAAOGgh0z5OjFBf5veA_wIVKcg2c6N"
                    onChange={(val: string | null) => console.log(val)}
                  />
                </div>
              </div>
               

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center bg-[#3cb878] text-white font-bold uppercase tracking-widest px-10 py-5 rounded-full shadow-[0_10px_30px_rgba(60,184,120,0.3)] hover:bg-slate-900 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Enquiry Now!</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </form>
        </div>

       
      </div>
    </section>
  );
}