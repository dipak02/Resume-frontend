import React, { useState, useEffect } from "react";
import { 
  Sparkles,
  Download,
  Layers,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Github,
  CheckCircle2,
  BookUser
} from 'lucide-react';
import profile from '../assets/images/profile.jpg'

/**
 * TextTyper Component
 * Animates text typing and deleting effects.
 */
const TextType = ({ text, typingSpeed = 75, pauseDuration = 1500 }) => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(typingSpeed);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [currentText, delta]);

  const tick = () => {
    let i = loopNum % text.length;
    let fullText = text[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, currentText.length - 1) 
      : fullText.substring(0, currentText.length + 1);

    setCurrentText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.5);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(pauseDuration);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(typingSpeed);
    }
  };

  return (
    <span className="text-emerald-600 dark:text-emerald-400">
      {currentText}
      <span className="animate-pulse ml-1 font-light">|</span>
    </span>
  );
};

/**
 * Main Main Component
 * Focuses exclusively on a high-fidelity Hero section.
 * Featuring an irregular shaped image container without formal borders.
 */
const Main = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden flex flex-col justify-center">
      
      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Content Left (7 Columns) */}
          <div className="lg:col-span-7 space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-400 text-xs font-bold border border-emerald-100 dark:border-emerald-800/50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for new projects
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.05] tracking-tight uppercase">
                Building <br /> 
                <span className="text-emerald-800 dark:text-emerald-500">Digital</span> <br />
                Experiences
              </h1>

              <div className="text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-300">
                Hi, I'm <TextType text={["Dipak Kumar Shah", "Web Developer", "Graphic Designer"]} />
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-xl font-medium">
                I craft modern, responsive, and user-friendly websites that combine clean design with solid structure — helping brands build a strong digital presence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-nowrap gap-2 md:gap-4 pt-4">
              <button className="flex-1 group px-4 sm:px-10 py-5 bg-emerald-800 hover:bg-emerald-900 text-white font-black uppercase tracking-widest text-[10px] sm:text-xs rounded-3xl shadow-2xl shadow-emerald-900/30 transition-all active:scale-95 flex items-center justify-center gap-3">
               <a href="#contact">Hire Me</a> <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="flex-1 group px-4 sm:px-10 py-5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 font-black uppercase tracking-widest text-[10px] sm:text-xs rounded-3xl shadow-sm hover:shadow-lg hover:bg-emerald-200 hover:border-emerald-800/30 transition-all active:scale-95 flex items-center justify-center gap-3">
                 <a href="/resume.pdf" download="Dipak_Shah_Resume.pdf">Resume</a> <Download size={18} />
              </button>
            </div>

            {/* Social Connect */}
            <div className="flex items-center gap-6 pt-6 opacity-100 hover:opacity-100 transition-opacity">
              <div className="flex gap-4">
                <a href="#" className="p-2 text-white bg-emerald-700 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-700 transition-all"><Facebook size={22} /></a>
                <a href="#" className="p-2 text-white bg-emerald-700 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-700 transition-all"><Instagram size={22} /></a>
                <a href="#" className="p-2 text-white bg-emerald-700 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-700 transition-all"><Twitter size={22} /></a>
                <a href="#" className="p-2 text-white bg-emerald-700 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-700 transition-all"><Github size={22} /></a>
              </div>
            </div>
          </div>

          {/* Irregular Dynamic Image Grid Right (5 Columns) */}
          <div className=" hidden lg:block lg:col-span-5 relative animate-in fade-in zoom-in duration-1000 delay-200">
            {/* Dynamic Background Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-700" />
            
            {/* Irregular Card Container (Border Removed) */}
            <div className="relative z-10 group">
              <div 
                className="relative h-[500px] w-full overflow-hidden shadow-2xl transition-all duration-1000 group-hover:scale-[1.02]"
                style={{ 
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                  animation: "blob-animate 8s ease-in-out infinite"
                }}
              >
                <img
                  alt="Dipak Kumar Shah"
                  src={profile}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent" />
                
                {/* Dynamic Floating Badge */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-4/5 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-[2rem] text-white shadow-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-2xl bg-emerald-500">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Profile</p>
                      <p className="text-base font-black uppercase tracking-tight">Verified Dev</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Grid Dots */}
            {/* <div className="absolute top-1/2 -right-8 -translate-y-1/2 grid grid-cols-3 gap-2 opacity-20 hidden md:grid">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="size-2 rounded-full bg-emerald-800" />
              ))}
            </div> */}
          </div>
        </div>
      </section>
      {/* Footer Divider */}
        <div className=" animate-in fade-in duration-1000">
          <hr className="px-12 border-slate-200 dark:border-slate-800" />
          <div className="flex justify-center -mt-3">
             <div className="px-4 bg-slate-50 dark:bg-slate-950">
                <BookUser className="size-6 text-slate-300 dark:text-slate-700" />
             </div>
          </div>
        </div>

      {/* Embedded Style for Blob Animation */}
      <style>{`
        @keyframes blob-animate {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
      `}</style>
    </div>
  );
};

export default Main;