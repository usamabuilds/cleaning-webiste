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

function TrustRibbonItems(): JSX.Element {
  return (
    <>
      {trustMarkerItems.map((marker) => {
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
          <li key={marker.id} className="shrink-0 py-0.5">
            <span className="trust-chip text-xs font-medium text-slate-700 sm:text-sm">
              <Icon size={14} className="shrink-0 text-slate-500" aria-hidden="true" />
              <span className="truncate whitespace-nowrap leading-none trust-chip-title">
                {label}
                <span className="mx-1.5 text-slate-400" aria-hidden="true">
                  •
                </span>
                <span className="font-normal trust-chip-detail">{detail}</span>
              </span>
            </span>
          </li>
        );
      })}
    </>
  );
}

export function TrustStrip(): JSX.Element {
  return (
    <section
      id="trust"
      aria-label="Trust markers"
      className="overflow-hidden rounded-xl border border-slate-200 bg-white px-3 py-1.5 sm:px-4 sm:py-2"
    >
      <div className="trust-ribbon-viewport">
        <div className="trust-ribbon-track" role="presentation">
          <ul aria-label="Credibility highlights" className="trust-ribbon-set">
            <TrustRibbonItems />
          </ul>
          <ul aria-hidden="true" className="trust-ribbon-set trust-ribbon-set-clone">
            <TrustRibbonItems />
          </ul>
        </div>
      </div>
    </section>
  );
}
