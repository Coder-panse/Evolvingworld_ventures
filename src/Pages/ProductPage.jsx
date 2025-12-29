import React from "react";
import { useScrollReveal } from "../Hooks/useScrollReveal.js";
import { ShoppingCart, ArrowRight } from "lucide-react";

const RevealWrapper = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

export default function ProductsPage() {
  const products = [
    {
      name: "Magnesium Hydroxide",
      subtext: "Active ingredients:",
      desc: "A high precision pharmaceutical synthesis with ergonomic delivery design.",
      price: "29.99",
      image: "https://i.ibb.co/L8m2p9f/magnesium-bottle.png" 
    },
    {
      name: "Regulatory Suite",
      subtext: "Active ingredients:",
      desc: "High quality compliance framework with long-term strategic lifecycle.",
      price: "199.99",
      image: "https://i.ibb.co/L8m2p9f/magnesium-bottle.png"
    },
    {
      name: "Distribution Hub",
      subtext: "Active ingredients:",
      desc: "A versatile logistical hub with multiple ports including USA-wide reach.",
      price: "49.99",
      image: "https://i.ibb.co/L8m2p9f/magnesium-bottle.png"
    },
    {
      name: "Strategic Expert",
      subtext: "Active ingredients:",
      desc: "A mechanical framework for businesses with customizable RGB growth.",
      price: "89.99",
      image: "https://i.ibb.co/L8m2p9f/magnesium-bottle.png"
    }
  ];

  return (
    <div className="bg-[#010308] text-white min-h-screen selection:bg-emerald-500/30 pt-[50px] md:pt-[180px] pb-24 px-6 lg:px-[10%] overflow-x-hidden">
      
      {/* 1. Header: Modern Flow */}
      <header className="max-w-7xl mx-auto mb-20 text-center lg:text-left">
        <RevealWrapper>
          <span className="text-emerald-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">Current Inventory</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
            OUR <span className="text-slate-700 italic">PRODUCTS.</span>
          </h1>
        </RevealWrapper>
      </header>

      {/* 2. Responsive Grid (Flowing with the brand) */}
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <RevealWrapper key={index} delay={index * 100}>
            {/* Card: Dark Theme Flow with Glassmorphism */}
            <div className="bg-slate-950/40 border border-slate-900 group hover:border-emerald-500/50 transition-all duration-500 p-8 flex flex-col items-center text-center h-full relative overflow-hidden">
              
              {/* Image Area from your image logic */}
              <div className="mb-8 h-48 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-emerald-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="max-h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Title & "Active Ingredients" Logic */}
              <div className="flex-grow">
                <h3 className="text-white text-2xl font-bold tracking-tight mb-3 group-hover:text-emerald-400 transition-colors">
                  {item.name}
                </h3>
                
                <p className="text-emerald-500 font-mono text-[10px] uppercase tracking-widest mb-4">
                  {item.subtext}
                </p>
                
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6 px-2 italic">
                  "{item.desc}"
                </p>

                <p className="text-white text-xl font-mono tracking-tighter mb-8">
                  ${item.price}
                </p>
              </div>

              {/* Add to Cart: Brand Consistent Button */}
              <button className="group/btn relative w-full py-4 border border-emerald-500/30 text-white font-mono text-[10px] uppercase tracking-[0.2em] overflow-hidden transition-all">
                <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-black transition-colors duration-300">
                  Add To Cart <ShoppingCart size={14} />
                </span>
                <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </RevealWrapper>
        ))}
      </div>

      {/* 3. Global Capability Footer (Maintains Page Flow) */}
      <section className="mt-24 pt-12 border-t border-slate-900 opacity-20 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between text-[10px] font-mono tracking-[0.4em] uppercase text-slate-500">
          <span>Secure Transaction</span>
          <span>USA Logistics Reach</span>
          <span>Verified Expert Synthesis</span>
        </div>
      </section>
    </div>
  );
}