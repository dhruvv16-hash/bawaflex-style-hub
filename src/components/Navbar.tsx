import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getItemCount } = useCart();

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-muted text-foreground py-2 text-center text-sm font-medium">
        10% OFF On ALL Prepaid Orders!!
      </div>
      
      <nav className="sticky top-0 w-full bg-background border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-xl font-black tracking-tighter text-foreground">
              बावा<span className="text-accent">flex</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
                Home
              </Link>
              <Link to="/shop" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
                Catalog
              </Link>
              <Link to="/about" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
                About us
              </Link>
              <Link to="/loyalty" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
                Contact
              </Link>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:text-accent transition-colors hidden md:block">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:text-accent transition-colors hidden md:block">
                <User className="w-5 h-5" />
              </button>
              <Link to="/cart" className="relative p-2 hover:text-accent transition-colors">
                <ShoppingBag className="w-5 h-5" />
                {getItemCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {getItemCount()}
                  </span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-border">
              <div className="px-4 pt-2 pb-4 space-y-2">
                <Link
                  to="/"
                  className="block py-2 text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/shop"
                  className="block py-2 text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Catalog
                </Link>
                <Link
                  to="/about"
                  className="block py-2 text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About us
                </Link>
                <Link
                  to="/loyalty"
                  className="block py-2 text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
