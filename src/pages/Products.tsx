import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingCart, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const { toast } = useToast();

  const categories = ["All", "Microcontrollers", "Sensors", "Modules", "ICs", "Power Supply", "Displays"];

  useEffect(() => {
    fetchProducts();
  }, [filter]);

  const fetchProducts = async () => {
    setLoading(true);
    let query = supabase.from("products").select("*");
    
    if (filter !== "All") {
      query = query.eq("category", filter);
    }

    const { data, error } = await query;
    if (!error && data) {
      setProducts(data);
    }
    setLoading(false);
  };

  const addToCart = async (product: any) => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      toast({
        title: "Login Required",
        description: "Please login to add items to cart",
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase.from("cart_items").insert({
      user_id: session.user.id,
      item_id: product.id,
      item_type: "product",
      quantity: 1,
    });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to add to cart",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: `${product.name} added to cart!`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold gradient-text mb-4">Electronic Components Store</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              High-quality components for your projects
            </p>
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

          {/* Products Grid */}
          {loading ? (
            <div className="text-center text-muted-foreground">Loading products...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="glass-card hover-lift overflow-hidden group">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={product.image_url || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                    {product.new_arrival && (
                      <Badge className="absolute top-2 left-2 bg-secondary">New</Badge>
                    )}
                    {product.best_seller && (
                      <Badge className="absolute top-2 right-2 bg-primary">Best Seller</Badge>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1 group-hover:text-primary transition-smooth line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl font-bold text-primary">₹{product.price}</span>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Package className="w-4 h-4" />
                        {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => addToCart(product)}
                      disabled={product.stock === 0}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {products.length === 0 && !loading && (
            <div className="text-center text-muted-foreground py-12">
              No products found. Check back soon!
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
