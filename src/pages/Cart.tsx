import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  // Mock empty cart state
  const cartItems: any[] = [];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-8 animate-fade-up">YOUR CART</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16 animate-fade-up">
              <p className="text-xl text-muted-foreground mb-6">Your cart is empty</p>
              <Link to="/shop">
                <Button variant="hero" size="lg">
                  Start Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-card p-4 border border-border">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover bg-secondary"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <p className="text-muted-foreground">Size: {item.size}</p>
                      <p className="font-semibold mt-2">{item.price}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card p-6 border border-border sticky top-24">
                  <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold">$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="font-semibold">$0.00</span>
                    </div>
                    <div className="border-t border-border pt-2 mt-2">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>$0.00</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="hero" size="lg" className="w-full">
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
