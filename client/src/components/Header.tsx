import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import DarkModeToggle from "./DarkModeToggle";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  // Determine if a nav link is active
  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className={cn(
      "sticky top-0 z-50 backdrop-blur-sm",
      isScrolled ? "bg-white/90 dark:bg-dark-800/90 shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold font-josefin bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">REGC</span>
            <span className="text-2xl font-light font-josefin ml-1 text-dark-800 dark:text-white">Online</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={cn(
                "nav-link font-medium text-dark-800 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200",
                isActive("/") && "nav-link-active"
              )}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={cn(
                "nav-link font-medium text-dark-800 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200",
                isActive("/services") && "nav-link-active"
              )}
            >
              Services
            </Link>
            <Link 
              href="/process" 
              className={cn(
                "nav-link font-medium text-dark-800 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200",
                isActive("/process") && "nav-link-active"
              )}
            >
              Process
            </Link>
            <Link 
              href="/portfolio" 
              className={cn(
                "nav-link font-medium text-dark-800 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200",
                isActive("/portfolio") && "nav-link-active"
              )}
            >
              Work
            </Link>
            <Link 
              href="/blog" 
              className={cn(
                "nav-link font-medium text-dark-800 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200",
                isActive("/blog") && "nav-link-active"
              )}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={cn(
                "nav-link font-medium text-dark-800 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200",
                isActive("/contact") && "nav-link-active"
              )}
            >
              Contact
            </Link>
          </nav>
          
          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <DarkModeToggle />
            
            {/* Contact button */}
            <Link 
              href="/contact" 
              className="hidden sm:block bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white py-2 px-5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-dark-800 dark:text-white"
            >
              <i className={`bx ${mobileMenuOpen ? 'bx-x' : 'bx-menu'} text-3xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden bg-white dark:bg-dark-800 shadow-md absolute top-full left-0 right-0 py-4 px-6 transition-all duration-300 ease-in-out",
        mobileMenuOpen ? "block" : "hidden"
      )}>
        <div className="flex flex-col space-y-4">
          <Link 
            href="/" 
            className="font-medium text-dark-800 dark:text-white hover:text-primary-500 transition-colors duration-200"
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className="font-medium text-dark-800 dark:text-white hover:text-primary-500 transition-colors duration-200"
          >
            Services
          </Link>
          <Link 
            href="/process" 
            className="font-medium text-dark-800 dark:text-white hover:text-primary-500 transition-colors duration-200"
          >
            Process
          </Link>
          <Link 
            href="/portfolio" 
            className="font-medium text-dark-800 dark:text-white hover:text-primary-500 transition-colors duration-200"
          >
            Work
          </Link>
          <Link 
            href="/blog" 
            className="font-medium text-dark-800 dark:text-white hover:text-primary-500 transition-colors duration-200"
          >
            Blog
          </Link>
          <Link 
            href="/contact" 
            className="font-medium text-dark-800 dark:text-white hover:text-primary-500 transition-colors duration-200"
          >
            Contact
          </Link>
          <Link 
            href="/contact" 
            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2 px-4 rounded-lg font-medium text-center transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
