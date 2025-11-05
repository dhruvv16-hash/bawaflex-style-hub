import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { Product } from "@/data/products";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [showSizeDialog, setShowSizeDialog] = useState(false);

  const handleQuickAdd = () => {
    if (product.sizes.length === 1 && product.sizes[0] === "One Size") {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: "One Size",
      });
    } else {
      setShowSizeDialog(true);
    }
  };

  const handleAddWithSize = () => {
    if (!selectedSize) {
      return;
    }
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
    });
    setShowSizeDialog(false);
    setSelectedSize("");
  };

  const productLink = `/product/${product.id}`;

  return (
    <>
      <div
        className="group animate-fade-up"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        <a href={productLink} className="block">
          <div className="relative overflow-hidden bg-card aspect-square mb-4 border border-border">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </a>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            {product.category}
          </p>
          <a href={productLink}>
            <h3 className="text-xl font-bold hover:text-accent transition-colors">
              {product.name}
            </h3>
          </a>
          <p className="text-lg font-semibold">{product.priceDisplay}</p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={handleQuickAdd}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Quick Add
            </Button>
            <Button
              variant="default"
              size="sm"
              className="flex-1"
              onClick={() => window.location.href = productLink}
            >
              View
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={showSizeDialog} onOpenChange={setShowSizeDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Size</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  onClick={() => setSelectedSize(size)}
                  className="w-full"
                >
                  {size}
                </Button>
              ))}
            </div>
            <Button
              onClick={handleAddWithSize}
              disabled={!selectedSize}
              className="w-full"
            >
              Add to Cart
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
