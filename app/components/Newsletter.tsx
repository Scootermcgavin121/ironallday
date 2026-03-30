"use client";

import { useState } from "react";

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
          <div className="bg-accent/10 border border-accent/30 p-6">
            <p className="text-accent font-bold uppercase tracking-wider">
              You&apos;re in. Welcome to the community. 🔥
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-surface border border-white/10 focus:border-accent/50 outline-none text-foreground text-sm px-5 py-4 placeholder:text-muted/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-accent/90 text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
