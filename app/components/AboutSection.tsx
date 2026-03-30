export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-3">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6 leading-tight">
              Built by Athletes,
              <br />
              for Athletes.
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Iron All Day was founded on a simple belief: the people pushing
                their bodies the hardest deserve access to the highest-quality
                research compounds available.
              </p>
              <p>
                Every product we carry is sourced from GMP-compliant facilities,
                third-party tested for purity, and backed by a Certificate of
                Analysis. No shortcuts. No compromises.
              </p>
              <p>
                We&apos;re not a faceless supplier. We&apos;re researchers,
                athletes, and biohackers who use the same protocols we provide.
                When we say 99%+ purity, we mean it — because we stake our own
                performance on it.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div>
                <div className="text-3xl font-black text-accent">99%+</div>
                <div className="text-xs text-muted uppercase tracking-wider mt-1">
                  Purity
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-accent">50K+</div>
                <div className="text-xs text-muted uppercase tracking-wider mt-1">
                  Orders Shipped
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-accent">24h</div>
                <div className="text-xs text-muted uppercase tracking-wider mt-1">
                  Avg. Ship Time
                </div>
              </div>
            </div>
          </div>

          {/* Right — visual block */}
          <div className="relative">
            <div className="aspect-square bg-[#111] border border-white/5 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="text-6xl sm:text-7xl font-black text-white/5 uppercase leading-none">
                  Iron
                  <br />
                  All
                  <br />
                  Day
                </div>
                <div className="mt-6 text-accent text-sm font-bold uppercase tracking-[0.3em]">
                  Est. 2026
                </div>
              </div>
            </div>
            {/* Accent corner */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
