import { Server, Monitor, ClipboardCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  shortDescription: string;
  icon: LucideIcon;
  href: string;
  features: string[];
  color: "primary" | "secondary" | "tertiary";
}

export const services: Service[] = [
  {
    id: "infrastructure-qualification",
    slug: "infrastructure-qualification",
    title: "IT Infrastructure Qualification",
    shortTitle: "Infrastructure Qualification",
    description:
      "GxP IT infrastructure must be documented, qualified, and maintained in a controlled state to meet regulatory expectations and industry best practices. We provide end-to-end infrastructure qualification and maintenance solutions tailored to your environment, whether on-premises, cloud-based, or hybrid.",
    shortDescription:
      "Risk-based assessment and qualification of IT infrastructure ensuring full regulatory alignment and data integrity across cloud, on-premise, and hybrid environments.",
    icon: Server,
    href: "/services/infrastructure-qualification",
    features: [
      "Infrastructure Qualification Planning & Execution for AWS, Azure, on-premises, and hybrid environments",
      "Location Risk Assessments for data centers, MDF/IDF rooms, and vendor-hosted environments",
      "IT Change Management & Periodic Review Processes to ensure infrastructure remains in a controlled state",
    ],
    color: "primary",
  },
  {
    id: "computer-system-validation",
    slug: "computer-system-validation",
    title: "Computer System Validation (CSV/CSA)",
    shortTitle: "Computer System Validation",
    description:
      "Validating and maintaining GxP-regulated IT systems requires a risk-based approach that aligns with industry best practices, GAMP guidelines, and regulatory requirements such as 21 CFR Part 11 and Annex 11. Whether you are implementing a new system, assessing an existing one, or transitioning to CSA principles, we provide the expertise and documentation needed to ensure compliance.",
    shortDescription:
      "GAMP 5 based validation and CSA services for LIMS, ELN, QMS, and ERP systems tailored to biotech, pharma, and medical device requirements.",
    icon: Monitor,
    href: "/services/computer-system-validation",
    features: [
      "CSV/CSA Strategy Development based on system risk and regulatory expectations",
      "Validation Planning & Execution: Plans, URS, FRS, Risk-Based Testing (IQ/OQ/PQ), Traceability Matrices",
      "Cloud and SaaS System Validation for QMS, LIMS, ERP, MES, and Document Management platforms",
      "Custom Software Qualification (GAMP Category 5)",
      "Data Integrity & Part 11/Annex 11 Compliance Reviews",
      "Remediation & Continuous Compliance Support",
    ],
    color: "secondary",
  },
  {
    id: "compliance-audits",
    slug: "compliance-audits",
    title: "System Development & IT Compliance Audits",
    shortTitle: "Compliance Audits",
    description:
      "A well-defined System Development Life Cycle (SDLC) and robust IT compliance processes are essential for maintaining control over GxP-regulated systems. We provide expert guidance and independent assessments to help you establish, refine, or evaluate system development, validation, and IT quality programs.",
    shortDescription:
      "Internal and third-party auditing services to identify gaps, refine SDLC processes, and ensure audit-readiness for FDA and EMA inspections.",
    icon: ClipboardCheck,
    href: "/services/compliance-audits",
    features: [
      "SDLC Program Development & Optimization for system development, testing, and change management",
      "IT & Compliance Audits assessing validation, qualification, and IT quality programs",
      "Open-Source Software Compliance Assessments for regulated environments",
      "Vendor & Third-Party Compliance Audits for cloud providers and IT service partners",
    ],
    color: "tertiary",
  },
];
