import type { Metadata } from "next";

import { companyProfile } from "@/data/company";
import { ROUTES, type RoutePath } from "@/lib/site";

type RouteSeoConfig = {
  title: string;
  description: string;
  robots?: Metadata["robots"];
};

type BuildMetadataInput = {
  route: RoutePath;
  pathname?: string;
  titleOverride?: string;
  descriptionOverride?: string;
  noIndex?: boolean;
};

const baseUrl = "https://www.crucialrecycling.co.uk";

const routeSeo: Record<RoutePath, RouteSeoConfig> = {
  [ROUTES.home]: {
    title: `${companyProfile.brandName} | Rubbish Removal & House Clearance in ${companyProfile.serviceRegion}`,
    description:
      "Licensed, fast, eco-friendly rubbish removal and house clearance across the West Midlands. Send photos for a tailored quote.",
  },
  [ROUTES.services]: {
    title: `Services | ${companyProfile.brandName}`,
    description: "Explore domestic and commercial waste removal services across the West Midlands.",
  },
  [ROUTES.houseClearance]: {
    title: `House Clearance | ${companyProfile.brandName}`,
    description: "Full and partial house clearance services with quote-by-job pricing.",
  },
  [ROUTES.bulkyWasteFurnitureCollection]: {
    title: `Bulky Waste & Furniture Collection | ${companyProfile.brandName}`,
    description: "Book bulky waste and furniture collections for homes across the West Midlands.",
  },
  [ROUTES.gardenShedGarageClearance]: {
    title: `Garden, Shed & Garage Clearance | ${companyProfile.brandName}`,
    description: "Clear-outs for gardens, sheds, and garages with responsible waste handling.",
  },
  [ROUTES.commercialWasteCardboardCollection]: {
    title: `Commercial Waste & Cardboard Collection | ${companyProfile.brandName}`,
    description: "Flexible commercial waste and cardboard collection support for local businesses.",
  },
  [ROUTES.howItWorks]: {
    title: `How It Works | ${companyProfile.brandName}`,
    description: "See the simple process for quotes, booking, and collection day.",
  },
  [ROUTES.areasServed]: {
    title: `Areas Served | ${companyProfile.brandName}`,
    description: "West Midlands service coverage for rubbish removal and clearance jobs.",
  },
  [ROUTES.about]: {
    title: `About | ${companyProfile.brandName}`,
    description: "Learn about our local approach to licensed, eco-focused waste removal.",
  },
  [ROUTES.reviews]: {
    title: `Reviews | ${companyProfile.brandName}`,
    description: "Customer feedback page. Placeholder entries are clearly marked until real testimonials are added.",
  },
  [ROUTES.faq]: {
    title: `FAQ | ${companyProfile.brandName}`,
    description: "Answers to common questions about coverage, booking, and accepted waste.",
  },
  [ROUTES.getAQuote]: {
    title: `Get a Quote | ${companyProfile.brandName}`,
    description: "Request a quote with job details and optional photos.",
  },
  [ROUTES.privacyPolicy]: {
    title: `Privacy Policy | ${companyProfile.brandName}`,
    description: "How personal data is collected, used, and stored.",
  },
  [ROUTES.terms]: {
    title: `Terms | ${companyProfile.brandName}`,
    description: "Terms and conditions for using this website and booking services.",
  },
  [ROUTES.licenceCompliance]: {
    title: `Licence & Compliance | ${companyProfile.brandName}`,
    description: "Licence and compliance information for waste collection services.",
  },
};

export function buildRouteMetadata({
  route,
  pathname,
  titleOverride,
  descriptionOverride,
  noIndex,
}: BuildMetadataInput): Metadata {
  const fallback = routeSeo[ROUTES.home];
  const config = routeSeo[route] ?? fallback;
  const canonicalPath = pathname ?? route;
  const url = new URL(canonicalPath, baseUrl).toString();

  return {
    title: titleOverride ?? config.title,
    description: descriptionOverride ?? config.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: titleOverride ?? config.title,
      description: descriptionOverride ?? config.description,
      type: "website",
      url,
      siteName: companyProfile.brandName,
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: titleOverride ?? config.title,
      description: descriptionOverride ?? config.description,
    },
    robots: noIndex ? { index: false, follow: false } : config.robots,
  };
}

export function getRouteSeoConfig(route: RoutePath): RouteSeoConfig {
  return routeSeo[route] ?? routeSeo[ROUTES.home];
}
