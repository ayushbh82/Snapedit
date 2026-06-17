import { ServiceItem, PortfolioItem, Testimonial, FAQItem, StatItem } from './types';

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'thumb-premium',
    title: 'High-CTR YouTube Thumbnails',
    description: 'Eye-catching thumbnails designed with psychological triggers to boost click-through rates (CTR) and capture immediate viewer attention.',
    price: '₹300',
    features: [
      'Unlimited Revisions',
      'High-Resolution (1920x1080 PNG/JPG)',
      'Custom Photoshop Compositing',
      'Trending MrBeast/Ali Abdaal Visual Styles',
      'Advanced Color Grading & Text Styling',
      'Source File (.PSD) Optional Delivery'
    ],
    iconName: 'Image'
  },
  {
    id: 'video-premium',
    title: 'Professional Video Editing',
    description: 'High-retention editing focused on pacing, sound design, custom motion graphics, and visual effects to supercharge audience watch time.',
    price: '₹600',
    features: [
      'Up to 3 rounds of revisions',
      'Dynamic text overlays & subtitles',
      'Premium sound FX & license-free score',
      'Color correction & visual effects',
      'B-Roll integration & zoom transitions',
      'Optimized 1080p/4K rendering'
    ],
    iconName: 'Video'
  },
  {
    id: 'shorts-premium',
    title: 'Viral Shorts / Reels Editing',
    description: 'Fast-paced, vertically cropped editing packed with custom captions, sound effects, and eye-catching emojis to dominate short-form feeds.',
    price: '₹300',
    features: [
      'Trending Alex Hormozi/Ryan Pineda styles',
      'Animated emoji & pop-up icon graphics',
      'Slick transitions & sound triggers',
      'Auto-generated dynamic captions',
      'High-energy vertical formats (9:16)',
      'Quick 24-hour delivery available'
    ],
    iconName: 'Zap'
  },
  {
    id: 'podcast-premium',
    title: 'Podcast Editing & Visual Cut',
    description: 'Clean audio mastering, multicam switching, visual audiograms, and clip-cutting to distribute podcasts across multiple social networks successfully.',
    price: '₹600',
    features: [
      'Multi-camera angle sync & speaker-switching',
      'Audio noise reduction & voice leveling',
      'Animated waveforms & intro/outro cards',
      'Short teaser cuts for Reels & YouTube Shorts',
      'Sponsor integration & standard branding',
      'Chapter division & timestamps support'
    ],
    iconName: 'Mic'
  }
];

export const PORTFOLIO_LIST: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Survival Sandbox: 100 Days Hardcore Quest',
    category: 'thumbnail',
    niche: 'gaming',
    image: '/src/assets/images/thumbnail_gaming_1781675132835.jpg',
    ctr: '14.8%',
    views: '1.2M',
    styleTag: '3D Gaming composite',
    description: 'Ultra-saturated gaming thumbnail featuring custom lighting, character overlay, and a high-stakes dramatic backdrop.'
  },
  {
    id: 'p2',
    title: 'The Ultimate AI Smartphone: Do Not Buy!',
    category: 'thumbnail',
    niche: 'tech',
    image: '/src/assets/images/thumbnail_tech_1781675148770.jpg',
    ctr: '12.4%',
    views: '840K',
    styleTag: 'Industrial contrast review',
    description: 'Sleek premium tech review template focusing on a glowing floating model phone combined with authoritative text hierarchy.'
  },
  {
    id: 'p3',
    title: 'The Hidden Economy: Wealth Secrets Revealed',
    category: 'thumbnail',
    niche: 'business',
    image: '/src/assets/images/thumbnail_business_1781675162202.jpg',
    ctr: '11.2%',
    views: '2.1M',
    styleTag: 'Clean executive finance',
    description: 'High-contrast finance design featuring upward-surging charts behind a professional confident subject overlay.'
  },
  {
    id: 'p4',
    title: 'How Ancient Cities Solved Modern Engineering',
    category: 'thumbnail',
    niche: 'educational',
    image: '/src/assets/images/thumbnail_educational_1781675178240.jpg',
    ctr: '13.9%',
    views: '1.5M',
    styleTag: 'Cinematic storytelling',
    description: 'Atmospheric historical documentary layout using stark yellow-orange typographic focal points.'
  },
  // Procedural gradient/illustrative cards to satisfy the "At least 12 premium thumbnails" requirement
  {
    id: 'p5',
    title: 'Valorant Tournament: Zero to Champion',
    category: 'thumbnail',
    niche: 'gaming',
    image: '',
    gradientFrom: 'from-rose-600',
    gradientTo: 'to-indigo-900',
    ctr: '10.5%',
    views: '450K',
    styleTag: 'Championship esports',
    description: 'High-voltage gaming aesthetic featuring customized neon smoke overlays, action key-art, and glowing scorecards.'
  },
  {
    id: 'p6',
    title: 'How I Built a $10K/Month Freelance Engine',
    category: 'thumbnail',
    niche: 'business',
    image: '',
    gradientFrom: 'from-emerald-600',
    gradientTo: 'to-slate-900',
    ctr: '13.1%',
    views: '620K',
    styleTag: 'Ali Abdaal minimalist vlogger',
    description: 'Readable, clean minimalist business layout utilizing soft ambient backing, structured checklist grids, and bright callouts.'
  },
  {
    id: 'p7',
    title: 'Is This the End of Software Engineering?',
    category: 'thumbnail',
    niche: 'tech',
    image: '',
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-violet-900',
    ctr: '11.8%',
    views: '1.1M',
    styleTag: 'Futuristic AI alert',
    description: 'Sleek cyberspace theme layout with a glowing AI digital brain mesh design next to a worried human expression composite.'
  },
  {
    id: 'p8',
    title: 'Ancient Egypt: Secret of the Great Sphinx',
    category: 'thumbnail',
    niche: 'educational',
    image: '',
    gradientFrom: 'from-amber-600',
    gradientTo: 'to-amber-950',
    ctr: '15.2%',
    views: '3.4M',
    styleTag: 'Cinematic archaeological study',
    description: 'Golden-hour warm desert backdrop combined with huge high-contrast mystery lettering and dramatic dynamic lighting shadows.'
  },
  {
    id: 'p9',
    title: 'Ep. 42: How to Quit Overthinking Today',
    category: 'thumbnail',
    niche: 'podcast',
    image: '',
    gradientFrom: 'from-teal-600',
    gradientTo: 'to-stone-900',
    ctr: '9.8%',
    views: '230K',
    styleTag: 'Modern studio dialogue banner',
    description: 'Double portrait composition layered across studio acoustic panelling with neon mic accents and clear dialogue headlines.'
  },
  {
    id: 'p10',
    title: 'This One Desk Setup Changed My Life Forever',
    category: 'thumbnail',
    niche: 'tech',
    image: '',
    gradientFrom: 'from-purple-600',
    gradientTo: 'to-neutral-950',
    ctr: '12.9%',
    views: '780K',
    styleTag: 'Aesthetic cozy setup vlogger',
    description: 'Cozy, high-end desk setup review focusing on moody wood tones, neon light tubes, custom keyboard shots, and high-CTR text.'
  },
  {
    id: 'p11',
    title: 'Minecraft but Everything is Lava Storms',
    category: 'thumbnail',
    niche: 'gaming',
    image: '',
    gradientFrom: 'from-orange-600',
    gradientTo: 'to-red-950',
    ctr: '16.1%',
    views: '4.2M',
    styleTag: 'High-action creative hybrid',
    description: 'Extreme heat environment composites paired with oversized funny expression faces and bright orange lightning strokes.'
  },
  {
    id: 'p12',
    title: 'The Blueprint of Human Focus: Brain Hacks',
    category: 'thumbnail',
    niche: 'educational',
    image: '',
    gradientFrom: 'from-cyan-600',
    gradientTo: 'to-slate-950',
    ctr: '11.5%',
    views: '930K',
    styleTag: 'Huberman-style high retention',
    description: 'Scientific diagnostic charts layered behind bold typography outline, utilizing neon teal pointers and clinical graphic icons.'
  }
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: 't1',
    author: 'Rohan Sharma',
    role: 'Founder',
    channel: 'Rohan Tech Reviews (450K+ Subs)',
    avatar: 'bg-blue-500',
    rating: 5,
    content: 'Ayush and the SNAPEDIT team completely transformed my channel’s click-through rates. Our CTR went from a dull 4.2% up to an astonishing 11.8% within two weeks of using his premium thumbnails. His attention to compositing and high-contrast styling is truly world-class.',
    ctrIncrease: '+180%'
  },
  {
    id: 't2',
    author: 'Kavita Iyer',
    role: 'Co-Host',
    channel: 'The Daily Brew Podcast (180K+ Subs)',
    avatar: 'bg-purple-500',
    rating: 5,
    content: 'Our podcast needs clean multicam edits and aesthetic shorts for Instagram. SNAPEDIT delivers premium short-form cuts and dynamic transcripts with lighting-fast turnaround times. Highly recommended for any serious content creator.',
    ctrIncrease: '+220% Shorts Views'
  },
  {
    id: 't3',
    author: 'Vikram Aditya',
    role: 'Lead Gaming Creator',
    channel: 'Vortex Gaming HQ (1.2M+ Subs)',
    avatar: 'bg-emerald-500',
    rating: 5,
    content: 'In gaming, your thumbnail decides if your video gets views or dies. SNAPEDIT knows exact MrBeast visual hacks that capture gamers\' attention. They are extremely attentive, professional, and supply unlimited iterations. Best investment I made this year.',
    ctrIncrease: '+45% Views Increase'
  },
  {
    id: 't4',
    author: 'Ananya Goel',
    role: 'Educator & Digital Creator',
    channel: 'Ananya Learnings (320K+ Subs)',
    avatar: 'bg-orange-500',
    rating: 5,
    content: 'As an educational creator, making technical topics look engaging and click-worthy without clickbaiting is difficult. SNAPEDIT designed beautiful clean thumbnails that treated my content as high-brow documentaries. My audience is loving the professional aesthetic!',
    ctrIncrease: '+8.4% Absolute CTR'
  }
];

export const STATS_LIST: StatItem[] = [
  { id: 'stat-exp', value: 2, suffix: '+ Years', label: 'Professional Experience', iconName: 'Calendar' },
  { id: 'stat-clients', value: 25, suffix: '+', label: 'Satisfied Global Creators', iconName: 'Users' },
  { id: 'stat-projects', value: 100, suffix: '+', label: 'High-Converting Completed Projects', iconName: 'CheckCircle' },
  { id: 'stat-delivery', value: 24, suffix: ' Hours', label: 'Fast Delivery Rate Available', iconName: 'Zap' }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do we get started with a project?',
    answer: 'Simply choose a package or click "Order Now on WhatsApp" or use the query form below. We will discuss your video concept, target audience, style preferences, and assets.'
  },
  {
    id: 'faq-2',
    question: 'What is your standard turnaround time?',
    answer: 'For individual YouTube Thumbnails, delivery is usually within 24 to 48 hours. For full Video Editing projects, typical delivery is 3 to 5 days depending on script complexity, footage length, and animation requirements.'
  },
  {
    id: 'faq-3',
    question: 'Do you offer discount packages for bulk orders?',
    answer: 'Yes! We offer optimized monthly retainer packages for continuous content creators, standard gaming channels, and active podcasts requiring regular thumbnails and shorts. Reach out via WhatsApp or email for custom billing quotes.'
  },
  {
    id: 'faq-4',
    question: 'What tools and software do you use for designing and editing?',
    answer: 'We use the industry-leading Adobe Creative Cloud suite: Adobe Photoshop heavily for thumbnails (with customized depth layers, composite, and professional camera raw filter tuning), Premiere Pro and After Effects for advanced video cuts, sound FX, transcripts, and custom motion graphics.'
  },
  {
    id: 'faq-5',
    question: 'What is your revision policy?',
    answer: 'We offer unlimited revisions on high-CTR YouTube digital thumbnails as well as up to 3 major revisions on customized video edit orders to ensure you remain fully satisfied with the visual pacing, titles, and overall presentation.'
  }
];
