import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      {/* Marquee Section */}
      <div className="bg-secondary border-y border-border overflow-hidden py-3">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-foreground font-bold text-lg mx-8">
              Welcome To The Ultimate FLEX !!
            </span>
          ))}
        </div>
      </div>

      <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden px-4 py-16 bg-background">
        {/* Tagline */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 italic">
            Bawa made it fresh, you made it Flex.
          </h2>
        </div>

        {/* Hero Card */}
        <div className="relative w-full max-w-4xl aspect-[4/3] bg-secondary rounded-3xl overflow-hidden shadow-2xl animate-fade-up">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-primary mb-8 tracking-tighter">
              FLEXIFIED<br/>VOL. 1
            </h1>
            <div className="space-y-2 text-primary">
              <p className="text-xl md:text-3xl font-bold uppercase tracking-wide">
                FIRST EDITION OF PURE
              </p>
              <p className="text-xl md:text-3xl font-bold uppercase tracking-wide">
                STREET HEAT.
              </p>
              <p className="text-xl md:text-3xl font-bold uppercase tracking-wide">
                240 GSM OF CONFIDENCE.
              </p>
            </div>
          </div>
        </div>

        <p className="text-foreground/70 mt-8 text-lg">Flexified Vol. 1</p>
      </section>
    </>
  );
};

export default Hero;
