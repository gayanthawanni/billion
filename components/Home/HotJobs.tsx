import React from 'react';
import { Flame, MapPin, ArrowRight, Bookmark } from "lucide-react";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────
const hotJobs = [
  { company: "WSO2", logo: "W", color: "#e8f4ff", textColor: "#1a6eb5", time: "2h ago", title: "Senior Software Engineer", badge: "Featured", type: "Full-time", mode: "On-site", location: "Colombo, Sri Lanka", salary: "LKR 250K – 350K" },
  { company: "Dialog", logo: "D", color: "#fff0f0", textColor: "#c62828", time: "3h ago", title: "Digital Marketing Executive", badge: null, type: "Full-time", mode: "Hybrid", location: "Colombo, Sri Lanka", salary: "LKR 120K – 180K" },
  { company: "Quantox", logo: "Q", color: "#f0f8f0", textColor: "#2e7d32", time: "5h ago", title: "UI/UX Designer", badge: null, type: "Full-time", mode: "On-site", location: "Galle, Sri Lanka", salary: "LKR 120K – 220K" },
  { company: "HNB", logo: "H", color: "#fff8e1", textColor: "#e65100", time: "6h ago", title: "Relationship Officer", badge: null, type: "Full-time", mode: "On-site", location: "Kandy, Sri Lanka", salary: "LKR 90K – 130K" },
  { company: "MAS", logo: "M", color: "#fce4ec", textColor: "#880e4f", time: "7h ago", title: "Production Engineer", badge: null, type: "Full-time", mode: "On-site", location: "Katunayake, Sri Lanka", salary: "LKR 130K – 190K" },
  { company: "Virtusa", logo: "V", color: "#e8eaf6", textColor: "#283593", time: "8h ago", title: "Business Analyst", badge: null, type: "Full-time", mode: "Hybrid", location: "Colombo, Sri Lanka", salary: "LKR 180K – 260K" },
];

// ─── Sub-component ────────────────────────────────────────────────────────────
function JobCard({ job }: { job: typeof hotJobs[0] }) {
  return (
    <div className="job-card" style={{ background: "#fff", border: "1px solid #e8ecf0", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", gap: 10, transition: "box-shadow .2s" }}>
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2.5">
          <div style={{ width: 38, height: 38, borderRadius: 8, background: job.color, color: job.textColor, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15, flexShrink: 0 }}>
            {job.logo}
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 13, color: "#1a1a2e" }}>{job.company}</div>
            <div style={{ fontSize: 11, color: "#9ca3af" }}>{job.time}</div>
          </div>
        </div>
        {job.badge && (
          <span style={{ background: "#e8f4ff", color: "#1a6eb5", fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 20 }}>
            {job.badge}
          </span>
        )}
      </div>
      <div style={{ fontWeight: 600, fontSize: 14, color: "#1a1a2e", lineHeight: 1.4 }}>{job.title}</div>
      <div className="flex flex-wrap gap-1.5">
        <span style={{ background: "#f1f5f9", color: "#64748b", fontSize: 11, padding: "3px 8px", borderRadius: 20 }}>{job.type}</span>
        <span style={{ background: "#f1f5f9", color: "#64748b", fontSize: 11, padding: "3px 8px", borderRadius: 20 }}>{job.mode}</span>
      </div>
      <div className="flex items-center gap-1 text-gray-500 text-xs">
        <MapPin size={14} /><span>{job.location}</span>
      </div>
      <div style={{ fontWeight: 700, fontSize: 14, color: "#10b981" }}>{job.salary}</div>
      <div className="flex justify-between items-center mt-0.5">
        <button style={{ color: "#6b7280", background: "none", border: "none", cursor: "pointer", padding: 0 }}><Bookmark size={16} /></button>
        <button className="rounded-md bg-gradient-to-r from-blue-600 to-blue-700 text-white border-none px-[18px] py-[7px] text-xs font-semibold cursor-pointer">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default function HotJobs() {
  return (
    <>
      {/* Hot Jobs header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Flame size={24} color="#f97316" fill="#f97316" />
          <h2 style={{ fontWeight: 800, fontSize: 18, color: "#1a1a2e" }}>Hot Jobs</h2>
        </div>
        <Link href="/jobs" className="text-blue-600 text-[13px] font-semibold no-underline flex items-center gap-1">
          View All Jobs <ArrowRight size={14} />
        </Link>
      </div>

      {/* Hot Jobs grid */}
      <div className="jobs-grid">
        {hotJobs.map(job => <JobCard key={job.title} job={job} />)}
      </div>
    </>
  );
}