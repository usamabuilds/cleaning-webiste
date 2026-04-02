export const ROUTES = {
  home: "/",
  services: "/services",
  houseClearance: "/services/house-clearance",
  bulkyWasteFurnitureCollection: "/services/bulky-waste-furniture-collection",
  gardenShedGarageClearance: "/services/garden-shed-garage-clearance",
  commercialWasteCardboardCollection: "/services/commercial-waste-cardboard-collection",
  howItWorks: "/how-it-works",
  areasServed: "/areas-served",
  about: "/about",
  reviews: "/reviews",
  faq: "/faq",
  getAQuote: "/get-a-quote",
  privacyPolicy: "/legal/privacy-policy",
  terms: "/legal/terms",
  licenceCompliance: "/legal/licence-compliance",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

export type NavItem = {
  label: string;
  href: RoutePath;
};

// Single source of truth for internal route links used across site navigation.
export const primaryNavigation: ReadonlyArray<NavItem> = [
  { label: "Home", href: ROUTES.home },
  { label: "Services", href: ROUTES.services },
  { label: "How It Works", href: ROUTES.howItWorks },
  { label: "Areas Served", href: ROUTES.areasServed },
];

export const serviceNavigation: ReadonlyArray<NavItem> = [
  { label: "All Services", href: ROUTES.services },
  { label: "House Clearance", href: ROUTES.houseClearance },
  { label: "Bulky Waste & Furniture Collection", href: ROUTES.bulkyWasteFurnitureCollection },
  { label: "Garden, Shed & Garage Clearance", href: ROUTES.gardenShedGarageClearance },
  { label: "Commercial Waste & Cardboard Collection", href: ROUTES.commercialWasteCardboardCollection },
];

export const legalNavigation: ReadonlyArray<NavItem> = [
  { label: "Privacy Policy", href: ROUTES.privacyPolicy },
  { label: "Terms", href: ROUTES.terms },
  { label: "Licence Compliance", href: ROUTES.licenceCompliance },
];

export const footerQuickNavigation: ReadonlyArray<NavItem> = [
  { label: "Home", href: ROUTES.home },
  { label: "Services", href: ROUTES.services },
  { label: "House Clearance", href: ROUTES.houseClearance },
  { label: "Bulky Waste & Furniture", href: ROUTES.bulkyWasteFurnitureCollection },
  { label: "Garden, Shed & Garage", href: ROUTES.gardenShedGarageClearance },
  { label: "Commercial Waste", href: ROUTES.commercialWasteCardboardCollection },
  { label: "How It Works", href: ROUTES.howItWorks },
  { label: "Areas Served", href: ROUTES.areasServed },
  { label: "About", href: ROUTES.about },
  { label: "Reviews", href: ROUTES.reviews },
  { label: "FAQ", href: ROUTES.faq },
  { label: "Get a Quote", href: ROUTES.getAQuote },
];
