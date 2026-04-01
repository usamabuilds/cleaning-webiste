import { CalendarCheck2, Camera, Truck, WalletCards } from "lucide-react";
import Image from "next/image";

import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { companyProfile } from "@/data/company";

type WorkflowStep = {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const workflowSteps: ReadonlyArray<WorkflowStep> = [
  {
    title: "Send Photos",
    description: "Share clear photos of the waste on WhatsApp so we can assess the job quickly.",
    Icon: Camera,
  },
  {
    title: "Get a Quote",
    description: "We review your photos and send a straightforward quote with no long back-and-forth.",
    Icon: WalletCards,
  },
  {
    title: "Pick a Slot",
    description: "Choose a collection time that fits your day and confirm it in minutes.",
    Icon: CalendarCheck2,
  },
  {
    title: "We Collect",
    description: "Our team arrives, loads the waste, and clears it from your property.",
    Icon: Truck,
  },
];

export function HowItWorksSection(): JSX.Element {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <h2 id="how-it-works-heading" className="text-2xl font-bold text-slate-900">
        How It Works
      </h2>
      <p className="mt-2 text-sm text-slate-600">A simple 4-step process to get a fast collection quote and booking slot.</p>

      <ol className="mt-6 grid gap-4 sm:grid-cols-2" aria-label="How our quote and collection process works">
        {workflowSteps.map(({ title, description, Icon }, index) => (
          <li key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Step {index + 1}</p>
                <h3 className="mt-1 text-base font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm text-slate-700">{description}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <figure className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-2 sm:p-3">
        <Image
          src="/howitworks.png"
          alt="How our waste collection process works from quote to collection"
          width={1400}
          height={900}
          className="h-auto w-full rounded-xl object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 90vw, 1000px"
        />
      </figure>

      <div className="mt-8">
        <WhatsAppButton
          number={companyProfile.whatsappNumber}
          message="Hi, I need a fast quote and can send photos of the waste."
          label="Send Photos for a Fast Quote"
          className="w-full px-5 py-3 sm:w-auto"
        />
      </div>
    </section>
  );
}
