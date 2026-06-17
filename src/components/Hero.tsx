import React from 'react';
import { ArrowDown, MessageSquare, Play, Sparkles, TrendingUp } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = 'https://wa.me/919971906049?text=Hello%20Ayush,%20I\'m%20interested%20in%20your%20Thumbnail%20Design%20&%20Video%20Editing%20services!%20Let\'s%20discuss%20a%20project.';

  const handleScrollToPortfolio = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector('#portfolio');
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#0A0A0A] text-[#F5F5F5]"
    >
      {/* Background radial gradient glow spheres */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
      
      {/* Subtle backdrop mesh lines */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Hero main details card */}
          <div className="lg:col-span-7 bg-[#111111] rounded-3xl border border-white/5 p-8 sm:p-10 md:p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-orange/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="z-10 relative space-y-6">
              {/* Tag Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs font-bold text-brand-orange tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
                Maximize Video Retention & Click Rates
              </div>

              {/* Main Heading styled as requested */}
              <h1 className="text-4xl sm:text-5xl md:text-5xl xl:text-6xl font-black leading-[1.08] tracking-tight text-white">
                Professional <span className="text-brand-orange">Thumbnail Design</span><br/>& Video Editing Services
              </h1>

              {/* Subheading */}
              <p className="text-white/50 text-base sm:text-lg max-w-xl leading-relaxed">
                Helping creators get more views, better engagement, and professional content through eye-catching thumbnails and high-quality video editing.
              </p>

              {/* CTA panel */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={handleScrollToPortfolio}
                  className="bg-brand-orange text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20 hover:bg-opacity-90 active:scale-[0.98] transition-all duration-200 cursor-pointer text-sm"
                >
                  View Portfolio
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/10 border border-white/10 px-8 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:bg-white/15 backdrop-blur-sm active:scale-[0.98] transition-all duration-200 cursor-pointer text-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366] stroke-none" />
                  Order on WhatsApp
                </a>
              </div>

              {/* Quick trust cues aligned to bento style */}
              <div className="flex items-center gap-6 pt-4 text-white/40 text-xs font-mono tracking-wider">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Active Bookings Open
                </div>
                <div>•</div>
                <div>Delivery: ~24 hours</div>
              </div>
            </div>
          </div>

          {/* Bento Hero mockup graphic cards */}
          <div className="lg:col-span-5 bg-[#141414] rounded-3xl border border-white/5 p-8 relative flex flex-col justify-between overflow-hidden min-h-[350px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/5 blur-[90px] rounded-full pointer-events-none"></div>

            {/* Showcase Stack Mockup inside bento slot */}
            <div className="relative w-full h-full flex flex-col justify-between gap-6 z-10">
              
              {/* Simulated Thumbnail Frame reflecting our high work */}
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl shadow-black/80 rotate-[-3deg] hover:rotate-0 transition-transform duration-500 group cursor-pointer bg-black/50">
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10" />
                <img
                  src="/src/assets/images/thumbnail_gaming_1781675132835.jpg"
                  alt="Sample Gaming Work"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-550"
                  referrerPolicy="no-referrer"
                />
                
                {/* Digital overlay assets */}
                <span className="absolute top-3 right-3 z-20 bg-black/80 backdrop-blur-md text-white font-black text-[10px] px-1.5 py-0.5 rounded tracking-wide font-mono">
                  10:14
                </span>

                <div className="slate-subtext absolute bottom-3 left-3 z-20 right-3">
                  <p className="text-[12px] font-bold tracking-tight text-white line-clamp-1 drop-shadow">
                    100 Days Hardcore Survival Sandbox Challenge
                  </p>
                  <p className="text-[9px] text-[#25D366] font-bold flex items-center gap-1 mt-0.5">
                    <TrendingUp className="w-2.5 h-2.5" /> +14.8% average CTR
                  </p>
                </div>
              </div>

              {/* Video editing clip visual representation overlay */}
              <div className="relative bg-[#0A0A0A]/95 rounded-2xl border border-white/10 p-4 shadow-xl rotate-[2deg] hover:rotate-0 transition-all duration-300 transform translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-orange/15 flex items-center justify-center border border-brand-orange/20 relative shrink-0">
                    <Play className="w-4 h-4 text-brand-orange fill-brand-orange/20" />
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-white/80 truncate">Vortex_Montage_V3.mp4</span>
                      <span className="text-[9px] font-mono font-black text-brand-orange bg-brand-orange/15 px-1 py-0.5 rounded uppercase tracking-wide">Rendered</span>
                    </div>
                    
                    {/* Timeline simulator */}
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-1 flex-1 bg-white/10 rounded overflow-hidden flex">
                        <div className="w-[85%] bg-brand-orange" />
                      </div>
                      <span className="text-[8px] text-white/40 font-mono">85% retention</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Floating micro metrics badges for premium bento look */}
            <div className="absolute top-4 right-4 bg-[#0A0A0A] border border-white/10 px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 z-25">
              <div className="p-1 rounded-lg bg-green-500/10 text-green-500 shrink-0">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
              <div className="leading-none">
                <p className="text-[8px] text-white/40 uppercase font-extrabold tracking-wider">CTR Boost</p>
                <p className="text-xs font-black text-white mt-0.5">+18.2%</p>
              </div>
            </div>

            <div className="absolute bottom-24 -left-4 bg-[#0A0A0A] border border-white/10 px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 z-25">
              <div className="p-1 rounded-lg bg-brand-orange/15 text-brand-orange text-xs font-black shrink-0">
                1.2M+
              </div>
              <div className="leading-none">
                <p className="text-[8px] text-white/40 uppercase font-extrabold tracking-wider">Views</p>
                <p className="text-[9px] text-white/30 mt-0.5">On partner channels</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
