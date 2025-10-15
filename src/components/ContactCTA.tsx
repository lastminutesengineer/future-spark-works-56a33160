import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Phone } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto glass-card p-12 rounded-3xl glow-primary animate-scale-in">
          <div className="text-center space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Build Something <span className="gradient-text">Amazing?</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's discuss your project and bring your innovative ideas to life
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-6 py-8">
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/40 hover:bg-card/60 transition-smooth group">
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center glow-primary">
                  <MessageSquare className="w-7 h-7 text-background" />
                </div>
                <div className="text-center">
                  <div className="font-semibold mb-1">Live Chat</div>
                  <div className="text-sm text-muted-foreground">Quick responses</div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/40 hover:bg-card/60 transition-smooth group">
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center glow-primary">
                  <Mail className="w-7 h-7 text-background" />
                </div>
                <div className="text-center">
                  <div className="font-semibold mb-1">Email Us</div>
                  <div className="text-sm text-muted-foreground">24h response</div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/40 hover:bg-card/60 transition-smooth group">
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center glow-primary">
                  <Phone className="w-7 h-7 text-background" />
                </div>
                <div className="text-center">
                  <div className="font-semibold mb-1">Call Direct</div>
                  <div className="text-sm text-muted-foreground">Mon-Sat 9-6</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="xl">
                💬 Start a Conversation
              </Button>
              <Button variant="glass" size="xl">
                📞 Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
