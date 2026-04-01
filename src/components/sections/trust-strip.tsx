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
  const ribbonItems = [...trustMarkerItems, ...trustMarkerItems];

  return (
    <section
      id="trust"
      aria-label="Trust markers"
      className="overflow-hidden rounded-xl border border-slate-200 bg-white px-3 py-1.5 sm:px-4 sm:py-2"
    >
      <div className="overflow-hidden">
        <ul aria-label="Credibility highlights" className="trust-ribbon-track flex w-max items-center gap-3 sm:gap-4">
          {ribbonItems.map((marker, index) => {
            const Icon = trustMarkerIcons[marker.iconKey];
            const label = marker.isPlaceholder
              ? marker.iconKey === "clock-availability"
                ? "Collection availability"
                : marker.iconKey === "stars-reviews"
                  ? "Review proof"
                  : marker.iconKey === "licence-compliance"
                    ? "Compliance details"
                    : marker.label
              : marker.label;
            const detail = marker.isPlaceholder
              ? marker.iconKey === "clock-availability"
                ? "Availability details pending confirmation."
                : "Proof pending confirmation."
              : marker.detail;

            return (
              <li key={`${marker.id}-${index}`} className="shrink-0 py-0.5">
                <span className="inline-flex w-fit max-w-[36rem] items-center gap-2 overflow-hidden rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2 text-xs font-medium text-slate-700 sm:text-sm">
                  <Icon size={14} className="shrink-0 text-slate-500" aria-hidden="true" />
                  <span className="truncate whitespace-nowrap leading-none text-slate-800">
                    {label}
                    <span className="mx-1.5 text-slate-400" aria-hidden="true">
                      •
                    </span>
                    <span className="font-normal text-slate-600">{detail}</span>
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
