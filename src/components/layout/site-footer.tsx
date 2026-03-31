import Link from "next/link";

import { CallButton } from "@/components/shared/call-button";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { companyProfile } from "@/data/company";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/house-clearance", label: "House Clearance" },
  { href: "/bulky-waste-furniture-collection", label: "Bulky Waste & Furniture" },
  { href: "/garden-shed-garage-clearance", label: "Garden, Shed & Garage" },
  { href: "/commercial-waste-cardboard-collection", label: "Commercial Waste" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/areas-served", label: "Areas Served" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: companyProfile.quoteHref, label: "Get a Quote" },
] as const;

const legalLinks = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/licence-compliance", label: "Licence Compliance" },
] as const;

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
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex rounded-md px-1 py-1 text-slate-200 underline-offset-2 hover:text-white hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Contact</h2>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <CallButton
                phoneNumber={companyProfile.phoneNumber}
                label="Tap to call"
                variant="outline"
                className="w-full border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
              />
              <WhatsAppButton
                number={companyProfile.whatsappNumber}
                message={companyProfile.whatsappDefaultMessage}
                label="WhatsApp"
                variant="outline"
                className="w-full border-emerald-300 bg-emerald-700 text-white hover:bg-emerald-800"
              />
            </div>
          </div>

          <nav aria-label="Legal links" className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Legal</h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex rounded-md px-1 py-1 text-slate-300 underline-offset-2 hover:text-white hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="border-t border-slate-700 pt-4 text-xs text-slate-400">
            © {new Date().getFullYear()} {companyProfile.brandName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
