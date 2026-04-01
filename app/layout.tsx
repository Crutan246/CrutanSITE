import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { AttributionCapture } from "@/components/analytics/AttributionCapture";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  organizationJsonLd,
  websiteJsonLd,
  softwareApplicationJsonLd,
} from "@/lib/seo/jsonld";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Crutan — AI Analytics Briefings | Google Analytics Made Simple",
    template: "%s | Crutan",
  },
  description:
    "Crutan connects to your Google Analytics 4 and delivers a plain-English AI briefing every morning — what happened, what it means, and what to do. Free during early access.",
  keywords: [
    "AI analytics",
    "Google Analytics made simple",
    "GA4 daily briefing",
    "analytics for non-technical founders",
    "automated analytics report",
    "GA4 AI summary",
    "AI analytics briefing",
    "google analytics for small business",
    "GA4 alternative",
    "simple analytics tool",
    "AI website analytics",
    "daily analytics email",
    "google analytics AI",
    "automated GA4 reports",
    "analytics for founders",
    "ecommerce analytics",
  ],
  alternates: {
    canonical: "https://crutan.com",
  },
  icons: {
    icon: [
      {
        url: "/crutan-symbol-brown.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/crutan-symbol-tan.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    shortcut: "/crutan-symbol-brown.svg",
    apple: "/crutan-symbol-brown.svg",
  },
  openGraph: {
    title: "Crutan — AI Analytics Briefings for Non-Technical Business Owners",
    description:
      "Google Analytics made simple. Plain-English AI briefings delivered to your inbox every morning. Free during early access.",
    type: "website",
    url: "https://crutan.com",
    siteName: "Crutan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crutan — AI Analytics Briefings for Non-Technical Business Owners",
    description:
      "Google Analytics made simple. Plain-English AI briefings to your inbox every morning. Free during early access.",
  },
  metadataBase: new URL("https://crutan.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <head>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={softwareApplicationJsonLd()} />
      </head>
      <GoogleTagManager gtmId="GTM-W389LNPC" />
      <body className="antialiased">
        <AttributionCapture />
        {children}
      </body>
    </html>
  );
}
