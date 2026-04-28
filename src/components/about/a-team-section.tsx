import Link from "next/link";
import { Sparkles } from "lucide-react";
import { GradientText } from "@/components/shared/gradient-text";
import { cn } from "@/lib/utils";

export function ATeamSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden noise-overlay teal-section">
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 technical-grid opacity-[0.25] dark:opacity-[0.06]" />
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-primary/15 dark:bg-primary/5 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/15 dark:bg-secondary/4 blur-[120px] rounded-full translate-y-1/3 translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div
          className={cn(
            "relative rounded-3xl p-10 md:p-16 text-center gradient-border animated-gradient-border",
            "border border-primary/15 dark:border-outline-variant/20",
            "bg-gradient-to-br from-primary/[0.06] via-surface-container-lowest to-secondary/[0.04]",
            "dark:from-primary/[0.08] dark:via-surface-container/40 dark:to-secondary/[0.05]",
            "shadow-md shadow-primary/[0.08] dark:shadow-none"
          )}
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-surface-container border border-primary/15 dark:border-outline-variant/30 px-5 py-2 rounded-full mb-8">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-on-surface-variant text-xs font-label uppercase tracking-[0.2em]">
              Our People
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface mb-6 tracking-tight">
            Always an <GradientText>A-Team</GradientText>
          </h2>

          <p className="text-on-surface-variant text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Our team can create, build, and scale frameworks for fast-growing
            clients and has a proven track record. We have contributed to
            several industry guidelines and understand complex regulations in
            novel areas. Our approach is collaborative, accelerated, and
            practical.
          </p>

          {/* Divider */}
          <div className="mt-10 mb-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <p className="text-on-surface-variant text-base">
            For more information on our services, please{" "}
            <Link
              href="/contact"
              className="text-primary font-semibold hover:underline underline-offset-4 decoration-primary/60"
            >
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
