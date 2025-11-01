import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const technologies = [
  { name: "Arduino", icon: "🔷" },
  { name: "Raspberry Pi", icon: "🍓" },
  { name: "ESP32", icon: "📡" },
  { name: "Node-RED", icon: "🔴" },
  { name: "MQTT", icon: "📨" },
  { name: "Python", icon: "🐍" },
  { name: "IoT", icon: "🌐" },
  { name: "AI/ML", icon: "🤖" },
  { name: "Sensors", icon: "📊" },
  { name: "Motors", icon: "⚙️" },
  { name: "PCB Design", icon: "💾" },
  { name: "3D Printing", icon: "🖨️" },
];

const TechShowcase = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 relative overflow-hidden border-y border-border/50">
      {/* Background Grid */}
      <div className="absolute inset-0 circuit-pattern opacity-5" />
      
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="gradient-text">Technologies We Master</span>
          </h3>
          <p className="text-muted-foreground">Cutting-edge tools and platforms</p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative group/scroll">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling Content - Double for seamless loop with hover pause */}
          <div className="flex animate-scroll-smooth group-hover/scroll:pause-animation">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 holographic-card px-8 py-6 group cursor-pointer transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{tech.icon}</span>
                  <span className="font-semibold text-foreground whitespace-nowrap group-hover:gradient-text transition-smooth">
                    {tech.name}
                  </span>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-all duration-300 rounded-lg blur-xl -z-10" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Below */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.3s' }}>
          {[
            { value: "50+", label: "Technologies" },
            { value: "24/7", label: "Support" },
            { value: "100%", label: "Tested" },
            { value: "Fast", label: "Delivery" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-smooth">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
