import React from 'react';
import { motion } from 'motion/react';
import { Award, Music, BookOpen, Globe, Star, ShieldCheck } from 'lucide-react';
import { timelineData } from '../data/portfolioData';

export default function Timeline() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'training':
        return <BookOpen className="w-4 h-4" />;
      case 'achievement':
        return <Award className="w-4 h-4" />;
      case 'teaching':
        return <Star className="w-4 h-4" />;
      case 'global':
        return <Globe className="w-4 h-4" />;
      default:
        return <Music className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-noble-950/70 border-t border-b border-gold-500/10">
      
      {/* Decorative vectors */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-900/5 blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-gold-500" />
            <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Milestones</span>
            <span className="h-[1px] w-6 bg-gold-500" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Musical Journey Timeline
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mt-4 font-light">
            Decades of tireless dedication to the art of Indian classical hand percussion, carrying forward centuries-old percussive heritage.
          </p>
        </div>

        {/* Timeline Line Grid */}
        <div className="relative max-w-4xl mx-auto mt-20">
          
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold-500/50 via-gold-500/20 to-transparent transform -translate-x-1/2 pointer-events-none" />

          {/* Timeline Nodes */}
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={item.id} 
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Circle Badge Point */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-noble-950 border border-gold-400/60 shadow-[0_0_12px_rgba(197,141,42,0.2)] flex items-center justify-center text-gold-400">
                      {getCategoryIcon(item.category)}
                    </div>
                  </div>

                  {/* Spacer Panel for alternate structure */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 mt-2 md:mt-0 text-left">
                    <div className="noble-glass p-6 md:p-8 rounded-lg border border-gold-500/10 relative transition-transform duration-300 hover:shadow-[0_8px_30px_rgba(197,141,42,0.08)]">
                      
                      {/* Floating Golden Corner Details */}
                      <div className="absolute top-2 right-2 flex items-center gap-1 opacity-50">
                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                      </div>

                      {/* Year badge */}
                      <span className="font-cinzel text-xs font-bold text-gold-400 tracking-wider uppercase block mb-2 bg-gold-950/30 border border-gold-500/20 rounded-full px-3 py-1 w-fit">
                        {item.year}
                      </span>

                      {/* Title */}
                      <h3 className="font-cinzel text-lg font-bold text-white tracking-wide mb-3">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                        {item.description}
                      </p>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
