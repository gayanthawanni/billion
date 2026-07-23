import Image from "next/image";

export default function OurStory() {
  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:max-w-[85%] lg:px-0">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] xl:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col lg:pr-6">
            <span className="mb-3 text-sm font-bold uppercase tracking-widest text-[#2563eb]">
              Our Story
            </span>

            <h2 className="text-2xl font-extrabold leading-tight text-[#0f172a] lg:text-[2rem] xl:whitespace-nowrap">
              Empowering Careers Through Technology
            </h2>

            <p className="mt-5 text-sm font-semibold text-[#0f172a] lg:text-base">
              Jobs360.lk was created with a simple mission:
            </p>

            <p className="mt-2 text-base font-bold italic leading-8 text-[#2563eb] lg:text-lg">
              &ldquo;To make job searching and hiring easier, faster, and more accessible for everyone.&rdquo;
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-500 lg:text-base">
              The traditional recruitment process often involves lengthy procedures,
              limited visibility, and communication barriers. We recognised the need
              for a smarter solution that connects qualified candidates with employers
              in real time.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-500 lg:text-base">
              Today, Jobs360.lk serves as a comprehensive employment platform that
              enables job seekers to discover opportunities while helping businesses
              build high-performing teams.
            </p>
          </div>

          <div className="flex items-stretch justify-center">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-lg h-[280px] sm:h-[320px] lg:h-[360px] xl:h-[390px]">
              <Image
                src="/about/our-story.webp"
                alt="Jobs360.lk Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}