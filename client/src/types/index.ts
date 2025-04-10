// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: number;
  priceLabel: string;
}

export interface Addon {
  id: string;
  title: string;
  description: string;
  price: number;
  priceLabel: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
}

// Portfolio types
export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  stats: {
    label: string;
    value: string;
    icon: string;
  }[];
  year: string;
  link?: string;
}

// Blog types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  slug: string;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  files?: FileList | null;
}

// Budget Calculator types
export interface BudgetCalculatorFormData {
  services: string[];
  addons: string[];
  email?: string;
}

export interface CalculatedBudget {
  services: number;
  addons: number;
  total: number;
}
