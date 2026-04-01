"use client";

import { useEffect, useMemo, useRef, useState } from "react";

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

const ROTATION_INTERVAL_MS = 4000;

export function TrustStrip(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const trackRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const updateItemWidth = (): void => {
      const track = trackRef.current;
      if (!track) {
        return;
      }

      const firstItem = track.children[0] as HTMLElement | undefined;
      const secondItem = track.children[1] as HTMLElement | undefined;

      if (!firstItem) {
        setItemWidth(0);
        return;
      }

      if (!secondItem) {
        setItemWidth(firstItem.getBoundingClientRect().width);
        return;
      }

      const gapAwareWidth = secondItem.getBoundingClientRect().left - firstItem.getBoundingClientRect().left;
      setItemWidth(gapAwareWidth);
    };

    updateItemWidth();
    window.addEventListener("resize", updateItemWidth);

    return () => {
      window.removeEventListener("resize", updateItemWidth);
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((previousIndex) => (previousIndex + 1) % trustMarkerItems.length);
    }, ROTATION_INTERVAL_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const translateX = useMemo(() => -(activeIndex * itemWidth), [activeIndex, itemWidth]);

  return (
    <section
      id="trust"
      aria-label="Trust markers"
      className="overflow-hidden rounded-xl border border-slate-200 bg-white px-3 py-2 sm:px-4"
    >
      <ul
        ref={trackRef}
        aria-label="Credibility highlights"
        className="flex flex-nowrap items-center gap-2 px-0.5 text-xs font-medium text-slate-700 transition-transform duration-500 ease-out sm:text-sm"
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {trustMarkerItems.map((marker) => {
          const Icon = trustMarkerIcons[marker.iconKey];
          const detail = marker.isPlaceholder ? "Proof pending confirmation." : marker.detail;

          return (
            <li
              key={marker.id}
              className="h-14 shrink-0 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
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
