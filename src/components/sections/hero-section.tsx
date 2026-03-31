import Image from "next/image";

import { GlassPanel } from "@/components/ui/glass-panel";

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
      </section>
    </GlassPanel>
  );
}
