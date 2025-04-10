import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  
  useEffect(() => {
    // Check if the user has already set cookie preference
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Delay showing the banner to avoid flash
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };
  
  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowConsent(false);
  };
  
  if (!showConsent) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-700 shadow-lg p-4 z-40 flex flex-col md:flex-row items-center justify-between">
      <div className="mb-4 md:mb-0 md:mr-6">
        <p className="text-dark-800 dark:text-white font-medium">We use cookies to enhance your experience.</p>
        <p className="text-sm text-dark-600 dark:text-light-300">By continuing to visit this site you agree to our use of cookies.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <a href="#" className="text-primary-500 dark:text-primary-400 text-sm underline">
          Privacy Policy
        </a>
        <Button 
          onClick={acceptCookies}
          className="bg-primary-500 hover:bg-primary-600 text-white"
        >
          Accept Cookies
        </Button>
        <Button 
          onClick={declineCookies}
          variant="outline"
          className="bg-light-200 dark:bg-dark-600 text-dark-800 dark:text-white hover:bg-light-300 dark:hover:bg-dark-500"
        >
          Decline
        </Button>
      </div>
    </div>
  );
}
