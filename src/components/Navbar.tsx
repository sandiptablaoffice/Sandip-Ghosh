import React, { useState, useEffect } from 'react';
import { Menu, X, Sliders, Music, Award, HelpCircle } from 'lucide-react';
import { navigationItems } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [logo, setLogo] = useState<string | null>(null);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    setLogo('/assets/logo.jpg');
    setLogoError(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active link detection
      const sections = navigationItems.map(item => item.href.substring(1));
      let currentSection = 'home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // height of fixed navbar
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-noble-950/95 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          
          {/* Logo / Title */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-950 overflow-hidden transition-all duration-300">
              {logo && !logoError ? (
                <img 
                  src={logo} 
                  alt="Sandiip Kr Ghosh Logo" 
                  className="w-full h-full object-cover" 
                  onError={() => setLogoError(true)}
                  referrerPolicy="no-referrer" 
                />
              ) : (
                <span className="font-cinzel text-base text-gold-400 font-bold transition-transform duration-350 group-hover:scale-110">SG</span>
              )}
            </div>
            <div className="flex flex-col text-left">
              <span className="font-cinzel text-sm font-semibold tracking-[0.16em] text-white group-hover:text-gold-300 transition-colors">
                SANDIIP KR GHOSH
              </span>
              <span className="text-[9px] font-medium tracking-widest text-gold-500/80 uppercase">
                Tabla Artist
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map(item => {
              const active = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    active 
                      ? 'text-gold-400 font-semibold bg-gold-950/20 border border-gold-500/20 shadow-[0_0_10px_rgba(197,141,42,0.1)]' 
                      : 'text-zinc-300 hover:text-gold-300 border border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

          </div>

          {/* Mobile Right Menu Toggles */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-gold-400 focus:outline-none p-2 rounded-lg cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`lg:hidden fixed inset-x-0 top-[70px] bg-noble-950/98 border-b border-gold-500/10 shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="flex flex-col gap-2 p-6">
            {navigationItems.map(item => {
              const active = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`w-full py-2.5 px-4 text-center text-xs font-semibold uppercase tracking-widest rounded-md border transition-all ${
                    active 
                      ? 'bg-gold-500 text-black border-gold-500 shadow-md font-bold' 
                      : 'text-zinc-300 hover:text-gold-400 border-transparent bg-zinc-900/50 hover:bg-zinc-900'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
