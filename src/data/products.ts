export interface Product {
  id: number;
  name: string;
  price: number;
  priceDisplay: string;
  description: string;
  tagline: string;
  images: string[];
  sizes: string[];
  category: string;
  materials: string;
  care: string[];
  details: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "404 FEELING",
    price: 790.00,
    priceDisplay: "Rs. 790.00",
    description: "404 FEELING — emotion not found.",
    tagline: "A glitch between love and regret. Burnt orange strokes on deep navy silence. Crafted under the #बावाflex state of mind.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1620799140188-3b2a7589af0b?w=800&h=800&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "T-Shirts",
    materials: "240 GSM French Terry Cotton, 100% cotton",
    care: [
      "सदा करके धोना — print ka swag safe रहे।",
      "Cold water में (30°C / 86°F max) – warna colors fade ho jayenge, और flex कम।",
      "Mild detergent use करो – bleach और softener का bye-bye करो।",
      "Air-dry या tumble dry low – ताकि tee का style hamesa street-ready रहे।"
    ],
    details: [
      "Double-stitched sleeves & hem – क्योंकि stretching to bol do bye-bye!",
      "Pre-shrunk fabric – shrinkage? बस वही है तक, काफी full flex guaranteed.",
      "Layer it or rock it solo – street ka swag, जैसे चाहे वैसे पहनो।",
      "Everyday ready – class ho ya street, यहाँ तक हमेशा आपके साथ flex करने के लिए तैयार!"
    ]
  },
  {
    id: 2,
    name: "Flex Graphic Tee",
    price: 690.00,
    priceDisplay: "Rs. 690.00",
    description: "Pure street energy.",
    tagline: "Bold graphics that speak louder than words. Made for those who flex without trying.",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "T-Shirts",
    materials: "220 GSM Premium Cotton, 100% cotton",
    care: [
      "Machine wash cold",
      "Do not bleach",
      "Tumble dry low",
      "Cool iron if needed"
    ],
    details: [
      "Screen printed graphics",
      "Pre-shrunk fabric",
      "Ribbed crew neck",
      "Taped shoulders for durability"
    ]
  },
  {
    id: 3,
    name: "Street Joggers",
    price: 1290.00,
    priceDisplay: "Rs. 1,290.00",
    description: "Comfort meets street style.",
    tagline: "Premium joggers for the modern street warrior. Function and flex in perfect harmony.",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Bottoms",
    materials: "Cotton blend with elastane for stretch",
    care: [
      "Machine wash cold",
      "Do not bleach",
      "Hang to dry",
      "Iron on low if needed"
    ],
    details: [
      "Tapered fit with elastic cuffs",
      "Side pockets and back pocket",
      "Adjustable drawstring waist",
      "Moisture-wicking fabric"
    ]
  },
  {
    id: 4,
    name: "Signature Cap",
    price: 590.00,
    priceDisplay: "Rs. 590.00",
    description: "Complete your flex.",
    tagline: "The finishing touch to any street-ready outfit. बावाflex signature embroidery.",
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
    ],
    sizes: ["One Size"],
    category: "Accessories",
    materials: "100% Cotton twill",
    care: [
      "Spot clean only",
      "Do not machine wash",
      "Air dry only",
      "Do not iron directly on embroidery"
    ],
    details: [
      "Adjustable strap closure",
      "Embroidered logo",
      "Curved brim",
      "Structured 6-panel design"
    ]
  },
  {
    id: 5,
    name: "Limited Edition Hoodie",
    price: 1690.00,
    priceDisplay: "Rs. 1,690.00",
    description: "Exclusivity defined.",
    tagline: "Limited drop. Premium heavyweight hoodie with signature बावाflex branding.",
    images: [
      "https://images.unsplash.com/photo-1620799140188-3b2a7589af0b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Hoodies",
    materials: "300 GSM French Terry, 80% Cotton 20% Polyester",
    care: [
      "Machine wash cold inside out",
      "Do not bleach",
      "Tumble dry low",
      "Do not iron on prints"
    ],
    details: [
      "Heavyweight fleece construction",
      "Kangaroo pocket",
      "Adjustable drawstring hood",
      "Ribbed cuffs and hem"
    ]
  },
  {
    id: 6,
    name: "Oversized Tee",
    price: 790.00,
    priceDisplay: "Rs. 790.00",
    description: "Relaxed street vibes.",
    tagline: "Drop shoulder oversized fit. Maximum comfort, maximum style.",
    images: [
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "T-Shirts",
    materials: "240 GSM Premium Cotton, 100% cotton",
    care: [
      "Machine wash cold",
      "Do not bleach",
      "Air dry recommended",
      "Iron on low if needed"
    ],
    details: [
      "Oversized relaxed fit",
      "Drop shoulder design",
      "Extra length hem",
      "Pre-shrunk fabric"
    ]
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};
