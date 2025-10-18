import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to logout. Please try again.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Logged out successfully",
      });
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-primary/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Zap className="w-8 h-8 text-primary group-hover:text-secondary transition-smooth group-hover:rotate-12" />
              <div className="absolute inset-0 bg-primary blur-lg opacity-0 group-hover:opacity-70 transition-smooth animate-pulse" />
            </div>
            <span className="text-xl font-bold gradient-text">Last Minutes Engineer</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth relative group ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-primary transform origin-left transition-smooth ${
                    location.pathname === link.path
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </Link>
            {user ? (
              <div className="flex items-center space-x-2">
                <Link to="/account">
                  <Button variant="outline" size="icon">
                    <User className="w-5 h-5" />
                  </Button>
                </Link>
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button variant="hero">Login</Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 glass-card mt-2 rounded-lg animate-fade-in">
            <div className="flex flex-col space-y-2 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                    location.pathname === link.path
                      ? "bg-primary/20 text-primary"
                      : "text-foreground/80 hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-border pt-4 space-y-2">
                <Link to="/cart" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Cart
                  </Button>
                </Link>
                {user ? (
                  <>
                    <Link to="/account" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full">
                        <User className="w-4 h-4 mr-2" />
                        Account
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full" onClick={handleLogout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <Link to="/auth" onClick={() => setIsOpen(false)}>
                    <Button variant="hero" className="w-full">
                      Login / Sign Up
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
