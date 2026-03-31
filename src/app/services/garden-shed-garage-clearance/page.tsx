import { ContentTemplate } from "@/components/shared/page-template";

export default function GardenShedGarageClearancePage(): JSX.Element {
  return (
    <ContentTemplate
      intro={{
        eyebrow: "Outdoor clearances",
        title: "Garden, shed and garage clearance services",
        description:
          "Clear green waste, old tools, broken storage items, and general outdoor clutter with a practical local collection service.",
      }}
      sections={[
        {
          title: "Domestic garden and garage jobs",
          body: "We clear household outdoor spaces, including overfilled sheds and garages that need resetting.",
          bullets: ["Bagged garden waste and loose items", "Shed and garage contents", "Seasonal declutter collections"],
        },
        {
          title: "Commercial outdoor jobs",
          body: "For landlord blocks, managed sites, and business premises, we offer separate commercial scope and collection planning.",
        },
        {
          title: "Before your visit",
          body: "If possible, group items by area and send photos so we can estimate loading time and vehicle size.",
        },
        {
          title: "Responsible disposal",
          body: "Collected material is processed through licensed channels with reuse and recycling considered where suitable.",
        },
      ]}
      faqItems={[
        {
          question: "Can you clear a shed and garage in one booking?",
          answer: "Yes, combined domestic jobs are common and can be quoted together from photos.",
        },
      ]}
    />
  );
}
