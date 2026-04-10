"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { companyProfile } from "@/data/company";
import { ROUTES } from "@/lib/site";

const headerNavigation = [
  { label: "Home", href: ROUTES.home },
  { label: "Services", href: ROUTES.services },
  { label: "FAQ", href: ROUTES.faq },
] as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`z-sticky sticky top-0 px-4 pt-[1.25rem] transition-[background-color,color,box-shadow,border-color] duration-300 sm:px-6 lg:px-8 ${
        isScrolled ? "bg-white text-[#174B3D] shadow-[0_12px_34px_rgba(15,23,42,0.08)]" : "bg-[#174B3D] text-white"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
        <Link href={ROUTES.home} className="inline-flex items-center gap-2.5" aria-label="Go to homepage">
          <span className={`h-4 w-4 rounded-full ${isScrolled ? "bg-[#174B3D]" : "bg-[#B9F15B]"}`} aria-hidden />
          <span className="leading-none">
            <span className={`block text-lg font-semibold tracking-tight ${isScrolled ? "text-[#174B3D]" : "text-white"}`}>
              Mop &amp; Glow
            </span>
            <span
              className={`block pt-1 text-[0.65rem] uppercase tracking-[0.32em] ${
                isScrolled ? "text-[#174B3D]/55" : "text-white/55"
              }`}
            >
              cleaning services
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className={`hidden items-center gap-7 text-sm lg:flex ${isScrolled ? "text-[#174B3D]/80" : "text-white/80"}`}
        >
          {headerNavigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${isScrolled ? "hover:text-[#174B3D]" : "hover:text-white"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className={`inline-flex h-12 w-12 items-center justify-center rounded-full transition-colors lg:hidden ${
              isScrolled
                ? "border border-[#174B3D]/12 bg-[#174B3D]/6 text-[#174B3D] hover:bg-[#174B3D]/10"
                : "border border-white/18 bg-white/6 text-white hover:bg-white/10"
            }`}
            aria-expanded={isMenuOpen}
            aria-controls="site-nav-panel"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="site-nav-panel"
          className={`mx-auto mt-4 w-full max-w-6xl rounded-[1.5rem] p-4 lg:hidden ${
            isScrolled ? "border border-[#174B3D]/10 bg-white" : "border border-white/10 bg-[#1B5545]"
          }`}
        >
          <nav aria-label="Mobile primary" className="flex flex-col gap-1.5">
            {headerNavigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-[#174B3D]/85 hover:bg-[#174B3D]/6 hover:text-[#174B3D]"
                    : "text-white/85 hover:bg-white/6 hover:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

        </div>
      ) : null}
    </header>
  );
}
