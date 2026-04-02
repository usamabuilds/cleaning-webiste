import { Star } from "lucide-react";
import type { ReviewItem } from "@/data/reviews";

type ReviewCardProps = {
  review: ReviewItem;
};

export function ReviewCard({ review }: ReviewCardProps): JSX.Element {
  return (
    <article className="h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-slate-900">{review.customerLabel}</p>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
          Placeholder
        </span>
      </div>

      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-emerald-700">
        {review.serviceLabel}
      </p>

      <div className="mt-3 flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={`${review.id}-star-${index}`}
            size={16}
            className={index < review.rating ? "fill-amber-400 text-amber-400" : "text-slate-300"}
            aria-hidden="true"
          />
        ))}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">{review.quote}</p>
    </article>
  );
}
