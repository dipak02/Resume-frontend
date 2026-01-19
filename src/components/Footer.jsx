import React from "react";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Github, 
  Linkedin,
  Heart
} from 'lucide-react';

/**
 * Footer Component (Named 'Footer' for environment compatibility)
 * Features:
 * - Minimalist one-line design with full dark mode support
 * - Transitions smoothly between light and dark themes
 * - Interactive social icon transitions
 * - Dynamic year rendering
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    
      <>
      {/* Footer Container */}
      <footer className="w-full bg-emerald-900 dark:bg-slate-950 border-t border-emerald-200 dark:border-slate-800 py-6 px-6 md:px-12 transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright Section */}
          <div className="flex items-center gap-2 group order-2 md:order-1">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-500/60 transition-colors group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
              © {currentYear} 
            </span>
            <span className="h-1 w-1 bg-emerald-300 dark:bg-slate-700 rounded-full transition-colors" />
            <span className="text-xs font-black uppercase tracking-widest text-white dark:text-slate-100 transition-colors">
              Dipak Kumar Shah
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 ml-2 text-[9px] font-bold text-emerald-500 dark:text-emerald-400/80 uppercase transition-colors">
              Crafted with <Heart size={10} className="fill-emerald-700 dark:fill-emerald-700 transition-colors animate-pulse" />  
            </span>
          </div>

          {/* Social Links Section */}
          <div className="flex items-center gap-3 order-1 md:order-2">
            <div className="h-px w-8 bg-emerald-300 dark:bg-slate-700 hidden lg:block transition-colors" />
            <div className="flex items-center gap-1.5 bg-emerald-100 dark:bg-slate-900/50 p-1.5 rounded-2xl border border-emerald-200 dark:border-slate-800 backdrop-blur-sm transition-colors">
              <SocialLink icon={<Facebook size={16} />} href="#" label="Facebook" />
              <SocialLink icon={<Instagram size={16} />} href="#" label="Instagram" />
              <SocialLink icon={<Twitter size={16} />} href="#" label="Twitter" />
              <SocialLink icon={<Github size={16} />} href="#" label="GitHub" />
              <SocialLink icon={<Linkedin size={16} />} href="#" label="LinkedIn" />
            </div>
          </div>

        </div>
      </footer>
   </>
  );
};

/**
 * Helper component for social icons with consistent styling
 */
const SocialLink = ({ icon, href, label }) => (
  <a 
    href={href} 
    aria-label={label}
    className="p-2.5 rounded-xl text-emerald-600 dark:text-slate-300 hover:text-emerald-900 dark:hover:text-white hover:bg-emerald-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 active:scale-90"
  >
    {icon}
  </a>
);

export default Footer;