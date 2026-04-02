"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { CallButton } from "@/components/shared/call-button";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { companyProfile } from "@/data/company";
import { primaryNavigation, ROUTES } from "@/lib/site";

export function SiteHeader(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="z-sticky sticky top-0 px-2 pt-2 sm:px-3 sm:pt-3">
      <div className="section-frame py-0">
        <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/78 shadow-[0_10px_28px_rgba(15,23,42,0.12),0_2px_8px_rgba(15,23,42,0.08)] ring-1 ring-slate-900/6 backdrop-blur-[5px] supports-[backdrop-filter]:bg-white/70">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.4)_36%,rgba(255,255,255,0.2)_100%)]" />
          <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-white/90" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.88),inset_0_-1px_0_rgba(148,163,184,0.14)]" />

          <div className="relative px-2 py-1.5 sm:px-3 sm:py-2">
            <div className="layer-content flex items-center justify-between gap-2 lg:hidden">
              <Link href={ROUTES.home} className="inline-flex items-center" aria-label="Go to homepage">
                <Image src="/logotransparent.png" alt="Crucial Recycling logo" width={180} height={56} className="h-8 w-auto sm:h-9" priority />
              </Link>

              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/75 bg-white/70 text-[#1F2A44] shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_1px_2px_rgba(15,23,42,0.08)] transition-colors hover:bg-white/85"
                aria-expanded={isMenuOpen}
                aria-controls="site-nav-panel"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMenuOpen((open) => !open)}
              >
                {isMenuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
              </button>
            </div>

            <div className="mt-1 hidden items-center justify-between gap-4 lg:flex">
              <div className="flex items-center gap-6">
                <Link href={ROUTES.home} className="inline-flex items-center" aria-label="Go to homepage">
                  <Image src="/logotransparent.png" alt="Crucial Recycling logo" width={200} height={62} className="h-10 w-auto" priority />
                </Link>

                <nav aria-label="Primary" className="layer-content flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                  {primaryNavigation.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="font-medium text-[#1F2A44] transition-colors hover:text-[#4F8C8D]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="flex items-center gap-2">
                <WhatsAppButton
                  number={companyProfile.whatsappNumber}
                  message={companyProfile.whatsappDefaultMessage}
                  label={companyProfile.whatsappLabel}
                  variant="outline"
                  className="rounded-xl border-white/75 bg-white/72 px-3 py-1.5 text-[#1F2A44] shadow-[inset_0_1px_0_rgba(255,255,255,0.82),0_1px_2px_rgba(15,23,42,0.06)] hover:bg-white/88"
                />
                <Link
                  href={companyProfile.quoteHref}
                  className="rounded-xl bg-emerald-700 px-3 py-1.5 text-sm font-semibold text-white shadow-[0_4px_10px_rgba(4,120,87,0.28)] transition-colors hover:bg-emerald-800"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>

          {isMenuOpen ? (
            <div id="site-nav-panel" className="relative z-panel border-t border-white/70 bg-white/80 lg:hidden">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.34)_100%)]" />
              <div className="section-frame relative py-3">
                <nav aria-label="Mobile primary" className="layer-content flex flex-col gap-1">
                  {primaryNavigation.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-xl px-3 py-2 text-sm font-medium text-[#1F2A44] transition-colors hover:bg-white/85 hover:text-[#4F8C8D]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  <CallButton phoneNumber={companyProfile.phoneNumber} label="Call" variant="outline" className="rounded-xl px-2 py-2 text-xs" />
                  <WhatsAppButton
                    number={companyProfile.whatsappNumber}
                    message={companyProfile.whatsappDefaultMessage}
                    label="WhatsApp"
                    variant="outline"
                    className="rounded-xl px-2 py-2 text-xs"
                  />
                  <Link
                    href={companyProfile.quoteHref}
                    className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-2 py-2 text-center text-xs font-semibold text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Quote
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
