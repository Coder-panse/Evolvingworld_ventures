import React from "react";
import { Globe, Lightbulb, Shield, Briefcase, Zap, Truck, Scale, Users, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "../Hooks/useScrollReveal.js";

const RevealWrapper = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 md:translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

export default function AboutUsPage() {
  const capabilities = [
    { title: "Market Development", icon: <Zap size={24} />, desc: "Expediting development processes and reducing time-to-market for innovative products." },
    { title: "National Distribution", icon: <Truck size={24} />, desc: "Leveraging robust networks across the USA to ensure seamless supply chain integration." },
    { title: "Regulatory & Legal", icon: <Scale size={24} />, desc: "Providing expert legal support and navigating complex regulatory landscapes." },
    { title: "Global Talent Pool", icon: <Users size={24} />, desc: "A collective of 75+ EPA retirees, toxicologists, military personnel, and PhDs." }
  ];

  return (
    <div className="bg-[#010308] text-white min-h-screen selection:bg-emerald-500/30 overflow-x-hidden pt-[30px] md:pt-[80px]">
      
      {/* 1. Hero: The Evolution */}
      <section className="relative min-h-[70vh] md:h-[80vh] flex items-center justify-center text-center px-6 py-20 lg:px-[10%]">
        <div className="relative z-10 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <span className="text-emerald-500 font-mono text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4 block">
            Est. Post-Pandemic Era
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
            EVOLVING <br />
            <span className="text-slate-700 italic">PERSPECTIVES.</span>
          </h1>
          <p className="text-md md:text-lg text-slate-400 font-light leading-relaxed max-w-3xl mx-auto px-4">
            From a single idea to a global powerhouse. We provide optimal aid to companies, 
            driving recovery from global shifts while building safeguards against future threats.
          </p>
        </div>
      </section>

      {/* 2. Narrative: The Interdisciplinary Core */}
      <section className="py-20 md:py-32 px-6 lg:px-[10%] border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <RevealWrapper>
            <h2 className="text-emerald-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-6">Our Mission</h2>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight mb-8">
              A Space for <span className="text-slate-700">Innovative Ideas</span> to Meet Sustainable Development.
            </p>
            <div className="space-y-6">
                <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                Our team consists of <strong className="text-white font-semibold">75+ highly skilled individuals</strong> from backgrounds ranging from EPA retirees and toxicologists to military personnel and attorneys. 
                </p>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                We leverage our diverse global experiences to provide unique perspectives to every situation, implementing design thinking to bring measurable value to the world.
                </p>
            </div>
          </RevealWrapper>
          
          <RevealWrapper delay={200} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
                { val: "75+", label: "Global Experts" },
                { val: "USA", label: "Distribution Reach" },
                { val: "EPA", label: "Retiree Insights" },
                { val: "0-M", label: "Time-to-Market" }
            ].map((stat, i) => (
                <div key={i} className="p-6 md:p-8 border border-slate-900 bg-slate-950/50 hover:border-emerald-500/30 transition-colors">
                    <span className="block text-3xl md:text-4xl font-bold text-white mb-2">{stat.val}</span>
                    <span className="text-[9px] md:text-[10px] text-emerald-500 uppercase tracking-widest">{stat.label}</span>
                </div>
            ))}
          </RevealWrapper>
        </div>
      </section>

      {/* 3. Capabilities: Grid responsive */}
      <section className="py-20 md:py-32 px-6 lg:px-[10%] border-t border-slate-900 bg-slate-950/20">
        <div className="max-w-7xl mx-auto">
          <RevealWrapper className="mb-12 md:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter uppercase">
              How We <span className="text-slate-800">Support</span>
            </h2>
          </RevealWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-900 border border-slate-900 overflow-hidden">
            {capabilities.map((item, index) => (
              <RevealWrapper key={index} delay={index * 100} className="bg-[#010308] p-8 md:p-10 h-full">
                <div className="text-emerald-500 mb-6">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>
      
      {/* 4. Final CTA */}
      <section className="py-32 md:py-48 px-6 lg:px-[10%] border-t border-slate-900 text-center">
        <RevealWrapper>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-10">
            OPTIMIZE <span className="text-emerald-500">AID.</span>
          </h2>
          <button className="group relative w-full sm:w-auto px-10 md:px-12 py-5 border border-emerald-500 text-white font-mono text-xs tracking-widest uppercase transition-all overflow-hidden">
            <span className="relative z-10 group-hover:text-black transition-colors duration-300 inline-flex items-center gap-2">
                Contact Us <ArrowUpRight size={14} />
            </span>
            <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </RevealWrapper>
      </section>

    </div>
  );
}