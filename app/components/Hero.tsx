export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A] overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Eyebrow */}
        <p className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-6">
          Research-Grade Peptides
        </p>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] mb-6">
          Performance.
          <br />
          <span className="text-accent">Recovery.</span>
          <br />
          Longevity.
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Research-Grade Peptides for Serious Athletes. 99%+ purity,
          third-party tested, COA verified.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#shop"
            className="inline-block bg-accent hover:bg-accent/90 text-white text-sm font-bold uppercase tracking-widest px-10 py-4 transition-colors"
          >
            Shop Peptides
          </a>
          <a
            href="#about"
            className="inline-block border border-white/20 hover:border-accent/50 text-foreground text-sm font-bold uppercase tracking-widest px-10 py-4 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
