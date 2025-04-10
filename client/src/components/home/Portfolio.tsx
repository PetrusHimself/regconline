import { Link } from "wouter";
import { portfolioItems } from "@/lib/data";

export default function Portfolio() {
  return (
    <section id="work" className="py-20 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-primary-500 dark:text-primary-400 font-medium mb-2">Our Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold font-josefin text-dark-800 dark:text-white mb-4">Featured Work</h2>
          <p className="text-dark-600 dark:text-light-300 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their marketing goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
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
        
        <div className="mt-12 text-center">
          <Link href="/portfolio" className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
