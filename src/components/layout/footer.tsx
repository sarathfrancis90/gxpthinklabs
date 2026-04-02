import Link from "next/link";
import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { footerNav } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";
import { Badge } from "@/components/ui/badge";

export function Footer() {
  return (
    <footer className="gradient-border-top bg-gradient-to-b from-background to-primary/[0.03] dark:from-surface-container-lowest dark:to-surface-container-lowest relative noise-overlay ambient-glow overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 py-12 max-w-7xl mx-auto">
        {/* Col 1: Logo + Description */}
        <div className="sm:col-span-2 md:col-span-1">
          <Link
            href="/"
            className="text-lg font-bold tracking-tighter text-on-surface block mb-4"
          >
            {siteConfig.name}
          </Link>
          <p className="text-xs leading-relaxed text-on-surface-variant mb-4 max-w-xs">
            Dedicated to excellence in GxP compliance and life sciences
            consulting. Precision engineering meets regulatory excellence.
          </p>
          <Badge variant="outline" className="text-[10px]">
            A {siteConfig.parentCompany} Company
          </Badge>
        </div>

        {/* Col 2: Services */}
        <div>
          <h4 className="text-on-surface font-semibold text-sm mb-6">
            Services
          </h4>
          <ul className="space-y-3">
            {footerNav.services.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Company */}
        <div>
          <h4 className="text-on-surface font-semibold text-sm mb-6">
            Company
          </h4>
          <ul className="space-y-3">
            {footerNav.company.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Legal + Contact */}
        <div>
          <h4 className="text-on-surface font-semibold text-sm mb-6">
            Legal
          </h4>
          <ul className="space-y-3">
            {footerNav.legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-outline-variant/20 py-6 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
        <p>{siteConfig.legal.copyright}</p>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
