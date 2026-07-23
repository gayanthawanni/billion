import { ArrowRight, BriefcaseBusiness, CircleHelp, UserRound } from "lucide-react";

const helpCards = [
  {
    title: "For Job Seekers",
    description: "Get help with your job search, applications, profile, and career opportunities.",
    action: "View Resources",
    icon: UserRound,
    tone: "blue",
  },
  {
    title: "For Employers",
    description: "Post jobs, find the right talent, and learn about our hiring solutions.",
    action: "Employer Support",
    icon: BriefcaseBusiness,
    tone: "green",
  },
  {
    title: "Help Center / FAQ",
    description: "Find answers to common questions about Jobs360.lk and our services.",
    action: "Visit Help Center",
    icon: CircleHelp,
    tone: "purple",
  },
];

const toneClasses = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-emerald-50 text-emerald-600",
  purple: "bg-purple-50 text-purple-600",
};

export default function HowCanWeHelp() {
  return (
    <section className="mx-auto max-w-[88%]">
      <div className="text-center">
        <h2 className="text-[28px] font-extrabold text-slate-950">How Can We Help?</h2>
        <p className="mt-2 text-[15px] font-medium text-slate-500">
          Choose the option that best matches your needs.
        </p>
      </div>

      <div className="mt-7 grid gap-7 lg:grid-cols-3">
        {helpCards.map((card) => {
          const Icon = card.icon;
          const iconClass = toneClasses[card.tone as keyof typeof toneClasses];

          return (
            <article
              key={card.title}
              className="rounded-[18px] border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.03)]"
            >
              <div className="flex gap-5">
                <div className={`flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full ${iconClass}`}>
                  <Icon size={34} strokeWidth={2.6} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-950">{card.title}</h3>
                  <p className="mt-2 text-[14px] font-medium leading-6 text-slate-500">{card.description}</p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-slate-200 p-3">
                <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 text-[14px] font-bold text-blue-600 shadow-sm transition hover:border-blue-200">
                  {card.action}
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
