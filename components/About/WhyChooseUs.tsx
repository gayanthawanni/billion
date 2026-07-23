"use client";

import { useRef, useEffect, useState } from "react";
import {
  SearchCheck,
  ShieldCheck,
  Send,
  BookOpen,
  BriefcaseBusiness,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: SearchCheck,
    title: "Smart Job Matching",
    description:
      "Advanced search and filtering tools help candidates discover opportunities that match their skills and aspirations.",
    iconColor: "text-[#2563eb]",
    iconBg: "bg-[#eef4ff]",
  },
  {
    icon: ShieldCheck,
    title: "Verified Employers",
    description:
      "We work with reputable organizations to ensure authentic and quality employment opportunities.",
    iconColor: "text-[#16a34a]",
    iconBg: "bg-[#eefbf3]",
  },
  {
    icon: Send,
    title: "Easy Application Process",
    description:
      "Apply for jobs quickly with a streamlined application experience designed for convenience.",
    iconColor: "text-[#f97316]",
    iconBg: "bg-[#fff5eb]",
  },
  {
    icon: BookOpen,
    title: "Career Resources",
    description:
      "Access professional guidance, resume tips, interview preparation, and career development content.",
    iconColor: "text-[#9333ea]",
    iconBg: "bg-[#f7f0ff]",
  },
  {
    icon: BriefcaseBusiness,
    title: "Employer Solutions",
    description:
      "Powerful recruitment tools designed to simplify talent acquisition and candidate management.",
    iconColor: "text-[#2563eb]",
    iconBg: "bg-[#eef4ff]",
  },
  {
    icon: Lock,
    title: "Secure Platform",
    description:
      "Your personal information and applications are protected with modern security standards.",
    iconColor: "text-[#16a34a]",
    iconBg: "bg-[#eefbf3]",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white pb-16">
      <div
        ref={sectionRef}
        className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:max-w-[85%] lg:px-0"
      >
        <div
          className={`mb-7 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#2563eb]">
            Why Choose Jobs360.lk
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                style={{
                  transitionDelay: visible ? `${80 + index * 70}ms` : "0ms",
                }}
                className={`flex flex-col items-center rounded-2xl border border-[#e8ecf0] bg-white px-5 py-6 text-center shadow-sm transition-all duration-500 hover:shadow-md sm:items-start sm:text-left ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${feature.iconBg}`}
                >
                  <Icon
                    className={`h-6 w-6 ${feature.iconColor}`}
                    strokeWidth={2}
                  />
                </div>

                <h3 className="text-[15px] font-bold leading-6 text-[#0f172a]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
