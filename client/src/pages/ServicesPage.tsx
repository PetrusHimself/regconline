import { useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import { services } from "@/lib/data";
import { Link } from "wouter";
import CTA from "@/components/home/CTA";

export default function ServicesPage() {
  // Set document title on mount
  useEffect(() => {
    document.title = "Our Services | REGC Online";
  }, []);
  
  return (
    <MainLayout>
      {/* Header Section */}
      <section className="pt-16 pb-24 md:pt-24 md:pb-32 relative overflow-hidden bg-light-100 dark:bg-dark-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-dark-900 dark:to-dark-800 -z-10"></div>
        <div className="absolute -right-64 top-0 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-50 -z-10"></div>
        <div className="absolute -left-64 bottom-0 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full filter blur-3xl opacity-50 -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <p className="inline-block bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 text-primary-600 dark:text-primary-400 font-medium rounded-full px-4 py-1 mb-6">What We Do</p>
            
            <h1 className="text-4xl md:text-5xl font-bold font-josefin text-dark-800 dark:text-white leading-tight mb-6 max-w-4xl">
              Strategic <span className="gradient-text">Digital Marketing Services</span> to Grow Your Business
            </h1>
            
            <p className="text-lg md:text-xl text-dark-600 dark:text-light-300 mb-10 max-w-2xl">
              We offer comprehensive solutions designed to help businesses build strong online presence, engage with their audience, and convert leads into customers.
            </p>
          </div>
        </div>
      </section>
      
      {/* Detailed Services Section */}
      {services.map((service, index) => (
        <section key={service.id} className={`py-20 ${index % 2 === 0 ? 'bg-white dark:bg-dark-800' : 'bg-light-100 dark:bg-dark-900'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <p className="text-primary-500 dark:text-primary-400 font-medium mb-2">Our Expertise</p>
                <h2 className="text-3xl md:text-4xl font-bold font-josefin text-dark-800 dark:text-white mb-6">{service.title}</h2>
                <p className="text-dark-600 dark:text-light-300 mb-6 text-lg">
                  {service.description}
                </p>
                
                <ul className="space-y-4 mb-8">
                  {/* Custom details per service */}
                  {service.id === "website" && (
                    <>
                      <li className="flex items-start">
                        <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-3 text-xl"></i>
                        <div>
                          <h4 className="font-bold text-dark-800 dark:text-white mb-1">Custom Responsive Design</h4>
                          <p className="text-dark-600 dark:text-light-300">Mobile-first designs that look amazing on all devices and screen sizes.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-3 text-xl"></i>
                        <div>
                          <h4 className="font-bold text-dark-800 dark:text-white mb-1">Conversion-Focused UX</h4>
                          <p className="text-dark-600 dark:text-light-300">Strategic user journeys designed to guide visitors toward conversion actions.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-3 text-xl"></i>
                        <div>
                          <h4 className="font-bold text-dark-800 dark:text-white mb-1">Performance Optimization</h4>
                          <p className="text-dark-600 dark:text-light-300">Lightning-fast load times and smooth interactions for optimal user experience.</p>
                        </div>
                      </li>
                    </>
                  )}
                  
                  {service.id === "social" && (
                    <>
                      <li className="flex items-start">
                        <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-3 text-xl"></i>
                        <div>
                          <h4 className="font-bold text-dark-800 dark:text-white mb-1">Content Creation & Scheduling</h4>
                          <p className="text-dark-600 dark:text-light-300">Engaging content tailored to your brand voice and audience preferences.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-3 text-xl"></i>
                        <div>
                          <h4 className="font-bold text-dark-800 dark:text-white mb-1">Community Management</h4>
                          <p className="text-dark-600 dark:text-light-300">Active engagement with your audience to build relationships and brand loyalty.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-3 text-xl"></i>
                        <div>
                          <h4 className="font-bold text-dark-800 dark:text-white mb-1">Analytics & Reporting</h4>
                          <p className="text-dark-600 dark:text-light-300">Regular insights into performance with actionable recommendations for improvement.</p>
                        </div>
                      </li>
                    </>
                  )}
                  
                  {service.id === "ads" && (
                    <>
                      <li className="flex items-start">
                        <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-3 text-xl"></i>
                        <div>
                          <h4 className="font-bold text-dark-800 dark:text-white mb-1">AI-Powered Targeting</h4>
                          <p className="text-dark-600 dark:text-light-300">Advanced algorithms to find your ideal customers and optimize ad delivery.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-3 text-xl"></i>
                        <div>
                          <h4 className="font-bold text-dark-800 dark:text-white mb-1">Ad Creative Development</h4>
                          <p className="text-dark-600 dark:text-light-300">Eye-catching visuals and compelling copy that drives clicks and conversions.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-3 text-xl"></i>
                        <div>
                          <h4 className="font-bold text-dark-800 dark:text-white mb-1">Continuous Optimization</h4>
                          <p className="text-dark-600 dark:text-light-300">Ongoing refinement based on performance data to maximize ROI.</p>
                        </div>
                      </li>
                    </>
                  )}
                  
                  {service.id === "design" && (
                    <>
                      <li className="flex items-start">
                        <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-3 text-xl"></i>
                        <div>
                          <h4 className="font-bold text-dark-800 dark:text-white mb-1">Brand Identity Design</h4>
                          <p className="text-dark-600 dark:text-light-300">Distinctive logos and visual elements that capture your brand essence.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-3 text-xl"></i>
                        <div>
                          <h4 className="font-bold text-dark-800 dark:text-white mb-1">Marketing Collateral</h4>
                          <p className="text-dark-600 dark:text-light-300">Professionally designed business cards, brochures, and promotional materials.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-3 text-xl"></i>
                        <div>
                          <h4 className="font-bold text-dark-800 dark:text-white mb-1">Digital Assets</h4>
                          <p className="text-dark-600 dark:text-light-300">Social media graphics, email templates, and digital ads that grab attention.</p>
                        </div>
                      </li>
                    </>
                  )}
                </ul>
                
                <Link href="/contact" className="inline-flex items-center bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                  Request a Quote <i className="bx bx-right-arrow-alt ml-2"></i>
                </Link>
              </div>
              
              <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="bg-gradient-to-br from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 p-6 rounded-xl">
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    {/* Placeholder image - in a real implementation, you would have specific images for each service */}
                    <img 
                      src={`https://images.unsplash.com/photo-${
                        service.id === "website" ? "1555421689-491a97ff2040" : 
                        service.id === "social" ? "1579869847514-7c1a19d2d2ad" : 
                        service.id === "ads" ? "1551288049-bebda4e38f71" : 
                        "1611162617213-7d7a39e9b1d7"
                      }?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`} 
                      alt={service.title} 
                      className="w-full h-96 object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-primary-500 dark:text-primary-400 font-medium mb-2">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold font-josefin text-dark-800 dark:text-white mb-4">Transparent Pricing Structure</h2>
            <p className="text-dark-600 dark:text-light-300 max-w-2xl mx-auto">
              We offer flexible pricing options to meet your specific needs and budget, with clear deliverables and no hidden fees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-light-100 dark:bg-dark-700 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-500/10 dark:bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`bx ${service.icon} text-2xl text-primary-500 dark:text-primary-400`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-3xl font-bold text-primary-500 dark:text-primary-400 mb-1">{service.priceLabel}</p>
                  <p className="text-sm text-dark-500 dark:text-light-400">{
                    service.id === "website" ? "One-time project" :
                    service.id === "design" ? "Basic package" :
                    "Monthly retainer"
                  }</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.id === "website" && (
                    <>
                      <li className="flex items-center text-dark-600 dark:text-light-300">
                        <i className="bx bx-check text-primary-500 dark:text-primary-400 mr-2"></i>
                        <span>Responsive design</span>
                      </li>
                      <li className="flex items-center text-dark-600 dark:text-light-300">
                        <i className="bx bx-check text-primary-500 dark:text-primary-400 mr-2"></i>
                        <span>5-7 custom pages</span>
                      </li>
                      <li className="flex items-center text-dark-600 dark:text-light-300">
                        <i className="bx bx-check text-primary-500 dark:text-primary-400 mr-2"></i>
                        <span>Contact form integration</span>
                      </li>
                      <li className="flex items-center text-dark-600 dark:text-light-300">
                        <i className="bx bx-check text-primary-500 dark:text-primary-400 mr-2"></i>
                        <span>Basic SEO setup</span>
                      </li>
                    </>
                  )}
                  
                  {service.id === "social" && (
                    <>
                      <li className="flex items-center text-dark-600 dark:text-light-300">
                        <i className="bx bx-check text-primary-500 dark:text-primary-400 mr-2"></i>
                        <span>12 posts per platform</span>
                      </li>
                      <li className="flex items-center text-dark-600 dark:text-light-300">
                        <i className="bx bx-check text-primary-500 dark:text-primary-400 mr-2"></i>
                        <span>2 social platforms</span>
                      </li>
                      <li className="flex items-center text-dark-600 dark:text-light-300">
                        <i className="bx bx-check text-primary-500 dark:text-primary-400 mr-2"></i>
                        <span>Community management</span>
                      </li>
                      <li className="flex items-center text-dark-600 dark:text-light-300">
                        <i className="bx bx-check text-primary-500 dark:text-primary-400 mr-2"></i>
                        <span>Monthly performance report</span>
                      </li>
                    </>
                  )}
                  
                  {service.id === "ads" && (
                    <>
                      <li className="flex items-center text-dark-600 dark:text-light-300">
                        <i className="bx bx-check text-primary-500 dark:text-primary-400 mr-2"></i>
                        <span>Campaign strategy</span>
                      </li>
                      <li className="flex items-center text-dark-600 dark:text-light-300">
                        <i className="bx bx-check text-primary-500 dark:text-primary-400 mr-2"></i>
                        <span>Ad creative development</span>
                      </li>
                      <li className="flex items-center text-dark-600 dark:text-light-300">
                        <i className="bx bx-check text-primary-500 dark:text-primary-400 mr-2"></i>
                        <span>Ad monitoring & optimization</span>
                      </li>
                      <li className="flex items-center text-dark-600 dark:text-light-300">
                        <i className="bx bx-check text-primary-500 dark:text-primary-400 mr-2"></i>
                        <span>Bi-weekly performance report</span>
                      </li>
                    </>
                  )}
                  
                  {service.id === "design" && (
                    <>
                      <li className="flex items-center text-dark-600 dark:text-light-300">
                        <i className="bx bx-check text-primary-500 dark:text-primary-400 mr-2"></i>
                        <span>Logo design (3 concepts)</span>
                      </li>
                      <li className="flex items-center text-dark-600 dark:text-light-300">
                        <i className="bx bx-check text-primary-500 dark:text-primary-400 mr-2"></i>
                        <span>Business card design</span>
                      </li>
                      <li className="flex items-center text-dark-600 dark:text-light-300">
                        <i className="bx bx-check text-primary-500 dark:text-primary-400 mr-2"></i>
                        <span>Social media templates</span>
                      </li>
                      <li className="flex items-center text-dark-600 dark:text-light-300">
                        <i className="bx bx-check text-primary-500 dark:text-primary-400 mr-2"></i>
                        <span>Source files included</span>
                      </li>
                    </>
                  )}
                </ul>
                
                <Link href="/contact" className="block w-full text-center bg-primary-500 hover:bg-primary-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-dark-600 dark:text-light-300 mb-4">Need a custom solution? Contact us for a personalized quote.</p>
            <Link href="/contact" className="inline-flex items-center text-primary-500 dark:text-primary-400 font-medium hover:text-primary-600 dark:hover:text-primary-300 transition-colors duration-200">
              Contact for Custom Quote <i className="bx bx-right-arrow-alt ml-1"></i>
            </Link>
          </div>
        </div>
      </section>
      
      <CTA />
    </MainLayout>
  );
}
