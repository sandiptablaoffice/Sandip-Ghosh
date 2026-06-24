import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, BookOpen, GraduationCap, Sparkles, User, Users } from 'lucide-react';
import { aboutContent } from '../data/portfolioData';
import AssetImage from './AssetImage';

export default function About() {
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://sandipghoshtabla.com';

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-noble-950">
      {/* SEO Meta Bundle and Multi-Entity Structured Data */}
      <Helmet>
        <title>Sandip Ghosh | Eminent Tabla Player, Artist & Educator</title>
        <meta 
          name="description" 
          content="Official site of Sandip Ghosh, eminent Farrukhabad Gharana Tabla player, educator, and premier accompanist to Vidushi Kaushiki Chakraborty." 
        />
        <meta 
          name="keywords" 
          content="Sandip Ghosh Tabla, Tabla Player, Farrukhabad Gharana, Visva Bharati, Sandip Ghosh Tabla Artist, Pt. Anindo Chatterjee, Vidushi Kaushiki Chakraborty, Indian Classical Music, Hindustani Percussion" 
        />
        <link rel="canonical" href={currentOrigin} />
        
        {/* Advanced Schema.org structured data (JSON-LD) for Search Engine Rich Snippets & Knowledge Graph integration */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": `${currentOrigin}/#person`,
                "name": "Sandip Ghosh",
                "alternateName": ["Sandiip Kr Ghosh", "Sandip Ghosh Tabla", "Sandip Ghosh Tabla Artist"],
                "description": "Sandip Ghosh is an internationally acclaimed ICCR-empanelled Tabla Artist, senior scholar of the Farrukhabad Gharana style, and Assistant Professor of Tabla & Pakhawaj at Sangit Bhavana, Visva-Bharati University.",
                "image": `${currentOrigin}/assets/sandip_ghosh_about.jpg`,
                "jobTitle": "Tabla Player & Indian Classical Music Educator",
                "worksFor": {
                  "@type": "EducationalOrganization",
                  "name": "Sangit Bhavana, Visva-Bharati University",
                  "alternateName": "Visva-Bharati University",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Santiniketan",
                    "addressRegion": "West Bengal",
                    "addressCountry": "India"
                  }
                },
                "alumniOf": {
                  "@type": "EducationalOrganization",
                  "name": "Visva-Bharati University"
                },
                "knowsAbout": [
                  "Tabla Player",
                  "Farrukhabad Gharana",
                  "Indian Classical Music",
                  "Hindustani Classical Rhythm",
                  "Laya and Taal",
                  "Pakhawaj Solos",
                  "Vocal Accompaniment"
                ],
                "teacher": {
                  "@type": "Person",
                  "@id": `${currentOrigin}/#anindochatterjee`,
                  "name": "Pandit Anindo Chatterjee",
                  "jobTitle": "Tabla Maestro",
                  "description": "Regarded as one of the most accomplished and versatile Tabla maestros of the modern age. A premier disciple of Pandit Jnan Prakash Ghosh."
                },
                "colleague": [
                  {
                    "@type": "Person",
                    "@id": `${currentOrigin}/#kaushikichakraborty`,
                    "name": "Vidushi Kaushiki Chakraborty",
                    "jobTitle": "Indian Classical Vocalist",
                    "description": "A globally renowned Indian classical vocalist of the Patiala Gharana. Daughter and disciple of Pt. Ajoy Chakraborty."
                  }
                ],
                "url": currentOrigin
              },
              {
                "@type": "MusicGroup",
                "@id": `${currentOrigin}/#musicgroup`,
                "name": "Sandip Ghosh Tabla Ensemble",
                "genre": "Indian Classical Music",
                "member": [
                  {
                    "@type": "Person",
                    "name": "Sandip Ghosh"
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Abstract gold decorative circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full border border-gold-500/5 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Semantic Picture Frame */}
          <div className="lg:col-span-5 relative lg:sticky lg:top-24">
            <div className="relative group">
              {/* Back Dropdown glowing border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-gold-700/20 to-gold-500/20 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
              
              {/* Image Frame */}
              <div className="relative rounded-lg overflow-hidden border border-gold-500/30 p-2 bg-noble-900 shadow-2xl">
                <AssetImage 
                  imageKey="sandip_ghosh_about" 
                  alt="Sandip Ghosh - Eminent Indian Classical Tabla Artist and Educator of the Farrukhabad Gharana" 
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

          {/* Right Column: High-Prominence Semantic Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <header className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-gold-500" />
              <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Biography & Lineage</span>
            </header>

            {/* Singular High-Prominence H1 for SEO Optimization */}
            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide mb-8 leading-tight">
              Sandip Ghosh Tabla Artist:<br />
              <span className="text-gold-400">A Legacy of Farrukhabad Gharana</span>
            </h1>

            {/* Direct Bio Statement & Authoritative Credentials */}
            <div className="font-serif text-lg sm:text-xl text-zinc-200 tracking-wide font-medium leading-relaxed italic border-l-2 border-gold-500/40 pl-4 mb-6">
              <p>
                Sandip Ghosh is a highly acclaimed Indian classical tabla player and educator of the Farrukhabad Gharana. 
                Initiated under Pt. Gobinda Bose, he spent over 18 years under the strict tutelage of internationally renowned maestro Pt. Anindo Chatterjee. 
                Sandip is widely celebrated as one of the finest and most trusted Tabla accompanists for the legendary vocalist Vidushi Kaushiki Chakraborty, accompanying her on major national and international concert tours. 
                A recipient of the President's Award and Gold Medalist in South Asian Music Festival, he serves as an Assistant Professor of Tabla and Pakhawaj at Sangit Bhavana, Visva Bharati (Santiniketan).
              </p>
            </div>

            {/* Structured Story Paragraphs */}
            <div className="space-y-4 text-zinc-400 text-sm leading-relaxed font-light">
              {aboutContent.storyParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Credential Items: Structured Semantic List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-gold-500/10 list-none pl-0">
              <li className="flex items-start gap-3">
                <div className="p-2 rounded bg-gold-950/20 border border-gold-500/20 text-gold-400 mt-0.5 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cinzel text-xs font-bold text-zinc-200 tracking-wider mb-1">Gharana Pedigree & Taleem</h3>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Over 18 years of strict, intense training (ganda-bandh) under the legendary Tabla Maestro <strong className="text-zinc-200">Pt. Anindo Chatterjee</strong>, preserving the pristine authenticity of the Farrukhabad Gharana.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-2 rounded bg-gold-950/20 border border-gold-500/20 text-gold-400 mt-0.5 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cinzel text-xs font-bold text-zinc-200 tracking-wider mb-1">Academic Distinction</h3>
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Serving as <strong className="text-zinc-200">Assistant Professor of Tabla & Pakhawaj</strong> at Sangit Bhavana, <strong className="text-zinc-200">Visva-Bharati University</strong> (Santiniketan), guiding the next generation of classical percussionists.
                  </p>
                </div>
              </li>
            </ul>

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

        {/* Dynamic & Comprehensive Section for Guru & Lead Collaborator (Knowledge Graph Multi-Entity Cards) */}
        <div className="mt-20 pt-16 border-t border-gold-500/15">
          <header className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-cinzel text-xs font-bold text-gold-400 tracking-[0.25em] uppercase block mb-3">Distinguished Associations</span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-semibold text-white tracking-wide">
              The Lineage & Global Alliances
            </h2>
            <div className="h-[1px] w-12 bg-gold-500 mx-auto mt-4" />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Guru Entity: Pt. Anindo Chatterjee Card */}
            <article className="p-6 sm:p-8 rounded-xl bg-noble-900 border border-gold-500/10 flex flex-col justify-between hover:border-gold-500/30 transition duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl group-hover:bg-gold-500/10 transition duration-300 pointer-events-none" />
              <div>
                <div className="flex items-center gap-3 mb-4 text-gold-400">
                  <User className="w-5 h-5 shrink-0" />
                  <span className="font-cinzel text-xs font-bold tracking-widest uppercase">The Lineage & Guru</span>
                </div>
                <h3 className="font-cinzel text-xl font-bold text-white mb-2 tracking-wide">
                  Pandit Anindo Chatterjee
                </h3>
                <span className="text-xs text-gold-400/80 font-serif italic block mb-4">Legendary Tabla Maestro & Scholar</span>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Regarded as one of the most accomplished and versatile Tabla maestros of the modern age. 
                  A premier disciple of Pandit Jnan Prakash Ghosh, he was the first-ever tabla player to perform in the House of Commons (1990). 
                  Sandip Ghosh spent over 18 years under his direct tutelage, acquiring and absorbing extensive classical rhythms and advanced Farrukhabad Gharana techniques.
                </p>
              </div>
              <div className="pt-4 border-t border-gold-500/5 flex items-center justify-between text-[11px] text-zinc-500">
                <span>Gharana: Farrukhabad</span>
                <span>Tutelage: 18+ Years</span>
              </div>
            </article>

            {/* Vocalist Entity: Vidushi Kaushiki Chakraborty Card */}
            <article className="p-6 sm:p-8 rounded-xl bg-noble-900 border border-gold-500/10 flex flex-col justify-between hover:border-gold-500/30 transition duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl group-hover:bg-gold-500/10 transition duration-300 pointer-events-none" />
              <div>
                <div className="flex items-center gap-3 mb-4 text-gold-400">
                  <Users className="w-5 h-5 shrink-0" />
                  <span className="font-cinzel text-xs font-bold tracking-widest uppercase">Elite Concert Alliance</span>
                </div>
                <h3 className="font-cinzel text-xl font-bold text-white mb-2 tracking-wide">
                  Vidushi Kaushiki Chakraborty
                </h3>
                <span className="text-xs text-gold-400/80 font-serif italic block mb-4">Globally Renowned Classical Vocalist</span>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  A globally renowned Indian classical vocalist of the Patiala Gharana. Daughter and disciple of Pt. Ajoy Chakraborty, she is a trailblazer of Hindustani vocal music, performing at prestigious venues worldwide like Carnegie Hall and the Royal Albert Hall. 
                  Sandip Ghosh is widely celebrated as one of her finest and most trusted Tabla accompanists for major global concerts and tours.
                </p>
              </div>
              <div className="pt-4 border-t border-gold-500/5 flex items-center justify-between text-[11px] text-zinc-500">
                <span>Gharana: Patiala</span>
                <span>Alliance: Lead Accompanist</span>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  );
}
