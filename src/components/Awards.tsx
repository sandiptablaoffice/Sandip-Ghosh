import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Milestone, Sparkles } from 'lucide-react';
import { awardsData } from '../data/portfolioData';

export default function Awards() {
  return (
    <section id="awards" className="py-24 relative overflow-hidden bg-noble-900 border-t border-b border-gold-500/10">
      
      {/* Background vectors */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-950/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-gold-500" />
            <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Accomplishments</span>
            <span className="h-[1px] w-6 bg-gold-500" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Awards & Recognition
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mt-4 font-light">
            Distinguished honors bestowed by prestigious cultural ministries, music academies, and international festivals.
          </p>
        </div>

        {/* Awards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awardsData.map((award, index) => {
            return (
              <div 
                key={award.id}
                className="noble-glass p-6 md:p-8 rounded-xl border border-gold-500/10 text-left flex flex-col justify-between group overflow-hidden relative"
              >
                {/* Visual light glare effect */}
                <div className="absolute -inset-x-20 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent transform -skew-x-12 -translate-y-20 group-hover:translate-y-40 transition-transform duration-1000 ease-out" />

                <div>
                  {/* Top Header Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 rounded-lg bg-gold-950/40 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
                      <Award className="w-5 h-5" />
                    </div>
                    {/* Badge number */}
                    <span className="font-mono text-[10px] text-zinc-500 select-none">
                      #{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-cinzel text-base md:text-lg font-bold text-white tracking-wider mb-2 group-hover:text-gold-300 transition-colors leading-tight min-h-[50px] flex items-center">
                    {award.title}
                  </h3>

                  {/* Issuer details */}
                  <span className="block font-sans text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mb-4">
                    {award.issuer}
                  </span>
                </div>

                {/* Description */}
                <div className="border-t border-gold-500/10 pt-4 mt-2">
                  <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                    {award.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
