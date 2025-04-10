import { Link } from "wouter";
import { getYear } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-dark-800 dark:bg-dark-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold font-josefin bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">REGC</span>
              <span className="text-2xl font-light font-josefin ml-1 text-white">Online</span>
            </Link>
            <p className="text-light-300 mb-6">
              Helping businesses establish strong brand presence and convert leads into paying customers.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/regconline" target="_blank" rel="noopener noreferrer" className="text-light-300 hover:text-primary-400 transition-colors duration-200">
                <i className="bx bxl-instagram text-xl"></i>
              </a>
              <a href="https://twitter.com/regconline" target="_blank" rel="noopener noreferrer" className="text-light-300 hover:text-primary-400 transition-colors duration-200">
                <i className="bx bxl-twitter text-xl"></i>
              </a>
              <a href="https://facebook.com/regconline1" target="_blank" rel="noopener noreferrer" className="text-light-300 hover:text-primary-400 transition-colors duration-200">
                <i className="bx bxl-facebook text-xl"></i>
              </a>
              <a href="https://linkedin.com/company/regconline" target="_blank" rel="noopener noreferrer" className="text-light-300 hover:text-primary-400 transition-colors duration-200">
                <i className="bx bxl-linkedin text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-light-300 hover:text-primary-400 transition-colors duration-200">High-Converting Websites</Link></li>
              <li><Link href="/services" className="text-light-300 hover:text-primary-400 transition-colors duration-200">Social Media Management</Link></li>
              <li><Link href="/services" className="text-light-300 hover:text-primary-400 transition-colors duration-200">Meta & Google Ads</Link></li>
              <li><Link href="/services" className="text-light-300 hover:text-primary-400 transition-colors duration-200">Digital Products</Link></li>
              <li><Link href="/services" className="text-light-300 hover:text-primary-400 transition-colors duration-200">SEO Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-light-300 hover:text-primary-400 transition-colors duration-200">Blog</Link></li>
              <li><Link href="/portfolio" className="text-light-300 hover:text-primary-400 transition-colors duration-200">Case Studies</Link></li>
              <li><Link href="/blog" className="text-light-300 hover:text-primary-400 transition-colors duration-200">Marketing Guides</Link></li>
              <li><Link href="/blog" className="text-light-300 hover:text-primary-400 transition-colors duration-200">Free Resources</Link></li>
              <li><Link href="/contact" className="text-light-300 hover:text-primary-400 transition-colors duration-200">Newsletter</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-light-300 hover:text-primary-400 transition-colors duration-200">About Us</Link></li>
              <li><Link href="/contact" className="text-light-300 hover:text-primary-400 transition-colors duration-200">Careers</Link></li>
              <li><Link href="/contact" className="text-light-300 hover:text-primary-400 transition-colors duration-200">Contact</Link></li>
              <li><Link href="/blog" className="text-light-300 hover:text-primary-400 transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link href="/blog" className="text-light-300 hover:text-primary-400 transition-colors duration-200">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-600 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-light-400 text-sm mb-4 sm:mb-0">
            &copy; {getYear()} REGC Online. All rights reserved.
          </p>
          <p className="text-light-400 text-sm">
            Designed and developed with <i className="bx bx-heart text-secondary-500"></i> in South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
