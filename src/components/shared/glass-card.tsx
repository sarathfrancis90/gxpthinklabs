import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-all duration-300",
        "bg-white/80 shadow-sm shadow-black/[0.04] dark:bg-[rgba(10,14,18,0.7)] /* theme-config: colors.dark.background */ dark:shadow-none",
        "backdrop-blur-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
