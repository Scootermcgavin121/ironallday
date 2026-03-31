import { ShoppingCart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PRODUCTS = [
  {
    name: "BPC-157",
    category: "Muscle & Recovery",
    price: "$49.99",
    dosage: "5mg",
    tag: "Best Seller",
  },
  {
    name: "TB-500",
    category: "Muscle & Recovery",
    price: "$54.99",
    dosage: "5mg",
    tag: null,
  },
  {
    name: "Tirzepatide",
    category: "Fat Loss",
    price: "$189.99",
    dosage: "10mg",
    tag: "Popular",
  },
  {
    name: "Semaglutide",
    category: "Fat Loss",
    price: "$149.99",
    dosage: "5mg",
    tag: null,
  },
  {
    name: "Ipamorelin",
    category: "Performance",
    price: "$44.99",
    dosage: "5mg",
    tag: null,
  },
  {
    name: "GHK-Cu",
    category: "Longevity",
    price: "$39.99",
    dosage: "50mg",
    tag: "Staff Pick",
  },
  {
    name: "NAD+",
    category: "Longevity",
    price: "$79.99",
    dosage: "500mg",
    tag: null,
  },
  {
    name: "Retatrutide",
    category: "Fat Loss",
    price: "$219.99",
    dosage: "10mg",
    tag: "New",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="shop" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-3">
            Featured
          </p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            Top Research Compounds
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <Card
              key={product.name}
              className="group bg-surface border-white/5 hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Tag */}
              {product.tag && (
                <div className="absolute top-3 right-3 z-10">
                  <Badge className="bg-accent text-white border-0 text-[10px] font-bold uppercase tracking-wider rounded-md px-2.5 py-1">
                    {product.tag}
                  </Badge>
                </div>
              )}

              {/* Product image placeholder */}
              <div className="aspect-square bg-gradient-to-br from-[#111] to-[#0d0d0d] flex items-center justify-center border-b border-white/5 relative overflow-hidden rounded-t-2xl">
                <div className="absolute inset-0 bg-accent/[0.02] group-hover:bg-accent/[0.05] transition-colors" />
                <div className="text-center relative z-10">
                  <div className="text-5xl font-black text-white/[0.08] group-hover:text-white/[0.12] uppercase transition-colors">
                    {product.name.slice(0, 3)}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-accent mb-1">
                  {product.category}
                </p>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-xs text-muted mb-4">{product.dosage} vial</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-foreground">
                    {product.price}
                  </span>
                  <Button
                    size="sm"
                    className="bg-accent/10 hover:bg-accent text-accent hover:text-white text-xs font-bold uppercase tracking-wider gap-2 rounded-lg transition-colors"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Add
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-xs text-muted mt-8">
          All products are sold for research purposes only. Not for human
          consumption.
        </p>
      </div>
    </section>
  );
}
