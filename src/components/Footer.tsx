import { Link } from "react-router-dom";
import { Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black mb-4">BAWAFLEX</h3>
            <p className="text-sm opacity-80">
              Bold streetwear for the fearless. Unleash your flex.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/collections" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/shop" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/shop" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  Limited Drops
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 hover:text-accent transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 hover:text-accent transition-all"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 hover:text-accent transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm opacity-80 mt-4">#BawaFlex</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Bawaflex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
