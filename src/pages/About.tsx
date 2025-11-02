import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-black mb-6">ABOUT BAWAFLEX</h1>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Bawaflex was born from a passion for bold self-expression and authentic street culture.
                We believe that what you wear is more than just fabric—it's a statement, a feeling, a lifestyle.
              </p>

              <p>
                Our mission is simple: create premium streetwear that empowers you to unleash your flex.
                Every piece is designed with comfort, confidence, and culture in mind, blending modern
                aesthetics with timeless street style.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Our Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-secondary p-6">
                  <h3 className="text-xl font-bold mb-2">Authenticity</h3>
                  <p className="text-muted-foreground">
                    We stay true to street culture and never compromise on quality or style.
                  </p>
                </div>
                <div className="bg-secondary p-6">
                  <h3 className="text-xl font-bold mb-2">Community</h3>
                  <p className="text-muted-foreground">
                    We're building more than a brand—we're creating a movement, a family.
                  </p>
                </div>
                <div className="bg-secondary p-6">
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    We push boundaries, experiment with design, and set trends, not follow them.
                  </p>
                </div>
              </div>

              <p>
                Join the Flex Gang and become part of something bigger. Whether you're hitting the streets,
                chilling with friends, or making bold moves, Bawaflex has got you covered.
              </p>

              <p className="text-2xl font-bold mt-8">
                Unleash Your Flex. Own Your Style.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
