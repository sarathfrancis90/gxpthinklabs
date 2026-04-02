import { Shield, TrendingUp, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionBg } from "@/components/shared/section-bg";
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "Risk-Based",
    description:
      "Prioritizing quality efforts where they matter most, following GAMP 5 principles to streamline validation without compromising safety.",
    icon: Shield,
  },
  {
    title: "Scalable",
    description:
      "Architecting frameworks that grow from early-stage startups to global commercialization, ensuring your tech stack evolves with your pipeline.",
    icon: TrendingUp,
  },
  {
    title: "Audit-Ready",
    description:
      "Maintaining a state of permanent inspection readiness through well-structured documentation and continuous compliance monitoring.",
    icon: CheckCircle,
  },
];

export function PillarsSection() {
  return (
    <SectionWrapper background="surface-low" className="relative overflow-hidden ambient-glow section-gradient-2 teal-section">
      <SectionBg variant="grid" opacity="opacity-[0.10] dark:opacity-[0.06]" />
      {/* Background grid pattern */}
      <div className="absolute inset-0 technical-grid opacity-[0.3] dark:opacity-[0.08]" />
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-primary/20 dark:bg-primary/6 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/20 dark:bg-secondary/5 blur-[100px] rounded-full translate-y-1/3 translate-x-1/4" />

      <div className="relative z-10">
      <SectionHeader
        title="Core Pillars"
        subtitle="The foundation of every engagement we undertake."
        alignment="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className={cn(
                "p-8 rounded-xl gradient-border animated-gradient-border",
                "border border-primary/15 dark:border-outline-variant/20",
                "shadow-md shadow-primary/[0.06] dark:shadow-none",
                "hover:shadow-lg hover:shadow-primary/[0.12] transition-all duration-300"
              )}
            >
              <div className="w-12 h-12 bg-primary/[0.08] dark:bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">
                {pillar.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          );
        })}
      </div>
      </div>
    </SectionWrapper>
  );
}
