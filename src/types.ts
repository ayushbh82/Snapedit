export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'thumbnail' | 'video' | 'shorts';
  niche: 'gaming' | 'tech' | 'business' | 'educational' | 'podcast';
  image: string;
  ctr: string;
  views: string;
  styleTag: string;
  gradientFrom?: string;
  gradientTo?: string;
  description?: string;
  embedUrl?: string; // For mock/real video player popups
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  channel: string;
  avatar: string;
  rating: number;
  content: string;
  ctrIncrease: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  iconName: string;
}
