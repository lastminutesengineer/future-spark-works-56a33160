import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Last Minutes Engineer</h3>
            <p className="text-sm text-muted-foreground">
              Your Vision, Our Circuit — Building the future with innovative IoT & Electronics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/projects" className="hover:text-primary transition-smooth">Projects</a></li>
              <li><a href="/services" className="hover:text-primary transition-smooth">Services</a></li>
              <li><a href="/products" className="hover:text-primary transition-smooth">Products</a></li>
              <li><a href="/blog" className="hover:text-primary transition-smooth">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/services" className="hover:text-primary transition-smooth">IoT Development</a></li>
              <li><a href="/services" className="hover:text-primary transition-smooth">PCB Mounting</a></li>
              <li><a href="/services" className="hover:text-primary transition-smooth">Embedded Systems</a></li>
              <li><a href="/contact" className="hover:text-primary transition-smooth">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:glow-primary transition-smooth group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:glow-primary transition-smooth group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:glow-primary transition-smooth group"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
              </a>
              <a 
                href="/contact" 
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:glow-primary transition-smooth group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Last Minutes Engineer. All rights reserved. Built with passion for innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
