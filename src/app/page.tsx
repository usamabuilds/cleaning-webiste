import Image from "next/image";
import Link from "next/link";

import { HeroSection } from "@/components/sections/hero-section";
import { companyProfile } from "@/data/company";

export default function Home() {
  return (
    <main className="space-y-6 pb-24 sm:pb-8">
      <HeroSection />

      <section className="w-full bg-[#F5E6C8] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:gap-10">
          <div className="grid gap-6 lg:grid-cols-[180px_minmax(0,1fr)] lg:items-start">
            <div className="pt-1">
              <p className="text-sm font-medium text-[#174B3D]">About Us</p>
            </div>

            <div className="px-1 py-1 sm:px-2">
              <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl lg:text-[3.25rem] lg:leading-[1.06]">
                At <span className="text-[#174B3D]">Mop &amp; Glow</span>, We Believe A Clean Space is Happy Space.
                With Years Of Experience In Residential &amp; Commercial Cleaning.
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-6 text-[#111827]/72 sm:text-base">
                We&apos;re more than just cleaners. We&apos;re your trusted local team for fresh, tidy homes and
                reliable cleaning support, with careful attention to detail and a service-first approach.
              </p>

              <Link
                href={companyProfile.quoteHref}
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#B9F15B] px-6 py-3 text-sm font-semibold text-[#174B3D] transition-transform hover:-translate-y-0.5"
              >
                Book My Cleaning Today
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/Professional cleaners tidying a living room.png"
                  alt="Cleaner tidying a living room"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <article className="flex min-h-[18rem] flex-col rounded-[1.75rem] bg-white px-6 py-6 text-[#174B3D] shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-4xl font-bold tracking-tight">10+</p>
                  <p className="mt-2 text-sm font-medium text-[#174B3D]/90">Years Of Experience</p>
                </div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#174B3D] text-lg text-white">
                  ↗
                </span>
              </div>

              <p className="mt-6 text-sm leading-6 text-[#174B3D]/72">
                With years of hands-on cleaning experience, we help homes and workplaces feel cleaner, calmer, and
                better cared for every day.
              </p>
            </article>

            <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/howitworks.png"
                  alt="Cleaning team working in a bright interior"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <article className="flex min-h-[18rem] flex-col rounded-[1.75rem] bg-[#174B3D] px-6 py-6 text-white shadow-[0_20px_48px_rgba(23,75,61,0.2)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-4xl font-bold tracking-tight text-[#B9F15B]">500+</p>
                  <p className="mt-2 text-sm font-medium text-white/92">Homes &amp; Offices Cleaned</p>
                </div>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg text-[#174B3D]">
                  ↗
                </span>
              </div>

              <p className="mt-6 text-sm leading-6 text-white/78">
                From sparkling kitchens to polished office spaces, our team delivers dependable cleaning with a tidy,
                professional finish.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
