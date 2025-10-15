import { Search, Wrench, GraduationCap } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose Your Project",
    description: "Browse our collection of innovative IoT, robotics, and embedded systems projects",
    color: "primary",
  },
  {
    icon: Wrench,
    title: "Build & Customize",
    description: "Get complete documentation, circuit diagrams, code, and video tutorials",
    color: "secondary",
  },
  {
    icon: GraduationCap,
    title: "Learn & Innovate",
    description: "Master new skills and bring your tech ideas to life with our guidance",
    color: "accent",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to start your tech journey
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Lines (Desktop) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Card */}
                <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-smooth group">
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1 group-hover:glow-primary transition-smooth">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition-smooth" />
                      </div>
                    </div>
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold text-lg glow-primary">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold group-hover:gradient-text transition-smooth">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
