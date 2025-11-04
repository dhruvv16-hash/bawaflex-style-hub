import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

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
                  <a href={productLink} className="block">
                    <div className="relative overflow-hidden bg-card aspect-square mb-4 border border-border">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </a>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {product.category}
                    </p>
                    <a href={productLink}>
                      <h3 className="text-xl font-bold hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                    </a>
                    <p className="text-lg font-semibold">{product.priceDisplay}</p>
                    <Button variant="default" size="sm" className="w-full mt-2">
                      View Product
                    </Button>
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
