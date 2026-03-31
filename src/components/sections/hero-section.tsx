import { GlassPanel } from "@/components/ui/glass-panel";
import { LayerContent } from "@/components/ui/layer-content";
import Image from "next/image";

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
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">Crucial Recycling</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Fast, licensed rubbish removal and house clearance in the West Midlands.
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-zinc-100 sm:text-base">
              Lean placeholder copy for the main value proposition. Replace with final brand messaging.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href="#get-quote" className="rounded-xl bg-emerald-600 px-5 py-3 text-center text-sm font-semibold text-white">
                Get a Quote
              </a>
              <a
                href="tel:+440000000000"
                className="rounded-xl border border-zinc-200/70 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Call Now
              </a>
              <a href="#" className="rounded-xl border border-zinc-200/70 bg-white/10 px-5 py-3 text-center text-sm font-semibold text-white">
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </LayerContent>
      </section>
    </GlassPanel>
  );
}
