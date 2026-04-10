import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { companyProfile } from "@/data/company";
import { buildRouteMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const homeMetadata = buildRouteMetadata({ route: ROUTES.home });

export const metadata: Metadata = {
  ...homeMetadata,
  metadataBase: new URL("https://www.crucialrecycling.co.uk"),
  applicationName: companyProfile.brandName,
  category: "waste removal",
  keywords: [
    "rubbish removal West Midlands",
    "house clearance West Midlands",
    "bulky waste collection",
    "commercial waste collection",
  ],
  title: {
    default: companyProfile.brandName,
    template: `%s | ${companyProfile.brandName}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="layer-base min-h-full">
        <div className="app-shell relative min-h-full">
          <div className="z-base pointer-events-none absolute inset-0" aria-hidden />
          <div className="z-panel pointer-events-none absolute inset-0" aria-hidden />
          <div className="z-content relative min-h-full">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
