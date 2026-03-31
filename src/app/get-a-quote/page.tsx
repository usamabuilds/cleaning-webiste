import { CtaRow, IntroBlock } from "@/components/shared/page-template";
import { QuoteForm } from "@/components/shared/quote-form";

export default function GetAQuotePage(): JSX.Element {
  return (
    <main className="section-frame space-y-6 pb-24 sm:pb-8">
      <IntroBlock
        eyebrow="Get a quote"
        title="Request a rubbish removal quote in the West Midlands"
        description="Send your job details and photos for a faster estimate. We handle domestic and commercial jobs with separate scope planning."
      />

      <CtaRow label="Need help before filling the form?" />

      <QuoteForm />

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <h2 className="text-xl font-bold text-slate-900">What to include</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>Postcode and property type</li>
            <li>Photo(s) of the waste volume</li>
            <li>Any access notes such as stairs or parking limits</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <h2 className="text-xl font-bold text-slate-900">Domestic vs commercial quotes</h2>
          <p className="mt-2 text-sm text-slate-600">
            Please specify whether your request is household or business related so we can quote with the right collection and compliance details.
          </p>
        </article>
      </section>

      <CtaRow label="Ready to send details now?" />
    </main>
  );
}
