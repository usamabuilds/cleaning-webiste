import { ContentTemplate } from "@/components/shared/page-template";

export default function AboutPage() {
  return (
    <ContentTemplate
      intro={{
        eyebrow: "About",
        title: "About Crucial Recycling",
        description:
          "We are building a dependable local rubbish removal service for households and businesses across the West Midlands with a focus on speed and responsible disposal.",
      }}
      sections={[
        {
          title: "Our approach",
          body: "We keep the process simple: clear communication, practical arrival windows, and efficient loading on collection day.",
        },
        {
          title: "Domestic and commercial",
          body: "We separate household and business job scopes to keep planning, compliance, and quoting clear.",
        },
        {
          title: "Licensed and eco-focused",
          body: "Waste is handled through licensed pathways with recycling and reuse considered wherever possible.",
        },
        {
          title: "Local service mindset",
          body: "By staying focused on the West Midlands, we aim to keep response times practical and support repeat local customers.",
        },
      ]}
    />
  );
}
