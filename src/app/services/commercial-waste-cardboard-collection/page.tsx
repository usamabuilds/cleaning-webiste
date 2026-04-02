import { ContentTemplate } from "@/components/shared/page-template";

export default function CommercialWasteCardboardCollectionPage() {
  return (
    <ContentTemplate
      intro={{
        eyebrow: "Commercial waste",
        title: "Commercial waste and cardboard collection",
        description:
          "Support your West Midlands business with reliable cardboard and non-hazardous commercial waste collection tailored to site access and workload.",
      }}
      sections={[
        {
          title: "Commercial scope",
          body: "This service is specifically for businesses, offices, retail, and managed premises needing routine or one-off collections.",
          bullets: ["Cardboard and packaging waste", "Office and back-of-house clear-outs", "Flexible pickup frequency"],
        },
        {
          title: "Domestic separation",
          body: "If you need household collection, please use our domestic service pages so pricing and logistics are quoted correctly.",
        },
        {
          title: "Site and access planning",
          body: "Share loading bay access, operating hours, and expected volume to help us schedule efficient collections.",
        },
        {
          title: "Compliance minded process",
          body: "We keep collections structured and documented, with licensed handling principles built into every collection plan.",
        },
      ]}
      faqItems={[
        {
          question: "Can collections be arranged around opening hours?",
          answer: "Yes, timing can be planned around your site operations where access information is provided in advance.",
        },
      ]}
    />
  );
}
