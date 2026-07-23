import { Shield, Lightbulb, Users, Trophy } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We promote transparency, fairness, and trust in every interaction.",
    iconBg: "bg-[#eef4ff]",
    iconColor: "text-[#2563eb]",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously improve our platform to meet evolving workforce needs.",
    iconBg: "bg-[#eefbf3]",
    iconColor: "text-[#16a34a]",
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "We believe opportunities should be accessible to everyone.",
    iconBg: "bg-[#fff5eb]",
    iconColor: "text-[#f97316]",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description:
      "We strive to deliver exceptional experiences for both employers and job seekers.",
    iconBg: "bg-[#f7f0ff]",
    iconColor: "text-[#9333ea]",
  },
];

export default function OurValues() {
  return (
    <section className="w-full bg-white pb-16">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:max-w-[85%] lg:px-0">
        <div className="mb-2">
          <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
            Our Values
          </span>
        </div>

        <h2 className="text-2xl font-extrabold leading-tight text-[#0f172a] lg:text-[2rem]">
          The Principles That Guide Us
        </h2>

        <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div key={index} className="flex items-start gap-4">
                <div
                  className={`flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full ${value.iconBg}`}
                >
                  <Icon className={`h-[26px] w-[26px] ${value.iconColor}`} strokeWidth={2.1} />
                </div>

                <div className="pt-1">
                  <h3 className="text-[18px] font-bold leading-none text-[#0f172a]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 text-slate-500 lg:text-[15px] lg:leading-8">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}