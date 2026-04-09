"use client";

import { useState, useRef } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const SUBJECTS = [
  "General Inquiry",
  "Product Question",
  "Order Support",
  "Wholesale Inquiry",
  "Lab Partnership",
  "Other",
];

export default function ReachOut() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) {
      setStatus("sent");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          website: honeypot,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <section id="contact" className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto text-center px-4">
          <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8">
            <CheckCircle className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
              Message Received
            </h3>
            <p className="text-muted">
              We&apos;ll hit you back within 24 hours.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm font-bold uppercase tracking-widest text-accent hover:text-accent/80 transition-colors"
            >
              Send Another
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
            Reach Out
          </h2>
          <p className="text-muted max-w-md mx-auto">
            Questions about products, COAs, or wholesale? Drop us a line.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-[#111] border border-white/5 rounded-2xl p-8 space-y-5"
        >
          {/* Honeypot — hidden from humans */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="website_iad">Website</label>
            <input
              type="text"
              id="website_iad"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-bold uppercase tracking-widest text-muted mb-2"
              >
                Name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3.5 bg-surface border border-white/10 rounded-lg text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-widest text-muted mb-2"
              >
                Email *
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 bg-surface border border-white/10 rounded-lg text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-bold uppercase tracking-widest text-muted mb-2"
            >
              Topic
            </label>
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-3.5 bg-surface border border-white/10 rounded-lg text-sm text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors appearance-none"
            >
              <option value="">Select a topic</option>
              {SUBJECTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold uppercase tracking-widest text-muted mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3.5 bg-surface border border-white/10 rounded-lg text-sm text-foreground placeholder:text-muted/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors resize-vertical"
              placeholder="What's on your mind?"
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-accent-red">
              Something went wrong. Try again.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-accent hover:bg-accent/90 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-lg transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {status === "sending" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send It
              </>
            )}
          </button>

          <p className="text-xs text-muted/50 text-center">
            All products are sold strictly for laboratory research and
            educational purposes only.
          </p>
        </form>
      </div>
    </section>
  );
}
