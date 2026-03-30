const CATEGORIES = [
  {
    name: "Muscle & Recovery",
    description: "Accelerate tissue repair and optimize recovery windows.",
    icon: "💪",
  },
  {
    name: "Fat Loss",
    description: "Research compounds targeting metabolic optimization.",
    icon: "🔥",
  },
  {
    name: "Longevity",
    description: "Cellular repair and anti-aging research peptides.",
    icon: "⚡",
  },
  {
    name: "Cognitive",
    description: "Nootropic peptides for focus and mental clarity research.",
    icon: "🧠",
  },
  {
    name: "Performance Blends",
    description: "Stacked formulations for comprehensive research protocols.",
    icon: "🏆",
  },
  {
    name: "Supplies",
    description: "Bacteriostatic water, syringes, and research essentials.",
    icon: "🧪",
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-3">
            Categories
          </p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            What Are You Researching?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.name}
              href="#shop"
              className="group bg-surface border border-white/5 hover:border-accent/40 p-8 transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{cat.icon}</span>
              <h3 className="text-lg font-bold uppercase tracking-wide text-foreground group-hover:text-accent transition-colors mb-2">
                {cat.name}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {cat.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
