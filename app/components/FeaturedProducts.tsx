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
            <div
              key={product.name}
              className="group bg-surface border border-white/5 hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Tag */}
              {product.tag && (
                <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1">
                  {product.tag}
                </div>
              )}

              {/* Product image placeholder */}
              <div className="aspect-square bg-[#111] flex items-center justify-center border-b border-white/5">
                <div className="text-center">
                  <div className="text-5xl font-black text-white/10 uppercase">
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
                <p className="text-xs text-muted mb-3">{product.dosage} vial</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-foreground">
                    {product.price}
                  </span>
                  <button className="bg-accent/10 hover:bg-accent text-accent hover:text-white text-xs font-bold uppercase tracking-wider px-4 py-2 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
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
