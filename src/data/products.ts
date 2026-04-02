export interface ProductCategory {
  id: string;
  title: string;
  icon: string;
  items: ProductItem[];
}

export interface ProductItem {
  title: string;
  description: string;
  format?: string;
  tags?: string[];
  subItems?: { icon: string; title: string; description: string }[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "qualification-plans",
    title: "Qualification Plans & Protocols",
    icon: "FileText",
    items: [
      {
        title: "Qualification Plans and Test Protocols",
        description:
          "Exhaustive validation templates for the modern data center. Our protocols are architected to satisfy both FDA and EMA requirements for computerized systems.",
        tags: ["IQ/OQ/PQ Bundle", "Cloud Ready"],
        subItems: [
          {
            icon: "Server",
            title: "Physical & Virtual Servers",
            description:
              "Includes templates for hypervisor configuration and hardware acceptance testing.",
          },
          {
            icon: "Cloud",
            title: "Cloud Infrastructure",
            description:
              "Tailored IQ/OQ for AWS/Azure/GCP shared responsibility models.",
          },
          {
            icon: "Network",
            title: "Network Architecture",
            description:
              "Test protocols for firewalls, switches, and secure segmentation validation.",
          },
          {
            icon: "ClipboardList",
            title: "Master Plans",
            description:
              "High-level strategies for multi-site infrastructure validation programs.",
          },
        ],
      },
    ],
  },
  {
    id: "management-sops",
    title: "Management SOPs",
    icon: "Settings",
    items: [
      {
        title: "Infrastructure Management SOPs",
        description:
          "Core operating procedures for IT infrastructure management covering backup, restore, disaster recovery, security, incident response, and access management.",
        format: "DOCX",
      },
    ],
  },
  {
    id: "work-instructions",
    title: "Work Instructions",
    icon: "Terminal",
    items: [
      {
        title: "Work Instructions for Configuration Items",
        description:
          "Step-by-step technical guides for servers, virtual machines, storage, network devices, cabling, and power devices.",
        format: "PDF",
      },
    ],
  },
  {
    id: "risk-assessment",
    title: "Risk Assessment",
    icon: "BarChart3",
    items: [
      {
        title: "Risk Assessment Templates",
        description:
          "Comprehensive risk assessment templates for data centers, vendors, and IT systems.",
        format: "XLSX, PDF",
      },
    ],
  },
  {
    id: "traceability",
    title: "Traceability & Specs",
    icon: "GitBranch",
    items: [
      {
        title: "Traceability Matrices, Configuration Specifications, and Installation Instructions",
        description:
          "Map infrastructure requirements to test scripts and risk controls with full traceability.",
        format: "XLSX",
      },
    ],
  },
];
