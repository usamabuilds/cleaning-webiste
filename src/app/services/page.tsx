import { companyProfile } from "@/data/company";

type ServiceItem = {
  name: string;
  summary: string;
  details: string;
  includes: string[];
};

const serviceItems: ServiceItem[] = [
  {
    name: "Regular Cleaning",
    summary: "Ongoing home cleaning to keep everyday spaces fresh, tidy, and under control.",
    details:
      "Ideal for weekly, fortnightly, or routine visits covering the rooms that need steady upkeep without the fuss of a full reset every time.",
    includes: ["Kitchen and bathroom wipe-downs", "Dusting and vacuuming", "General surface and floor care"],
  },
  {
    name: "Deep Cleaning",
    summary: "A more intensive clean for homes that need extra attention from top to bottom.",
    details:
      "Best for seasonal resets, neglected areas, or before special occasions when a standard clean is not enough to get everything feeling properly refreshed.",
    includes: ["Built-up grime removal", "Detailed bathroom and kitchen work", "Attention to edges, corners, and neglected spots"],
  },
  {
    name: "One-Off Cleaning",
    summary: "Flexible single-visit cleaning when you need the house sorted without a recurring plan.",
    details:
      "A practical option for busy weeks, post-event tidying, or whenever you want a reliable reset without committing to a regular schedule.",
    includes: ["Single booked visit", "Tailored room priorities", "Suitable for ad-hoc home refreshes"],
  },
  {
    name: "End of Tenancy Cleaning",
    summary: "Move-out cleaning designed to leave the property tidy, presentable, and ready for handover.",
    details:
      "Useful for tenants, landlords, and letting situations where the property needs a detailed clean before keys are returned or new occupants arrive.",
    includes: ["Kitchen and bathroom detailing", "Cupboards, surfaces, and floors", "Presentation-ready finish"],
  },
  {
    name: "After Builders Cleaning",
    summary: "Post-renovation cleaning to clear dust, residue, and the mess left after works are finished.",
    details:
      "Focused on making the space feel livable again after decorating, repairs, fitting work, or building projects have wrapped up.",
    includes: ["Fine dust clean-down", "Surface and floor attention", "Kitchen and bathroom reset after works"],
  },
  {
    name: "Airbnb & Short-Term Rental Cleaning",
    summary: "Fast turnaround cleaning to keep short-stay properties ready for incoming guests.",
    details:
      "Designed for hosts who need dependable presentation standards, efficient resets, and a clean, guest-ready finish between bookings.",
    includes: ["Guest-ready room reset", "Bathroom and kitchen refresh", "Turnaround-focused cleaning visits"],
  },
  {
    name: "Office & Business Cleaning",
    summary: "Professional cleaning support for workspaces that need to stay presentable and welcoming.",
    details:
      "Suitable for offices, studios, and business premises that need reliable upkeep with a clean, polished finish for staff and visitors.",
    includes: ["Desk and shared surface cleaning", "Reception and workspace upkeep", "Washroom and kitchen area attention"],
  },
  {
    name: "Communal Area Cleaning",
    summary: "Cleaning for shared internal spaces in buildings, blocks, and managed properties.",
    details:
      "A practical service for keeping entrances, hallways, stairwells, and common-use spaces tidy, fresh, and better maintained.",
    includes: ["Entrance and hallway upkeep", "Stair and landing cleaning", "Shared touchpoint attention"],
  },
  {
    name: "Carpet & Upholstery Cleaning",
    summary: "Fabric and soft-surface cleaning to help rooms feel fresher and better cared for.",
    details:
      "Useful for households and rental properties where carpets, sofas, and upholstered pieces need a cleaner, more revived finish.",
    includes: ["Carpet refresh", "Sofa and chair cleaning", "Targeted soft-furnishing care"],
  },
  {
    name: "Caravan Cleaning",
    summary: "Interior cleaning for caravans that need a tidy, comfortable, holiday-ready finish.",
    details:
      "Great before trips, after heavy use, or when preparing the caravan for guests, storage, or a fresh seasonal start.",
    includes: ["Interior wipe-down and reset", "Compact kitchen and bathroom cleaning", "Sleeping and seating area refresh"],
  },
  {
    name: "Oven Cleaning",
    summary: "Dedicated oven cleaning to lift grease and restore a cleaner, brighter finish.",
    details:
      "A focused service for ovens that need more than day-to-day wiping, helping cooking spaces feel fresher and better maintained.",
    includes: ["Grease and residue removal", "Inner surface clean-down", "Door and visible detail cleaning"],
  },
  {
    name: "Fridge Cleaning",
    summary: "Detailed fridge cleaning for a fresher, cleaner food-storage space.",
    details:
      "Useful during home resets, end of tenancy work, or before restocking when the inside of the fridge needs proper attention.",
    includes: ["Shelf and drawer cleaning", "Interior wipe-down", "Freshen-up of visible spills and marks"],
  },
  {
    name: "Interior Window Cleaning",
    summary: "Interior glass and window cleaning to brighten rooms and improve the finish of the home.",
    details:
      "Ideal as part of a deeper reset or when visible smudges, dust, and marks on interior glazing start affecting the overall feel of the space.",
    includes: ["Interior glass cleaning", "Frame and sill wipe-down", "Cleaner, brighter room finish"],
  },
];

export default function ServicesPage() {
  return (
    <main className="space-y-8 pb-24 sm:pb-8">
      <section className="w-full bg-[#F8F7F2] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5">
          <p className="text-sm font-medium uppercase tracking-[0.26em] text-[#174B3D]">Services</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl lg:text-[4rem] lg:leading-[1.02]">
            Cleaning services designed for real homes, busy schedules, and polished results.
          </h1>
          <p className="max-w-3xl text-base leading-7 text-[#111827]/70 sm:text-lg">
            Explore the full range of JB Cleaning services, from regular home upkeep to specialist one-off cleans.
            Each service card expands for a quick snapshot of what it covers.
          </p>
          <a
            href={companyProfile.quoteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-12 w-fit items-center justify-center rounded-xl bg-[#174B3D] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Get a Quote
          </a>
        </div>
      </section>

      <section className="w-full bg-[linear-gradient(90deg,#174B3D_0%,#295f50_18%,#dfe9e4_40%,#ffffff_60%,#ffffff_100%)] px-4 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-10 lg:px-8 lg:pb-16 lg:pt-12">
        <div className="mx-auto grid w-full max-w-6xl gap-5 lg:grid-cols-2">
          {serviceItems.map((service, index) => {
            const isGreen = index % 2 === 1;

            return (
              <article
                key={service.name}
                className={`rounded-[2rem] border px-6 py-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)] transition-all duration-300 sm:px-7 sm:py-7 ${
                  isGreen
                    ? "border-[#174B3D]/20 bg-[#174B3D] text-white"
                    : "border-[#174B3D]/10 bg-white text-[#111827]"
                }`}
              >
                <div className="flex w-full items-start justify-between gap-4 text-left">
                  <div>
                    <p
                      className={`text-xs font-medium uppercase tracking-[0.22em] ${
                        isGreen ? "text-[#B9F15B]" : "text-[#174B3D]/62"
                      }`}
                    >
                      Service {index + 1}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-[1.9rem]">{service.name}</h2>
                    <p className={`mt-3 max-w-xl text-sm leading-6 ${isGreen ? "text-white/76" : "text-[#111827]/70"}`}>
                      {service.summary}
                    </p>
                  </div>
                </div>

                <div className={`mt-5 border-t pt-5 ${isGreen ? "border-white/12" : "border-[#174B3D]/10"}`}>
                  <p className={`text-sm leading-6 ${isGreen ? "text-white/82" : "text-[#111827]/72"}`}>
                    {service.details}
                  </p>
                  <ul className="mt-4 grid gap-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${
                            isGreen ? "bg-[#B9F15B]" : "bg-[#174B3D]"
                          }`}
                          aria-hidden
                        />
                        <span className={`text-sm leading-6 ${isGreen ? "text-white/82" : "text-[#111827]/72"}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
