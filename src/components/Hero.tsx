import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-block">
            <div className="glass-card px-6 py-3 rounded-full border border-primary/50 glow-primary">
              <span className="text-sm font-medium gradient-text">⚡ Empowering Innovation Since 2020</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">Last Minutes Engineer</span>
            <br />
            <span className="text-foreground">Your Vision, Our Circuit</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Innovative IoT & Electronics Projects — Ready for Students, Startups, and Makers
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/projects">
              <Button variant="hero" size="lg" className="group">
                🚀 Explore Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="glass" size="lg" className="group">
                🧩 Shop Components
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            {[
              { icon: "⚡", number: "500+", label: "Projects Delivered" },
              { icon: "🎯", number: "1000+", label: "Happy Clients" },
              { icon: "🏆", number: "50+", label: "Workshops Done" },
            ].map((stat, idx) => (
              <div key={idx} className="glass-card p-6 hover-lift">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold gradient-text mb-1">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
