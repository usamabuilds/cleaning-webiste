import { CtaRow, IntroBlock } from "@/components/shared/page-template";
import { companyProfile } from "@/data/company";

export default function LicenceCompliancePage(): JSX.Element {
  return (
    <main className="section-frame space-y-6 pb-24 sm:pb-8">
      <IntroBlock
        eyebrow="Legal"
        title="Licence and compliance"
        description="Our collections are structured around licensed waste handling practices with clear domestic and commercial job separation."
      />

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 text-sm text-slate-700">
        <h2 className="text-xl font-bold text-slate-900">Compliance summary</h2>
        <p>Licence reference: {companyProfile.licenceReference}</p>
        <p>Placeholder: add regulator details, registration checks, and waste transfer documentation process.</p>
        <p>Placeholder: add guidance on prohibited waste streams and escalation paths for specialist waste types.</p>
      </section>

      <CtaRow label="Need compliance details for your site? Contact us." />
    </main>
  );
}
