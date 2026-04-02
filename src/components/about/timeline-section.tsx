import { timelineEntries } from "@/data/timeline";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { cn } from "@/lib/utils";

export function TimelineSection() {
  return (
    <SectionWrapper>
      <SectionHeader
        title="Our Heritage"
        subtitle="Merging legacy knowledge with future-ready solutions."
      />

      <div className="relative space-y-12">
        {/* Vertical connecting line */}
        <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-0.5 bg-outline-variant/30" />

        {timelineEntries.map((entry, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={entry.year}
              className="relative flex flex-col md:flex-row items-start md:items-center"
            >
              {/* Left content (even items on desktop) */}
              <div
                className={cn(
                  "md:w-1/2",
                  isEven ? "md:pr-12 md:text-right" : "md:pr-12 md:order-1",
                  !isEven && "hidden md:block"
                )}
              >
                {isEven && (
                  <div
                    className={cn(
                      "bg-surface-container-lowest dark:bg-surface-container p-6 rounded-xl inline-block md:ml-auto shadow-sm shadow-black/[0.04] dark:shadow-none",
                      entry.isHighlighted
                        ? "border-2 border-primary/40 shadow-[0_0_20px_rgba(13,115,119,0.15)] /* theme-config: glowColors.primary */"
                        : "border border-outline-variant/20"
                    )}
                  >
                    <span
                      className={cn(
                        "font-label font-bold text-lg",
                        entry.isHighlighted ? "text-on-surface" : "text-primary"
                      )}
                    >
                      {entry.year}
                    </span>
                    <h4 className="text-on-surface font-bold mt-1">
                      {entry.title}
                    </h4>
                    <p
                      className={cn(
                        "text-sm mt-2",
                        entry.isHighlighted
                          ? "text-on-surface-variant font-medium"
                          : "text-on-surface-variant/70"
                      )}
                    >
                      {entry.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Timeline dot */}
              <div
                className={cn(
                  "absolute left-0 md:left-1/2 w-6 h-6 rounded-full z-10",
                  "-translate-x-[7px] md:-translate-x-3",
                  entry.isHighlighted
                    ? "bg-white border-4 border-primary"
                    : index === 0
                    ? "bg-primary border-4 border-background"
                    : "bg-primary-dim border-4 border-background"
                )}
              />

              {/* Right content (odd items on desktop) */}
              <div
                className={cn(
                  "md:w-1/2",
                  isEven ? "md:pl-12 hidden md:block" : "md:pl-12 md:order-2",
                  "pl-8 md:pl-12"
                )}
              >
                {!isEven && (
                  <div
                    className={cn(
                      "bg-surface-container-lowest dark:bg-surface-container p-6 rounded-xl inline-block shadow-sm shadow-black/[0.04] dark:shadow-none",
                      entry.isHighlighted
                        ? "border-2 border-primary/40 shadow-[0_0_20px_rgba(13,115,119,0.15)] /* theme-config: glowColors.primary */"
                        : "border border-outline-variant/20"
                    )}
                  >
                    <span
                      className={cn(
                        "font-label font-bold text-lg",
                        entry.isHighlighted ? "text-on-surface" : "text-primary"
                      )}
                    >
                      {entry.year}
                    </span>
                    <h4 className="text-on-surface font-bold mt-1">
                      {entry.title}
                    </h4>
                    <p
                      className={cn(
                        "text-sm mt-2",
                        entry.isHighlighted
                          ? "text-on-surface-variant font-medium"
                          : "text-on-surface-variant/70"
                      )}
                    >
                      {entry.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Mobile-only: always show content on right for even items */}
              {isEven && (
                <div className="pl-8 md:hidden">
                  <div
                    className={cn(
                      "bg-surface-container-lowest dark:bg-surface-container p-6 rounded-xl inline-block shadow-sm shadow-black/[0.04] dark:shadow-none",
                      entry.isHighlighted
                        ? "border-2 border-primary/40 shadow-[0_0_20px_rgba(13,115,119,0.15)] /* theme-config: glowColors.primary */"
                        : "border border-outline-variant/20"
                    )}
                  >
                    <span
                      className={cn(
                        "font-label font-bold text-lg",
                        entry.isHighlighted ? "text-on-surface" : "text-primary"
                      )}
                    >
                      {entry.year}
                    </span>
                    <h4 className="text-on-surface font-bold mt-1">
                      {entry.title}
                    </h4>
                    <p
                      className={cn(
                        "text-sm mt-2",
                        entry.isHighlighted
                          ? "text-on-surface-variant font-medium"
                          : "text-on-surface-variant/70"
                      )}
                    >
                      {entry.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
