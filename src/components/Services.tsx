import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Cpu, 
  Radio, 
  CircuitBoard, 
  Briefcase, 
  Users,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Custom IoT Development",
    description: "End-to-end IoT solutions with sensors, cloud integration, and mobile apps",
  },
  {
    icon: CircuitBoard,
    title: "PCB Design & Fabrication",
    description: "Professional PCB design, prototyping, and manufacturing services",
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
  {
    icon: Users,
    title: "Training & Workshops",
    description: "Hands-on workshops for IoT, robotics, and embedded systems",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for all your tech needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="glass-card p-6 hover:scale-105 transition-smooth hover:glow-primary group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-4 relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary p-1 group-hover:glow-primary transition-smooth">
                    <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-smooth" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" className="group">
            Let's Build Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
