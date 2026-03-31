import type { CompanyProfile } from "@/types";

export type CompanyDetails = CompanyProfile & {
  serviceRegion: string;
  primaryCtaLabel: string;
  emailAddress: string;
  licenceReference: string;
  licenceReferenceIsPlaceholder: boolean;
  openingHoursNote: string;
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
