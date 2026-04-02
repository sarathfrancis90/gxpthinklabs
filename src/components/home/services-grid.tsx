import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionBg } from "@/components/shared/section-bg";
import { cn } from "@/lib/utils";

const colorMap: Record<string, string> = {
  primary: "bg-primary-container text-on-primary-container",
  secondary: "bg-secondary-container text-on-secondary-container",
  tertiary: "bg-tertiary-container text-on-tertiary-container",
};

export function ServicesGrid() {
  return (
    <SectionWrapper id="services" background="surface" className="relative overflow-hidden section-gradient-1 noise-overlay ambient-glow teal-section">
      <SectionBg variant="circuits" opacity="opacity-[0.15] dark:opacity-[0.10]" />
      {/* Background visual */}
      <div className="absolute inset-0 technical-grid opacity-[0.25] dark:opacity-[0.06]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 dark:bg-primary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 dark:bg-secondary/5 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10">
      <SectionHeader
        label="WHAT WE DO"
        title="Comprehensive Compliance Solutions"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.id}
              href={service.href}
              className={cn(
                "group relative p-8 rounded-2xl gradient-border animated-gradient-border",
                "border border-primary/15 dark:border-outline-variant/20",
                "shadow-sm shadow-primary/[0.06] dark:shadow-none",
                "hover:shadow-md hover:shadow-primary/[0.12] transition-all duration-300"
              )}
            >
              {/* Arrow on hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </div>

              {/* Icon */}
              <div
                className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-primary/[0.06] dark:bg-transparent",
                  colorMap[service.color] || "bg-primary/10 text-primary"
                )}
              >
                <Icon className="h-5 w-5" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-on-surface mb-3">
                {service.shortTitle}
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-6 text-sm">
                {service.shortDescription}
              </p>

              {/* Link */}
              <span className="text-primary font-medium flex items-center gap-2 text-sm group-hover:underline">
                Learn more
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          );
        })}
      </div>
      </div>
    </SectionWrapper>
  );
}
