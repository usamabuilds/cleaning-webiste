import { trustMarkerItems } from "@/data/company";
import type { TrustMarkerItem } from "@/data/company";
import {
  Clock3,
  MapPin,
  ShieldCheck,
  Star,
  type LucideIcon,
  Users,
} from "lucide-react";

const trustMarkerIcons: Record<TrustMarkerItem["iconKey"], LucideIcon> = {
  "licence-compliance": ShieldCheck,
  "map-coverage": MapPin,
  "clock-availability": Clock3,
  "stars-reviews": Star,
  "labour-service-inclusion": Users,
};

export function TrustStrip(): JSX.Element {
  return (
    <section id="trust" aria-label="Trust markers" className="rounded-xl border border-slate-200 bg-white px-3 py-2 sm:px-4">
      <ul className="flex snap-x snap-mandatory gap-2 overflow-x-auto text-xs font-medium text-slate-700 sm:text-sm md:flex-wrap md:overflow-visible md:snap-none">
        {trustMarkerItems.map((marker) => {
          const Icon = trustMarkerIcons[marker.iconKey];
          const detail = marker.isPlaceholder ? "Proof pending confirmation." : marker.detail;

          return (
            <li
              key={marker.id}
              className="shrink-0 snap-start rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
            >
              <span className="inline-flex items-start gap-1.5">
                <Icon size={14} className="text-slate-500" aria-hidden="true" />
                <span className="leading-tight">
                  <span className="block text-slate-800">{marker.label}</span>
                  <span className="block text-[11px] font-normal text-slate-600 sm:text-xs">{detail}</span>
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
