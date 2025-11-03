import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 pb-20">
        {/* Header Section */}
        <div className="container mx-auto px-4 py-16 border border-border mx-4 md:mx-8 my-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-foreground/80 leading-relaxed mb-4">
            About Us – बावाFlex Welcome to बावा Flex!From the streets to your wardrobe, बावा Flex is all about bold vibes, street culture, and owning your style. We create streetwear that's more than just clothing — it's a statement, a lifestyle, and a way to flex your attitude every single day One half college dream, one half homegrown design — together, we're here to make your flex feel real, not rented. While the world chases trends, we're repping the ones who create them.Our tees, hoodies, and fits are designed for that...
          </p>
          <button className="text-foreground underline hover:text-accent transition-colors">
            Read more...
          </button>
        </div>

        {/* Large Typography Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-card p-8 md:p-16">
            <p className="text-lg md:text-xl text-foreground/70 mb-8">
              Made with care and unconditionally loved by our customers, this signature bestseller exceeds all expectations.
            </p>
            <h2 className="text-[8vw] md:text-[12vw] font-black leading-none text-primary">
              बावाflex
            </h2>
          </div>
        </div>

        {/* Story Section */}
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="space-y-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Our Story</h2>
            
            <p className="text-2xl md:text-3xl italic text-foreground/90">
              <span className="font-bold">बावा</span>Flex didn't start in a studio or a corporate office.
            </p>
            <p className="text-2xl md:text-3xl italic text-foreground/90">
              It started between a college dorm and a kitchen table.
            </p>

            <div className="space-y-4 text-foreground/80 text-lg py-8">
              <p>
                One founder was a <span className="font-bold text-accent">college-going student</span> who dreamed beyond semesters and side hustles.
              </p>
              <p>
                The other, a <span className="font-bold text-accent">homemaker</span>, sketched designs between chai breaks and family calls.
              </p>
              <p>
                Together, they built what the Indian streetwear scene was missing — <span className="font-bold text-accent">authentic, unisex, and emotionally real fashion</span> that speaks our generation's language.
              </p>
            </div>

            <div className="bg-muted p-6 space-y-3 text-left">
              <p className="font-semibold">We noticed the gap:</p>
              <ul className="space-y-2 list-disc list-inside text-accent">
                <li>Imported brands were expensive.</li>
                <li>Local ones felt forced or over-styled.</li>
                <li>Real, relatable Indian youthwear just didn't exist.</li>
              </ul>
            </div>

            <p className="text-xl italic py-4">
              So we built it ourselves.
            </p>

            <p className="text-lg text-foreground/80">
              Every tee, drop tells a story — of creativity born at home, of hustle turned into design, of comfort turned into confidence.
            </p>

            <p className="text-2xl font-bold py-6">
              <span className="font-bold">बावा</span>flex represents everyone who's making something out of nothing — from the college kid with ideas to the homemaker with imagination.
            </p>

            <p className="text-lg italic text-foreground/80">
              It's proof that <span className="italic">real style can come from real people.</span>
            </p>

            <div className="pt-8 space-y-2">
              <p className="text-xl font-bold">Born in a college dorm. Styled in a home kitchen.</p>
              <p className="text-xl font-bold">Worn by a generation that's flexing differently.</p>
            </div>

            <p className="text-3xl font-black pt-8 text-accent">
              "Flex करना है तो बावा बनके करो"
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
