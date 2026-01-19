import React from "react";
import { 
  Code2, 
  Palette, 
  Search, 
  Cpu, 
  ArrowUpRight, 
  Layers 
} from 'lucide-react';

/**
 * Services Component (Named 'Services' for environment compatibility)
 * Features:
 * - Large subtle background icons for visual depth
 * - Staggered entrance animations
 * - Responsive 3-column grid
 * - Interactive hover states with shadow elevation
 */
const Services = () => {
  const servicesData = [
    {
      icon: <Code2 className="size-6" />,
      bgIcon: <Code2 className="size-48" />,
      title: "Web Development",
      detail: "I specialize in designing and developing well-structured, responsive websites tailored to meet the unique needs of diverse sectors.",
      accent: "blue"
    },
    {
      icon: <Palette className="size-6" />,
      bgIcon: <Palette className="size-48" />,
      title: "Graphics Design",
      detail: "I craft bold, modern designs that connect and inspire, turning imagination into pixel-perfect reality and making brands truly unforgettable.",
      accent: "purple"
    },
    {
      icon: <Search className="size-6" />,
      bgIcon: <Search className="size-48" />,
      title: "SEO Optimization",
      detail: "Boosting your online presence and helping businesses rank higher with expert, proven SEO optimization services.",
      accent: "emerald"
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 px-6 ">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div id="services" className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-700">
          <div className="flex items-center gap-2">
            <div className="h-1 w-8 bg-emerald-600 rounded-full" />
            <h1 className="text-emerald-600 dark:text-emerald-400 font-black text-xs uppercase tracking-[0.3em]">
              My Expertise
            </h1>
          </div>
          <p className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
            Services That I Provide
          </p> 
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((data, index) => (
            <article 
              key={index}
              style={{ animationDelay: `${index * 150}ms` }}
              className="group relative rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 overflow-hidden animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
            >
              {/* Subtle Background Icon */}
              <div className="absolute -top-12 -right-12 text-slate-100 dark:text-slate-800 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 group-hover:text-indigo-500/5 pointer-events-none">
                {data.bgIcon}
              </div>

              <div className="relative z-10 space-y-6">
                {/* Icon Badge */}
                <div className="inline-flex rounded-2xl bg-emerald-600 p-4 text-white shadow-xl shadow-indigo-600/20 group-hover:scale-110 transition-transform duration-500">
                  {data.icon}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                      {data.title}
                    </h3>
                    <ArrowUpRight className="size-5 text-slate-300 dark:text-slate-700 group-hover:text-emerald-500 transition-colors" />
                  </div>

                  <p className="text-sm/relaxed text-slate-500 dark:text-slate-400 font-medium">
                    {data.detail}
                  </p>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="pt-4">
                  <div className="h-1 w-12 bg-slate-100 dark:bg-slate-800 rounded-full group-hover:w-full group-hover:bg-emerald-600 transition-all duration-700" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Divider */}
        <div className=" animate-in fade-in duration-1000">
          <hr className="border-slate-200 dark:border-slate-800" />
          <div className="flex justify-center -mt-3">
             <div className="px-4 bg-slate-50 dark:bg-slate-950">
                <Layers className="size-6 text-slate-300 dark:text-slate-700" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;