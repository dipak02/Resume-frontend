import React,{useState,useEffect} from "react";
import { 
  ExternalLink, 
  Github, 
  Layout, 
  FileText, 
  School, 
  ShoppingCart, 
  Layers,
  Code2,
  Terminal
} from 'lucide-react';
import axios from 'axios'
import { PROJECT_API } from "../config";

/**
 * Projects Component (Named 'Projects' for environment compatibility)
 * Features:
 * - Image-led cards with tech stack tags
 * - Large subtle background icons matching project types
 * - Staggered slide-up animations
 * - Responsive 4-column grid (lg)
 * - Interactive hover effects with image scaling and elevation
 */
const Projects = () => {
   const [projects, setProjects] = useState([]);
     useEffect(() => {
    axios.get(PROJECT_API.PROJECT)  // match your Django URL
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, []);
  
  // const projectData = [
  //   {
  //     img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
  //     bgIcon: <Layout className="size-48" />,
  //     title: "Blog Website",
  //     detail: "Blog website built with React JS, Tailwind CSS, and Django to share articles and tutorials on web development.",
  //     tags: ['React JS', 'Tailwind', 'Django'],
  //     accent: "purple"
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1456324504439-39775ffcf141?q=80&w=800&auto=format&fit=crop",
  //     bgIcon: <FileText className="size-48" />,
  //     title: "E Notes Library",
  //     detail: "E-Notes library website where users can create, manage, and share their notes seamlessly with full cloud synchronization.",
  //     tags: ['React JS', 'Tailwind', 'Django'],
  //     accent: "indigo"
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1523050337458-568375351822?q=80&w=800&auto=format&fit=crop",
  //     bgIcon: <School className="size-48" />,
  //     title: "University System",
  //     detail: "University Management System to manage student data, courses, and grades efficiently with an administrative dashboard.",
  //     tags: ['React JS', 'Tailwind', 'Django'],
  //     accent: "blue"
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
  //     bgIcon: <ShoppingCart className="size-48" />,
  //     title: "E-Commerce Hub",
  //     detail: "Full-stack E-Commerce website to facilitate online shopping, product management, and secure checkout processes.",
  //     tags: ['React JS', 'Tailwind', 'Django'],
  //     accent: "emerald"
  //   },
  // ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div id="projects" className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-700">
          <div className="flex items-center gap-2">
            <div className="h-1 w-8 bg-emerald-600 rounded-full" />
            <h1 className="text-emerald-600 dark:text-emerald-400 font-black text-xs uppercase tracking-[0.3em]">
              Portfolio
            </h1>
          </div>
          <p className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
            My Recent Projects
          </p> 
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((data, index) => (
            <article 
              key={index}
              style={{ animationDelay: `${index * 150}ms` }}
              className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
            >
              {/* Image Container */}
              <div className="relative h-52 w-full overflow-hidden">
                <div className="absolute inset-0 bg-emerald-600/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  alt={data.title}
                  src={data.image_url}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="p-2 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg text-slate-900 dark:text-white hover:text-emerald-600 transition-colors">
                    <Github size={18} />
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="relative flex-1 p-6 sm:p-8 space-y-4">
                {/* Background Icon Decoration */}
                <div className="absolute -bottom-10 -right-10 text-slate-100 dark:text-slate-800 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:text-emerald-500/5 pointer-events-none">
                  {data.bgIcon}
                </div>

                <div className="relative z-10 space-y-4">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(data.tech_tags) && data.tech_tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="rounded-full bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    {data.title}
                  </h3>

                  <p className="text-xs/relaxed text-slate-500 dark:text-slate-400 font-medium line-clamp-3">
                    {data.description}
                  </p>

                  <a 
                    href={data.external_link} target="_blank" rel="noopener noreferrer"
                    className="group/link mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400"
                  >
                    Explore Project
                    <ExternalLink size={14} className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Divider */}
        <div className="pt-12 animate-in fade-in duration-1000">
          <hr className="border-slate-200 dark:border-slate-800" />
          <div className="flex justify-center -mt-4">
             <div className="px-6 bg-slate-50 dark:bg-slate-950 flex gap-4 text-slate-300 dark:text-slate-700">
                <Code2 className="size-6" />
                
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;