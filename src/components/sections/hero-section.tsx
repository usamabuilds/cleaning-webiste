import Image from "next/image";
import Link from "next/link";

import { CallButton } from "@/components/shared/call-button";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { LayerContent } from "@/components/ui/layer-content";
import { companyProfile } from "@/data/company";

const heroCtaButtonClassName = "px-5 py-3";

export function HeroSection(): JSX.Element {
  return (
    <GlassPanel className="overflow-hidden bg-zinc-900 p-0 backdrop-blur-none">
      <section className="relative isolate min-h-[420px]">
        <div className="hero-media-layer absolute inset-0">
          <Image
            src="/hero/hero.png"
            alt="Rubbish removal team clearing waste in the West Midlands"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right md:object-[72%_center]"
          />
        </div>
        <div className="hero-overlay-layer absolute inset-0" />
        <LayerContent className="relative z-10 flex min-h-[420px] items-end px-1 py-6 sm:px-2 sm:py-10">
          <div className="max-w-2xl rounded-xl bg-black/50 p-4 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">{companyProfile.brandName}</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Rubbish removal and house clearance in the West Midlands.
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-zinc-100 sm:text-base">
              Clear pricing, quick collection, and straightforward local support.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href={companyProfile.quoteHref}
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                {companyProfile.primaryCtaLabel}
              </Link>
              <CallButton
                phoneNumber={companyProfile.phoneNumber}
                label={companyProfile.phoneLabel}
                variant="ghost"
                className={heroCtaButtonClassName}
              />
              <WhatsAppButton
                number={companyProfile.whatsappNumber}
                message={companyProfile.whatsappDefaultMessage}
                label={companyProfile.whatsappLabel}
                variant="ghost"
                className={heroCtaButtonClassName}
              />
            </div>
          </div>
        </LayerContent>
      </section>
    </GlassPanel>
  );
}
