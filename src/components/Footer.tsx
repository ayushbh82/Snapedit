import React from 'react';
import { Sparkles, MessageSquare, Mail, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
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
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-16 pb-8 relative overflow-hidden text-[#F5F5F5]">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-orange/[0.01] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Logo & description (5cols) */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center gap-2 group w-max"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FF4E00] flex items-center justify-center shadow shadow-[#FF4E00]/20">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-wider text-white">
                SNAP<span className="text-brand-orange">EDIT</span>
              </span>
            </a>
            
            <p className="text-white/40 text-xs sm:text-sm font-light max-w-sm leading-relaxed">
              Premium visual architecture for high-performing modern creators. We build thumbnails and edit video clips designed to capture attention and feed recommendation algorithms.
            </p>
          </div>

          {/* Quick Sitemap Links (3cols) */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#25D366] font-mono">Creative Suite</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="text-[#F5F5F5]/60 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-light"
                >
                  Services & Prices
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  onClick={(e) => handleLinkClick(e, '#portfolio')}
                  className="text-[#F5F5F5]/60 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-light"
                >
                  Showcase Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#why-choose-us" 
                  onClick={(e) => handleLinkClick(e, '#why-choose-us')}
                  className="text-[#F5F5F5]/60 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-light"
                >
                  Why Our Design Works
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Actions (4cols) */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-[10px] uppercase font-bold tracking-widest text-brand-orange font-mono">Creator Support</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://wa.me/919971906049?text=Hello%20Ayush%20let's%20collaborate!"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[#F5F5F5]/60 hover:text-[#25D366] transition-colors duration-200 text-xs sm:text-sm font-light"
                >
                  <MessageSquare className="w-4 h-4" />
                  Order on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:ayushbh82@gmail.com?subject=Inquiry%20from%20SNAPEDIT%20Portfolio"
                  className="inline-flex items-center gap-2 text-[#F5F5F5]/60 hover:text-brand-orange transition-colors duration-200 text-xs sm:text-sm font-light"
                >
                  <Mail className="w-4 h-4" />
                  Email: ayushbh82@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-1.5 text-[10px] text-white/30 font-mono">
                <ShieldAlert className="w-3.5 h-3.5" />
                Turnaround: 24h Express Available
              </li>
            </ul>
          </div>

        </div>

        {/* Brand Copyright and platform info */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="text-white/30 text-xs font-light">
            &copy; {currentYear} <strong className="text-white/50">SNAPEDIT</strong>. All Rights Reserved.
          </p>
          <p className="text-white/30 text-xs font-mono">
            Delhi, India • High-CTR Design & Retentions
          </p>
        </div>

      </div>
    </footer>
  );
}
