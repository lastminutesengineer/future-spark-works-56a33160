import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-16 pt-16 scan-line-container">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      
      {/* Floating Gradient Orbs with Morph */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-particle-float animate-morph" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-particle-float animate-morph" style={{ animationDelay: '10s' }} />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] animate-float animate-morph" style={{ animationDelay: '5s' }} />
      
      {/* Holographic Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(155, 77, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(155, 77, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
        }} />
      </div>
      
      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute bg-primary/30 animate-particle-float"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 20 + 's',
              animationDuration: Math.random() * 20 + 10 + 's',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Main Heading with Cinematic Effects */}
          <h1 className="text-6xl md:text-8xl font-bold leading-tight animate-scale-in">
            <span className="holographic inline-block animate-glow-pulse glitch-text relative">
              Last Minutes Engineer
              <span className="absolute inset-0 -z-10 blur-xl bg-gradient-primary opacity-50 animate-energy-pulse" />
            </span>
            <br />
            <span className="text-foreground inline-block mt-4 relative scan-line-container">
              Your Vision, Our Circuit
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary animate-pulse" />
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary blur-sm animate-neon-flicker" />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Innovative IoT & Electronics Projects — Ready for Students, Startups, and Makers
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/projects">
              <Button variant="hero" size="xl" className="group relative overflow-hidden magnetic-button neon-border-pulse energy-border ripple-effect">
                <span className="relative z-10">🚀 Explore Projects</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-smooth relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="glass" size="xl" className="group magnetic-button energy-border ripple-effect">
                🧩 Shop Components
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-smooth" />
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-50 transition-opacity" />
              </Button>
            </Link>
          </div>

          {/* Stats Cards with Holographic Effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto">
            {[
              { icon: "⚡", number: "500+", label: "Projects Delivered" },
              { icon: "🎯", number: "1000+", label: "Happy Clients" },
              { icon: "🏆", number: "50+", label: "Workshops Done" },
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="holographic-card card-3d p-8 group relative overflow-hidden animate-slide-up scan-line-container"
                style={{ animationDelay: `${0.8 + idx * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-5xl mb-3 float-3d" style={{ animationDelay: `${idx * 0.5}s` }}>{stat.icon}</div>
                  <div className="text-4xl font-bold gradient-text mb-2 animate-energy-pulse glitch-text">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
