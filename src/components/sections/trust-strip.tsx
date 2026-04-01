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
  const resumeTimeoutRef = useRef<number | null>(null);

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
    return () => {
      if (resumeTimeoutRef.current !== null) {
        window.clearTimeout(resumeTimeoutRef.current);
      }
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

  const pauseAutoRotationBriefly = (): void => {
    setIsPaused(true);

    if (resumeTimeoutRef.current !== null) {
      window.clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false);
      resumeTimeoutRef.current = null;
    }, ROTATION_INTERVAL_MS);
  };

  const showPreviousMarker = (): void => {
    setActiveIndex((previousIndex) =>
      previousIndex === 0 ? trustMarkerItems.length - 1 : previousIndex - 1,
    );
    pauseAutoRotationBriefly();
  };

  const showNextMarker = (): void => {
    setActiveIndex((previousIndex) =>
      previousIndex === trustMarkerItems.length - 1 ? 0 : previousIndex + 1,
    );
    pauseAutoRotationBriefly();
  };

  const displayIndex = prefersReducedMotion ? 0 : activeIndex;

  return (
    <section
      id="trust"
      aria-label="Trust markers"
      className="overflow-hidden rounded-xl border border-slate-200 bg-white px-3 py-1.5 sm:px-4 sm:py-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={handleFocusWithin}
      onBlurCapture={handleBlurWithin}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="overflow-hidden sm:flex-1">
          <ul
            aria-label="Credibility highlights"
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${displayIndex * 100}%)` }}
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
            const isActive = index === displayIndex;

              return (
                <li
                  key={marker.id}
                  className="flex w-full shrink-0 justify-center px-1"
                  aria-current={isActive ? "true" : undefined}
                  aria-hidden={!isActive}
                >
                  <span
                    className={`inline-flex w-fit max-w-[36rem] items-center gap-2 overflow-hidden rounded-lg border px-3 py-2 text-xs font-medium sm:text-sm ${
                      isActive
                        ? "border-slate-300 bg-slate-100 text-slate-900"
                        : "border-slate-200 bg-slate-50/80 text-slate-700"
                    }`}
                  >
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
        <div className="flex items-center justify-center gap-1 sm:justify-end">
          <button
            type="button"
            aria-label="Previous trust marker"
            onClick={showPreviousMarker}
            className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-slate-300 bg-white px-2 text-xs font-medium text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
          >
            Prev
          </button>
          <button
            type="button"
            aria-label="Next trust marker"
            onClick={showNextMarker}
            className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-slate-300 bg-white px-2 text-xs font-medium text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
