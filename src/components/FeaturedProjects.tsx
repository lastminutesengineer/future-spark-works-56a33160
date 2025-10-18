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
    <section ref={ref} className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold holographic mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready-to-use IoT & Electronics projects with complete documentation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <Card key={project.id} className={`glass-card tilt-card overflow-hidden group fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image_url || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <Badge className="absolute top-3 right-3" variant="secondary">
                    {project.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.short_description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">₹{project.price}</span>
                    <Link to={`/projects/${project.id}`}>
                      <Button variant="outline" size="sm">View Details</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center text-muted-foreground py-12">
              Loading projects...
            </div>
          )}
        </div>

        <div className="text-center">
          <Link to="/projects">
            <Button variant="hero" size="lg" className="group magnetic-button neon-border-pulse">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
