import { useState } from 'react';
import { Image, Video, Check, MessageSquare, Calculator, Flame } from 'lucide-react';

export default function Services() {
  const [thumbCount, setThumbCount] = useState(5);
  const [videoCount, setVideoCount] = useState(2);

  const THUMB_PRICE = 300;
  const VIDEO_PRICE = 600;

  const totalEstimate = (thumbCount * THUMB_PRICE) + (videoCount * VIDEO_PRICE);

  const customOrderText = `Hello Ayush! I checked out SNAPEDIT and estimated a custom package:
- ${thumbCount} High-CTR Thumbnails (₹${thumbCount * THUMB_PRICE})
- ${videoCount} Professional Video Edits (₹${videoCount * VIDEO_PRICE})
Total Estimated: ₹${totalEstimate}
Let's get started on this!`;

  const encodedOrderText = encodeURIComponent(customOrderText);
  const whatsappCalculatorUrl = `https://wa.me/919971906049?text=${encodedOrderText}`;

  const mainServices = [
    {
      id: 's-thumb',
      title: 'Thumbnail Designing',
      price: '₹300',
      period: 'per Thumbnail',
      description: 'Thumbnails optimized to stand out in crowded subscriber feeds. Designed to convert search and recommendation traffic at maximum rates.',
      icon: Image,
      badge: 'Popular Niche',
      features: [
        'YouTube Main Thumbnails',
        'Gaming & FPS Thumbnails',
        'Education & Documentary layouts',
        'Tech Review & Hardware setups',
        'Podcast Dialogue covers',
        'Business & Digital Case studies'
      ],
      color: 'from-orange-500 to-amber-500'
    },
    {
      id: 's-video',
      title: 'Professional Video Editing',
      price: '₹600',
      period: 'per Video Edit',
      description: 'Retention-backed video cutting built for long-form, podcasts, and trending short-form content. High emphasis on kinetic subtitles and sound FX.',
      icon: Video,
      badge: 'High Performance',
      features: [
        'YouTube Long-form Video Editing',
        'Shorts / Reels / TikTok edits',
        'High-Pact Educational layouts',
        'Multicam Podcast Cuts & chapter structures',
        'Cinematic Gaming montages',
        'Social Media Promotional clips'
      ],
      color: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0A0A0A] relative overflow-hidden text-[#F5F5F5]">
      {/* Glow backgrounds */}
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-brand-orange/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-semibold text-brand-orange uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-brand-orange" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Premium Services & <span className="text-brand-orange">Pricing Plans</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base font-light">
            Boost your conversion rates and audience watch time with our dedicated pricing models. All prices are in Indian Rupees (₹) with absolute clarity.
          </p>
        </div>

        {/* Services Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {mainServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="group relative bg-[#141414] border border-white/5 w-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/10 shadow-xl"
              >
                <div>
                  {/* Top segment */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-[#0A0A0A] border border-white/5 text-brand-orange">
                      <IconComponent className="w-5 h-5 text-brand-orange" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-2.5 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  {/* Pricing segment */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-extrabold text-white">{service.title}</h3>
                    <div className="flex items-baseline gap-1.5 py-2">
                      <span className="text-4xl font-black text-brand-orange">{service.price}</span>
                      <span className="text-white/40 text-sm font-light">{service.period}</span>
                    </div>
                    <p className="text-white/50 text-xs sm:text-sm font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="mt-8 pt-6 border-t border-white/5 space-y-3.5">
                    <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">What you get:</p>
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-white/80 text-sm">
                        <div className="rounded-full p-0.5 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-light">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instant order action */}
                <div className="mt-8 pt-4">
                  <a
                    href={`https://wa.me/919971906049?text=Hello%20Ayush,%20I'm%20interested%20in%2520your%20${encodeURIComponent(service.title)}%20plan%20(${service.price}).%20Let's%20collaborate!`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center p-3.5 rounded-2xl text-sm font-bold text-[#F5F5F5] bg-white/5 hover:bg-[#FF4E00] hover:text-white transition-all duration-300 gap-2 border border-white/10 hover:border-transparent cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Book This Service
                  </a>
                </div>

              </div>
            );
          })}

        </div>

        {/* Dynamic Calculator widget inside Bento styling block */}
        <div className="mt-12 bg-[#111111] max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 border border-white/5 text-white shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left math text */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A0A0A] border border-white/5 text-xs font-mono text-white/50">
                <Calculator className="w-3.5 h-3.5 text-brand-orange" />
                Quote Builder Widget
              </div>
              <h3 className="text-xl sm:text-2xl font-black">Estimate Your Monthly Video Package</h3>
              <p className="text-white/50 text-xs sm:text-sm font-light leading-relaxed">
                Need continuous content? Use our interactive package slider to quickly calculate custom monthly retainers at flat rates. Then click to place an order immediately!
              </p>

              {/* Range sliders */}
              <div className="space-y-4 pt-4">
                {/* Thumbnails slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-white/40 font-medium">Thumbnails (₹300 each)</span>
                    <span className="text-brand-orange font-bold">{thumbCount} units</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    value={thumbCount}
                    onChange={(e) => setThumbCount(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-[#0A0A0A] rounded-lg appearance-none cursor-pointer accent-brand-orange border border-white/5"
                  />
                </div>

                {/* Video edits slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-white/40 font-medium">Video Edits (₹600 each)</span>
                    <span className="text-brand-orange font-bold">{videoCount} units</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    value={videoCount}
                    onChange={(e) => setVideoCount(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-[#0A0A0A] rounded-lg appearance-none cursor-pointer accent-brand-orange border border-white/5"
                  />
                </div>
              </div>

            </div>

            {/* Right estimated card result */}
            <div className="lg:col-span-5 bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 text-center space-y-4 flex flex-col justify-between shadow-lg">
              
              <div className="space-y-1">
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Monthly Package Estimate</p>
                <div className="text-3xl sm:text-4xl font-black text-white pt-2 text-brand-orange">
                  ₹{totalEstimate.toLocaleString('en-IN')}
                </div>
                <p className="text-[10px] text-white/30 mt-1">
                  {thumbCount} thumbnails ({thumbCount * THUMB_PRICE} INR) + {videoCount} edits ({videoCount * VIDEO_PRICE} INR)
                </p>
              </div>

              <a
                href={whatsappCalculatorUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center p-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#FF4E00] hover:bg-opacity-90 transition-opacity gap-1.5 shadow-lg shadow-brand-orange/20 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                Submit Estimated Order
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
