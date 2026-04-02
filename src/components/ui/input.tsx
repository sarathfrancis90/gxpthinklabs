import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="block font-label text-sm text-on-surface-variant ml-1"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={inputId}
          className={cn(
            "flex w-full bg-surface-container-low dark:bg-surface-container border border-outline-variant/40 dark:border-outline-variant rounded-lg px-4 py-3 text-on-surface text-sm",
            "placeholder:text-on-surface-variant/50",
            "focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none",
            "transition-all duration-200",
            "disabled:cursor-not-allowed disabled:opacity-50",
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
Input.displayName = "Input";

export { Input };
