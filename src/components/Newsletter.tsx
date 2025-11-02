import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to the Flex Gang! Check your email for exclusive offers.");
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">JOIN THE FLEX GANG</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get exclusive access to new drops, special offers, and style tips. Be the first to know.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 bg-background"
            />
            <Button type="submit" variant="hero" size="lg">
              Subscribe
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
