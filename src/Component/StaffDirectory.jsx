import React, { useState } from "react";
import { ArrowUpRight, Linkedin, Twitter } from "lucide-react";

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
    { 
      id: "01", 
      name: "John Jackson", 
      role: "Board of Directors", 
      expertise: ["Governance", "Strategy"], 
      bio: "Providing high-level oversight and strategic direction to ensure global operational excellence." 
    },
    { 
      id: "02", 
      name: "Dominic Baah", 
      role: "Chief Technical Officer", 
      expertise: ["Tech Architecture", "Innovation"], 
      bio: "Leading the technical synthesis of our global platforms and interdisciplinary digital tools." 
    },
    { 
      id: "03", 
      name: "Carita Johnson", 
      role: "Chief Financial Officer", 
      expertise: ["Asset Management", "Finance"], 
      bio: "Overseeing financial safeguards and capital allocation for sustainable venture development." 
    },
    { 
      id: "04", 
      name: "Walter White", 
      role: "Chief Executive Officer", 
      expertise: ["EPA Relations", "Regulatory"], 
      bio: "Leveraging decades of regulatory experience to navigate complex environmental compliance frameworks." 
    },
    { 
      id: "05", 
      name: "Usha Singh", 
      role: "Laboratory Liaison", 
      expertise: ["Scientific R&D", "Synthesis"], 
      bio: "Bridging the gap between laboratory research and market-ready scientific applications." 
    },
    { 
      id: "06", 
      name: "Ella Morales", 
      role: "Human Resources", 
      expertise: ["Intellectual Capital", "Growth"], 
      bio: "Cultivating our global collective of 75+ experts and managing interdisciplinary talent." 
    }
  ];

  return (
    <section id="staff" className="bg-[#010308] py-32 px-6 lg:px-[10%]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 border-l-2 border-emerald-500 pl-8">
          <h2 className="text-white text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-4">
            Intellectual <br /> Leadership
          </h2>
          <p className="text-slate-500 text-sm max-w-xl font-mono uppercase tracking-widest">
            A diverse collective of chemists, attorneys, and strategists united by a shared vision.
          </p>
        </div>

        <div className="border-t border-slate-800">
          {staff.map((member) => (
            <StaffMember key={member.id} {...member} />
          ))}
        </div>
        
        <div className="mt-16 text-right">
            <p className="text-slate-700 font-mono text-[10px] uppercase tracking-[0.5em]">
                75+ Consultants Globally Active
            </p>
        </div>
      </div>
    </section>
  );
}


// import React, { useState } from "react";
// import { ArrowUpRight, Linkedin, Globe, ShieldCheck } from "lucide-react";

// const PersonnelRow = ({ id, name, role, expertise, isLast }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div 
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className={`group relative py-10 transition-all duration-500 cursor-pointer ${!isLast ? 'border-b border-slate-900' : ''}`}
//     >
//       <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
//         {/* Left: Index and Identity */}
//         <div className="flex items-baseline gap-8">
//           <span className="text-slate-700 font-mono text-[10px] tracking-widest">
//             {id}
//           </span>
//           <div className="relative">
//             <h3 className={`text-3xl lg:text-5xl font-bold tracking-tighter transition-all duration-500 ${isHovered ? 'text-emerald-500 translate-x-4' : 'text-white'}`}>
//               {name}
//             </h3>
//             <div className={`absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-0 bg-emerald-500 transition-all duration-500 ${isHovered ? 'h-full' : ''}`} />
//           </div>
//         </div>

//         {/* Center/Right: Role and Technical Tags */}
//         <div className="flex flex-col lg:items-end gap-2">
//           <span className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.3em]">
//             {role}
//           </span>
//           <div className="flex gap-3 mt-2">
//             {expertise.map((tag, i) => (
//               <span key={i} className="text-[9px] text-slate-500 border border-slate-800 px-2 py-0.5 rounded-full uppercase tracking-tighter group-hover:border-slate-600 transition-colors">
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Far Right: Interaction Icon */}
//         <div className="hidden lg:block">
//            <div className={`p-3 rounded-full border transition-all duration-500 ${isHovered ? 'border-emerald-500 bg-emerald-500/10' : 'border-slate-800'}`}>
//               <ArrowUpRight className={`w-5 h-5 transition-transform duration-500 ${isHovered ? 'rotate-45 text-emerald-500' : 'text-slate-600'}`} />
//            </div>
//         </div>
//       </div>

//       {/* Hover Background Accent */}
//       <div className={`absolute inset-0 -z-10 bg-gradient-to-r from-emerald-500/[0.02] to-transparent opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`} />
//     </div>
//   );
// };

// export default function StaffDirectory() {
//   const directory = [
//     { id: "01", name: "John Jackson", role: "Board of Directors", expertise: ["Governance", "Strategic Planning"] },
//     { id: "02", name: "Dominic Baah", role: "Chief Technical Officer", expertise: ["Architecture", "System Synthesis"] },
//     { id: "03", name: "Carita Johnson", role: "Chief Financial Officer", expertise: ["Asset Management", "Financial Safeguards"] },
//     { id: "04", name: "Usha Singh", role: "Laboratory Liaison", expertise: ["Scientific R&D", "Interdisciplinary Synthesis"] },
//     { id: "05", name: "Ella Morales", role: "Human Resources", expertise: ["Intellectual Capital", "Organizational Growth"] },
//     { id: "06", name: "Walter White", role: "Strategic Advisor", expertise: ["Regulatory", "EPA Relations"] },
//   ];

//   return (
//     <section id="staff" className="bg-[#010308] py-32 px-6 lg:px-[10%] border-t border-slate-900">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Modern Header */}
//         <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
//           <div className="max-w-2xl">
//             <h2 className="text-white text-5xl lg:text-8xl font-black tracking-tighter leading-none mb-6">
//               THE <br />
//               <span className="text-slate-800">COLLECTIVE</span>
//             </h2>
//             <p className="text-slate-400 text-sm font-light leading-relaxed max-w-md">
//               A synchronized network of specialized professionals providing 
//               unique perspectives to global environmental and economic challenges.
//             </p>
//           </div>
          
//           <div className="flex items-center gap-6 pb-2">
//             <div className="text-right">
//               <span className="block text-white text-xs font-mono tracking-widest uppercase">Network Status</span>
//               <span className="text-emerald-500 text-[10px] font-mono uppercase animate-pulse">● Active_Global_Sync</span>
//             </div>
//             <div className="w-px h-10 bg-slate-800" />
//             <ShieldCheck className="w-8 h-8 text-slate-700" />
//           </div>
//         </div>

//         {/* Directory List */}
//         <div className="border-t border-slate-900">
//           {directory.map((staff, idx) => (
//             <PersonnelRow 
//               key={staff.id} 
//               {...staff} 
//               isLast={idx === directory.length - 1} 
//             />
//           ))}
//         </div>

//         {/* Bottom Callout */}
//         <div className="mt-20 flex flex-col md:flex-row justify-between items-center py-10 border-t border-slate-900 gap-6">
//           <p className="text-slate-600 font-mono text-[9px] uppercase tracking-[0.4em]">
//             Supported by 75+ interdisciplinary consultants worldwide
//           </p>
//           <button className="group flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest hover:text-emerald-500 transition-colors">
//             View Operations 
//             <div className="w-8 h-px bg-emerald-500 group-hover:w-12 transition-all" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }