import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <FeaturedProjects />
      <HowItWorks />
      <Services />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
