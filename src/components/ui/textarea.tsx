import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={textareaId}
            className="block font-label text-sm text-on-surface-variant ml-1"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            "flex w-full bg-surface-container-low dark:bg-surface-container border border-outline-variant/40 dark:border-outline-variant rounded-lg px-4 py-3 text-on-surface text-sm",
            "placeholder:text-on-surface-variant/50",
            "focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none",
            "transition-all duration-200",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "min-h-[120px] resize-y",
            error && "border-error focus:border-error focus:ring-error",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-error text-xs mt-1 ml-1">{error}</p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
