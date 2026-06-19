import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MapPin, Sparkles, Landmark } from 'lucide-react';

interface FestivalData {
  name: string;
  location: string;
  legacy: string;
}

const festivalList: FestivalData[] = [
  {
    name: 'Dover Lane Music Conference',
    location: 'Kolkata, West Bengal',
    legacy: 'Est. 1952 (Over 70 Years of Classical Legacy)'
  },
  {
    name: 'Sawai Gandharv Sangeet Mahotsav',
    location: 'Pune, Maharashtra',
    legacy: 'Founded by Bharat Ratna Pt. Bhimsen Joshi'
  },
  {
    name: 'Saptak Music Festival',
    location: 'Ahmedabad, Gujarat',
    legacy: 'Inaugurated by Pandit Ravi Shankar'
  },
  {
    name: 'ITC Sangeet Sammelan',
    location: 'Kolkata, West Bengal',
    legacy: 'Supported by ITC Sangeet Research Academy'
  },
  {
    name: 'Shankarlal Music Festival',
    location: 'New Delhi',
    legacy: 'One of the Capital’s Oldest Classical Foundations'
  },
  {
    name: 'Ganga Mahotsav',
    location: 'Varanasi, Uttar Pradesh',
    legacy: 'Performances on the Legendary Ghats'
  },
  {
    name: 'Uttarpara Sangeet Chakra',
    location: 'Uttarpara, West Bengal',
    legacy: 'Historic 60+ Years Sammelan'
  },
  {
    name: 'Harivallabh Sangeet Sammelan',
    location: 'Jalandhar, Punjab',
    legacy: 'World’s Oldest Continuous Classical Music festival (Est. 1875)'
  },
  {
    name: 'Pt. Motiram Pt. Maniram Sangeet Samaroh',
    location: 'Hyderabad, Telangana',
    legacy: 'Organized by Pandit Jasraj in honor of his mentors'
  },
  {
    name: 'Tansen Music Festival',
    location: 'Gwalior, Madhya Pradesh',
    legacy: 'Dating back to the heritage of Miya Tansen’s tomb'
  },
  {
    name: 'Subah-e-Banaras',
    location: 'Assi Ghat, Varanasi',
    legacy: 'Spiritual morning musical sessions of pristine legacy'
  },
  {
    name: 'Sadgandharva Sangeet Mahotsav',
    location: 'Kolkata, West Bengal',
    legacy: 'Dedicated to pure Hindustani classical masterworks'
  },
  {
    name: 'Salt Lake Music Festival',
    location: 'Salt Lake City, Kolkata',
    legacy: 'An elite congregation of classical legends and percussionists'
  },
  {
    name: 'Nishagandhi Festival',
    location: 'Trivandrum, Kerala',
    legacy: 'A prestigious South Indian cultural and percussion hub'
  }
];

export default function Festivals() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide effect
  useEffect(() => {
    if (autoplay) {
      autoplayTimer.current = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [activeIndex, autoplay]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % festivalList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + festivalList.length) % festivalList.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false); // Pause autoplay temporarily on manual interaction
  };

  const currentFest = festivalList[activeIndex];

  return (
    <section id="festivals" className="py-16 relative overflow-hidden bg-zinc-950 border-b border-gold-500/10">
      
      {/* Decorative Golden Ambient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gold-600/5 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-[1px] w-6 bg-gold-500" />
            <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Prestigious Platforms</span>
            <span className="h-[1px] w-6 bg-gold-500" />
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide">
            Major Indian Music Festivals
          </h2>
        </div>

        {/* Medium-Sized Showcase Container */}
        <div 
          className="relative rounded-xl bg-gradient-to-br from-zinc-900 to-noble-950 border border-gold-500/15 p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
          id="festival-showcase-box"
        >
          
          {/* Subtle Graphic background watermark */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.03] pointer-events-none select-none flex items-center justify-end pr-6">
            <Landmark className="w-60 h-60 text-gold-500 stroke-[0.3]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -5 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="space-y-5 relative z-10"
            >
              {/* Main Title & Details stack */}
              <div className="space-y-3 pt-2">
                <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide leading-tight group-hover:text-gold-300 transition-colors">
                  {currentFest.name}
                </h3>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-zinc-400 font-sans text-xs">
                  {/* Location info */}
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span className="font-medium text-zinc-300">{currentFest.location}</span>
                  </div>

                  {/* Divider */}
                  <span className="hidden sm:inline text-gold-500/35">|</span>

                  {/* Legacy details */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Legacy:</span>
                    <span className="font-medium text-gold-300/95">{currentFest.legacy}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Bottom Interactive Nav Row (More compact) */}
          <div className="flex items-center justify-between gap-4 border-t border-gold-500/10 pt-5 mt-6 relative z-10">
            
            {/* Interactive Dot indicators */}
            <div className="flex gap-2 items-center">
              {festivalList.map((fest, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={fest.name}
                    onClick={() => handleDotClick(idx)}
                    title={fest.name}
                    className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? 'w-6 bg-gold-400 shadow-[0_0_6px_rgba(197,141,42,0.6)]' 
                        : 'w-1.5 bg-zinc-700 hover:bg-zinc-500'
                    }`}
                  />
                );
              })}
            </div>

            {/* Manual Left/Right Arrow Toggle Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full border border-gold-500/10 hover:border-gold-500/30 bg-zinc-950/60 hover:bg-zinc-900 text-gold-400 hover:text-white flex items-center justify-center cursor-pointer transition-all shadow-md group"
                title="Previous Festival"
                id="fest-prev"
              >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full border border-gold-500/10 hover:border-gold-500/30 bg-zinc-950/60 hover:bg-zinc-900 text-gold-400 hover:text-white flex items-center justify-center cursor-pointer transition-all shadow-md group"
                title="Next Festival"
                id="fest-next"
              >
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
