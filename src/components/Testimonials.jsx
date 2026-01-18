import React, { useState, useEffect, useCallback } from "react";
import { 
  Quote, 
  Star, 
  Calendar, 
  User, 
  MessageSquare,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

/**
 * Testimonials Component (Named 'App' for environment compatibility)
 * Features:
 * - Custom Responsive Slider (1 slide on mobile, 2 slides on desktop)
 * - Shallows one by one navigation
 * - High-fidelity glassmorphism cards
 * - Staggered entrance animations
 */
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check for slidesPerView
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1180&q=80",
      comment: "Dipak's ability to translate complex requirements into a clean, functional UI is unmatched. The Django backend integration was seamless.",
      date: "31/06/2025",
      topic: "Full-Stack Development Review",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1180&q=80",
      comment: "The E-Notes library he built for us has transformed how our team manages documentation. Highly recommend for React projects.",
      date: "15/07/2025",
      topic: "Cloud Application Success",
    },
    {
      id: 3,
      name: "Alice Johnson",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1180&q=80",
      comment: "Incredible attention to detail in graphic design. Our branding now feels modern and unforgettable thanks to his creative vision.",
      date: "20/08/2025",
      topic: "Branding & Identity Project",
    },
    {
      id: 4,
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1180&q=80",
      comment: "The University Management system is robust and handles thousands of student records without a hitch. Professional work!",
      date: "05/09/2025",
      topic: "System Architecture Feedback",
    },
  ];

  const slidesPerView = isMobile ? 1 : 2;
  // We limit the active index so we don't show empty space at the end on desktop
  const maxIndex = testimonialsData.length - slidesPerView;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-12 lg:p-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div id="testimonials" className="text-center space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-indigo-600 dark:text-indigo-400 font-black text-xs uppercase tracking-[0.4em]">
              Testimonials
            </h1>
            <div className="h-1 w-12 bg-indigo-600 rounded-full" />
          </div>
          <div className="space-y-1">
            <p className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              What my subscribers say!
            </p> 
            <div className="flex items-center justify-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold">
              <Sparkles size={18} className="animate-pulse" />
              <span>Real stories from real partners</span>
            </div>
          </div>
        </div>

        {/* Custom Slider Section */}
        <section 
          className="relative px-4 sm:px-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden py-10">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * (100 / slidesPerView)}%)` }}
            >
              {testimonialsData.map((data) => (
                <div key={data.id} className={`shrink-0 px-4 ${isMobile ? 'w-full' : 'w-1/2'}`}>
                  <div className="h-full flex flex-col gap-6 items-center rounded-[3rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 group">
                    
                    {/* Header: Profile & Rating */}
                    <div className="w-full flex justify-between items-start">
                      <div className="relative shrink-0">
                        <div className="absolute -inset-1 bg-indigo-500 rounded-2xl blur opacity-10 group-hover:opacity-30 transition-opacity" />
                        <img
                          alt={data.name}
                          src={data.image}
                          className="relative size-20 rounded-2xl object-cover border-2 border-white dark:border-slate-800 shadow-lg"
                        />
                      </div>
                      <div className="text-indigo-600/20 dark:text-indigo-400/10 transition-colors">
                        <Quote size={40} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4 w-full">
                      <div className="space-y-1">
                        <div className="flex gap-1 text-amber-400 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" />
                          ))}
                        </div>
                        <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight line-clamp-1">
                          {data.topic}
                        </h3>
                        <p className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                          <User size={12} /> {data.name}
                        </p>
                      </div>

                      <p className="text-sm/relaxed text-slate-500 dark:text-slate-400 font-medium italic line-clamp-3">
                        "{data.comment}"
                      </p>

                      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <Calendar size={12} />
                        {data.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
            <button 
              onClick={prevSlide}
              className="pointer-events-auto size-12 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="pointer-events-auto size-12 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: testimonialsData.length - (slidesPerView - 1) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-300 rounded-full h-2 ${
                  activeIndex === i 
                    ? 'w-10 bg-indigo-600' 
                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Footer Divider */}
        <div className="pt-12 animate-in fade-in duration-1000">
          <hr className="border-slate-200 dark:border-slate-800" />
          <div className="flex justify-center -mt-4">
             <div className="px-6 bg-slate-50 dark:bg-slate-950 flex gap-4 text-slate-300 dark:text-slate-700">
                <MessageSquare className="size-6" />
                <Star className="size-6" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;