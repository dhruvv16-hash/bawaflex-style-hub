import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Mock product data
const products = [
  {
    id: 1,
    name: "404 FEELING",
    price: "Rs. 790.00",
    image: "https://source.unsplash.com/random/500x500/?t-shirt",
    category: "T-Shirts",
  },
  {
    id: 2,
    name: "Flex Graphic Tee",
    price: "Rs. 690.00",
    image: "https://source.unsplash.com/random/500x500/?t-shirt,graphic",
    category: "T-Shirts",
  },
  {
    id: 3,
    name: "Street Joggers",
    price: "Rs. 1,290.00",
    image: "https://source.unsplash.com/random/500x500/?joggers",
    category: "Bottoms",
  },
  {
    id: 4,
    name: "Signature Cap",
    price: "Rs. 590.00",
    image: "https://source.unsplash.com/random/500x500/?cap",
    category: "Accessories",
  },
  {
    id: 5,
    name: "Limited Edition Hoodie",
    price: "Rs. 1,690.00",
    image: "https://source.unsplash.com/random/500x500/?hoodie",
    category: "Hoodies",
  },
  {
    id: 6,
    name: "Oversized Tee",
    price: "Rs. 790.00",
    image: "https://source.unsplash.com/random/500x500/?t-shirt,oversized",
    category: "T-Shirts",
  },
];

const Shop = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 py-8 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">SHOP ALL</h1>
            <p className="text-lg text-muted-foreground">
              Discover our full collection of premium streetwear
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const productLink = `/product/${product.id}`;
              return (
                <div
                  key={product.id}
                  className="group animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link to={productLink} className="block">
                    <div className="relative overflow-hidden bg-card aspect-square mb-4 border border-border">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {product.category}
                    </p>
                    <Link to={productLink}>
                      <h3 className="text-xl font-bold hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-lg font-semibold">{product.price}</p>
                    <Link to={productLink}>
                      <Button variant="default" size="sm" className="w-full mt-2">
                        View Product
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
