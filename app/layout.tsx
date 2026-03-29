import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
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
  title: "Crutan — Wake up to clarity, not confusion.",
  description:
    "Connect your Google Analytics 4 account and wake up every morning to an AI-written briefing that tells you what happened, what matters, and what to do — delivered to your inbox or phone.",
  keywords: [
    "Google Analytics",
    "GA4",
    "AI analytics",
    "daily briefing",
    "analytics report",
    "marketing analytics",
  ],
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
    title: "Crutan — Wake up to clarity, not confusion.",
    description:
      "AI-powered daily analytics briefings for business owners and operators. Connect GA4, get plain-English reports every morning.",
    type: "website",
    url: "https://crutan.com",
    siteName: "Crutan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crutan — Wake up to clarity, not confusion.",
    description:
      "AI-powered daily analytics briefings for business owners and operators.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
