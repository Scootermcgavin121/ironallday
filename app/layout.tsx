import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientShell from "./components/ClientShell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Iron All Day — Research-Grade Peptides",
  description:
    "Premium research peptides. 99%+ purity, third-party tested, full Certificate of Analysis on every batch. For research purposes only.",
  keywords: [
    "peptides",
    "BPC-157",
    "TB-500",
    "research peptides",
    "research compounds",
    "COA verified peptides",
    "HPLC tested",
    "iron all day",
  ],
  openGraph: {
    title: "Iron All Day — Research-Grade Peptides",
    description:
      "Premium research peptides. 99%+ purity, third-party tested, COA verified. For research purposes only.",
    url: "https://ironallday.com",
    siteName: "Iron All Day",
    images: [
      {
        url: "https://ironallday.com/images/og-card.png?v=6",
        width: 1200,
        height: 630,
        alt: "Iron All Day — Research-Grade Peptides. 99%+ Purity.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron All Day — Research-Grade Peptides",
    description:
      "Premium research peptides. 99%+ purity, third-party tested, COA verified. For research purposes only.",
    images: ["https://ironallday.com/images/og-card.png?v=6"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
