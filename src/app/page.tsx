import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home(): JSX.Element {
  return (
    <main className="section-frame space-y-6 pb-24 sm:pb-8">
      <HeroSection />
      <FinalCtaSection />
    </main>
  );
}
