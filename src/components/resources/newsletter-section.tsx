"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function NewsletterSection() {
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
    <section className="max-w-7xl mx-auto px-6 mt-32 mb-20">
      <div className="relative overflow-hidden rounded-3xl bg-primary/5 border border-primary/20 p-12 md:p-20 flex flex-col md:flex-row gap-12 items-center">
        <div className="relative z-10 flex-1">
          <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-6">
            Stay ahead of the{" "}
            <span className="text-primary">curve.</span>
          </h2>
          <p className="text-on-surface-variant text-lg max-w-md">
            Get the latest GxP insights, white papers, and compliance updates
            delivered directly to your inbox.
          </p>
        </div>

        <div className="relative z-10 w-full md:w-auto flex-1 max-w-md">
          {submitted ? (
            <div className="text-center md:text-left">
              <p className="text-primary font-semibold text-lg mb-2">
                Thank you for subscribing!
              </p>
              <p className="text-on-surface-variant text-sm">
                You will receive our latest insights in your inbox.
              </p>
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow bg-surface-container border border-outline-variant rounded-lg px-6 py-4 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Enter your business email"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary font-bold rounded-lg hover:opacity-90 transition-all whitespace-nowrap active:scale-[0.98]"
                >
                  Subscribe
                  <Send className="h-4 w-4" />
                </button>
              </form>
              <p className="text-[10px] text-on-surface-variant/60 mt-4 uppercase tracking-widest text-center md:text-left font-label">
                Join 5,000+ biotech leaders worldwide.
              </p>
            </>
          )}
        </div>

        {/* Decorative glow */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      </div>
    </section>
  );
}
