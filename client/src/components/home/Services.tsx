import { Link } from "wouter";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-primary-500 dark:text-primary-400 font-medium mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold font-josefin text-dark-800 dark:text-white mb-4">Expert Marketing Solutions</h2>
          <p className="text-dark-600 dark:text-light-300 max-w-2xl mx-auto">
            We offer comprehensive digital marketing services designed to elevate your brand and drive measurable results for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card bg-light-100 dark:bg-dark-700 rounded-xl p-6 shadow-md">
              <div className="w-14 h-14 bg-primary-500/10 dark:bg-primary-500/20 rounded-lg flex items-center justify-center mb-5">
                <i className={`bx ${service.icon} text-2xl text-primary-500 dark:text-primary-400`}></i>
              </div>
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">{service.title}</h3>
              <p className="text-dark-600 dark:text-light-300 mb-5">
                {service.description}
              </p>
              <Link href="/contact" className="inline-flex items-center text-primary-500 dark:text-primary-400 font-medium hover:text-primary-600 dark:hover:text-primary-300 transition-colors duration-200">
                Learn more <i className="bx bx-right-arrow-alt ml-1"></i>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/contact" className="inline-block bg-primary-500 hover:bg-primary-600 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-300">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
