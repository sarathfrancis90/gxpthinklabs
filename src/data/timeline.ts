export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

export const timelineEntries: TimelineEntry[] = [
  {
    year: "1997",
    title: "Foundation of Expertise",
    description:
      "Team leaders begin defining 21 CFR Part 11 strategies for global pharma leaders.",
  },
  {
    year: "2010",
    title: "SaaS Validation Revolution",
    description:
      "Expansion into multi-tenant cloud validation frameworks and agile SDLC compliance.",
  },
  {
    year: "2020",
    title: "Cloud & Modern Architecture",
    description:
      "Formalizing validation practices for cloud-native and containerized environments.",
  },
  {
    year: "2025",
    title: "GXPThinklabs Founded",
    description:
      "An SRJH company established to pioneer data-driven GxP consulting for the modern era.",
    isHighlighted: true,
  },
];
