import { ContentTemplate } from "@/components/shared/page-template";

export default function BulkyWasteFurnitureCollectionPage() {
  return (
    <ContentTemplate
      intro={{
        eyebrow: "Bulky waste",
        title: "Bulky waste and furniture collection in the West Midlands",
        description:
          "From sofas and wardrobes to white goods and general bulky items, we collect hard-to-move waste from homes and business sites.",
      }}
      sections={[
        {
          title: "Domestic bulky waste",
          body: "Ideal for households replacing furniture, decluttering, or clearing oversized items that local bins cannot take.",
          bullets: ["Sofas, beds, tables, wardrobes", "White goods and mixed bulky waste", "Single-item or multi-item collections"],
        },
        {
          title: "Commercial bulky waste",
          body: "Suitable for offices, retail units, and managed properties needing quick removal of large unwanted items.",
          bullets: ["Office furniture clearance", "Retail fixture disposal", "Scheduled business pickups"],
        },
        {
          title: "Collection planning",
          body: "Provide photos and approximate dimensions where possible to speed up quoting and vehicle planning.",
        },
        {
          title: "Access and lifting",
          body: "Let us know about stairs, narrow doors, or restricted parking so the job can be scoped accurately.",
        },
      ]}
      faqItems={[
        {
          question: "Do I need to move items outside first?",
          answer: "No, tell us where the items are located and we will plan the safest route for removal.",
        },
      ]}
    />
  );
}
