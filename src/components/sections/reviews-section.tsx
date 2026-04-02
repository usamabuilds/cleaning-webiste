import Link from "next/link";
import { reviews } from "@/data/reviews";
import { ReviewsCarousel } from "@/components/ui/reviews-carousel";

export function ReviewsSection(): JSX.Element {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700">Reviews & Social Proof</p>
          <h2 id="reviews-heading" className="mt-2 text-2xl font-bold text-slate-900">Trusted for fast, clean, punctual clearances</h2>
          <p className="mt-2 text-sm text-slate-600">
            Placeholder sample review content is shown below for layout and UX only. Replace with real, permissioned testimonials before launch.
          </p>
        </div>

        <Link
          href="/reviews"
          className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-emerald-400 hover:text-emerald-700"
        >
          See More Reviews
        </Link>
      </div>

      <div className="mt-5 grid gap-2 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 text-sm text-emerald-900 sm:grid-cols-3">
        <p className="font-semibold">Sample trust row</p>
        <p>Average sample rating: 4.6 / 5</p>
        <p>Domestic + commercial service examples</p>
      </div>

      <div className="mt-6">
        <ReviewsCarousel items={reviews} />
      </div>
    </section>
  );
}
