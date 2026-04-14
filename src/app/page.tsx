import Image from "next/image";

import { HeroSection } from "@/components/sections/hero-section";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/JB+Cleaning/@52.4617708,-1.7498991,17.03z/data=!4m8!3m7!1s0x4870b0ec37268ffd:0xf58878e539b27007!8m2!3d52.4617811!4d-1.7473987!9m1!1b1!16s%2Fg%2F11cp78pr80?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D";

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
                At <span className="text-[#174B3D]">JB Cleaning</span>, We Believe A Clean Space is Happy Space.
                With Years Of Experience In Residential &amp; Commercial Cleaning.
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-6 text-[#111827]/72 sm:text-base">
                We&apos;re more than just cleaners. We&apos;re your trusted local team for fresh, tidy homes and
                reliable cleaning support, with careful attention to detail and a service-first approach.
              </p>

            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/experience.png"
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
                  src="/happykids.png"
                  alt="Happy family in a clean home"
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

      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] bg-transparent">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/ladyfull.png"
                alt="Professional cleaner smiling"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain object-center"
              />
            </div>
          </div>

          <div className="flex flex-col items-start">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#174B3D]">Why JB Cleaning</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
              Most requested cleaning services, tailored to how you live.
            </h2>
            <div className="mt-5 grid w-full max-w-2xl gap-3">
              <div className="rounded-[1.25rem] border border-[#174B3D]/10 bg-[#F5E6C8] px-5 py-4">
                <h3 className="text-lg font-semibold text-[#174B3D]">Domestic Cleaning</h3>
                <p className="mt-1 text-sm leading-6 text-[#111827]/72">
                  Keep your home consistently fresh, spotless, and easier to manage with reliable cleaning tailored
                  around your routine. From regular upkeep to deep cleans, we make busy homes feel under control
                  again.
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-[#174B3D]/10 bg-[#F5E6C8] px-5 py-4">
                <h3 className="text-lg font-semibold text-[#174B3D]">Commercial / Office Cleaning</h3>
                <p className="mt-1 text-sm leading-6 text-[#111827]/72">
                  Create a cleaner, sharper, more professional space for staff, clients, and day-to-day work. Our
                  flexible cleaning service helps your business stay hygienic, presentable, and ready to impress.
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-[#174B3D]/10 bg-[#F5E6C8] px-5 py-4">
                <h3 className="text-lg font-semibold text-[#174B3D]">End-of-Tenancy Cleaning</h3>
                <p className="mt-1 text-sm leading-6 text-[#111827]/72">
                  Leave the property looking clean, cared for, and ready for handover with a thorough top-to-bottom
                  service. Ideal for tenants, landlords, and agents who want a smoother move and a stronger final
                  impression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F8F7F2] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="pointer-events-none absolute left-[-8%] top-14 h-64 w-64 rounded-full border-[18px] border-[#B9F15B]/18" />
        <div className="pointer-events-none absolute right-[-10%] top-24 h-72 w-72 rounded-full border-[20px] border-[#B9F15B]/16" />
        <div className="pointer-events-none absolute inset-x-0 bottom-16 h-32 bg-[radial-gradient(circle_at_center,rgba(185,241,91,0.18),transparent_58%)]" />

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <div className="relative min-h-[10rem]">
            <div className="absolute left-[4%] top-0 h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
              <Image src="/ladyfull.png" alt="Happy JB Cleaning customer" fill sizes="64px" className="object-cover" />
            </div>
            <div className="absolute left-[24%] top-10 h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
              <Image src="/happykids.png" alt="JB Cleaning client family" fill sizes="80px" className="object-cover" />
            </div>
            <div className="absolute left-1/2 top-0 h-18 w-18 -translate-x-1/2 overflow-hidden rounded-full border-4 border-white shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
              <Image src="/experience.png" alt="Satisfied JB Cleaning client" fill sizes="72px" className="object-cover" />
            </div>
            <div className="absolute right-[26%] top-2 h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
              <Image src="/Professional cleaners tidying a living room.png" alt="JB Cleaning customer home" fill sizes="64px" className="object-cover" />
            </div>
            <div className="absolute right-[8%] top-12 h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
              <Image src="/ladyfull.png" alt="Returning JB Cleaning customer" fill sizes="80px" className="object-cover" />
            </div>

            <div className="mx-auto flex max-w-2xl flex-col items-center pt-28 text-center">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#174B3D]">Testimonials</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#174B3D] sm:text-5xl">Testimonials</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#111827]/68">
                See what customers say about booking JB Cleaning for regular cleans, deep cleaning, tenancy
                handovers, and fast turnaround jobs.
              </p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center rounded-full bg-[#174B3D] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#123b31]"
              >
                View Google reviews
              </a>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-[1.5rem] bg-white px-5 py-5 shadow-[0_14px_34px_rgba(15,23,42,0.08)] ring-1 ring-[#174B3D]/8">
              <p className="text-sm leading-7 text-[#111827]/74">
                &ldquo;We are a busy family of 4 and struggle to stay on top of deep cleaning. Julie put us in touch
                with our cleaner Clare who we wouldn&apos;t be without. She is punctual and works so hard when she is
                with us. Highly recommend JB Cleaning services to all.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-[#174B3D]">Nina Jones</p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-[#174B3D] underline underline-offset-4"
              >
                Read on Google
              </a>
            </article>

            <article className="rounded-[1.5rem] bg-white px-5 py-5 shadow-[0_14px_34px_rgba(15,23,42,0.08)] ring-1 ring-[#174B3D]/8">
              <p className="text-sm leading-7 text-[#111827]/74">
                &ldquo;Can highly recommend. Clare has been coming to me for ages. Professional, punctual, does a fab
                job. Really happy with JB Cleaning.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-[#174B3D]">Julie Bowker</p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-[#174B3D] underline underline-offset-4"
              >
                Read on Google
              </a>
            </article>

            <article className="rounded-[1.5rem] bg-white px-5 py-5 shadow-[0_14px_34px_rgba(15,23,42,0.08)] ring-1 ring-[#174B3D]/8">
              <p className="text-sm leading-7 text-[#111827]/74">
                &ldquo;I have been using JB Cleaning for a few months now and I am really pleased with the service. The
                team are reliable, thorough and leave my home sparkling every time. I would happily recommend!&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-[#174B3D]">T Thompson</p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-[#174B3D] underline underline-offset-4"
              >
                Read on Google
              </a>
            </article>

            <article className="rounded-[1.5rem] bg-white px-5 py-5 shadow-[0_14px_34px_rgba(15,23,42,0.08)] ring-1 ring-[#174B3D]/8">
              <p className="text-sm leading-7 text-[#111827]/74">
                &ldquo;An amazing job and great communication from Jenni and her team. Couldn&apos;t be happier with how
                my house was cleaned and excited to start the fortnightly cleaning journey. Thank you team JB
                Cleaning.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-[#174B3D]">Amy Bishop</p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-[#174B3D] underline underline-offset-4"
              >
                Read on Google
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
