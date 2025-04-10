import { useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import { processSteps } from "@/lib/data";
import { Link } from "wouter";
import CTA from "@/components/home/CTA";

export default function ProcessPage() {
  // Set document title on mount
  useEffect(() => {
    document.title = "Our Process | REGC Online";
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
            <p className="inline-block bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 text-primary-600 dark:text-primary-400 font-medium rounded-full px-4 py-1 mb-6">Our Workflow</p>
            
            <h1 className="text-4xl md:text-5xl font-bold font-josefin text-dark-800 dark:text-white leading-tight mb-6 max-w-4xl">
              Streamlined <span className="gradient-text">Process</span> for Consistent Results
            </h1>
            
            <p className="text-lg md:text-xl text-dark-600 dark:text-light-300 mb-10 max-w-2xl">
              Our proven workflow ensures efficient project delivery, clear communication, and quality outcomes for every client partnership.
            </p>
          </div>
        </div>
      </section>
      
      {/* Detailed Process Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative">
            {/* Process Timeline (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-100 dark:bg-primary-900/30 transform -translate-x-1/2"></div>
            
            <div className="space-y-24">
              {processSteps.map((step, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div key={step.step} className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
                    {/* Step number bubble (always visible) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg md:block">
                      {step.step}
                    </div>
                    
                    <div className={`${isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16 md:col-start-2"} relative`}>
                      <div className={`hidden md:block absolute top-4 w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400 ${
                        isEven ? "right-0 transform translate-x-10" : "left-0 transform -translate-x-10"
                      }`}></div>
                      
                      <div className="bg-light-100 dark:bg-dark-700 rounded-xl p-8 shadow-lg">
                        <div className="flex flex-col items-start">
                          <span className="inline-block bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 dark:text-primary-400 font-medium rounded-full px-3 py-1 mb-3">
                            {step.timeframe}
                          </span>
                          <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">{step.title}</h3>
                          <p className="text-dark-600 dark:text-light-300 mb-6 text-lg">
                            {step.description}
                          </p>
                          
                          {/* Specific details for each step */}
                          {step.step === 1 && (
                            <div className="space-y-3 text-dark-600 dark:text-light-300 mb-4">
                              <p className="flex items-start">
                                <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-2"></i>
                                <span>In-depth conversation about your business goals and challenges</span>
                              </p>
                              <p className="flex items-start">
                                <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-2"></i>
                                <span>Analysis of target audience and market positioning</span>
                              </p>
                              <p className="flex items-start">
                                <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-2"></i>
                                <span>Preliminary budget and timeline discussion</span>
                              </p>
                            </div>
                          )}
                          
                          {step.step === 2 && (
                            <div className="space-y-3 text-dark-600 dark:text-light-300 mb-4">
                              <p className="flex items-start">
                                <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-2"></i>
                                <span>Custom marketing strategy development</span>
                              </p>
                              <p className="flex items-start">
                                <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-2"></i>
                                <span>Detailed project timeline with milestones</span>
                              </p>
                              <p className="flex items-start">
                                <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-2"></i>
                                <span>Specific KPIs and success metrics definition</span>
                              </p>
                            </div>
                          )}
                          
                          {step.step === 3 && (
                            <div className="space-y-3 text-dark-600 dark:text-light-300 mb-4">
                              <p className="flex items-start">
                                <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-2"></i>
                                <span>Website development or optimization</span>
                              </p>
                              <p className="flex items-start">
                                <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-2"></i>
                                <span>Content creation and campaign setup</span>
                              </p>
                              <p className="flex items-start">
                                <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-2"></i>
                                <span>Regular progress updates and feedback integration</span>
                              </p>
                            </div>
                          )}
                          
                          {step.step === 4 && (
                            <div className="space-y-3 text-dark-600 dark:text-light-300 mb-4">
                              <p className="flex items-start">
                                <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-2"></i>
                                <span>Performance tracking and analytics setup</span>
                              </p>
                              <p className="flex items-start">
                                <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-2"></i>
                                <span>Data-driven optimization of campaigns</span>
                              </p>
                              <p className="flex items-start">
                                <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-2"></i>
                                <span>Comprehensive reports with insights and recommendations</span>
                              </p>
                            </div>
                          )}
                          
                          {step.step === 5 && (
                            <div className="space-y-3 text-dark-600 dark:text-light-300 mb-4">
                              <p className="flex items-start">
                                <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-2"></i>
                                <span>Ongoing maintenance and updates</span>
                              </p>
                              <p className="flex items-start">
                                <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-2"></i>
                                <span>Strategic consultations for business growth</span>
                              </p>
                              <p className="flex items-start">
                                <i className="bx bx-check-circle text-primary-500 dark:text-primary-400 mt-1 mr-2"></i>
                                <span>Proactive identification of new opportunities</span>
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Image side */}
                    <div className={`${!isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16 md:col-start-2"} md:flex md:items-center hidden md:block`}>
                      <div className="bg-gradient-to-br from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 p-5 rounded-xl shadow-lg">
                        <img 
                          src={`https://images.unsplash.com/photo-${
                            step.step === 1 ? "1556761175-5973dc0f32e7" : 
                            step.step === 2 ? "1517245386807-bb43f82c33c4" : 
                            step.step === 3 ? "1552664730-9b6172505a44" : 
                            step.step === 4 ? "1551288049-bebda4e38f71" : 
                            "1600880292089-90a455bb6dbf"
                          }?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`} 
                          alt={`Step ${step.step}: ${step.title}`} 
                          className="rounded-lg w-full h-auto" 
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-light-100 dark:bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-primary-500 dark:text-primary-400 font-medium mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold font-josefin text-dark-800 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-dark-600 dark:text-light-300 max-w-2xl mx-auto">
              Find answers to common questions about our process and working with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">How long does the typical project take?</h3>
              <p className="text-dark-600 dark:text-light-300">
                Project timelines vary based on scope and complexity. Website projects typically take 3-6 weeks, while ongoing services like social media management are structured on monthly cycles. During our discovery call, we'll provide specific timeline estimates for your project.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">What information do you need to get started?</h3>
              <p className="text-dark-600 dark:text-light-300">
                To kickstart your project, we'll need information about your business, target audience, current marketing efforts, goals, and budget. Any existing brand guidelines or materials are also helpful. Our discovery call is designed to gather this information efficiently.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">How do you measure success?</h3>
              <p className="text-dark-600 dark:text-light-300">
                We establish clear KPIs based on your business goals, whether that's website traffic, lead generation, conversion rates, or social engagement. We provide regular reports tracking these metrics and continually optimize our strategies to improve results.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">What if I need changes after implementation?</h3>
              <p className="text-dark-600 dark:text-light-300">
                Our process includes revision cycles for feedback integration. For ongoing services, we offer maintenance packages to address changes and updates. We're committed to your satisfaction and will work with you to ensure the final deliverables meet your expectations.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
      
      <CTA />
    </MainLayout>
  );
}
