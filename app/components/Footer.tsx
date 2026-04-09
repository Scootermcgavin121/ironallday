import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const FOOTER_LINKS = {
  Shop: [
    { label: "All Products", href: "#shop" },
    { label: "Muscle & Recovery", href: "#shop" },
    { label: "Fat Loss", href: "#shop" },
    { label: "Longevity", href: "#shop" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Reach Out", href: "#contact" },
    { label: "FAQ", href: "#" },
    { label: "Shipping Policy", href: "#" },
  ],
  Legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Disclaimer", href: "#" },
  ],
};

const SOCIALS = [
  { name: "X", href: "#" },
  { name: "IG", href: "#" },
  { name: "YT", href: "#" },
  { name: "TG", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/iad-logo.png"
              alt="Iron All Day"
              width={200}
              height={65}
              className="h-36 w-auto object-contain"
            />
            <p className="text-sm text-muted mt-4 leading-relaxed">
              Research-grade peptides for serious athletes. Performance.
              Recovery. Longevity.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/40 rounded-2xl flex items-center justify-center text-xs font-bold text-muted hover:text-accent transition-all duration-200"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-white/5" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © 2026 Iron All Day. All rights reserved.
          </p>
          <p className="text-xs text-muted/60 text-center md:text-right max-w-md">
            All products are intended for laboratory and research use only.
            Not for human consumption. By purchasing, you agree that products
            are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
}
