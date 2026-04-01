import Link from "next/link";

import { ROUTES } from "@/lib/site";

const servedTowns: ReadonlyArray<string> = [
  "Wednesbury",
  "Birmingham",
  "Walsall",
  "Wolverhampton",
  "West Midlands",
];

const coveragePoints: ReadonlyArray<{ name: string; positionClassName: string }> = [
  { name: "Wednesbury", positionClassName: "left-[42%] top-[34%]" },
  { name: "Birmingham", positionClassName: "left-[56%] top-[52%]" },
  { name: "Walsall", positionClassName: "left-[60%] top-[28%]" },
  { name: "Wolverhampton", positionClassName: "left-[33%] top-[24%]" },
];

export function AreasSection(): JSX.Element {
  return (
    <section id="areas-served" aria-labelledby="areas-served-heading" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-8">
        <div>
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
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-5 shadow-sm">
          <div className="pointer-events-none absolute -right-12 -top-14 h-40 w-40 rounded-full bg-emerald-200/30 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-12 left-6 h-32 w-32 rounded-full bg-slate-300/30 blur-3xl" aria-hidden="true" />

          <div className="relative aspect-[4/3] rounded-xl border border-white/70 bg-white/70 p-4 shadow-inner">
            <div className="absolute inset-4 rounded-lg border border-emerald-100/80" aria-hidden="true" />
            <div className="absolute left-[18%] top-[20%] h-[62%] w-[64%] rounded-[45%] border border-emerald-200/80 bg-emerald-50/50" aria-hidden="true" />
            <div className="absolute left-[26%] top-[26%] h-[50%] w-[50%] rounded-full border border-emerald-300/70" aria-hidden="true" />
            <div className="absolute left-[34%] top-[34%] h-[34%] w-[34%] rounded-full border border-dashed border-emerald-400/80" aria-hidden="true" />
            <div className="absolute left-[29%] top-[37%] h-px w-[42%] -rotate-[12deg] bg-emerald-300/60" aria-hidden="true" />
            <div className="absolute left-[35%] top-[48%] h-px w-[30%] rotate-[18deg] bg-emerald-300/60" aria-hidden="true" />

            {coveragePoints.map((point) => (
              <div key={point.name} className={`absolute ${point.positionClassName} -translate-x-1/2 -translate-y-1/2`}>
                <span className="block h-2.5 w-2.5 rounded-full bg-emerald-600 ring-4 ring-emerald-100" aria-hidden="true" />
                <span className="mt-2 inline-block rounded-full border border-emerald-200 bg-white/95 px-2 py-1 text-[11px] font-semibold text-slate-700 shadow-sm">
                  {point.name}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">West Midlands Coverage</p>
        </div>
      </div>
    </section>
  );
}
