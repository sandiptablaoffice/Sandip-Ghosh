import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MessageSquare, Phone, Instagram, Send, MapPin, Mail, Globe, ArrowUpRight, Facebook, Youtube, Twitter } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Concert Booking',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in required fields: Name, Email, and Message.");
      return;
    }

    setIsSubmitting(true);
    setIsSubmitted(false);

    const payload = {
      ...formData,
      formType: "general-booking"
    };

    setLastSubmittedData({ ...formData });

    try {
      // 1. Durably save on backend Express server
      await fetch('/api/submit-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      // 2. Attempt automated forward via Web3Forms if key is present
      const web3Key = (import.meta as any).env.VITE_WEB3FORMS_KEY;
      if (web3Key && web3Key.trim() !== "") {
        try {
          const web3Payload = {
            access_key: web3Key,
            subject: `New Concert/Booking Inquiry: ${formData.subject} - ${formData.name}`,
            from_name: "Sandip Ghosh Tabla Desk",
            name: formData.name,
            email: formData.email,
            phone: formData.phone || "Not specified",
            inquiry_subject: formData.subject,
            message: formData.message,
            to_email: "sandiptablaoffice@gmail.com"
          };

          await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(web3Payload)
          });
        } catch (mailErr) {
          console.error("Direct forwarding service error:", mailErr);
        }
      }

      setIsSubmitted(true);
      
      // Clear form elements
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Concert Booking',
        message: ''
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 10000);

    } catch (err) {
      console.error("Failed to submit inquiry:", err);
      alert("There was an issue processing your submission on the server, but you can still send it via WhatsApp or Email below.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleManualEmailDraft = () => {
    const data = lastSubmittedData || formData;
    const mailSubject = encodeURIComponent(`Booking/Collaboration - ${data.subject} - ${data.name || 'Client'}`);
    const mailBody = encodeURIComponent(
      `Hello Sandip Ji,\n\nI would like to inquire about booking/collaboration.\n\n` +
      `Details:\n` +
      `- Full Name: ${data.name || 'Inquirer'}\n` +
      `- Email Address: ${data.email || 'Not specified'}\n` +
      `- Contact Phone: ${data.phone || 'Not specified'}\n` +
      `- Topic: ${data.subject}\n` +
      `- Message: ${data.message || 'None'}\n\n` +
      `Looking forward to hearing from you soon!`
    );
    window.open(`mailto:sandiptablaoffice@gmail.com?subject=${mailSubject}&body=${mailBody}`, '_blank');
  };

  const openWhatsAppDirect = (topic: string) => {
    const data = lastSubmittedData || formData;
    const msgTopic = topic || data.subject;
    const message = `Hello Sandip Ji, I would like to query about your: *${msgTopic}*%0A%0AMy Name: ${data.name || 'Art Lover'}%0APhone: ${data.phone || 'Not specified'}%0AMessage: ${data.message || 'Not specified'}`;
    window.open(`https://wa.me/919831091386?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-noble-900 border-t border-gold-500/10">
      
      {/* Background circular blur */}
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-gold-950/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-gold-500" />
            <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Inquire</span>
            <span className="h-[1px] w-6 bg-gold-500" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Connect & Collaborate
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mt-4 font-light">
            Bring traditional hand percussion virtuosity to your next festival, university series, recording session, or personal practice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-8">
          
          {/* Left Block: Communication Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 text-left">
            
            {/* Main Bio Card */}
            <div className="noble-glass p-8 rounded-lg border border-gold-500/10 flex-grow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-bl-full pointer-events-none" />

              <h3 className="font-cinzel text-xl font-bold text-white tracking-wider mb-2">
                Sandiip Kr Ghosh
              </h3>
              <span className="text-xs font-bold text-gold-400 tracking-wider block mb-6 uppercase">
                Devotee and a learner of music
              </span>

              <div className="space-y-6">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-gold-950/30 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block mb-0.5">Telephone / WhatsApp</span>
                    <a href="tel:+919831091386" className="text-sm font-semibold text-zinc-100 hover:text-gold-300 transition-colors">
                      +91 98310 91386
                    </a>
                  </div>
                </div>

                {/* Email (Derived from user metadata or professional office) */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-gold-950/30 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block mb-0.5">Official Email Desk</span>
                    <a href="mailto:sandiptablaoffice@gmail.com" className="text-sm font-semibold text-zinc-100 hover:text-gold-300 transition-colors block break-all">
                      sandiptablaoffice@gmail.com
                    </a>
                  </div>
                </div>

                {/* Instagram Handle */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-gold-950/30 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block mb-0.5">Instagram Channel</span>
                    <a 
                      href="https://instagram.com/sandipghoshtabla" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm font-semibold text-zinc-100 hover:text-gold-300 transition-colors flex items-center gap-1"
                    >
                      @sandipghoshtabla
                      <ArrowUpRight className="w-3.5 h-3.5 text-gold-500" />
                    </a>
                  </div>
                </div>

                {/* Facebook Handle */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-gold-950/30 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                    <Facebook className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block mb-0.5">Facebook Page</span>
                    <a 
                      href="https://facebook.com/SandipGhoshTabla" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm font-semibold text-zinc-100 hover:text-gold-300 transition-colors flex items-center gap-1"
                    >
                      SandipGhoshTabla
                      <ArrowUpRight className="w-3.5 h-3.5 text-gold-500" />
                    </a>
                  </div>
                </div>

                {/* YouTube Channel */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-gold-950/30 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                    <Youtube className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block mb-0.5">YouTube Stream</span>
                    <a 
                      href="https://www.youtube.com/@SandipGhoshTabla" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm font-semibold text-zinc-100 hover:text-gold-300 transition-colors flex items-center gap-1"
                    >
                      @SandipGhoshTabla
                      <ArrowUpRight className="w-3.5 h-3.5 text-gold-500" />
                    </a>
                  </div>
                </div>

                {/* Twitter / X */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-gold-950/30 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                    <Twitter className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block mb-0.5">Twitter / X handle</span>
                    <a 
                      href="https://x.com/BlastingHands" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm font-semibold text-zinc-100 hover:text-gold-300 transition-colors flex items-center gap-1"
                    >
                      @BlastingHands
                      <ArrowUpRight className="w-3.5 h-3.5 text-gold-500" />
                    </a>
                  </div>
                </div>

                {/* Department Location */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded bg-gold-950/30 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block mb-0.5">DHA Esthetics Music Gurukul Location</span>
                    <p className="text-sm font-light text-zinc-300">
                      16B, Paikpara Row, Kolkata, West Bengal 700037, India (Near Shyambazar Metro)
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Action triggers */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => openWhatsAppDirect('Concert Booking Request')}
                className="bg-zinc-950 border border-gold-500/25 p-4 rounded-lg text-center flex flex-col items-center justify-center hover:border-gold-500 transition-all cursor-pointer group"
              >
                <Calendar className="w-6 h-6 text-gold-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-zinc-200 tracking-wider uppercase">Book Performance</span>
                <span className="text-[9px] text-zinc-500 mt-0.5 font-light">Direct Chat Booking</span>
              </button>

              <button
                onClick={() => openWhatsAppDirect('Tabla Classes Syllabus Query')}
                className="bg-zinc-950 border border-gold-500/25 p-4 rounded-lg text-center flex flex-col items-center justify-center hover:border-gold-500 transition-all cursor-pointer group"
              >
                <MessageSquare className="w-6 h-6 text-gold-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-zinc-200 tracking-wider uppercase">Join Tabla Classes</span>
                <span className="text-[9px] text-zinc-500 mt-0.5 font-light">Syllabus consultation</span>
              </button>
            </div>

          </div>

          {/* Right Column: Contact & Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-noble-955 p-8 md:p-10 rounded-lg border border-gold-500/10 shadow-2xl relative text-left">
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-gold-300 tracking-wider mb-2">
                Booking & Collaboration Inquiry
              </h3>
              <p className="text-xs text-zinc-400 mb-8 leading-relaxed">
                For corporate event, classical concert curation, university workshops, or private mentoring classes, submit your data.
              </p>

              <form onSubmit={handleSendMessage} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] text-zinc-400 font-bold uppercase tracking-wider mb-2">
                      Your Name <span className="text-gold-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Pandit Amitav"
                      className="w-full bg-noble-950 border border-gold-500/20 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-zinc-400 font-bold uppercase tracking-wider mb-2">
                      Email Address <span className="text-gold-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="amitav@maestro.com"
                      className="w-full bg-noble-950 border border-gold-500/20 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] text-zinc-400 font-bold uppercase tracking-wider mb-2">
                      Contact Phone
                    </label>
                    <input 
                      type="text" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98310 XXXXX"
                      className="w-full bg-noble-950 border border-gold-500/20 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-zinc-400 font-bold uppercase tracking-wider mb-2">
                      Subject Matter
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-noble-950 border border-gold-500/20 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold-500 transition-colors cursor-pointer"
                    >
                      <option value="Concert Booking">Concert Solo / Accompaniment Booking</option>
                      <option value="Gurukul Workshop">Gurukul Workshop / Seminar Seminar</option>
                      <option value="International Fusion">Cross-Border Collaboration</option>
                      <option value="Gurukul Enrollment">Private Tabla Classes</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-zinc-400 font-bold uppercase tracking-wider mb-2">
                    Inquiry Message / Schedule Details <span className="text-gold-500">*</span>
                  </label>
                  <textarea 
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe venue location, scheduled time, budget or student learning experience..."
                    className="w-full bg-noble-950 border border-gold-500/20 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold-500 transition-colors resize-none"
                  />
                </div>

                {/* Submitting Feedback */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 bg-zinc-900 border border-gold-500/30 rounded text-left space-y-2"
                    >
                      <div className="text-xs text-gold-300 font-bold uppercase tracking-wider flex items-center gap-1.5 font-sans">
                        <span className="text-base text-gold-500">🎉</span> Booking Inquiry Sent!
                      </div>
                      
                      <p className="text-[11px] text-zinc-300 leading-relaxed font-sans">
                        Thank you! Your booking message has been dispatched and **automatically emailed directly to Sandip Ji's Gmail inbox** at <strong className="text-gold-400">sandiptablaoffice@gmail.com</strong>. No further action is required; Sandip Ji will contact you shortly!
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 disabled:opacity-50 text-black font-extrabold text-xs tracking-widest uppercase py-4 px-8 rounded cursor-pointer transition-colors flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(197,141,42,0.3)] hover:shadow-[0_4px_25px_rgba(197,141,42,0.5)]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {isSubmitting ? "TRANSMITTING..." : "Transmit message"}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
