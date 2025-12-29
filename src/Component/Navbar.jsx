// import React, { useState, useEffect } from "react";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // If user scrolls more than 10px, change state
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 w-full z-[100] transition-all duration-300 ease-in-out px-6 lg:px-[10%] py-4 ${
//         isScrolled
//           ? "bg-slate-950/40 backdrop-blur-md border-b border-white/10 py-3"
//           : "bg-transparent py-5"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Text Logo */}
//         <div className="flex flex-col">
//           <span className="text-white font-black tracking-tighter text-xl leading-none">
//             EVOLVING WORLD
//           </span>
//           <span className="text-emerald-500 font-mono text-[10px] tracking-[0.2em] uppercase">
//             Ventures
//           </span>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex items-center gap-8">
//           {["Home", "About Us", "Products", "Contact Us"].map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase().replace(" ", "")}`}
//               className="text-slate-300 text-sm font-medium hover:text-emerald-400 transition-colors relative group"
//             >
//               {item}
//               {/* Animated underline */}
//               <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all duration-300 group-hover:w-full" />
//             </a>
//           ))}

//           {/* Action Button */}
//           <button className="ml-4 px-5 py-2 bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-emerald-600 hover:border-emerald-600 transition-all">
//             Get Started
//           </button>
//         </div>

//         {/* Mobile Menu Icon (Placeholder) */}
//         <div className="md:hidden text-white cursor-pointer">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//           </svg>
//         </div>
//       </div>
//     </nav>
//   );
// }

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Products", link: "/product" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ease-in-out px-6 lg:px-[10%] lg:py-8 ${
          isScrolled
            ? "bg-slate-950/60 backdrop-blur-md  py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col cursor-pointer">
            <span className="text-white font-black tracking-tighter text-xl leading-none">
              EVOLVING WORLD
            </span>
            <span className="text-emerald-500 font-mono text-[10px] tracking-[0.2em] uppercase">
              Ventures
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-14">
            {navLinks.map((links) => (
              <NavLink
                to={links.link}
                key={links.name}
                className="text-slate-300 text-md font-medium hover:text-emerald-400 transition-colors relative group"
              >
                {links.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Slide-out Panel */}
      <div
        className={`fixed inset-0 z-[110] transition-visibility duration-300 ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Dark Backdrop Overlay */}
        <div
          className={`absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-3/4 max-w-sm bg-slate-900 border-l border-white/10 shadow-2xl transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button Header */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col gap-6 px-10 pt-4">
            {navLinks.map((links) => (
              <NavLink
                to={links.link}
                key={links.name}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-xl font-bold tracking-tight hover:text-emerald-500 transition-colors"
              >

                {links.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
