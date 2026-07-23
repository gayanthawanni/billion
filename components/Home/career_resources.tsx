import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const articles = [
  {
    title: "Career Development Tips",
    tag: "CAREER",
    desc: "Learn effective strategies to accelerate your professional growth.",
    date: "Jan 15",
    read: "5 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80"
  },
  {
    title: "Resume Best Practices",
    tag: "RESUME",
    desc: "Create a compelling resume that gets noticed by recruiters.",
    date: "Jan 12",
    read: "4 min read",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=80"
  },
  {
    title: "Interview Preparation",
    tag: "INTERVIEW",
    desc: "Master the art of interview with our comprehensive guide.",
    date: "Jan 10",
    read: "6 min read",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80"
  },
  {
    title: "Networking Strategies",
    tag: "NETWORKING",
    desc: "Build meaningful professional connections in your industry.",
    date: "Jan 8",
    read: "5 min read",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=80"
  }
]

const tagColors: Record<string, { bg: string; color: string }> = {
  CAREER:     { bg: "#eff6ff", color: "#2563eb" },
  RESUME:     { bg: "#f0fdf4", color: "#16a34a" },
  INTERVIEW:  { bg: "#fef9c3", color: "#ca8a04" },
  NETWORKING: { bg: "#fdf4ff", color: "#9333ea" },
}

export const Career_resources = () => {
  return (
    <div className="cr-section">
        <div className="cr-inner">

          {/* Header */}
          <div className="cr-header">
            <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
              Career Resources
            </h2>
            <Link
              href="/career-resources"
              className="flex items-center gap-1 text-[13px] font-semibold text-blue-600 no-underline"
            >
              Explore All Articles <ArrowRight size={14} />
            </Link>
          </div>

          {/* Grid */}
          <div className="cr-grid">
            {articles.map(a => {
              const tag = tagColors[a.tag] ?? { bg: "#f1f5f9", color: "#64748b" }
              return (
                <div key={a.title} className="cr-card">

                  {/* High Fidelity Thumbnail Image Component */}
                  <div className="cr-thumb">
                    <Image 
                      src={a.image} 
                      alt={a.title} 
                      width={600} 
                      height={140} 
                      className="h-full w-full object-cover" 
                    />
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-1 flex-col gap-1.5 p-4">
                    <span
                      className="inline-block text-[10px] font-bold tracking-[0.6px] px-2.5 py-[3px] rounded-full self-start"
                      style={{
                        background: tag.bg,
                        color: tag.color,
                      }}
                    >
                      {a.tag}
                    </span>

                    <div className="font-bold text-sm text-slate-900 leading-tight mt-0.5">
                      {a.title}
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed flex-1 m-0">
                      {a.desc}
                    </p>

                    <div className="text-[11px] text-gray-400 mt-1.5 font-medium">
                      {a.date} · {a.read}
                    </div>
                  </div>

                </div>
              )
            })}
          </div>

        </div>
    </div>
  )
}