import { FlaskConical, Package, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const STATS = [
  { icon: FlaskConical, value: "99%+", label: "Purity" },
  { icon: Package, value: "50K+", label: "Orders Shipped" },
  { icon: Clock, value: "24h", label: "Avg. Ship Time" },
];

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

            <Separator className="my-8 bg-white/10" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                    <stat.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    <span className="text-3xl font-black text-accent">{stat.value}</span>
                  </div>
                  <div className="text-xs text-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual block */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-[#111] to-[#0d0d0d] border border-white/5 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-accent/[0.02]" />
              <div className="text-center px-8 relative z-10">
                <div className="text-6xl sm:text-7xl font-black text-white/[0.06] uppercase leading-none">
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
            {/* Accent glow */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
