"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/shared/section-header";
import { faqs } from "@/data/faq";

export function FAQSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 md:py-32 relative ambient-glow teal-tint">
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Quick answers to common inquiries about our compliance methodology."
        alignment="center"
      />

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
