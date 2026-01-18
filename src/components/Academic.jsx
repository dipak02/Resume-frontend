import React from "react";
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Sparkles,
  User,
  Terminal,
  Code2,
  Cpu
} from 'lucide-react';

/**
 * Education & About Component (Named 'Academic' for environment compatibility)
 * Features:
 * - About Me section with interactive code snippets
 * - Responsive 3-column grid for academic milestones
 * - Dark Green (Emerald 900) primary color scheme
 * - Staggered entrance animations
 * - Professional developer aesthetic
 */
const Academic = () => {
  const educationData = [
    {
      year: "2022 – 2026",
      title: "Bachelor of IT",
      org: "Pokhara University",
      gpa: "CGPA: 3.6/4.0",
      icon: <GraduationCap size={20} />,
      bgIcon: <GraduationCap size={140} />
    },
    {
      year: "2020 – 2022",
      title: "Higher Secondary",
      org: "Viswa Niketan School",
      gpa: "GPA: 3.28",
      icon: <BookOpen size={20} />,
      bgIcon: <BookOpen size={140} />
    },
    {
      year: "2020",
      title: "Secondary (SEE)",
      org: "Viswa Niketan School",
      gpa: "GPA: 3.95",
      icon: <Award size={20} />,
      bgIcon: <Award size={140} />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden p-4 md:p-8">
      <main className="max-w-7xl w-full mx-auto py-12 space-y-24">
        
        {/* ABOUT ME SECTION */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-1 w-8 bg-emerald-800 rounded-full" />
                <h2 className="text-emerald-800 dark:text-emerald-500 font-black text-[10px] uppercase tracking-[0.4em]">
                  Who I Am
                </h2>
              </div>
              <p className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                About Me
              </p>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
              I am a <span className="text-emerald-800 dark:text-emerald-400 font-bold">Full Stack Developer</span> and IT Engineer candidate based in Nepal. I bridge the gap between complex backend logic and intuitive frontend experiences.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <Cpu className="text-emerald-700 mb-2" size={24} />
                <p className="text-[10px] font-black uppercase text-slate-400">Main Stack</p>
                <p className="text-sm font-bold dark:text-white">Django & React</p>
              </div>
              <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <Code2 className="text-emerald-700 mb-2" size={24} />
                <p className="text-[10px] font-black uppercase text-slate-400">Focus</p>
                <p className="text-sm font-bold dark:text-white">Scalable Systems</p>
              </div>
            </div>
          </div>

          {/* CODE SNIPPET TERMINAL */}
          <div className="animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-800 group hover:border-emerald-800/50 transition-colors">
              <div className="bg-slate-800/50 px-6 py-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="size-3 rounded-full bg-red-500/80" />
                  <div className="size-3 rounded-full bg-amber-500/80" />
                  <div className="size-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-mono text-[10px] uppercase tracking-widest">
                  <Terminal size={14} /> developer.py
                </div>
              </div>
              <div className="p-8 font-mono text-xs md:text-sm leading-relaxed space-y-2">
                <p><span className="text-emerald-500">class</span> <span className="text-white">Developer</span>:</p>
                <p className="pl-4"><span className="text-emerald-500">def</span> <span className="text-blue-400">__init__</span>(self):</p>
                <p className="pl-8 text-slate-400">self.name = <span className="text-amber-300">"Dipak Shah"</span></p>
                <p className="pl-8 text-slate-400">self.role = <span className="text-amber-300">"Full Stack IT Engineer"</span></p>
                <p className="pl-8 text-slate-400">self.location = <span className="text-amber-300">"Kathmandu, NP"</span></p>
                <p className="pl-4 mt-4"><span className="text-emerald-500">def</span> <span className="text-blue-400">get_vibe</span>(self):</p>
                <p className="pl-8 text-slate-400"><span className="text-emerald-500">return</span> [<span className="text-amber-300">"Clean Code"</span>, <span className="text-amber-300">"Modern UI"</span>]</p>
                <div className="pt-4 border-t border-slate-800 mt-4">
                  <p className="text-emerald-500/50 italic"># Currently building the future...</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="space-y-12">
          <div id="education" className="text-center space-y-3 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="flex flex-col items-center gap-1.5">
              <h1 className="text-emerald-800 dark:text-emerald-500 font-black text-[10px] uppercase tracking-[0.4em]">
                Academic Background
              </h1>
              <div className="h-1 w-10 bg-emerald-800 dark:bg-emerald-600 rounded-full" />
            </div>
            <p className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              My Education
            </p> 
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationData.map((edu, index) => (
              <article 
                key={index}
                className="group relative overflow-hidden p-6 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-6 fill-mode-both"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -bottom-6 -right-6 text-slate-100 dark:text-slate-800/30 transition-all duration-1000 group-hover:scale-110 group-hover:text-emerald-500/5 pointer-events-none z-0">
                  {edu.bgIcon}
                </div>
                
                <div className="relative z-10 space-y-5">
                  <div className="flex justify-between items-start">
                    <div className="p-3 rounded-2xl bg-emerald-700 text-white shadow-lg shadow-emerald-900/20 group-hover:scale-110 transition-transform duration-500">
                      {edu.icon}
                    </div>
                    <span className="inline-flex px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-500 text-[10px] font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-800/50">
                      {edu.year}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-500 transition-colors">
                      {edu.title}
                    </h3>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                      {edu.org}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-800">
                      <Sparkles size={12} className="animate-pulse" /> {edu.gpa}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="pt-8 opacity-10 flex justify-center">
          <div className="h-px w-24 bg-emerald-800" />
        </div>
      </main>
    </div>
  );
};

export default Academic;