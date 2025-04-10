import { useEffect, useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import { portfolioItems } from "@/lib/data";
import { PortfolioItem } from "@/types";
import { Link } from "wouter";
import CTA from "@/components/home/CTA";

export default function PortfolioPage() {
  // Set document title on mount
  useEffect(() => {
    document.title = "Our Work | REGC Online";
  }, []);
  
  // States for filtering
  const [filter, setFilter] = useState("all");
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>(portfolioItems);
  
  // Get unique categories
  const categories = ["all", ...new Set(portfolioItems.map(item => item.category.toLowerCase()))];
  
  // Handle filter change
  useEffect(() => {
    if (filter === "all") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => 
        item.category.toLowerCase() === filter
      ));
    }
  }, [filter]);
  
  return (
    <MainLayout>
      {/* Header Section */}
      <section className="pt-16 pb-24 md:pt-24 md:pb-32 relative overflow-hidden bg-light-100 dark:bg-dark-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-dark-900 dark:to-dark-800 -z-10"></div>
        <div className="absolute -right-64 top-0 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-50 -z-10"></div>
        <div className="absolute -left-64 bottom-0 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full filter blur-3xl opacity-50 -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <p className="inline-block bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 text-primary-600 dark:text-primary-400 font-medium rounded-full px-4 py-1 mb-6">Our Portfolio</p>
            
            <h1 className="text-4xl md:text-5xl font-bold font-josefin text-dark-800 dark:text-white leading-tight mb-6 max-w-4xl">
              Our <span className="gradient-text">Success Stories</span> and Client Results
            </h1>
            
            <p className="text-lg md:text-xl text-dark-600 dark:text-light-300 mb-10 max-w-2xl">
              Browse our collection of successful projects and see how we've helped businesses across various industries achieve their marketing goals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Filter & Grid */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`py-2 px-6 rounded-full font-medium transition-all duration-200 ${
                  filter === category
                    ? "bg-primary-500 text-white"
                    : "bg-light-100 dark:bg-dark-700 text-dark-600 dark:text-light-300 hover:bg-light-200 dark:hover:bg-dark-600"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-light-100 dark:bg-dark-700 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img src={item.image} alt={item.title} className="object-cover w-full h-64" />
                  <div className="absolute inset-0 bg-primary-900/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a href={item.link} className="bg-white dark:bg-dark-800 text-primary-500 py-2 px-4 rounded-lg font-medium hover:bg-light-200 dark:hover:bg-dark-600 transition-colors duration-200">
                      View Project
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-dark-800 dark:text-white">{item.title}</h3>
                    <span className={`text-xs font-medium py-1 px-2 rounded ${
                      item.category === "Website" 
                        ? "bg-secondary-100 dark:bg-secondary-900/30 text-secondary-500 dark:text-secondary-400" 
                        : "bg-primary-100 dark:bg-primary-900/30 text-primary-500 dark:text-primary-400"
                    }`}>
                      {item.category}
                    </span>
                  </div>
                  <p className="text-dark-600 dark:text-light-300 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center text-sm text-dark-500 dark:text-light-400">
                    {item.stats.map((stat, index) => (
                      <span key={index} className="flex items-center mr-4">
                        <i className={`bx ${stat.icon} ${
                          stat.icon.includes('trending-up') ? 'text-green-500' : 
                          stat.icon.includes('heart') ? 'text-red-500' : 
                          'text-blue-500'
                        } mr-1`}></i>
                        {stat.value} {stat.label}
                      </span>
                    ))}
                    <span className="flex items-center">
                      <i className="bx bx-calendar text-primary-400 mr-1"></i> {item.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* No results message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <i className="bx bx-search-alt text-5xl text-primary-300 dark:text-primary-700 mb-4"></i>
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-2">No projects found</h3>
              <p className="text-dark-600 dark:text-light-300">
                No projects match the selected filter. Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-20 bg-light-100 dark:bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-primary-500 dark:text-primary-400 font-medium mb-2">Success Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold font-josefin text-dark-800 dark:text-white mb-4">Featured Case Studies</h2>
            <p className="text-dark-600 dark:text-light-300 max-w-2xl mx-auto">
              Dive deeper into how our strategic approach helped these businesses achieve remarkable results.
            </p>
          </div>
          
          {/* Featured Case Study */}
          <div className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-lg mb-12">
            <div className="grid md:grid-cols-2">
              <div className="order-2 md:order-1 p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 dark:text-primary-400 font-medium rounded-full px-3 py-1 mb-4">E-commerce Success</span>
                <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">Fashion Boutique Brand Transformation</h3>
                <p className="text-dark-600 dark:text-light-300 mb-6">
                  An established fashion retailer was struggling with low online sales despite having a loyal in-store customer base. We reimagined their digital presence with a focus on mobile shopping experience and conversion optimization.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="bg-light-100 dark:bg-dark-600 p-4 rounded-lg text-center">
                    <p className="text-xl font-bold text-primary-500 dark:text-primary-400 mb-1">150%</p>
                    <p className="text-sm text-dark-600 dark:text-light-300">Conversion Rate Increase</p>
                  </div>
                  <div className="bg-light-100 dark:bg-dark-600 p-4 rounded-lg text-center">
                    <p className="text-xl font-bold text-primary-500 dark:text-primary-400 mb-1">80%</p>
                    <p className="text-sm text-dark-600 dark:text-light-300">Revenue Growth</p>
                  </div>
                </div>
                
                <Link href="#" className="inline-flex items-center text-primary-500 dark:text-primary-400 font-medium hover:text-primary-600 dark:hover:text-primary-300 transition-colors duration-200">
                  Read Full Case Study <i className="bx bx-right-arrow-alt ml-2"></i>
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Fashion Boutique Case Study" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-md">
              <div className="p-6">
                <span className="inline-block bg-secondary-500/10 dark:bg-secondary-500/20 text-secondary-500 dark:text-secondary-400 font-medium rounded-full px-3 py-1 mb-3">Social Media Growth</span>
                <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">Luxury Home Décor Brand Expansion</h3>
                <p className="text-dark-600 dark:text-light-300 mb-4">
                  A high-end home décor brand sought to expand their customer base through strategic social media management and influencer partnerships.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-dark-500 dark:text-light-400">
                    <span className="flex items-center mr-4">
                      <i className="bx bx-trending-up text-green-500 mr-1"></i> 300% Follower Growth
                    </span>
                  </div>
                  <Link href="#" className="text-primary-500 dark:text-primary-400 font-medium hover:text-primary-600 dark:hover:text-primary-300 transition-colors duration-200">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-md">
              <div className="p-6">
                <span className="inline-block bg-secondary-500/10 dark:bg-secondary-500/20 text-secondary-500 dark:text-secondary-400 font-medium rounded-full px-3 py-1 mb-3">PPC Campaign</span>
                <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">SaaS Company Lead Generation</h3>
                <p className="text-dark-600 dark:text-light-300 mb-4">
                  A B2B software company needed to increase qualified leads while reducing their cost per acquisition through optimized ad campaigns.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-dark-500 dark:text-light-400">
                    <span className="flex items-center mr-4">
                      <i className="bx bx-trending-up text-green-500 mr-1"></i> 40% Lower CPA
                    </span>
                  </div>
                  <Link href="#" className="text-primary-500 dark:text-primary-400 font-medium hover:text-primary-600 dark:hover:text-primary-300 transition-colors duration-200">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Logos Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-primary-500 dark:text-primary-400 font-medium mb-2">Trusted By</p>
            <h2 className="text-3xl md:text-4xl font-bold font-josefin text-dark-800 dark:text-white mb-4">Our Clients</h2>
            <p className="text-dark-600 dark:text-light-300 max-w-2xl mx-auto">
              We're proud to have worked with businesses across various industries.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Client logos - using generic placeholders for the example */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="w-32 h-16 md:w-40 md:h-20 bg-light-100 dark:bg-dark-700 rounded-lg flex items-center justify-center p-4">
                <div className="text-3xl text-primary-400 dark:text-primary-500 font-josefin font-bold">
                  Client {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CTA />
    </MainLayout>
  );
}
