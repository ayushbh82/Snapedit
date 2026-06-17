import React, { useState } from 'react';
import { MessageSquare, Mail, Send, CheckCircle, Sparkles, AlertCircle, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    channel: '',
    service: 'thumbnail',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [copiedText, setCopiedText] = useState('');

  const whatsappPhone = '+91 9971906049';
  const displayPhone = '+91 9971906049';
  const contactEmail = 'ayushbh82@gmail.com';

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorText) setErrorText('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorText('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    setIsSubmitting(true);

    // Simulate professional processing delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  // Generate dynamic WhatsApp message from form entries
  const getWhatsAppSubmitUrl = () => {
    const textDesc = `Hi Ayush! I filled out your SNAPEDIT Portfolio form:
- Creator Name: ${formData.name}
- Email: ${formData.email}
- Channel Link: ${formData.channel || 'None supplied'}
- Project Intent: ${formData.service}
- Brief: ${formData.message}`;
    return `https://wa.me/919971906049?text=${encodeURIComponent(textDesc)}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] relative overflow-hidden text-[#F5F5F5]">
      {/* Background gradients */}
      <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-brand-orange/[0.01] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-amber-500/[0.01]/[0.01] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left panel: Info & Address metrics */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-semibold text-brand-orange uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Collaborations
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                Get Your Project <span className="text-brand-orange font-black">Started Today</span>
              </h2>
              
              <p className="text-white/50 text-sm sm:text-base font-light leading-relaxed">
                Take your YouTube channel, shorts view rates, or podcast productions to the next level. Ready to see massive subscriber click results? Send a direct dispatch now!
              </p>
            </div>

            {/* Direct buttons & stats - styled as bento cards */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              
              {/* WhatsApp Row */}
              <div className="relative group bg-[#141414] p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <MessageSquare className="w-5 h-5 fill-[#25D366]/20" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-white/40 font-bold uppercase tracking-widest font-mono">WhatsApp Callout</h4>
                    <p className="text-sm font-semibold text-white mt-0.5 font-mono">{displayPhone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(whatsappPhone, 'whatsapp')}
                    className="p-2 text-white/40 hover:text-white rounded-xl bg-[#0A0A0A] border border-white/5 hover:bg-[#111111] cursor-pointer"
                    title="Copy number"
                  >
                    {copiedText === 'whatsapp' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href="https://wa.me/919971906049?text=Hello%20Ayush%20let's%20build%20a%20project!"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-[#25D366] text-black hover:bg-opacity-90 font-bold text-xs rounded-full transition-colors cursor-pointer"
                  >
                    Chat
                  </a>
                </div>
              </div>

              {/* Email Row */}
              <div className="relative group bg-[#141414] p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <Mail className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-white/40 font-bold uppercase tracking-widest font-mono">Email Dispatch</h4>
                    <p className="text-xs sm:text-sm font-semibold text-white mt-0.5 font-mono">{contactEmail}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(contactEmail, 'email')}
                    className="p-2 text-white/40 hover:text-white rounded-xl bg-[#0A0A0A] border border-white/5 hover:bg-[#111111] cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedText === 'email' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`mailto:${contactEmail}?subject=Inquiry%20from%20SNAPEDIT%20Portfolio`}
                    className="px-4 py-2 bg-[#0A0A0A] border border-white/5 text-white hover:bg-[#111111] font-bold text-xs rounded-full transition-colors cursor-pointer"
                  >
                    Mail
                  </a>
                </div>
              </div>

            </div>

            {/* Micro active text footer */}
            <div className="text-[10px] font-mono text-white/30 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
              Typically replies within 3 hours.
            </div>
          </div>

          {/* Right panel: Active dispatch form */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#141414] border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-center">
              
              {isSuccess ? (
                // On active form success
                <div className="space-y-6 text-center py-8 animate-fade-in flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center text-green-500 border border-green-500/20">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-black text-white">Project Inquiry Filed!</h3>
                    <p className="text-white/50 text-sm font-light leading-relaxed">
                      Thank you for trusting <strong className="text-white">SNAPEDIT</strong>, {formData.name}. Your details have been formatted. To initiate processing immediately, push this straight to Ayush on WhatsApp!
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm pt-4">
                    <a
                      href={getWhatsAppSubmitUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#FF4E00] hover:opacity-90 transition-opacity gap-1.5 shadow-lg shadow-[#FF4E00]/25 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 text-white fill-white/20" />
                      Forward to WhatsApp
                    </a>
                    
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({ name: '', email: '', channel: '', service: 'thumbnail', message: '' });
                      }}
                      className="px-5 py-3 rounded-full border border-white/5 bg-[#0A0A0A] hover:bg-[#111111] text-xs font-semibold uppercase tracking-wider text-white/50 hover:text-white cursor-pointer"
                    >
                      Fill Another Form
                    </button>
                  </div>
                </div>
              ) : (
                // Default editable form
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <h3 className="font-extrabold text-lg text-white">Direct Enquiry Form</h3>
                    <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">SECURE TRANSMISSION</span>
                  </div>

                  {errorText && (
                    <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-950/20 border border-red-500/20 text-red-500 text-xs font-medium">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {errorText}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name input */}
                    <div className="space-y-1.5 font-sans">
                      <label htmlFor="name" className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">Your Name / Alias *</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Creator"
                        required
                        className="w-full bg-[#0A0A0A] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-brand-orange/50 outline-none transition-colors placeholder:text-white/20"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5 font-sans">
                      <label htmlFor="email" className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">Your Contact Email *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full bg-[#0A0A0A] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-brand-orange/50 outline-none transition-colors placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Channel link */}
                    <div className="space-y-1.5 h-full">
                      <label htmlFor="channel" className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">YouTube Channel / Site URL</label>
                      <input
                        id="channel"
                        type="url"
                        name="channel"
                        value={formData.channel}
                        onChange={handleChange}
                        placeholder="youtube.com/@my_channel"
                        className="w-full bg-[#0A0A0A] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-brand-orange/50 outline-none transition-colors placeholder:text-white/20"
                      />
                    </div>

                    {/* Service select */}
                    <div className="space-y-1.5">
                      <label htmlFor="service" className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">Sought Service Suite</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-brand-orange/50 outline-none transition-colors cursor-pointer"
                      >
                        <option value="thumbnail">Thumbnail Designing (₹300/ea)</option>
                        <option value="video">Professional Video Editing (₹600/ea)</option>
                        <option value="shorts">Viral Shorts / Reels Edit (₹300/ea)</option>
                        <option value="podcast">Podcast Multi-cut Edit (₹600/ea)</option>
                        <option value="custom">Retainer Package Contract</option>
                      </select>
                    </div>
                  </div>

                  {/* Message body */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">Project Requirements / Brief *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Discuss topic details, reference video links, preferred text tags, or clip timelines here..."
                      required
                      className="w-full bg-[#0A0A0A] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:border-brand-orange/50 outline-none transition-colors resize-none placeholder:text-white/20"
                    />
                  </div>

                  {/* Submit buttons */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center py-4 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-[#FF4E00] hover:opacity-90 transition-all duration-300 gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none shadow-lg shadow-brand-orange/20"
                  >
                    {isSubmitting ? (
                      <span className="w-5.5 h-5.5 rounded-full border-2 border-white/20 border-t-white/80 animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        Submit Project Enquiry
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
