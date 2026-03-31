import Link from "next/link";

import { CallButton } from "@/components/shared/call-button";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { companyProfile } from "@/data/company";

export function FinalCtaSection(): JSX.Element {
  return (
    <section className="section-frame">
      <div className="rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
        <h2 className="text-2xl font-bold">Need it cleared quickly?</h2>
        <p className="mt-2 max-w-xl text-sm text-slate-200">Tell us what needs removing and get a fast quote from a local team.</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link href={companyProfile.quoteHref} className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white">
            Get a Quote
          </Link>
          <CallButton phoneNumber={companyProfile.phoneNumber} label="Call us" variant="ghost" className="px-5 py-3" />
          <WhatsAppButton
            number={companyProfile.whatsappNumber}
            message={companyProfile.whatsappDefaultMessage}
            label="WhatsApp"
            variant="ghost"
            className="px-5 py-3"
          />
        </div>
      </div>
    </section>
  );
}
