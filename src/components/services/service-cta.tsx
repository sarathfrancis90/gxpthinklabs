"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionBg } from "@/components/shared/section-bg";
import Link from "next/link";

interface ServiceCtaProps {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
  badges?: string[];
  className?: string;
}

export function ServiceCta({
  title,
  description,
  buttonLabel = "Schedule a Consultation",
  buttonHref = "/contact",
  badges,
  className,
}: ServiceCtaProps) {
  return (
    <section className={cn("py-24 md:py-32 px-6 relative ambient-glow teal-section", className)}>
      <ScrollReveal>
        <div className="max-w-5xl mx-auto rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden noise-overlay gradient-border backdrop-blur-xl shadow-lg shadow-black/[0.06] dark:shadow-none">
          <SectionBg variant="waves" opacity="opacity-[0.12] dark:opacity-[0.08]" />
          {/* Ambient glow — stronger */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/25 dark:bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary/20 dark:bg-secondary/8 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-tertiary/15 dark:bg-tertiary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 relative z-10 text-on-surface">
            {title}
          </h2>

          <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto relative z-10">
            {description}
          </p>

          <div className="relative z-10">
            <Button size="lg" className="text-xl px-10 py-5 h-auto" asChild>
              <Link href={buttonHref}>{buttonLabel}</Link>
            </Button>
          </div>

          {/* Optional compliance badges */}
          {badges && badges.length > 0 && (
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-on-surface-variant opacity-60 relative z-10">
              {badges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {badge}
                </div>
              ))}
            </div>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
