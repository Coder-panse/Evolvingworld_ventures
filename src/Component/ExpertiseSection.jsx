// import React from "react";

// const PillarCard = ({ title, description, category }) => (
//   <div className="group relative p-8 border border-slate-800 bg-slate-950 hover:bg-white transition-all duration-300 ease-in-out">
//     <div className="flex flex-col h-full justify-between">
//       <div>
//         <span className="inline-block px-2 py-1 mb-6 text-[10px] font-mono tracking-widest uppercase border border-emerald-500/30 text-emerald-500 group-hover:border-emerald-600 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
//           {category}
//         </span>
//         <h3 className="text-2xl font-bold text-white group-hover:text-black mb-4 tracking-tight transition-colors">
//           {title}
//         </h3>
//         <p className="text-slate-400 group-hover:text-slate-600 text-sm leading-relaxed transition-colors">
//           {description}
//         </p>
//       </div>
      
//       {/* Sharp Arrow Icon */}
//       <div className="mt-8 text-emerald-500 group-hover:text-black transition-colors">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
//           <path strokeLinecap="square" strokeLinejoin="square" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
//         </svg>
//       </div>
//     </div>
//   </div>
// );

// export default function ExpertiseSection() {
//   const pillars = [
//     {
//       category: "Legal & Policy",
//       title: "Regulatory Compliance",
//       description: "Navigating complex EPA frameworks with a team of retirees and specialized attorneys."
//     },
//     {
//       category: "Laboratory",
//       title: "Scientific R&D",
//       description: "Accelerating product synthesis through our network of Chemists and Toxicologists."
//     },
//     {
//       category: "Logistics",
//       title: "Market Distribution",
//       description: "Comprehensive warehousing and distribution networks active across all 50 US states."
//     },
//     {
//       category: "Strategic",
//       title: "Safeguard Advisory",
//       description: "Military-grade threat assessment and financial management for sustainable development."
//     }
//   ];

//   return (
//     <section id="aboutus" className="bg-[#010308] pt-32 pb-24 px-6 lg:px-[10%]">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 border-b border-slate-800 pb-12">
//           <div className="lg:col-span-8">
//             <h2 className="text-white text-5xl lg:text-7xl font-bold tracking-tighter mb-8">
//               75+ EXPERTS. <br />
//               ONE MISSION.
//             </h2>
//             <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
//               We leverage interdisciplinary expertise to reduce time-to-market and build global safeguards.
//             </p>
//           </div>
//           <div className="lg:col-span-4 flex lg:justify-end items-end">
//              <div className="border-l border-emerald-500 pl-6">
//                 <p className="text-white font-mono text-sm uppercase tracking-[0.2em] mb-2">Philosophy</p>
//                 <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-widest">
//                   Design Thinking <br /> Sustainable Development <br /> Global Synthesis
//                 </p>
//              </div>
//           </div>
//         </div>

//         {/* Bento Grid Layout - Clean Lines */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-800">
//           {pillars.map((pillar, idx) => (
//             <div key={idx} className="border-r border-b border-slate-800">
//               <PillarCard {...pillar} />
//             </div>
//           ))}
//         </div>

//         {/* Vision Statement Section */}
//         <div className="mt-20 flex flex-col md:flex-row justify-between items-start gap-12">
//            <div className="md:w-1/3">
//               <h4 className="text-white font-bold text-xl uppercase tracking-widest italic">The Vision</h4>
//            </div>
//            <div className="md:w-2/3 border-t border-slate-800 pt-8">
//               <p className="text-slate-300 text-2xl font-medium leading-tight">
//                 "Our team members come from different parts of the world. We leverage our experiences to provide unique perspectives to situations."
//               </p>
//            </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { useScrollReveal } from "../Hooks/useScrollReveal.js"; // Import your hook

// RevealWrapper added to match your other pages
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

const PillarCard = ({ title, description, category }) => (
  <div className="group relative p-8 border border-slate-800 bg-slate-950 hover:bg-white transition-all duration-300 ease-in-out h-full">
    <div className="flex flex-col h-full justify-between">
      <div>
        <span className="inline-block px-2 py-1 mb-6 text-[10px] font-mono tracking-widest uppercase border border-emerald-500/30 text-emerald-500 group-hover:border-emerald-600 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
          {category}
        </span>
        <h3 className="text-2xl font-bold text-white group-hover:text-black mb-4 tracking-tight transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 group-hover:text-slate-600 text-sm leading-relaxed transition-colors">
          {description}
        </p>
      </div>
      
      {/* Sharp Arrow Icon */}
      <div className="mt-8 text-emerald-500 group-hover:text-black transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="square" strokeLinejoin="square" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>
    </div>
  </div>
);

export default function ExpertiseSection() {
  const pillars = [
    {
      category: "Legal & Policy",
      title: "Regulatory Compliance",
      description: "Navigating complex EPA frameworks with a team of retirees and specialized attorneys."
    },
    {
      category: "Laboratory",
      title: "Scientific R&D",
      description: "Accelerating product synthesis through our network of Chemists and Toxicologists."
    },
    {
      category: "Logistics",
      title: "Market Distribution",
      description: "Comprehensive warehousing and distribution networks active across all 50 US states."
    },
    {
      category: "Strategic",
      title: "Safeguard Advisory",
      description: "Military-grade threat assessment and financial management for sustainable development."
    }
  ];

  return (
    <section id="aboutus" className="bg-[#010308] pt-32 pb-24 px-6 lg:px-[10%]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 border-b border-slate-800 pb-12">
          <div className="lg:col-span-8">
            <RevealWrapper>
              <h2 className="text-white text-5xl lg:text-7xl font-bold tracking-tighter mb-8 uppercase">
                75+ Experts. <br />
                One Mission.
              </h2>
              <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                We leverage interdisciplinary expertise to reduce time-to-market and build global safeguards.
              </p>
            </RevealWrapper>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end items-end">
            <RevealWrapper delay={200}>
              <div className="border-l border-emerald-500 pl-6">
                <p className="text-white font-mono text-sm uppercase tracking-[0.2em] mb-2">Philosophy</p>
                <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-widest">
                  Design Thinking <br /> Sustainable Development <br /> Global Synthesis
                </p>
              </div>
            </RevealWrapper>
          </div>
        </div>

        {/* Bento Grid Layout - Each card revealed with a slight stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-800">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="border-r border-b border-slate-800 overflow-hidden">
              <RevealWrapper delay={idx * 100}>
                <PillarCard {...pillar} />
              </RevealWrapper>
            </div>
          ))}
        </div>

        {/* Vision Statement Section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="md:w-1/3">
            <RevealWrapper>
              <h4 className="text-white font-bold text-xl uppercase tracking-widest italic">The Vision</h4>
            </RevealWrapper>
          </div>
          <div className="md:w-2/3 border-t border-slate-800 pt-8">
            <RevealWrapper delay={300}>
              <p className="text-slate-300 text-2xl font-medium leading-tight">
                "Our team members come from different parts of the world. We leverage our experiences to provide unique perspectives to situations."
              </p>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}