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
  highlight: "Fast" | "Clean" | "Punctual" | "Professional";
  isPlaceholder: true;
};

export const reviews: ReadonlyArray<ReviewItem> = [
  {
    id: "placeholder-review-1",
    customerLabel: "Customer A",
    serviceLabel: "House Clearance",
    rating: 5,
    quote:
      "Sample placeholder: quick arrival window, steady pace, and tidy finish ready for handover.",
    highlight: "Fast",
    isPlaceholder: true,
  },
  {
    id: "placeholder-review-2",
    customerLabel: "Customer B",
    serviceLabel: "Bulky Waste & Furniture Collection",
    rating: 4,
    quote:
      "Sample placeholder: old furniture removed with care, floors left clean, and updates were clear.",
    highlight: "Clean",
    isPlaceholder: true,
  },
  {
    id: "placeholder-review-3",
    customerLabel: "Customer C",
    serviceLabel: "Garden / Shed / Garage Clearance",
    rating: 5,
    quote:
      "Sample placeholder: arrived when expected, loaded efficiently, and kept access routes tidy.",
    highlight: "Punctual",
    isPlaceholder: true,
  },
  {
    id: "placeholder-review-4",
    customerLabel: "Customer D",
    serviceLabel: "Commercial Waste & Cardboard Collection",
    rating: 4,
    quote:
      "Sample placeholder: polite team, organized collection, and a professional handover for site staff.",
    highlight: "Professional",
    isPlaceholder: true,
  },
  {
    id: "placeholder-review-5",
    customerLabel: "Customer E",
    serviceLabel: "House Clearance",
    rating: 5,
    quote:
      "Sample placeholder: practical approach, fast turnaround, and respectful communication throughout.",
    highlight: "Fast",
    isPlaceholder: true,
  },
];
