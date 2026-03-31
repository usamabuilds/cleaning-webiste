import { AreasSection } from "@/components/sections/areas-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { ServiceCardsSection } from "@/components/sections/service-cards-section";
import { TrustStrip } from "@/components/sections/trust-strip";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { SectionFrame } from "@/components/ui/section-frame";

export default function Home(): JSX.Element {
  return (
    <main className="space-y-6 pb-24 sm:pb-8">
      <HeroSection />

      <SectionFrame>
        <TrustStrip />
      </SectionFrame>

      <SectionFrame>
        <ServiceCardsSection />
      </SectionFrame>

      <SectionFrame>
        <WhyChooseUsSection />
      </SectionFrame>

      <SectionFrame>
        <HowItWorksSection />
      </SectionFrame>

      <SectionFrame>
        <AreasSection />
      </SectionFrame>

      <SectionFrame>
        <ReviewsSection />
      </SectionFrame>

      <SectionFrame>
        <FaqSection />
      </SectionFrame>

      <SectionFrame>
        <FinalCtaSection />
      </SectionFrame>
    </main>
  );
}
