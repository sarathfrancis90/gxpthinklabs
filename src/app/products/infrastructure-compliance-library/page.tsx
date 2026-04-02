import type { Metadata } from "next";
import { productCategories } from "@/data/products";
import { ServiceHero } from "@/components/services/service-hero";
import { ProductTabs, ProductFeatureGrid } from "@/components/products/product-tabs";
import { ServiceCta } from "@/components/services/service-cta";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionDivider } from "@/components/shared/section-divider";
import { SectionBg } from "@/components/shared/section-bg";

export const metadata: Metadata = {
  title: "Infrastructure Compliance Library",
  description:
    "Your complete compliance toolkit. Ready-to-deploy document templates, SOPs, risk assessment frameworks, and traceability matrices for GxP-regulated infrastructure environments.",
};

export default function InfrastructureComplianceLibraryPage() {
  return (
    <>
      <ServiceHero
        badge="GxP COMPLIANCE FOR INFRASTRUCTURE"
        title="Infrastructure Compliance Library"
        titleAccent="Your Complete Toolkit"
        description="Accelerate your compliance journey with ready-to-deploy document templates and technical frameworks designed specifically for GxP-regulated infrastructure environments."
        primaryCta={{
          label: "Get Started",
          href: "/contact",
        }}
        secondaryCta={{
          label: "View Samples",
          href: "/contact",
        }}
      />

      <SectionDivider />

      {/* Product Categories — with VIVID dedicated background */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Dedicated products background — HIGH visibility */}
        <SectionBg variant="products" opacity="opacity-[0.35] dark:opacity-[0.20]" />

        {/* Additional glow effects */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/25 dark:bg-primary/8 blur-[130px] rounded-full translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 dark:bg-secondary/5 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/3" />
          <div className="absolute top-1/2 right-1/3 w-[350px] h-[350px] bg-tertiary/15 dark:bg-tertiary/4 blur-[100px] rounded-full" />
        </div>

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 z-[1] mesh-gradient pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <SectionHeader
            alignment="center"
            title="Enterprise-Grade Documentation"
            subtitle="Standardized frameworks for every stage of the infrastructure lifecycle."
          />
          <ProductTabs categories={productCategories} />

          {/* Featured Grid for remaining categories */}
          <div className="mt-20">
            <ProductFeatureGrid categories={productCategories} />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <ServiceCta
        title="Ready to standardize your infrastructure compliance?"
        description="Join leading biotech and pharma firms who use GXPThinklabs to maintain audit-ready infrastructure with 50% less documentation overhead."
        buttonLabel="Schedule a Consultation"
        badges={["HIPAA Compliant", "GDPR Ready", "21 CFR Part 11"]}
      />
    </>
  );
}
