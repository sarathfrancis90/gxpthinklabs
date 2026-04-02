import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "GXPThinklabs privacy policy. Learn how we handle your data with care and transparency.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold font-headline text-on-surface mb-8">
          Privacy Policy
        </h1>
        <p className="text-on-surface-variant leading-relaxed">
          This privacy policy will be updated with our full data handling
          practices. For questions, contact us at{" "}
          <a
            href="mailto:privacy@gxpthinklabs.com"
            className="text-primary hover:underline"
          >
            privacy@gxpthinklabs.com
          </a>
        </p>
      </div>
    </div>
  );
}
