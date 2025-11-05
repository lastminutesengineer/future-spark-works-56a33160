import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const { ref, isVisible } = useScrollAnimation(0.2);

  useEffect(() => {
    fetchFeaturedProjects();
  }, []);

  const fetchFeaturedProjects = async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("featured", true)
      .limit(3);

    if (!error && data) {
      setProjects(data);
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold holographic mb-4 glitch-text relative">
            Featured Projects
            <span className="absolute inset-0 -z-10 blur-2xl bg-gradient-primary opacity-30 animate-energy-pulse" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready-to-use IoT & Electronics projects with complete documentation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <Card key={project.id} className={`holographic-card overflow-hidden group fade-in-up scan-line-container ${isVisible ? 'visible' : ''}`} style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="relative h-48 overflow-hidden">
                  {/* Circular Icon Overlay with Glow */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="relative w-24 h-24">
                      {/* Strong Glow */}
                      <div className="absolute inset-0 rounded-full bg-primary/40 blur-2xl animate-pulse" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-30" />
                      
                      {/* Circle Border */}
                      <div className="absolute inset-0 rounded-full border-4 border-primary" 
                           style={{ boxShadow: '0 0 30px hsl(var(--primary) / 0.8), 0 0 60px hsl(var(--primary) / 0.5)' }} />
                      
                      {/* View Icon */}
                      <div className="absolute inset-0 flex items-center justify-center text-primary text-4xl">
                        👁️
                      </div>
                    </div>
                  </div>
                  
                  <img
                    src={project.image_url || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:blur-sm transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Badge className="absolute top-3 right-3 animate-glow-pulse z-20" variant="secondary">
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-bold animate-energy-pulse z-20">
                      AI Recommended
                    </div>
                  )}
                </div>
                <div className="p-6 relative">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth glitch-text">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.short_description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold gradient-text animate-glow-pulse">₹{project.price}</span>
                    <Link to={`/projects/${project.id}`}>
                      <Button variant="outline" size="sm" className="energy-border ripple-effect">View Details</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center text-muted-foreground py-12">
              <div className="animate-pulse">Loading projects...</div>
            </div>
          )}
        </div>

        <div className="text-center">
          <Link to="/projects">
            <Button variant="hero" size="lg" className="group magnetic-button neon-border-pulse energy-border ripple-effect">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
