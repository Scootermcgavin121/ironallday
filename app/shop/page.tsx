"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";
import { Card } from "@/components/ui/card";

type Product = {
  id: string;
  name: string;
  slug: string;
  subtitle: string | null;
  price: string;
  category: string;
  format: string | null;
  image: string | null;
  description: string | null;
  inStock: boolean;
  stockQuantity: number | null;
};

const PRODUCTS_API = "https://lumevara.com/api/products?brand=iad";

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch(PRODUCTS_API)
      .then((r) => r.json())
      .then((data: Product[]) => {
        // Only show in-stock items
        setProducts(data.filter((p) => p.inStock && (p.stockQuantity ?? 0) > 0));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filtered = products.filter((p) => {
    const catMatch = category === "all" || p.category === category;
    const searchMatch =
      !search || p.name.toLowerCase().includes(search.toLowerCase());
    return catMatch && searchMatch;
  });

  const sorted = [...filtered].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-3">
            Catalog
          </p>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
            All Products
          </h1>
          <p className="text-gray-400 mt-3 text-sm">
            All products are sold for research purposes only.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <div className="relative w-full sm:w-72">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#111] border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent/50"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition ${
                  category === cat
                    ? "bg-accent text-white"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat === "all" ? "All" : cat.replace(/-/g, " ")}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center text-gray-500 animate-pulse py-20">
            Loading products...
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sorted.map((product) => (
                  <Link
                    key={product.id}
                    href={`/shop/${product.slug}`}
                    className="group"
                  >
                    <Card className="bg-[#111] border-white/5 hover:border-accent/30 transition-all duration-300 relative overflow-hidden">

                      {/* Product image */}
                      <div className="aspect-square bg-gradient-to-br from-[#111] to-[#0d0d0d] flex items-center justify-center border-b border-white/5 relative overflow-hidden rounded-t-2xl">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-accent/[0.02] group-hover:bg-accent/[0.05] transition-colors" />
                            <div className="text-center relative z-10">
                              <div className="text-5xl font-black text-white/[0.08] group-hover:text-white/[0.12] uppercase transition-colors">
                                {product.name.slice(0, 3)}
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Info */}
                      <div className="p-5">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-accent mb-1">
                          {product.category.replace(/-/g, " ")}
                        </p>
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors">
                          {product.name}
                        </h3>
                        {product.subtitle && (
                          <p className="text-xs text-gray-500 mb-1">
                            {product.subtitle}
                          </p>
                        )}
                        <p className="text-xs text-gray-400 mb-4">
                          {product.format || "vial"}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-black text-white">
                            ${parseFloat(product.price).toFixed(2)}
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 text-accent">
                            <ShoppingCart className="w-3.5 h-3.5" />
                            View
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
              ))}
            </div>

            {sorted.length === 0 && (
              <div className="text-center text-gray-500 py-20">
                No products found.
              </div>
            )}
          </>
        )}

        <p className="text-center text-xs text-gray-500 mt-12">
          All products are sold for research purposes only. Not for human
          consumption.
        </p>
      </div>
    </main>
  );
}
