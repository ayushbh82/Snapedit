import { TESTIMONIALS_LIST } from '../data';
import { Star, MessageSquare, TrendingUp } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden text-[#F5F5F5]">
      {/* Glow ambient circle */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-brand-orange/[0.015] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-semibold text-brand-orange uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-brand-orange" />
            Creator Reviews
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            What <span className="text-brand-orange">Our Clients</span> Say
          </h2>
          <p className="text-white/50 text-sm font-light">
            Read success logs from real entrepreneurs, review channels, gaming hubs, and active podcast networks who trusted SNAPEDIT.
          </p>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {TESTIMONIALS_LIST.map((t) => (
            <div 
              key={t.id}
              className="relative p-6 sm:p-8 rounded-3xl bg-[#141414] border border-white/5 shadow-lg hover:border-white/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Profile Info */}
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-center gap-3">
                    {/* User profile avatar initials */}
                    <div className={`w-12 h-12 rounded-full ${t.avatar} flex items-center justify-center font-bold text-white shadow-inner shrink-0`}>
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{t.author}</h4>
                      <p className="text-xs text-white/40 font-medium font-mono">{t.channel}</p>
                    </div>
                  </div>

                  {/* CTR stat box */}
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl px-2.5 py-1 text-center shrink-0">
                    <span className="text-[10px] font-mono font-bold text-green-500 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {t.ctrIncrease}
                    </span>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Content body text */}
                <p className="text-white/70 text-sm sm:text-base font-light italic leading-relaxed pt-2">
                  "{t.content}"
                </p>
              </div>

              {/* Decorative signature mark */}
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-white/30">
                <span className="font-mono tracking-wider">{t.role} Verified Creator</span>
                <span className="text-brand-orange text-xs font-bold font-mono">100% Retainer client</span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
