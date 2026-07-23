import Image from "next/image";

export default function NeedHelp() {
  return (
    <section className="mx-auto max-w-[88%] overflow-hidden rounded-[16px] bg-gradient-to-r from-[#0755df] via-[#0875f1] to-[#0b98ea] px-6 py-5 shadow-[0_12px_28px_rgba(37,99,235,0.18)] sm:px-8">
      <div className="grid items-center gap-6 lg:grid-cols-[18%_1fr_36%]">
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/contact/2.webp"
            alt="Jobs360 support illustration"
            width={260}
            height={140}
            className="h-[110px] w-auto object-contain sm:h-[130px]"
          />
        </div>

        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-extrabold text-white sm:text-[30px]">
            Need help with hiring or your next opportunity?
          </h2>
          <p className="mt-3 text-[15px] font-medium text-white/80">
            We&apos;re here to support you every step of the way.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
          <button className="h-[54px] rounded-lg bg-white px-12 text-[15px] font-extrabold text-blue-600 shadow-sm transition hover:bg-blue-50">
            Browse Jobs
          </button>
          <button className="h-[54px] rounded-lg border-2 border-white/35 bg-white/5 px-12 text-[15px] font-extrabold text-white transition hover:bg-white/10">
            Post a Job
          </button>
        </div>
      </div>
    </section>
  );
}
