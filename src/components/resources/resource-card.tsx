import Image from "next/image";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Resource } from "@/data/resources";
import { resourceIllustrationMap } from "@/components/icons/resource-illustrations";

interface ResourceCardProps {
  resource: Resource;
  className?: string;
}

export function ResourceCard({ resource, className }: ResourceCardProps) {
  const IllustrationComponent = resourceIllustrationMap[resource.id];

  return (
    <div
      className={cn(
        "group rounded-xl p-8 flex flex-col transition-all duration-300 gradient-border animated-gradient-border",
        "border border-primary/15 dark:border-outline-variant/20",
        "backdrop-blur-xl shadow-md shadow-primary/[0.06] dark:shadow-none",
        "hover:scale-[1.01] hover:shadow-2xl hover:shadow-primary/[0.12]",
        className
      )}
    >
      {/* Header: category + date */}
      <div className="flex justify-between items-start mb-6">
        <span className="text-xs font-label text-primary-dim uppercase tracking-widest">
          {resource.typeLabel}
        </span>
        <span className="text-xs font-label text-on-surface-variant/60">
          {resource.date}
        </span>
      </div>

      {/* Illustration (inline SVG) or fallback Image */}
      {IllustrationComponent ? (
        <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-primary/[0.06] to-secondary/[0.04] dark:from-primary/[0.08] dark:to-secondary/[0.05] border border-primary/10 dark:border-outline-variant/10 transition-all duration-700 group-hover:from-primary/[0.10] group-hover:to-secondary/[0.08]">
          <IllustrationComponent />
        </div>
      ) : resource.imageSrc ? (
        <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden bg-surface-container-lowest relative">
          <Image
            src={resource.imageSrc}
            alt={resource.imageAlt || resource.title}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ) : null}

      {/* Title */}
      <h3 className="text-2xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
        {resource.title}
      </h3>

      {/* Description */}
      <p className="text-on-surface-variant mb-8 leading-relaxed font-light">
        {resource.description}
      </p>

      {/* Footer: download + read time */}
      <div className="mt-auto flex items-center justify-between">
        <a
          href={resource.downloadUrl || "/contact"}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-bold rounded-lg transition-all hover:opacity-90 active:scale-95"
        >
          Download
          <Download className="h-4 w-4" />
        </a>
        <span className="text-xs text-on-surface-variant/60 italic">
          {resource.readTime}
        </span>
      </div>
    </div>
  );
}
