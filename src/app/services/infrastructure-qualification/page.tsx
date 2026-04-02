import type { Metadata } from "next";
import {
  Server,
  MapPin,
  Settings2,
  FileText,
  BookOpen,
  ClipboardList,
  GitBranch,
} from "lucide-react";
import { ServiceHero } from "@/components/services/service-hero";
import { ServiceDetailCard } from "@/components/services/service-detail-card";
import { ServiceCta } from "@/components/services/service-cta";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionDivider } from "@/components/shared/section-divider";
import { SectionBg } from "@/components/shared/section-bg";
import { GlassCard } from "@/components/shared/glass-card";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "IT Infrastructure Qualification & Maintenance | GXPThinklabs",
  description:
    "End-to-end GxP infrastructure qualification and maintenance for AWS, Azure, on-premise, and hybrid environments. IQ/OQ/PQ planning, location risk assessments, and IT change management.",
};

const infrastructureServices = [
  {
    icon: <Server className="h-6 w-6" />,
    title: "Infrastructure Qualification Planning",
    description:
      "Scalable strategies for AWS, Azure, on-premise, and hybrid environments. We design the IQ/OQ framework that grows with your scaling needs.",
    bullets: [
      "Cloud Tenant Validation",
      "Network Topology Qualification",
      "Disaster Recovery Strategy",
    ],
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Location Risk Assessments",
    description:
      "Comprehensive physical and digital site assessments. Evaluating environmental controls, security protocols, and connectivity redundancy for data centers, MDF/IDF rooms, and vendor-hosted environments.",
    bullets: [
      "Physical Access Control",
      "Environmental Monitoring",
      "3rd Party Data Center Audits",
    ],
  },
  {
    icon: <Settings2 className="h-6 w-6" />,
    title: "IT Change Management",
    description:
      "GxP-compliant lifecycle management for modern IT. Managing updates, patches, and configurations without losing your validated status through periodic review processes.",
    bullets: [
      "Automated Change Logging",
      "Impact Assessment Protocols",
      "Infrastructure as Code (IaC) Audits",
    ],
  },
];

const complianceAssets = [
  {
    icon: FileText,
    title: "IQ/OQ/PQ Plans",
    description:
      "Comprehensive qualification master plans for server infrastructure.",
    tag: "TEMPLATE",
    format: "PDF, DOCX",
  },
  {
    icon: BookOpen,
    title: "IT Standard SOPs",
    description:
      "Core operating procedures for security, access, and backup.",
    tag: "GUIDELINE",
    format: "DOCX",
  },
  {
    icon: ClipboardList,
    title: "Work Instructions",
    description:
      "Step-by-step technical guides for systems administrators.",
    tag: "WORKFLOW",
    format: "PDF",
  },
  {
    icon: GitBranch,
    title: "Traceability Matrices",
    description:
      "Map infrastructure requirements to test scripts and risk controls.",
    tag: "MATRIX",
    format: "XLSX",
  },
];

export default function InfrastructureQualificationPage() {
  return (
    <>
      <ServiceHero
        badge="INFRASTRUCTURE EXCELLENCE"
        title="IT Infrastructure"
        titleAccent="Qualification & Maintenance"
        description="Bridging the gap between rigid GxP compliance and modern cloud-native, hybrid, and on-premise infrastructure. Future-proof your validated stack."
        imageSrc="/images/service-infrastructure-v2.png"
        primaryCta={{
          label: "Schedule a Consultation",
          href: "/contact",
        }}
        secondaryCta={{
          label: "View Framework",
          href: "/products/infrastructure-compliance-library",
        }}
      />

      <SectionDivider />

      {/* Core Services */}
      <SectionWrapper className="relative overflow-hidden noise-overlay ambient-glow section-gradient-1 teal-section">
        <SectionBg variant="circuits" />
        {/* Background visual */}
        <div className="absolute inset-0 technical-grid opacity-[0.3] dark:opacity-[0.08]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 dark:bg-primary/8 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 dark:bg-secondary/5 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10">
          <SectionHeader
            label="Our Services"
            title="Core Infrastructure Services"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infrastructureServices.map((service, index) => (
              <ServiceDetailCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                bullets={service.bullets}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionDivider />

      {/* Compliance Library Assets */}
      <SectionWrapper background="surface-low" className="relative overflow-hidden ambient-glow section-gradient-2 teal-tint">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <SectionHeader
              label="Products"
              title="Compliance Library Assets"
              subtitle="Ready-to-deploy document templates and technical frameworks."
              className="mb-0"
            />
          </div>
          <Link
            href="/products/infrastructure-compliance-library"
            className="text-primary font-semibold flex items-center gap-2 hover:underline text-sm whitespace-nowrap"
          >
            Explore Full Library
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {complianceAssets.map((asset) => {
            const Icon = asset.icon;
            return (
              <GlassCard
                key={asset.title}
                className="p-6 hover:border-primary/40 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-[10px] font-label px-2 py-1 bg-surface-variant text-on-surface-variant rounded uppercase">
                    {asset.tag}
                  </span>
                </div>
                <h4 className="font-bold mb-2 text-on-surface">
                  {asset.title}
                </h4>
                <p className="text-xs text-on-surface-variant mb-6">
                  {asset.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-on-surface-variant/60">
                    {asset.format}
                  </span>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionDivider />

      {/* CTA */}
      <ServiceCta
        title="Ready to qualify your infrastructure?"
        description="Let's discuss your roadmap and ensure your IT environment meets the highest standards of GxP compliance."
      />
    </>
  );
}
