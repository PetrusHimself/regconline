import { Service, Addon, Testimonial, PortfolioItem, BlogPost } from "@/types";

// Services data
export const services: Service[] = [
  {
    id: "website",
    title: "High-Converting Websites",
    description: "Custom-built, SEO-optimized websites designed to capture leads and convert visitors into customers.",
    icon: "bx-code-alt",
    price: 15000,
    priceLabel: "From R15,000"
  },
  {
    id: "social",
    title: "Social Media Management",
    description: "Strategic content creation and community management to build a strong social presence and engagement.",
    icon: "bx-share-alt",
    price: 5000,
    priceLabel: "From R5,000/mo"
  },
  {
    id: "ads",
    title: "Meta & Google Ads",
    description: "AI-optimized ad campaigns that target your ideal customers and maximize your return on investment.",
    icon: "bx-target-lock",
    price: 7500,
    priceLabel: "From R7,500/mo"
  },
  {
    id: "design",
    title: "Digital Products",
    description: "Professional design services including logos, posters, business cards, and other brand collateral.",
    icon: "bx-palette",
    price: 2500,
    priceLabel: "From R2,500"
  }
];

// Addons data
export const addons: Addon[] = [
  {
    id: "seo",
    title: "SEO Optimization",
    description: "Keyword research and on-page SEO implementation",
    price: 3500,
    priceLabel: "+ R3,500"
  },
  {
    id: "content",
    title: "Professional Copywriting",
    description: "Conversion-focused copy for your website or marketing materials",
    price: 2500,
    priceLabel: "+ R2,500"
  }
];

// Testimonials data
export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "REGC Online transformed our online presence. Their website redesign increased our conversion rate by 75%, and their ongoing support has been invaluable.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "Fashion Boutique",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    rating: 5
  },
  {
    id: "2",
    quote: "The team at REGC Online understands digital marketing at an advanced level. Their Google Ads campaign reduced our cost per lead by 40% while increasing quality.",
    author: "Michael Rodriguez",
    position: "Marketing Director",
    company: "SaaS Company",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    rating: 5
  },
  {
    id: "3",
    quote: "Their social media management services have been a game-changer for our brand. Our Instagram following grew by 300% in just 6 months with high-quality engagement.",
    author: "Priya Patel",
    position: "Owner",
    company: "Luxury Home Décor",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    rating: 4.5
  }
];

// Portfolio data
export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Fashion Boutique Site",
    category: "Website",
    description: "Complete e-commerce store redesign with 150% increase in conversion rate and 80% improvement in page load speed.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    stats: [
      {
        label: "Revenue Growth",
        value: "80%",
        icon: "bx-trending-up"
      }
    ],
    year: "2023",
    link: "#"
  },
  {
    id: "2",
    title: "Luxury Brand Campaign",
    category: "Social Media",
    description: "Integrated social media campaign across Instagram and Facebook leading to 400% increase in engagement.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    stats: [
      {
        label: "Engagements",
        value: "50K+",
        icon: "bx-heart"
      }
    ],
    year: "2022",
    link: "#"
  },
  {
    id: "3",
    title: "SaaS Lead Generation",
    category: "Google Ads",
    description: "AI-optimized Google Ads campaign that reduced cost per acquisition by 40% while increasing qualified leads.",
    image: "https://images.unsplash.com/photo-1617881770125-6fb0bf377834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    stats: [
      {
        label: "New Clients",
        value: "200+",
        icon: "bx-bar-chart-alt-2"
      }
    ],
    year: "2023",
    link: "#"
  }
];

// Blog posts data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "7 Advanced SEO Strategies for 2023",
    excerpt: "Learn the latest search engine optimization techniques to improve your website's visibility and drive organic traffic.",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "Aug 15, 2023",
    slug: "advanced-seo-strategies-2023"
  },
  {
    id: "2",
    title: "Building a Loyal Community on Instagram",
    excerpt: "Discover proven strategies to grow your Instagram following and create an engaged community around your brand.",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "Jul 28, 2023",
    slug: "building-loyal-community-instagram"
  },
  {
    id: "3",
    title: "5 Website Elements That Drive Conversions",
    excerpt: "Learn which website elements have the biggest impact on conversion rates and how to optimize them effectively.",
    category: "Conversion",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "Jul 15, 2023",
    slug: "website-elements-drive-conversions"
  }
];

// Statistics
export const stats = [
  {
    value: "100+",
    label: "Projects Completed",
  },
  {
    value: "95%",
    label: "Client Satisfaction",
  },
  {
    value: "85%",
    label: "Lead Conversion",
  },
  {
    value: "5+",
    label: "Years Experience",
  },
];

// Process steps
export const processSteps = [
  {
    step: 1,
    title: "Discovery Call",
    description: "We begin with a comprehensive discussion to understand your business goals, target audience, and specific marketing needs.",
    timeframe: "1-2 Days"
  },
  {
    step: 2,
    title: "Strategy Development",
    description: "Our team creates a tailored marketing strategy including detailed timelines, deliverables, and key performance indicators.",
    timeframe: "3-5 Days"
  },
  {
    step: 3,
    title: "Implementation",
    description: "We execute the approved strategy, developing websites, creating content, setting up ad campaigns, and designing assets.",
    timeframe: "1-3 Weeks"
  },
  {
    step: 4,
    title: "Optimization & Reporting",
    description: "We continuously monitor performance, making data-driven adjustments and providing regular reports on campaign effectiveness.",
    timeframe: "Ongoing"
  },
  {
    step: 5,
    title: "Ongoing Support",
    description: "We provide continuous technical support, content updates, and strategic guidance to ensure long-term marketing success.",
    timeframe: "Continuous"
  }
];

// Budget ranges
export const budgetRanges = [
  { value: "range1", label: "R1,000 - R5,000" },
  { value: "range2", label: "R5,000 - R10,000" },
  { value: "range3", label: "R10,000 - R20,000" },
  { value: "range4", label: "R20,000 - R50,000" },
  { value: "range5", label: "R50,000+" }
];

// Contact information
export const contactInfo = {
  emails: {
    general: "hello@regconline.co.za",
    sales: "petrust@regconline.co.za"
  },
  whatsapp: "+27 64 082 6855",
  whatsappHours: "Mon-Fri, 8am-6pm SAST",
  social: {
    instagram: "https://instagram.com/regconline",
    twitter: "https://twitter.com/regconline",
    facebook: "https://facebook.com/regconline1",
    linkedin: "https://linkedin.com/company/regconline"
  }
};
