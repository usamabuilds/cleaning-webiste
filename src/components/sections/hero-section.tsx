import Image from "next/image";

import { GlassPanel } from "@/components/ui/glass-panel";

export function HeroSection(): JSX.Element {
  return (
    <GlassPanel className="mx-auto w-[calc(100%-var(--frame-padding-x)*2)] max-w-[calc(var(--frame-max-width)-var(--frame-padding-x)*2)] overflow-hidden rounded-2xl bg-zinc-900 p-0 backdrop-blur-none">
      <section className="relative isolate h-[420px] md:h-[560px]">
        <div className="hero-media-layer absolute inset-0">
          <Image
            src="/hero/hero.webp"
            alt="Rubbish removal team clearing waste in the West Midlands"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right md:object-[72%_center]"
          />
        </div>
      </section>
    </GlassPanel>
  );
}
