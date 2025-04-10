import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import Blog from "@/components/home/Blog";
import CTA from "@/components/home/CTA";
import { useEffect } from "react";

export default function HomePage() {
  // Set document title on mount
  useEffect(() => {
    document.title = "REGC Online - Digital Marketing Agency";
  }, []);
  
  return (
    <MainLayout>
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Blog />
      <CTA />
    </MainLayout>
  );
}
