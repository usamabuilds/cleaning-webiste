const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/JB+Cleaning/@52.4617708,-1.7498991,17.03z/data=!4m8!3m7!1s0x4870b0ec37268ffd:0xf58878e539b27007!8m2!3d52.4617811!4d-1.7473987!9m1!1b1!16s%2Fg%2F11cp78pr80?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D";

export default function ReviewsPage() {
  return (
    <main className="section-frame space-y-6 pb-24 sm:pb-8">
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">Reviews</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Customer feedback for JB Cleaning</h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-600">
          Public customer reviews linked to the Google listing. Open Google to browse the full set and leave your own
          feedback after your clean.
        </p>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center rounded-xl border border-slate-900 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
        >
          Open Google reviews
        </a>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-xl font-bold text-slate-900">Google reviews</h2>
        <p className="mt-2 text-sm text-slate-600">
          Review quotes have been removed from this page. Use the link below to view the latest feedback directly on
          Google.
        </p>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center rounded-xl border border-emerald-700 px-4 py-2.5 text-sm font-semibold text-emerald-800 transition-colors hover:bg-emerald-50"
        >
          View reviews on Google
        </a>
      </section>
    </main>
  );
}
