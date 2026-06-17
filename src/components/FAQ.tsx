import { useState } from 'react';
import { FAQ_LIST } from '../data';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faq" className="py-24 bg-[#0A0A0A] border-t border-white/5 overflow-hidden relative text-[#F5F5F5]">
      {/* Background graphic */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-brand-orange/[0.01] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-semibold text-brand-orange uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-brand-orange" />
            General Inquiries
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Frequently Asked <span className="text-brand-orange">Questions</span>
          </h2>
          <p className="text-white/50 text-sm font-light">
            Everything you need to know about our visual workspace, PSD file packages, and client pipelines.
          </p>
        </div>

        {/* Collapsible Accordion Group - styled with Bento elements */}
        <div className="space-y-4">
          {FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className={`rounded-3xl transition-all duration-300 border ${
                  isOpen 
                    ? 'bg-[#141414] border-white/10 shadow-lg' 
                    : 'bg-[#141414]/40 border-white/5 hover:border-white/10'
                }`}
              >
                
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  type="button"
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 outline-none cursor-pointer group"
                >
                  <span className="font-extrabold text-white text-base sm:text-lg group-hover:text-brand-orange transition-colors duration-250">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-xl bg-[#0A0A0A] border border-white/5 text-white/50 group-hover:text-white transition-colors shrink-0`}>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-brand-orange" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-white/5' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-white/60 text-sm sm:text-base font-light leading-relaxed">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
