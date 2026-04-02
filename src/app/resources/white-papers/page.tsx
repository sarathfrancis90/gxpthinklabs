"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/page-hero";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { ResourceFilter } from "@/components/resources/resource-filter";
import { ResourceCard } from "@/components/resources/resource-card";
import { NewsletterSection } from "@/components/resources/newsletter-section";
import { SectionBg } from "@/components/shared/section-bg";
import { SectionDivider } from "@/components/shared/section-divider";
import { resources } from "@/data/resources";

export default function WhitePapersPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredResources =
    activeCategory === "all"
      ? resources
      : resources.filter((r) => r.type === activeCategory);

  return (
    <>
      <PageHero
        badge="Knowledge Hub"
        title="Resources"
        subtitle="Discover the Future of Compliance"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/white-papers" },
        ]}
      />

      {/* Filter section */}
      <section className="max-w-7xl mx-auto px-6 mb-8">
        <ResourceFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </section>

      {/* Resource cards grid — with VIVID dedicated background */}
      <section className="relative overflow-hidden py-16">
        {/* Dedicated resources background — HIGH visibility */}
        <SectionBg variant="resources" opacity="opacity-[0.35] dark:opacity-[0.20]" />

        {/* Additional glow effects */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-primary/25 dark:bg-primary/8 blur-[150px] rounded-full -translate-y-1/3" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 dark:bg-secondary/5 blur-[120px] rounded-full translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-tertiary/15 dark:bg-tertiary/4 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 z-[1] mesh-gradient pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredResources.map((resource, index) => (
                <ScrollReveal key={resource.id} delay={index * 0.1}>
                  <ResourceCard resource={resource} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-on-surface-variant text-lg">
                No resources found in this category. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <SectionDivider />

      {/* Newsletter CTA */}
      <ScrollReveal>
        <NewsletterSection />
      </ScrollReveal>
    </>
  );
}
