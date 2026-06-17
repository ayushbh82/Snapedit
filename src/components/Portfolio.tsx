import { useState } from 'react';
import { PORTFOLIO_LIST } from '../data';
import { PortfolioItem } from '../types';
import { Eye, TrendingUp, Sparkles, X, ChevronRight, Play, MessageSquare } from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Showcase' },
    { id: 'gaming', name: 'Gaming' },
    { id: 'tech', name: 'Tech Reviews' },
    { id: 'business', name: 'Business' },
    { id: 'educational', name: 'Educational' },
    { id: 'podcast', name: 'Podcast' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? PORTFOLIO_LIST
    : PORTFOLIO_LIST.filter(item => item.niche === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#0A0A0A] relative overflow-hidden text-[#F5F5F5]">
      {/* Dynamic graphic lighting glow */}
      <div className="absolute top-[20%] right-[-5%] w-[350px] h-[350px] bg-brand-orange/[0.02] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[350px] h-[350px] bg-amber-500/[0.01]/[0.01] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-semibold text-brand-orange uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Premium Gallery
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            High-Converting <span className="text-brand-orange">Portfolio</span>
          </h2>
          <p className="text-white/50 text-xs sm:text-sm font-light animate-pulse">
            Explore our curated selection of 12 mastercrafted video assets. Click on any thumbnail design card to view production details and performance stats.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-350 outline-none cursor-pointer border ${
                selectedCategory === cat.id
                  ? 'bg-[#FF4E00] border-transparent text-white shadow-lg shadow-[#FF4E00]/15'
                  : 'bg-white/5 hover:bg-[#141414] border-white/5 text-white/60 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid Display for 12 Items - styled like high-end bento items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative bg-[#141414] border border-white/5 rounded-3xl overflow-hidden shadow-xl hover:border-white/10 cursor-pointer transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full bg-[#0A0A0A] overflow-hidden border-b border-white/5 flex items-center justify-center">
                
                {item.image ? (
                  // REAL IMAGE
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  // PROCEDURAL GRADIENT MOCKUP CARD
                  <div className={`w-full h-full bg-gradient-to-b ${item.gradientFrom || 'from-[#111111]'} ${item.gradientTo || 'to-[#000]'} flex flex-col justify-end p-4 relative`}>
                    <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent mix-blend-overlay pointer-events-none" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,rgba(0,0,0,0.85))] z-1" />
                    
                    <div className="absolute top-4 left-4 z-2 bg-black/60 p-2 rounded-xl border border-white/10 flex items-center justify-center">
                      <Play className="w-4 h-4 text-brand-orange fill-brand-orange/20" />
                    </div>

                    <div className="relative z-2 space-y-1.5 mt-auto">
                      <span className="text-[9px] font-black tracking-widest text-[#FF4E00] uppercase bg-[#FF4E00]/10 border border-[#FF4E00]/20 px-2 py-0.5 rounded">
                        {item.niche.toUpperCase()}
                      </span>
                      <h4 className="text-sm font-black tracking-tight text-white drop-shadow-md leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                )}

                {/* Glass Hover Trigger Overlay */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-3">
                  <span className="inline-flex items-center gap-1 px-4 py-2 bg-white text-black font-extrabold text-[10px] uppercase tracking-wide rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-350">
                    Inspecting Details
                    <ChevronRight className="w-3.5 h-3.5 text-brand-orange" />
                  </span>
                </div>

                {/* Realistic YouTube Badges */}
                <div className="absolute top-3 right-3 z-20 flex flex-col gap-1.5 pointer-events-none">
                  {/* High CTR Badge */}
                  <div className="inline-flex items-center gap-1 bg-green-500 text-black px-2 py-0.5 text-[10px] font-black rounded shadow-lg font-mono">
                    <TrendingUp className="w-3 h-3 shrink-0" />
                    {item.ctr} CTR
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 z-20 pointer-events-none">
                  {/* Total Views Badge */}
                  <div className="inline-flex items-center gap-1 bg-black/80 text-white px-2 py-0.5 text-[10px] font-bold rounded shadow font-mono">
                    <Eye className="w-3 h-3 text-white/60 shrink-0" />
                    {item.views} Views
                  </div>
                </div>

              </div>

              {/* Text Information segment */}
              <div className="p-6 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest font-mono">
                    {item.niche} • {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-white/40">{item.styleTag}</span>
                </div>
                <h3 className="font-extrabold text-sm sm:text-base text-white group-hover:text-brand-orange transition-colors duration-300 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-white/50 font-light line-clamp-2">
                  {item.description || 'Professional design leveraging dynamic foreground depth, specialized color grading, and high impact layout tags.'}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* LIGHTBOX POPUP MODAL SCREEN */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-hidden animate-fade-in">
            {/* Modal Glass Box - Styled as Bento box */}
            <div className="relative bg-[#111111] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:grid md:grid-cols-12">
              
              {/* Close button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-40 p-2.5 rounded-full bg-black/60 border border-white/10 text-white hover:bg-[#FF4E00] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Visual Artwork (7cols) */}
              <div className="md:col-span-7 bg-[#0A0A0A] relative aspect-video md:aspect-auto md:h-full flex items-center justify-center p-4 min-h-[220px] border-b md:border-b-0 md:border-r border-white/5">
                {activeItem.image ? (
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="w-full h-auto max-h-[50vh] object-contain rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className={`w-full aspect-video bg-gradient-to-b ${activeItem.gradientFrom || 'from-[#141414]'} ${activeItem.gradientTo || 'to-black'} flex flex-col justify-end p-6 rounded-xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent pointer-events-none" />
                    <Play className="absolute top-6 left-6 w-8 h-8 text-brand-orange fill-brand-orange/20" />
                    <div className="absolute top-6 right-6 font-mono text-[10px] bg-brand-[#FF4E00]/10 text-brand-orange px-3 py-1 rounded-full border border-brand-orange/25 uppercase font-black">
                      {activeItem.niche}
                    </div>
                    <h3 className="relative text-2xl font-black text-white leading-tight drop-shadow-md pb-4">
                      {activeItem.title}
                    </h3>
                  </div>
                )}
              </div>

              {/* Right Column: Metadata details (5cols) */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-black text-brand-orange uppercase tracking-widest font-mono">
                      PROJECT CASE REPORT
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black leading-snug text-white mt-1">
                      {activeItem.title}
                    </h3>
                  </div>

                  {/* Dynamic Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="bg-[#0A0A0A] border border-white/5 p-3.5 rounded-2xl text-center">
                      <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Secured CTR</p>
                      <p className="text-xl font-black text-green-500 mt-1 flex items-center justify-center gap-1 font-mono">
                        <TrendingUp className="w-5 h-5 shrink-0" />
                        {activeItem.ctr}
                      </p>
                    </div>

                    <div className="bg-[#0A0A0A] border border-white/5 p-3.5 rounded-2xl text-center">
                      <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Total Views</p>
                      <p className="text-xl font-black text-white mt-1 flex items-center justify-center gap-1 font-mono">
                        <Eye className="w-5 h-5 text-brand-orange shrink-0" />
                        {activeItem.views}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Style Strategy:</p>
                    <p className="text-xs font-bold text-[#F5F5F5] bg-[#0A0A0A] px-3.5 py-2 rounded-xl border border-white/5 inline-block font-mono">
                      {activeItem.styleTag}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Description:</p>
                    <p className="text-sm text-white/60 font-light leading-relaxed">
                      {activeItem.description || 'Designed leveraging custom professional typography sizing, heavy color separation layers, and advanced light source tracing for high visibility on portable gadgets.'}
                    </p>
                  </div>
                </div>

                {/* Booking callout */}
                <div className="pt-4 border-t border-white/5">
                  <a
                    href={`https://wa.me/919971906049?text=Hello%20Ayush!%20I%20am%20interested%20in%20creating%20a%2520project%20similar%20to%20your%2520design%3A%20%22${encodeURIComponent(activeItem.title)}%22.%20Let's%20chat!`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center p-3.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-white bg-[#FF4E00] hover:bg-opacity-95 transition-opacity gap-2 shadow-lg shadow-[#FF4E00]/25 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-white" />
                    Request Similar Style
                  </a>
                </div>

              </div>
              
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
