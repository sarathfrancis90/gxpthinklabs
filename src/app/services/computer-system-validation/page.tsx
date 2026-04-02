import type { Metadata } from "next";
import {
  ShieldCheck,
  ClipboardCheck,
  Cloud,
  Terminal,
  ShieldAlert,
  Wrench,
} from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { ServiceDetailCard } from "@/components/services/service-detail-card";
import { ServiceCta } from "@/components/services/service-cta";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionDivider } from "@/components/shared/section-divider";
import { SectionBg } from "@/components/shared/section-bg";

export const metadata: Metadata = {
  title: "Computer System Validation (CSV/CSA)",
  description:
    "GAMP 5 based validation and CSA services for LIMS, ELN, QMS, and ERP systems. Risk-based testing, data integrity reviews, and continuous compliance support.",
};

export default function ComputerSystemValidationPage() {
  return (
    <>
      <ServiceHero
        badge="LATEST COMPLIANCE STANDARDS"
        title="Computer System"
        titleAccent="Validation"
        description="Bridging the gap between technological innovation and rigorous GxP compliance. Secure your digital transformation with industry-leading assurance."
        imageSrc="/images/service-csv-v2.png"
        primaryCta={{
          label: "Schedule a Consultation",
          href: "/contact",
        }}
        secondaryCta={{
          label: "View Frameworks",
          href: "/products/infrastructure-compliance-library",
        }}
      />

      <SectionDivider />

      {/* CSV Services - Bento Grid */}
      <SectionWrapper className="relative overflow-hidden noise-overlay ambient-glow section-gradient-1 teal-section">
        <SectionBg variant="grid" />
        {/* Background visual */}
        <div className="absolute inset-0 technical-grid opacity-[0.3] dark:opacity-[0.08]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 dark:bg-primary/8 blur-[100px] rounded-full -translate-y-1/3 -translate-x-1/4" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/20 dark:bg-secondary/5 blur-[100px] rounded-full translate-y-1/3 translate-x-1/4" />

        <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <SectionHeader
            label="Capabilities"
            title="Our CSV Services"
            subtitle="Tailored validation strategies that align with your specific technology stack and regulatory requirements."
            className="mb-0"
          />
        </div>

        {/* Bento grid layout matching the Stitch design */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Row 1: CSV/CSA Strategy (wide) + Validation Planning */}
          <div className="md:col-span-8">
            <ServiceDetailCard
              icon={<ShieldCheck className="h-6 w-6" />}
              title="CSV/CSA Strategy Development"
              description="Transitioning from traditional CSV to risk-based Computer Software Assurance. We help you reduce documentation burden while increasing system reliability."
              tags={["Risk-Based", "Modernization", "Strategic Alignment"]}
              className="h-full"
            />
          </div>
          <div className="md:col-span-4">
            <ServiceDetailCard
              icon={<ClipboardCheck className="h-6 w-6" />}
              title="Validation Planning & Execution"
              description="Comprehensive lifecycle management including Validation Plans, User Requirements Specifications (URS), Functional Requirements Specifications (FRS), Risk-Based Testing (IQ/OQ/PQ), and Traceability Matrices."
              bullets={[
                "Validation Plans & Protocols",
                "URS & FRS Documentation",
                "Risk-Based Testing (IQ/OQ/PQ)",
                "Traceability Matrices",
              ]}
              delay={0.1}
              className="h-full"
            />
          </div>

          {/* Row 2: Cloud & SaaS + Custom Software + Data Integrity */}
          <div className="md:col-span-4">
            <ServiceDetailCard
              icon={<Cloud className="h-6 w-6" />}
              title="Cloud & SaaS System Validation"
              description="Specialized validation frameworks for QMS, LIMS, ERP, MES, and Document Management platforms in virtualized and multi-tenant cloud environments."
              bullets={[
                "QMS & LIMS Validation",
                "ERP & MES Qualification",
                "Shared Responsibility Models",
              ]}
              delay={0.2}
              className="h-full"
            />
          </div>
          <div className="md:col-span-4">
            <ServiceDetailCard
              icon={<Terminal className="h-6 w-6" />}
              title="Custom Software Qualification"
              description="Tailored qualification for GAMP Category 5 systems. Deep code review and structural testing for proprietary platforms and custom-developed applications."
              tags={["GAMP Cat 5", "Code Review", "Structural Testing"]}
              delay={0.3}
              className="h-full"
            />
          </div>
          <div className="md:col-span-4">
            <ServiceDetailCard
              icon={<ShieldAlert className="h-6 w-6" />}
              title="Data Integrity & Compliance"
              description="Thorough reviews for 21 CFR Part 11 and EU Annex 11 compliance. ALCOA+ principle application across all data streams to ensure regulatory readiness."
              bullets={[
                "21 CFR Part 11 Assessments",
                "EU Annex 11 Reviews",
                "ALCOA+ Data Integrity",
              ]}
              delay={0.4}
              className="h-full"
            />
          </div>

          {/* Row 3: Remediation (full width) */}
          <div className="md:col-span-12">
            <ServiceDetailCard
              icon={<Wrench className="h-6 w-6" />}
              title="Remediation & Continuous Compliance"
              description="Continuous compliance monitoring and gap remediation. We don't just find problems; we build the technical and procedural bridges to fix them, ensuring you stay inspection-ready."
              delay={0.5}
              className="h-full"
            />
          </div>
        </div>
        </div>
      </SectionWrapper>

      <SectionDivider />

      {/* CTA */}
      <ServiceCta
        title="Ready to modernize your validation strategy?"
        description="Partner with GXPThinklabs to ensure your systems are both compliant and high-performing. Our experts are ready to accelerate your journey."
        badges={["21 CFR Part 11", "EU Annex 11", "GAMP 5"]}
      />
    </>
  );
}
