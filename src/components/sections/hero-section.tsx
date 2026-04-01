import Image from "next/image";

import { SectionFrame } from "@/components/ui/section-frame";

export function HeroSection(): JSX.Element {
  return (
    <SectionFrame className="overflow-hidden rounded-2xl">
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
    </SectionFrame>
  );
}
