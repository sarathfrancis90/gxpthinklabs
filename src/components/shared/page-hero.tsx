"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
  children?: React.ReactNode;
  /** Override hero bg images — defaults to generic page-hero */
  bgLight?: string;
  bgDark?: string;
}

export function PageHero({
  badge,
  title,
  subtitle,
  breadcrumbs,
  className,
  children,
  bgLight = "/images/page-hero-light.png",
  bgDark = "/images/page-hero-dark.png",
}: PageHeroProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const heroImage = mounted && resolvedTheme === "light" ? bgLight : bgDark;

  return (
    <section
      className={cn(
        "relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden",
        className
      )}
    >
      {/* Layer 1: Background image — VIVID, clearly visible */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          className="object-cover opacity-[0.40] dark:opacity-[0.25]"
          sizes="100vw"
        />
        {/* Edge fade overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />
      </div>

      {/* Layer 2: Animated blobs */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
      </div>

      {/* Layer 3: Dot grid */}
      <div className="absolute inset-0 z-[2] hero-grid" />

      {/* Layer 4: Mesh gradient */}
      <div className="absolute inset-0 z-[2] mesh-gradient" />

      {/* Layer 5: Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px z-[3] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1 text-sm text-on-surface-variant mb-6">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.href} className="flex items-center gap-1">
                {index > 0 && (
                  <ChevronRight className="h-3.5 w-3.5" />
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-on-surface">{crumb.label}</span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="hover:text-primary transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="max-w-3xl">
          {badge && (
            <Badge variant="default" className="mb-6">
              {badge}
            </Badge>
          )}

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-on-surface">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xl text-on-surface-variant leading-relaxed">
              {subtitle}
            </p>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
