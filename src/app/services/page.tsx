import { ContentTemplate } from "@/components/shared/page-template";

export default function ServicesPage(): JSX.Element {
  return (
    <ContentTemplate
      intro={{
        eyebrow: "Services",
        title: "Rubbish removal services across the West Midlands",
        description:
          "Explore our domestic and commercial clearance options, from house clearances to cardboard collections. Every job is planned for fast turnaround and responsible disposal.",
      }}
      ctaLabel="Tell us what needs clearing"
      sections={[
        {
          title: "Domestic clearances",
          body: "We help homeowners, tenants, and landlords remove unwanted items quickly without needing a skip.",
          bullets: ["House clearance", "Bulky waste and furniture", "Garden, shed, and garage waste"],
        },
        {
          title: "Commercial collections",
          body: "We provide practical waste and cardboard removal for local businesses with flexible, no-fuss pickups.",
          bullets: ["Cardboard and packaging waste", "Office and retail clear-outs", "One-off and repeat collections"],
        },
        {
          title: "Why choose this route",
          body: "A service visit is often faster and easier than arranging permits, loading skips, or waiting for collection windows.",
          bullets: ["On-site loading support", "Licensed handling approach", "Eco-focused disposal pathway"],
        },
        {
          title: "Book your next step",
          body: "Use the quote form with photos for the quickest estimate, or call if you need same-day guidance.",
        },
      ]}
      faqItems={[
        {
          question: "Do you handle both domestic and commercial jobs?",
          answer: "Yes, we keep domestic and commercial collections separate so your quote reflects the right workload and waste type.",
        },
        {
          question: "Can I send photos before booking?",
          answer: "Yes, the quote page is designed for photo uploads so we can give a clearer estimate before collection.",
        },
      ]}
    />
  );
}
