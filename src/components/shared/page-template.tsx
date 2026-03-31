import Link from "next/link";

import { companyProfile } from "@/data/company";
import { CallButton } from "@/components/shared/call-button";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

type IntroBlockProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

type InfoSection = {
  title: string;
  body: string;
  bullets?: string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

type ContentTemplateProps = {
  intro: IntroBlockProps;
  sections: InfoSection[];
  faqItems?: FaqItem[];
  ctaLabel?: string;
};

export function IntroBlock({ eyebrow, title, description }: IntroBlockProps): JSX.Element {
  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-8">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">{eyebrow}</p> : null}
      <h1 className="mt-2 text-3xl font-bold text-slate-900">{title}</h1>
      <p className="mt-3 max-w-3xl text-sm text-slate-600">{description}</p>
    </section>
  );
}

export function CtaRow({ label = "Need a fast quote?" }: { label?: string }): JSX.Element {
  return (
    <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6">
      <p className="text-sm font-semibold text-emerald-900">{label}</p>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <CallButton phoneNumber={companyProfile.phoneNumber} label={companyProfile.phoneLabel} variant="solid" />
        <WhatsAppButton
          number={companyProfile.whatsappNumber}
          message={companyProfile.whatsappDefaultMessage}
          label={companyProfile.whatsappLabel}
          variant="solid"
        />
        <Link
          href={companyProfile.quoteHref}
          className="inline-flex items-center justify-center rounded-xl border border-slate-900 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
        >
          Get quote form
        </Link>
      </div>
    </section>
  );
}

function SectionBlock({ title, body, bullets }: InfoSection): JSX.Element {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <h2 className="text-xl font-bold text-slate-900">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
      {bullets?.length ? (
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" aria-hidden />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function FaqSubset({ items }: { items: FaqItem[] }): JSX.Element {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <h2 className="text-xl font-bold text-slate-900">Quick FAQs</h2>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <details key={item.question} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.question}</summary>
            <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ContentTemplate({ intro, sections, faqItems, ctaLabel }: ContentTemplateProps): JSX.Element {
  return (
    <main className="section-frame space-y-6 pb-24 sm:pb-8">
      <IntroBlock {...intro} />
      <CtaRow label={ctaLabel} />
      <section className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <SectionBlock key={section.title} {...section} />
        ))}
      </section>
      {faqItems?.length ? <FaqSubset items={faqItems} /> : null}
      <CtaRow label="Ready to clear space in the West Midlands?" />
    </main>
  );
}

export type { FaqItem, InfoSection };
