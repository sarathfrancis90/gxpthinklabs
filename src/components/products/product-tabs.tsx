"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/shared/glass-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import {
  FileText,
  Settings,
  Terminal,
  BarChart3,
  GitBranch,
  Server,
  Cloud,
  Network,
  ClipboardList,
} from "lucide-react";
import type { ProductCategory } from "@/data/products";

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Settings,
  Terminal,
  BarChart3,
  GitBranch,
  Server,
  Cloud,
  Network,
  ClipboardList,
};

function getIcon(iconName: string) {
  return iconMap[iconName] || FileText;
}

interface ProductTabsProps {
  categories: ProductCategory[];
}

export function ProductTabs({ categories }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const active = categories[activeTab];
  const ActiveIcon = getIcon(active.icon);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Sidebar Navigation */}
      <div className="lg:col-span-4 space-y-3">
        {categories.map((cat, index) => {
          const CatIcon = getIcon(cat.icon);
          const isActive = index === activeTab;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(index)}
              className={cn(
                "w-full flex items-center gap-4 p-5 rounded-2xl transition-all text-left",
                isActive
                  ? "bg-surface-container-lowest dark:bg-surface-container-highest border border-primary/30 dark:border-primary/30 border-l-4 border-l-primary text-primary shadow-lg shadow-primary/[0.08] dark:shadow-primary/5"
                  : "hover:bg-surface-container-low dark:hover:bg-surface-container border border-primary/10 dark:border-transparent group"
              )}
            >
              <CatIcon
                className={cn(
                  "h-5 w-5 flex-shrink-0",
                  isActive
                    ? "text-primary"
                    : "text-on-surface-variant group-hover:text-primary"
                )}
              />
              <span
                className={cn(
                  "font-medium",
                  isActive
                    ? "font-semibold text-primary"
                    : "text-on-surface-variant group-hover:text-on-surface"
                )}
              >
                {cat.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="lg:col-span-8">
        <GlassCard className="p-8 md:p-12">
          {/* Tags */}
          {active.items[0]?.tags && (
            <div className="flex flex-wrap gap-3 mb-8">
              {active.items[0].tags.map((tag) => (
                <Badge key={tag} variant="accent">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <h3 className="text-3xl md:text-4xl font-bold text-on-surface mb-6">
            {active.items[0]?.title}
          </h3>

          <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
            {active.items[0]?.description}
          </p>

          {/* Sub items grid (for qualification plans) */}
          {active.items[0]?.subItems && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {active.items[0].subItems.map((sub) => {
                const SubIcon = getIcon(sub.icon);
                return (
                  <div
                    key={sub.title}
                    className="p-6 rounded-2xl gradient-border border border-primary/15 dark:border-outline-variant/20 shadow-sm shadow-primary/[0.06] dark:shadow-none"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <SubIcon className="h-5 w-5 text-primary" />
                      <h4 className="font-bold text-on-surface">
                        {sub.title}
                      </h4>
                    </div>
                    <p className="text-sm text-on-surface-variant">
                      {sub.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Format info for simpler items */}
          {active.items[0]?.format && !active.items[0]?.subItems && (
            <div className="text-sm text-on-surface-variant/60">
              Format: {active.items[0].format}
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
}

/* Featured grid for all categories (compact cards) */
interface ProductFeatureGridProps {
  categories: ProductCategory[];
}

const featureDetails: Record<
  string,
  { bullets: string[]; iconName: string }
> = {
  "management-sops": {
    iconName: "Settings",
    bullets: ["Backup & Restore", "Disaster Recovery", "Incident Management"],
  },
  "work-instructions": {
    iconName: "Terminal",
    bullets: ["Config Management", "Admin Guides", "Patching Protocols"],
  },
  "risk-assessment": {
    iconName: "BarChart3",
    bullets: [
      "Quantitative Frameworks",
      "Qualitative Analysis",
      "FMEA Models",
    ],
  },
  traceability: {
    iconName: "GitBranch",
    bullets: ["Requirement Mapping", "Config Specs", "Verification Logs"],
  },
};

export function ProductFeatureGrid({
  categories,
}: ProductFeatureGridProps) {
  // Skip the first category (shown in detail above)
  const featureCategories = categories.slice(1);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featureCategories.map((cat, index) => {
        const details = featureDetails[cat.id];
        const CatIcon = getIcon(details?.iconName || cat.icon);
        return (
          <ScrollReveal key={cat.id} delay={index * 0.1}>
            <GlassCard className="p-8 group hover:border-primary/40 h-full gradient-border animated-gradient-border border border-primary/15 dark:border-outline-variant/20 shadow-md shadow-primary/[0.06] dark:shadow-none">
              <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CatIcon className="h-5 w-5 text-secondary" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-on-surface">
                {cat.items[0]?.title || cat.title}
              </h4>
              {details?.bullets && (
                <ul className="space-y-3 text-sm text-on-surface-variant">
                  {details.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </GlassCard>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
