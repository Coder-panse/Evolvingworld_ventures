import React from "react";
import { Twitter, Linkedin, Mail, Globe } from "lucide-react"; // Suggested icon library

const StaffCard = ({ name, role, bio }) => (
  <div className="group relative p-8 border border-slate-900 bg-slate-950/50 hover:bg-white transition-all duration-500 ease-in-out">
    {/* Subtle Accent Line */}
    <div className="absolute top-0 left-0 w-0 h-[2px] bg-emerald-500 group-hover:w-full transition-all duration-500" />
    
    <div className="relative z-10">
      <h3 className="text-white text-2xl font-bold tracking-tighter mb-1 group-hover:text-black transition-colors">
        {name}
      </h3>
      <p className="text-emerald-500 font-mono text-[10px] uppercase tracking-widest mb-6">
        {role}
      </p>
      
      <p className="text-slate-400 text-sm leading-relaxed mb-8 group-hover:text-slate-600 transition-colors italic">
        "{bio}"
      </p>

      {/* Modern Social Links - Static Slate to Active Emerald */}
      <div className="flex gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
        <Linkedin className="w-4 h-4 text-slate-400 hover:text-emerald-600 cursor-pointer transition-colors" />
        <Twitter className="w-4 h-4 text-slate-400 hover:text-emerald-600 cursor-pointer transition-colors" />
        <Globe className="w-4 h-4 text-slate-400 hover:text-emerald-600 cursor-pointer transition-colors" />
      </div>
    </div>

    {/* Hover Background Shift - Optional premium feel */}
    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-10" />
  </div>
);

export default function StaffSection() {
  const staff = [
    {
      name: "Walter White",
      role: "Chief Executive Officer",
      bio: "Leveraging 30 years of regulatory experience to expedite sustainable development and compliance."
    },
    {
      name: "Sarah Jhinson",
      role: "Product Manager",
      bio: "Optimizing the USA distribution network to reduce time-to-market for innovative ventures."
    },
    {
      name: "William Anderson",
      role: "CTO",
      bio: "Preparing scientific safeguards and ensuring product safety in a post-pandemic global economy."
    },
    {
      name: "Usha Singh",
      role: "Labouratory Liaison",
      bio: "Preparing scientific safeguards and ensuring product safety in a post-pandemic global economy."
    },
    {
      name: "Dominic Baah",
      role: "Cheif Technical Officer",
      bio: "Preparing scientific safeguards and ensuring product safety in a post-pandemic global economy."
    },
    {
      name: "Carita Johnson",
      role: "Cheif Financial Officer",
      bio: "Preparing scientific safeguards and ensuring product safety in a post-pandemic global economy."
    }
  ];

  return (
    <section id="staff" className="bg-[#010308] py-32 px-6 lg:px-[10%]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Modernized version of your old "Meet Our Staff" */}
        <div className="mb-20 border-l-2 border-emerald-500 pl-8">
          <h2 className="text-white text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-4">
            Intellectual <br /> Leadership
          </h2>
          <p className="text-slate-500 text-sm max-w-xl font-mono uppercase tracking-widest">
            A diverse collective of chemists, attorneys, and strategists united by a shared vision.
          </p>
        </div>

        {/* The Grid - Cleaner, No-Shadow, High-Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {staff.map((person, idx) => (
            <StaffRow key={idx} {...person} /> 
          ))}
        </div>
        
        {/* Supporting Text */}
        <div className="mt-16 text-right">
            <p className="text-slate-700 font-mono text-[10px] uppercase tracking-[0.5em]">
                75+ Consultants Globally Active
            </p>
        </div>
      </div>
    </section>
  );
}

// A variation if you want the "Row" look instead of cards for a cleaner directory feel
const StaffRow = ({ name, role, bio }) => (
    <div className="group border border-slate-900 p-10 hover:border-emerald-500/50 transition-all duration-300">
        <p className="text-emerald-500 font-mono text-[9px] uppercase tracking-widest mb-4">Personnel_File // 01</p>
        <h3 className="text-white text-3xl font-bold mb-2 tracking-tighter">{name}</h3>
        <p className="text-slate-400 text-xs uppercase tracking-widest mb-6">{role}</p>
        <p className="text-slate-500 text-sm leading-relaxed mb-8">{bio}</p>
        <div className="flex gap-4">
            <div className="w-8 h-px bg-slate-800 group-hover:w-full group-hover:bg-emerald-500 transition-all duration-500" />
        </div>
    </div>
)