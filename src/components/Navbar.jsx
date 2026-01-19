import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Send, ChevronRight, Hexagon } from 'lucide-react';
import profile from '../assets/images/icon.png'


/**
 * Navbar Component (Named 'App' as per environment requirements)
 * Features:
 * - Dynamic scroll-based glassmorphism
 * - Integrated Dark Mode state management
 * - Responsive mobile drawer positioned on the right
 * - Lucide-React icons for modern UI
 */
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
 


  // Logo fallback: Using an inline SVG icon since local assets aren't available in this environment
 

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About Me", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Services", href: "#services" },
  ];

  return (
    
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-4 md:px-8 py-4 ${
          isScrolled ? 'pt-4' : 'pt-6'
        }`}
      >
        <div 
          className={`relative max-w-7xl mx-auto transition-all duration-500 rounded-[2.5rem] border ${
            isScrolled 
              ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl border-white/20 dark:border-slate-800' 
              : 'bg-emerald-800 dark:bg-indigo-950 border-transparent shadow-lg'
          }`}
        >
          <div className="px-6 py-4 flex items-center justify-between">
            
            {/* Logo Section */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <img src={profile} alt="Profile" className="w-auto h-12 border border-slate-200 dark:border-slate-700 rounded-full" />
              <span className={`text-sm font-black uppercase tracking-tighter ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-white dark:text-emerald-100'}`}>
                Er. Dipak
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-5 py-2 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-emerald-400 hover:bg-indigo-50 dark:hover:bg-emerald-500/10' 
                      : 'text-white dark:text-emerald-100 hover:bg-white/20'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Dark Mode Toggle
              <button 
                onClick={handleToggle}
                className={`p-3 rounded-2xl border transition-all active:scale-90 shadow-sm ${
                  isScrolled 
                    ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-amber-400' 
                    : 'bg-white/20 border-white/20 text-slate-900 dark:text-amber-300 hover:bg-white/30'
                }`}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button> */}

              {/* Contact Button */}
              <button className="hidden sm:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-orange-500/20 dark:shadow-emerald-600/20 active:scale-95">
                <a href="#contact">Contact Me</a>
                <Send size={14} className="animate-pulse" />
              </button>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-3 rounded-2xl transition-all shadow-sm ${
                  isScrolled 
                    ? 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700' 
                    : 'bg-white/20 text-slate-900 dark:text-white border border-white/20'
                }`}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown (Right Side Only) */}
          <div 
            className={`absolute top-full right-0 mt-2 w-72 md:hidden transition-all duration-300 ease-out origin-top-right overflow-hidden ${
              isOpen 
                ? 'opacity-100 scale-100 pointer-events-auto' 
                : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <div className="mx-4 mb-4 p-4 flex flex-col gap-2 rounded-3xl border shadow-2xl backdrop-blur-2xl 
            
                dark:bg-slate-900/95 border-slate-800 text-slate-300 shadow-slate-950/50 "
                
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border border-transparent hover:border-emerald-500/20 dark:bg-slate-800/50 hover:dark:bg-emerald-500/10' : 'bg-slate-50 hover:bg-white'
                  }`}
                >
                  {link.name}
                  <ChevronRight size={14} className="text-emerald-500" />
                </a>
              ))}
              <div className="h-px w-full bg-slate-200 dark:bg-slate-800 my-2 opacity-50" />
              <button className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white p-4 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg shadow-orange-500/20 active:scale-95 transition-transform">
                <a href="#contact">Get in Touch</a>
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default App;