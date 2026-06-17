import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Sparkles, ArrowUp, RefreshCw, Flame, Check } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [tickerNotification, setTickerNotification] = useState<string | null>(null);

  useEffect(() => {
    // 1. Loading splash timeline timer
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    // 2. Scroll event list
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    // 3. Simulated Booking Activity Notifications
    const ticketTicks = [
      '⚡ Rohan Sharma just booked 5 Custom Thumbnails!',
      '🔥 Vikram Aditya reserved a monthly Video Editing package!',
      '✨ Kavita Iyer pushed a Shorts Edit package on WhatsApp!',
      '🚀 Ananya Goel secured Unlimited Revisions on a Tech Review!'
    ];

    let currentTick = 0;
    const tickerTimer = setTimeout(() => {
      setTickerNotification(ticketTicks[currentTick]);
      
      const interval = setInterval(() => {
        currentTick = (currentTick + 1) % ticketTicks.length;
        setTickerNotification(ticketTicks[currentTick]);
        // briefly hide then show
        setTimeout(() => {
          setTickerNotification(null);
        }, 5000);
      }, 15000);

      return () => clearInterval(interval);
    }, 4500);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(tickerTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0A0A0A] flex flex-col items-center justify-center z-[9999] text-[#F5F5F5]">
        {/* Absolute dark grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-35" />
        
        {/* Loader centerpiece */}
        <div className="relative space-y-6 flex flex-col items-center z-10 text-center animate-pulse">
          <div className="w-16 h-16 rounded-2xl bg-[#FF4E00] flex items-center justify-center shadow-2xl shadow-brand-orange/20 relative">
            <Sparkles className="w-8 h-8 text-white animate-spin [animation-duration:8s]" />
            <span className="absolute -inset-1 rounded-2xl bg-brand-orange opacity-20 blur-sm -z-1" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-black tracking-widest text-white">
              SNAP<span className="text-brand-orange">EDIT</span>
            </h1>
            <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest">
              Securing High-CTR Audiences...
            </p>
          </div>

          {/* Simple sliding visual track */}
          <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden mt-2 border border-white/5">
            <div className="h-full bg-brand-orange rounded-full animate-infinite-loading animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white/80 font-sans antialiased selection:bg-[#FF4E00] selection:text-white relative">
      
      {/* Sticky nav */}
      <Header />

      {/* Main viewport blocks */}
      <main className="relative">
        <Hero />
        <About />
        <Stats />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Structured sitemap footer */}
      <Footer />

      {/* Action widgets */}
      
      {/* 1. Scroll-To-Top trigger */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#141414] border border-white/5 text-white/50 hover:text-white hover:border-[#FF4E00] hover:bg-[#111111] transition-all duration-300 shadow-xl cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* 2. Sim Ticker notification bubble (Bottom Left corner) */}
      {tickerNotification && (
        <div className="fixed bottom-6 left-6 z-40 p-4 max-w-sm rounded-3xl bg-[#141414]/95 border border-white/10 shadow-2xl backdrop-blur-md text-white flex items-start gap-3 animate-fade-in pointer-events-none">
          <div className="p-1.5 rounded-xl bg-brand-orange/10 text-brand-orange border border-brand-orange/20 shrink-0">
            <Flame className="w-4 h-4 fill-brand-orange/25" />
          </div>
          <div>
            <p className="text-xs font-bold leading-relaxed">{tickerNotification}</p>
            <p className="text-[10px] text-white/30 font-mono mt-0.5 flex items-center gap-1">
              <Check className="w-3 h-3 text-green-500" /> Active Agency Booking • Verified
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
