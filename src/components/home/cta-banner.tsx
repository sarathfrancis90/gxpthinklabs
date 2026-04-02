import Link from "next/link";
import { cn } from "@/lib/utils";
import { SectionBg } from "@/components/shared/section-bg";

export function CtaBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      <div
        className={cn(
          "relative bg-gradient-to-r from-primary via-secondary to-primary noise-overlay",
          "p-12 md:p-20 rounded-[2rem] overflow-hidden text-center"
        )}
        style={{ backgroundSize: "200% 200%", animation: "gradient-rotate 8s ease infinite" }}
      >
        <SectionBg variant="waves" opacity="opacity-[0.15] dark:opacity-[0.10]" />
        {/* Decorative glows — bolder and more vivid */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 blur-[80px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/15 blur-[80px] rounded-full -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-on-primary mb-6 tracking-tight">
            Ready to Streamline Your Compliance?
          </h2>
          <p className="text-on-primary/80 text-lg mb-10 max-w-xl mx-auto">
            Join the industry leaders who trust GXPThinklabs to secure their
            regulatory future. Let&apos;s build your compliance strategy
            together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-zinc-950 text-white font-bold rounded-2xl hover:bg-zinc-900 transition-all shadow-xl"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
