// import React, { useState } from "react";
// import { ArrowUpRight, Linkedin, Twitter } from "lucide-react";

// const StaffMember = ({ id, name, role, bio, expertise }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div 
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className="group relative border-b border-slate-800 py-8 transition-all duration-500 cursor-pointer"
//     >
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         {/* Left Side: Basic Info */}
//         <div className="flex items-center gap-6">
//           <span className="text-slate-600 font-mono text-xs">{id}</span>
//           <div>
//             <h3 className={`text-2xl md:text-4xl font-bold transition-all duration-300 ${isHovered ? 'text-emerald-500 translate-x-4' : 'text-white'}`}>
//               {name}
//             </h3>
//             <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mt-1">
//               {role}
//             </p>
//           </div>
//         </div>

//         {/* Right Side: Quick Expertise Tags */}
//         <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
//           {expertise.map((skill, i) => (
//             <span key={i} className="px-3 py-1 border border-slate-700 text-slate-400 text-[9px] uppercase tracking-tighter">
//               {skill}
//             </span>
//           ))}
//           <ArrowUpRight className={`w-6 h-6 transition-transform duration-500 ${isHovered ? 'rotate-45 text-emerald-500' : 'text-slate-700'}`} />
//         </div>
//       </div>

//       {/* Expandable Detail Section */}
//       <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isHovered ? 'max-h-40 mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pl-12">
//           <div className="md:col-span-8">
//             <p className="text-slate-400 text-sm leading-relaxed max-w-2xl italic">
//               "{bio}"
//             </p>
//           </div>
//           <div className="md:col-span-4 flex justify-end gap-6">
//              <Linkedin className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
//              <Twitter className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function StaffDirectory() {
//   const staff = [
//     { 
//       id: "01", 
//       name: "John Jackson", 
//       role: "Board of Directors", 
//       expertise: ["Governance", "Strategy"], 
//       bio: "Providing high-level oversight and strategic direction to ensure global operational excellence." 
//     },
//     { 
//       id: "02", 
//       name: "Dominic Baah", 
//       role: "Chief Technical Officer", 
//       expertise: ["Tech Architecture", "Innovation"], 
//       bio: "Leading the technical synthesis of our global platforms and interdisciplinary digital tools." 
//     },
//     { 
//       id: "03", 
//       name: "Carita Johnson", 
//       role: "Chief Financial Officer", 
//       expertise: ["Asset Management", "Finance"], 
//       bio: "Overseeing financial safeguards and capital allocation for sustainable venture development." 
//     },
//     { 
//       id: "04", 
//       name: "Walter White", 
//       role: "Chief Executive Officer", 
//       expertise: ["EPA Relations", "Regulatory"], 
//       bio: "Leveraging decades of regulatory experience to navigate complex environmental compliance frameworks." 
//     },
//     { 
//       id: "05", 
//       name: "Usha Singh", 
//       role: "Laboratory Liaison", 
//       expertise: ["Scientific R&D", "Synthesis"], 
//       bio: "Bridging the gap between laboratory research and market-ready scientific applications." 
//     },
//     { 
//       id: "06", 
//       name: "Ella Morales", 
//       role: "Human Resources", 
//       expertise: ["Intellectual Capital", "Growth"], 
//       bio: "Cultivating our global collective of 75+ experts and managing interdisciplinary talent." 
//     }
//   ];

//   return (
//     <section id="staff" className="bg-[#010308] py-32 px-6 lg:px-[10%]">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-20 border-l-2 border-emerald-500 pl-8">
//           <h2 className="text-white text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-4">
//             Intellectual <br /> Leadership
//           </h2>
//           <p className="text-slate-500 text-sm max-w-xl font-mono uppercase tracking-widest">
//             A diverse collective of chemists, attorneys, and strategists united by a shared vision.
//           </p>
//         </div>

//         <div className="border-t border-slate-800">
//           {staff.map((member) => (
//             <StaffMember key={member.id} {...member} />
//           ))}
//         </div>
        
//         <div className="mt-16 text-right">
//             <p className="text-slate-700 font-mono text-[10px] uppercase tracking-[0.5em]">
//                 75+ Consultants Globally Active
//             </p>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { ArrowUpRight, Linkedin, Twitter } from "lucide-react";
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

const StaffMember = ({ id, name, role, bio, expertise }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border-b border-slate-800 py-8 transition-all duration-500 cursor-pointer"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Left Side: Basic Info */}
        <div className="flex items-center gap-6">
          <span className="text-slate-600 font-mono text-xs">{id}</span>
          <div>
            <h3 className={`text-2xl md:text-4xl font-bold transition-all duration-300 ${isHovered ? 'text-emerald-500 translate-x-4' : 'text-white'}`}>
              {name}
            </h3>
            <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mt-1">
              {role}
            </p>
          </div>
        </div>

        {/* Right Side: Quick Expertise Tags */}
        <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
          {expertise.map((skill, i) => (
            <span key={i} className="px-3 py-1 border border-slate-700 text-slate-400 text-[9px] uppercase tracking-tighter">
              {skill}
            </span>
          ))}
          <ArrowUpRight className={`w-6 h-6 transition-transform duration-500 ${isHovered ? 'rotate-45 text-emerald-500' : 'text-slate-700'}`} />
        </div>
      </div>

      {/* Expandable Detail Section */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isHovered ? 'max-h-40 mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pl-12">
          <div className="md:col-span-8">
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl italic">
              "{bio}"
            </p>
          </div>
          <div className="md:col-span-4 flex justify-end gap-6">
             <Linkedin className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
             <Twitter className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function StaffDirectory() {
  const staff = [
    { id: "01", name: "John Jackson", role: "Board of Directors", expertise: ["Governance", "Strategy"], bio: "Providing high-level oversight and strategic direction to ensure global operational excellence." },
    { id: "02", name: "Dominic Baah", role: "Chief Technical Officer", expertise: ["Tech Architecture", "Innovation"], bio: "Leading the technical synthesis of our global platforms and interdisciplinary digital tools." },
    { id: "03", name: "Carita Johnson", role: "Chief Financial Officer", expertise: ["Asset Management", "Finance"], bio: "Overseeing financial safeguards and capital allocation for sustainable venture development." },
    { id: "04", name: "Walter White", role: "Chief Executive Officer", expertise: ["EPA Relations", "Regulatory"], bio: "Leveraging decades of regulatory experience to navigate complex environmental compliance frameworks." },
    { id: "05", name: "Usha Singh", role: "Laboratory Liaison", expertise: ["Scientific R&D", "Synthesis"], bio: "Bridging the gap between laboratory research and market-ready scientific applications." },
    { id: "06", name: "Ella Morales", role: "Human Resources", expertise: ["Intellectual Capital", "Growth"], bio: "Cultivating our global collective of 75+ experts and managing interdisciplinary talent." }
  ];

  return (
    <section id="staff" className="bg-[#010308] py-32 px-6 lg:px-[10%]">
      <div className="max-w-7xl mx-auto">
        <RevealWrapper>
          <div className="mb-20 border-l-2 border-emerald-500 pl-8">
            <h2 className="text-white text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-4">
              Intellectual <br /> Leadership
            </h2>
            <p className="text-slate-500 text-sm max-w-xl font-mono uppercase tracking-widest">
              A diverse collective of chemists, attorneys, and strategists united by a shared vision.
            </p>
          </div>
        </RevealWrapper>

        <div className="border-t border-slate-800">
          {staff.map((member, idx) => (
            <RevealWrapper key={member.id} delay={idx * 100}>
              <StaffMember {...member} />
            </RevealWrapper>
          ))}
        </div>
        
        <RevealWrapper delay={400}>
          <div className="mt-16 text-right">
              <p className="text-slate-700 font-mono text-[10px] uppercase tracking-[0.5em]">
                  75+ Consultants Globally Active
              </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
