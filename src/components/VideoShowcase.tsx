import React, { useState } from 'react';
import { Play, PlayCircle, Video, Award, Radio, Calendar, GraduationCap } from 'lucide-react';
import { youtubeVideos } from '../data/portfolioData';

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState(youtubeVideos[0]);
  const [activeCategory, setActiveCategory] = useState<'all' | 'solo' | 'concert' | 'workshop' | 'collaboration'>('all');

  const filteredVideos = youtubeVideos.filter(vid => {
    if (activeCategory === 'all') return true;
    return vid.category === activeCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'solo':
        return <Award className="w-3.5 h-3.5 text-gold-400" />;
      case 'concert':
        return <Calendar className="w-3.5 h-3.5 text-gold-400" />;
      case 'workshop':
        return <GraduationCap className="w-3.5 h-3.5 text-gold-400" />;
      case 'collaboration':
        return <Radio className="w-3.5 h-3.5 text-gold-400" />;
      default:
        return <Video className="w-3.5 h-3.5 text-gold-400" />;
    }
  };

  return (
    <section id="videos" className="py-24 relative overflow-hidden bg-noble-950">
      
      {/* Decorative linear soundwaves in the background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-gold-500" />
            <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">Performances</span>
            <span className="h-[1px] w-6 bg-gold-500" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            Watch Performances
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mt-4 font-light">
            Stream high-fidelity classical percussion solos, workshops, and international ensembles directly from Maestro Sandip Ghosh's official channels.
          </p>
        </div>

        {/* Video Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['all', 'solo', 'concert', 'workshop', 'collaboration'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-4 py-2 rounded-md text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-gold-500 text-black border-gold-500 font-extrabold shadow-md'
                  : 'bg-noble-900 text-zinc-400 border-gold-500/10 hover:border-gold-500/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Theater Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Visual Screen (Selected Video Player) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-gold-500/20 bg-black shadow-2xl">
              
              {/* Dynamic YouTube Video Frame */}
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=0&rel=0`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />

            </div>

            {/* Video Meta Info */}
            <div className="mt-4 p-5 bg-noble-900 border border-gold-500/15 rounded-lg text-left">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400 px-2.5 py-1 bg-gold-950/40 border border-gold-500/25 rounded-md flex items-center gap-1">
                  {getCategoryIcon(selectedVideo.category)}
                  {selectedVideo.category}
                </span>
                <span className="text-zinc-500 text-xs font-mono">
                  Duration: {selectedVideo.duration || 'N/A'}
                </span>
              </div>
              <h3 className="font-cinzel text-sm sm:text-base md:text-lg font-bold text-white tracking-wide">
                {selectedVideo.title}
              </h3>
            </div>
          </div>

          {/* Video Sidebar Grid (Other videos) */}
          <div className="lg:col-span-4 flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-1">
            <h4 className="font-cinzel text-xs font-bold text-zinc-400 uppercase tracking-widest text-left pb-2 border-b border-gold-500/10 mb-2">
              Performance Playlist
            </h4>

            {filteredVideos.map((vid) => {
              const isSelected = vid.id === selectedVideo.id;
              
              return (
                <div
                  key={vid.id}
                  onClick={() => setSelectedVideo(vid)}
                  className={`p-3 rounded-lg border text-left flex items-center gap-3 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-gold-950/20 border-gold-500/40 shadow-[0_0_15px_rgba(197,141,42,0.15)]'
                      : 'bg-noble-900 border-gold-500/5 hover:border-gold-500/20 hover:bg-noble-850'
                  }`}
                >
                  {/* Miniature representation */}
                  <div className="w-20 aspect-video rounded bg-black flex-shrink-0 overflow-hidden relative flex items-center justify-center border border-noble-800">
                    <img 
                      src={`https://img.youtube.com/vi/${vid.videoId}/mqdefault.jpg`}
                      alt="Thumbnail"
                      className="w-full h-full object-cover opacity-60"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-gold-400">
                      <Play className="w-4 h-4 fill-current" />
                    </div>
                  </div>

                  {/* Info details */}
                  <div className="flex-grow min-w-0">
                    <h5 className="font-sans text-xs font-bold text-zinc-100 truncate tracking-wide leading-tight group-hover:text-gold-300">
                      {vid.title}
                    </h5>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[9px] uppercase font-semibold text-gold-500 flex items-center gap-1">
                        {vid.category}
                      </span>
                      <span className="text-[9px] text-zinc-500 font-mono">
                        {vid.duration}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Display message if list is empty */}
            {filteredVideos.length === 0 && (
              <div className="text-center py-12 text-zinc-600">
                <p className="text-xs">No videos in this category yet.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
