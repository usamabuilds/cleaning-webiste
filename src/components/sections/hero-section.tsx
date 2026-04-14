import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full bg-[linear-gradient(180deg,#174B3D_0%,#174B3D_64%,#f8fafc_82%,#ffffff_100%)] px-4 pb-8 pt-6 text-white sm:px-6 sm:pb-10 lg:px-8 lg:pb-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center pt-8 text-center sm:pt-12 lg:pt-14">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.8rem]">
            House Cleaning
            <br />
            Services You Can Trust
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/78 sm:text-base">
            JB Cleaning provides reliable, high-quality home cleaning with flexible options for regular, deep,
            and one-off visits.
          </p>

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
