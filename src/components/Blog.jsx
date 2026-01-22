import React from "react";
import { 
  Calendar, 
  ArrowUpRight, 
  Clock, 
  BookOpen, 
  Sparkles,
  ChevronRight,
  BookOpenText
} from 'lucide-react';
import { Link } from "react-router-dom";

/**
 * Blog Component (Named 'Blog' for environment compatibility)
 * Features:
 * - High-fidelity overlay cards with gradient masks
 * - Staggered entrance animations for grid items
 * - Responsive 4-column grid layout
 * - Interactive hover effects with image scaling
 * - Dark mode optimized design tokens
 */
const Blog = () => {
  const blogData = [
    {
      img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
      date: "24th Aug 2025",
      readTime: "8 min read",
      title: "Step-by-Step Guide to Building an E-commerce Website (Django + React)",
      details: "E-commerce has become the backbone of modern businesses. As an IT Engineer, building a full-stack e-commerce website not only sharpens your skills but also makes your portfolio stronger.",
    },
    {
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
      date: "25th Aug 2025",
      readTime: "5 min read",
      title: "Roadmap to Become a Full-Stack Web Developer in 2025",
      details: "The demand for full-stack developers is skyrocketing. In 2025, companies expect engineers who can handle both backend and frontend. Here’s a clear roadmap for beginners.",
    },
    {
      img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
      date: "25th Aug 2025",
      readTime: "6 min read",
      title: "Fixing Common Errors in Django for Beginners for Error Free Code",
      details: "Django is powerful, but beginners often face errors that can be frustrating. Here are some common Django errors and solutions to keep your code clean and efficient.",
    },
    {
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
      date: "25th Aug 2025",
      readTime: "4 min read",
      title: "Mistakes Beginners Make in Web Development (and How to Avoid Them)",
      details: "Every IT Engineer makes mistakes when starting web development. Learning from them early can save immense time and frustration throughout your career journey.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-12 lg:p-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div id="blog" className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-700">
          <div className="flex items-center gap-2">
            <div className="h-1 w-8 bg-emerald-600 rounded-full" />
            <h1 className="text-emerald-600 dark:text-emerald-400 font-black text-xs uppercase tracking-[0.4em]">
              Journal
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <p className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              My Blog Posts
            </p> 
            <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 hover:gap-4 transition-all group">
              View All Insights <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogData.map((data, index) => (
            <article 
              key={index}
              style={{ animationDelay: `${index * 150}ms` }}
              className="group relative h-[450px] w-full overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
            >
              {/* Background Image with Filter */}
              <img
                alt={data.title}
                src={data.img} 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-40"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent transition-opacity duration-500" />

              {/* Floating Action Badge */}
              <div className="absolute top-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Content Container */}
              <div className="relative h-full flex flex-col justify-end p-8 space-y-4">
                <div className="space-y-3">
                  {/* Meta Tags */}
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-emerald-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} /> {data.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} /> {data.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <Link to="/blog-page" className="block group/title">
                    <h3 className="text-xl font-black text-white leading-tight transition-colors group-hover/title:text-emerald-400">
                      {data.title}
                    </h3>
                  </Link>

                  {/* Details (Expands slightly on hover) */}
                  <p className="text-sm text-slate-300 font-medium line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                    {data.details}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="pt-2">
                  <div className="h-1 w-12 bg-emerald-600 rounded-full group-hover:w-full transition-all duration-700" />
                  <Link 
                    to="/blog-page"
                    className="mt-4 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  >
                    Read Full Article <Sparkles size={12} className="text-emerald-400" />
                  </Link>
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
                <BookOpenText className="size-6" />
               
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;