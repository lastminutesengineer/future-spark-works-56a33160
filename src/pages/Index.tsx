import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechShowcase from "@/components/TechShowcase";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <TechShowcase />
        <FeaturedProjects />
        <HowItWorks />
        <Services />
        <Testimonials />
        <ContactCTA />
        <Footer />
      </div>
      <Chatbot />
    </div>
  );
};

export default Index;
