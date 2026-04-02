import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  alignment = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16",
        alignment === "center" && "text-center",
        className
      )}
    >
      {label && (
        <span className="text-xs font-label font-bold text-primary tracking-[0.2em] uppercase">
          {label}
        </span>
      )}
      <h2
        className={cn(
          "text-4xl md:text-5xl font-bold text-on-surface tracking-tight",
          label && "mt-4"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-on-surface-variant text-lg mt-4 leading-relaxed",
            alignment === "center" && "max-w-2xl mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
