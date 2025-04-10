import { Link } from "wouter";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="pt-16 pb-24 md:pt-24 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-dark-900 dark:to-dark-800 -z-10"></div>
      <div className="absolute -right-64 top-0 w-96 h-96 bg-primary-200 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      <div className="absolute -left-64 bottom-0 w-96 h-96 bg-secondary-200 dark:bg-secondary-900/20 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <p className="inline-block bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-500/20 dark:to-secondary-500/20 text-primary-600 dark:text-primary-400 font-medium rounded-full px-4 py-1 mb-6">
            Digital Marketing Agency
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-josefin text-dark-800 dark:text-white leading-tight mb-6 max-w-4xl">
            Helping businesses establish <span className="gradient-text">strong brand presence</span> and convert leads into <span className="gradient-text">paying customers</span>
          </h1>
          
          <p className="text-lg md:text-xl text-dark-600 dark:text-light-300 mb-10 max-w-2xl">
            We craft result-driven digital experiences that connect with your audience and drive business growth through strategic marketing solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services" className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-center">
              Explore Services
            </Link>
            <Link href="/contact" className="bg-white dark:bg-dark-700 text-primary-500 dark:text-primary-400 border border-primary-500 dark:border-primary-400 py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:bg-primary-50 dark:hover:bg-dark-600 text-center">
              Get in Touch
            </Link>
          </div>
          
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {stats.map((stat, index) => (
              <div className="flex flex-col items-center" key={index}>
                <p className="text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-400 mb-2">{stat.value}</p>
                <p className="text-sm text-dark-600 dark:text-light-300 text-center">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
