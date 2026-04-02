import { SectionWrapper } from "@/components/layout/section-wrapper";
import { cn } from "@/lib/utils";

export function ParentCompanySection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden ambient-glow section-gradient-1 teal-section">
      {/* Background gradient and glow */}
      <div className="absolute inset-0 bg-primary/[0.06] dark:bg-primary/[0.02]" />
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/20 dark:bg-primary/5 blur-[120px] rounded-full -translate-y-1/3" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary/20 dark:bg-secondary/4 blur-[100px] rounded-full translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-surface-container border border-primary/15 dark:border-outline-variant/30 px-6 py-3 rounded-full mb-8">
          <span className="text-on-surface-variant text-xs font-label uppercase tracking-[0.2em]">
            Part of the
          </span>
          <span className="text-on-surface font-black tracking-tighter text-xl">
            SRJH
          </span>
          <span className="text-on-surface-variant text-xs font-label uppercase tracking-[0.2em]">
            Ecosystem
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface mb-6 tracking-tight">
          Corporate Excellence
        </h2>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
          GXPThinklabs operates as a specialized subsidiary of SRJH, leveraging
          global resources and institutional knowledge to deliver unparalleled
          depth in compliance engineering.
        </p>
      </div>
    </section>
  );
}
