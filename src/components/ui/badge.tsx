import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 font-label text-xs tracking-wider uppercase rounded-full transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-primary-container/20 text-primary px-3 py-1",
        outline:
          "border border-outline-variant text-on-surface-variant px-3 py-1",
        accent:
          "bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/20 px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, className }))}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
