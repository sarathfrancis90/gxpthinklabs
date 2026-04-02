import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gxpthinklabs.com"),
  title: {
    default: "GXPThinklabs | Compliance Solutions for Modern Life Sciences",
    template: "%s | GXPThinklabs",
  },
  description:
    "Expert GxP compliance consulting for biotech, pharma, and medical device companies. IT infrastructure qualification, computer system validation, and compliance audits.",
  keywords: [
    "GxP compliance",
    "computer system validation",
    "CSV",
    "CSA",
    "IT infrastructure qualification",
    "GAMP 5",
    "21 CFR Part 11",
    "Annex 11",
    "pharmaceutical compliance",
    "biotech regulatory",
    "medical device compliance",
    "GXPThinklabs",
  ],
  authors: [{ name: "GXPThinklabs", url: "https://gxpthinklabs.com" }],
  creator: "GXPThinklabs",
  publisher: "GXPThinklabs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gxpthinklabs.com",
    siteName: "GXPThinklabs",
    title: "GXPThinklabs | Compliance Solutions for Modern Life Sciences",
    description:
      "Expert GxP compliance consulting for biotech, pharma, and medical device companies.",
    images: [
      {
        url: "/images/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "GXPThinklabs - Compliance Solutions for Modern Life Sciences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GXPThinklabs | Compliance Solutions for Modern Life Sciences",
    description:
      "Expert GxP compliance consulting for biotech, pharma, and medical device companies.",
    images: ["/images/og-image-v2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/icon-v2.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
