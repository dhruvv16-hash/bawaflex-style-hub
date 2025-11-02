import { Button } from "./ui/button";
import { Gift, Star, Zap } from "lucide-react";

const benefits = [
  {
    icon: Star,
    title: "Earn Points",
    description: "Get points on every purchase",
  },
  {
    icon: Gift,
    title: "Exclusive Rewards",
    description: "Redeem for discounts & gifts",
  },
  {
    icon: Zap,
    title: "Early Access",
    description: "Shop limited drops first",
  },
];

const LoyaltyProgram = () => {
  return (
    <section className="py-20 px-4 bg-accent text-accent-foreground">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-black mb-4">FLEX POINTS</h2>
            <p className="text-xl mb-2">Earn Rewards for Every Purchase</p>
            <p className="text-lg opacity-90">
              Join the Flex Gang and get rewarded for your loyalty. Earn points, unlock exclusive
              discounts, and get early access to our hottest drops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-accent-foreground/10 backdrop-blur-sm p-6 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <benefit.icon className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="opacity-90">{benefit.description}</p>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="lg"
            className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
          >
            Join the Program
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyProgram;
