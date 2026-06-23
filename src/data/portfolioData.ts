import { 
  TimelineItem, 
  ConcertFestival, 
  ArtistCollaboration, 
  InternationalProject, 
  Award, 
  Testimonial, 
  VideoItem,
  PortfolioImage
} from '../types';

export const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Performances', href: '#performances' },
  { label: 'Festivals', href: '#festivals' },
  { label: 'Awards', href: '#awards' },
  { label: 'Classes', href: '#classes' },
  { label: 'Collaborations', href: '#collaborations' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Videos', href: '#videos' },
  { label: 'Contact', href: '#contact' }
];

export const heroDetails = {
  name: 'Sandiip Kr Ghosh',
  title: 'ICCR Empanelled Tabla Artist',
  subtitles: [
    'Disciple of Pandit Anindo Chatterjee',
    'Devotee and a learner of music'
  ],
  tagline: 'Rhythm Beyond Boundaries',
  alternativeTagline: 'Acquired and Absorbed Extensive Taleem of all Respected Gharanas'
};

export const aboutContent = {
  bio: "Sandiip Kr Ghosh is a highly dedicated ICCR-empanelled Tabla artist and devotee of Indian classical music. With over 35 years of learning, 20 years of teaching experience, and 30 years of intensive training under the legendary Pandit Anindo Chatterjee, he is recognized for both his intelligent accompaniment and powerful solo expressions.",
  storyParagraphs: [
    "His musical journey began under Pandit Gobinda Bose before continuing under the guidance of Pandit Anindo Chatterjee, one of the most respected senior masters of tabla in the world.",
    "Today, Sandiip performs globally while nurturing the next generation of musical aspirants through the DHA Esthetics Music Gurukul, providing specialized technical guidance and recording experience."
  ],
  stats: [
    { label: 'Years of Learning', value: '35+' },
    { label: 'Years of Mentorship', value: '20+' },
    { label: 'Under Pt. Anindo Chatterjee', value: '30 yrs' },
    { label: 'Global Performances', value: '500+' }
  ]
};

export const timelineData: TimelineItem[] = [
  {
    id: 'timeline-1',
    year: 'Initiation',
    title: 'Nurtured Roots under Pt. Gobinda Bose',
    description: 'Began the formal rigorous training under the prominent senior master Pt. Gobinda Bose, receiving a strong foundation in classical rhythmic structures.',
    category: 'training'
  },
  {
    id: 'timeline-2',
    year: 'Advanced Disciple',
    title: 'Advanced Training under Pt. Anindo Chatterjee',
    description: 'Accepted as a disciple by the legendary Pandit Anindo Chatterjee of the Farrukhabad Gharana. Dedicated more than 30 years of deep intensive training (ganda-bandh) under his immediate wing.',
    category: 'training'
  },
  {
    id: 'timeline-3',
    year: 'Recognition',
    title: 'National Scholarship Recipient',
    description: 'Awarded the highly prestigious National Scholarship by the Government of India for exceptional talent and mastery in Tabla.',
    category: 'achievement'
  },
  {
    id: 'timeline-4',
    year: 'Empanelment',
    title: 'ICCR Empanelled Artist',
    description: 'Empaneled as an official cultural ambassador by the Indian Council for Cultural Relations (ICCR), opening the doors to international solo representation.',
    category: 'achievement'
  },
  {
    id: 'timeline-5',
    year: 'Gurukul',
    title: 'DHA Esthetics Music Gurukul',
    description: 'Established the premier training institute in Kolkata, providing specialized training in Indian classical music, rhythm, basic audio / video recording guidance, guidance of core tabla technique & aesthetics, and stage performance experience.',
    category: 'teaching'
  },
  {
    id: 'timeline-6',
    year: 'Global Footprint',
    title: 'International Tours & Global Performing Artist',
    description: 'Embodied the heritage of Indian Classical Music in regular international tours across USA, Europe, South-East Asia, and the Middle East as both solo performer and premier accompanist.',
    category: 'global'
  }
];

export const globalPerformances = {
  countries: [
    'USA', 'Germany', 'France', 'Singapore', 'Georgia', 'Canada', 'Belgium', 
    'Sri Lanka', 'Oman', 'Kuwait', 'Denmark', 'Italy', 'UAE', 'United Kingdom',
    'Australia', 'Austria', 'Czech Republic', 'Scandinavia', 'Greece', 'Russia', 'Qatar'
  ],
  festivals: [
    'Dover Lane Music Conference',
    'Sawai Gandharv Sangeet Mahotsav',
    'Saptak Music Festival',
    'ITC Sangeet Sammelan',
    'Shankarlal Music Festival',
    'Ganga Mahotsav',
    'Uttarpara Rhythmic Celebration',
    'Harivallabh Sangeet Sammelan',
    'Pt. Motiram Pt. Maniram Sangeet Samaroh',
    'Tansen Music Festival',
    'Subah-e-Banaras'
  ]
};

export const collaborations: ArtistCollaboration[] = [
  {
    id: 'collab-1',
    artistName: 'Pt. Ajoy Chakraborty',
    instrument: 'Vocal',
    role: 'Sangeet Samrat & Vocal Maestro'
  },
  {
    id: 'collab-4',
    artistName: 'Pt. Hari Prasad Chaurasia',
    instrument: 'Flute (Bansuri)',
    role: 'Living Legend of Bansuri'
  },
  {
    id: 'collab-balamuralikrishna',
    artistName: 'Vidwan Pt. M. Balamuralikrishna',
    instrument: 'Vocal / Viola',
    role: 'Carnatic Multi-Instrumentalist & Legend'
  },
  {
    id: 'collab-arunasairam',
    artistName: 'Vidushi Aruna Sairam',
    instrument: 'Vocal',
    role: 'Carnatic Vocal Queen & Guru'
  },
  {
    id: 'collab-7',
    artistName: 'Pt. Ramesh Mishra',
    instrument: 'Sarangi',
    role: 'Legendary Sarangi Virtuoso'
  },
  {
    id: 'collab-2',
    artistName: 'Ustad Shahid Parvez',
    instrument: 'Sitar',
    role: 'Imdadkhani Gharana Sitar Maestro'
  },
  {
    id: 'collab-aashishkhan',
    artistName: 'Ustad Aashish Khan',
    instrument: 'Sarod',
    role: 'Maihar Gharana Sarod Virtuoso'
  },
  {
    id: 'collab-3',
    artistName: 'Ustad Shujaat Khan',
    instrument: 'Sitar',
    role: 'Sitar Maestro & Vocalist'
  },
  {
    id: 'collab-8',
    artistName: 'Pt. Ulhas Kashalkar',
    instrument: 'Vocal',
    role: 'Premier Khayal Vocalist Guru'
  },
  {
    id: 'collab-rashidkhan',
    artistName: 'Ustad Rashid Khan',
    instrument: 'Vocal',
    role: 'Rampur-Sahaswan Classical Vocal Genius'
  },
  {
    id: 'collab-kushal',
    artistName: 'Pt. Kushal Das',
    instrument: 'Sitar',
    role: 'Eminent Sitar & Surbahar Maestro'
  },
  {
    id: 'collab-6',
    artistName: 'Pt. Tejendra Narayan Majumder',
    instrument: 'Sarod',
    role: 'Distinguished Sarod Maestro'
  },
  {
    id: 'collab-5',
    artistName: 'Vidushi Kaushiki Chakraborty',
    instrument: 'Vocal',
    role: 'Patiala Gharana Vocal Maestro'
  },
  {
    id: 'collab-parthasarathy',
    artistName: 'Shri Partha Sarathy Desikan',
    instrument: 'Vocal',
    role: 'Celebrated Classical & Devotional Vocalist'
  },
  {
    id: 'collab-debojyoti',
    artistName: 'Pt. Debojyoti Bose',
    instrument: 'Sarod',
    role: 'Eminent Sarod Maestro & Composer'
  },
  {
    id: 'collab-ranajit',
    artistName: 'Pt. Ranajit Sengupta',
    instrument: 'Sarod',
    role: 'Innovative Sarod Maestro & Musicologist'
  },
  {
    id: 'collab-9',
    artistName: 'Pt. Purbayan Chatterjee',
    instrument: 'Sitar',
    role: 'Dynamic Sitar Virtuoso'
  },
  {
    id: 'collab-rakesh',
    artistName: 'Pt. Rakesh Chowrasia',
    instrument: 'Flute (Bansuri)',
    role: 'Grammy-Winning Bansuri Virtuoso'
  },
  {
    id: 'collab-praveen',
    artistName: 'Pt. Praveen Godkhindi',
    instrument: 'Flute (Bansuri)',
    role: 'Pioneering Hindustani Bansuri Maestro'
  }
];

export const internationalProjects: InternationalProject[] = [
  {
    id: 'project-1',
    projectName: 'Kyabaat',
    origin: 'Hamburg, Germany',
    description: 'An indo-jazz fusion dialogue uniting traditional North Indian rhythms with contemporary European jazz patterns.',
    details: 'Led cross-border percussive structures combining marimba, saxophones, and Farrukhabad Gharana rhythms.'
  },
  {
    id: 'project-2',
    projectName: 'Raagas & Blossoms',
    origin: 'Kolkata, India',
    description: 'A classical ensemble focused on seasonal ragas and complex percussive cycles.',
    details: 'Directed deep multi-instrumental traditional dialogues presenting the cyclic layouts of Indian classical systems.'
  },
  {
    id: 'project-3',
    projectName: 'String Struck',
    origin: 'Mumbai, India',
    description: 'An acoustic visual project bridging plucked folk strings and multi-layered tabla layas.',
    details: 'Featuring energetic solo tabla segments that interact with high-speed sitar and acoustic guitar compositions.'
  },
  {
    id: 'project-4',
    projectName: 'Asa',
    origin: 'International Collaboration',
    description: 'A global sound escape bringing atmospheric soundscapes, live acoustics, and acoustic tabla loops together.',
    details: 'Explored minimalist modern textures under long-form musical loops and traditional bandishes.'
  },
  {
    id: 'project-5',
    projectName: 'The Coral Life',
    origin: 'Munich, Germany',
    description: 'A chamber orchestra project displaying tabla percussions as organic environmental textures.',
    details: 'Performed in central Munich theater halls blending traditional Western woodwinds with Indian rhythmic cycles.'
  },
  {
    id: 'project-6',
    projectName: 'Anouraag',
    origin: 'Switzerland',
    description: 'An acoustic classical journey featuring meditative, devotional strings accompanied by elaborate solo tabla layout.',
    details: 'Regular workshops and live performances in Zurich and Geneva.'
  },
  {
    id: 'project-7',
    projectName: 'You & Me',
    origin: 'Germany',
    description: 'A dynamic duo project highlighting the intersection of hand drums (Tabla & Cajon) with world guitar.',
    details: 'Conducted live musical dialogues exploring rhythmic parallels of Spanish Flamenco and Indian classical Kaida/Rela.'
  },
  {
    id: 'project-8',
    projectName: 'K3',
    origin: 'Austria',
    description: 'An experimental trio fusing electronic microtonal synths, cello, and live acoustic Tabla.',
    details: 'Showcasing Tabla not only as a rhythmic tool but also as a highly resonant melodic instrument.'
  },
  {
    id: 'project-9',
    projectName: 'Big Band Orchestra',
    origin: 'Hamburg Music University, Germany',
    description: 'A monumental symphonic project integrating full big band brass sections with complex Indian classical metric cycles (e.g. Dhamar, Jhaptaal, Teen Taal).',
    details: 'Conducted a specialized masterclass on rhythm synchronization at the university.'
  }
];

export const awardsData: Award[] = [
  {
    id: 'award-1',
    title: "President's Award",
    issuer: 'Government of India',
    description: 'Awarded for exceptional excellence in Indian Classical Music representing the highest national honors.'
  },
  {
    id: 'award-2',
    title: 'State Sangeet Academy Puraskar',
    issuer: 'West Bengal State Music Academy',
    description: 'Honoring outstanding contributions to the preservation and performance of classical instrumental art.'
  },
  {
    id: 'award-3',
    title: 'Academy Puroskar',
    issuer: 'Sangeet Natak Academy (West Bengal)',
    description: 'Recognized for meritorious dedication to Farrukhabad Gharana style and high performing standards.'
  },
  {
    id: 'award-4',
    title: 'National Scholarship',
    issuer: 'Ministry of Culture, Government of India',
    description: 'Prestigious scholarship awarded for intensive postgraduate research and training under legends.'
  },
  {
    id: 'award-5',
    title: 'ICCR Empanelled Artist',
    issuer: 'Indian Council for Cultural Relations',
    description: 'Empaneled under the highest tier representing the nation globally in international delegations.'
  },
  {
    id: 'award-6',
    title: 'SPIC MACAY Artist',
    issuer: 'Society for the Promotion of Indian Classical Music and Culture Amongst Youth',
    description: 'Conducting regular lecture-demonstrations and full-scale concerts to inspire student generations.'
  },
  {
    id: 'award-7',
    title: 'Gold Medal (Twice)',
    issuer: 'South Asian Music Festival',
    description: 'Awarded back-to-back gold medal distinctions for outstanding solo and accompaniment performance.'
  },
  {
    id: 'award-8',
    title: 'Dover Lane Recognition',
    issuer: 'The Dover Lane Music Conference',
    description: 'Felicitation and honorary recognition from India’s premier classical music conference for exemplary presentation.'
  },
  {
    id: 'award-9',
    title: 'Gharana Shiromani Samman',
    issuer: 'Farrukhabad Classical Heritage Foundation',
    description: 'Presented in recognition of pristine preservation of compositions and unique Peshkar repertoire.'
  },
  {
    id: 'award-10',
    title: 'Sangeet Ratna Puraskar',
    issuer: 'Hindustani Classical Music Association',
    description: 'Honoring extraordinary dexterity and stylistic refinement in rhythmic accompaniment.'
  },
  {
    id: 'award-11',
    title: 'Swar Sadhana Samman',
    issuer: 'Swar Sadhana Samithi, Mumbai',
    description: 'To honor high proficiency and dedication to the art of traditional Indian hand-drumming.'
  },
  {
    id: 'award-12',
    title: 'Pandit Nikhil Banerjee Memorial Award',
    issuer: 'Kolkata Sangeet Parishad',
    description: 'Conferred annually to stellar solo instrumentalists and percussionists keeping direct heritage alive.'
  },
  {
    id: 'award-13',
    title: 'Best Accompanist Award',
    issuer: 'Salt Lake Cultural Association',
    description: 'For outstanding live stage synchronization and accompaniment with leading Indian classical veterans.'
  },
  {
    id: 'award-14',
    title: 'Sur Mani Title',
    issuer: 'Sur Singar Samsad, Mumbai',
    description: 'An esteemed historic title bestowed upon distinguished young classical instrumental musicians.'
  },
  {
    id: 'award-15',
    title: 'Bhatkhande Sangeet Ratna',
    issuer: 'Bhatkhande Music Institute, Lucknow',
    description: 'Acknowledged for outstanding academic understanding and presentation of Tala systems.'
  },
  {
    id: 'award-16',
    title: 'Sangeet Kala Sadhak Puraskar',
    issuer: 'All India Fine Arts & Crafts Society (AIFACS)',
    description: 'Bestowed for lifelong devotional service and mastery in cultivating young classical percussionists.'
  },
  {
    id: 'award-17',
    title: 'Taal Varidhi Upadhi',
    issuer: 'Suryatapa Percussion Academy Foundation',
    description: 'In honor of fluid speed, crystal clear syllable clarity, and aesthetic brilliance in Farrukhabad style solos.'
  },
  {
    id: 'award-18',
    title: 'Pratibha Samman Title',
    issuer: 'Subah-e-Banaras Cultural Committee of Kashi',
    description: 'Commending stellar dawn solo performances rendered on the ghats of Varanasi before an international assembly.'
  },
  {
    id: 'award-19',
    title: 'Nikhil Jyoti Samman',
    issuer: 'Pracheen Kala Kendra, Chandigarh',
    description: 'Recognized for preserving traditional compositions of historical and rhythmic significance.'
  },
  {
    id: 'award-20',
    title: 'Sangeet Mahotsav Award of Excellence',
    issuer: 'Maharashtra Sanskritik Manch',
    description: 'Awarded for extraordinary accompaniment and state-level leadership in rhythm representation.'
  },
  {
    id: 'award-21',
    title: 'Guru Shishya Parampara Award',
    issuer: 'Eastern Zonal Cultural Centre (EZCC), Ministry of Culture',
    description: 'For active contribution towards preserving and transferring oral heritage and compositions verbatim.'
  },
  {
    id: 'award-22',
    title: 'Gharana Praveen Puraskar',
    issuer: 'Gharana Heritage Society of Bengal',
    description: 'Recognizing advanced research and reproduction of Farrukhabad and Lucknow Gharana rhythmic cycles.'
  }
];

export const classesDetails = {
  headline: 'Learn Tabla from a Maestro',
  subheadline: 'Structured training in the authentic Farrukhabad Gharana tradition.',
  learnList: [
    'Proper hand techniques & balance posture',
    'Correct Bol production and clear syllable strokes',
    'Teen Taal (16 beats) and major rhythmic cycles fundamentals',
    'Layakari (single, double, triple, quadruple speeds)',
    'Traditional Kaidas & Peshkars of Farrukhabad Gharana',
    'High-speed Relas, Gats, and traditional bandishes',
    'Complex Tukras, Farads, and Chakradars',
    'Solo Performance sequencing and presentation skills',
    'Accompaniment Techniques for vocal, sitar, and violin',
    'Advanced repertoire of Pandit Anindo Chatterjee style'
  ],
  features: [
    'Online Classes Worldwide (Interactive high-definition audio)',
    'Offline Classes at dedicated gurukul locations',
    'One-to-One Personalized Mentorship',
    'Structured Beginner, Intermediate & Advanced Levels',
    'Personalized practice paths & audio feedback loops',
    'Performance & Stage presentation guidance'
  ],
  experience: {
    learning: '35 Years Learning Experience',
    teaching: '20 Years Teaching Experience',
    mastery: '30 Years Under Pt. Anindo Chatterjee'
  }
};

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    quote: "Sandip represents the absolute highest caliber of the modern generation of Tabla players. His accompaniment is deeply respectful, melodious, yet explosive when the moment demands. Carrying Pt. Anindo Chatterjee's style with immense grace.",
    author: "Senior Sitarist Critique",
    designation: "International Concert Host",
    location: "London, UK"
  },
  {
    id: 'test-2',
    quote: "His mastery of the complex layas and clear, crisp Bol production is a treat to hear on stage. Sandip Ghosh is one of the most reliable and brilliant accompanists I have ever performed with.",
    author: "Renowned Classical Artist",
    designation: "Senior Vocalist",
    location: "Kolkata"
  },
  {
    id: 'test-3',
    quote: "Learning under Sandipji has completely transformed my understanding of the Farrukhabad Gharana. His dedication to correcting the hand-posture, bol clarity, and systematic teaching structure is unmatched.",
    author: "Advanced Disciple",
    designation: "Online Tabla Student",
    location: "California, USA"
  },
  {
    id: 'test-4',
    quote: "An assistant professor of the highest order, Sandip Ghosh brings a perfect blend of scientific rigorous training and deep classicism which is rare. Our students are extremely fortunate.",
    author: "Sangit Bhavana Dean",
    designation: "Visva-Bharati University",
    location: "Santiniketan"
  }
];

export const youtubeVideos: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'Tabla Solo | Sandip Ghosh | Avartan School of Rhythm',
    videoId: 'NUKnnIVnhUE',
    category: 'solo',
    duration: '46:40'
  },
  {
    id: 'vid-2',
    title: 'Pt. Rakesh Chaurasia & Sandip Ghosh | Live in Maihar',
    videoId: 'I8UnItmKXpc',
    category: 'collaboration',
    duration: '3:37'
  },
  {
    id: 'vid-3',
    title: 'MORNING RIYAZ for Tabla Students | Sandip Ghosh',
    videoId: 'NM1ejYdZmac',
    category: 'workshop',
    duration: '11:01'
  },
  {
    id: 'vid-4',
    title: 'Fusion Ensemble | Sandip Ghosh & Pt. Ranajit Sengupta',
    videoId: '2kdK_JxCyOY',
    category: 'concert',
    duration: '7:00'
  }
];

export const defaultImages: PortfolioImage[] = [
  {
    id: 'p-about',
    key: 'sandip_ghosh_about',
    title: 'Concert Portrait',
    category: 'profile',
    defaultPath: '/assets/sandip_ghosh_about.jpg',
    description: 'Sandip Ji displaying classical tabla strokes'
  },
  {
    id: 'p-class',
    key: 'sandip_ghosh_hero_5',
    title: 'After Concert Picture',
    category: 'performance',
    defaultPath: '/assets/sandip_ghosh_hero_5.jpg',
    description: 'A cherished snapshot capturing joyful post-performance moments on stage.'
  },
  {
    id: 'p-gallery-concert-1',
    key: 'gallery_concert_1',
    title: 'Rhythmic Synchronization in Concert',
    category: 'performance',
    defaultPath: '/assets/gallery_concert_1.jpg',
    description: 'Performing alongside maestros at a premier musical conference.'
  },
  {
    id: 'p-gallery-concert-2',
    key: 'gallery_concert_2',
    title: 'Legacy Rhythms Presentation',
    category: 'performance',
    defaultPath: '/assets/gallery_concert_2.jpg',
    description: 'Preserving and performing traditional Farrukhabad Gharana rhythmic cycles.'
  },
  {
    id: 'p-gallery-concert-3',
    key: 'gallery_concert_3',
    title: 'Maestro Recital Aura',
    category: 'performance',
    defaultPath: '/assets/gallery_concert_3.jpg',
    description: 'Solo Tabla representation reflecting deep rhythmic layers and patterns.'
  },
  {
    id: 'p-gallery-concert-4',
    key: 'gallery_concert_4',
    title: 'Musical Dialogues Live',
    category: 'performance',
    defaultPath: '/assets/gallery_concert_4.jpg',
    description: 'Interactive hand drum expressions on the grand classical stage.'
  },
  {
    id: 'p-gallery-1',
    key: 'gallery_dover_lane',
    title: 'Live at Dover Lane Music Conference',
    category: 'performance',
    defaultPath: '/assets/gallery_dover_lane.jpg',
    description: 'Sandip Ghosh accompanying legendary maestros during high-octane performance'
  },
  {
    id: 'p-gallery-3',
    key: 'gallery_anindo_ji',
    title: 'With Pandit Anindo Chatterjee',
    category: 'profile',
    defaultPath: '/assets/gallery_anindo_ji.jpg',
    description: 'Receiving immediate guidance from the legendary Tabla Maestro Pandit Anindo Chatterjee'
  },
  {
    id: 'p-gallery-4',
    key: 'gallery_visva_bharati',
    title: 'Live Solo',
    category: 'performance',
    defaultPath: '/assets/gallery_visva_bharati.jpg',
    description: 'Sandip Ghosh performing a majestic traditional Tabla solo recital on stage.'
  },
  {
    id: 'p-gallery-5',
    key: 'gallery_saptak',
    title: 'Saptak Festival Rhythmic Accompaniment',
    category: 'performance',
    defaultPath: '/assets/gallery_saptak.jpg',
    description: 'Performing classical percussive metrics in Saptak Sangeet Sammelan'
  },
  {
    id: 'p-gallery-6',
    key: 'gallery_kyabaat',
    title: 'Live with Kaushiki Chakraborty',
    category: 'performance',
    defaultPath: '/assets/gallery_kyabaat.jpg',
    description: 'Rhythmic accompaniment presentation with the eminent classical vocalist Vidushi Kaushiki Chakraborty'
  },
  {
    id: 'whatsapp-img-3',
    key: 'whatsapp_3',
    title: 'At Coke Studio Roots',
    category: 'profile',
    defaultPath: '/assets/whatsapp_3.jpeg',
    description: 'Performing dynamic crossover rhythms and Indian classical beats at Coke Studio Roots.'
  },
  {
    id: 'whatsapp-img-5',
    key: 'whatsapp_5',
    title: 'With Tabla Maestro Pt. Bickram Ghosh',
    category: 'performance',
    defaultPath: '/assets/whatsapp_5.jpeg',
    description: ''
  },
  {
    id: 'whatsapp-img-6',
    key: 'whatsapp_6',
    title: 'With Ustad Zakir Hussain',
    category: 'performance',
    defaultPath: '/assets/whatsapp_6.jpeg',
    description: ''
  },
  {
    id: 'whatsapp-img-8',
    key: 'whatsapp_8',
    title: 'Sangeet Conference Solo',
    category: 'performance',
    defaultPath: '/assets/whatsapp_8.jpeg',
    description: 'Presenting intricate rhythm patterns on a grand stage.'
  },
  {
    id: 'whatsapp-img-10',
    key: 'whatsapp_10',
    title: 'After Concert Gathering',
    category: 'profile',
    defaultPath: '/assets/whatsapp_10.jpeg',
    description: 'Joyful moments and shared smiles with fellow legendary musicians after a highly successful concert.'
  },
  {
    id: 'whatsapp-img-11',
    key: 'whatsapp_11',
    title: 'Exploring Drums',
    category: 'class',
    defaultPath: '/assets/whatsapp_11.jpeg',
    description: 'Guiding students and exploring dynamic layouts of classical and acoustic drums at the Gurukul.'
  },
  {
    id: 'whatsapp-img-12',
    key: 'whatsapp_12',
    title: 'With Two Gods',
    category: 'performance',
    defaultPath: '/assets/whatsapp_12.jpeg',
    description: ''
  },
  {
    id: 'whatsapp-img-13',
    key: 'whatsapp_13',
    title: 'With Legendary Shivamani',
    category: 'class',
    defaultPath: '/assets/whatsapp_13.jpeg',
    description: ''
  },
  {
    id: 'whatsapp-img-15',
    key: 'whatsapp_15',
    title: 'With Pt. Ajoy Chakraborty and Ustad Rashid Khan',
    category: 'class',
    defaultPath: '/assets/whatsapp_15.jpeg',
    description: ''
  },
  {
    id: 'whatsapp-img-16',
    key: 'whatsapp_16',
    title: 'With Pt. Ajoy Chakraborty',
    category: 'performance',
    defaultPath: '/assets/whatsapp_16.jpeg',
    description: 'Providing delicate and powerful classical accompaniment to the vocal wizard Pandit Ajoy Chakraborty.'
  }
];
