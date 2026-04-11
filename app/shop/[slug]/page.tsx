"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, FlaskConical } from "lucide-react";
import AddToCartButton from "../../components/AddToCartButton";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { productDetails } from "../../data/product-details";

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

const PRODUCTS_API = "/api/products";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(PRODUCTS_API)
      .then((r) => r.json())
      .then((data: Product[]) => {
        const found = data.find((p) => p.slug === slug);
        setProduct(found || null);
        if (found) {
          setRelated(
            data
              .filter(
                (p) =>
                  p.category === found.category &&
                  p.id !== found.id &&
                  p.inStock
              )
              .slice(0, 4)
          );
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  // Build JSON-LD schema for the product
  const productJsonLd = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description || `${product.name} — research peptide for laboratory use only.`,
        image: product.image || undefined,
        sku: product.id,
        brand: {
          "@type": "Brand",
          name: "Iron All Day",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: parseFloat(product.price).toFixed(2),
          availability: product.inStock
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
          url: `https://ironallday.com/shop/${product.slug}`,
        },
      }
    : null;

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-gray-500 animate-pulse">Loading...</div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center gap-4">
        <p className="text-gray-400">Product not found</p>
        <Link
          href="/shop"
          className="text-accent hover:underline text-sm"
        >
          ← Back to Shop
        </Link>
      </main>
    );
  }

  const outOfStock =
    !product.inStock || (product.stockQuantity ?? 0) <= 0;

  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-48 pb-24">
      {/* JSON-LD Product Schema */}
      {productJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      )}
      {/* Breadcrumbs */}
      <nav className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-white transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-white transition">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span className="text-white">{product.name}</span>
      </nav>

      {/* Product Hero */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden border border-white/5">
          {/* Image */}
          <div className="lg:w-1/2 aspect-square lg:aspect-auto relative min-h-[400px] bg-gradient-to-br from-[#111] to-[#0d0d0d] flex items-center justify-center overflow-hidden">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center">
                <FlaskConical className="w-20 h-20 text-white/[0.08] mx-auto mb-4" />
                <div className="text-6xl font-black text-white/[0.06] uppercase">
                  {product.name.slice(0, 3)}
                </div>
              </div>
            )}
            {outOfStock && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/10 text-white/60 border-0 text-xs font-bold uppercase tracking-wider px-3 py-1.5">
                  Out of Stock
                </Badge>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="lg:w-1/2 bg-[#111] p-8 lg:p-12 flex flex-col justify-center">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">
              {product.category.replace(/-/g, " ")}
            </p>
            <h1 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-2">
              {product.name}
            </h1>
            {product.subtitle && (
              <p className="text-gray-400 italic text-sm mb-6">
                {product.subtitle}
              </p>
            )}
            <p className="text-4xl font-black text-white mb-2">
              ${parseFloat(product.price).toFixed(2)}
            </p>
            <p className="text-gray-500 text-sm mb-6">
              {product.format || "Lyophilized vial"}
            </p>
            {product.description && (
              <p className="text-gray-300 leading-relaxed mb-8 text-sm">
                {product.description}
              </p>
            )}
            {outOfStock ? (
              <button
                className="flex items-center justify-center gap-3 font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-xl bg-white/5 text-white/40 cursor-not-allowed"
                disabled
              >
                Out of Stock
              </button>
            ) : (
              <AddToCartButton
                product={{
                  id: product.id,
                  name: product.name,
                  price: parseFloat(product.price),
                  image: product.image || "/images/product-vial.png",
                  format: product.format || "Lyophilized vial",
                }}
              />
            )}
            <p className="text-xs text-gray-600 mt-4 italic">
              For research purposes only. Not for human consumption.
            </p>
          </div>
        </div>
      </section>

      {/* Specification Table */}
      {product && productDetails[product.id] && (() => {
        const details = productDetails[product.id];
        const props = [
          ["Chemical Formula", details.properties.chemicalFormula],
          ["Synonyms", details.properties.synonyms],
          ["Molar Mass", details.properties.molarMass],
          ["CAS Number", details.properties.casNumber],
          ["PubChem ID", details.properties.pubchemId],
          ["Total Active Ingredient", details.properties.activeIngredient],
          ["Shelf Life", details.properties.shelfLife],
        ].filter(([, val]) => val && val !== "N/A" && val !== "");

        return (
          <>
            {/* Spec Table */}
            <section className="max-w-6xl mx-auto px-6 mt-16">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                Specification
              </h2>
              <div className="rounded-2xl overflow-hidden border border-white/5">
                {props.map(([label, value], i) => (
                  <div
                    key={label}
                    className={`flex ${
                      i % 2 === 0 ? "bg-[#111]" : "bg-[#0d0d0d]"
                    } border-b border-white/5 last:border-b-0`}
                  >
                    <div className="w-1/2 px-6 py-4 font-bold text-sm text-white/80 uppercase tracking-wider">
                      {label}
                    </div>
                    <div className="w-1/2 px-6 py-4 text-sm text-gray-400 font-mono">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* About This Compound */}
            {details.longDescription && (
              <section className="max-w-6xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                  About This Compound
                </h2>
                <div
                  className="bg-[#111] rounded-2xl border border-white/5 p-8 prose prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-300 prose-strong:text-white prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3"
                  dangerouslySetInnerHTML={{ __html: details.longDescription }}
                />
              </section>
            )}

            {/* Peer-Reviewed Studies */}
            {details.studies && details.studies.length > 0 && (
              <section className="max-w-6xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                  Peer-Reviewed Studies
                </h2>
                <div className="grid gap-4">
                  {details.studies.map((study, i) => (
                    <div
                      key={i}
                      className="bg-[#111] rounded-2xl border border-white/5 p-6"
                    >
                      {study.url ? (
                        <a
                          href={study.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-accent hover:text-white transition-colors"
                        >
                          {study.title}
                        </a>
                      ) : (
                        <p className="font-bold text-white">{study.title}</p>
                      )}
                      {study.authors && (
                        <p className="text-sm text-gray-500 mt-1">{study.authors}</p>
                      )}
                      {study.journal && (
                        <p className="text-xs text-gray-600 mt-1 italic">
                          {study.journal}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Disclaimer */}
            <section className="max-w-6xl mx-auto px-6 mt-16">
              <div className="bg-white/[0.02] rounded-2xl border border-white/5 p-6 text-center">
                <p className="text-xs text-gray-600 leading-relaxed">
                  All products are sold strictly for laboratory and research use only.
                  Not for human consumption. No statements on this page have been
                  evaluated by the FDA. These products are not intended to diagnose,
                  treat, cure, or prevent any disease.
                </p>
              </div>
            </section>
          </>
        );
      })()}

      {/* Related Products */}
      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8">
            Related Compounds
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <Link key={p.id} href={`/shop/${p.slug}`} className="group">
                <Card className="bg-[#111] border-white/5 hover:border-accent/30 transition-all duration-300 overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-[#111] to-[#0d0d0d] flex items-center justify-center overflow-hidden rounded-t-2xl">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="text-4xl font-black text-white/[0.08] uppercase">
                        {p.name.slice(0, 3)}
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-white group-hover:text-accent transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-white font-bold mt-1">
                      ${parseFloat(p.price).toFixed(2)}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
