import Link from "next/link";
import Image from "next/image";
import { UserRound, BriefcaseBusiness, Check, Search } from "lucide-react";

const jobSeekerPoints = [
  "Create a professional profile",
  "Upload and manage resumes",
  "Receive job recommendations",
  "Apply with a few clicks",
  "Track application progress",
  "Access career resources",
];

const employerPoints = [
  "Post vacancies instantly",
  "Reach qualified candidates",
  "Manage applications efficiently",
  "Build employer branding",
  "Access recruitment analytics",
  "Reduce hiring time",
];

export default function ForJobSeekersEmployers() {
  return (
    <section className="w-full bg-white pb-16">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:max-w-[85%] lg:px-0">
        <div className="grid gap-5 lg:grid-cols-2">
          {/* For Job Seekers */}
          <div className="relative overflow-hidden rounded-[24px] border border-[#e8ecf0] bg-gradient-to-br from-[#f5f9ff] to-[#eef5ff] px-5 py-5 lg:px-8 lg:py-8">
            <div className="grid items-center gap-4 md:grid-cols-[1fr_280px] md:gap-6">
              <div className="flex flex-col">
                <div className="mb-3 flex items-center justify-center gap-3 md:justify-start">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-white sm:h-12 sm:w-12">
                    <UserRound strokeWidth={2.2} className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px]" />
                  </div>
                  <h3 className="text-[1.05rem] font-extrabold leading-tight text-[#2563eb] sm:text-[1.5rem]">
                    For Job Seekers
                  </h3>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  {jobSeekerPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                      <span className="mt-[3px] flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-white sm:h-[18px] sm:w-[18px]">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      <p className="text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-[15px]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <Link href="/jobs" className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-5 text-sm font-semibold text-white transition hover:bg-[#1d4ed8] sm:mt-6 sm:h-11 sm:w-auto sm:self-start">
                  <Search size={16} />
                  Find Jobs
                </Link>
              </div>

              <div className="hidden justify-center md:flex md:justify-end">
                <Image
                  src="/about/job-seeker.webp"
                  alt="For Job Seekers illustration"
                  width={280}
                  height={280}
                  className="h-auto w-full max-w-[200px] object-contain sm:max-w-[270px]"
                />
              </div>
            </div>
          </div>

          {/* For Employers */}
          <div className="relative overflow-hidden rounded-[24px] border border-[#e8ecf0] bg-gradient-to-br from-[#f3fbf6] to-[#edf8f1] px-5 py-5 lg:px-8 lg:py-8">
            <div className="grid items-center gap-4 md:grid-cols-[1fr_280px] md:gap-6">
              <div className="flex flex-col">
                <div className="mb-3 flex items-center justify-center gap-3 md:justify-start">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-white sm:h-12 sm:w-12">
                    <BriefcaseBusiness strokeWidth={2.2} className="h-[18px] w-[18px] sm:h-[22px] sm:w-[22px]" />
                  </div>
                  <h3 className="text-[1.05rem] font-extrabold leading-tight text-[#16a34a] sm:text-[1.5rem]">
                    For Employers
                  </h3>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  {employerPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                      <span className="mt-[3px] flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full bg-[#16a34a] text-white sm:h-[18px] sm:w-[18px]">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      <p className="text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-[15px]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <button className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-[#16a34a] px-5 text-sm font-semibold text-white transition hover:bg-[#15803d] sm:mt-6 sm:h-11 sm:w-auto sm:self-start">
                  <BriefcaseBusiness size={16} />
                  Post a Job
                </button>
              </div>

              <div className="hidden justify-center md:flex md:justify-end">
                <Image
                  src="/about/employer.png"
                  alt="For Employers illustration"
                  width={280}
                  height={280}
                  className="h-auto w-full max-w-[200px] object-contain sm:max-w-[270px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
