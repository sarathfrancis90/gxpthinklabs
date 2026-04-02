"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type BgVariant = "circuits" | "waves" | "grid" | "resources" | "products";

interface SectionBgProps {
  variant: BgVariant;
  opacity?: string;
  position?: "top" | "center" | "bottom";
  className?: string;
}

const bgMap: Record<BgVariant, { dark: string; light: string }> = {
  circuits: {
    dark: "/images/section-bg-circuits-dark-v2.png",
    light: "/images/section-bg-circuits-light-v2.png",
  },
  waves: {
    dark: "/images/section-bg-waves-dark-v2.png",
    light: "/images/section-bg-waves-light-v2.png",
  },
  grid: {
    dark: "/images/section-bg-grid-dark-v2.png",
    light: "/images/section-bg-grid-light-v2.png",
  },
  resources: {
    dark: "/images/resources-bg-dark.png",
    light: "/images/resources-bg-light.png",
  },
  products: {
    dark: "/images/products-bg-dark.png",
    light: "/images/products-bg-light.png",
  },
};

const positionClass = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
};

export function SectionBg({
  variant,
  opacity = "opacity-[0.25] dark:opacity-[0.18]",
  position = "center",
  className,
}: SectionBgProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const src = mounted && resolvedTheme === "light"
    ? bgMap[variant].light
    : bgMap[variant].dark;

  return (
    <div className={cn("absolute inset-0 z-0 overflow-hidden pointer-events-none", className)}>
      <Image
        src={src}
        alt=""
        fill
        className={cn("object-cover", positionClass[position], opacity)}
        sizes="100vw"
      />
      {/* Edge fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/70 dark:from-background/80 dark:to-background/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50 dark:from-background/60 dark:to-background/60" />
    </div>
  );
}
