export default function Home() {
  const coreServices = [
    {
      title: "House Clearance",
      description: "Full or partial clear-outs for homes. Placeholder copy until service details are confirmed.",
    },
    {
      title: "Bulky Waste & Furniture Collection",
      description: "Collection of large items with responsible disposal and recycling routes.",
    },
    {
      title: "Garden, Shed & Garage Clearance",
      description: "Clearance support for outdoor spaces and storage areas.",
    },
    {
      title: "Commercial Waste & Cardboard Collection",
      description: "Simple collection options for local businesses and offices.",
    },
  ];

  const reasons = [
    "Licensed waste carrier (details to be added)",
    "Fast local response across the West Midlands",
    "Eco-focused sorting and recycling-first approach",
    "Cheaper-than-a-skip positioning (final copy to confirm)",
  ];

  const steps = [
    {
      title: "1) Send details",
      description: "Share your job details by WhatsApp, phone, or quote form.",
    },
    {
      title: "2) Get a quote",
      description: "Receive a clear quote based on what needs removing.",
    },
    {
      title: "3) Collection",
      description: "A team arrives, removes the waste, and leaves the space tidy.",
    },
  ];

  const faqs = [
    {
      question: "What types of waste do you remove?",
      answer: "Placeholder: add accepted and restricted waste types.",
    },
    {
      question: "Do you cover all of the West Midlands?",
      answer: "Placeholder: add confirmed areas and postcode coverage.",
    },
    {
      question: "Can I send photos for a quote?",
      answer: "Yes. Placeholder: add preferred method and response time.",
    },
  ];

  return (
    <main className="bg-stone-50 text-zinc-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Crucial Recycling</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            Fast, licensed rubbish removal and house clearance in the West Midlands.
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-zinc-700 sm:text-base">
            Lean placeholder copy for the main value proposition. Replace with final brand messaging.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href="#get-quote" className="rounded-xl bg-emerald-700 px-5 py-3 text-center text-sm font-semibold text-white">
              Get a Quote
            </a>
            <a href="tel:+440000000000" className="rounded-xl border border-zinc-300 px-5 py-3 text-center text-sm font-semibold">
              Call Now
            </a>
            <a href="#" className="rounded-xl border border-zinc-300 px-5 py-3 text-center text-sm font-semibold">
              WhatsApp Enquiry
            </a>
          </div>
        </section>

        <section className="rounded-2xl bg-emerald-900 p-4 text-sm text-emerald-50 sm:p-5">
          <ul className="grid gap-2 sm:grid-cols-3">
            <li>Licensed waste carrier</li>
            <li>Eco-friendly disposal routes</li>
            <li>Domestic & commercial clearances</li>
          </ul>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold">Core services</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {coreServices.map((service) => (
              <article key={service.title} className="rounded-xl border border-zinc-200 p-4">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-zinc-700">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold">Why choose us</h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700">
            {reasons.map((item) => (
              <li key={item} className="rounded-lg border border-zinc-200 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold">How it works</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {steps.map((step) => (
              <article key={step.title} className="rounded-xl border border-zinc-200 p-4">
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-zinc-700">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold">Areas served</h2>
          <p className="mt-3 text-sm text-zinc-700">
            West Midlands coverage. Placeholder: list confirmed towns/areas when available.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold">Reviews</h2>
          <p className="mt-3 text-sm text-zinc-700">
            Placeholder: add real customer reviews only after they are approved for publishing.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-xl border border-zinc-200 p-4">
                <h3 className="text-base font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm text-zinc-700">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="get-quote" className="rounded-2xl bg-zinc-900 p-6 text-zinc-100 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold">Ready to clear the space?</h2>
          <p className="mt-3 text-sm text-zinc-200">Final CTA placeholder. Encourage fast contact and photo-based quote requests.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href="#" className="rounded-xl bg-emerald-600 px-5 py-3 text-center text-sm font-semibold text-white">
              Request Quote
            </a>
            <a href="tel:+440000000000" className="rounded-xl border border-zinc-600 px-5 py-3 text-center text-sm font-semibold">
              Call Now
            </a>
            <a href="#" className="rounded-xl border border-zinc-600 px-5 py-3 text-center text-sm font-semibold">
              WhatsApp
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
