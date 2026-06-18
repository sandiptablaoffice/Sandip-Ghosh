import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Quote, Sparkles, Radio, Globe, HeartHandshake, ArrowRight } from 'lucide-react';
import { collaborations, internationalProjects } from '../data/portfolioData';
import AssetImage from './AssetImage';

export default function Collaborations() {
  const [activeTab, setActiveTab] = useState<'classical' | 'international'>('classical');

  return (
    <section id="collaborations" className="py-24 relative overflow-hidden bg-noble-950">
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-950/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-gold-500" />
            <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Alliances</span>
            <span className="h-[1px] w-6 bg-gold-500" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Artistic Collaborations
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mt-4 font-light">
            Merging deep classical streams and world fusion horizons, shaping a shared dialogue across percussive strings and winds.
          </p>

          {/* Luxury quote block */}
          <div className="mt-8 bg-gold-950/10 border border-gold-400/20 px-8 py-4 rounded-lg inline-flex items-center gap-3 max-w-xl shadow-[0_4px_15px_rgba(197,141,42,0.05)]">
            <Quote className="w-5 h-5 text-gold-400 shrink-0" />
            <p className="font-serif italic text-sm text-gold-200 text-left font-medium leading-relaxed">
              &ldquo;Sharing the stage with some of the finest musicians of our time.&rdquo;
            </p>
          </div>
        </div>

        {/* Toggle Switch Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-noble-900 border border-gold-500/10 p-1.5 rounded-full flex gap-1 shadow-lg">
            <button
              onClick={() => setActiveTab('classical')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeTab === 'classical'
                  ? 'bg-gold-500 text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              Classical Masters
            </button>
            <button
              onClick={() => setActiveTab('international')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeTab === 'international'
                  ? 'bg-gold-500 text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Globe className="w-4 h-4" />
              International Projects
            </button>
          </div>
        </div>

        {/* Swipe guide indicator on mobile */}
        <div className="flex sm:hidden items-center justify-center gap-1.5 text-gold-400 text-[11px] font-bold uppercase tracking-widest mb-6 animate-pulse">
          <span>Swipe to explore collaborations</span>
          <span className="text-sm">→</span>
        </div>

        {/* Toggleable Content Views */}
        <div>
          {activeTab === 'classical' ? (
            /* Tab A: Classical Maestros list with larger, prominent custom pictures */
            <div className="flex overflow-x-auto pb-4 gap-6 snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-x-visible sm:pb-0">
              {collaborations.map((collab) => (
                <div
                  key={collab.id}
                  className="bg-noble-900 rounded-xl border border-gold-500/10 flex flex-col hover:border-gold-500/35 hover:shadow-[0_8px_30px_rgba(197,141,42,0.08)] transition-all duration-500 relative group overflow-hidden h-full w-[280px] xs:w-[320px] shrink-0 snap-center sm:w-auto sm:shrink"
                >
                  {/* Aspect-square Rectangular high-fidelity portrait */}
                  <div className="aspect-square relative overflow-hidden bg-noble-950 border-b border-gold-500/10">
                    <AssetImage 
                      imageKey={`collab_master_${collab.id}`}
                      alt={collab.artistName}
                      category="master"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Artistic gradient mesh */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-noble-950 via-noble-950/40 to-transparent pointer-events-none" />
                  </div>

                  {/* Text details container */}
                  <div className="p-6 flex flex-col text-left bg-gradient-to-t from-noble-900 to-noble-90/50">
                    <span className="font-cinzel text-base sm:text-lg font-bold text-zinc-100 tracking-wide group-hover:text-gold-300 transition-colors">
                      {collab.artistName}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-gold-400 font-semibold uppercase tracking-widest mt-1">
                      {collab.instrument}
                    </span>
                    <div className="border-t border-gold-500/10 pt-3 mt-3">
                      <span className="text-zinc-400 text-xs font-light leading-relaxed">
                        {collab.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Special beautiful card for 'And Many More...' */}
              <div className="bg-noble-900/60 rounded-xl border border-gold-500/15 p-8 flex flex-col justify-between hover:border-gold-500/35 hover:shadow-[0_8px_30px_rgba(197,141,42,0.08)] transition-all duration-500 relative group overflow-hidden h-full min-h-[300px] w-[280px] xs:w-[320px] shrink-0 snap-center sm:w-auto sm:shrink">
                <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-gold-500/5 rounded-full pointer-events-none filter blur-xl" />
                <div className="absolute -left-6 -top-6 w-32 h-32 bg-gold-500/5 rounded-full pointer-events-none" />

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gold-950/50 border border-gold-500/30 flex items-center justify-center text-gold-400">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                  </div>
                  <h4 className="font-cinzel text-xl font-bold text-white tracking-widest">
                    And Many More...
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    Sandiip has accompanied and performed alongside numerous iconic vocalists, instrumentalists, and classical legends across major arenas both in India and overseas.
                  </p>
                </div>

                <div className="border-t border-gold-500/10 pt-6 mt-6">
                  <span className="text-[10px] sm:text-[11px] text-gold-505 font-bold uppercase tracking-widest block mb-1">
                    500+ Concert Stages
                  </span>
                  <p className="text-zinc-500 text-[11px] font-light italic leading-relaxed">
                    Including various celebrated gharana masters, national-level artists, and contemporary experimental fusion curators.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Tab B: Cross Cultural International Projects */
            <div className="flex overflow-x-auto pb-4 gap-6 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-x-visible md:pb-0">
              {internationalProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="noble-glass p-8 rounded-lg text-left flex flex-col justify-between group h-full relative w-[280px] xs:w-[320px] shrink-0 snap-center md:w-auto md:shrink"
                >
                  {/* Subtle water-ring layout decorator */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gold-500/5 rounded-bl-full pointer-events-none" />

                  <div>
                    {/* Location Badge */}
                    <span className="inline-flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-widest text-gold-400 bg-gold-950/30 border border-gold-500/15 rounded-full px-3 py-1 mb-4 select-none">
                      <Sparkles className="w-3 h-3 animate-pulse" />
                      {proj.origin}
                    </span>

                    {/* Title */}
                    <h4 className="font-cinzel text-lg font-bold text-white tracking-wide group-hover:text-gold-300 transition-colors">
                      {proj.projectName}
                    </h4>

                    {/* Main Description */}
                    <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mt-3 line-clamp-3">
                      {proj.description}
                    </p>
                  </div>

                  {/* Inner Details */}
                  <div className="border-t border-gold-500/15 pt-4 mt-6">
                    <h5 className="font-cinzel text-[10px] font-bold text-gold-400 uppercase tracking-widest mb-1">
                      Project Dialogue
                    </h5>
                    <p className="text-zinc-500 text-[11px] leading-relaxed italic">
                      {proj.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
