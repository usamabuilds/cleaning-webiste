export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: "booking" | "pricing" | "waste-types" | "coverage" | "compliance";
  isPlaceholder?: boolean;
};

export const faqs: ReadonlyArray<FaqItem> = [
  {
    id: "how-to-get-quote",
    question: "How do I get a quote?",
    answer:
      "Use the quote form with your postcode, item details, and optional photos. A final quote is provided once your job details are reviewed.",
    category: "booking",
  },
  {
    id: "same-day-availability",
    question: "Do you offer same-day collections?",
    answer:
      "Same-day slots may be available depending on location and diary space. Contact us on phone or WhatsApp for current availability.",
    category: "booking",
  },
  {
    id: "how-much-cost",
    question: "How much does rubbish removal cost?",
    answer:
      "Pricing is job-based and depends on volume, waste type, and access. No fixed prices are published yet to avoid inaccurate quotes.",
    category: "pricing",
  },
  {
    id: "what-waste-not-taken",
    question: "Is there anything you do not collect?",
    answer:
      "Hazardous materials are excluded. If you are unsure about an item, send a photo and description first so we can confirm.",
    category: "waste-types",
  },
  {
    id: "which-areas-covered",
    question: "Which areas do you cover?",
    answer:
      "We are focused on the West Midlands. Exact postcode coverage is confirmed when you request a quote.",
    category: "coverage",
  },
  {
    id: "waste-carrier-proof",
    question: "Are licence and compliance details available?",
    answer:
      "Yes. Licence/compliance information should be added to the legal page once the final reference details are provided.",
    category: "compliance",
    isPlaceholder: true,
  },
];
