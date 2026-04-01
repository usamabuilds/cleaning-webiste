"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { CallButton } from "@/components/shared/call-button";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { companyProfile } from "@/data/company";
import { primaryNavigation } from "@/lib/site";

export function SiteHeader(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="z-sticky sticky top-0 border-b border-slate-200/70 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="section-frame py-1.5 sm:py-2">
        <div className="layer-content flex items-center justify-end gap-2 sm:gap-4">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="site-nav-panel"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>

        <div className="mt-1 hidden items-center justify-between gap-4 lg:flex">
          <nav aria-label="Primary" className="layer-content flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {primaryNavigation.map((link) => (
              <Link key={link.href} href={link.href} className="font-medium text-slate-700 transition-colors hover:text-slate-900">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <WhatsAppButton
              number={companyProfile.whatsappNumber}
              message={companyProfile.whatsappDefaultMessage}
              label={companyProfile.whatsappLabel}
              variant="outline"
              className="rounded-lg px-3 py-1.5"
            />
            <Link href={companyProfile.quoteHref} className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-emerald-800">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen ? (
        <div id="site-nav-panel" className="z-overlay border-t border-slate-200 bg-white lg:hidden">
          <div className="section-frame py-3">
            <nav aria-label="Mobile primary" className="layer-content flex flex-col gap-1">
              {primaryNavigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-3 grid grid-cols-3 gap-2">
              <CallButton phoneNumber={companyProfile.phoneNumber} label="Call" variant="outline" className="rounded-lg px-2 py-2 text-xs" />
              <WhatsAppButton
                number={companyProfile.whatsappNumber}
                message={companyProfile.whatsappDefaultMessage}
                label="WhatsApp"
                variant="outline"
                className="rounded-lg px-2 py-2 text-xs"
              />
              <Link
                href={companyProfile.quoteHref}
                className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-2 py-2 text-center text-xs font-semibold text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Quote
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
