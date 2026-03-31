"use client";

import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";
import { Menu, Phone, X } from "lucide-react";

import { companyProfile } from "@/data/company";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/areas-served", label: "Areas Served" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/get-a-quote", label: "Get a Quote" },
] as const;

function CtaLink({
  href,
  children,
  className,
}: {
  href?: string;
  children: ReactNode;
  className: string;
}) {
  const disabled = !href;

  return (
    <a
      href={href ?? "#"}
      aria-disabled={disabled}
      className={`${className} ${disabled ? "cursor-not-allowed opacity-70" : ""}`}
      onClick={(event) => {
        if (disabled) {
          event.preventDefault();
        }
      }}
    >
      {children}
    </a>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="z-sticky sticky top-0 border-b border-slate-200/70 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="section-frame py-2 sm:py-3">
        <div className="layer-content flex items-center justify-between gap-2 sm:gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-2 rounded-md px-1 py-2 text-left">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-emerald-700/20 bg-emerald-700/10 text-xs font-semibold text-emerald-900">
              Logo
            </span>
            <span className="truncate text-sm font-semibold text-slate-900 sm:text-base">{companyProfile.brandName}</span>
          </Link>

          <div className="flex items-center gap-2">
            <CtaLink
              href={companyProfile.phoneHref}
              className="inline-flex items-center gap-1 rounded-lg border border-emerald-700/20 bg-emerald-700/10 px-2.5 py-2 text-xs font-semibold text-emerald-900 sm:px-3"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden />
              <span className="hidden sm:inline">{companyProfile.phoneLabel}</span>
              <span className="sm:hidden">Call</span>
            </CtaLink>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="site-nav-panel"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>
          </div>
        </div>

        <div className="mt-2 hidden items-center justify-between gap-4 lg:flex">
          <nav aria-label="Primary" className="layer-content flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="font-medium text-slate-700 transition-colors hover:text-slate-900">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <CtaLink
              href={companyProfile.whatsappHref}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800"
            >
              {companyProfile.whatsappLabel}
            </CtaLink>
            <Link
              href={companyProfile.quoteHref}
              className="rounded-lg bg-emerald-700 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen ? (
        <div id="site-nav-panel" className="z-overlay border-t border-slate-200 bg-white lg:hidden">
          <div className="section-frame py-3">
            <nav aria-label="Mobile primary" className="layer-content flex flex-col gap-1">
              {navLinks.map((link) => (
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
              <CtaLink
                href={companyProfile.phoneHref}
                className="rounded-lg border border-slate-300 px-2 py-2 text-center text-xs font-semibold text-slate-800"
              >
                Call
              </CtaLink>
              <CtaLink
                href={companyProfile.whatsappHref}
                className="rounded-lg border border-slate-300 px-2 py-2 text-center text-xs font-semibold text-slate-800"
              >
                WhatsApp
              </CtaLink>
              <Link
                href={companyProfile.quoteHref}
                className="rounded-lg bg-emerald-700 px-2 py-2 text-center text-xs font-semibold text-white"
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
