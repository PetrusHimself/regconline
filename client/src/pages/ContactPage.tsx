import { useEffect, useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import ContactForm from "@/components/ContactForm";
import BudgetCalculator from "@/components/BudgetCalculator";
import { contactInfo } from "@/lib/data";

export default function ContactPage() {
  // Set document title on mount
  useEffect(() => {
    document.title = "Contact Us | REGC Online";
  }, []);
  
  // State for budget calculator modal
  const [budgetCalculatorOpen, setBudgetCalculatorOpen] = useState(false);
  
  return (
    <MainLayout>
      {/* Header Section */}
      <section className="pt-16 pb-24 md:pt-24 md:pb-32 relative overflow-hidden bg-light-100 dark:bg-dark-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-dark-900 dark:to-dark-800 -z-10"></div>
        <div className="absolute -right-64 top-0 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-50 -z-10"></div>
        <div className="absolute -left-64 bottom-0 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full filter blur-3xl opacity-50 -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <p className="inline-block bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 text-primary-600 dark:text-primary-400 font-medium rounded-full px-4 py-1 mb-6">Get In Touch</p>
            
            <h1 className="text-4xl md:text-5xl font-bold font-josefin text-dark-800 dark:text-white leading-tight mb-6 max-w-4xl">
              Let's Discuss Your <span className="gradient-text">Marketing Goals</span>
            </h1>
            
            <p className="text-lg md:text-xl text-dark-600 dark:text-light-300 mb-10 max-w-2xl">
              Reach out to discuss how we can help you establish a strong brand presence and convert leads into paying customers.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 bg-light-100 dark:bg-dark-700 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-500/10 dark:bg-primary-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <i className="bx bx-envelope text-xl text-primary-500 dark:text-primary-400"></i>
                  </div>
                  <div>
                    <p className="font-medium text-dark-800 dark:text-white mb-1">Email Us</p>
                    <a href={`mailto:${contactInfo.emails.general}`} className="text-dark-600 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">{contactInfo.emails.general}</a>
                    <p className="text-sm text-dark-500 dark:text-light-400 mt-1">General inquiries</p>
                    
                    <a href={`mailto:${contactInfo.emails.sales}`} className="block mt-2 text-dark-600 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">{contactInfo.emails.sales}</a>
                    <p className="text-sm text-dark-500 dark:text-light-400 mt-1">Sales inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-500/10 dark:bg-primary-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <i className="bx bxl-whatsapp text-xl text-primary-500 dark:text-primary-400"></i>
                  </div>
                  <div>
                    <p className="font-medium text-dark-800 dark:text-white mb-1">WhatsApp</p>
                    <a href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`} className="text-dark-600 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">{contactInfo.whatsapp}</a>
                    <p className="text-sm text-dark-500 dark:text-light-400 mt-1">{contactInfo.whatsappHours}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-500/10 dark:bg-primary-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <i className="bx bx-globe text-xl text-primary-500 dark:text-primary-400"></i>
                  </div>
                  <div>
                    <p className="font-medium text-dark-800 dark:text-white mb-3">Follow Us</p>
                    <div className="flex space-x-4">
                      <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="text-dark-600 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
                        <i className="bx bxl-instagram text-2xl"></i>
                      </a>
                      <a href={contactInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="text-dark-600 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
                        <i className="bx bxl-twitter text-2xl"></i>
                      </a>
                      <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="text-dark-600 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
                        <i className="bx bxl-facebook text-2xl"></i>
                      </a>
                      <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-dark-600 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
                        <i className="bx bxl-linkedin text-2xl"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-light-300 dark:border-dark-600">
                <button 
                  onClick={() => setBudgetCalculatorOpen(true)}
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  <i className="bx bx-calculator mr-2 text-xl"></i> Open Budget Calculator
                </button>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-light-100 dark:bg-dark-700 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-6">Service Request Form</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-light-100 dark:bg-dark-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-primary-500 dark:text-primary-400 font-medium mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold font-josefin text-dark-800 dark:text-white mb-4">Common Questions</h2>
            <p className="text-dark-600 dark:text-light-300 max-w-2xl mx-auto">
              Answers to questions we commonly receive from potential clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">How quickly can you start on my project?</h3>
              <p className="text-dark-600 dark:text-light-300">
                We typically start new projects within 1-2 weeks of contract signing. For urgent needs, we offer expedited services for select projects. Contact us to discuss your timeline.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">Do you offer ongoing maintenance?</h3>
              <p className="text-dark-600 dark:text-light-300">
                Yes, we offer various maintenance packages for websites and ongoing services for social media and advertising campaigns. We'll recommend the appropriate option based on your needs.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">How do your payment terms work?</h3>
              <p className="text-dark-600 dark:text-light-300">
                For projects, we typically require a 50% deposit to begin work, with the remaining balance due upon completion. For ongoing services, we offer monthly retainer agreements with payments at the beginning of each month.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">What industries do you work with?</h3>
              <p className="text-dark-600 dark:text-light-300">
                We work with clients across various industries including e-commerce, professional services, healthcare, education, technology, and hospitality. Our strategies are customized for each industry's specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-josefin text-dark-800 dark:text-white mb-4">We Serve Clients Globally</h2>
            <p className="text-dark-600 dark:text-light-300 max-w-2xl mx-auto">
              While we're based in South Africa, we work with clients around the world through our digital-first approach.
            </p>
          </div>
          
          <div className="bg-light-100 dark:bg-dark-700 p-4 rounded-xl shadow-md">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden h-96">
              {/* Replace with actual map implementation */}
              <div className="w-full h-full bg-light-200 dark:bg-dark-600 flex items-center justify-center">
                <p className="text-dark-600 dark:text-light-300 text-lg">Interactive Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Budget Calculator Modal */}
      <BudgetCalculator 
        isOpen={budgetCalculatorOpen} 
        onClose={() => setBudgetCalculatorOpen(false)}
      />
    </MainLayout>
  );
}
