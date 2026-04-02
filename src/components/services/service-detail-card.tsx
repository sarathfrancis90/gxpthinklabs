"use client";

import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/shared/glass-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CheckCircle } from "lucide-react";

interface ServiceDetailCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets?: string[];
  tags?: string[];
  className?: string;
  delay?: number;
}

export function ServiceDetailCard({
  icon,
  title,
  description,
  bullets,
  tags,
  className,
  delay = 0,
}: ServiceDetailCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <GlassCard
        className={cn(
          "p-8 group hover:border-primary/40 transition-all duration-300 h-full gradient-border animated-gradient-border border border-primary/15 dark:border-outline-variant/20 shadow-md shadow-primary/[0.06] dark:shadow-none",
          className
        )}
      >
        {/* Icon */}
        <div className="w-12 h-12 rounded-lg bg-primary/[0.08] dark:bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-on-surface mb-4">{title}</h3>

        {/* Description */}
        <p className="text-on-surface-variant leading-relaxed mb-6">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-surface-variant rounded-full text-xs text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Bullet list */}
        {bullets && bullets.length > 0 && (
          <ul className="space-y-3">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2 text-sm text-on-surface-variant"
              >
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </GlassCard>
    </ScrollReveal>
  );
}
