import Image from "next/image";
import {
  GraduationCap,
  UserRound,
  Building2,
  BriefcaseBusiness,
  Globe,
} from "lucide-react";

const communities = [
  {
    icon: GraduationCap,
    title: "Students &\nGraduates",
    color: "text-[#2563eb]",
    bg: "bg-[#eef4ff]",
  },
  {
    icon: UserRound,
    title: "Professionals",
    color: "text-[#2563eb]",
    bg: "bg-[#eef4ff]",
  },
  {
    icon: Building2,
    title: "Small\nBusinesses",
    color: "text-[#2563eb]",
    bg: "bg-[#eef4ff]",
  },
  {
    icon: BriefcaseBusiness,
    title: "Large\nEnterprises",
    color: "text-[#2563eb]",
    bg: "bg-[#eef4ff]",
  },
  {
    icon: Globe,
    title: "International\nOrganizations",
    color: "text-[#2563eb]",
    bg: "bg-[#eef4ff]",
  },
];

export default function OurCommunity() {
  return (
    <section className="w-full bg-white pb-16">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:max-w-[85%] lg:px-0">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.2fr_0.85fr]">
          <div>
            <div className="mb-2">
              <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
                Our Community
              </span>
            </div>

            <h2 className="text-2xl font-extrabold leading-tight text-[#0f172a] lg:text-[2rem]">
              Building Strong Professional Connections
            </h2>

            <p className="mt-4 max-w-[560px] text-[15px] leading-8 text-slate-500">
              Every successful hire represents a meaningful connection between
              ambition and opportunity.
            </p>

            <p className="mt-3 max-w-[560px] text-[15px] leading-8 text-slate-500">
              Jobs360.lk proudly supports:
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 [&>*:last-child]:col-span-2 [&>*:last-child]:justify-self-center sm:[&>*:last-child]:col-span-1 sm:[&>*:last-child]:justify-self-auto">
              {communities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div
                      className={`flex h-[52px] w-[52px] items-center justify-center rounded-full ${item.bg}`}
                    >
                      <Icon className={`h-6 w-6 ${item.color}`} strokeWidth={2} />
                    </div>

                    <p className="mt-3 whitespace-pre-line text-[13px] font-medium leading-5 text-[#0f172a]">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex h-[280px] justify-center lg:h-full lg:pb-10 lg:justify-end">
            <div className="h-full w-full overflow-hidden rounded-[22px] shadow-[0_12px_36px_rgba(15,23,42,0.18)]">
              <Image
                src="/about/community.webp"
                alt="Professional team collaboration"
                width={620}
                height={380}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}