import type { Metadata } from "next";
import {
  LayoutDashboard,
  ShieldCheck,
  Code,
  UserCheck,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { ServiceHero } from "@/components/services/service-hero";
import { ServiceDetailCard } from "@/components/services/service-detail-card";
import { ServiceCta } from "@/components/services/service-cta";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionDivider } from "@/components/shared/section-divider";
import { SectionBg } from "@/components/shared/section-bg";

export const metadata: Metadata = {
  title:
    "System Development & IT Compliance Audits | GXPThinklabs",
  description:
    "SDLC program development, IT compliance audits, open-source software compliance, and vendor audits for GxP-regulated environments.",
};

const auditServices = [
  {
    icon: <LayoutDashboard className="h-6 w-6" />,
    title: "SDLC Program Development and Optimization",
    description:
      "Standardize your development lifecycle for GxP compliance. We integrate validation steps into modern Agile and DevOps workflows without compromising speed.",
    wide: true,
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "IT and Compliance Audits",
    description:
      "Comprehensive gap analysis and audit readiness for IT infrastructure. We ensure your systems meet FDA 21 CFR Part 11 and EU Annex 11 requirements.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Open-Source Software (OSS) Compliance",
    description:
      "Navigate the complexities of OSS in regulated environments. Strategic assessment of library integrity, licensing, and security risks.",
  },
  {
    icon: <UserCheck className="h-6 w-6" />,
    title: "Vendor and Third-Party Compliance Audits",
    description:
      "Ensuring your supply chain meets global GxP standards. We evaluate SaaS providers, data centers, and managed service partners with precision.",
    wide: true,
  },
];

const riskApproachPoints = [
  "Evidence-based quality risk management",
  "Scalable validation frameworks for high-growth firms",
  "Deep domain expertise in BioPharma regulations",
];

export default function ComplianceAuditsPage() {
  return (
    <>
      <ServiceHero
        badge="GxP EXCELLENCE"
        title="System Development & IT"
        titleAccent="Compliance Audits"
        description="Bridging the gap between rapid software development and rigorous GxP compliance. We empower life science innovators with high-velocity, compliant IT infrastructure."
        imageSrc="/images/service-audits-v2.png"
        primaryCta={{
          label: "Schedule a Consultation",
          href: "/contact",
        }}
        secondaryCta={{
          label: "View Case Studies",
          href: "/resources/white-papers",
        }}
      />

      <SectionDivider />

      {/* Audit Services - Bento Grid */}
      <SectionWrapper className="relative overflow-hidden noise-overlay ambient-glow section-gradient-1 teal-section">
        <SectionBg variant="circuits" />
        {/* Background visual */}
        <div className="absolute inset-0 technical-grid opacity-[0.3] dark:opacity-[0.08]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 dark:bg-secondary/8 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 dark:bg-primary/5 blur-[100px] rounded-full -translate-y-1/3 translate-x-1/4" />

        <div className="relative z-10">
        <SectionHeader
          label="Audit Services"
          title="Our Compliance Capabilities"
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: SDLC (wide) */}
          <div className="md:col-span-8">
            <ServiceDetailCard
              icon={auditServices[0].icon}
              title={auditServices[0].title}
              description={auditServices[0].description}
              className="h-full"
            />
          </div>

          {/* Card 2: IT Audits */}
          <div className="md:col-span-4">
            <ServiceDetailCard
              icon={auditServices[1].icon}
              title={auditServices[1].title}
              description={auditServices[1].description}
              delay={0.1}
              className="h-full"
            />
          </div>

          {/* Card 3: OSS Compliance */}
          <div className="md:col-span-4">
            <ServiceDetailCard
              icon={auditServices[2].icon}
              title={auditServices[2].title}
              description={auditServices[2].description}
              delay={0.2}
              className="h-full"
            />
          </div>

          {/* Card 4: Vendor Audits (wide) */}
          <div className="md:col-span-8">
            <ServiceDetailCard
              icon={auditServices[3].icon}
              title={auditServices[3].title}
              description={auditServices[3].description}
              delay={0.3}
              className="h-full"
            />
          </div>
        </div>
        </div>
      </SectionWrapper>

      <SectionDivider />

      {/* Risk-Based Approach Section */}
      <SectionWrapper background="surface-low" className="relative overflow-hidden ambient-glow section-gradient-2 teal-section">
        {/* Background texture */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 technical-grid opacity-[0.4] dark:opacity-[0.08]" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/20 dark:bg-secondary/5 blur-[120px] rounded-full translate-x-1/2" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <SectionHeader
              label="Our Methodology"
              title="A Risk-Based Approach to Modern IT"
              className="mb-8"
            />
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              GXPThinklabs moves beyond check-the-box compliance. We focus
              on critical quality attributes (CQAs) and data integrity
              (ALCOA+) to ensure that your IT systems are not just compliant,
              but robust, secure, and resilient.
            </p>
            <ul className="space-y-4">
              {riskApproachPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-on-surface"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 w-full aspect-video rounded-2xl overflow-hidden relative">
            <Image
              src="/images/service-audits-v2.png"
              alt="Risk analysis concept"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </div>
        </div>
      </SectionWrapper>

      <SectionDivider />

      {/* CTA */}
      <ServiceCta
        title="Ready to secure your digital infrastructure?"
        description="Join the industry leaders who trust GXPThinklabs for their most critical IT compliance initiatives."
      />
    </>
  );
}
