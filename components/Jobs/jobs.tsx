import React from 'react'
import { Building2, MapPin, Briefcase, Bookmark } from "lucide-react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  experience: string;
  type: string;
  workplace: string;
  posted: string;
  salary: string;
};

interface JobsProps {
  jobs: Job[];
  sort: string;
  setSort: (value: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  totalJobs: number;
  startIndex: number;
  endIndex: number;
}

export function Jobs({
  jobs,
  sort,
  setSort,
  currentPage,
  setCurrentPage,
  totalPages,
  totalJobs,
  startIndex,
  endIndex,
}: JobsProps) {
  return (
    <div>
      <div className="mb-6 flex flex-col items-center justify-between gap-3 md:flex-row">
        <p className="text-center font-medium text-slate-500 md:text-left">
          Showing {startIndex + 1}–{Math.min(endIndex, totalJobs)} of {totalJobs} jobs
        </p>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-medium text-slate-600 md:w-auto md:text-left"
        >
          <option>Most Recent</option>
          <option>Highest Salary</option>
        </select>
      </div>

      {jobs.length === 0 ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
          <h3 className="text-xl font-bold text-slate-900">
            No Jobs Found
          </h3>

          <p className="mt-3 text-slate-500">
            We couldn&apos;t find any jobs matching your selected filters.
            Try changing your search criteria or clearing some filters.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-5">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="rounded-3xl border border-slate-200 bg-white p-5 transition-all hover:shadow-md"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">

                  {/* LEFT */}
                  <div className="flex flex-col items-center gap-5 text-center md:flex-row md:items-start md:text-left">

                    {/* Company Logo */}
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-2xl font-bold
                      ${
                        job.id === 1
                          ? "bg-blue-50 text-blue-600"
                          : job.id === 2
                          ? "bg-red-50 text-red-500"
                          : "bg-green-50 text-green-600"
                      }`}
                    >
                      {job.company[0]}
                    </div>

                    <div>
                      {/* Title */}
                      <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                        <h3 className="text-[18px] font-bold text-slate-900">
                          {job.title}
                        </h3>

                        {job.id === 1 && (
                          <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold text-blue-600">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Company */}
                      <p className="mt-1 text-base font-semibold text-slate-800">
                        {job.company}
                      </p>

                      {/* Meta */}
                      <div className="mt-3 flex flex-wrap items-center justify-center gap-5 text-sm text-slate-500 md:justify-start">

                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {job.location}
                        </span>

                        <span className="flex items-center gap-1">
                          <Building2 size={14} />
                          {job.workplace}
                        </span>

                        <span className="flex items-center gap-1">
                          <Briefcase size={14} />
                          {job.experience}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-4 max-w-3xl text-[13px] text-slate-500">
                        Join our engineering team to build scalable enterprise
                        solutions used by millions worldwide.
                      </p>

                      {/* Posted */}
                      <p className="mt-4 text-[13px] text-slate-500">
                        {job.posted}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="mt-5 flex flex-col items-center md:items-end lg:mt-0">

                    <button className="rounded-lg border border-slate-200 p-2">
                      <Bookmark size={18} className="text-slate-500" />
                    </button>

                    <div className="mt-5 flex flex-wrap justify-center gap-2 md:mt-10 md:justify-end">
                      <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-semibold text-green-600">
                        {job.type}
                      </span>

                      <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold text-blue-600">
                        {job.workplace}
                      </span>
                    </div>

                    <span className="mt-4 text-[14px] font-bold text-green-600">
                      {job.salary}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`h-10 w-10 rounded-lg border transition ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
