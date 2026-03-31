import { CtaRow, IntroBlock } from "@/components/shared/page-template";

export default function PrivacyPolicyPage(): JSX.Element {
  return (
    <main className="section-frame space-y-6 pb-24 sm:pb-8">
      <IntroBlock
        eyebrow="Legal"
        title="Privacy policy"
        description="This page outlines how customer contact and quote information is handled for rubbish removal enquiries in the West Midlands."
      />

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 text-sm text-slate-700">
        <h2 className="text-xl font-bold text-slate-900">Information notice</h2>
        <p>Placeholder: add approved privacy policy wording covering enquiry data, photo uploads, contact preferences, and retention timelines.</p>
        <p>Placeholder: add lawful basis details, third-party processors, and customer rights request process.</p>
      </section>

      <CtaRow label="Questions about data use? Contact us directly." />
    </main>
  );
}
