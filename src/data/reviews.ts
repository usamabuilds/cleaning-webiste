export type ReviewItem = {
  id: string;
  authorDisplayName: string;
  locationLabel: string;
  quote: string;
  sourceLabel: string;
  dateLabel: string;
  isPlaceholder: boolean;
};

export const reviews: ReadonlyArray<ReviewItem> = [
  {
    id: "placeholder-review-1",
    authorDisplayName: "Customer name pending",
    locationLabel: "West Midlands",
    quote: "Placeholder review text. Replace with a real, permissioned testimonial before launch.",
    sourceLabel: "Placeholder",
    dateLabel: "Date pending",
    isPlaceholder: true,
  },
  {
    id: "placeholder-review-2",
    authorDisplayName: "Customer name pending",
    locationLabel: "West Midlands",
    quote: "Placeholder review text. Do not publish as a real testimonial.",
    sourceLabel: "Placeholder",
    dateLabel: "Date pending",
    isPlaceholder: true,
  },
  {
    id: "placeholder-review-3",
    authorDisplayName: "Customer name pending",
    locationLabel: "West Midlands",
    quote: "Placeholder review text for layout testing only.",
    sourceLabel: "Placeholder",
    dateLabel: "Date pending",
    isPlaceholder: true,
  },
];
