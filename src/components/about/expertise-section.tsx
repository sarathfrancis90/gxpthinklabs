import { Rocket } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionBg } from "@/components/shared/section-bg";
import { cn } from "@/lib/utils";

const expertise = [
  {
    title: "Emerging Pharma & Biotech",
    description:
      "For emerging pharma and biotech organizations — from early startups to growing mid-cap firms — we provide fractional Quality and IT/CSV services that scale with your pipeline.",
    icon: Rocket,
  },
];

export function ExpertiseSection() {
  return (
    <SectionWrapper className="relative overflow-hidden ambient-glow teal-section">
      <SectionBg variant="circuits" opacity="opacity-[0.10] dark:opacity-[0.06]" />

      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/15 dark:bg-primary/5 blur-[120px] rounded-full -translate-y-1/3" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary/15 dark:bg-secondary/4 blur-[100px] rounded-full translate-y-1/3" />
      </div>

      <div className="relative z-10">
        <SectionHeader
          label="What We Do"
          title="Our Expertise"
          subtitle="Specialized engagement models tailored to where you are in your journey."
          alignment="center"
        />

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
          {expertise.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={cn(
                  "group relative w-full md:w-[calc(50%-1rem)] max-w-xl",
                  "rounded-2xl p-8 md:p-10 gradient-border animated-gradient-border",
                  "border border-primary/15 dark:border-outline-variant/20",
                  "bg-gradient-to-br from-primary/[0.05] via-surface-container-lowest to-secondary/[0.04]",
                  "dark:from-primary/[0.08] dark:via-surface-container/40 dark:to-secondary/[0.05]",
                  "shadow-md shadow-primary/[0.06] dark:shadow-none",
                  "hover:shadow-lg hover:shadow-primary/[0.12] hover:scale-[1.01]",
                  "transition-all duration-300"
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 mb-6 rounded-xl flex items-center justify-center",
                    "bg-primary/[0.10] dark:bg-primary/15",
                    "border border-primary/20 dark:border-primary/25",
                    "group-hover:bg-primary/[0.18] dark:group-hover:bg-primary/25",
                    "transition-colors duration-300"
                  )}
                >
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-on-surface mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
