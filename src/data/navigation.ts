export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "#",
    children: [
      {
        label: "Infrastructure Qualification",
        href: "/services/infrastructure-qualification",
        description: "Risk-based IT infrastructure assessment and qualification.",
      },
      {
        label: "Computer System Validation",
        href: "/services/computer-system-validation",
        description: "GAMP 5 validation for LIMS, ELN, QMS, and ERP systems.",
      },
      {
        label: "System Dev & Compliance Audits",
        href: "/services/compliance-audits",
        description: "SDLC guidance and independent compliance assessments.",
      },
    ],
  },
  {
    label: "Products",
    href: "/products/infrastructure-compliance-library",
  },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: [
    {
      label: "Infrastructure Qualification",
      href: "/services/infrastructure-qualification",
    },
    {
      label: "CSV Services",
      href: "/services/computer-system-validation",
    },
    {
      label: "Compliance Audits",
      href: "/services/compliance-audits",
    },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products/infrastructure-compliance-library" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
