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

function TrustRibbonItems() {
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

        return (
          <li key={marker.id} className="shrink-0 py-0.5">
            <span className="trust-chip trust-chip-text text-xs font-medium sm:text-sm">
              <Icon size={14} className="trust-chip-icon shrink-0" aria-hidden="true" />
              <span className="truncate whitespace-nowrap leading-none trust-chip-title">
                {label}
              </span>
            </span>
          </li>
        );
      })}
    </>
  );
}

export function TrustStrip() {
  return (
    <section
      id="trust"
      aria-label="Trust markers"
      className="overflow-hidden rounded-xl border border-[#C9D6DF] bg-[#DCE6ED] px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:px-4 sm:py-2"
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
