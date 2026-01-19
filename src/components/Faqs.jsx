import React, { useState } from "react";
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  Send, 
  MessageSquare,
  Sparkles,
  ChevronDown,
  MailQuestion
} from 'lucide-react';

/**
 * FAQ Component (Named 'App' for environment compatibility)
 * Features:
 * - Interactive Accordion with smooth height transitions
 * - Staggered entrance animations for FAQ items
 * - Quick-enquiry form for direct questions
 * - Responsive 2-column layout (Desktop) / 1-column (Mobile)
 * - Dark mode optimized design tokens
 * - Primary Color: Dark Green (#064e3b / emerald-900 / green-900)
 */
const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What services do you provide?",
      answer: "We provide full-stack web development services using Django (backend) and React (frontend), along with professional UI/UX design and reliable deployment support for modern digital products."
    },
    {
      question: "How can I contact you?",
      answer: "You can reach us via our contact page, or email directly at shahdipak5654@gmail.com. We typically respond within 24 hours."
    },
    {
      question: "Do you offer project customization?",
      answer: "Yes, we tailor every project based on client requirements. Whether it’s high-traffic e-commerce, a complex blog engine, or a custom web app, we build it to scale."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Absolutely! We provide maintenance, regular updates, and critical bug fixes after project delivery to ensure your product stays healthy and secure."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-12 lg:p-20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div id="faqs" className="text-center space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-emerald-800 dark:text-emerald-500 font-black text-xs uppercase tracking-[0.4em]">
              Assistance
            </h1>
            <div className="h-1 w-12 bg-emerald-800 dark:bg-emerald-600 rounded-full" />
          </div>
          <p className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
            Frequently Asked Questions
          </p> 
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* FAQ Accordion Side */}
          <div className="space-y-4 animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className={`overflow-hidden rounded-[2rem] border transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-white dark:bg-slate-900 border-emerald-800 dark:border-emerald-600 shadow-xl shadow-emerald-900/10' 
                    : 'bg-white/50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800'
                }`}
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 sm:p-8 text-left group transition-colors"
                >
                  <span className={`text-sm sm:text-base font-black uppercase tracking-tight ${
                    openIndex === index ? 'text-emerald-800 dark:text-emerald-500' : 'text-slate-700 dark:text-slate-300'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 ml-4 p-2 rounded-xl transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-emerald-800 dark:bg-emerald-600 text-white rotate-180' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                  }`}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 sm:p-8 pt-0 text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-800/50 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enquiry Form Side */}
          <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-slate-900 rounded-[3rem] p-8 sm:p-12 shadow-2xl shadow-emerald-950/10 dark:shadow-emerald-950/30 relative overflow-hidden group transition-colors duration-500">
              {/* Decorative background element */}
              <div className="absolute -bottom-10 -right-10 text-emerald-900 dark:text-emerald-500 opacity-5 dark:opacity-10 group-hover:scale-110 transition-transform duration-700">
                <HelpCircle size={240} />
              </div>

              <div className="relative z-10 space-y-8">
                <div className="space-y-4">
                  <div className="size-14 rounded-2xl bg-emerald-200 dark:bg-emerald-900/50 backdrop-blur-md flex items-center justify-center">
                    <MailQuestion size={28} className="text-emerald-900 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight leading-tight text-emerald-950 dark:text-white transition-colors">
                    Have a specific question?
                  </h3>
                  <p className="text-emerald-800 dark:text-emerald-200 font-medium transition-colors">
                    If you have any enquiry about a project or collaboration, feel free to ask. I'm here to help you navigate your digital journey.
                  </p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <textarea 
                      rows="3" 
                      placeholder="Write your question here..."
                      className="w-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-emerald-200 dark:border-slate-700 rounded-2xl px-6 py-4 text-sm font-bold placeholder:text-emerald-700 dark:placeholder:text-slate-400 text-emerald-950 dark:text-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 dark:focus:border-emerald-400 outline-none transition-all resize-none" 
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-emerald-600 dark:bg-emerald-600 hover:bg-emerald-700 dark:hover:bg-emerald-500 text-white dark:text-white font-black uppercase tracking-[0.2em] text-xs py-5 rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-emerald-600/20"
                  >
                    Ask a Question
                    <Send size={16} />
                  </button>
                </form>

                <div className="flex items-center gap-2 pt-4 text-xs font-bold text-emerald-700 dark:text-emerald-300 transition-colors">
                  <Sparkles size={14} className="animate-pulse" />
                  <span>Personalized responses within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="pt-12 animate-in fade-in duration-1000">
          <hr className="border-slate-200 dark:border-slate-800" />
          <div className="flex justify-center -mt-4">
             <div className="px-6 bg-slate-50 dark:bg-slate-950 flex gap-4 text-slate-300 dark:text-slate-700">
                <MessageSquare className="size-6" />
                <HelpCircle className="size-6" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;