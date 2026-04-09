import Image from "next/image";
import Link from "next/link";

import { companyProfile } from "@/data/company";

export function HeroSection() {
  return (
    <section className="w-full bg-[#174B3D] px-4 pb-8 pt-6 text-white sm:px-6 sm:pb-10 lg:px-8 lg:pb-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center pt-8 text-center sm:pt-12 lg:pt-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#B9F15B]">Mop &amp; Glow</p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.8rem]">
            House Cleaning
            <br />
            Services You Can Trust
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/78 sm:text-base">
            Mop &amp; Glow provides reliable, high-quality home cleaning with flexible options for regular, deep,
            and one-off visits.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href={companyProfile.quoteHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#B9F15B] px-7 py-3 text-sm font-semibold text-[#174B3D] transition-transform hover:-translate-y-0.5"
            >
              Book A Cleaning Now
            </Link>
            <Link
              href={`tel:${companyProfile.phoneNumber}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#B9F15B]/70 px-7 py-3 text-sm font-medium text-[#B9F15B] transition-colors hover:bg-white/5"
            >
              {companyProfile.phoneNumber}
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.2)] ring-1 ring-white/10">
          <div className="relative aspect-[16/10] w-full sm:aspect-[16/9] lg:aspect-[16/8]">
            <Image
              src="/Professional cleaners tidying a living room.png"
              alt="Professional cleaners tidying a living room"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
