import Link from "next/link";

import { companyProfile } from "@/data/company";
import { primaryNavigation } from "@/lib/site";

export function SiteFooter(): JSX.Element {
  return (
    <footer className="border-t border-slate-700 bg-slate-950 text-slate-100">
      <div className="section-frame py-10">
        <div className="layer-content space-y-8">
          <div className="space-y-3">
            <p className="text-lg font-semibold text-white">{companyProfile.brandName}</p>
            <p className="max-w-prose text-sm text-slate-300">
              Licensed waste collection and eco-friendly disposal service for homes and businesses across the West Midlands.
              Service details can be updated as business information is confirmed.
            </p>
          </div>

          <nav aria-label="Footer quick links" className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Quick links</h2>
            <ul className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
              {primaryNavigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex rounded-md px-1 py-1 text-slate-200 underline-offset-2 hover:text-white hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="border-t border-slate-700 pt-4 text-xs text-slate-400">
            © {new Date().getFullYear()} {companyProfile.brandName}. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-2 border-t border-slate-800 pt-3 text-xs text-slate-500">
            <span>Built by Muhammad</span>
            <Link
              href="https://www.linkedin.com/in/muhammad-usama-3289961b4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Muhammad on LinkedIn"
              className="inline-flex items-center text-slate-400 transition-colors hover:text-slate-200"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.28 4.97c0 1.08.88 1.97 1.97 1.97a1.98 1.98 0 0 0 0-3.94ZM20 13.4c0-3.06-1.64-4.48-3.83-4.48-1.77 0-2.56.98-3 1.67V8.5H9.8V20h3.38v-5.7c0-1.5.28-2.96 2.15-2.96 1.84 0 1.87 1.72 1.87 3.05V20h3.38l.02-6.6Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
