import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "GXPThinklabs terms of service. Review our terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold font-headline text-on-surface mb-8">
          Terms of Service
        </h1>
        <p className="text-on-surface-variant leading-relaxed">
          These terms of service will be updated with our full terms. For
          questions, contact us at{" "}
          <a
            href="mailto:legal@gxpthinklabs.com"
            className="text-primary hover:underline"
          >
            legal@gxpthinklabs.com
          </a>
        </p>
      </div>
    </div>
  );
}
