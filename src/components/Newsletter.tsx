import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { Mail, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const emailSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters")
    .toLowerCase(),
});

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email with Zod
    const validation = emailSchema.safeParse({ email });
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    setLoading(true);
    
    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: validation.data.email });

      if (error) {
        // Handle duplicate email
        if (error.code === "23505") {
          toast.error("This email is already subscribed!");
        } else {
          toast.error("Failed to subscribe. Please try again.");
        }
        return;
      }

      toast.success("🎉 Successfully subscribed to newsletter!");
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/2 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="holographic-card p-8 md:p-12 text-center space-y-6 relative overflow-hidden group">
            {/* Scan Line Effect */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line" />
            
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4 animate-pulse">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  <span className="holographic">Stay Updated</span>
                </h2>
                <Sparkles className="w-5 h-5 text-secondary animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              <p className="text-lg md:text-xl text-muted-foreground">
                Get latest projects, exclusive deals, and tech insights delivered to your inbox
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 holographic-card border-primary/40 focus:border-primary h-12 text-base"
                  disabled={loading}
                />
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={loading}
                  className="group relative overflow-hidden neon-border-pulse energy-border ripple-effect h-12"
                >
                  <span className="relative z-10">
                    {loading ? "Subscribing..." : "Subscribe"}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </div>
            </form>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>No spam</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                <span>Weekly updates</span>
              </div>
            </div>

            {/* Glow Effects */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/30 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
