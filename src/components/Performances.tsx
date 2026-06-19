import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, MapPin, Landmark, Award, Volume2, Compass } from 'lucide-react';
import { globalPerformances } from '../data/portfolioData';

// Map countries to ISO 3166-1 alpha-2 codes for FlagCDN circular flags
const countryFlagCodes: Record<string, string> = {
  'USA': 'us',
  'Germany': 'de',
  'France': 'fr',
  'Singapore': 'sg',
  'Georgia': 'ge',
  'Canada': 'ca',
  'Belgium': 'be',
  'Sri Lanka': 'lk',
  'Oman': 'om',
  'Kuwait': 'kw',
  'Denmark': 'dk',
  'Italy': 'it',
  'UAE': 'ae',
  'United Kingdom': 'gb',
  'India': 'in',
  'Australia': 'au',
  'Austria': 'at',
  'Czech Republic': 'cz',
  'Scandinavia': 'se',
  'Greece': 'gr',
  'Russia': 'ru',
  'Qatar': 'qa'
};

const allCountries = [
  { name: 'USA', description: 'North American Stage Tour' },
  { name: 'Germany', description: 'European Classical Recital' },
  { name: 'France', description: 'Theatre de la Ville' },
  { name: 'Singapore', description: 'Esplanade Concert' },
  { name: 'Georgia', description: 'Tbilisi Academy Solo' },
  { name: 'Canada', description: 'Toronto Symphony Hall' },
  { name: 'Belgium', description: 'Brussels Rhythmic Meet' },
  { name: 'Sri Lanka', description: 'Colombo Music Festival' },
  { name: 'Oman', description: 'Muscat Cultural Center' },
  { name: 'Kuwait', description: 'National Theater' },
  { name: 'Denmark', description: 'Copenhagen Rhythmic Tour' },
  { name: 'Italy', description: 'Rome Accademia Recital' },
  { name: 'UAE', description: 'Dubai Classical Showcase' },
  { name: 'United Kingdom', description: 'Royal Albert Hall Recital' },
  { name: 'India', description: 'Sawai Gandharv / Dover Lane Recital' },
  { name: 'Australia', description: 'Sydney & Melbourne Recitals' },
  { name: 'Austria', description: 'Vienna Classical Showcase' },
  { name: 'Czech Republic', description: 'Prague Rhythm Fest' },
  { name: 'Scandinavia', description: 'Oslo & Stockholm Stage' },
  { name: 'Greece', description: 'Athens Cultural Festival' },
  { name: 'Russia', description: 'St. Petersburg Concerts' },
  { name: 'Qatar', description: 'Doha Cultural Exchange' }
];

// Grouping countries by region for an artistic filterable catalog
const regionGroups = [
  {
    region: 'All Global Stages',
    countries: globalPerformances.countries
  },
  {
    region: 'Europe & Russia',
    countries: ['Germany', 'France', 'United Kingdom', 'Belgium', 'Denmark', 'Italy', 'Austria', 'Czech Republic', 'Scandinavia', 'Greece', 'Russia']
  },
  {
    region: 'North America & Oceania',
    countries: ['USA', 'Canada', 'Australia']
  },
  {
    region: 'Asia & Middle East',
    countries: ['Singapore', 'Georgia', 'Sri Lanka', 'Oman', 'Kuwait', 'UAE', 'Qatar']
  }
];

export default function Performances() {
  const [selectedRegionIndex, setSelectedRegionIndex] = useState(0);
  const [isFestivalsExpanded, setIsFestivalsExpanded] = useState(false);

  const activeCountries = regionGroups[selectedRegionIndex].countries;

  // Filter selected region details and multiplex them to loop seamlessly across page widths
  const selectedDetails = allCountries.filter(c => activeCountries.includes(c.name));
  const multiplexRatio = Math.max(4, Math.ceil(24 / (selectedDetails.length || 1)));
  const ribbonItems = Array.from({ length: multiplexRatio }, () => selectedDetails).flat();

  return (
    <section id="performances" className="py-24 relative overflow-hidden bg-noble-900 border-b border-gold-500/10">
      
      {/* Dynamic Soundwave Ambient Background Pattern */}
      <div className="absolute inset-x-0 bottom-0 top-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `radial-gradient(ellipse at bottom, rgba(197, 141, 42, 0.4) 0%, transparent 70%)`
      }} />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-gold-500" />
            <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Performances</span>
            <span className="h-[1px] w-6 bg-gold-500" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Global Rhythm Showcase
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mt-4 font-light">
            Bringing the classical echoes of Indian Tabla to majestic concert venues, universities, and international auditoriums worldwide.
          </p>
        </div>

        {/* Part 1: Animated Interactive Countries Showcase */}
        <div className="mb-20">
          <h3 className="font-cinzel text-lg sm:text-xl font-bold text-gold-300 text-center tracking-wider mb-8 flex items-center justify-center gap-2">
            <Compass className="w-5 h-5 text-gold-400 animate-spin-slow" />
            Countries Toured & Represented
          </h3>

          {/* Dynamic Infinite Moving Flag Ribbon */}
          <div className="w-full overflow-hidden relative py-5 bg-noble-950/40 border-y border-gold-500/10 mb-8 select-none rounded-lg shadow-inner">
            {/* Left & Right ambient fade layers */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-noble-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-noble-900 to-transparent z-10 pointer-events-none" />

            <motion.div 
              className="flex gap-5 whitespace-nowrap w-max"
              animate={{ x: [0, -2200] }}
              transition={{
                ease: "linear",
                duration: 40,
                repeat: Infinity
              }}
              key={selectedRegionIndex} // Restart scroll timeline on tab filter for smoother UX
            >
              {ribbonItems.map((country, idx) => {
                const code = countryFlagCodes[country.name] || 'in';
                const flagUrl = `https://flagcdn.com/w160/${code}.png`;
                return (
                  <div 
                    key={`${country.name}-${idx}`} 
                    className="inline-flex items-center gap-3 bg-noble-900 border border-gold-500/10 px-5 py-2.5 rounded-full shadow-md hover:border-gold-500/30 transition-all pointer-events-none"
                  >
                    {/* Round flag */}
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-gold-500/20 shrink-0 shadow-inner bg-zinc-850 p-[1px]">
                      <img 
                        src={flagUrl} 
                        alt={`${country.name} Flag`} 
                        className="w-full h-full object-cover rounded-full"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="text-left">
                      <span className="font-cinzel text-[10px] font-bold text-white tracking-widest block uppercase">
                        {country.name}
                      </span>
                      <span className="text-[8px] text-zinc-500 font-medium tracking-wider block">
                        {country.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {regionGroups.map((group, index) => {
              const active = selectedRegionIndex === index;
              return (
                <button
                  key={group.region}
                  onClick={() => setSelectedRegionIndex(index)}
                  className={`px-4 py-2 text-xs font-medium uppercase tracking-widest rounded-full border cursor-pointer transition-all duration-300 ${
                    active 
                      ? 'bg-gold-500 text-black border-gold-500 font-bold shadow-[0_4px_12px_rgba(197,141,42,0.25)]' 
                      : 'bg-noble-950 text-zinc-400 border-gold-500/10 hover:border-gold-500/30 hover:text-white'
                  }`}
                >
                  {group.region} ({group.countries.length})
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
