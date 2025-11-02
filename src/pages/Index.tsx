import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import LoyaltyProgram from "@/components/LoyaltyProgram";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollections />
        <LoyaltyProgram />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
