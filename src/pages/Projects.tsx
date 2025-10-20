import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wifi, Cpu, Heart } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["All", "IoT", "Embedded", "Robotics", "AI/ML", "Academic"];

  useEffect(() => {
    fetchProjects();
  }, [filter]);

  const fetchProjects = async () => {
    setLoading(true);
    let query = supabase.from("projects").select("*");
    
    if (filter !== "All") {
      query = query.eq("category", filter);
    }

    const { data, error } = await query;
    if (!error && data) {
      setProjects(data);
    }
    setLoading(false);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.short_description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tags?.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold gradient-text mb-4">IoT & E&TC Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready-to-use projects with complete documentation, code, and components
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <input
              type="text"
              placeholder="🔍 Search projects by name, description, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl glass-card border border-primary/20 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-smooth"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className="neon-border"
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          {loading ? (
            <div className="text-center text-muted-foreground">Loading projects...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="glass-card hover-lift overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image_url || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.short_description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">₹{project.price}</span>
                      <div className="flex gap-2">
                        {project.tags?.slice(0, 3).map((tag: string, idx: number) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Link to={`/projects/${project.id}`}>
                      <Button variant="hero" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && !loading && (
            <div className="text-center text-muted-foreground py-12">
              No projects found matching your search. Try different keywords!
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
