import { useTheme } from "@/components/ui/theme-provider";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type DarkModeToggleProps = {
  className?: string;
};

export default function DarkModeToggle({ className }: DarkModeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch by waiting for client-side render
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  const isDark = theme === "dark";
  
  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };
  
  return (
    <div className={cn("flex items-center", className)}>
      <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input 
            type="checkbox" 
            id="darkModeToggle" 
            className="sr-only"
            checked={isDark}
            onChange={handleToggle}
          />
          <div className="block w-10 h-6 rounded-full bg-light-300 dark:bg-dark-600"></div>
          <div className={cn(
            "dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform",
            isDark && "translate-x-4"
          )}></div>
        </div>
        <div className="ml-2 text-sm hidden sm:block">
          <i className="bx bx-sun text-lg dark:hidden"></i>
          <i className="bx bx-moon text-lg hidden dark:block"></i>
        </div>
      </label>
    </div>
  );
}
