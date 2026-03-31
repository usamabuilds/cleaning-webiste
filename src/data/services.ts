import { ROUTES } from "@/lib/site";

export type ServiceAudience = "domestic" | "commercial" | "both";

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  href: string;
  audience: ServiceAudience;
  includedExamples: ReadonlyArray<string>;
  notIncludedNotes: ReadonlyArray<string>;
  ctaLabel: string;
  placeholderNotes?: string;
};

export const services: ReadonlyArray<Service> = [
  {
    slug: "house-clearance",
    name: "House Clearance",
    shortDescription: "Full or partial house clearances with responsible sorting and removal.",
    longDescription:
      "Suitable for moving, end-of-tenancy clearances, probate support, and general household decluttering. Final scope, timing, and pricing depend on property size and access.",
    href: ROUTES.houseClearance,
    audience: "domestic",
    includedExamples: ["Furniture", "Bagged household waste", "General non-hazardous items"],
    notIncludedNotes: ["Hazardous materials are not collected"],
    ctaLabel: "Get a house clearance quote",
  },
  {
    slug: "bulky-waste-furniture-collection",
    name: "Bulky Waste & Furniture Collection",
    shortDescription: "Single-item or multi-item collections for bulky household waste.",
    longDescription:
      "Ideal for sofas, wardrobes, mattresses, and other large household items. Collection windows are confirmed once job details and location are reviewed.",
    href: ROUTES.bulkyWasteFurnitureCollection,
    audience: "domestic",
    includedExamples: ["Sofas and armchairs", "Beds and mattresses", "Wardrobes and tables"],
    notIncludedNotes: ["Electrical disconnection is not included"],
    ctaLabel: "Book bulky item collection",
  },
  {
    slug: "garden-shed-garage-clearance",
    name: "Garden, Shed & Garage Clearance",
    shortDescription: "Clear-outs for outdoor and storage spaces, including mixed non-hazardous waste.",
    longDescription:
      "For overgrown gardens, full shed emptying, or garage reset jobs. Waste streams are separated where possible to support responsible disposal.",
    href: ROUTES.gardenShedGarageClearance,
    audience: "domestic",
    includedExamples: ["Bagged green waste", "Old tools and storage clutter", "Broken outdoor furniture"],
    notIncludedNotes: ["Chemicals, fuels, and asbestos are excluded"],
    ctaLabel: "Request outdoor clearance",
  },
  {
    slug: "commercial-waste-cardboard-collection",
    name: "Commercial Waste & Cardboard Collection",
    shortDescription: "Flexible waste and cardboard collection support for local businesses.",
    longDescription:
      "Designed for offices, shops, and other commercial premises that need ad-hoc or repeat collection support. Service details are confirmed per site requirements.",
    href: ROUTES.commercialWasteCardboardCollection,
    audience: "commercial",
    includedExamples: ["Flattened cardboard", "Packaging waste", "General non-hazardous business waste"],
    notIncludedNotes: ["Confidential waste destruction is not included unless agreed"],
    ctaLabel: "Request a commercial quote",
    placeholderNotes: "Add sector-specific examples once service policy is confirmed.",
  },
];
