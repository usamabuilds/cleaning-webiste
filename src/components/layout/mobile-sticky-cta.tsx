import Link from "next/link";

import { CallButton } from "@/components/shared/call-button";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { companyProfile } from "@/data/company";

export function MobileStickyCta() {
  return (
    <div data-sticky-cta="true" className="sticky-cta fixed inset-x-0 bottom-0 z-[70] p-2 sm:hidden">
      <div className="mx-auto grid max-w-2xl grid-cols-3 gap-2">
        <CallButton phoneNumber={companyProfile.phoneNumber} label="Call" variant="outline" className="px-2 py-2 text-xs" />
        <WhatsAppButton
          number={companyProfile.whatsappNumber}
          message={companyProfile.whatsappDefaultMessage}
          label="WhatsApp"
          variant="outline"
          className="px-2 py-2 text-xs"
        />
        <Link
          href={companyProfile.quoteHref}
          className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-2 py-2 text-xs font-semibold text-white"
        >
          Quote
        </Link>
      </div>
    </div>
  );
}
