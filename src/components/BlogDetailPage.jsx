import React, { useState, useEffect } from 'react';
import { 
  motion, 
  useScroll, 
  useSpring, 
  AnimatePresence 
} from 'framer-motion';
import { 
  Clock, 
  User, 
  Calendar, 
  MessageCircle, 
  Send, 
  ArrowRight, 
  Share2, 
  Heart, 
  Bookmark,
  ChevronLeft,
  Search,
  Hash,
  Sparkles
} from 'lucide-react';

// Mock Data
const BLOG_POST = {
  title: "The Evolution of Full-Stack Architecture in 2026",
  category: "Architecture",
  author: "Dipak Shah",
  date: "Jan 22, 2026",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  content: [
    {
      type: 'paragraph',
      text: "As we step into 2026, the boundaries between frontend and backend continue to blur. The rise of edge computing and distributed systems has fundamentally changed how we think about data residency and latency. It's no longer just about building a website; it's about architecting a global experience."
    },
    {
      type: 'heading',
      text: "The Rise of Autonomous Backend Systems"
    },
    {
      type: 'paragraph',
      text: "Modern frameworks like Django are evolving to handle autonomous background processing and AI-integrated workflows right out of the box. We are seeing a shift where the backend isn't just a database gatekeeper, but an intelligent layer that predicts user needs before they even click."
    },
    {
      type: 'quote',
      text: "Complexity is the enemy of reliability. The best architectures of 2026 are those that master abstraction without sacrificing transparency."
    },
    {
      type: 'paragraph',
      text: "Using tools like React for the interface allows for high-performance rendering, while the underlying logic remains robust and secure. This synergy is what defines the 'Wonderful Web' era we are currently living in."
    }
  ],
  tags: ["React", "Django", "WebDev", "Architecture"]
};

const LATEST_POSTS = [
  { id: 1, title: "Mastering Tailwind v4: Advanced Utilities", date: "Jan 20, 2026", cat: "CSS" },
  { id: 2, title: "Cybersecurity Essentials for Solo Devs", date: "Jan 18, 2026", cat: "Security" },
  { id: 3, title: "Building accessible UI with Lucide Icons", date: "Jan 15, 2026", cat: "UI/UX" }
];

const INITIAL_COMMENTS = [
  { id: 1, user: "Saurav K.", text: "This is a great breakdown! I've been struggling with edge logic lately.", time: "2 hours ago" },
  { id: 2, user: "Elena R.", text: "Love the point about autonomous systems. Can we see more code examples next time?", time: "5 hours ago" }
];

export default function App() {
  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const [newComment, setNewComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Reading Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    const commentObj = {
      id: Date.now(),
      user: "Guest User",
      text: newComment,
      time: "Just now"
    };
    
    setComments([commentObj, ...comments]);
    setNewComment("");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Area */}
          <div className="lg:col-span-8">
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Post Header */}
              <header className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                  <Hash size={12}/> {BLOG_POST.category}
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  {BLOG_POST.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400 border-y border-slate-100 dark:border-slate-800 py-6">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
                      DS
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white leading-none">{BLOG_POST.author}</p>
                      <p className="text-xs mt-1">Lead Developer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5"><Calendar size={14}/> {BLOG_POST.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14}/> {BLOG_POST.readTime}</span>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative h-[300px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-none"
              >
                <img 
                  src={BLOG_POST.image} 
                  alt="Feature" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>

              {/* Post Content */}
              <div className="prose prose-lg dark:prose-invert prose-emerald max-w-none space-y-6">
                {BLOG_POST.content.map((block, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {block.type === 'paragraph' && (
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {block.text}
                      </p>
                    )}
                    {block.type === 'heading' && (
                      <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mt-12 mb-6 uppercase tracking-tight">
                        {block.text}
                      </h2>
                    )}
                    {block.type === 'quote' && (
                      <div className="my-10 p-8 md:p-12 bg-emerald-50 dark:bg-emerald-950/30 rounded-[2.5rem] border-l-8 border-emerald-500 relative overflow-hidden group">
                        <MessageCircle className="absolute -right-4 -bottom-4 size-32 text-emerald-200/20 dark:text-emerald-400/5 group-hover:scale-110 transition-transform duration-700" />
                        <p className="relative z-10 text-2xl md:text-3xl font-bold italic text-emerald-800 dark:text-emerald-100 leading-tight">
                          "{block.text}"
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Tags and Social Interactivity */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-10 border-t border-slate-200 dark:border-slate-800 mt-12">
                <div className="flex flex-wrap gap-2">
                  {BLOG_POST.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setIsLiked(!isLiked)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl transition-all border ${isLiked ? 'bg-rose-500 border-rose-500 text-white' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-rose-500 hover:text-rose-500'}`}
                  >
                    <Heart size={18} className={isLiked ? "fill-current" : ""} />
                    <span className="text-xs font-bold">2.4k</span>
                  </button>
                  <button 
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`p-2.5 rounded-2xl transition-all border ${isBookmarked ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-emerald-600 hover:text-emerald-600'}`}
                  >
                    <Bookmark size={18} className={isBookmarked ? "fill-current" : ""} />
                  </button>
                  <button className="p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-slate-900 dark:hover:border-white transition-all">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>

              {/* Comments Section */}
              <section className="mt-20 space-y-8 pb-20">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-3">
                    <MessageCircle className="text-emerald-500" /> Discussion ({comments.length})
                  </h3>
                </div>

                {/* Comment Input */}
                <form onSubmit={handleCommentSubmit} className="relative bg-white dark:bg-slate-900 p-6 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
                  
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full mb-4 bg-slate-50 dark:bg-slate-800/50 border border-transparent focus:border-emerald-500/30 rounded-2xl p-4 text-sm dark:text-white outline-none transition-all"
                    required
                  />
                  <textarea 
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Leave a thoughtful comment..."
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-transparent focus:border-emerald-500/30 rounded-2xl p-6 text-sm dark:text-white outline-none min-h-[120px] transition-all"
                  />
                  <div className="flex justify-end mt-4">
                    <button 
                      type="submit"
                      disabled={!newComment.trim()}
                      className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-emerald-600/30"
                    >
                      Post Comment <Send size={14}/>
                    </button>
                  </div>
                </form>

                {/* Comment List */}
                <div className="space-y-6">
                  <AnimatePresence>
                    {comments.map((comment) => (
                      <motion.div 
                        key={comment.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="group bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 p-6 rounded-3xl transition-all hover:shadow-lg dark:hover:bg-slate-900"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-500">
                              {comment.user.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-black text-slate-900 dark:text-white leading-none">{comment.user}</p>
                              <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-tighter">{comment.time}</p>
                            </div>
                          </div>
                          <button className="text-slate-400 opacity-0 group-hover:opacity-100 hover:text-rose-500 transition-all">
                            <Heart size={14} />
                          </button>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                          {comment.text}
                        </p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </section>
            </motion.article>
          </div>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 space-y-10">
            {/* Search Bar */}
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Search articles..."
                className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all dark:text-white"
              />
              <Search className="absolute right-5 top-1/2 -translate-y-1/2 size-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
            </div>

            {/* Author Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
               <User className="absolute -right-6 -bottom-6 size-40 text-white/5 -rotate-12 group-hover:scale-110 transition-transform duration-700" />
               <h4 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-400 mb-6">Article Author</h4>
               <div className="flex items-center gap-4 mb-6">
                 <div className="size-16 rounded-2xl bg-emerald-600 flex items-center justify-center text-2xl font-black">DS</div>
                 <div>
                   <p className="text-xl font-black uppercase tracking-tight">Dipak Shah</p>
                   <p className="text-xs text-slate-400 font-bold">@dipak_shah_dev</p>
                 </div>
               </div>
               <p className="text-sm text-slate-300 leading-relaxed font-medium mb-8">
                 Crafting robust digital experiences with Django and React. Passionate about UI/UX and system architecture.
               </p>
               <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-emerald-900/50">
                 Follow Author
               </button>
            </div>

            {/* Latest Posts */}
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 rounded-[2.5rem]">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 mb-8 flex items-center gap-2">
                <Sparkles size={14} className="text-emerald-500" /> Latest Insights
              </h4>
              <div className="space-y-8">
                {LATEST_POSTS.map((post) => (
                  <div key={post.id} className="group cursor-pointer">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">{post.cat}</span>
                      <div className="size-1 bg-slate-200 dark:bg-slate-800 rounded-full" />
                      <span className="text-[10px] text-slate-400 font-bold uppercase">{post.date}</span>
                    </div>
                    <h5 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors leading-tight">
                      {post.title}
                    </h5>
                    <div className="h-0.5 w-0 group-hover:w-12 bg-emerald-500 mt-4 transition-all duration-300" />
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-4 border border-slate-200 dark:border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400 hover:bg-slate-950 hover:text-white transition-all flex items-center justify-center gap-2">
                Explore Archives <ArrowRight size={14}/>
              </button>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-emerald-600 p-10 rounded-[2.5rem] text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 pointer-events-none opacity-20 group-hover:scale-125 transition-transform duration-1000">
                <Send size={80} />
              </div>
              <h4 className="text-2xl font-black uppercase tracking-tight mb-2">Join the Loop</h4>
              <p className="text-emerald-100 text-sm font-medium mb-8 leading-relaxed">
                The best development tips, delivered to your inbox once a week.
              </p>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="name@email.com"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-sm placeholder:text-emerald-100 outline-none focus:bg-white/20 transition-all"
                />
                <button className="w-full py-4 bg-white text-emerald-600 font-black uppercase tracking-[0.1em] text-xs rounded-2xl hover:bg-emerald-50 transition-colors shadow-xl shadow-emerald-900/20">
                  Subscribe Now
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer Divider */}
      
    </div>
  );
}