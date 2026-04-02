import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "surface" | "surface-low" | "surface-container" | "none";
}

export function SectionWrapper({
  children,
  className,
  id,
  background = "none",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32",
        background === "surface" && "bg-surface",
        background === "surface-low" && "bg-surface-container-low",
        background === "surface-container" && "bg-surface-container",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}
