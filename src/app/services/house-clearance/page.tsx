import { ContentTemplate } from "@/components/shared/page-template";

export default function HouseClearancePage() {
  return (
    <ContentTemplate
      intro={{
        eyebrow: "House clearance",
        title: "House clearance service for West Midlands homes",
        description:
          "Need to clear rooms, lofts, or full properties? We provide straightforward domestic house clearance with fast response and careful loading.",
      }}
      sections={[
        {
          title: "Domestic focus",
          body: "This page covers home and residential property clearances including family homes, flats, and tenancy handovers.",
          bullets: ["Single-room to full-property clearances", "Loft, garage, and outbuilding contents", "Landlord and end-of-tenancy support"],
        },
        {
          title: "Commercial note",
          body: "If your clearance is for offices, shops, or storage units, use our commercial waste page so scope and compliance are quoted correctly.",
        },
        {
          title: "How visits are planned",
          body: "Share your location, access details, and photos to help us plan labor, vehicle space, and disposal route.",
        },
        {
          title: "What to prepare",
          body: "Set aside anything you want to keep and flag access limitations such as stairs, narrow hallways, or parking restrictions.",
        },
      ]}
      faqItems={[
        {
          question: "Can you clear a whole property in one visit?",
          answer: "Many jobs can be completed in one visit depending on volume, access, and item mix.",
        },
        {
          question: "Is this suitable for probate or tenancy clear-outs?",
          answer: "Yes, this service is structured for sensitive home clearances where speed and clear communication matter.",
        },
      ]}
    />
  );
}
