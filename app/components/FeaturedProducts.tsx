"use client";

import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Product = {
  id: string;
  name: string;
  subtitle: string | null;
  price: string;
  category: string;
  format: string | null;
  image: string | null;
  inStock: boolean;
  stockQuantity: number | null;
  featured: boolean;
};

// Hardcoded tags for known products — can expand later
const PRODUCT_TAGS: Record<string, string> = {
  "retatrutide-20mg": "New",
  "wolverine-bpc157-tb500": "Best Seller",
  "ghk-cu-100mg": "Staff Pick",
};

const LUMEVARA_API = "https://lumevara.com/api/products?brand=iad";
// Fallback to lumevara brand if no IAD products exist yet
const FALLBACK_API = "https://lumevara.com/api/products?brand=lumevara";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        let res = await fetch(LUMEVARA_API, { next: { revalidate: 60 } } as RequestInit);
        let data = await res.json();
        // If no IAD products, fall back to Lumevara products
        if (!data.length) {
          res = await fetch(FALLBACK_API, { next: { revalidate: 60 } } as RequestInit);
          data = await res.json();
        }
        // Only show in-stock products (includes supplies like bac water, pens)
        const inStock = data.filter((p: Product) => p.inStock && (p.stockQuantity ?? 0) > 0);
        inStock.sort((a: Product, b: Product) => a.name.localeCompare(b.name));
        setProducts(inStock);
      } catch {
        // Fallback to empty — site still renders
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <section id="shop" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-muted animate-pulse">Loading products...</div>
        </div>
      </section>
    );
  }

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
          {products.map((product) => {
            const tag = PRODUCT_TAGS[product.id];
            const outOfStock = !product.inStock || (product.stockQuantity ?? 0) <= 0;
            return (
              <Card
                key={product.id}
                className={`group bg-surface border-white/5 hover:border-accent/30 transition-all duration-300 relative overflow-hidden ${outOfStock ? "opacity-60" : ""}`}
              >
                {outOfStock && (
                  <div className="absolute top-3 left-3 z-10">
                    <Badge className="bg-white/10 text-white/60 border-0 text-[10px] font-bold uppercase tracking-wider rounded-md px-2.5 py-1">
                      Out of Stock
                    </Badge>
                  </div>
                )}
                {tag && !outOfStock && (
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-accent text-white border-0 text-[10px] font-bold uppercase tracking-wider rounded-md px-2.5 py-1">
                      {tag}
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
                    {product.category.replace(/-/g, " ")}
                  </p>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted mb-4">
                    {product.format || "vial"}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-foreground">
                      ${parseFloat(product.price).toFixed(2)}
                    </span>
                    <Button
                      size="sm"
                      className={`text-xs font-bold uppercase tracking-wider gap-2 rounded-lg transition-colors ${
                        outOfStock
                          ? "bg-white/5 text-white/40 cursor-default"
                          : "bg-accent/10 hover:bg-accent text-accent hover:text-white"
                      }`}
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      {outOfStock ? "Soon" : "Add"}
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {products.length === 0 && (
          <div className="text-center text-muted py-12">
            Products coming soon. Check back shortly.
          </div>
        )}

        <p className="text-center text-xs text-muted mt-8">
          All products are sold for research purposes only. Not for human
          consumption.
        </p>
      </div>
    </section>
  );
}
