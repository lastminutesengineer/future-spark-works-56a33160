import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ShoppingCart } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProject();
  }, [id]);

  const fetchProject = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .single();

    if (!error && data) {
      setProject(data);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-12 container mx-auto px-4 text-center">
          <div className="text-muted-foreground">Loading project...</div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-12 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button variant="hero">Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Link to="/projects">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="space-y-4">
              <Card className="glass-card overflow-hidden">
                <img
                  src={project.image_url || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-96 object-cover"
                />
              </Card>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-4">{project.category}</Badge>
                <h1 className="text-4xl font-bold gradient-text mb-4">{project.title}</h1>
                <p className="text-muted-foreground text-lg">{project.short_description}</p>
              </div>

              <div className="flex items-center justify-between p-6 glass-card rounded-2xl">
                <div>
                  <div className="text-sm text-muted-foreground">Price</div>
                  <div className="text-3xl font-bold text-primary">₹{project.price}</div>
                </div>
                <Button variant="hero" size="lg" className="gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
              </div>

              <Card className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </Card>

              {project.tags && project.tags.length > 0 && (
                <Card className="glass-card p-6">
                  <h3 className="text-xl font-bold mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, idx: number) => (
                      <Badge key={idx} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </Card>
              )}

              {project.package_includes && project.package_includes.length > 0 && (
                <Card className="glass-card p-6">
                  <h3 className="text-xl font-bold mb-4">Package Includes</h3>
                  <ul className="space-y-2">
                    {project.package_includes.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
