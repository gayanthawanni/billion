"use client";

import { useRef, useEffect, useState } from "react";
import { Users, Building2, BriefcaseBusiness, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    num: 10000,
    suffix: "+",
    comma: true,
    label: "Registered\nJob Seekers",
    iconBg: "bg-[#eef4ff]",
    iconColor: "text-[#2563eb]",
  },
  {
    icon: Building2,
    num: 1500,
    suffix: "+",
    comma: true,
    label: "Active\nEmployers",
    iconBg: "bg-[#eefbf3]",
    iconColor: "text-[#16a34a]",
  },
  {
    icon: BriefcaseBusiness,
    num: 5000,
    suffix: "+",
    comma: true,
    label: "Jobs\nPosted",
    iconBg: "bg-[#fff5eb]",
    iconColor: "text-[#f97316]",
  },
  {
    icon: Star,
    num: 95,
    suffix: "%",
    comma: false,
    label: "Employer\nSatisfaction Rate",
    iconBg: "bg-[#f7f0ff]",
    iconColor: "text-[#9333ea]",
  },
];

const DURATION = 1800;

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / DURATION, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            setCounts(stats.map((s) => Math.round(s.num * eased)));

            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white pb-16">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:max-w-[85%] lg:px-0">
        <div className="mb-6">
          <span className="text-sm font-bold uppercase tracking-widest text-[#2563eb]">
            By The Numbers
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const display = stat.comma
              ? counts[index].toLocaleString()
              : String(counts[index]);

            return (
              <div
                key={index}
                className="flex flex-col items-center gap-4 rounded-2xl border border-[#e8ecf0] bg-white px-6 py-6 text-center shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:text-left"
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${stat.iconBg}`}
                >
                  <Icon className={`h-7 w-7 ${stat.iconColor}`} strokeWidth={2} />
                </div>

                <div>
                  <h3 className="text-[1.9rem] font-extrabold leading-none text-[#0f172a]">
                    {display}{stat.suffix}
                  </h3>
                  <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-500">
                    {stat.label}
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
