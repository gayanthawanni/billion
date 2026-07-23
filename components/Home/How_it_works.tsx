import { UserPlus, FileText, Send, Briefcase, MoveRight } from 'lucide-react'

const steps = [
  { step: 1, icon: <UserPlus  size={24} color="#3b82f6" />, bgColor: "bg-blue-50",   bg: '#eef2ff', color: '#6366f1', title: 'Create Profile', desc: 'Sign up and create your professional profile in minutes.' },
  { step: 2, icon: <FileText  size={24} color="#10b981" />, bgColor: "bg-emerald-50", bg: '#f0fdf4', color: '#22c55e', title: 'Upload CV',       desc: 'Upload your CV and let employers find the right match.' },
  { step: 3, icon: <Send      size={24} color="#f97316" />, bgColor: "bg-orange-50",  bg: '#fff7ed', color: '#f97316', title: 'Apply to Jobs',   desc: 'Browse jobs and apply with a single click.' },
  { step: 4, icon: <Briefcase size={24} color="#8b5cf6" />, bgColor: "bg-violet-50",  bg: '#faf5ff', color: '#a855f7', title: 'Get Hired',       desc: 'Get shortlisted, attend interviews and land your dream job!' },
]

export const How_it_works = () => {
  return (
    <section className="hiw-container">
      <div className="hiw-inner">

        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-slate-900">How It Works</h2>
          <p className="text-slate-500 mt-2">Get hired in 4 simple steps</p>
        </div>

        {/* ── MOBILE layout — pure Tailwind grid, no CSS class conflict (hidden on lg+) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {steps.map((step) => (
            <div key={step.step} className="hiw-card">
              <div className={`w-14 h-14 rounded-full ${step.bgColor} flex items-center justify-center mb-4 shrink-0`}>
                {step.icon}
              </div>
              <div>
                <div className="hiw-step-label">Step {step.step}</div>
                <h3 className="hiw-title">{step.title}</h3>
                <p className="hiw-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── PC layout — horizontal flow with dotted arrows (hidden below lg) ── */}
        <div className="hidden lg:flex lg:items-start">
          {steps.map((step, i) => (
            <div key={step.step} className="flex flex-1 items-start">

              <div className="flex flex-col gap-2 flex-1 pr-3">
                {/* Icon + step number */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: step.bg,
                      color: step.color,
                    }}>
                    {step.icon}
                  </div>
                  <span className="text-5xl font-extrabold text-slate-200 select-none leading-none">
                    {step.step}
                  </span>
                </div>
                {/* Text */}
                <h3 className="font-bold text-[15px] text-slate-800 mt-2">{step.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">{step.desc}</p>
              </div>

              {/* Dotted arrow between steps */}
              {i < steps.length - 1 && (
                <div className="shrink-0 flex items-start pt-4.5 px-1">
                  <MoveRight size={32} className="text-slate-300" />
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}