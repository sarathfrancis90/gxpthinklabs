"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  ({ label, options, placeholder = "Select an option", error, value, onValueChange, className }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block font-label text-sm text-on-surface-variant ml-1">
            {label}
          </label>
        )}
        <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
          <SelectPrimitive.Trigger
            ref={ref}
            className={cn(
              "flex w-full items-center justify-between bg-surface-container-low dark:bg-surface-container border border-outline-variant/40 dark:border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface",
              "placeholder:text-on-surface-variant/50",
              "focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none",
              "transition-all duration-200",
              "disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-error focus:border-error focus:ring-error",
              className
            )}
          >
            <SelectPrimitive.Value placeholder={placeholder} />
            <SelectPrimitive.Icon>
              <ChevronDown className="h-4 w-4 text-on-surface-variant" />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>

          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              className="relative z-50 min-w-[8rem] overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-lowest dark:bg-surface-container shadow-xl shadow-black/[0.08] dark:shadow-black/[0.3] animate-scale-in"
              position="popper"
              sideOffset={4}
            >
              <SelectPrimitive.Viewport className="p-1">
                {options.map((option) => (
                  <SelectPrimitive.Item
                    key={option.value}
                    value={option.value}
                    className={cn(
                      "relative flex w-full cursor-pointer select-none items-center rounded-lg py-2.5 px-3 text-sm text-on-surface outline-none",
                      "hover:bg-surface-variant focus:bg-surface-variant",
                      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                      "transition-colors duration-150"
                    )}
                  >
                    <SelectPrimitive.ItemText>
                      {option.label}
                    </SelectPrimitive.ItemText>
                    <SelectPrimitive.ItemIndicator className="absolute right-2">
                      <Check className="h-4 w-4 text-primary" />
                    </SelectPrimitive.ItemIndicator>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
        {error && (
          <p className="text-error text-xs mt-1 ml-1">{error}</p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
