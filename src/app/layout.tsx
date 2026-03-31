import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { MobileStickyCta } from "@/components/layout/mobile-sticky-cta";
import { SiteHeader } from "@/components/layout/site-header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crucial Recycling | Rubbish Removal West Midlands",
  description: "Licensed, fast, eco-friendly waste removal and house clearance in the West Midlands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="layer-base min-h-full">
        <div className="app-shell relative min-h-full">
          <div className="z-base pointer-events-none absolute inset-0" aria-hidden />
          <div className="z-panel pointer-events-none absolute inset-0" aria-hidden />
          <div className="z-content relative min-h-full">
            <SiteHeader />
            {children}
            <MobileStickyCta />
          </div>
        </div>
      </body>
    </html>
  );
}
