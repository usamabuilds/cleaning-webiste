import type { CompanyProfile } from "@/types";

export type CompanyDetails = CompanyProfile & {
  serviceRegion: string;
  primaryCtaLabel: string;
  emailAddress: string;
  licenceReference: string;
  licenceReferenceIsPlaceholder: boolean;
  openingHoursNote: string;
};

export type HomeCredibilityItem = {
  id: string;
  label: string;
  detail: string;
  iconKey: string;
  isPlaceholder: boolean;
  href?: string;
};

export type TrustMarkerItem = {
  id: string;
  text: string;
  iconKey: "licence-compliance" | "map-coverage" | "clock-availability" | "stars-reviews" | "labour-service-inclusion";
};

export const companyProfile: CompanyDetails = {
  brandName: "Crucial Recycling",
  logoAlt: "Crucial Recycling logo",
  phoneNumber: "+440000000000",
  phoneLabel: "Call now",
  whatsappNumber: "440000000000",
  whatsappDefaultMessage: "Hi, I need a rubbish removal quote in the West Midlands.",
  whatsappLabel: "WhatsApp us",
  quoteHref: "/get-a-quote",
  serviceRegion: "West Midlands",
  primaryCtaLabel: "Get a quote",
  emailAddress: "hello@example.com",
  licenceReference: "[Licence reference pending]",
  licenceReferenceIsPlaceholder: true,
  openingHoursNote: "Opening hours pending confirmation.",
};

export const homeCredibilityItems: ReadonlyArray<HomeCredibilityItem> = [
  {
    id: "waste-carrier-licence",
    label: "Waste-carrier licence",
    detail: "Licence reference pending verification.",
    iconKey: "shield-check",
    isPlaceholder: true,
    href: "/legal",
  },
  {
    id: "west-midlands-coverage",
    label: "West Midlands coverage",
    detail: "Domestic and commercial collections across the West Midlands.",
    iconKey: "map-pin",
    isPlaceholder: false,
  },
  {
    id: "availability-24-7",
    label: "24/7 availability",
    detail: "Availability window pending confirmation before public claim.",
    iconKey: "clock-3",
    isPlaceholder: true,
  },
  {
    id: "review-proof",
    label: "Review proof",
    detail: "Review source link pending. Add verified public profile before launch.",
    iconKey: "star",
    isPlaceholder: true,
    href: "/reviews",
  },
  {
    id: "labour-included",
    label: "Labour included",
    detail: "Team loading and lifting included where applicable.",
    iconKey: "users",
    isPlaceholder: false,
  },
];

export const trustMarkerItems: ReadonlyArray<TrustMarkerItem> = [
  {
    id: "licensed-waste-carrier",
    text: "Licensed waste carrier",
    iconKey: "licence-compliance",
  },
  {
    id: "west-midlands-coverage",
    text: `Coverage across the ${companyProfile.serviceRegion}`,
    iconKey: "map-coverage",
  },
  {
    id: "flexible-availability",
    text: "Flexible collection availability",
    iconKey: "clock-availability",
  },
  {
    id: "customer-reviews",
    text: "Customer reviews available",
    iconKey: "stars-reviews",
  },
  {
    id: "labour-included",
    text: "Labour and loading included",
    iconKey: "labour-service-inclusion",
  },
];
