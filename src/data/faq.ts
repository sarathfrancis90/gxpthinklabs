export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What is your typical engagement timeline?",
    answer:
      "Engagement timelines vary based on scope, but most strategy phases range from 4-8 weeks. Comprehensive system validation and infrastructure qualification projects typically span 3-6 months depending on company size and existing infrastructure.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      'Absolutely. We specialize in "Compliance-by-Design" for startups. We help you build scalable GxP foundations early so you don\'t face costly retrofitting when preparing for clinical trials or regulatory filings.',
  },
  {
    question: "What specific industries do you serve?",
    answer:
      "Our core expertise lies in biotechnology, pharmaceutical manufacturing, medical device companies, and digital health organizations requiring rigorous adherence to FDA, EMA, and ISO standards.",
  },
  {
    question: "How do you ensure data security during audits?",
    answer:
      "We utilize enterprise-grade, encrypted data rooms for all document exchanges and follow strict ISO 27001-aligned security protocols. All consultants operate under comprehensive NDAs and secure hardware environments.",
  },
  {
    question: "What regulatory frameworks do you cover?",
    answer:
      "We cover FDA 21 CFR Part 11, EU Annex 11, GAMP 5 guidelines, ISO 13485, FDA 21 CFR Part 820, ICH guidelines, and other relevant GxP regulations across global markets.",
  },
  {
    question: "Can you help with existing systems that need remediation?",
    answer:
      "Yes. We offer gap assessments and remediation services for existing validation and qualification programs. Whether you need to update legacy documentation or bring systems into current compliance, we provide structured remediation plans and execution support.",
  },
];
