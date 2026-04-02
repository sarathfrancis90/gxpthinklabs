import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionBg } from "@/components/shared/section-bg";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { FAQSection } from "@/components/contact/faq-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with our GxP compliance experts. Schedule a consultation for IT infrastructure qualification, CSV, or compliance audit services.",
  openGraph: {
    title: "Contact GXPThinklabs",
    description:
      "Get in touch with our GxP compliance experts for a consultation.",
    images: ["/images/og-image-v2.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact Our Team"
        title="Let's Talk Compliance"
        subtitle="Our team of industry-leading GxP experts is ready to help you navigate complex regulatory landscapes. Whether you're an early-stage startup or a global enterprise, we have the solutions to ensure your operations are compliant and future-ready."
        bgLight="/images/contact-hero-light.png"
        bgDark="/images/contact-hero-dark.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      {/* Two-column layout: form + info */}
      <section className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 overflow-hidden section-gradient-1 ambient-glow teal-section py-12 rounded-3xl">
        <SectionBg variant="waves" opacity="opacity-[0.12] dark:opacity-[0.08]" />
        {/* Background texture behind form */}
        <div className="absolute inset-0 technical-grid opacity-[0.4] dark:opacity-[0.08]" />
        {/* Background mesh gradient behind form */}
        <div className="absolute inset-0 mesh-gradient" />
        {/* Glow behind contact info — stronger */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/20 dark:bg-primary/8 blur-[100px] rounded-full translate-x-1/4" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-secondary/20 dark:bg-secondary/6 blur-[80px] rounded-full translate-y-1/3" />
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-tertiary/15 dark:bg-tertiary/5 blur-[100px] rounded-full -translate-y-1/4 -translate-x-1/4" />

        <ScrollReveal direction="left" className="lg:col-span-7 relative z-10">
          <ContactForm />
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.2} className="lg:col-span-5 relative z-10">
          <ContactInfo />
        </ScrollReveal>
      </section>

      {/* FAQ Section */}
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>
    </>
  );
}
