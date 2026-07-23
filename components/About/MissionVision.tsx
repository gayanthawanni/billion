import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="w-full bg-white pb-16">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:max-w-[85%] lg:px-0">
        <div className="flex flex-col lg:flex-row rounded-[22px] border border-[#e8ecf0] bg-[#eff6ff]">

          {/* Mission */}
          <div className="flex flex-1 items-center justify-center gap-5 px-5 py-8 sm:px-8 lg:gap-6 lg:px-10 lg:py-10">
            <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-[#dbeafe] text-[#2563eb] lg:h-[104px] lg:w-[104px]">
              <Target className="h-9 w-9 lg:h-[50px] lg:w-[50px]" strokeWidth={2} />
            </div>
            <div className="max-w-[260px]">
              <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
                Our Mission
              </span>
              <h3 className="mt-1 text-[1.5rem] font-extrabold leading-tight text-[#2563eb]">
                Our Mission
              </h3>
              <p className="mt-3 text-[13px] leading-[1.75] text-slate-500">
                To simplify recruitment through innovative technology while
                creating meaningful connections between employers and job seekers.
              </p>
            </div>
          </div>

          {/* Inset divider — doesn't touch top/bottom edges */}
          <div className="hidden lg:block w-px bg-[#e8ecf0] my-8 self-stretch" />
          <div className="block lg:hidden h-px bg-[#e8ecf0] mx-10" />

          {/* Vision */}
          <div className="flex flex-1 items-center justify-center gap-5 px-5 py-8 sm:px-8 lg:gap-6 lg:px-10 lg:py-10">
            <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-[#dbeafe] text-[#2563eb] lg:h-[104px] lg:w-[104px]">
              <Eye className="h-9 w-9 lg:h-[50px] lg:w-[50px]" strokeWidth={2} />
            </div>
            <div className="max-w-[260px]">
              <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
                Our Vision
              </span>
              <h3 className="mt-1 text-[1.5rem] font-extrabold leading-tight text-[#2563eb]">
                Our Vision
              </h3>
              <p className="mt-3 text-[13px] leading-[1.75] text-slate-500">
                To become Sri Lanka&apos;s most trusted and innovative career
                platform, empowering individuals and organizations to achieve
                their full potential.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
