import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Mock product data
const products = [
  {
    id: 1,
    name: "Classic Black Hoodie",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop",
    category: "Hoodies",
  },
  {
    id: 2,
    name: "Flex Graphic Tee",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop",
    category: "T-Shirts",
  },
  {
    id: 3,
    name: "Street Joggers",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=500&fit=crop",
    category: "Bottoms",
  },
  {
    id: 4,
    name: "Signature Cap",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop",
    category: "Accessories",
  },
  {
    id: 5,
    name: "Limited Edition Hoodie",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1620799140188-3b2a7589af0b?w=500&h=500&fit=crop",
    category: "Hoodies",
  },
  {
    id: 6,
    name: "Oversized Tee",
    price: "$54.99",
    image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=500&h=500&fit=crop",
    category: "T-Shirts",
  },
];

const Shop = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-black mb-4">SHOP ALL</h1>
            <p className="text-lg text-muted-foreground">
              Discover our full collection of premium streetwear
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden bg-secondary aspect-square mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-lg font-semibold">{product.price}</p>
                  <Button variant="default" size="sm" className="w-full mt-2">
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
