"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Server, Monitor, ClipboardCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { mainNav } from "@/data/navigation";

const serviceIcons: Record<string, React.ReactNode> = {
  "/services/infrastructure-qualification": <Server className="h-5 w-5 text-primary" />,
  "/services/computer-system-validation": <Monitor className="h-5 w-5 text-secondary" />,
  "/services/compliance-audits": <ClipboardCheck className="h-5 w-5 text-tertiary" />,
};

export function Navbar() {
  const pathname = usePathname();
  const scrollY = useScrollPosition();
  const [servicesOpen, setServicesOpen] = useState(false);
  const isScrolled = scrollY > 20;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isServicesActive = pathname.startsWith("/services");

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "glass-panel gradient-border-bottom shadow-sm shadow-primary/[0.04] dark:shadow-none bg-white/80 dark:bg-transparent"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        {/* Logo (left) */}
        <Link
          href="/"
          className="text-3xl md:text-4xl font-bold tracking-tighter text-on-surface hover:opacity-80 transition-opacity"
        >
          GXPThinklabs
        </Link>

        {/* Right side — nav links + theme toggle + mobile menu */}
        <div className="flex items-center gap-6">
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {mainNav.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={cn(
                        "text-sm font-medium flex items-center gap-1 transition-colors",
                        isServicesActive
                          ? "text-primary border-b-2 border-primary pb-1"
                          : "text-on-surface-variant hover:text-on-surface"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Services Dropdown */}
                    {servicesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                        <div className="w-80 rounded-xl border border-outline-variant/20 bg-surface-container-lowest dark:bg-surface-container shadow-xl shadow-black/[0.08] dark:shadow-black/[0.3] p-2 animate-scale-in">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "flex items-start gap-3 p-3 rounded-lg transition-colors",
                                isActive(child.href)
                                  ? "bg-primary/10 text-primary"
                                  : "hover:bg-surface-variant text-on-surface"
                              )}
                              onClick={() => setServicesOpen(false)}
                            >
                              <div className="mt-0.5 shrink-0">
                                {serviceIcons[child.href]}
                              </div>
                              <div>
                                <span className="text-sm font-semibold block">
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span className="text-xs text-on-surface-variant mt-0.5 block">
                                    {child.description}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-on-surface-variant hover:text-on-surface"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <ThemeToggle className="hidden md:flex" />

          {/* Mobile Nav */}
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
