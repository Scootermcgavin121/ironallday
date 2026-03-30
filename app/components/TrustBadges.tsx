const BADGES = [
  {
    icon: "🔬",
    title: "99%+ Purity",
    description: "Every batch verified by independent laboratories",
  },
  {
    icon: "✅",
    title: "Third-Party Tested",
    description: "Rigorous quality control you can trust",
  },
  {
    icon: "📋",
    title: "COA Verified",
    description: "Certificate of Analysis available for every product",
  },
  {
    icon: "🚀",
    title: "Fast Shipping",
    description: "Same-day processing, discreet packaging",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {BADGES.map((badge) => (
            <div key={badge.title} className="text-center">
              <span className="text-4xl mb-3 block">{badge.icon}</span>
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-1">
                {badge.title}
              </h3>
              <p className="text-xs text-muted">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
