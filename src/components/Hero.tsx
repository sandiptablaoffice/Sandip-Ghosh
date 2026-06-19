import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, GraduationCap, ChevronDown } from 'lucide-react';
import { getDynamicTextValue } from '../utils/dynamicText';
import AssetImage from './AssetImage';

const HERO_SLIDES = [
  'gallery_main',
  'whatsapp_6', // With Ustad Zakir Hussain (2nd position)
  'sandip_ghosh_hero',
  'whatsapp_12', // With Two Gods
  'whatsapp_13', // With Legendary Shivamani
  'whatsapp_15', // With Pt. Ajoy Chakraborty & Ustad Rashid Khan
  'sandip_ghosh_hero_2',
  'sandip_ghosh_hero_3',
  'sandip_ghosh_hero_4',
  'sandip_ghosh_hero_5',
  'sandip_ghosh_hero_6',
  'sandip_ghosh_hero_7',
  'sandip_ghosh_hero_8',
  'sandip_ghosh_hero_9'
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [texts, setTexts] = useState({
    name: getDynamicTextValue('name'),
    subTitle1: getDynamicTextValue('subTitle1'),
    subTitle2: getDynamicTextValue('subTitle2'),
    tagline: getDynamicTextValue('tagline'),
    alternativeTagline: getDynamicTextValue('alternativeTagline'),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000); // Transitions every 5 seconds for modern elegance
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleUpdate = () => {
      setTexts({
        name: getDynamicTextValue('name'),
        subTitle1: getDynamicTextValue('subTitle1'),
        subTitle2: getDynamicTextValue('subTitle2'),
        tagline: getDynamicTextValue('tagline'),
        alternativeTagline: getDynamicTextValue('alternativeTagline'),
      });
    };
    window.addEventListener('sg-text-cache-updated', handleUpdate);
    return () => window.removeEventListener('sg-text-cache-updated', handleUpdate);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const targetPosition = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* 1. Background Image Slideshow with smooth cross-fade translation */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <AssetImage 
              imageKey={HERO_SLIDES[currentSlide]} 
              alt={`${texts.name} Concert Portrait slide ${currentSlide + 1}`}
              category="hero"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Cinematic darkened overlays for optimal text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-noble-950 via-noble-950/70 to-black/85 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-radial-gradient(ellipse at center, transparent 20%, #0d0c0a 92%) pointer-events-none z-10" />
      </div>

      {/* 2. Classical Music Floating Motif Overlay (Swaras / microtonal circles) */}
      <div className="absolute inset-x-0 bottom-0 h-40 opacity-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold-900/40 via-transparent to-transparent pointer-events-none" />

      {/* 3. Hero content content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-8 text-center pt-10 pb-20 flex flex-col items-center">
        
        {/* Classy mini badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 border border-gold-500/25 bg-gold-950/20 px-4 py-1.5 rounded-full mb-6 shadow-[0_0_15px_rgba(197,141,42,0.1)]"
        >
          <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-ping" />
          <span className="font-sans text-[10px] md:text-xs font-bold text-gold-300 tracking-[0.25em] uppercase">
            ICCR Empanelled Tabla Artist
          </span>
        </motion.div>

        {/* Master Display Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-cinzel text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-wider leading-none select-none"
        >
          {texts.name}
        </motion.h1>

        {/* Luxurious Decorative Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
          className="w-40 sm:w-64 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent my-6"
        />

        {/* Affiliations / Heritage */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-2 mt-2 max-w-2xl px-4"
        >
          <p className="font-serif italic text-lg sm:text-2xl text-gold-200/90 font-medium tracking-wide">
            &ldquo;{texts.subTitle1}&rdquo;
          </p>
          <p className="font-sans text-xs sm:text-sm text-zinc-300 font-medium tracking-widest uppercase mt-4">
            {texts.subTitle2}
          </p>
        </motion.div>

        {/* Tagline Showcase */}
        <motion.p 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 font-cinzel text-sm sm:text-lg text-gold-400 font-semibold tracking-[0.3em] uppercase max-w-4xl text-center leading-relaxed"
        >
          &mdash;&nbsp; {texts.tagline} &nbsp;&mdash;
          <span className="block font-sans text-[11px] md:text-xs text-zinc-400 font-normal tracking-[0.1em] mt-2 italic">
            &ldquo;{texts.alternativeTagline}&rdquo;
          </span>
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 mt-12 w-full max-w-md"
        >
          {/* Main CTA */}
          <button
            onClick={() => scrollToSection('contact')}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-black font-extrabold text-xs tracking-widest uppercase py-4 px-6 rounded-md shadow-[0_4px_15px_rgba(197,141,42,0.4)] transition-all hover:shadow-[0_4px_25px_rgba(197,141,42,0.6)] cursor-pointer hover:scale-103 active:scale-98"
          >
            <Calendar className="w-4 h-4" />
            Book Performance
          </button>

          {/* Secondary Classes CTA */}
          <button
            onClick={() => scrollToSection('classes')}
            className="flex-1 flex items-center justify-center gap-2 bg-zinc-950/80 hover:bg-zinc-900 border border-gold-500/30 hover:border-gold-500 text-gold-300 hover:text-white font-extrabold text-xs tracking-widest uppercase py-4 px-6 rounded-md transition-all cursor-pointer hover:scale-103 active:scale-98"
          >
            <GraduationCap className="w-4 h-4" />
            Join Gurukul Classes
          </button>
        </motion.div>

        {/* Slideshow Index Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex gap-2 items-center justify-center bg-black/40 backdrop-blur-md px-3.5 py-1.5 border border-gold-500/10 rounded-full mt-8 z-25 pointer-events-auto"
        >
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide 
                  ? 'bg-gold-400 w-4 shadow-[0_0_8px_rgba(197,141,42,0.6)]' 
                  : 'bg-white/20 hover:bg-white/55'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-6 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-medium">Read Biography</span>
          <ChevronDown className="w-4 h-4 text-gold-500 animate-bounce" />
        </motion.div>

      </div>
    </section>
  );
}
