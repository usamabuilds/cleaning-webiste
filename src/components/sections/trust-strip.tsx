import { trustMarkerItems } from "@/data/company";

export function TrustStrip(): JSX.Element {
  return (
    <section id="trust" aria-label="Trust markers" className="rounded-xl border border-slate-200 bg-white px-3 py-2 sm:px-4">
      <ul className="flex snap-x snap-mandatory gap-2 overflow-x-auto text-xs font-medium text-slate-700 sm:text-sm md:flex-wrap md:overflow-visible md:snap-none">
        {trustMarkerItems.map((marker) => (
          <li
            key={marker.id}
            className="shrink-0 snap-start whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-3 py-1"
          >
            {marker.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
