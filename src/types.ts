export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  category: 'training' | 'achievement' | 'teaching' | 'global';
}

export interface ConcertFestival {
  name: string;
  city?: string;
  venue?: string;
}

export interface ArtistCollaboration {
  id: string;
  artistName: string;
  instrument?: string;
  role?: string;
  description?: string;
  avatarUrl?: string; // fallback handles this gracefully
}

export interface InternationalProject {
  id: string;
  projectName: string;
  origin: string;
  description: string;
  details?: string;
}

export interface Award {
  id: string;
  title: string;
  subtitle?: string;
  issuer: string;
  year?: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  designation: string;
  location?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  videoId: string; // YouTube ID
  category: 'solo' | 'concert' | 'workshop' | 'collaboration';
  duration?: string;
}

export interface PortfolioImage {
  id: string;
  key: string;       // Unique identifier like 'hero', 'about', 'gallery-1'
  title: string;
  category: 'profile' | 'performance' | 'class' | 'gallery';
  defaultPath: string; // Path inside /assets/ or /public/
  description?: string;
}
