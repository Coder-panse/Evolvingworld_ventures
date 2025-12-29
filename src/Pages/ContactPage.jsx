import React from "react";
import { Mail, Phone, MapPin, Send, Globe, MessageSquare, Shield } from "lucide-react";
import { useScrollReveal } from "../Hooks/useScrollReveal.js";

const RevealWrapper = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

export default function ContactPage() {
  return (
    <div className="bg-[#010308] text-white min-h-screen selection:bg-emerald-500/30 overflow-x-hidden pt-[30px] md:pt-[80px]">
      
      {/* 1. Header Section */}
      <section className="pt-32 pb-16 px-6 lg:px-[10%] border-b border-slate-900">
        <div className="max-w-7xl mx-auto">
          <RevealWrapper>
            <span className="text-emerald-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">
              Secure Communication Channel
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight mb-6">
              GET IN <span className="text-slate-700 italic text-outline">TOUCH.</span>
            </h1>
            <p className="text-slate-400 text-md md:text-lg font-light max-w-2xl leading-relaxed">
              Initiate a strategic dialogue with our interdisciplinary team. 
              Whether it's market distribution or regulatory R&D, we are ready to evolve.
            </p>
          </RevealWrapper>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-20 px-6 lg:px-[10%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Contact Info & Status */}
          <div className="lg:col-span-5 space-y-12">
            <RevealWrapper>
              <h2 className="text-white font-mono text-xs tracking-[0.3em] uppercase mb-8 opacity-50">
                Contact Directory
              </h2>
              
              <div className="space-y-8">
                <div className="group flex items-start gap-6">
                  <div className="p-4 bg-slate-950 border border-slate-800 text-emerald-500 group-hover:border-emerald-500 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Email Inquiry</p>
                    <p className="text-md font-semibold md:text-lg md:font-bold hover:text-emerald-400 transition-colors cursor-pointer">evolvingworld@gmail.com</p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="p-4 bg-slate-950 border border-slate-800 text-emerald-500 group-hover:border-emerald-500 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Direct Uplink</p>
                    <p className="text-md font-semibold md:text-lg md:font-bold transition-colors">+1 (202) 555-0198</p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="p-4 bg-slate-950 border border-slate-800 text-emerald-500 group-hover:border-emerald-500 transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">HQ Location</p>
                    <p className="text-md font-semibold md:text-lg md:font-bold">Washington, D.C. Metropolitan Area</p>
                  </div>
                </div>
              </div>
            </RevealWrapper>

            {/* System Status Mockup */}
            <RevealWrapper delay={200} className="p-6 border border-slate-900 bg-slate-950/30 rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-500">Global Response Ready</span>
                </div>
                <p className="text-[11px] text-slate-600 font-mono leading-relaxed">
                    Our team of 75+ experts is currently monitoring incoming requests. 
                    Average response time: 4.2 Hours.
                </p>
            </RevealWrapper>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-7">
            <RevealWrapper delay={300} className="bg-slate-950/50 border border-slate-900 p-8 md:p-12 relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] -mr-32 -mt-32 pointer-events-none" />

              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Identification</label>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full bg-[#010308] border border-slate-800 p-4 focus:border-emerald-500 focus:outline-none transition-all placeholder:text-slate-700 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Digital Address</label>
                    <input 
                      type="email" 
                      placeholder="Email@Address.com" 
                      className="w-full bg-[#010308] border border-slate-800 p-4 focus:border-emerald-500 focus:outline-none transition-all placeholder:text-slate-700 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Service Category</label>
                  <select className="w-full bg-[#010308] border border-slate-800 p-4 focus:border-emerald-500 focus:outline-none transition-all text-slate-400 text-sm appearance-none cursor-pointer">
                    <option>Market Distribution</option>
                    <option>Regulatory R&D</option>
                    <option>Legal Support</option>
                    <option>General Strategic Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Message Transmission</label>
                  <textarea 
                    rows="5"
                    placeholder="Describe your objective..." 
                    className="w-full bg-[#010308] border border-slate-800 p-4 focus:border-emerald-500 focus:outline-none transition-all placeholder:text-slate-700 text-sm resize-none"
                  />
                </div>

                <button className="group relative w-full py-5 border border-emerald-500 text-white font-mono text-[10px] tracking-[0.3em] uppercase transition-all overflow-hidden overflow-hidden">
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center justify-center gap-3">
                    Transmit Data <Send size={14} />
                  </span>
                  <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </form>
            </RevealWrapper>
          </div>

        </div>
      </section>

      {/* 3. Global Reach Visual (Abstract) */}
      {/* <section className="py-20 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-[10%]">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 opacity-30">
                  <div className="flex items-center gap-4">
                      <Globe size={16} />
                      <span className="text-[10px] font-mono tracking-widest">GLOBAL CONSULTANT NETWORK</span>
                  </div>
                  <div className="flex items-center gap-4">
                      <MessageSquare size={16} />
                      <span className="text-[10px] font-mono tracking-widest">24/7 STRATEGIC MONITORING</span>
                  </div>
                  <div className="flex items-center gap-4">
                      <Shield size={16} />
                      <span className="text-[10px] font-mono tracking-widest">ENCRYPTED DATA HANDLING</span>
                  </div>
              </div>
          </div>
      </section> */}

    </div>
  );
}