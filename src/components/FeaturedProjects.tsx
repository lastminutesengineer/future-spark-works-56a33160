import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Cpu, Zap } from "lucide-react";
import projectIot from "@/assets/project-iot.jpg";
import projectRobotics from "@/assets/project-robotics.jpg";
import projectEmbedded from "@/assets/project-embedded.jpg";

const projects = [
  {
    title: "Smart Home IoT System",
    description: "Complete home automation with ESP32, sensors, and mobile app control",
    image: projectIot,
    price: "$149",
    features: ["WiFi Enabled", "Mobile App", "Voice Control"],
    icon: Wifi,
    color: "primary",
  },
  {
    title: "AI-Powered Robotics",
    description: "Intelligent robotic arm with computer vision and machine learning",
    image: projectRobotics,
    price: "$299",
    features: ["AI Integration", "Vision System", "Autonomous"],
    icon: Cpu,
    color: "secondary",
  },
  {
    title: "Embedded Systems Kit",
    description: "Professional PCB design with advanced microcontroller integration",
    image: projectEmbedded,
    price: "$199",
    features: ["Custom PCB", "Real-time OS", "Industrial Grade"],
    icon: Zap,
    color: "accent",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our cutting-edge IoT and electronics solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={project.title}
                className="group glass-card overflow-hidden border-white/10 hover:border-primary/50 transition-smooth hover:scale-105 hover:glow-primary animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 glass-card p-3 rounded-full glow-primary">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 left-4 glass-card px-4 py-2 rounded-full">
                    <span className="text-lg font-bold gradient-text">{project.price}</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:gradient-text transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button variant="ghost" className="w-full group/btn">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="gradient" size="lg" className="group">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
