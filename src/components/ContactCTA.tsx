import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Animated Background with Grid */}
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] animate-float" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px] animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto glass-card p-12 rounded-3xl glow-primary animate-scale-in hover-3d shadow-elevated">
          <div className="text-center space-y-8">
            {/* Header */}
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold">
                Ready to Build Something <span className="gradient-text">Amazing?</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Let's discuss your project and bring your innovative ideas to life
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-6 py-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col items-center gap-4 p-8 rounded-2xl glass-card hover-3d group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center glow-primary group-hover:scale-110 transition-smooth relative z-10">
                  <MessageSquare className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-center relative z-10">
                  <div className="font-bold text-lg mb-1">Live Chat</div>
                  <div className="text-sm text-muted-foreground">Instant responses</div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 p-8 rounded-2xl glass-card hover-3d group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center glow-primary group-hover:scale-110 transition-smooth relative z-10">
                  <Mail className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-center relative z-10">
                  <div className="font-bold text-lg mb-1">Email Us</div>
                  <div className="text-sm text-muted-foreground">24h response</div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 p-8 rounded-2xl glass-card hover-3d group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center glow-primary group-hover:scale-110 transition-smooth relative z-10">
                  <Phone className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-center relative z-10">
                  <div className="font-bold text-lg mb-1">Call Direct</div>
                  <div className="text-sm text-muted-foreground">Mon-Sat 9-6</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group relative overflow-hidden">
                  <span className="relative z-10">💬 Start a Conversation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-[gradient_3s_ease_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="glass" size="xl" className="hover:scale-105">
                  📞 Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
