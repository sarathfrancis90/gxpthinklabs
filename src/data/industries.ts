export interface Industry {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  color: "primary" | "secondary" | "tertiary";
}

export const industries: Industry[] = [
  {
    id: "biotechnology",
    title: "Biotechnology",
    description:
      "Supporting rapid scale-up from R&D to clinical phases with compliant quality systems.",
    imageSrc: "/images/industry-biotech-v2.png",
    imageAlt:
      "Biotech laboratory with scientific equipment",
    color: "primary",
  },
  {
    id: "pharmaceutical",
    title: "Pharmaceutical",
    description:
      "Global GxP strategy and implementation for small molecules and biologics manufacturers.",
    imageSrc: "/images/industry-pharma-v2.png",
    imageAlt:
      "Pharmaceutical manufacturing facility",
    color: "secondary",
  },
  {
    id: "medical-devices",
    title: "Medical Devices",
    description:
      "Navigating ISO 13485 and FDA 21 CFR Part 820 for Class I, II, and III medical devices.",
    imageSrc: "/images/industry-medical-v2.png",
    imageAlt:
      "Medical diagnostic device in clinical setting",
    color: "tertiary",
  },
];
