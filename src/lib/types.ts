import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
  children?: NavItem[];
}

export interface SectionProps {
  className?: string;
  id?: string;
}
