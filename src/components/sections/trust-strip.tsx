"use client";

import { useEffect, useMemo, useRef, useState, type FocusEvent } from "react";

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
  const trackRef = useRef<HTMLUListElement>(null);
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

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const activeItem = track.children[activeIndex] as HTMLElement | undefined;
    if (!activeItem) {
      return;
    }

    activeItem.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex, prefersReducedMotion]);

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
      className="overflow-hidden rounded-xl border border-slate-200 bg-white px-3 py-1.5 sm:px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={handleFocusWithin}
      onBlurCapture={handleBlurWithin}
    >
      <ul
        ref={trackRef}
        aria-label="Credibility highlights"
        className="flex snap-x snap-mandatory touch-pan-x flex-nowrap items-center gap-2 overflow-x-auto px-0.5 text-xs font-medium text-slate-700"
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
              className={`shrink-0 snap-center rounded-lg border px-2.5 py-1.5 transition-all duration-300 ${
                isActive
                  ? "border-slate-300 bg-slate-100 text-slate-900"
                  : "border-slate-200 bg-slate-50/80 text-slate-700"
              }`}
              aria-current={isActive ? "true" : undefined}
            >
              <span className="inline-flex max-w-[14rem] items-start gap-1.5">
                <Icon size={12} className="mt-0.5 shrink-0 text-slate-500" aria-hidden="true" />
                <span className="leading-tight">
                  <span className="block truncate text-slate-800">{label}</span>
                  <span className="block truncate text-[11px] font-normal text-slate-600">{detail}</span>
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
