import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import profile from "../assets/images/herosection.png";

export default function App() {
  // State for dynamic background titles
  const [titles] = useState(['Dipak Kr. Shah', 'Web Developer', 'Web Designer', 'IT Engineer']);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  // Title rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setFadeState('fade-in');
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [titles]);

  return (
    <div className="min-h-screen bg-[#073224] text-white font-sans flex items-center justify-center overflow-hidden relative selection:bg-[#db4b7d] selection:text-white px-4 sm:px-6 md:px-16">
      
      {/* Dynamic Massive Background Text for desktop */}
      <div className="hidden lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 
          className={`text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw] font-black tracking-tight text-emerald-300/20 leading-none whitespace-nowrap uppercase max-w-[95vw] transition-all duration-500 ease-in-out ${
            fadeState === 'fade-in' 
              ? 'opacity-100 scale-100 filter blur-0' 
              : 'opacity-0 scale-95 filter blur-sm'
          }`}
        >
          {titles[currentTitleIndex]}
        </h1>
      </div>

      {/* HERO CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4">
          
          {/* LEFT SIDE: Heading & Description */}
          <div className="lg:col-span-4 flex flex-col justify-center text-left space-y-6 max-w-xl mx-auto lg:mx-0 z-10 order-2 lg:order-1">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              <span className="block sm:whitespace-nowrap">Building <span className="relative inline-block text-white">
                Digital
                {/* Custom Hand-drawn yellow underline matching the image */}
                <span className="absolute left-0 bottom-[-6px] w-full h-3 flex items-center">
                  <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-full text-[#fabc2c] fill-current">
                    <path d="M0,5 Q50,0 100,5 T200,5 L200,8 Q100,3 0,8 Z" />
                  </svg>
                </span>
              </span></span>
              
              Experiences
            </h2>
            
            <p className="text-emerald-100/70 leading-relaxed text-sm sm:text-base font-normal max-w-md">
              I craft modern, responsive, and user-friendly websites that combine clean design with solid structure — helping brands build a strong digital presence.
            </p>
          </div>

          {/* CENTER: Image cutout with Side-Wise Dissolve Effect */}
          <div className="lg:col-span-4 flex justify-center items-center relative z-20 order-1 lg:order-2 h-[340px] sm:h-[460px] lg:h-[600px]">
            <div className="relative w-full h-full max-w-[320px] sm:max-w-[440px] lg:max-w-[500px] flex items-end justify-center">
              
              {/* Image Frame with Side and Bottom Smooth Blending Dissolve */}
              <div 
                className="w-full h-full flex items-end justify-center overflow-hidden relative"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to top, transparent 0%, black 20%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to top, transparent 0%, black 20%)',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in'
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 lg:hidden overflow-hidden px-4">
                  <h1
                    className={`text-[20vw] sm:text-[18vw] font-black tracking-tight text-emerald-300/25 leading-none text-center whitespace-normal uppercase max-w-[95vw] transition-all duration-500 ease-in-out ${
                      fadeState === 'fade-in'
                        ? 'opacity-100 scale-100 filter blur-0'
                        : 'opacity-0 scale-95 filter blur-sm'
                    }`}
                  >
                    {titles[currentTitleIndex]}
                  </h1>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] h-[260px] rounded-full bg-emerald-900/30 blur-2xl pointer-events-none -z-20" />
                <img
                  src={profile}
                  alt="Portrait"
                  className="h-full w-full object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] transform hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Decorative background glow behind the cutout */}
              <div className="absolute w-[250px] h-[250px] rounded-full bg-emerald-500/10 blur-3xl -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* RIGHT SIDE: Call To Action & Custom Social Grid */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start space-y-8 z-10 order-3 text-center lg:text-left w-full">
            
            {/* Action Buttons styled exact to the Pink Buttons in the image */}
            <div className="flex flex-row gap-4 w-full justify-center lg:justify-start max-w-xs sm:max-w-md lg:max-w-none">
              <button
                type="button"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.hash = '#contact';
                  }
                }}
                className="flex-1 max-w-[150px] bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[#db4b7d]/30 text-sm md:text-base tracking-wide whitespace-nowrap"
              >
                Hire Me
              </button>
              <button
                type="button"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Dipak_Shah_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="flex-1 max-w-[150px] bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[#db4b7d]/30 text-sm md:text-base tracking-wide whitespace-nowrap"
              >
                Resume
              </button>
            </div>

            {/* Premium Social Circle Buttons */}
            <div className="flex flex-row gap-5 items-center justify-center lg:justify-start wrap">
              <a href="https://www.facebook.com/profile.php?id=61580664927776" target="_blank" className="w-11 h-11 rounded-xl bg-[#042118] hover:bg-[#073627] border border-[#0b4734] flex items-center justify-center text-[#1db386] hover:text-white transition-all transform hover:scale-110 shadow-md">
                <Facebook size={18} fill="currentColor" stroke="none" />
              </a>
              <a href="https://www.instagram.com/_shahdipak/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-[#042118] hover:bg-[#073627] border border-[#0b4734] flex items-center justify-center text-[#1db386] hover:text-white transition-all transform hover:scale-110 shadow-md">
                <Instagram size={18} />
              </a>
              <a href="https://x.com/dipakshah56" target="_blank" className="w-11 h-11 rounded-xl bg-[#042118] hover:bg-[#073627] border border-[#0b4734] flex items-center justify-center text-[#1db386] hover:text-white transition-all transform hover:scale-110 shadow-md">
                <Twitter size={18} fill="currentColor" stroke="none" />
              </a>
              <a href="https://github.com/dipak02" target="_blank" className="w-11 h-11 rounded-xl bg-[#042118] hover:bg-[#073627] border border-[#0b4734] flex items-center justify-center text-[#1db386] hover:text-white transition-all transform hover:scale-110 shadow-md">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/dipakkumarshah" target="_blank" className="w-11 h-11 rounded-xl bg-[#042118] hover:bg-[#073627] border border-[#0b4734] flex items-center justify-center text-[#1db386] hover:text-white transition-all transform hover:scale-110 shadow-md">
                <Linkedin size={18} />
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}