import Link from "next/link";

import { ROUTES } from "@/lib/site";

const servedTowns: ReadonlyArray<string> = [
  "Wednesbury",
  "Birmingham",
  "Walsall",
  "Wolverhampton",
  "West Midlands",
];

export function AreasSection(): JSX.Element {
  return (
    <section id="areas-served" aria-labelledby="areas-served-heading" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="max-w-2xl">
        <h2 id="areas-served-heading" className="text-2xl font-bold text-slate-900">
          Areas Served
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Local collections across Wednesbury, Birmingham, Walsall, Wolverhampton, and wider West Midlands routes.
        </p>
      </div>

      <ul className="mt-5 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3" aria-label="Towns and region we cover">
        {servedTowns.map((town) => (
          <li key={town} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-800">
            {town}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Link
          href={ROUTES.getAQuote}
          className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Get a Quote in Your Area
        </Link>
      </div>
    </section>
  );
}
