import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
      <Navbar />
      {/* Add padding-top to prevent content from hiding under fixed header */}
      <div className="pt-16">
        <Hero />
        <FeaturedProjects />
        <HowItWorks />
        <Services />
        <ContactCTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
