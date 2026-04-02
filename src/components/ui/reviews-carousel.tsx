"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReviewItem } from "@/data/reviews";
import { ReviewCard } from "@/components/ui/review-card";

type ReviewsCarouselProps = {
  items: ReadonlyArray<ReviewItem>;
};

export function ReviewsCarousel({ items }: ReviewsCarouselProps): JSX.Element {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number): void => {
    const clampedIndex = Math.max(0, Math.min(index, items.length - 1));
    const track = trackRef.current;

    if (!track) return;

    const card = track.children[clampedIndex] as HTMLElement | undefined;
    if (!card) return;

    card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActiveIndex(clampedIndex);
  };

  const handleScroll = (): void => {
    const track = trackRef.current;
    if (!track) return;

    const midpoint = track.scrollLeft + track.clientWidth / 2;
    const nextIndex = Array.from(track.children).findIndex((child) => {
      const card = child as HTMLElement;
      return card.offsetLeft <= midpoint && card.offsetLeft + card.offsetWidth >= midpoint;
    });

    if (nextIndex >= 0 && nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollToIndex(activeIndex - 1)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Previous review"
          disabled={activeIndex === 0}
        >
          <ChevronLeft size={16} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollToIndex(activeIndex + 1)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Next review"
          disabled={activeIndex === items.length - 1}
        >
          <ChevronRight size={16} aria-hidden="true" />
        </button>
      </div>

      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((review) => (
          <div key={review.id} className="min-w-[85%] snap-start sm:min-w-[48%] lg:min-w-[32%]">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToIndex(index)}
            className={`h-2.5 rounded-full transition ${index === activeIndex ? "w-6 bg-emerald-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
