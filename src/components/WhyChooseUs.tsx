import { ShieldCheck, Zap, Coins, Heart, RefreshCw, Layers, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      id: 'q1',
      title: 'Professional Quality',
      description: 'Pixels that look premium on any device. We use heavy color-grading, localized subject depth, and composite layers to stand out.',
      icon: ShieldCheck,
      borderColor: 'group-hover:border-orange-500/30'
    },
    {
      id: 'q2',
      title: 'Fast Delivery',
      description: 'We respect your upload schedules. Deliveries occur within 24 to 48 hours for thumbnails and 3 to 5 days for video edits.',
      icon: Zap,
      borderColor: 'group-hover:border-amber-500/30'
    },
    {
      id: 'q3',
      title: 'Affordable Pricing',
      description: 'Industry-leading rates starting at flat rates of ₹300 per thumbnail and ₹600 per video editing without any hidden developer fees.',
      icon: Coins,
      borderColor: 'group-hover:border-yellow-500/30'
    },
    {
      id: 'q4',
      title: 'Client Satisfaction',
      description: 'Active transparent communication over WhatsApp and email. We treat your channel growth as our absolute priority.',
      icon: Heart,
      borderColor: 'group-hover:border-red-500/30'
    },
    {
      id: 'q5',
      title: 'Unlimited Revisions',
      description: 'We edit till you click. Unlimited adjustments are included on thumbnails, and up to 3 major revisions on video edits.',
      icon: RefreshCw,
      borderColor: 'group-hover:border-blue-500/30'
    },
    {
      id: 'q6',
      title: 'Modern Design Approach',
      description: 'Driven by click psychology. We analyze trending YouTube standards daily to ensure your videos get click priority.',
      icon: Layers,
      borderColor: 'group-hover:border-violet-500/30'
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden text-[#F5F5F5]">
      {/* Glow background circles */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-orange/[0.01] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-semibold text-brand-orange uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            Grow Your Subscriber Base
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Why Choose <span className="text-brand-orange">SNAPEDIT</span>?
          </h2>
          <p className="text-white/50 text-sm font-light">
            We bridge the gap between creative artistry and algorithmic click conversion to maximize your channel views.
          </p>
        </div>

        {/* Six Column Grid layout - styled as bento cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div 
                key={pt.id}
                className="group relative bg-[#141414] border border-white/5 rounded-3xl p-6 sm:p-8 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-5"
              >
                {/* Styled icon circle */}
                <div className="p-3.5 rounded-2xl bg-[#0A0A0A] border border-white/5 text-brand-orange group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-brand-orange" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-extrabold text-lg text-white group-hover:text-brand-orange transition-colors duration-300">
                    {pt.title}
                  </h3>
                  <p className="text-white/55 text-sm font-light leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
