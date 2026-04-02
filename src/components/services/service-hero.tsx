"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/shared/gradient-text";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ServiceHeroProps {
  badge: string;
  title: string;
  titleAccent?: string;
  description: string;
  imageSrc?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
}

export function ServiceHero({
  badge,
  title,
  titleAccent,
  description,
  imageSrc,
  primaryCta = { label: "Schedule a Consultation", href: "/contact" },
  secondaryCta,
  className,
}: ServiceHeroProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // In light mode, use the vivid page-hero-light image for ALL service pages
  // In dark mode, use the provided service-specific image or the dark page-hero
  const bgImage = mounted && resolvedTheme === "light"
    ? "/images/page-hero-light.png"
    : (imageSrc || "/images/page-hero-dark.png");

  return (
    <section
      className={cn(
        "relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28",
        className
      )}
    >
      {/* Layer 1: Background image — VIVID */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt=""
          fill
          className="object-cover opacity-[0.45] dark:opacity-[0.28]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />
      </div>

      {/* Layer 2: Animated floating blobs */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>

      {/* Layer 3: Dot grid */}
      <div className="absolute inset-0 z-[2] hero-grid" />

      {/* Layer 4: Mesh gradient */}
      <div className="absolute inset-0 z-[2] mesh-gradient" />

      {/* Layer 5: Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px z-[3] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Badge variant="default" className="mb-8 text-xs">
          {badge}
        </Badge>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-on-surface leading-[1.1]">
          {title}
          {titleAccent && (
            <>
              {" "}
              <GradientText>{titleAccent}</GradientText>
            </>
          )}
        </h1>

        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="gradient" size="lg" asChild>
            <Link href={primaryCta.href}>{primaryCta.label}</Link>
          </Button>
          {secondaryCta && (
            <Button variant="outline" size="lg" asChild>
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
