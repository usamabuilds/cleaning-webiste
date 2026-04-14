import { companyProfile } from "@/data/company";

type ServiceItem = {
  name: string;
  summary: string;
  includes: string[];
};

const serviceItems: ServiceItem[] = [
  {
    name: "Domestic Cleaning",
    summary: "Keep your home fresh, tidy, and easier to manage with reliable cleaning built around your routine.",
    includes: [
      "One-off Deep Cleans",
      "Weekly Housekeeping",
      "Fortnightly Housekeeping",
      "Carpet Cleaning",
      "Stain Removal",
      "Conservatory Cleaning",
      "Ironing",
      "Laundry Services",
    ],
  },
  {
    name: "Commercial Cleaning",
    summary:
      "Flexible cleaning for business spaces that need to stay clean, presentable, and ready for daily operations.",
    includes: [
      "Regular Commercial Cleaning",
      "Flexible Cleaning Contracts",
      "One-off Commercial Cleans",
      "Deep Cleans",
      "Builders' Cleans",
      "Commercial End-of-Tenancy Cleaning",
    ],
  },
  {
    name: "Office Cleaning",
    summary:
      "Keep your office clean, organised, and professional with a service that works around your business hours.",
    includes: [
      "Scheduled Office Cleaning",
      "Morning Cleaning",
      "Evening Cleaning",
      "Weekend Cleaning",
      "Custom Office Cleaning Plans",
      "Free Consultation",
    ],
  },
  {
    name: "End of Tenancy Cleaning",
    summary:
      "A thorough top-to-bottom clean for rented properties before handover, helping leave the right final impression.",
    includes: [
      "Bathroom Cleaning",
      "Bedroom Cleaning",
      "Living Room Cleaning",
      "Lounge Cleaning",
      "Hall Cleaning",
      "Stairs and Landing Cleaning",
      "Skirting, Sockets and Switches Cleaning",
      "Carpet Deep Cleaning",
      "Rug Cleaning",
    ],
  },
  {
    name: "After Builders Cleaning",
    summary:
      "Clear away dust, debris, and post-build mess with a detailed clean that gets the space ready to use again.",
    includes: [
      "Dust Removal",
      "Furniture Cleaning",
      "Hard Floor Polishing",
      "Floor Scrubbing",
      "Building Material Removal",
      "Wall Spot Cleaning",
      "Carpet Vacuuming",
      "Window Washing",
      "Surface Wipe-Downs",
    ],
  },
  {
    name: "Holiday Let Cleaning",
    summary:
      "Keep your short-stay property guest-ready with detailed changeover cleaning that supports a five-star experience.",
    includes: [
      "Full Changeover Cleaning",
      "Bin Emptying and Liner Replacement",
      "Bed Making",
      "Linen Replacement",
      "Towel Replacement",
      "Toiletry Restocking",
      "Laundry",
      "Ironing",
      "Washing Up",
      "Dishwasher Emptying / Stacking",
      "Inventory Checks",
      "Damage Reporting",
    ],
  },
  {
    name: "Ironing & Laundry Services",
    summary:
      "Simple, convenient ironing and laundry support for busy homes, holiday lets, and regular weekly needs.",
    includes: [
      "Clothing Ironing",
      "Bedding Ironing",
      "Garment Ironing",
      "Bedding Laundry",
      "Towel Laundry",
      "Collection Service",
      "Delivery Service",
      "Weekly Service",
      "Bi-Weekly Service",
      "Monthly Service",
      "One-off Service",
    ],
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
                  <ul className="grid gap-2">
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
