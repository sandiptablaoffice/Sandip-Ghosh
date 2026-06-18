import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Performances from './components/Performances';
import Festivals from './components/Festivals';
import Collaborations from './components/Collaborations';
import Awards from './components/Awards';
import Classes from './components/Classes';
import Gallery from './components/Gallery';
import VideoShowcase from './components/VideoShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Cleaned up imports

export default function App() {
  const [bgImage, setBgImage] = useState<string | null>(null);

  useEffect(() => {
    setBgImage('/assets/page_background.jpg');
  }, []);

  return (
    <div className="min-h-screen bg-noble-950 text-zinc-100 flex flex-col justify-between selection:bg-gold-500 selection:text-noble-950 relative">
      
      {/* Ambient background watermark uploaded via sandbox */}
      {bgImage && (
        <div 
          className="fixed inset-0 bg-cover bg-center pointer-events-none z-0 opacity-40 mix-blend-luminosity bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Page Sections */}
      <main className="flex-grow relative z-10">
        <Hero />
        <About />
        <Timeline />
        <Performances />
        <Festivals />
        <Awards />
        <Classes />
        <Collaborations />
        <Gallery />
        <VideoShowcase />
        <Contact />
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Client Photograph Sandbox Board (Virtual Sandbox modal) is now fully integrated and disabled */}

    </div>
  );
}
