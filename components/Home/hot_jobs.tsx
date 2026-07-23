"use client";

import React, { useState } from "react";
import {
  Flame,
  ArrowRight,
  MapPin,
  Bookmark
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const hotJobs = [
  {
    company: "WSO2",
    logo: "W",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e4/WSO2_Software_Logo.png",
    color: "#e8f4ff",
    textColor: "#1a6eb5",
    time: "2h ago",
    title: "Senior Software Engineer",
    badge: "Featured",
    type: "Full-time",
    mode: "On-site",
    location: "Colombo, Sri Lanka",
    salary: "LKR 250K – 350K"
  },
  {
    company: "Dialog",
    logo: "D",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Dialog_Axiata_logo.png",
    color: "#fff0f0",
    textColor: "#c62828",
    time: "3h ago",
    title: "Digital Marketing Executive",
    badge: null,
    type: "Full-time",
    mode: "Hybrid",
    location: "Colombo, Sri Lanka",
    salary: "LKR 120K – 180K"
  },
  {
    company: "Quantox",
    logo: "Q",
    logoUrl: "https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco/wunwcc99p49j67q6z89l",
    color: "#f0f8f0",
    textColor: "#2e7d32",
    time: "5h ago",
    title: "UI/UX Designer",
    badge: null,
    type: "Full-time",
    mode: "On-site",
    location: "Galle, Sri Lanka",
    salary: "LKR 120K – 220K"
  },
  {
    company: "HNB",
    logo: "H",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2a/HNB_Logo_with_Text.png",
    color: "#fff8e1",
    textColor: "#e65100",
    time: "6h ago",
    title: "Relationship Officer",
    badge: null,
    type: "Full-time",
    mode: "On-site",
    location: "Kandy, Sri Lanka",
    salary: "LKR 90K – 130K"
  },
  {
    company: "MAS",
    logo: "M",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/MAS_Holdings_Logo.png",
    color: "#fce4ec",
    textColor: "#880e4f",
    time: "7h ago",
    title: "Production Engineer",
    badge: null,
    type: "Full-time",
    mode: "On-site",
    location: "Katunayake, Sri Lanka",
    salary: "LKR 130K – 190K"
  },
  {
    company: "Virtusa",
    logo: "V",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Virtusa_Logo.png",
    color: "#e8eaf6",
    textColor: "#283593",
    time: "8h ago",
    title: "Business Analyst",
    badge: null,
    type: "Full-time",
    mode: "Hybrid",
    location: "Colombo, Sri Lanka",
    salary: "LKR 180K – 260K"
  },
];

function JobCard({ job }: { job: typeof hotJobs[0] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="job-card">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2.5">

          {/* Logo Wrapper with Image logic */}
          <div
            className="w-[38px] h-[38px] rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
            style={{ background: job.color }}
          >
            {job.logoUrl && !imgError ? (
              <Image
                src={job.logoUrl}
                alt={`${job.company} logo`}
                width={28}
                height={28}
                className="object-contain"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="font-bold text-[15px]" style={{ color: job.textColor }}>
                {job.logo}
              </span>
            )}
          </div>

          <div>
            <div className="font-semibold text-[13px] text-[#1a1a2e]">{job.company}</div>
            <div className="text-[11px] text-gray-400">{job.time}</div>
          </div>
        </div>

        {job.badge && (
          <span className="bg-[#e8f4ff] text-[#1a6eb5] text-[10px] font-semibold px-2 py-[2px] rounded-full">
            {job.badge}
          </span>
        )}
      </div>

      <div className="font-semibold text-sm text-[#1a1a2e] leading-tight mt-1">{job.title}</div>

      <div className="flex gap-1.5 flex-wrap mt-1">
        <span className="bg-[#f1f5f9] text-[#64748b] text-[11px] px-2 py-[3px] rounded-full">{job.type}</span>
        <span className="bg-[#f1f5f9] text-[#64748b] text-[11px] px-2 py-[3px] rounded-full">{job.mode}</span>
      </div>

      <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
        <MapPin size={14} /><span>{job.location}</span>
      </div>

      <div className="font-bold text-sm text-emerald-500 mt-1">{job.salary}</div>

      <div className="flex justify-between items-center mt-1.5">
        <button className="text-gray-500 bg-none border-none cursor-pointer p-0">
          <Bookmark size={16} />
        </button>
        <button className="bg-gradient-to-br from-blue-600 to-blue-700 text-white border-none rounded-md px-[18px] py-[7px] text-xs font-semibold cursor-pointer">
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
      <div className="section-header flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Flame size={24} color="#f97316" fill="#f97316" />
          <h2 className="font-extrabold text-lg text-[#1a1a2e]">Hot Jobs</h2>
        </div>
        <Link href="/jobs" className="text-blue-600 text-[13px] font-semibold no-underline flex items-center gap-1">
          View All Jobs <ArrowRight size={14} />
        </Link>
      </div>

      {/* Hot Jobs grid */}
      <div className="jobs-grid">
        {hotJobs.map(job => (
          <JobCard key={job.title} job={job} />
        ))}
      </div>
    </>
  );
}