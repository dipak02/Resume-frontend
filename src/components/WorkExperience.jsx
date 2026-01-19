import React, { useEffect, useState, useRef } from "react";
import { 
  Briefcase,
  Calendar,
  Award,
  Sparkles,
  Code2,
  Palette,
  ChevronRight
} from 'lucide-react';

/**
 * Work Experience Timeline Component (Named 'WorkExperience' for environment compatibility)
 * Features:
 * - Refined Spacing: Reduced padding and margins for a more compact UI
 * - Alternating side-to-side layout for desktop
 * - Large subtle background icons for visual depth
 * - Scroll-triggered entrance animations via Intersection Observer
 * - Primary Color: Dark Green (Emerald 900)
 */
const WorkExperience = () => {
  const experienceData = [
    {
      year: "2024 – Present",
      title: "Full Stack Developer (Freelance)",
      org: "Remote Collaboration",
      description: "Developing robust web applications using the MERN stack and Django, focusing on scalable architecture, secure APIs, and user-centric design patterns.",
      icon: <Code2 size={20} />,
      bgIcon: <Code2 size={180} />
    },
    {
      year: "2023 – 2024",
      title: "Graphic Design Intern",
      org: "Creative Studio",
      description: "Assisted in creating branding materials, high-fidelity social media assets, and interactive UI components for various international client projects.",
      icon: <Palette size={20} />,
      bgIcon: <Palette size={180} />
    },
    {
      year: "2022",
      title: "Web Development Trainee",
      org: "Tech Hub Academy",
      description: "Underwent intensive training on modern frontend technologies, mastering responsive design principles and complex JavaScript framework ecosystems.",
      icon: <Briefcase size={20} />,
      bgIcon: <Briefcase size={180} />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden">
      
      {/* EXPERIENCE SECTION */}
      <main className="max-w-6xl mx-auto px-4   space-y-12">
        
        {/* Header Section */}
        <div id="experience" className="text-center space-y-3 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="flex flex-col items-center gap-1.5">
            <h1 className="text-emerald-800 dark:text-emerald-500 font-black text-[10px] uppercase tracking-[0.4em]">
              Professional Career
            </h1>
            <div className="h-1 w-10 bg-emerald-800 dark:bg-emerald-600 rounded-full" />
          </div>
          <p className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
            Work Experience
          </p> 
        </div>

        {/* Centralized Alternating Timeline */}
        <div className="relative mt-12">
          {/* Vertical Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-emerald-100 dark:bg-emerald-900/30 hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {experienceData.map((item, index) => (
              <TimelineCard 
                key={index} 
                data={item} 
                isRight={index % 2 !== 0} 
              />
            ))}
          </div>
        </div>
             <div className="pt-12 animate-in fade-in duration-1000">
                      <hr className="border-slate-200 dark:border-slate-800" />
                      <div className="flex justify-center -mt-4">
                         <div className="px-6 bg-slate-50 dark:bg-slate-950 flex gap-4 text-slate-300 dark:text-slate-700">
                            <Award className="size-6" />
                            
                         </div>
                      </div>
                    </div>
        {/* Decorative Divider */}
        {/* <div className="pt-10 flex flex-col items-center gap-3 opacity-20">
           <div className="h-16 w-px bg-gradient-to-b from-emerald-800 to-transparent" />
           <Award className="text-emerald-800 dark:text-emerald-500" size={24} />
        </div> */}
      </main>
    </div>
  );
};

/**
 * Animated Timeline Card Component with Background Decoration
 */
const TimelineCard = ({ data, isRight }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative flex items-center justify-between w-full mb-8 md:mb-16 ${
        isRight ? 'md:flex-row-reverse' : 'md:flex-row'
      } ${isVisible ? 'animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out' : 'opacity-0'}`}
    >
      {/* Desktop Spacer */}
      <div className="hidden md:block w-[45%]" />

      {/* Central Node Dot */}
      <div className="absolute left-[18px] md:left-1/2 top-0 md:top-8 -translate-x-1/2 z-20">
        <div className={`p-3 rounded-xl shadow-xl transition-all duration-700 bg-emerald-700 dark:bg-emerald-600 text-white ${
          isVisible ? 'scale-100 rotate-0 shadow-emerald-900/30' : 'scale-0 rotate-180'
        }`}>
          {data.icon}
        </div>
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-[45%] pl-10 md:pl-0 ${isRight ? 'md:text-left' : 'md:text-right'}`}>
        <div className="group relative overflow-hidden p-6 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1">
          
          {/* Subtle Background Icon Decoration */}
          <div className={`absolute -bottom-8 ${isRight ? '-right-8' : '-left-8'} text-slate-100 dark:text-slate-800/30 transition-all duration-1000 group-hover:scale-105 group-hover:text-emerald-500/5 pointer-events-none z-0`}>
            {data.bgIcon}
          </div>

          <div className="relative z-10">
            {/* Year Badge */}
            <div className={`flex flex-col ${isRight ? 'items-start' : 'md:items-end'} gap-3 mb-4`}>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-900 text-white border border-emerald-800 shadow-md">
                <Calendar size={12} /> {data.year}
              </span>
            </div>
            
            {/* Title & Organization */}
            <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-1 group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors">
              {data.title}
            </h3>
            
            <p className="text-[10px] font-bold text-emerald-700/80 dark:text-emerald-400/80 mb-4 flex items-center justify-start md:justify-inherit gap-1.5 uppercase tracking-widest">
              <Sparkles size={14} className="animate-pulse" /> {data.org}
            </p>

            {/* Description */}
            <p className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4 mt-2 italic">
              {data.description}
            </p>

            {/* Action Link */}
            <div className={`mt-4 flex ${isRight ? 'justify-start' : 'md:justify-end'}`}>
               <div className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-500 cursor-pointer group/btn">
                  Details 
                  <ChevronRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;