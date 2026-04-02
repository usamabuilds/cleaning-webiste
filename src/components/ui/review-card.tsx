import { Quote, Star } from "lucide-react";
import type { ReviewItem } from "@/data/reviews";

type ReviewCardProps = {
  review: ReviewItem;
};

export function ReviewCard({ review }: ReviewCardProps): JSX.Element {
  return (
    <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">{review.customerLabel}</p>
          <p className="mt-1 text-xs font-medium text-slate-500">Sample review content (placeholder)</p>
        </div>
        <Quote size={16} className="mt-0.5 text-emerald-700" aria-hidden="true" />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-800">
          {review.serviceLabel}
        </span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
          {review.highlight}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
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
