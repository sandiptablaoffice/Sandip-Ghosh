import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Image, Upload, AlertCircle, RefreshCw, Layers } from 'lucide-react';

interface AssetImageProps {
  imageKey: string;
  className?: string;
  alt?: string;
  category?: string;
}

// Global state or storage key for user-uploaded preview images
const LOCAL_STORAGE_PREFIX = 'sg_tabla_media_';

export default function AssetImage({
  imageKey,
  className = '',
  alt = 'Sandip Ghosh Classical Tabla Performance',
  category = 'performance'
}: AssetImageProps) {
  const [src, setSrc] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [extIndex, setExtIndex] = useState(0);

  const fellBackRef = React.useRef(false);
  const extensions = ['.jpg', '.png', '.jpeg', '.webp', '.svg', '.JPG', '.PNG', '.JPEG', '.WEBP'];

  // Reset extension index when imageKey changes
  useEffect(() => {
    setExtIndex(0);
  }, [imageKey]);

  // Check if a virtual preview image exists in localStorage or load disk path
  useEffect(() => {
    fellBackRef.current = false;
    const cachedImage = localStorage.getItem(`${LOCAL_STORAGE_PREFIX}${imageKey}`);
    if (cachedImage) {
      setSrc(cachedImage);
      setHasError(false);
      setIsLoading(false);
    } else {
      if (extIndex < extensions.length) {
        setSrc(`/assets/${imageKey}${extensions[extIndex]}`);
        setHasError(false);
        setIsLoading(true);
      } else {
        // Fallback for slideshow if specific slide missing
        if (imageKey.startsWith('sandip_ghosh_hero_') && !fellBackRef.current) {
          fellBackRef.current = true;
          const primaryCached = localStorage.getItem(`${LOCAL_STORAGE_PREFIX}sandip_ghosh_hero`);
          if (primaryCached) {
            setSrc(primaryCached);
          } else {
            setSrc('/assets/sandip_ghosh_hero.jpg');
          }
          return;
        }
        setHasError(true);
        setIsLoading(false);
      }
    }

    // Listener for real-time virtual cache updates
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.key === imageKey) {
        setSrc(customEvent.detail.src);
        setHasError(false);
        setIsLoading(false);
      }
    };

    window.addEventListener('sg-image-cache-updated', handleUpdate);
    return () => {
      window.removeEventListener('sg-image-cache-updated', handleUpdate);
    };
  }, [imageKey, extIndex]);

  const handleImageError = () => {
    if (!localStorage.getItem(`${LOCAL_STORAGE_PREFIX}${imageKey}`)) {
      // Try next available extension format
      setExtIndex((prev) => prev + 1);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  // Helper vectors for Indian motifs inside fallback
  const renderMotif = () => {
    if (imageKey.includes('hero') || imageKey.includes('about')) {
      // Draw a majestic double-circle classical Indian Mandala with Tabla outlines
      return (
        <svg className="w-24 h-24 text-gold-500/20 animate-spin-slow" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75">
          <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="32" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="24" strokeDasharray="1 1" />
          {/* Inner lotus lines */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x = 50 + Math.cos(angle) * 32;
            const y = 50 + Math.sin(angle) * 32;
            return <line key={i} x1="50" y1="50" x2={x} y2={y} />;
          })}
          <circle cx="50" cy="50" r="5" fill="currentColor" className="text-gold-500/40" />
        </svg>
      );
    }

    if (imageKey.includes('class')) {
      // Draw percussive soundwave/beats
      return (
        <svg className="w-20 h-16 text-gold-500/25" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5,25 Q15,5 25,25 T45,25 T65,25 T85,25 T95,25" strokeDasharray="2 2" />
          <path d="M5,25 Q15,15 25,25 T45,2) T65,30 T85,15 T95,25" />
          <line x1="15" y1="5" x2="15" y2="45" strokeWidth="0.5" strokeDasharray="1 4" />
          <line x1="35" y1="5" x2="35" y2="45" strokeWidth="0.5" strokeDasharray="1 4" />
          <line x1="55" y1="5" x2="55" y2="45" strokeWidth="0.5" strokeDasharray="1 4" />
          <line x1="75" y1="5" x2="75" y2="45" strokeWidth="0.5" strokeDasharray="1 4" />
        </svg>
      );
    }

    // Default: Elegant intersecting geometric lines resembling acoustic waves
    return (
      <svg className="w-16 h-16 text-gold-500/15" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75">
        <path d="M10,90 L90,10" />
        <path d="M10,10 L90,90" />
        <circle cx="50" cy="50" r="25" />
        <circle cx="50" cy="50" r="10" strokeWidth="1.5" />
        <rect x="25" y="25" width="50" height="50" strokeDasharray="4 4" />
      </svg>
    );
  };

  return (
    <div className={`relative overflow-hidden group select-none bg-noble-900 border border-gold-500/10 flex flex-col items-center justify-center ${className}`}>
      {/* Loading Indicator */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-noble-950/80">
          <RefreshCw className="w-6 h-6 text-gold-400 animate-spin" />
        </div>
      )}

      {/* Render actual image if loadable */}
      {src && !hasError && (
        <img
          src={src}
          alt={alt}
          onError={handleImageError}
          onLoad={handleImageLoad}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}

      {/* Deluxe Fallback Frame: If the photo is not yet uploaded, display custom Indian visual art details */}
      {hasError && (
        <div className="relative w-full h-full min-h-[220px] bg-gradient-to-br from-noble-950 to-noble-900 flex flex-col items-center justify-center p-6 text-center select-none">
          {/* Royal background texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: `radial-gradient(ellipse at center, rgba(197, 141, 42, 0.15) 0%, transparent 80%)`,
          }} />

          {/* Golden Corner Accents */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-gold-500/40" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-gold-500/40" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-gold-500/40" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-gold-500/40" />

          {/* Motif */}
          <div className="relative mb-4">
            {renderMotif()}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-cinzel text-[10px] tracking-widest text-gold-400 font-bold uppercase mt-1">
                {category}
              </span>
            </div>
          </div>

          <h4 className="font-cinzel text-xs font-semibold text-gold-100 tracking-wider mb-2 max-w-[280px]">
            {alt}
          </h4>

          {/* Helper details for the Client to know exactly what file is expected */}
          <div className="bg-noble-950/90 border border-gold-500/20 rounded px-3 py-1.5 mt-2 scale-90">
            <span className="font-mono text-[9px] text-zinc-400 block break-all">
              Expected File: <span className="text-gold-300 font-bold">/assets/{imageKey}.jpg</span>
            </span>
            <span className="text-[9px] text-gold-500/80 block mt-0.5">
              (Use Sandbox in Navbar to upload and preview live)
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// Global Image Cache Sandbox Handler for client and reviews to play with photos
export function useLiveImageSandbox() {
  const [cachedImages, setCachedImages] = useState<Record<string, string>>({});

  useEffect(() => {
    const images: Record<string, string> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(LOCAL_STORAGE_PREFIX)) {
        const imageKey = key.replace(LOCAL_STORAGE_PREFIX, '');
        const value = localStorage.getItem(key);
        if (value) {
          images[imageKey] = value;
          // Synchronize to physical file system
          fetch('/api/sync-sandbox-images', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ imageKey, base64Data: value })
          }).catch(err => console.warn('Background sync failed on load:', err));
        }
      }
    }
    setCachedImages(images);
  }, []);

  const saveCachedImage = (imageKey: string, base64Data: string) => {
    try {
      localStorage.setItem(`${LOCAL_STORAGE_PREFIX}${imageKey}`, base64Data);
    } catch (e) {
      console.warn('Storage quota exceeded inside saveCachedImage, attempting memory cache fallback', e);
    }
    setCachedImages(prev => ({ ...prev, [imageKey]: base64Data }));
    
    // Broadcast real-time update event
    const event = new CustomEvent('sg-image-cache-updated', {
      detail: { key: imageKey, src: base64Data }
    });
    window.dispatchEvent(event);

    // Synchronize to physical file system
    fetch('/api/sync-sandbox-images', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageKey, base64Data })
    })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error(`Sync code ${res.status}`);
    })
    .then(data => console.log('Successfully saved file on workspace server:', data))
    .catch(err => console.error('Server sync failed:', err));
  };

  const removeCachedImage = (imageKey: string) => {
    localStorage.removeItem(`${LOCAL_STORAGE_PREFIX}${imageKey}`);
    setCachedImages(prev => {
      const copy = { ...prev };
      delete copy[imageKey];
      return copy;
    });

    // Reset back to system default path
    const event = new CustomEvent('sg-image-cache-updated', {
      detail: { key: imageKey, src: `/assets/${imageKey}.jpg` }
    });
    window.dispatchEvent(event);

    // Call server to remove the physical file
    fetch('/api/delete-sandbox-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageKey })
    }).catch(err => console.warn('Failed to delete physical file:', err));
  };

  const clearAllCache = () => {
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(LOCAL_STORAGE_PREFIX)) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(k => localStorage.removeItem(k));
    setCachedImages({});

    // Reset everyone
    const event = new CustomEvent('sg-image-cache-updated', {
      detail: { reset: true }
    });
    window.dispatchEvent(event);
    window.location.reload();
  };

  return {
    cachedImages,
    saveCachedImage,
    removeCachedImage,
    clearAllCache
  };
}

interface SandboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ImageSandboxModal({ isOpen, onClose }: SandboxModalProps) {
  const { cachedImages, saveCachedImage, removeCachedImage, clearAllCache } = useLiveImageSandbox();

  const imageTargets = [
    { key: 'logo', title: 'Sandiip Kr Ghosh custom logo', desc: 'Custom branding logo displayed on Navbar and Footer', aspect: '1:1' },
    { key: 'page_background', title: 'Atmospheric Wallpaper Background', desc: 'Custom background image layered behind the main pages with safe low-opacity blending', aspect: '16:9' },
    { key: 'gurukul_logo', title: 'DHA Esthetics Music Gurukul Logo', desc: 'Official logo of DHA Esthetics Music Gurukul academy', aspect: '1:1' },
    { key: 'sandip_ghosh_hero', title: 'Hero Banner Picture', desc: 'Central photo used at the top of the webpage', aspect: '16:9' },
    { key: 'sandip_ghosh_about', title: 'About Section Portrait', desc: 'Professional closeup or playing photo next to biography', aspect: '3:4' },
    { key: 'sandip_ghosh_classes', title: 'Tabla Classes Picture', desc: 'Photo demonstrating posture/tabla next to classes form', aspect: '4:3' },
    { key: 'collab_master_collab-1', title: 'Pt. Ajoy Chakraborty Photo', desc: 'Vocal maestro collaborator portrait', aspect: '1:1' },
    { key: 'collab_master_collab-4', title: 'Pt. Hari Prasad Chaurasia Photo', desc: 'Bansuri maestro collaborator portrait', aspect: '1:1' },
    { key: 'collab_master_collab-balamuralikrishna', title: 'Vidwan Pt. M. Balamuralikrishna Photo', desc: 'Carnatic legend collaborator portrait', aspect: '1:1' },
    { key: 'collab_master_collab-arunasairam', title: 'Vidushi Aruna Sairam Photo', desc: 'Carnatic vocal queen collaborator portrait', aspect: '1:1' },
    { key: 'collab_master_collab-7', title: 'Pt. Ramesh Mishra Photo', desc: 'Sarangi maestro collaborator portrait', aspect: '1:1' },
    { key: 'collab_master_collab-2', title: 'Ustad Shahid Parvez Photo', desc: 'Sitar maestro collaborator portrait', aspect: '1:1' },
    { key: 'collab_master_collab-aashishkhan', title: 'Ustad Aashish Khan Photo', desc: 'Sarod maestro collaborator portrait', aspect: '1:1' },
    { key: 'collab_master_collab-3', title: 'Ustad Shujaat Khan Photo', desc: 'Sitar maestro collaborator portrait', aspect: '1:1' },
    { key: 'collab_master_collab-8', title: 'Pt. Ulhas Kashalkar Photo', desc: 'Vocal maestro collaborator portrait', aspect: '1:1' },
    { key: 'collab_master_collab-rashidkhan', title: 'Ustad Rashid Khan Photo', desc: 'Vocal legend collaborator portrait', aspect: '1:1' },
    { key: 'collab_master_collab-kushal', title: 'Pt. Kushal Das Photo', desc: 'Sitar maestro collaborator portrait', aspect: '1:1' },
    { key: 'collab_master_collab-6', title: 'Pt. Tejendra Narayan Majumder Photo', desc: 'Sarod maestro collaborator portrait', aspect: '1:1' },
    { key: 'collab_master_collab-5', title: 'Vidushi Kaushiki Chakraborty Photo', desc: 'Vocal virtuoso collaborator portrait', aspect: '1:1' },
    { key: 'collab_master_collab-parthasarathy', title: 'Shri Partha Sarathy Desikan Photo', desc: 'Vocal artist collaborator portrait', aspect: '1:1' },
    { key: 'collab_master_collab-debojyoti', title: 'Pt. Debojyoti Bose Photo', desc: 'Sarod maestro collaborator portrait', aspect: '1:1' },
    { key: 'collab_master_collab-ranajit', title: 'Pt. Ranajit Sengupta Photo', desc: 'Sarod maestro collaborator portrait', aspect: '1:1' },
    { key: 'collab_master_collab-9', title: 'Pt. Purbayan Chatterjee Photo', desc: 'Sitar maestro collaborator portrait', aspect: '1:1' },
    { key: 'collab_master_collab-rakesh', title: 'Pt. Rakesh Chowrasia Photo', desc: 'Bansuri maestro collaborator portrait', aspect: '1:1' },
    { key: 'collab_master_collab-praveen', title: 'Pt. Praveen Godkhindi Photo', desc: 'Bansuri maestro collaborator portrait', aspect: '1:1' },
    { key: 'gallery_dover_lane', title: 'Gallery - Dover Lane Concert', desc: 'Performance snapshot accompanying legends', aspect: '4:3' },
    { key: 'gallery_berlin_concert', title: 'Gallery - Berlin Hall Concert', desc: 'Shot from international performances in Germany/Europe', aspect: '4:3' },
    { key: 'gallery_anindo_ji', title: 'Gallery - With Pt. Anindo Chatterjee', desc: 'Historical picture of Sandip receiving mentorship', aspect: '1:1' },
    { key: 'gallery_visva_bharati', title: 'Gallery - Academic Sessions / Gurukul', desc: 'Conducting class on music and arrangements', aspect: '4:3' },
    { key: 'gallery_saptak', title: 'Gallery - Saptak Sangeet Sammelan', desc: 'Rhythmic presentation at Saptak music festival', aspect: '4:3' },
    { key: 'gallery_kyabaat', title: 'Gallery - Kyabaat Project Live', desc: 'Cross-cultural contemporary collaboration', aspect: '4:3' }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Support up to 15MB upload, since compression downscales and keeps memory lightweight
    if (file.size > 15 * 1024 * 1024) {
      alert("Please upload images smaller than 15MB for browser playground preview.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let targetWidth = img.width;
        let targetHeight = img.height;

        if (key === 'gallery_saptak') {
          // Exactly 2048 x 1365 px as specified
          targetWidth = 2048;
          targetHeight = 1365;
        } else if (key === 'gallery_anindo_ji') {
          // Exactly 1:1 square
          targetWidth = 800;
          targetHeight = 800;
        } else {
          // Cap general images at 1200px max dimensions for safety and ultra-fast performance
          const maxDim = 1200;
          if (img.width > maxDim || img.height > maxDim) {
            if (img.width > img.height) {
              targetHeight = Math.round((img.height * maxDim) / img.width);
              targetWidth = maxDim;
            } else {
              targetWidth = Math.round((img.width * maxDim) / img.height);
              targetHeight = maxDim;
            }
          }
        }

        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          saveCachedImage(key, event.target?.result as string);
          return;
        }

        // Draw with object-cover math for forced ratios (Saptak and Anindo Ji 1:1)
        if (key === 'gallery_saptak' || key === 'gallery_anindo_ji') {
          const targetAspect = targetWidth / targetHeight;
          const sourceAspect = img.width / img.height;
          let sX = 0, sY = 0, sW = img.width, sH = img.height;

          if (sourceAspect > targetAspect) {
            sW = img.height * targetAspect;
            sX = (img.width - sW) / 2;
          } else if (sourceAspect < targetAspect) {
            sH = img.width / targetAspect;
            sY = (img.height - sH) / 2;
          }
          ctx.drawImage(img, sX, sY, sW, sH, 0, 0, targetWidth, targetHeight);
        } else {
          ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
        }

        try {
          // Compress with 0.8 quality to shrink file size from megabytes to ~120KB
          const compressed = canvas.toDataURL('image/jpeg', 0.8);
          saveCachedImage(key, compressed);
        } catch (err) {
          console.warn("Compression / Storage failed, saving directly", err);
          saveCachedImage(key, event.target?.result as string);
        }
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-noble-900 border border-gold-500/30 rounded-xl p-6 md:p-8 text-left shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gold-500/10 pb-4 mb-6">
          <div>
            <h2 className="font-cinzel text-xl font-bold text-gold-100 flex items-center gap-2">
              <Layers className="w-5 h-5 text-gold-400" />
              Photograph Board & live Sandbox
            </h2>
            <p className="text-xs text-zinc-400 mt-1">
              Upload your actual photographs to instantly render them across the visual framework of this premium portfolio.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-zinc-400 hover:text-gold-400 cursor-pointer p-1 rounded-full hover:bg-noble-800 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content explanation */}
        <div className="bg-noble-950/70 border border-gold-500/20 rounded-lg p-4 mb-6 text-xs text-zinc-300 leading-relaxed">
          <p className="font-semibold text-gold-300 mb-1">💡 CLIENT COLLABORATION & VERCEL INSTRUCTIONS:</p>
          <ul className="list-disc pl-4 space-y-1">
            <li><strong>Live Sandbox Mode:</strong> The panel below mimics how your real photos fit the design. Simply upload your actual photographs for instant web-view simulation inside this browser.</li>
            <li><strong>For Production/Hosting:</strong> Put your real JPEG photographs into the <code className="text-gold-400">/assets</code> or root folder naming them exactly as shown below (e.g. <code className="text-gold-400">sandip_ghosh_hero.jpg</code>) and compile. The application will immediately utilize them statically, completely offline-safe!</li>
          </ul>
        </div>

        {/* Grid of Targets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 overflow-y-auto pr-1">
          {imageTargets.map(target => {
            const hasCached = !!cachedImages[target.key];

            return (
              <div 
                key={target.key} 
                className={`p-4 rounded-lg border ${
                  hasCached ? 'bg-gold-950/20 border-gold-500/45' : 'bg-noble-950/50 border-zinc-800'
                } flex flex-col justify-between`}
              >
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-semibold text-xs text-zinc-100 line-clamp-1">{target.title}</h4>
                    <span className="font-mono text-[9px] px-1.5 py-0.5 bg-noble-900 border border-gold-500/10 text-gold-400 rounded">
                      {target.aspect}
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-400 mt-1 line-clamp-2 min-h-[30px]">{target.desc}</p>

                  {/* Preview container */}
                  <div className="my-3 aspect-[4/3] rounded bg-black/60 overflow-hidden relative flex items-center justify-center border border-noble-850">
                    {hasCached ? (
                      <img 
                        src={cachedImages[target.key]} 
                        alt="Cache preview" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="text-center p-2">
                        <Image className="w-6 h-6 text-zinc-600 mx-auto mb-1" />
                        <span className="text-[9px] text-zinc-500 block">Mandala Fallback active</span>
                        <code className="text-[8px] text-gold-500/70 block font-mono">/assets/{target.key}.jpg</code>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 mt-2">
                  <label className="flex items-center justify-center gap-1.5 w-full bg-gold-600 hover:bg-gold-500 active:bg-gold-700 text-black font-semibold text-xs py-1.5 px-3 rounded cursor-pointer transition-colors text-center shadow-md">
                    <Upload className="w-3.5 h-3.5" />
                    {hasCached ? 'Replace Photo' : 'Upload Mock Image'}
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={(e) => handleFileChange(e, target.key)} 
                      className="hidden" 
                    />
                  </label>
                  
                  {hasCached && (
                    <button 
                      onClick={() => removeCachedImage(target.key)}
                      className="w-full bg-red-950/30 hover:bg-red-950/60 text-red-400 border border-red-500/20 text-[10px] py-1 rounded cursor-pointer transition-colors"
                    >
                      Reset to Default Mandala
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Global actions footer */}
        <div className="flex flex-wrap justify-between items-center gap-4 mt-auto border-t border-gold-500/10 pt-4">
          <button 
            onClick={clearAllCache}
            className="text-xs text-red-400 hover:text-red-300 cursor-pointer flex items-center gap-1.5 border border-red-500/20 bg-red-950/10 px-3 py-1.5 rounded transition-colors"
          >
            Clear All Virtual Cache
          </button>
          
          <button 
            onClick={onClose}
            className="bg-zinc-800 text-zinc-200 hover:bg-gold-600 hover:text-black font-semibold text-xs px-5 py-2 rounded transition-colors cursor-pointer"
          >
            Close Board
          </button>
        </div>
      </div>
    </div>
  );
}
