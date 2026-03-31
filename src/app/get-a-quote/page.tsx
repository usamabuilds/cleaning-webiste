import { CallButton } from "@/components/shared/call-button";
import { QuoteForm } from "@/components/shared/quote-form";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { companyProfile } from "@/data/company";

export default function GetAQuotePage(): JSX.Element {
  return (
    <main className="section-frame space-y-6 pb-24 sm:pb-8">
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">Get a quote</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Send your waste removal details</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600">Use the form below or contact us directly for a faster response.</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <CallButton phoneNumber={companyProfile.phoneNumber} label={companyProfile.phoneLabel} variant="outline" />
          <WhatsAppButton
            number={companyProfile.whatsappNumber}
            message={companyProfile.whatsappDefaultMessage}
            label={companyProfile.whatsappLabel}
            variant="outline"
          />
        </div>
      </section>

      <QuoteForm />
    </main>
  );
}
