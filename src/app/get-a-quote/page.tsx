import Image from "next/image";

import { CallButton } from "@/components/shared/call-button";
import { CtaRow } from "@/components/shared/page-template";
import { QuoteForm } from "@/components/shared/quote-form";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { companyProfile } from "@/data/company";

const processSteps = [
  "Share your details and upload photo(s).",
  "We review access, load size, and service type.",
  "You get a clear next-step response.",
];

export default function GetAQuotePage(): JSX.Element {
  return (
    <main className="section-frame space-y-6 pb-24 sm:pb-8">
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-5 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">Get a quote</p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Fast rubbish removal quotes across the West Midlands</h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              Send a few details and photos for a quicker estimate. Use the form below, or message/call if you want help right away.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <CallButton phoneNumber={companyProfile.phoneNumber} label={companyProfile.phoneLabel} variant="solid" />
              <WhatsAppButton
                number={companyProfile.whatsappNumber}
                message={companyProfile.whatsappDefaultMessage}
                label={companyProfile.whatsappLabel}
                variant="solid"
              />
            </div>

            <ul className="mt-5 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <li className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">Send photos for a faster quote</li>
              <li className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">Domestic and commercial requests supported</li>
              <li className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">Service focused on the West Midlands</li>
              <li className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">Simple, low-friction enquiry flow</li>
            </ul>
          </div>

          <div className="relative min-h-[240px] border-t border-slate-200 bg-slate-50 lg:min-h-full lg:border-l lg:border-t-0">
            <Image
              src="/get-a-quote-illustration.svg"
              alt="Illustration of a smooth quote request process with photo sharing and fast confirmation"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 36vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-1">
          <QuoteForm />
        </div>

        <aside className="space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="text-lg font-bold text-slate-900">How quote requests are handled</h2>
            <ol className="mt-3 space-y-2 text-sm text-slate-700">
              {processSteps.map((step, index) => (
                <li key={step} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="text-lg font-bold text-slate-900">What to include for a smooth quote</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Postcode and property type</li>
              <li>Photo(s) showing waste volume</li>
              <li>Access notes (stairs, parking, timing)</li>
            </ul>
          </article>
        </aside>
      </section>

      <CtaRow label="Prefer to message first? Call or WhatsApp and we can guide your quote request." />
    </main>
  );
}
