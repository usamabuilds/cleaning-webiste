import { ContentTemplate } from "@/components/shared/page-template";

export default function HowItWorksPage(): JSX.Element {
  return (
    <ContentTemplate
      intro={{
        eyebrow: "How it works",
        title: "Simple rubbish removal process from quote to collection",
        description:
          "Our West Midlands service keeps things clear: send job details, receive a quote, and confirm a collection slot that works for you.",
      }}
      sections={[
        { title: "Step 1: Share your job", body: "Send a short description, postcode, and photos through WhatsApp or the quote form." },
        { title: "Step 2: Receive your quote", body: "We review item volume and access details, then send a straightforward quote." },
        { title: "Step 3: Confirm collection", body: "Choose a convenient time window for collection and loading." },
        { title: "Step 4: Responsible disposal", body: "Collected waste is sorted through licensed pathways with reuse and recycling prioritized where suitable." },
      ]}
      faqItems={[
        { question: "How quickly can I get a quote?", answer: "Quotes are typically provided promptly once we receive enough detail and photos." },
      ]}
    />
  );
}
