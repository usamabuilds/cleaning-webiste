import {
  BadgeCheck,
  Banknote,
  Clock3,
  MapPin,
  Recycle,
  Users,
  type LucideIcon,
} from "lucide-react";

type ProofCard = {
  title: string;
  sentence: string;
  Icon: LucideIcon;
};

const proofCards: ReadonlyArray<ProofCard> = [
  {
    title: "Licensed Collection",
    sentence: "Waste is collected with licence-focused compliance and documented handling.",
    Icon: BadgeCheck,
  },
  {
    title: "Labour Included",
    sentence: "Loading is included, so you do not need to arrange extra lifting help.",
    Icon: Users,
  },
  {
    title: "Cheaper Than a Skip",
    sentence: "For many jobs, total cost can come in below skip hire once labour and permits are considered.",
    Icon: Banknote,
  },
  {
    title: "Same-Day / Next-Day",
    sentence: "Rapid collection slots are offered where availability allows.",
    Icon: Clock3,
  },
  {
    title: "West Midlands Coverage",
    sentence: "Collection routes are focused on local areas across the West Midlands.",
    Icon: MapPin,
  },
  {
    title: "Responsible Disposal",
    sentence: "Collected waste is sorted with reuse and recycling prioritised where possible.",
    Icon: Recycle,
  },
];

export function WhyChooseUsSection(): JSX.Element {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
    >
      <div className="max-w-2xl">
        <h2 id="why-choose-us-heading" className="text-2xl font-bold text-slate-900">
          Why choose us
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Quick proof points that show how the service stays compliant, practical, and cost-aware.
        </p>
      </div>

      <div className="mt-5 grid gap-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
        {proofCards.map((card) => (
          <article
            key={card.title}
            className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 sm:p-4"
          >
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700">
                <card.Icon size={16} aria-hidden="true" />
              </span>

              <div>
                <h3 className="text-sm font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{card.sentence}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
