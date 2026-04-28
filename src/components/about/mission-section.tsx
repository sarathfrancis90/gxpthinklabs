import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionBg } from "@/components/shared/section-bg";
import { cn } from "@/lib/utils";

const industryTags = [
  { label: "Biotech", icon: "biotech" },
  { label: "Pharma", icon: "medication" },
];

export function MissionSection() {
  return (
    <SectionWrapper className="relative overflow-hidden teal-section">
      <SectionBg variant="waves" opacity="opacity-[0.10] dark:opacity-[0.08]" />
      {/* Background texture */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 technical-grid opacity-[0.4] dark:opacity-[0.08]" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/20 dark:bg-primary/6 blur-[120px] rounded-full -translate-x-1/2" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main content card */}
        <div
          className={cn(
            "lg:col-span-7 rounded-xl p-8 md:p-12 gradient-border",
            "border border-primary/15 dark:border-outline-variant/20",
            "shadow-md shadow-primary/[0.08] dark:shadow-none flex flex-col justify-center"
          )}
        >
          <h2 className="text-3xl font-headline font-bold text-on-surface mb-6">
            Our Mission
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            We partner with biotech and pharma companies to modernize quality
            systems. By integrating advanced automation with rigorous 21 CFR
            compliance, we transform regulatory overhead into a strategic
            advantage.
          </p>
          <div className="flex flex-wrap gap-3">
            {industryTags.map((tag) => (
              <div
                key={tag.label}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full",
                  "bg-surface-container-low dark:bg-surface-container-high border border-outline-variant/30 dark:border-outline-variant/50"
                )}
              >
                <span className="text-xs font-label uppercase font-semibold text-on-surface">
                  {tag.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Accent card */}
        <div
          className={cn(
            "lg:col-span-5 rounded-xl overflow-hidden gradient-border",
            "bg-gradient-to-br from-primary/[0.10] via-surface-container-lowest to-secondary/[0.08] dark:from-primary/15 dark:via-surface-container dark:to-secondary/15",
            "border border-primary/15 dark:border-outline-variant/20",
            "shadow-md shadow-primary/[0.08] dark:shadow-none flex items-center justify-center p-12"
          )}
        >
          <div className="text-center">
            <span className="text-6xl md:text-7xl font-extrabold text-gradient block mb-4">
              2025
            </span>
            <span className="text-on-surface-variant font-label uppercase tracking-[0.2em] text-sm">
              Established
            </span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
