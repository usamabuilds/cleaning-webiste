import { CtaRow, IntroBlock } from "@/components/shared/page-template";

export default function TermsPage(): JSX.Element {
  return (
    <main className="section-frame space-y-6 pb-24 sm:pb-8">
      <IntroBlock
        eyebrow="Legal"
        title="Terms of service"
        description="These terms describe the service expectations for domestic and commercial waste collection bookings."
      />

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 text-sm text-slate-700">
        <h2 className="text-xl font-bold text-slate-900">Service terms</h2>
        <p>Placeholder: add approved booking, cancellation, access, and payment terms once finalized.</p>
        <p>Placeholder: add liability boundaries and customer obligations for item disclosure and site safety.</p>
      </section>

      <CtaRow label="Need a booking clarification? Call or WhatsApp us." />
    </main>
  );
}
