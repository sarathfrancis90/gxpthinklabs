import { Mail, Clock } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-outline-variant/20 p-8 space-y-8 bg-white/80 dark:bg-[rgba(10,14,18,0.7)] /* theme-config: colors.dark.background */ backdrop-blur-xl shadow-sm shadow-black/[0.04] dark:shadow-none">
        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-on-surface mb-1">Email Us</h3>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>

        {/* Office Hours */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-on-surface mb-1">
              Office Hours
            </h3>
            <p className="text-on-surface-variant">{siteConfig.contact.hours}</p>
          </div>
        </div>
      </div>

      {/* Location card */}
      <div className="rounded-xl border border-outline-variant/20 p-8 bg-white/80 dark:bg-[rgba(10,14,18,0.7)] /* theme-config: colors.dark.background */ backdrop-blur-xl shadow-sm shadow-black/[0.04] dark:shadow-none">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-label text-sm font-medium tracking-wide text-on-surface">
            Headquarters
          </span>
        </div>
        <p className="text-on-surface-variant">
          {siteConfig.contact.address.city}, {siteConfig.contact.address.state},{" "}
          {siteConfig.contact.address.country}
        </p>
      </div>
    </div>
  );
}
