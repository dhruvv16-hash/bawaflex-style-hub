import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import collectionNew from "@/assets/collection-new.jpg";
import collectionEssentials from "@/assets/collection-essentials.jpg";
import collectionLimited from "@/assets/collection-limited.jpg";

const collections = [
  {
    title: "New Arrivals",
    description: "Fresh drops, latest styles",
    image: collectionNew,
    link: "/shop?collection=new",
  },
  {
    title: "Streetwear Essentials",
    description: "Core pieces, everyday flex",
    image: collectionEssentials,
    link: "/shop?collection=essentials",
  },
  {
    title: "Limited Edition",
    description: "Exclusive drops, act fast",
    image: collectionLimited,
    link: "/shop?collection=limited",
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">FEATURED COLLECTIONS</h2>
          <p className="text-muted-foreground text-lg">Discover our curated selections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <Link
              key={collection.title}
              to={collection.link}
              className="group relative overflow-hidden bg-card aspect-square animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">{collection.title}</h3>
                <p className="text-white/80 mb-4">{collection.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="self-start border-white text-white hover:bg-white hover:text-black"
                >
                  Shop Now
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
