import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import collectionNew from "@/assets/collection-new.jpg";
import collectionEssentials from "@/assets/collection-essentials.jpg";
import collectionLimited from "@/assets/collection-limited.jpg";

const collections = [
  {
    title: "New Arrivals",
    description: "Fresh drops, latest styles. Get them before they're gone.",
    image: collectionNew,
    link: "/shop?collection=new",
    items: "24 items",
  },
  {
    title: "Streetwear Essentials",
    description: "Core pieces for your everyday flex. Timeless, versatile, essential.",
    image: collectionEssentials,
    link: "/shop?collection=essentials",
    items: "32 items",
  },
  {
    title: "Limited Edition Drops",
    description: "Exclusive releases. Limited quantities. Act fast or miss out.",
    image: collectionLimited,
    link: "/shop?collection=limited",
    items: "12 items",
  },
];

const Collections = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-black mb-6">COLLECTIONS</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collections. Each one tells a story, each piece makes a statement.
            </p>
          </div>

          {/* Collections */}
          <div className="space-y-16">
            {collections.map((collection, index) => (
              <div
                key={collection.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-up ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} space-y-6`}>
                  <div>
                    <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-2">
                      {collection.items}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">{collection.title}</h2>
                    <p className="text-lg text-muted-foreground">{collection.description}</p>
                  </div>
                  <Link to={collection.link}>
                    <Button variant="default" size="lg">
                      Shop Collection
                    </Button>
                  </Link>
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

export default Collections;
