"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const heroImage = mounted && resolvedTheme === "light"
    ? "/images/hero-bg-light-v2.png"
    : "/images/hero-bg-v2.png";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* === LAYERED BACKGROUND === */}

      {/* Layer 1: Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface-container-low" />

      {/* Layer 2: Background image — visible and prominent */}
      <div className="absolute inset-0 z-[1]">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          className="object-cover opacity-30 dark:opacity-40"
          sizes="100vw"
        />
        {/* Gradient overlay to fade image edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      </div>

      {/* Layer 3: Animated floating blobs */}
      <div className="absolute inset-0 z-[2] overflow-hidden">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>

      {/* Layer 4: Dot grid overlay */}
      <div className="absolute inset-0 z-[3] hero-grid opacity-[0.3] dark:opacity-[0.12]" />

      {/* Layer 5: Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px z-[4] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* === CONTENT === */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* H1 */}
        <h1
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface mb-6 leading-[1.05] animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          Compliance Solutions
          <br />
          <span className="text-gradient">for Modern Life Sciences.</span>
        </h1>

        {/* Subtext */}
        <p
          className="max-w-2xl mx-auto text-on-surface-variant text-lg md:text-xl mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          Expert consulting for biotech, pharma, and medical device companies
          navigating regulatory compliance with confidence. From strategy to
          execution.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.55s", animationFillMode: "both" }}
        >
          <Button variant="gradient" size="lg" asChild>
            <Link href="#services">Explore Our Services</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Talk to an Expert</Link>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 animate-fade-up"
          style={{ animationDelay: "0.8s", animationFillMode: "both" }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-on-surface-variant/30 mx-auto flex items-start justify-center p-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
