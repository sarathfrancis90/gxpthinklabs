import { HeroSection } from "@/components/home/hero-section";
import { ServicesGrid } from "@/components/home/services-grid";
import { WhySection } from "@/components/home/why-section";
import { IndustriesSection } from "@/components/home/industries-section";
import { CtaBanner } from "@/components/home/cta-banner";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionDivider } from "@/components/shared/section-divider";

export default function Home() {
  return (
    <>
      <HeroSection />

      <SectionDivider />

      <ScrollReveal>
        <ServicesGrid />
      </ScrollReveal>

      <SectionDivider />

      <ScrollReveal>
        <WhySection />
      </ScrollReveal>

      <SectionDivider />

      <ScrollReveal>
        <IndustriesSection />
      </ScrollReveal>

      <SectionDivider />

      <ScrollReveal>
        <CtaBanner />
      </ScrollReveal>
    </>
  );
}
