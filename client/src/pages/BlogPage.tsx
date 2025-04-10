import { useEffect, useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import { blogPosts } from "@/lib/data";
import { BlogPost } from "@/types";
import { Link } from "wouter";
import CTA from "@/components/home/CTA";

export default function BlogPage() {
  // Set document title on mount
  useEffect(() => {
    document.title = "Blog | REGC Online";
  }, []);
  
  // States for filtering
  const [filter, setFilter] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  
  // Get unique categories
  const categories = ["all", ...new Set(blogPosts.map(post => post.category.toLowerCase()))];
  
  // Handle filter change
  useEffect(() => {
    if (filter === "all") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => 
        post.category.toLowerCase() === filter
      ));
    }
  }, [filter]);
  
  return (
    <MainLayout>
      {/* Header Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-24 relative overflow-hidden bg-light-100 dark:bg-dark-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-dark-900 dark:to-dark-800 -z-10"></div>
        <div className="absolute -right-64 top-0 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-50 -z-10"></div>
        <div className="absolute -left-64 bottom-0 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full filter blur-3xl opacity-50 -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <p className="inline-block bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 text-primary-600 dark:text-primary-400 font-medium rounded-full px-4 py-1 mb-6">Our Blog</p>
            
            <h1 className="text-4xl md:text-5xl font-bold font-josefin text-dark-800 dark:text-white leading-tight mb-6 max-w-4xl">
              Digital Marketing <span className="gradient-text">Insights</span> and Strategies
            </h1>
            
            <p className="text-lg md:text-xl text-dark-600 dark:text-light-300 mb-10 max-w-2xl">
              Stay up-to-date with the latest marketing trends, tips, and actionable strategies to grow your business.
            </p>
            
            {/* Newsletter Signup */}
            <div className="w-full max-w-md">
              <div className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-dark-800 dark:text-white mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-dark-600 dark:text-light-300 text-sm mb-4">
                  Get the latest marketing insights delivered straight to your inbox.
                </p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 px-4 py-2 bg-light-100 dark:bg-dark-800 border border-light-300 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 text-dark-800 dark:text-white"
                  />
                  <button className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Section */}
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
          
          {/* Featured Post */}
          {filteredPosts.length > 0 && filter === "all" && (
            <div className="mb-16">
              <div className="bg-light-100 dark:bg-dark-700 rounded-xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="order-2 md:order-1 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <span className={`text-xs font-medium py-1 px-2 rounded ${
                        blogPosts[0].category === "SEO" || blogPosts[0].category === "Conversion"
                          ? "bg-primary-500 dark:bg-primary-600 text-white" 
                          : "bg-secondary-500 dark:bg-secondary-600 text-white"
                      }`}>
                        {blogPosts[0].category}
                      </span>
                      <span className="text-dark-500 dark:text-light-400 text-sm ml-3">
                        <i className="bx bx-calendar mr-1"></i> {blogPosts[0].date}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">{blogPosts[0].title}</h3>
                    <p className="text-dark-600 dark:text-light-300 mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    
                    <Link href={`/blog/${blogPosts[0].slug}`} className="inline-flex items-center text-primary-500 dark:text-primary-400 font-medium hover:text-primary-600 dark:hover:text-primary-300 transition-colors duration-200">
                      Read Full Article <i className="bx bx-right-arrow-alt ml-2"></i>
                    </Link>
                  </div>
                  <div className="order-1 md:order-2">
                    <img 
                      src={blogPosts[0].image} 
                      alt={blogPosts[0].title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div key={post.id} className="bg-light-100 dark:bg-dark-700 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="relative">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className={`absolute top-4 left-4 text-white text-xs font-medium py-1 px-2 rounded ${
                    post.category === "SEO" || post.category === "Conversion"
                      ? "bg-primary-500 dark:bg-primary-600" 
                      : "bg-secondary-500 dark:bg-secondary-600"
                  }`}>
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-dark-600 dark:text-light-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-dark-500 dark:text-light-400">
                      <i className="bx bx-calendar mr-1"></i> {post.date}
                    </span>
                    <Link href={`/blog/${post.slug}`} className="text-primary-500 dark:text-primary-400 font-medium hover:text-primary-600 dark:hover:text-primary-300 transition-colors duration-200">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* No results message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <i className="bx bx-search-alt text-5xl text-primary-300 dark:text-primary-700 mb-4"></i>
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-2">No posts found</h3>
              <p className="text-dark-600 dark:text-light-300">
                No posts match the selected category. Please try another filter.
              </p>
            </div>
          )}
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-light-100 dark:bg-dark-700 text-dark-600 dark:text-light-300 hover:bg-light-200 dark:hover:bg-dark-600 transition-colors duration-200 disabled:opacity-50" disabled>
                <i className="bx bx-chevron-left"></i>
              </button>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary-500 text-white">1</button>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-light-100 dark:bg-dark-700 text-dark-600 dark:text-light-300 hover:bg-light-200 dark:hover:bg-dark-600 transition-colors duration-200">2</button>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-light-100 dark:bg-dark-700 text-dark-600 dark:text-light-300 hover:bg-light-200 dark:hover:bg-dark-600 transition-colors duration-200">3</button>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-light-100 dark:bg-dark-700 text-dark-600 dark:text-light-300 hover:bg-light-200 dark:hover:bg-dark-600 transition-colors duration-200">
                <i className="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resources Section */}
      <section className="py-20 bg-light-100 dark:bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-primary-500 dark:text-primary-400 font-medium mb-2">Resources</p>
            <h2 className="text-3xl md:text-4xl font-bold font-josefin text-dark-800 dark:text-white mb-4">Free Marketing Resources</h2>
            <p className="text-dark-600 dark:text-light-300 max-w-2xl mx-auto">
              Download these resources to improve your marketing efforts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary-500/10 dark:bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                <i className="bx bx-file text-2xl text-primary-500 dark:text-primary-400"></i>
              </div>
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">SEO Checklist</h3>
              <p className="text-dark-600 dark:text-light-300 mb-4">
                A comprehensive checklist to optimize your website for search engines and improve rankings.
              </p>
              <Link href="#" className="inline-flex items-center text-primary-500 dark:text-primary-400 font-medium hover:text-primary-600 dark:hover:text-primary-300 transition-colors duration-200">
                Download PDF <i className="bx bx-download ml-2"></i>
              </Link>
            </div>
            
            <div className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary-500/10 dark:bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                <i className="bx bx-spreadsheet text-2xl text-primary-500 dark:text-primary-400"></i>
              </div>
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">Social Media Calendar</h3>
              <p className="text-dark-600 dark:text-light-300 mb-4">
                A 30-day content calendar template to plan and organize your social media content strategy.
              </p>
              <Link href="#" className="inline-flex items-center text-primary-500 dark:text-primary-400 font-medium hover:text-primary-600 dark:hover:text-primary-300 transition-colors duration-200">
                Download Template <i className="bx bx-download ml-2"></i>
              </Link>
            </div>
            
            <div className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary-500/10 dark:bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                <i className="bx bx-book text-2xl text-primary-500 dark:text-primary-400"></i>
              </div>
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">Email Marketing Guide</h3>
              <p className="text-dark-600 dark:text-light-300 mb-4">
                Learn how to create effective email campaigns that convert subscribers into customers.
              </p>
              <Link href="#" className="inline-flex items-center text-primary-500 dark:text-primary-400 font-medium hover:text-primary-600 dark:hover:text-primary-300 transition-colors duration-200">
                Download Guide <i className="bx bx-download ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
    </MainLayout>
  );
}
