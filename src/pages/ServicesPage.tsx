import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Zap, Cpu, Smartphone, Brain, Wrench, GraduationCap, Users } from "lucide-react";

const iconMap: Record<string, any> = {
  zap: Zap,
  cpu: Cpu,
  smartphone: Smartphone,
  brain: Brain,
  wrench: Wrench,
  graduation: GraduationCap,
  users: Users,
};

const ServicesPage = () => {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("order_index");

    if (!error && data) {
      setServices(data);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold gradient-text mb-4">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive engineering solutions for your tech needs
            </p>
          </div>

          {loading ? (
            <div className="text-center text-muted-foreground">Loading services...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = iconMap[service.icon] || Zap;
                return (
                  <Card
                    key={service.id}
                    className="glass-card p-8 hover-lift group text-center"
                  >
                    <div className="relative inline-block mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                        <IconComponent className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-primary blur-xl opacity-0 group-hover:opacity-50 transition-smooth" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-smooth">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center glass-card p-8 hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">500+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center glass-card p-8 hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center glass-card p-8 hover-lift">
              <div className="text-5xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Workshops Done</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;
