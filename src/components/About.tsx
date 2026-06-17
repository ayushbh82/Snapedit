import { ShieldCheck, Target, Award, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A] overflow-hidden relative text-[#F5F5F5]">
      {/* Background decoration elements */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-brand-orange/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left panel: Description & Bio */}
          <div className="lg:col-span-7 bg-[#111111] border border-white/5 rounded-3xl p-8 sm:p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="z-10 relative space-y-6">
              {/* Tag Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-semibold text-brand-orange">
                <Sparkles className="w-3.5 h-3.5" />
                Creator Philosophy
              </div>

              {/* About Title */}
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                About <span className="text-brand-orange">SNAPEDIT</span>
              </h2>

              {/* Content text */}
              <div className="space-y-4 text-white/60 text-base sm:text-lg font-light leading-relaxed">
                <p>
                  I am a professional Thumbnail Designer and Video Editor with <strong className="text-white font-semibold">2+ years of experience</strong> and have successfully worked with <strong className="text-white font-semibold">25+ clients</strong> globally.
                </p>
                <p>
                  My goal is to help creators increase their click-through rate and audience retention through professional, pixel-perfect visual content. By matching psychological color theories, clean typography spacing, and sharp editing flows, I turn passive bypassers into lifelong subscribers.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                
                <div className="flex items-start gap-3 bg-[#141414] p-4 rounded-2xl border border-white/5">
                  <Target className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Targeted CTR</h4>
                    <p className="text-[11px] text-white/40 mt-1">Engineered to grab visual attention instantly.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#141414] p-4 rounded-2xl border border-white/5">
                  <ShieldCheck className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Premium Quality</h4>
                    <p className="text-[11px] text-white/40 mt-1">Pristine pixel depth and professional grading.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#141414] p-4 rounded-2xl border border-white/5">
                  <Award className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Engagement-First</h4>
                    <p className="text-[11px] text-white/40 mt-1">High-retention editing pacing strategies.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right panel: Digital Creator Visual Card Mockup */}
          <div className="lg:col-span-5 bg-[#141414] border border-white/5 p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-orange/5 blur-[90px] rounded-full pointer-events-none"></div>
            
            <div className="relative space-y-6 z-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/15 flex items-center justify-center border border-brand-orange/20 text-brand-orange font-extrabold text-sm">
                    SE
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">SNAPEDIT STUDIO</h3>
                    <p className="text-[10px] text-white/40 font-mono">EST. 2024 • NEW DELHI, IN</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-white/40 tracking-wider">CREATIVE STUDIO</span>
              </div>

              {/* Simulated CTR Performance graph */}
              <div className="space-y-4 flex-1 flex flex-col justify-center">
                <span className="text-[11px] font-mono text-white/50 tracking-wider">AUDIENCE CLICK RETENTION RATE</span>
                
                <div className="space-y-4">
                  {/* Before SNAPEDIT Bar */}
                  <div>
                    <div className="flex justify-between text-xs text-white/40 font-medium mb-1.5">
                      <span>Standard Thumbnail (Before)</span>
                      <span>3.8% CTR</span>
                    </div>
                    <div className="h-2 w-full bg-[#0A0A0A] rounded-full overflow-hidden border border-white/5">
                      <div className="h-full w-[38%] bg-white/10" />
                    </div>
                  </div>

                  {/* After SNAPEDIT Bar */}
                  <div>
                    <div className="flex justify-between text-xs text-brand-orange font-bold mb-1.5">
                      <span>SNAPEDIT Design (After)</span>
                      <span className="font-extrabold">12.8% CTR</span>
                    </div>
                    <div className="h-2 w-full bg-[#0A0A0A] rounded-full overflow-hidden border border-white/5">
                      <div className="h-full w-[100%] bg-brand-orange animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Text Quote inside card */}
                <div className="bg-[#0A0A0A] p-4 rounded-2xl border border-white/5 mt-4">
                  <p className="text-[12px] text-white/50 italic leading-relaxed">
                    "I don’t just create artwork. I craft high-performance visual gateways that command viewers to click and watch."
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
