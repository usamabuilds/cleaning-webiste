import { ContentTemplate } from "@/components/shared/page-template";

export default function FaqPage() {
  return (
    <ContentTemplate
      intro={{
        eyebrow: "FAQ",
        title: "Rubbish removal FAQs for West Midlands customers",
        description:
          "Answers to common questions about quoting, collections, and service scope for both domestic and commercial waste removal.",
      }}
      sections={[
        {
          title: "Domestic questions",
          body: "Homeowner and tenancy jobs often focus on item access, speed, and property handover deadlines.",
        },
        {
          title: "Commercial questions",
          body: "Business clients usually ask about timing windows, collection frequency, and cardboard volume handling.",
        },
        {
          title: "Quote accuracy",
          body: "The fastest way to receive a useful estimate is to include photos, postcode, and brief access details.",
        },
        {
          title: "Licensing and disposal",
          body: "Collections follow licensed handling practices with reuse and recycling prioritized where possible.",
        },
      ]}
      faqItems={[
        { question: "Do you offer same-day collections?", answer: "Availability varies by area and schedule, so call or WhatsApp for current slot options." },
        { question: "Can you collect from upstairs flats?", answer: "Yes, just include floor level and access details when requesting your quote." },
        { question: "Do you take business cardboard waste?", answer: "Yes, commercial cardboard and packaging collections are available through the commercial service route." },
      ]}
    />
  );
}
