import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { MissionSection } from "@/components/about/mission-section";
import { PillarsSection } from "@/components/about/pillars-section";
import { ParentCompanySection } from "@/components/about/parent-company-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us | Modern GxP Compliance Consulting",
  description:
    "GXPThinklabs is a 2025-founded SRJH subsidiary bringing modern, data-driven GxP compliance consulting to the life sciences industry.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden noise-overlay teal-section">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero-v2.png"
            alt=""
            fill
            priority
            className="object-cover opacity-[0.38] dark:opacity-[0.22]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>

        {/* Glow effects — stronger */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/25 dark:bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 dark:bg-secondary/8 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="font-label text-primary tracking-[0.2em] uppercase text-xs font-bold mb-4 block">
              Established 2025
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tight text-on-surface mb-6 leading-[1.1]">
              Deep Expertise.{" "}
              <span className="text-gradient">Modern Approach.</span>
            </h1>
            <p className="text-on-surface-variant text-xl max-w-xl leading-relaxed">
              Bridging the gap between rigid regulatory standards and the agility
              of modern technology. We define the next generation of GxP
              compliance.
            </p>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <MissionSection />
      </ScrollReveal>

      <ScrollReveal>
        <PillarsSection />
      </ScrollReveal>

      <ScrollReveal>
        <ParentCompanySection />
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-20 md:py-32 max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary/20 via-surface-container to-transparent p-12 md:p-20 rounded-3xl border border-primary/20 text-center">
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-on-surface mb-8 tracking-tight">
              Ready to start?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="default" size="lg" asChild>
                <Link href="/contact">Book a Consultation</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/#services">View Solutions</Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
