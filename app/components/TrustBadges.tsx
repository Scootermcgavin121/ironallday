import { FlaskConical, ShieldCheck, FileCheck, Truck } from "lucide-react";
import { Card } from "@/components/ui/card";

const BADGES = [
  {
    icon: FlaskConical,
    title: "99%+ Purity",
    description: "Every batch verified by independent laboratories",
  },
  {
    icon: ShieldCheck,
    title: "Third-Party Tested",
    description: "Rigorous quality control you can trust",
  },
  {
    icon: FileCheck,
    title: "COA Verified",
    description: "Certificate of Analysis available for every product",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Same-day processing, discreet packaging",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {BADGES.map((badge) => (
            <Card
              key={badge.title}
              className="bg-transparent border-white/5 hover:border-accent/30 text-center p-6 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <badge.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-2">
                {badge.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed">{badge.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
