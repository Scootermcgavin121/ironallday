import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Iron All Day — Fuel. Focus. Finish.",
  description:
    "Science-backed research compounds for strength, recovery, and relentless progress. 99%+ purity, third-party tested, COA verified.",
  keywords: [
    "peptides",
    "BPC-157",
    "TB-500",
    "research peptides",
    "performance",
    "recovery",
    "longevity",
    "iron all day",
  ],
  openGraph: {
    title: "Iron All Day — Fuel. Focus. Finish.",
    description:
      "Science-backed compounds. Real results. Premium performance solutions for strength, recovery, and relentless progress.",
    url: "https://ironallday.com",
    siteName: "Iron All Day",
    images: [
      {
        url: "https://ironallday.com/images/og-card.png?v=3",
        width: 1200,
        height: 630,
        alt: "Iron All Day — Science-Backed Compounds. Real Results.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron All Day — Fuel. Focus. Finish.",
    description:
      "Science-backed compounds. Real results. Premium performance solutions for strength, recovery, and relentless progress.",
    images: ["https://ironallday.com/images/og-card.png?v=3"],
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
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
