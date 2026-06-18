import React, { useState, useEffect } from 'react';
import { Phone, Mail, Instagram, ArrowUp, Music, Facebook, Youtube, Twitter } from 'lucide-react';
import { navigationItems } from '../data/portfolioData';

export default function Footer() {
  const [logo, setLogo] = useState<string | null>(null);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    setLogo('/assets/logo.jpg');
    setLogoError(false);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      const offset = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-noble-950 border-t border-gold-500/15 pt-20 pb-8 relative overflow-hidden select-none">
      
      {/* Background motif */}
      <div className="absolute inset-x-0 bottom-0 h-48 opacity-10 bg-[radial-gradient(ellipse_at_bottom,_rgba(197,141,42,0.3)_0%,_transparent_75%)] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-gold-500/10">
          
          {/* Col 1 Brand detail */}
          <div className="md:col-span-5 text-left space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-950 overflow-hidden">
                {logo && !logoError ? (
                  <img 
                    src={logo} 
                    alt="Sandiip Kr Ghosh Logo" 
                    className="w-full h-full object-cover" 
                    onError={() => setLogoError(true)}
                    referrerPolicy="no-referrer" 
                  />
                ) : (
                  <span className="font-cinzel text-base text-gold-400 font-bold">SG</span>
                )}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-cinzel text-sm font-semibold tracking-[0.16em] text-white">
                  SANDIIP KR GHOSH
                </span>
                <span className="text-[9px] font-medium tracking-widest text-gold-500/80 uppercase">
                  Tabla Artist & Mentor
                </span>
              </div>
            </div>

            <p className="font-serif italic text-zinc-300 text-sm max-w-sm leading-relaxed">
              &ldquo;Preserving Tradition. Inspiring Future Generations.&rdquo;
            </p>

            {/* Social channels */}
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="tel:+919831091386" 
                className="w-10 h-10 rounded-full bg-noble-900 border border-gold-500/10 flex items-center justify-center text-zinc-400 hover:text-gold-400 hover:border-gold-500 transition-colors cursor-pointer"
                title="Phone Desk"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a 
                href="mailto:sandiptablaoffice@gmail.com" 
                className="w-10 h-10 rounded-full bg-noble-900 border border-gold-500/10 flex items-center justify-center text-zinc-400 hover:text-gold-400 hover:border-gold-500 transition-colors cursor-pointer"
                title="Email Desk"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com/SandipGhoshTabla" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-noble-900 border border-gold-500/10 flex items-center justify-center text-zinc-400 hover:text-gold-400 hover:border-gold-500 transition-colors cursor-pointer"
                title="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com/@SandipGhoshTabla" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-noble-900 border border-gold-500/10 flex items-center justify-center text-zinc-400 hover:text-gold-400 hover:border-gold-500 transition-colors cursor-pointer"
                title="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com/BlastingHands" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-noble-900 border border-gold-500/10 flex items-center justify-center text-zinc-400 hover:text-gold-400 hover:border-gold-500 transition-colors cursor-pointer"
                title="Twitter / X Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/sandipghoshtabla" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-noble-900 border border-gold-500/10 flex items-center justify-center text-zinc-400 hover:text-gold-400 hover:border-gold-500 transition-colors cursor-pointer"
                title="Instagram Channel"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 Quick links navigator */}
          <div className="md:col-span-4 text-left">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-widest mb-6">
              Sitemap Navigator
            </h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              {navigationItems.map(item => (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-zinc-400 hover:text-gold-400 text-xs tracking-wider uppercase transition-colors cursor-pointer block"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 Gharana Heritage info */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-widest mb-2">
              Farrukhabad Baaj
            </h4>
            <div className="bg-noble-900 border border-gold-500/10 rounded p-4 text-[11px] text-zinc-400 leading-relaxed font-light">
              <span className="block font-cinzel text-[10px] font-bold text-gold-400 mb-1.5 uppercase">Authentic Lineage</span>
              Instructed under legendary Pandit Anindo Chatterjee. Preserving Peshkars, Kaidas, Relas, and traditional compositions of classical Indian heritage.
            </div>
          </div>

        </div>

        {/* Action Bottom copyright line */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-10">
          <div className="text-left text-zinc-500 text-xs">
            <p>&copy; {new Date().getFullYear()} Sandiip Kr Ghosh. All Rights Reserved.</p>
            <p className="text-[10px] text-zinc-650 mt-1 leading-tight">
              Designed as a premium, secure portfolio with zero unauthorized third-party trackers.
            </p>
          </div>

          {/* Return To Top Anchor */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-gold-400 text-[10px] uppercase font-bold tracking-widest transition-colors cursor-pointer group"
          >
            Back to summit
            <span className="p-2 rounded bg-noble-900 border border-gold-500/10 group-hover:border-gold-500 transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}
