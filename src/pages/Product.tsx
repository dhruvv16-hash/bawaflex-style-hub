import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Heart, Mountain, Shirt } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";

interface ProductData {
  id: number;
  name: string;
  price: number;
  description: string;
  tagline: string;
  images: string[];
  sizes: string[];
  category: string;
  materials: string;
  care: string[];
  details: string[];
}

const productData: Record<string, ProductData> = {
  "1": {
    id: 1,
    name: "404 FEELING",
    price: 790.00,
    description: "404 FEELING — emotion not found.",
    tagline: "A glitch between love and regret. Burnt orange strokes on deep navy silence. Crafted under the #बावाflex state of mind.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1620799140188-3b2a7589af0b?w=800&h=800&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "T-Shirts",
    materials: "240 GSM French Terry Cotton, 100% cotton",
    care: [
      "सदा करके धोना — print ka swag safe रहे।",
      "Cold water में (30°C / 86°F max) – warna colors fade ho jayenge, और flex कम।",
      "Mild detergent use करो – bleach और softener का bye-bye करो।",
      "Air-dry या tumble dry low – ताकि tee का style hamesa street-ready रहे।"
    ],
    details: [
      "Double-stitched sleeves & hem – क्योंकि stretching to bol do bye-bye!",
      "Pre-shrunk fabric – shrinkage? बस वही है तक, काफी full flex guaranteed.",
      "Layer it or rock it solo – street ka swag, जैसे चाहे वैसे पहनो।",
      "Everyday ready – class ho ya street, यहाँ तक हमेशा आपके साथ flex करने के लिए तैयार!"
    ]
  },
};

const Product = () => {
  const { id } = useParams();
  const product = id ? productData[id] : null;
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const { addItem } = useCart();

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
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      quantity,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Product Info */}
            <div className="space-y-6 animate-fade-up order-2 lg:order-1">
              <div>
                <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">{product.name}</h1>
                <p className="text-2xl font-bold mb-6">Rs. {product.price.toFixed(2)}</p>
              </div>

              {/* Quantity Selector */}
              <div>
                <label className="block text-sm font-bold mb-3 uppercase tracking-wider">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 border-2 border-border hover:border-foreground transition-colors flex items-center justify-center bg-secondary"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="text-2xl font-bold w-16 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 border-2 border-border hover:border-foreground transition-colors flex items-center justify-center bg-secondary"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Size Selection - moved after quantity */}
              <div>
                <label className="block text-sm font-bold mb-3 uppercase tracking-wider">Select Size</label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 border-2 font-bold transition-all ${
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

              {/* Buttons */}
              <div className="space-y-3">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  onClick={handleAddToCart}
                >
                  BUY IT NOW
                </Button>
              </div>

              {/* Description */}
              <div className="space-y-4 pt-6">
                <p className="text-lg font-semibold">{product.description}</p>
                <p className="text-foreground/80">{product.tagline}</p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6">
                <div className="text-center space-y-2">
                  <Heart className="w-8 h-8 mx-auto" />
                  <p className="text-sm font-bold uppercase">Made With<br/>Care</p>
                </div>
                <div className="text-center space-y-2">
                  <Mountain className="w-8 h-8 mx-auto" />
                  <p className="text-sm font-bold uppercase">बावा Quality</p>
                </div>
                <div className="text-center space-y-2">
                  <Shirt className="w-8 h-8 mx-auto" />
                  <p className="text-sm font-bold uppercase">Premium<br/>Materials</p>
                </div>
                <div className="text-center space-y-2">
                  <Shirt className="w-8 h-8 mx-auto" />
                  <p className="text-sm font-bold uppercase">Classic<br/>Styling</p>
                </div>
              </div>
            </div>

            {/* Right Side - Images */}
            <div className="space-y-4 animate-fade-up order-1 lg:order-2">
              <div className="aspect-square bg-card border border-border overflow-hidden">
                <img
                  src={product.images[currentImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`aspect-square bg-card border-2 overflow-hidden transition-colors ${
                      currentImage === index ? "border-foreground" : "border-border"
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Materials</h3>
              <p className="text-foreground/80">{product.materials}</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Care</h3>
              <ul className="space-y-2 text-foreground/80 list-disc list-inside">
                {product.care.map((item, i) => (
                  <li key={i} className="text-sm">{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Details</h3>
              <ul className="space-y-2 text-foreground/80 list-disc list-inside">
                {product.details.map((item, i) => (
                  <li key={i} className="text-sm">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
