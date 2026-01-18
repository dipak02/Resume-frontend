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
 * - Minimalist one-line design
 * - Primary Color: Dark Green (Emerald 950)
 * - Interactive social icon transitions
 * - Dynamic year rendering
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    
      <>
      {/* Footer Container */}
      <footer className="w-full bg-emerald-950 border-t border-emerald-900/50 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright Section */}
          <div className="flex items-center gap-2 group order-2 md:order-1">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500/60 transition-colors group-hover:text-emerald-400">
              © {currentYear} 
            </span>
            <span className="h-1 w-1 bg-emerald-800 rounded-full" />
            <span className="text-xs font-black uppercase tracking-widest text-emerald-100/90">
              Dipak Kumar Shah
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 ml-2 text-[9px] font-bold text-emerald-600/80 uppercase">
              <Heart size={10} className="fill-emerald-600 animate-pulse" /> Crafted with Precision
            </span>
          </div>

          {/* Social Links Section */}
          <div className="flex items-center gap-3 order-1 md:order-2">
            <div className="h-px w-8 bg-emerald-900 hidden lg:block" />
            <div className="flex items-center gap-1.5 bg-emerald-900/30 p-1.5 rounded-2xl border border-emerald-800/50 backdrop-blur-sm">
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
    className="p-2.5 rounded-xl text-emerald-500 hover:text-white hover:bg-emerald-800 transition-all duration-300 hover:scale-110 active:scale-90"
  >
    {icon}
  </a>
);

export default Footer;