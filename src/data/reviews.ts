export type ReviewItem = {
  id: string;
  customerLabel: string;
  serviceLabel:
    | "House Clearance"
    | "Bulky Waste & Furniture Collection"
    | "Garden / Shed / Garage Clearance"
    | "Commercial Waste & Cardboard Collection";
  rating: 4 | 5;
  quote: string;
  isPlaceholder: true;
};

export const reviews: ReadonlyArray<ReviewItem> = [
  {
    id: "placeholder-review-1",
    customerLabel: "Customer A",
    serviceLabel: "House Clearance",
    rating: 5,
    quote:
      "Sample placeholder: team arrived on time, cleared quickly, and left rooms tidy for handover.",
    isPlaceholder: true,
  },
  {
    id: "placeholder-review-2",
    customerLabel: "Customer B",
    serviceLabel: "Bulky Waste & Furniture Collection",
    rating: 4,
    quote:
      "Sample placeholder: sofa and white goods removed the same day with polite and professional updates.",
    isPlaceholder: true,
  },
  {
    id: "placeholder-review-3",
    customerLabel: "Customer C",
    serviceLabel: "Garden / Shed / Garage Clearance",
    rating: 5,
    quote:
      "Sample placeholder: outdoor clearance completed efficiently, swept down after loading, no hassle.",
    isPlaceholder: true,
  },
  {
    id: "placeholder-review-4",
    customerLabel: "Customer D",
    serviceLabel: "Commercial Waste & Cardboard Collection",
    rating: 4,
    quote:
      "Sample placeholder: punctual collection slot, clean loading process, and clear communication for our site team.",
    isPlaceholder: true,
  },
  {
    id: "placeholder-review-5",
    customerLabel: "Customer E",
    serviceLabel: "House Clearance",
    rating: 5,
    quote:
      "Sample placeholder: respectful crew, fast turnaround, and a professional finish before keys were returned.",
    isPlaceholder: true,
  },
];
