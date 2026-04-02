export interface Resource {
  id: string;
  title: string;
  type: "white-paper" | "guide" | "case-study" | "compliance-update";
  typeLabel: string;
  date: string;
  description: string;
  readTime: string;
  downloadUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const resources: Resource[] = [
  {
    id: "validating-ai-systems",
    title: "Validating AI Systems",
    type: "white-paper",
    typeLabel: "White Paper",
    date: "June 2024",
    description:
      "A comprehensive framework for validating non-deterministic AI models in GxP environments.",
    readTime: "12 min read",
    downloadUrl: "/documents/validating-ai-systems.pdf",
  },
  {
    id: "csv-best-practices-2025",
    title: "CSV Best Practices for 2025",
    type: "guide",
    typeLabel: "Guide",
    date: "April 2025",
    description:
      "Modernizing your Computer System Validation strategy using risk-based approaches and CSA principles.",
    readTime: "18 min read",
    downloadUrl: "/contact",
  },
  {
    id: "infrastructure-qualification-guide",
    title: "Infrastructure Qualification Guide",
    type: "guide",
    typeLabel: "Guide",
    date: "February 2025",
    description:
      "Ensuring your cloud and on-premise infrastructure meets rigorous GxP standards.",
    readTime: "25 min read",
    downloadUrl: "/contact",
  },
  {
    id: "data-integrity-digital-age",
    title: "Data Integrity in the Digital Age",
    type: "white-paper",
    typeLabel: "White Paper",
    date: "January 2025",
    description:
      "Navigating the complexities of 21 CFR Part 11 and EU Annex 11 in a data-driven world.",
    readTime: "15 min read",
    downloadUrl: "/contact",
  },
];

export const resourceCategories = [
  { id: "all", label: "All" },
  { id: "white-paper", label: "White Papers" },
  { id: "guide", label: "Guides" },
  { id: "case-study", label: "Case Studies" },
  { id: "compliance-update", label: "Compliance Updates" },
];
