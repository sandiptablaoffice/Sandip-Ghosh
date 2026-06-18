import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, GraduationCap, Flame, Disc } from 'lucide-react';
import { aboutContent } from '../data/portfolioData';
import AssetImage from './AssetImage';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-noble-950">
      
      {/* Abstract gold decorative circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full border border-gold-500/5 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Image frame using client photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Back Dropdown glowing border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-gold-700/20 to-gold-500/20 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
              
              {/* Image Frame */}
              <div className="relative rounded-lg overflow-hidden border border-gold-500/30 p-2 bg-noble-900 shadow-2xl">
                <AssetImage 
                  imageKey="sandip_ghosh_about" 
                  alt="Sandip Ghosh explaining hand posture" 
                  category="profile"
                  className="aspect-[3/4] w-full rounded"
                />
              </div>

              {/* Decorative classical label */}
              <div className="absolute -bottom-6 -right-4 bg-noble-950 border border-gold-500/30 px-5 py-3 rounded shadow-lg flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-gold-500 rounded-full animate-pulse" />
                <div className="flex flex-col text-left">
                  <span className="font-cinzel text-[10px] text-gold-400 tracking-wider font-bold">Farrukhabad Style</span>
                  <span className="text-[9px] text-zinc-400 font-medium">Traditional Baaj</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Content & Storytelling */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-gold-500" />
              <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Biography</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide mb-8">
              A Legacy Inherited,<br />
              <span className="text-gold-400">A Vision Shares</span>
            </h2>

            {/* Direct Bio Statement */}
            <p className="font-serif text-lg sm:text-xl text-zinc-200 tracking-wide font-medium leading-relaxed italic border-l-2 border-gold-500/40 pl-4 mb-6">
              {aboutContent.bio}
            </p>

            {/* Story Paragraphs */}
            <div className="space-y-4 text-zinc-400 text-sm leading-relaxed font-light">
              {aboutContent.storyParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Credential Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-gold-500/10">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-gold-950/20 border border-gold-500/20 text-gold-400 mt-0.5">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-zinc-200 tracking-wider mb-1">Gharana Pedigree</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Advanced training under Pt. Gobinda Bose and Pt. Anindo Chatterjee.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-gold-950/20 border border-gold-500/20 text-gold-400 mt-0.5">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-zinc-200 tracking-wider mb-1">Gurukul Mentorship</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Director of DHA Esthetics Music Gurukul, guiding students in classical rhythm.
                  </p>
                </div>
              </div>
            </div>

            {/* Numerical Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {aboutContent.stats.map((stat, i) => (
                <div key={i} className="bg-noble-900 border border-gold-500/10 p-4 rounded-lg text-center shadow-md">
                  <span className="block font-cinzel text-2xl md:text-3xl font-extrabold text-gold-400 mb-1">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] text-zinc-400 uppercase tracking-widest font-semibold leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
