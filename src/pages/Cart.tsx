import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { Trash2, ShoppingBag } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/auth");
      return;
    }
    setUser(session.user);
    fetchCart(session.user.id);
  };

  const fetchCart = async (userId: string) => {
    const { data, error } = await supabase
      .from("cart_items")
      .select("*")
      .eq("user_id", userId);

    if (!error && data) {
      const itemsWithDetails = await Promise.all(
        data.map(async (item) => {
          const table = item.item_type === "project" ? "projects" : "products";
          const { data: itemData } = await supabase
            .from(table)
            .select("*")
            .eq("id", item.item_id)
            .single();
          return { ...item, details: itemData };
        })
      );
      setCartItems(itemsWithDetails);
    }
    setLoading(false);
  };

  const removeItem = async (id: string) => {
    const { error } = await supabase.from("cart_items").delete().eq("id", id);
    if (!error) {
      setCartItems(cartItems.filter((item) => item.id !== id));
      toast({ title: "Success", description: "Item removed from cart" });
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.details?.price || 0) * item.quantity, 0);
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout",
      description: "Payment integration coming soon!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold gradient-text mb-8">Shopping Cart</h1>

          {loading ? (
            <div className="text-center text-muted-foreground">Loading cart...</div>
          ) : cartItems.length === 0 ? (
            <Card className="glass-card p-12 text-center">
              <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6">Add some items to get started!</p>
              <Button variant="hero" onClick={() => navigate("/projects")}>
                Browse Projects
              </Button>
            </Card>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {cartItems.map((item) => (
                  <Card key={item.id} className="glass-card p-6 flex items-center gap-4">
                    <img
                      src={item.details?.image_url || "/placeholder.svg"}
                      alt={item.details?.title || item.details?.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">
                        {item.details?.title || item.details?.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.item_type === "project" ? "Project" : "Product"}
                      </p>
                      <p className="text-primary font-bold mt-1">
                        ₹{item.details?.price} × {item.quantity}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="w-5 h-5 text-destructive" />
                    </Button>
                  </Card>
                ))}
              </div>

              <Card className="glass-card p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-3xl font-bold gradient-text">
                    ₹{calculateTotal().toFixed(2)}
                  </span>
                </div>
                <Button variant="hero" className="w-full" onClick={handleCheckout}>
                  Proceed to Checkout
                </Button>
              </Card>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
