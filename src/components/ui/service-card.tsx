import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  summary: string;
  href: string;
  ctaLabel: "Learn More" | "Get Quote";
  Icon: LucideIcon;
};

export function ServiceCard({
  title,
  summary,
  href,
  ctaLabel,
  Icon,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-xl border border-slate-200 bg-slate-50/60 p-4 transition hover:border-emerald-400 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
      aria-label={`${title} - ${ctaLabel}`}
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50 text-emerald-700">
        <Icon size={18} aria-hidden="true" />
      </span>

      <h3 className="mt-3 text-base font-semibold leading-tight text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-600">{summary}</p>

      <span className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-700 transition group-hover:text-emerald-800">
        {ctaLabel}
        <span className="ml-1 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
          →
        </span>
      </span>
    </Link>
  );
}
