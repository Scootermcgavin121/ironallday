"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-3">
          Stay Sharp
        </p>
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
          Join the Iron All Day Community
        </h2>
        <p className="text-muted mb-10 max-w-xl mx-auto">
          Get early access to new compounds, exclusive research updates, and
          members-only pricing. No spam. Ever.
        </p>

        {submitted ? (
          <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 flex items-center justify-center gap-3">
            <CheckCircle className="w-5 h-5 text-accent" />
            <p className="text-accent font-bold uppercase tracking-wider">
              You&apos;re in. Welcome to the community.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-surface border-white/10 focus-visible:border-accent/50 focus-visible:ring-accent/20 text-foreground text-sm h-14 px-5 placeholder:text-muted/50 rounded-lg"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-sm font-bold uppercase tracking-widest px-8 h-14 rounded-lg gap-2 shrink-0"
            >
              <Send className="w-4 h-4" />
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
