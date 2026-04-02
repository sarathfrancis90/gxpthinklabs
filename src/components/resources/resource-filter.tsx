"use client";

import { cn } from "@/lib/utils";
import { resourceCategories } from "@/data/resources";

interface ResourceFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ResourceFilter({
  activeCategory,
  onCategoryChange,
}: ResourceFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 py-6 border-y border-outline-variant">
      {resourceCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "px-5 py-2 rounded-full font-label text-sm transition-all duration-200",
            activeCategory === category.id
              ? "bg-primary text-on-primary shadow-lg shadow-primary/20"
              : "bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high border border-outline-variant"
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
