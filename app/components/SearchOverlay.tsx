"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";

type Product = {
  id: string;
  name: string;
  slug: string;
  subtitle: string | null;
  price: string;
  category: string;
  format: string | null;
  image: string | null;
  inStock: boolean;
  stockQuantity: number | null;
};

export default function SearchOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loaded, setLoaded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch products once when overlay first opens
  useEffect(() => {
    if (isOpen && !loaded) {
      fetch("/api/products")
        .then((r) => r.json())
        .then((data: Product[]) => {
          setProducts(data.filter((p) => p.inStock && (p.stockQuantity ?? 0) > 0));
          setLoaded(true);
        })
        .catch(() => setLoaded(true));
    }
  }, [isOpen, loaded]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const results = query.trim().length < 2
    ? []
    : products.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          (p.subtitle?.toLowerCase().includes(q) ?? false) ||
          p.category.toLowerCase().includes(q) ||
          (p.format?.toLowerCase().includes(q) ?? false)
        );
      }).slice(0, 8);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Search panel */}
      <div className="relative z-10 w-full max-w-2xl mx-auto mt-20 sm:mt-28 px-4">
        {/* Input */}
        <div className="relative">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-[#111] border border-white/10 rounded-xl pl-12 pr-12 py-4 text-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent/50"
          />
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Results */}
        {query.trim().length >= 2 && (
          <div className="mt-2 bg-[#111] border border-white/10 rounded-xl overflow-hidden max-h-[60vh] overflow-y-auto">
            {results.length === 0 ? (
              <div className="px-6 py-8 text-center text-gray-500 text-sm">
                No products found for &ldquo;{query}&rdquo;
              </div>
            ) : (
              results.map((product) => (
                <Link
                  key={product.id}
                  href={`/shop/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
                >
                  {/* Thumbnail */}
                  <div className="w-12 h-12 rounded-lg bg-[#0A0A0A] flex-shrink-0 overflow-hidden">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/10 text-xs font-black">
                        {product.name.slice(0, 3).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                      {product.category.replace(/-/g, " ")}
                    </p>
                    <p className="text-sm font-bold text-white truncate">
                      {product.name}
                    </p>
                    {product.subtitle && (
                      <p className="text-xs text-gray-500 truncate">
                        {product.subtitle}
                      </p>
                    )}
                  </div>
                  <span className="text-sm font-bold text-white flex-shrink-0">
                    ${parseFloat(product.price).toFixed(2)}
                  </span>
                </Link>
              ))
            )}
          </div>
        )}

        {query.trim().length > 0 && query.trim().length < 2 && (
          <div className="mt-2 bg-[#111] border border-white/10 rounded-xl px-6 py-6 text-center text-gray-500 text-sm">
            Type at least 2 characters...
          </div>
        )}
      </div>
    </div>
  );
}
