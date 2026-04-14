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
  label: string;
  detail: string;
  isPlaceholder: boolean;
  iconKey: "licence-compliance" | "map-coverage" | "clock-availability" | "stars-reviews" | "labour-service-inclusion";
  priority?: number;
  publicEnabled?: boolean;
};

export const companyProfile: CompanyDetails = {
  brandName: "JB Cleaning",
  logoAlt: "JB Cleaning logo",
  phoneNumber: "+447915234425",
  phoneLabel: "Call now",
  whatsappNumber: "447395333663",
  whatsappDefaultMessage: "Hi, I need a cleaning quote from JB Cleaning.",
  whatsappLabel: "WhatsApp us",
  quoteHref: "https://wa.me/447395333663?text=Hi%2C%20I%20need%20a%20cleaning%20quote%20from%20JB%20Cleaning.",
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
    label: "Licensed waste carrier",
    detail: "Licence reference pending verification.",
    isPlaceholder: true,
    iconKey: "licence-compliance",
    priority: 1,
    publicEnabled: true,
  },
  {
    id: "west-midlands-coverage",
    label: `Coverage across the ${companyProfile.serviceRegion}`,
    detail: "Domestic and commercial collections across the West Midlands.",
    isPlaceholder: false,
    iconKey: "map-coverage",
    priority: 2,
    publicEnabled: true,
  },
  {
    id: "flexible-availability",
    label: "Flexible collection availability",
    detail: "Availability window pending confirmation.",
    isPlaceholder: true,
    iconKey: "clock-availability",
    priority: 4,
    publicEnabled: true,
  },
  {
    id: "review-proof",
    label: "Review proof",
    detail: "Verified public review source pending confirmation.",
    isPlaceholder: true,
    iconKey: "stars-reviews",
    priority: 5,
    publicEnabled: true,
  },
  {
    id: "labour-included",
    label: "Labour and loading included",
    detail: "Team loading and lifting included where applicable.",
    isPlaceholder: false,
    iconKey: "labour-service-inclusion",
    priority: 3,
    publicEnabled: true,
  },
];
