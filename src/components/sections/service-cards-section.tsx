import {
  BriefcaseBusiness,
  House,
  Sofa,
  Trees,
  type LucideIcon,
} from "lucide-react";
import { ServiceCard } from "@/components/ui/service-card";
import { ROUTES } from "@/lib/site";

type HomeServiceCard = {
  title: string;
  summary: string;
  href: string;
  ctaLabel: "Learn More" | "Get Quote";
  Icon: LucideIcon;
};

const homeServiceCards: ReadonlyArray<HomeServiceCard> = [
  {
    title: "House Clearance",
    summary: "Full or part-property clearances for moves, probate, and general decluttering.",
    href: ROUTES.houseClearance,
    ctaLabel: "Learn More",
    Icon: House,
  },
  {
    title: "Bulky Waste & Furniture Collection",
    summary: "Fast pickup for large household items like sofas, beds, wardrobes, and more.",
    href: ROUTES.bulkyWasteFurnitureCollection,
    ctaLabel: "Get Quote",
    Icon: Sofa,
  },
  {
    title: "Garden / Shed / Garage Clearance",
    summary: "Clear-outs for outdoor and storage spaces, including mixed non-hazardous waste.",
    href: ROUTES.gardenShedGarageClearance,
    ctaLabel: "Learn More",
    Icon: Trees,
  },
  {
    title: "Commercial Waste & Cardboard Collection",
    summary: "Collection support for local businesses handling packaging and general waste.",
    href: ROUTES.commercialWasteCardboardCollection,
    ctaLabel: "Get Quote",
    Icon: BriefcaseBusiness,
  },
];

export function ServiceCardsSection(): JSX.Element {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
    >
      <div className="max-w-2xl">
        <h2 id="services-heading" className="text-2xl font-bold text-slate-900">
          Core services
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Pick the service that matches your job type, then request a quick quote.
        </p>
      </div>

      <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
        {homeServiceCards.map((card) => (
          <ServiceCard
            key={card.href}
            title={card.title}
            summary={card.summary}
            href={card.href}
            ctaLabel={card.ctaLabel}
            Icon={card.Icon}
          />
        ))}
      </div>
    </section>
  );
}
