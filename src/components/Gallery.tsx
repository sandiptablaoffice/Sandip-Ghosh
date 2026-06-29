import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye, Grid } from 'lucide-react';
import { defaultImages } from '../data/portfolioData';
import AssetImage from './AssetImage';

const getPhotoAspectClass = (key: string) => {
  const portraitKeys = [
    'sandip_ghosh_about',
    'sandip_ghosh_hero_3',
    'sandip_ghosh_hero_4',
    'sandip_ghosh_hero_6',
    'sandip_ghosh_hero_9'
  ];
  if (portraitKeys.includes(key)) {
    return 'aspect-[3/4]';
  }
  if (key === 'gallery_anindo_ji') {
    return 'aspect-square';
  }
  if (key === 'gallery_saptak') {
    return 'aspect-[3/2]';
  }
  if (key === 'gallery_berlin_concert') {
    return 'aspect-[16/9]';
  }
  return 'aspect-[4/3]';
};

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'profile' | 'performance' | 'class'>('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Close lightbox on Escape key down
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePhotoIndex(null);
      }
    };
    if (activePhotoIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePhotoIndex]);

  const displayedPhotos = defaultImages.filter(img => {
    if (filter === 'all') return true;
    return img.category === filter;
  });

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex === null) return;
    setActivePhotoIndex(prev => {
      if (prev === null) return null;
      return prev === 0 ? displayedPhotos.length - 1 : prev - 1;
    });
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex === null) return;
    setActivePhotoIndex(prev => {
      if (prev === null) return null;
      return prev === displayedPhotos.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-noble-900 border-t border-b border-gold-500/10">
      
      {/* Decorative light reflection */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-950/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-gold-500" />
            <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Media</span>
            <span className="h-[1px] w-6 bg-gold-500" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Official Photo Gallery
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mt-4 font-light">
            An elegant archive of live music representations, academic sessions, and precious memories under the guidance of our maestros.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['all', 'profile', 'performance', 'class'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat as any);
                setActivePhotoIndex(null);
              }}
              className={`px-5 py-2 rounded-md text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer border ${
                filter === cat 
                  ? 'bg-gold-500 text-black border-gold-500 shadow-[0_4px_12px_rgba(197,141,42,0.2)]'
                  : 'bg-noble-950 text-zinc-400 border-gold-500/10 hover:border-gold-500/30 hover:text-white'
              }`}
            >
              {cat === 'class' ? 'Academics & Classes' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid with Custom Dimensions */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {displayedPhotos.map((photo, index) => {
            const aspectClass = getPhotoAspectClass(photo.key);
            return (
              <div 
                key={photo.id}
                onClick={() => setActivePhotoIndex(index)}
                className={`break-inside-avoid w-full mb-6 relative rounded-lg overflow-hidden border border-gold-500/10 bg-noble-950 cursor-pointer shadow-md group border-gold-500/5 hover:border-gold-500/35 transition-all duration-300 ${aspectClass}`}
              >
                <AssetImage 
                  imageKey={photo.key}
                  alt={photo.title}
                  category={photo.category}
                  className="w-full h-full"
                />

                {/* Hover overlay masking */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-500 flex items-center justify-center text-gold-400 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Intersecting Empty Alert state if no items match filter */}
        {displayedPhotos.length === 0 && (
          <div className="py-16 text-center text-zinc-500">
            <Grid className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
            <p className="font-cinzel text-[11px] uppercase tracking-wider">No photographs matched your search criteria.</p>
          </div>
        )}

        {/* Full Cinematic Lightbox Frame */}
        <AnimatePresence>
          {activePhotoIndex !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setActivePhotoIndex(null)}
            >
              {/* Close Button */}
              <button 
                onClick={() => setActivePhotoIndex(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-zinc-200 hover:text-gold-200 cursor-pointer px-4 py-2 rounded-full bg-zinc-950 border border-gold-500/25 hover:border-gold-500 shadow-lg transition-all z-50 flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-wider font-cinzel select-none"
                title="Close Lightbox (Esc)"
              >
                <span>CLOSE (ESC)</span>
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400" />
              </button>

              {/* Left Navigation Arrow */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 md:left-8 text-white hover:text-gold-400 p-3 rounded-full hover:bg-zinc-900/50 cursor-pointer z-50 transition-colors"
                title="Previous Photo"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Visual Body Frame */}
              <div 
                className="relative max-w-4xl max-h-[80vh] w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative border border-gold-500/20 p-2 bg-noble-950 rounded shadow-2xl max-h-[70vh] flex items-center justify-center overflow-hidden transition-all duration-300">
                  <AssetImage 
                    imageKey={displayedPhotos[activePhotoIndex].key}
                    alt={displayedPhotos[activePhotoIndex].title}
                    category={displayedPhotos[activePhotoIndex].category}
                    className="max-h-[65vh] max-w-full w-auto h-auto rounded"
                    objectFit="contain"
                  />
                </div>
              </div>

              {/* Right Navigation Arrow */}
              <button 
                onClick={handleNext}
                className="absolute right-4 md:right-8 text-white hover:text-gold-400 p-3 rounded-full hover:bg-zinc-900/50 cursor-pointer z-50 transition-colors"
                title="Next Photo"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
