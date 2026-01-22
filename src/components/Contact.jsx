import React, { useState } from "react";
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  CheckCircle2,
  Contact2
} from 'lucide-react';
import { useToast } from "../context/ToastContext";

const Contact = () => {
  const { showToast } = useToast();
  const [formState, setFormState] = useState('idle');

 const handleSubmit = async (e) => {
  e.preventDefault();
  setFormState("sending");

  const formData = new FormData(e.target);

  try {
    const res = await fetch("https://server.dipakkumarshah.com.np/contact/submit/", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    if (data.status === "success") {
      setFormState("success");
      e.target.reset();
      setTimeout(() => setFormState("idle"), 5000);
    } else {
      setFormState("idle");
      showToast("Something went wrong", "error");
    }
  } catch (error) {
    console.error(error);
    setFormState("idle");
    showToast("Failed to send message", "error");
  }
};


  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-12 lg:p-20">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div id="contact" className="text-center space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-emerald-600 dark:text-emerald-400 font-black text-xs uppercase tracking-[0.4em]">
              Get In Touch
            </h1>
            <div className="h-1 w-12 bg-emerald-600 rounded-full" />
          </div>
          <div className="space-y-1">
            <p className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              Interested in working together?
            </p> 
            <p className="text-4xl md:text-5xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight uppercase">
              Let's Talk.
            </p>
          </div>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information Side */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                <Sparkles size={14} className="animate-pulse" /> Direct Connection
              </div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                Contact Details
              </h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-md">
                Have a question or want to work together? Feel free to send a message. 
                I typically respond within 24 hours to help bring your vision to life.
              </p>
            </div>

            <div className="space-y-4">
              <ContactInfoCard 
                icon={<MapPin size={20} />} 
                label="Location" 
                value="Kathmandu, Nepal" 
              />
              <ContactInfoCard 
                icon={<Mail size={20} />} 
                label="Email Address" 
                value="shahdipak5654@gmail.com" 
              />
              <ContactInfoCard 
                icon={<Phone size={20} />} 
                label="Phone Number" 
                value="+977-9761653893" 
              />
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-300">
            <form 
              onSubmit={handleSubmit}
              className="relative overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-300 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 rounded-[3rem] shadow-2xl shadow-emerald-500/5 space-y-6 transition-colors duration-500"
            >
              {/* Background Contact Icon inside the Form Card */}
              <Contact2 
                className="absolute -bottom-10 -right-10 size-64 text-emerald-800/10 dark:text-emerald-400/5 -rotate-12 pointer-events-none" 
                strokeWidth={1}
              />

              {/* Form Success Overlay */}
              {formState === 'success' && (
                <div className="absolute inset-0 z-50 bg-emerald-600 flex flex-col items-center justify-center text-white p-8 text-center animate-in fade-in zoom-in duration-300">
                  <CheckCircle2 size={64} className="mb-4 animate-bounce" />
                  <h4 className="text-2xl font-black uppercase tracking-tight">Message Sent!</h4>
                  <p className="text-sm font-bold opacity-80 mt-2">I'll get back to you shortly.</p>
                </div>
              )}

              <div className="relative z-10 space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">Full Name</label>
                  <input 
                    type="text"
                    name="full_name" 
                    placeholder="Enter your name"
                    className="w-full bg-white/80 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 py-4 text-sm font-bold focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all dark:text-white" 
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="you@example.com"
                    className="w-full bg-white/80 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 py-4 text-sm font-bold focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all dark:text-white" 
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-600 ml-1">Your Message</label>
                  <textarea 
                    name="message"
                    rows="4" 
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/80 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 py-4 text-sm font-bold focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all dark:text-white resize-none" 
                    required
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit"
                disabled={formState === 'sending'}
                className="relative z-10 group w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-400 text-white font-black uppercase tracking-[0.2em] text-xs py-5 rounded-2xl transition-all shadow-xl shadow-slate-600/20 active:scale-95 flex items-center justify-center gap-3"
              >
                {formState === 'sending' ? (
                  <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </section>

        {/* Footer Divider */}
        <div className="pt-12 animate-in fade-in duration-1000">
          <hr className="border-slate-200 dark:border-slate-800" />
          <div className="flex justify-center -mt-4">
             <div className="px-6 bg-slate-50 dark:bg-slate-950 flex gap-4 text-slate-300 dark:text-slate-700">
                <Contact2 className="size-6" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfoCard = ({ icon, label, value }) => (
  <div className="flex items-center gap-5 p-4 rounded-3xl border border-transparent hover:border-slate-200 dark:hover:border-slate-800 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 group">
    <div className="size-14 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/20 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</p>
      <p className="text-sm font-black text-slate-900 dark:text-white">{value}</p>
    </div>
  </div>
);

export default Contact;