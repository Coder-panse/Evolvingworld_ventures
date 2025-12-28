// import React from "react";
// import { Linkedin, Mail, ArrowUpRight, Shield } from "lucide-react";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const links = {
//     Company: ["About Us", "Our Staff", "Careers", "News"],
//     Services: ["Regulatory R&D", "Market Distribution", "Scientific Advisory", "Legal Support"],
//     Legal: ["Privacy Policy", "Terms of Service", "Compliance", "Security"]
//   };

//   return (
//     <footer className="bg-[#010308]  pt-24 pb-12 px-6 lg:px-[10%]">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Top Section: Branding & CTA */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
//           <div className="lg:col-span-6">
//             <div className="flex flex-col mb-8">
//               <span className="text-white font-black tracking-tighter text-3xl leading-none">
//                 EVOLVING WORLD
//               </span>
//               <span className="text-emerald-500 font-mono text-xs tracking-[0.3em] uppercase mt-1">
//                 Ventures
//               </span>
//             </div>
//             <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-8">
//               Expediting development processes and building global safeguards through interdisciplinary synthesis and design thinking.
//             </p>
//             <div className="flex gap-4">
//               <a href="#" className="p-3 border border-slate-800 text-slate-400 hover:text-emerald-500 hover:border-emerald-500 transition-all">
//                 <Linkedin size={18} />
//               </a>
//               <a href="#" className="p-3 border border-slate-800 text-slate-400 hover:text-emerald-500 hover:border-emerald-500 transition-all">
//                 <Mail size={18} />
//               </a>
//             </div>
//           </div>

//           <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
//             {Object.entries(links).map(([category, items]) => (
//               <div key={category}>
//                 <h4 className="text-white font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
//                   {category}
//                 </h4>
//                 <ul className="space-y-4">
//                   {items.map((item) => (
//                     <li key={item}>
//                       <a href="#" className="text-slate-500 text-xs hover:text-emerald-400 transition-colors flex items-center group">
//                         {item}
//                         <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Section: System Status & Copyright */}
//         <div className="border-t border-slate-900 pt-12 flex justify-between items-center gap-8">
//           {/* Copyright & Secondary Info */}
//             <p className="text-slate-600 text-[10px] font-mono uppercase tracking-[0.2em]">
//               © {currentYear} Evolving World Ventures. All Rights Reserved.
//             </p>
//             <p className="text-slate-800 text-[9px] font-mono uppercase tracking-tighter">
//                 LAT: 38.8977° N | LONG: 77.0365° W
//             </p>
//           </div>

//       </div>
//     </footer>
//   );
// }

import React from "react";
import { Linkedin, Mail, ArrowUpRight, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Company: ["About Us", "Our Staff", "Careers", "News"],
    Services: ["Regulatory R&D", "Market Distribution", "Scientific Advisory", "Legal Support"],
    Legal: ["Privacy Policy", "Terms of Service", "Compliance", "Security"]
  };

  return (
    <footer className="bg-[#010308] pt-24 pb-12 px-6 lg:px-[10%] relative overflow-hidden">
      
      {/* --- Fading Emerald Border Top --- */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />
      {/* Subtle Glow Effect behind the line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[20px] bg-emerald-500/10 blur-[40px] pointer-events-none" />
      {/* --------------------------------- */}

      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Branding & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-6">
            <div className="flex flex-col mb-8">
              <span className="text-white font-black tracking-tighter text-3xl leading-none">
                EVOLVING WORLD
              </span>
              <span className="text-emerald-500 font-mono text-xs tracking-[0.3em] uppercase mt-1">
                Ventures
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-8">
              Expediting development processes and building global safeguards through interdisciplinary synthesis and design thinking.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 border border-slate-800 text-slate-400 hover:text-emerald-500 hover:border-emerald-500 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-3 border border-slate-800 text-slate-400 hover:text-emerald-500 hover:border-emerald-500 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-white font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
                  {category}
                </h4>
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-slate-400 text-xs hover:text-emerald-400 transition-colors flex items-center group">
                        {item}
                        <ArrowUpRight size={12} className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="relative pt-12 flex justify-between items-center gap-8">
          {/* Fading divider for bottom section too */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          
          <p className="text-slate-600 text-[10px] font-mono uppercase tracking-[0.2em]">
            © {currentYear} Evolving World Ventures. All Rights Reserved.
          </p>
          <p className="text-slate-800 text-[9px] font-mono uppercase tracking-tighter">
            LAT: 38.8977° N | LONG: 77.0365° W
          </p>
        </div>

      </div>
    </footer>
  );
}