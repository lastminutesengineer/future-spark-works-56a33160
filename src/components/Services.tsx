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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="glass-card p-8 hover-3d group animate-scale-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity animate-rotate-slow" />
                
                {/* Icon */}
                <div className="mb-6 relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-1 group-hover:glow-primary transition-smooth group-hover:animate-bounce-glow">
                    <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary group-hover:scale-110 group-hover:rotate-12 transition-smooth" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-smooth">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button variant="hero" size="xl" className="group relative overflow-hidden">
            <span className="relative z-10">Request Custom Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-smooth relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-secondary bg-[length:200%_100%] animate-[gradient_3s_ease_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
