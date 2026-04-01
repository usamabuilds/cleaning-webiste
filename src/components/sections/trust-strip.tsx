"use client";

import { useEffect, useMemo, useState, type FocusEvent } from "react";

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

const ROTATION_INTERVAL_MS = 3000;

export function TrustStrip(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const shouldAutoRotate = useMemo(
    () => !isPaused && !prefersReducedMotion && trustMarkerItems.length > 1,
    [isPaused, prefersReducedMotion],
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = (): void => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (!shouldAutoRotate) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setActiveIndex((previousIndex) => (previousIndex + 1) % trustMarkerItems.length);
    }, ROTATION_INTERVAL_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [activeIndex, shouldAutoRotate]);

  const handleFocusWithin = (): void => {
    setIsPaused(true);
  };

  const handleBlurWithin = (event: FocusEvent<HTMLElement>): void => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false);
    }
  };

  return (
    <section
      id="trust"
      aria-label="Trust markers"
      className="overflow-hidden rounded-xl border border-slate-200 bg-white px-3 py-2 sm:px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={handleFocusWithin}
      onBlurCapture={handleBlurWithin}
    >
      <ul
        aria-label="Credibility highlights"
        className="relative h-10"
      >
        {trustMarkerItems.map((marker, index) => {
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
          const isActive = index === activeIndex;

          return (
            <li
              key={marker.id}
              className={`absolute inset-0 flex items-center justify-center rounded-lg border px-3 transition-opacity duration-300 ${
                isActive
                  ? "border-slate-300 bg-slate-100 text-slate-900 opacity-100"
                  : "pointer-events-none border-slate-200 bg-slate-50/80 text-slate-700 opacity-0"
              }`}
              aria-current={isActive ? "true" : undefined}
              aria-hidden={!isActive}
            >
              <span className="inline-flex max-w-full items-center gap-2 overflow-hidden text-xs font-medium text-slate-700 sm:text-sm">
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
    </section>
  );
}
