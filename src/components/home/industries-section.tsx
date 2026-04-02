import { SectionHeader } from "@/components/shared/section-header";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionBg } from "@/components/shared/section-bg";
import { BiotechIcon } from "@/components/icons/industry-biotech";
import { PharmaIcon } from "@/components/icons/industry-pharma";
import { MedicalDevicesIcon } from "@/components/icons/industry-medical";

const industries = [
  {
    title: "Biotechnology",
    description: "Validation and compliance solutions for biotech innovators developing cutting-edge therapies and diagnostics.",
    icon: BiotechIcon,
    accent: "primary" as const,
  },
  {
    title: "Pharmaceutical",
    description: "End-to-end regulatory compliance consulting for pharmaceutical manufacturing and quality systems.",
    icon: PharmaIcon,
    accent: "secondary" as const,
  },
  {
    title: "Medical Devices",
    description: "IT infrastructure qualification and system validation for medical device design, production, and distribution.",
    icon: MedicalDevicesIcon,
    accent: "tertiary" as const,
  },
];

const accentBorder: Record<string, string> = {
  primary: "group-hover:border-primary/40",
  secondary: "group-hover:border-secondary/40",
  tertiary: "group-hover:border-tertiary/40",
};

const accentGlow: Record<string, string> = {
  primary: "group-hover:shadow-[0_0_40px_rgba(13,115,119,0.1)]",     /* theme-config: glowColors.primary */
  secondary: "group-hover:shadow-[0_0_40px_rgba(20,145,155,0.1)]",   /* theme-config: glowColors.secondary */
  tertiary: "group-hover:shadow-[0_0_40px_rgba(74,144,164,0.1)]",    /* theme-config: glowColors.tertiary */
};

export function IndustriesSection() {
  return (
    <SectionWrapper background="surface" className="relative overflow-hidden section-gradient-1 ambient-glow">
      <SectionBg variant="grid" opacity="opacity-[0.12] dark:opacity-[0.08]" />
      {/* Background effects */}
      <div className="absolute inset-0 technical-grid opacity-[0.2] dark:opacity-[0.05]" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/20 dark:bg-primary/8 blur-[120px] rounded-full -translate-y-1/3" />

      <div className="relative z-10">
      <SectionHeader title="Industries We Serve" alignment="center" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {industries.map((industry) => {
          const IconComponent = industry.icon;
          return (
            <div
              key={industry.title}
              className={`group relative overflow-hidden rounded-2xl gradient-border animated-gradient-border
                bg-gradient-to-br from-primary/[0.04] to-secondary/[0.03] dark:from-transparent dark:to-transparent
                border border-primary/20 dark:border-outline-variant/20
                shadow-lg shadow-primary/[0.06] dark:shadow-none
                hover:shadow-xl hover:shadow-primary/[0.12]
                transition-all duration-500
                ${accentBorder[industry.accent]}
                ${accentGlow[industry.accent]}`}
            >
              {/* SVG Illustration — fully theme-aware with gradient bg */}
              <div className="h-56 w-full overflow-hidden bg-gradient-to-br from-primary/[0.08] to-secondary/[0.06] dark:from-primary/[0.12] dark:to-secondary/[0.08] border-b border-primary/10 dark:border-outline-variant/10 transition-all duration-700 group-hover:from-primary/[0.12] group-hover:to-secondary/[0.12] group-hover:scale-105">
                <IconComponent />
              </div>

              {/* Content */}
              <div className="p-6 border-t border-outline-variant/10">
                <h3 className="text-xl font-bold font-headline text-on-surface mb-2">
                  {industry.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </SectionWrapper>
  );
}
