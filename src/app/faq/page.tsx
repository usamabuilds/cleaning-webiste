import { companyProfile } from "@/data/company";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "What is included in a regular cleaning service?",
    answer:
      "Regular cleaning usually covers dusting, vacuuming, mopping, wiping surfaces, cleaning kitchens, and tidying bathrooms.",
  },
  {
    question: "How is a deep clean different from a regular clean?",
    answer:
      "A deep clean is more detailed and time-intensive. It targets built-up dirt, neglected areas, and places not usually covered in routine cleaning.",
  },
  {
    question: "Do you bring your own cleaning supplies and equipment?",
    answer:
      "Most cleaning services do, but this should be confirmed at booking in case any specialist products or access requirements apply.",
  },
  {
    question: "What is included in an end of tenancy clean?",
    answer:
      "End of tenancy cleaning usually includes a full property clean, focusing on kitchens, bathrooms, floors, surfaces, and areas that need to be left in a presentable condition.",
  },
  {
    question: "Can I book a one-off clean instead of a regular service?",
    answer:
      "Yes. One-off cleaning is suitable if you need help before guests arrive, after an event, or when the home needs a reset without an ongoing plan.",
  },
  {
    question: "Do you offer cleaning for Airbnb and short-term rental properties?",
    answer:
      "Yes. Airbnb and short-term rental cleaning is designed for quick turnarounds so the property is cleaned, reset, and ready for the next guest.",
  },
  {
    question: "Can I add extras like oven, fridge, or interior window cleaning to my booking?",
    answer:
      "Yes. These are commonly offered as add-on services and can usually be included alongside a main cleaning visit.",
  },
];

export default function FaqPage() {
  return (
    <main className="space-y-8 pb-24 sm:pb-8">
      <section className="w-full bg-[#F8F7F2] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#174B3D]">FAQ</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl lg:text-[4rem] lg:leading-[1.02]">
            Answers to common questions about booking cleaning services.
          </h1>
          <p className="max-w-3xl text-base leading-7 text-[#111827]/70 sm:text-lg">
            Clear, practical information about what is included, how services differ, and what can usually be added to
            your booking.
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

      <section className="w-full bg-[#F8F7F2] px-4 pb-14 pt-2 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
          <div className="grid gap-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[1.75rem] border border-[#174B3D]/10 bg-white px-6 py-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <span className="text-lg font-semibold tracking-tight text-[#111827]">{item.question}</span>
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#174B3D]/[0.05] text-[#174B3D] transition-transform duration-300 group-open:rotate-180">
                    <span className="text-lg leading-none">⌄</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-4xl pr-12 text-sm leading-7 text-[#111827]/72 sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
