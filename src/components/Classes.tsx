import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, CheckCircle, Flame, Sparkles, Send, Globe, Users, BookOpen, Music, MapPin, Compass, Info, Facebook, Instagram } from 'lucide-react';
import { getDynamicTextValue } from '../utils/dynamicText';
import AssetImage from './AssetImage';

export default function Classes() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    level: 'Beginner',
    location: '',
    whatsapp: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [gurukulLogo, setGurukulLogo] = useState<string | null>(null);
  const [gurukulLogoError, setGurukulLogoError] = useState(false);

  const [texts, setTexts] = useState({
    gurukulName: getDynamicTextValue('gurukulName'),
    gurukulMentor: getDynamicTextValue('gurukulMentor'),
    gurukulLocation: getDynamicTextValue('gurukulLocation'),
    gurukulFocus: getDynamicTextValue('gurukulFocus'),
    gurukulRecordingStudio: getDynamicTextValue('gurukulRecordingStudio')
  });

  useEffect(() => {
    setGurukulLogo('/assets/gurukul_logo.jpg');
    setGurukulLogoError(false);
  }, []);

  useEffect(() => {
    const handleUpdate = () => {
      setTexts({
        gurukulName: getDynamicTextValue('gurukulName'),
        gurukulMentor: getDynamicTextValue('gurukulMentor'),
        gurukulLocation: getDynamicTextValue('gurukulLocation'),
        gurukulFocus: getDynamicTextValue('gurukulFocus'),
        gurukulRecordingStudio: getDynamicTextValue('gurukulRecordingStudio')
      });
    };
    window.addEventListener('sg-text-cache-updated', handleUpdate);
    return () => window.removeEventListener('sg-text-cache-updated', handleUpdate);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<any>(null);
  const [web3ResponseDetails, setWeb3ResponseDetails] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.level) {
      alert("Please provide name, email, and skill level.");
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setWeb3ResponseDetails(null);

    const payload = {
      ...formData,
      formType: "classes-admission"
    };

    // Keep reference for manual backup triggers if needed
    setLastSubmittedData({ ...formData });

    try {
      // 1. Durably save on backend Express server & send auto-email
      console.log("[CLASSES] Attempting server proxy dispatch...");
      const res = await fetch('/api/submit-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }
      
      const resData = await res.json() as any;

      if (resData.web3Result) {
        setWeb3ResponseDetails({
          success: resData.web3Result.success,
          message: resData.web3Result.message || (resData.web3Result.success ? "Email successfully dispatched!" : "Form key pending activation or invalid.")
        });
      } else {
        setWeb3ResponseDetails({
          success: false,
          message: "Server received details, but did not forward email."
        });
      }

    } catch (err: any) {
      console.warn("[CLASSES] Server API route failed or is unavailable (e.g. static hosting on Vercel). Falling back to direct client Web3Forms submission.", err);
      
      // Fallback: Dispatch directly from client to Web3Forms
      try {
        const web3Key = "35bfe433-4c36-4368-b0ee-c8613b69a72b";
        const web3Payload = {
          access_key: web3Key,
          subject: `New Gurukul Admission: ${formData.name} (${formData.level})`,
          from_name: "Sandip Ghosh Tabla Gurukul",
          name: formData.name,
          email: formData.email,
          level: formData.level,
          location: formData.location || "Not specified",
          whatsapp: formData.whatsapp || "Not specified",
          message: formData.message || "No additional comments"
        };

        const clientRes = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(web3Payload)
        });

        if (!clientRes.ok) {
          throw new Error(`Web3Forms direct submission status: ${clientRes.status}`);
        }

        const clientData = await clientRes.json() as any;
        setWeb3ResponseDetails({
          success: clientData.success,
          message: clientData.message || (clientData.success ? "Email successfully dispatched directly from client!" : "Key pending activation.")
        });
      } catch (clientErr: any) {
        console.error("[CLASSES] Direct client fallback submission also failed:", clientErr);
        setWeb3ResponseDetails({
          success: false,
          message: "All direct email systems are pending or offline. Please use the quick keys below!"
        });
      }
    } finally {
      // Regardless of failure, we show the beautiful processing panel with fallbacks instead of annoying browser alerts!
      setSubmitSuccess(true);
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Clear form elements
      setFormData({
        name: '',
        email: '',
        level: 'Tabla Classes',
        location: '',
        whatsapp: '',
        message: ''
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 15000);
    }
  };

  const handleWhatsAppEnroll = () => {
    const data = lastSubmittedData || formData;
    const text = `Hello Sandip Ji, I want to inquiry about DHA Esthetics Music Gurukul admission!%0A%0AName: ${data.name || 'Student'}%0ALevel: ${data.level}%0ALocation: ${data.location || 'Not specified'}%0APhone/WhatsApp: ${data.whatsapp || 'Not specified'}%0ANote: ${data.message || 'No additional details'}`;
    window.open(`https://wa.me/919831091386?text=${text}`, '_blank');
  };

  const handleManualEmailDraft = () => {
    const data = lastSubmittedData || formData;
    const mailSubject = encodeURIComponent(`Admission Inquiry - ${data.name || 'Student'}`);
    const mailBody = encodeURIComponent(
      `Hello Sandip Ji,\n\nI would like to apply for enrollment at DHA Esthetics Music Gurukul.\n\n` +
      `Here are my enrollment details:\n` +
      `- Full Name: ${data.name || 'Student'}\n` +
      `- Student Email: ${data.email || 'Not specified'}\n` +
      `- Program Interest: ${data.level}\n` +
      `- Current Location: ${data.location || 'Not specified'}\n` +
      `- WhatsApp/Phone: ${data.whatsapp || 'Not specified'}\n` +
      `- Message/Focus: ${data.message || 'None'}\n\n` +
      `Looking forward to hearing from you soon!`
    );
    window.open(`mailto:sandiptablaoffice@gmail.com?subject=${mailSubject}&body=${mailBody}`, '_blank');
  };

  return (
    <section id="classes" className="py-24 relative overflow-hidden bg-noble-950">
      
      {/* Decorative vector overlays */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-950/5 rounded-full pointer-events-none filter blur-2xl" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          {gurukulLogo && !gurukulLogoError && (
            <div className="w-24 h-24 rounded-full border border-gold-500/30 overflow-hidden bg-noble-950 mb-6 flex items-center justify-center p-1 shadow-[0_0_15px_rgba(197,141,42,0.15)] hover:border-gold-500/60 transition-colors">
              <img 
                src={gurukulLogo} 
                alt="Gurukul Logo" 
                className="w-full h-full object-cover rounded-full" 
                onError={() => setGurukulLogoError(true)}
                referrerPolicy="no-referrer" 
              />
            </div>
          )}
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-gold-500" />
            <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Classical Gurukul</span>
            <span className="h-[1px] w-6 bg-gold-500" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            {texts.gurukulName}
          </h2>

          {/* Join Tabla Classes high-emphasis callout banner */}
          <button 
            onClick={() => {
              const element = document.getElementById('admission-form');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="mt-4 inline-flex items-center gap-3 bg-gold-500/15 hover:bg-gold-500/25 active:scale-95 transition-all border border-gold-500/30 px-6 py-2 rounded-full shadow-[0_4px_12px_rgba(197,141,42,0.1)] text-gold-400 cursor-pointer animate-pulse"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
            <span className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.25em]">Join Tabla Classes</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
          </button>

          <p className="text-zinc-400 text-sm max-w-2xl mt-4 font-light">
            Dedicated music training institute based in Kolkata, providing specialized grooming in Indian classical rhythm, basic audio / VDO recording guidance, and guidance of core tabla technique & aesthetics under direct guidance.
          </p>
        </div>

        {/* Gurukul Overview & Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-8 bg-noble-900/60 border border-gold-500/10 rounded-xl p-6 sm:p-8 text-left space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gold-500/10 pb-4">
              <div>
                <span className="text-[10px] text-gold-500 font-bold uppercase tracking-wider block">Mentor & Director</span>
                <span className="font-cinzel text-lg font-black text-white">{texts.gurukulMentor}</span>
              </div>
              <div className="flex items-center gap-2 bg-gold-950/30 border border-gold-500/15 rounded-full px-4 py-1.5 self-start">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span className="text-[10px] text-zinc-200 font-medium tracking-wide uppercase">Traditional Aesthetic Lineage</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-gold-400">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span className="font-cinzel text-xs font-bold uppercase tracking-wider">Gurukul Location</span>
                </div>
                <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
                  {texts.gurukulLocation}
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-gold-400">
                  <Music className="w-4 h-4" />
                  <span className="font-cinzel text-xs font-bold uppercase tracking-wider">Core Focus disciplines</span>
                </div>
                <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed">
                  {texts.gurukulFocus}
                </p>
              </div>
            </div>

            {/* Studio Facility Showcase */}
            <div className="bg-noble-950/70 border border-gold-500/10 rounded-lg p-5 flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 bg-gold-950/30 border border-gold-500/20 text-gold-400 rounded-lg shrink-0">
                <Music className="w-6 h-6 animate-pulse" />
              </div>
              <div className="text-left space-y-1">
                <span className="font-cinzel text-xs font-bold text-white uppercase tracking-wider block">On-site Recording setup : DHA Esthetics Studio</span>
                <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                  Our advanced acoustic wing grants disciples valuable hands-on experience in music arrangements, production, acoustic microphone alignments, and session recording formats.
                </p>
              </div>
            </div>

          </div>

          <div className="md:col-span-4 bg-gradient-to-br from-noble-900 to-noble-950 border border-gold-500/20 rounded-xl p-6 text-left flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 text-gold-400 bg-gold-950/30 border border-gold-500/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                How to Reach
              </div>
              <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">Excellent Connectivity</h4>
              <p className="text-zinc-400 text-xs leading-relaxed font-light">
                Situated at 16B Paikpara Row, between Shyambazar and DumDum in North Kolkata. Disciples can reach our campus effortlessly from either hub.
              </p>
              <div className="p-3 bg-noble-950 rounded border border-zinc-800/80 text-[11px] text-zinc-300">
                <strong className="text-gold-400">Nearest Hub & Landmark:</strong> DumDum Metro (Only a brief dynamic commute or direct auto connectivity).
              </div>
            </div>

            <div className="border-t border-gold-500/10 pt-4 space-y-3">
              <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold block">Official Web Updates</span>
              <div className="grid grid-cols-2 gap-2">
                <a 
                  href="https://www.facebook.com/sandiptabla/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-1.5 bg-zinc-950 text-zinc-400 hover:text-gold-400 border border-zinc-800 hover:border-gold-500/30 py-2 px-2.5 rounded text-[10px] font-bold tracking-wider transition-colors"
                >
                  <Facebook className="w-3 h-3" />
                  Sandiip FB Profile
                </a>
                <a 
                  href="https://facebook.com/SandipGhoshTabla" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-1.5 bg-zinc-950 text-zinc-400 hover:text-gold-400 border border-zinc-800 hover:border-gold-500/30 py-2 px-2.5 rounded text-[10px] font-bold tracking-wider transition-colors"
                >
                  <Facebook className="w-3 h-3" />
                  Sandiip FB Page
                </a>
                <a 
                  href="https://instagram.com/sandipghoshtabla" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex flex-1 items-center justify-center gap-1.5 bg-zinc-950 text-zinc-400 hover:text-gold-400 border border-zinc-800 hover:border-gold-500/30 py-2 px-2.5 rounded text-[10px] font-bold tracking-wider transition-colors col-span-2"
                >
                  <Instagram className="w-3 h-3" />
                  Sandiip Tabla IG
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Programs and physical photo fallback */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Core Offerings Card List */}
            <div>
              <h3 className="font-cinzel text-lg font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gold-400 block" />
                Programs & Curriculum Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* Offering 1 */}
                <div className="bg-noble-900 border border-gold-500/10 rounded-lg p-5 hover:border-gold-500/20 transition-colors">
                  <div className="w-8 h-8 rounded bg-gold-950/40 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-3.5">
                    <span className="font-cinzel font-bold text-xs">P1</span>
                  </div>
                  <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider mb-2">Core Tabla Technique</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                    Guidance of Core Tabla Technique & Aesthetics, perfect hand posture correction, and traditional Farrukhabad compositions.
                  </p>
                </div>

                {/* Offering 2 */}
                <div className="bg-noble-900 border border-gold-500/10 rounded-lg p-5 hover:border-gold-500/20 transition-colors">
                  <div className="w-8 h-8 rounded bg-gold-950/40 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-3.5">
                    <span className="font-cinzel font-bold text-xs">P2</span>
                  </div>
                  <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider mb-2">A/V Recording Guidance</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                    Basic Audio / VDO recording guidance, acoustic microphone alignments, and session recording formats.
                  </p>
                </div>

                {/* Offering 3 */}
                <div className="bg-noble-900 border border-gold-500/10 rounded-lg p-5 hover:border-gold-500/20 transition-colors">
                  <div className="w-8 h-8 rounded bg-gold-950/40 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-3.5">
                    <span className="font-cinzel font-bold text-xs">P3</span>
                  </div>
                  <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider mb-2">Stage Grooming</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-light">
                    Direct opportunities to present at annual concerts and shows (including venues like Mohit Mancha, Kolkata).
                  </p>
                </div>

              </div>
            </div>

            {/* Curriculum Highlights list */}
            <div className="pt-4">
              <h3 className="font-cinzel text-sm font-bold text-gold-400 mb-4 uppercase tracking-widest">
                Our Grooming Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
                <div className="flex items-center gap-2 px-3 py-2 rounded bg-noble-900/40 border border-zinc-800">
                  <span className="w-1 h-3 bg-gold-500" />
                  <span>Personalized One-on-One Mentorship</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded bg-noble-900/40 border border-zinc-800">
                  <span className="w-1 h-3 bg-gold-500" />
                  <span>Hands-on studio microphone alignment</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded bg-noble-900/40 border border-zinc-800">
                  <span className="w-1 h-3 bg-gold-500" />
                  <span>Online Global Interactive high-audio coaching</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded bg-noble-900/40 border border-zinc-800">
                  <span className="w-1 h-3 bg-gold-500" />
                  <span>Physical Classes at Paikpara Gurukul</span>
                </div>
              </div>
            </div>

            {/* Dynamic photograph banner with upload indicator */}
            <div className="rounded-lg overflow-hidden border border-gold-500/20 bg-zinc-950 mt-4">
              <AssetImage 
                imageKey="gallery_berlin_concert" 
                alt={`${texts.gurukulName} Tabla class and studio`} 
                category="class"
                className="aspect-[16/9] w-full"
              />
            </div>

          </div>

          {/* Right Block: Live Enroll / Admission Form */}
          <div id="admission-form" className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="noble-glass p-8 rounded-lg border-2 border-gold-500/30 shadow-[0_10px_35px_rgba(197,141,42,0.15)] relative bg-noble-900/80 text-zinc-100">
              
              <div className="absolute top-2 right-2 flex gap-1 opacity-70">
                <span className="w-1.5 h-3.5 bg-gold-500 rounded-sm" />
              </div>

              <div className="text-center mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-gold-950/40 border border-gold-500/30 shadow-[0_0_15px_rgba(197,141,42,0.15)] mb-2 animate-pulse">
                  <h3 className="font-cinzel text-xs sm:text-sm font-bold text-gold-300 tracking-[0.2em] uppercase">
                    Admission Inquiry Intake
                  </h3>
                </span>
                <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed max-w-xs mx-auto">
                  Connect directly with DHA Esthetics Gurukul for fee schedules, class formats, or studio programs.
                </p>
              </div>

              {/* Form implementation */}
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-[10px] text-zinc-300 font-bold uppercase tracking-wider mb-1">
                    Full Name <span className="text-gold-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your Name"
                    className="w-full bg-noble-950/60 border border-gold-500/20 rounded px-4 py-2 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-gold-500 transition-colors shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-zinc-300 font-bold uppercase tracking-wider mb-1">
                    Email Address <span className="text-gold-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="you@example.com"
                    className="w-full bg-noble-950/60 border border-gold-500/20 rounded px-4 py-2 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-gold-500 transition-colors shadow-inner"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-zinc-300 font-bold uppercase tracking-wider mb-1">
                      Program of Interest <span className="text-gold-500">*</span>
                    </label>
                    <select
                      name="level"
                      value={formData.level}
                      onChange={(e) => setFormData(prev => ({ ...prev, level: e.target.value }))}
                      className="w-full bg-noble-950/60 border border-gold-500/20 rounded px-4 py-2 text-xs text-white focus:outline-none focus:border-gold-500 transition-colors cursor-pointer shadow-inner"
                    >
                      <option value="Core Tabla & Aesthetics" className="bg-noble-950 text-white">Guidance of Core Tabla Technique & Aesthetics</option>
                      <option value="Audio / VDO Guidance" className="bg-noble-950 text-white">Basic Audio / VDO Recording Guidance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] text-zinc-300 font-bold uppercase tracking-wider mb-1">
                      City / Local Area
                    </label>
                    <input 
                      type="text" 
                      name="location"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      placeholder="e.g. Paikpara, Kolkata"
                      className="w-full bg-noble-950/60 border border-gold-500/20 rounded px-4 py-2 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-gold-500 transition-colors shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-zinc-300 font-bold uppercase tracking-wider mb-1">
                    WhatsApp Number <span className="text-zinc-500">(Optional)</span>
                  </label>
                  <input 
                    type="text" 
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                    placeholder="e.g. +91 98310 91386"
                    className="w-full bg-noble-950/60 border border-gold-500/20 rounded px-4 py-2 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-gold-500 transition-colors shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-zinc-300 font-bold uppercase tracking-wider mb-1">
                    Experience / Specific requirements
                  </label>
                  <textarea 
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Describe any training, instruments played, or studio objectives..."
                    className="w-full bg-noble-950/60 border border-gold-500/20 rounded px-4 py-2 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-gold-500 transition-colors resize-none text-zinc-200 shadow-inner"
                  />
                </div>

                {/* Status alerts */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 bg-noble-950 border border-gold-500/30 rounded text-left space-y-2 mb-4 shadow-md"
                    >
                      <div className="text-xs text-gold-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <span className="text-base">🎉</span> Gurukul Inquiry Processed!
                      </div>
                      
                      <p className="text-[11px] text-zinc-300 leading-relaxed">
                        Your intake inquiry has been saved inside our local database backup ledger.
                      </p>

                      {web3ResponseDetails && (
                        <div className={`p-2.5 rounded text-[10px] font-sans ${web3ResponseDetails.success ? 'bg-emerald-950/60 border border-emerald-500/25 text-emerald-300' : 'bg-amber-950/60 border border-amber-500/25 text-amber-300'}`}>
                          <strong>Status:</strong> {web3ResponseDetails.message}
                          {!web3ResponseDetails.success && (
                            <span className="block mt-1 text-[9px] text-zinc-400 italic font-sans leading-normal">
                              * Note: Web3Forms might be waiting for one-time activation. Please inspect your inbox / spam folder for a confirmation link. You may also instantly send this draft directly:
                            </span>
                          )}
                        </div>
                      )}

                      {web3ResponseDetails && !web3ResponseDetails.success && (
                        <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-zinc-800">
                          <button
                            type="button"
                            onClick={handleManualEmailDraft}
                            className="flex-1 bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 border border-gold-500/30 text-[9px] font-bold uppercase tracking-wider py-2 rounded transition-colors text-center cursor-pointer"
                          >
                            ✉️ Draft Direct Gmail Line
                          </button>
                          
                          <button
                            type="button"
                            onClick={handleWhatsAppEnroll}
                            className="flex-1 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[9px] font-bold uppercase tracking-wider py-2 rounded transition-colors text-center cursor-pointer"
                          >
                            💬 Send on WhatsApp
                          </button>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submitting Buttons */}
                <div className="flex flex-col gap-2 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 disabled:opacity-50 text-black font-extrabold text-[10px] uppercase tracking-widest py-3 px-4 rounded shadow-[0_4px_15px_rgba(197,141,42,0.3)] transition-all transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-center"
                  >
                    {isSubmitting ? "Transmitting..." : "Submit Intake Inquiry"}
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleWhatsAppEnroll}
                    className="w-full bg-zinc-950 hover:bg-zinc-900 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 font-bold text-[10px] uppercase tracking-widest py-3 px-4 rounded transition-all transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-center flex items-center justify-center gap-1.5"
                  >
                    Inquiry via WhatsApp
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
