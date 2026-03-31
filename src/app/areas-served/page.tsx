import { ContentTemplate } from "@/components/shared/page-template";

export default function AreasServedPage(): JSX.Element {
  return (
    <ContentTemplate
      intro={{
        eyebrow: "Areas served",
        title: "West Midlands rubbish removal coverage",
        description:
          "We focus on local West Midlands collections so travel time is efficient and response is practical for domestic and commercial jobs.",
      }}
      sections={[
        {
          title: "Core service region",
          body: "Coverage is centered on the West Midlands. Contact us with your postcode and we will confirm availability.",
        },
        {
          title: "Domestic locations",
          body: "Homes, flats, and rental properties across the region are supported with flexible collection options.",
        },
        {
          title: "Commercial locations",
          body: "Businesses, offices, and managed sites can request regular or ad-hoc collection schedules.",
        },
        {
          title: "Travel and access checks",
          body: "Sharing access restrictions and parking details helps us provide accurate timing and a smoother collection visit.",
        },
      ]}
    />
  );
}
