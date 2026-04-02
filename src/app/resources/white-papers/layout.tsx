import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & White Papers",
  description:
    "Download free GxP compliance white papers, guides, and industry insights from GXPThinklabs experts.",
  openGraph: {
    title: "Resources & White Papers",
    description:
      "Download free GxP compliance white papers, guides, and industry insights.",
    images: ["/images/og-image-v2.png"],
  },
};

export default function WhitePapersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
