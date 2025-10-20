import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Cpu, 
  Radio, 
  CircuitBoard, 
  Briefcase, 
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Smartphone,
    title: "Custom IoT Development",
    description: "End-to-end IoT solutions with sensors, cloud integration, and mobile apps",
  },
  {
    icon: CircuitBoard,
    title: "Mount a component on General Purpose PCB",
    description: "Professional component mounting and soldering services on general purpose PCBs",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Advanced microcontroller programming and system integration",
  },
  {
    icon: Radio,
    title: "Wireless Solutions",
    description: "WiFi, Bluetooth, LoRa, and other wireless communication systems",
  },
  {
    icon: Briefcase,
    title: "Final Year Projects",
    description: "Complete academic project support with documentation and guidance",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-morph" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] animate-morph" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold holographic glitch-text relative">
            Our <span className="gradient-text">Services</span>
            <span className="absolute inset-0 -z-10 blur-2xl bg-gradient-primary opacity-30 animate-energy-pulse" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for all your tech needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="holographic-card card-3d p-8 group animate-scale-in relative overflow-hidden scan-line-container"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity animate-rotate-slow" />
                
                {/* Icon */}
                <div className="mb-6 relative z-10 float-3d">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-1 group-hover:glow-primary transition-smooth group-hover:animate-energy-pulse">
                    <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                    </div>
                  </div>
                  <div className="absolute inset-0 blur-xl bg-primary/30 group-hover:bg-primary/50 transition-all animate-energy-pulse" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 gradient-text glitch-text">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="group relative overflow-hidden energy-border ripple-effect neon-border-pulse">
              <span className="relative z-10">Request Custom Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-smooth relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-secondary bg-[length:200%_100%] animate-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
