import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// Mock product data
const productData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Classic Black Hoodie",
    price: 89.99,
    description: "Premium heavyweight cotton hoodie. Built to last, designed for comfort. The perfect essential for any wardrobe.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1620799140188-3b2a7589af0b?w=800&h=800&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Hoodies",
  },
};

const Product = () => {
  const { id } = useParams();
  const product = id ? productData[id] : null;
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-black mb-4">Product Not Found</h1>
            <Link to="/shop">
              <Button variant="default" size="lg">
                Back to Shop
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    toast.success(`Added ${product.name} to cart!`);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4 animate-fade-up">
              <div className="aspect-square bg-secondary overflow-hidden">
                <img
                  src={product.images[currentImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`aspect-square bg-secondary overflow-hidden border-2 transition-colors ${
                      currentImage === index ? "border-foreground" : "border-transparent"
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h1 className="text-4xl md:text-5xl font-black mb-4">{product.name}</h1>
                <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
              </div>

              <p className="text-lg text-muted-foreground">{product.description}</p>

              {/* Size Selection */}
              <div>
                <label className="block text-sm font-semibold mb-3 uppercase tracking-wider">
                  Select Size
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-16 h-12 border-2 font-semibold transition-all ${
                        selectedSize === size
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold mb-3 uppercase tracking-wider">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border-2 border-border hover:border-foreground transition-colors flex items-center justify-center"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-xl font-bold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border-2 border-border hover:border-foreground transition-colors flex items-center justify-center"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>

              {/* Product Details */}
              <div className="border-t border-border pt-6 space-y-2 text-sm">
                <p className="flex justify-between">
                  <span className="text-muted-foreground">Material</span>
                  <span className="font-semibold">100% Premium Cotton</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-muted-foreground">Fit</span>
                  <span className="font-semibold">Relaxed Oversized</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold">Free on orders $75+</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
