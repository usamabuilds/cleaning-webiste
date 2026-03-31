import { ContentTemplate } from "@/components/shared/page-template";

export default function ReviewsPage(): JSX.Element {
  return (
    <ContentTemplate
      intro={{
        eyebrow: "Reviews",
        title: "Customer feedback for Crucial Recycling",
        description:
          "We publish verified customer feedback as it becomes available. This page is structured to keep domestic and commercial experiences easy to browse.",
      }}
      sections={[
        {
          title: "Domestic review notes",
          body: "Placeholder: add verified homeowner and tenant feedback here when approved for publication.",
        },
        {
          title: "Commercial review notes",
          body: "Placeholder: add verified business and property-management feedback here when approved for publication.",
        },
        {
          title: "How feedback is used",
          body: "Reviews help improve collection timings, communication, and on-site service standards.",
        },
        {
          title: "Submit your feedback",
          body: "After your job is complete, contact us by phone or WhatsApp to share your experience.",
        },
      ]}
    />
  );
}
