"use client";

import { CheckCircle } from "lucide-react";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionBg } from "@/components/shared/section-bg";
import { cn } from "@/lib/utils";

const differentiators = [
  {
    title: "Strategic Excellence",
    description:
      "Aligning compliance with your business objectives for operational advantage.",
  },
  {
    title: "Regulatory Foresight",
    description:
      "Anticipating shifts in FDA, EMA, and global guidelines so you stay ahead.",
  },
];

export function WhySection() {
  return (
    <SectionWrapper background="surface-low" className="relative overflow-hidden section-gradient-2 ambient-glow teal-section">
      <SectionBg variant="waves" opacity="opacity-[0.12] dark:opacity-[0.08]" />
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/20 dark:bg-secondary/5 blur-[100px] rounded-full translate-y-1/3 translate-x-1/4" />
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-primary/20 dark:bg-primary/5 blur-[100px] rounded-full -translate-y-1/4 -translate-x-1/4" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left column -- text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            <span className="text-gradient">Why GXPThinklabs</span>
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-xl">
            Our team brings deep regulatory and industry expertise to every
            engagement. We combine technical knowledge with a practical approach
            to compliance, ensuring your focus remains on innovation.
          </p>
          <div className="space-y-4">
            {differentiators.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-on-surface font-semibold">{item.title}</p>
                  <p className="text-on-surface-variant text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column -- stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-10 rounded-2xl gradient-border border border-primary/15 dark:border-outline-variant/20 shadow-md shadow-primary/[0.08] dark:shadow-none flex flex-col justify-center text-center md:col-span-2">
            <AnimatedCounter
              end={100}
              suffix="%"
              label="Audit-Ready Documentation"
            />
          </div>
          <div className="p-10 rounded-2xl gradient-border border border-primary/15 dark:border-outline-variant/20 shadow-md shadow-primary/[0.08] dark:shadow-none flex flex-col justify-center text-center">
            <span className="text-3xl md:text-4xl font-extrabold text-secondary tabular-nums">
              End-to-End
            </span>
            <span className="block text-on-surface font-medium uppercase tracking-widest text-xs mt-2">
              Strategy to Execution
            </span>
          </div>
          <div className="p-10 rounded-2xl gradient-border border border-primary/15 dark:border-outline-variant/20 shadow-md shadow-primary/[0.08] dark:shadow-none flex flex-col justify-center text-center">
            <AnimatedCounter end={3} label="Core Service Lines" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
