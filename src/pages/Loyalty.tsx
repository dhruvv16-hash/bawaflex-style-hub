import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Gift, Star, Zap, Trophy, Target, Crown } from "lucide-react";

const benefits = [
  {
    icon: Star,
    title: "Earn Points",
    description: "Get 1 point for every $1 spent",
  },
  {
    icon: Gift,
    title: "Exclusive Rewards",
    description: "Redeem points for discounts and special gifts",
  },
  {
    icon: Zap,
    title: "Early Access",
    description: "Shop limited drops before anyone else",
  },
  {
    icon: Trophy,
    title: "Birthday Bonus",
    description: "Extra points on your special day",
  },
  {
    icon: Target,
    title: "Member-Only Sales",
    description: "Access exclusive promotions and deals",
  },
  {
    icon: Crown,
    title: "VIP Status",
    description: "Unlock premium perks as you level up",
  },
];

const tiers = [
  {
    name: "Bronze Flex",
    points: "0-499 points",
    perks: ["1x points per purchase", "Birthday bonus", "Exclusive member sales"],
  },
  {
    name: "Silver Flex",
    points: "500-999 points",
    perks: ["1.5x points per purchase", "Early access to drops", "Free shipping on orders $75+"],
  },
  {
    name: "Gold Flex",
    points: "1000+ points",
    perks: ["2x points per purchase", "VIP early access", "Free shipping always", "Surprise gifts"],
  },
];

const Loyalty = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-black mb-6">FLEX POINTS</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the Flex Gang loyalty program and get rewarded for every purchase.
              The more you shop, the more you earn.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="bg-secondary p-6 text-center animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <benefit.icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tiers Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Membership Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map((tier, index) => (
                <div
                  key={tier.name}
                  className={`p-8 border-2 ${
                    index === 2
                      ? "border-accent bg-accent/5"
                      : "border-border bg-card"
                  } animate-fade-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground mb-6">{tier.points}</p>
                  <ul className="space-y-3">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2">
                        <Star className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-accent text-accent-foreground p-12 text-center animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
            <p className="text-lg mb-6">
              Sign up now and get 50 bonus points just for joining!
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
            >
              Join the Flex Gang
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Loyalty;
