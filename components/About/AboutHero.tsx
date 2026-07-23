"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, FileText, Users, Building2, Rocket, Hand } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#071a35] [clip-path:inset(0px)]">
      {/* Same background as Home Hero */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero/1.png')" }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6 lg:max-w-[85%] lg:px-0">
        <div className="grid min-h-[750px] items-center gap-8 lg:-translate-y-6 lg:grid-cols-[1.2fr_0.8fr] xl:-translate-y-8 xl:grid-cols-[1.3fr_0.7fr]">
          {/* LEFT CONTENT */}
          <div className="relative z-20 flex flex-col justify-center pt-10 pb-10 lg:items-start lg:py-0">
            <div className="mb-2 inline-flex w-fit items-center rounded-3xl border border-white/20 bg-white/10 px-4 py-1 text-sm text-slate-200 backdrop-blur-sm">
              About Us <Hand size={14} className="ml-1 text-yellow-400" />
            </div>

            <h1 className="mt-3 text-[190%] font-extrabold leading-tight text-white sm:text-4xl lg:text-[320%]">
              About{" "}
              <span className="bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#93c5fd] bg-clip-text text-transparent">
                Jobs360.lk
              </span>
            </h1>

            <h2 className="mt-4 text-lg font-bold text-white lg:text-[1.5rem]">
              Connecting Talent with Opportunity Across Sri Lanka
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 lg:max-w-3xl lg:text-base">
              At Jobs360.lk, we believe every career journey deserves the right
              opportunity. Our platform is built to bridge the gap between talented
              professionals and leading employers by providing a seamless, modern,
              and efficient recruitment experience.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 lg:max-w-3xl lg:text-base">
              Whether you&apos;re a fresh graduate searching for your first role, an
              experienced professional looking for career growth, or an organization
              seeking exceptional talent, Jobs360.lk is your trusted recruitment
              partner.
            </p>

            <div className="mt-8 flex flex-wrap items-start gap-6">
              <div className="flex items-start gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2563eb]/30 text-[#93c5fd]">
                  <Users size={16} />
                </span>
                <p className="max-w-[140px] text-xs font-medium leading-5 text-white/85">
                  Trusted by thousands of job seekers
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2563eb]/30 text-[#93c5fd]">
                  <Building2 size={16} />
                </span>
                <p className="max-w-[150px] text-xs font-medium leading-5 text-white/85">
                  Partnered with leading Sri Lankan companies
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2563eb]/30 text-[#93c5fd]">
                  <Rocket size={16} />
                </span>
                <p className="max-w-[145px] text-xs font-medium leading-5 text-white/85">
                  Fast, smart, and user-friendly platform
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/jobs"
                className="flex h-12 items-center justify-center gap-2 rounded-lg bg-[#2563eb] px-6 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#1d4ed8] shadow-md shadow-blue-950/30"
              >
                <Search size={16} />
                Browse Jobs
              </Link>

              <Link
                href="/post-job"
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-[#2563eb] shadow-lg transition hover:bg-slate-100"
              >
                <FileText size={16} />
                Post a Job
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative z-10 hidden items-end justify-center lg:flex">
            <Image
              src="/hero/3.png"
              alt="Job Seekers"
              width={550}
              height={550}
              className="h-auto w-[85%] max-w-[320px] lg:w-[430px] lg:max-w-[430px] xl:w-[470px] xl:max-w-[470px] [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}