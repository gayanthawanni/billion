import React from "react";
import { ChevronDown } from "lucide-react";

type Filters = {
  keyword: string;
  location: string;
  category: string;
  jobTypes: string[];
  experienceLevels: string[];
  salaryRange: string;
  postedWithin: string;
};

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

interface SidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  defaultFilters: Filters;
  jobs: Job[];
}

export const Sidebar = ({ filters, setFilters, defaultFilters, jobs }: SidebarProps) => {
  const toggleFilter = (key: "jobTypes" | "experienceLevels", value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((item) => item !== value)
        : [...prev[key], value],
    }));
  };

  // Calculate job type counts
  const fullTimeCount = jobs.filter(
    (job) => job.type === "Full-time"
  ).length;

  const partTimeCount = jobs.filter(
    (job) => job.type === "Part-time"
  ).length;

  const contractCount = jobs.filter(
    (job) => job.type === "Contract"
  ).length;

  const internshipCount = jobs.filter(
    (job) => job.type === "Internship"
  ).length;

  // Calculate experience counts
  const entryCount = jobs.filter(
    (job) => job.experience === "1-3 Years"
  ).length;

  const midCount = jobs.filter(
    (job) => job.experience === "2-4 Years"
  ).length;

  const seniorCount = jobs.filter(
    (job) => job.experience === "3-5 Years"
  ).length;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-800">Filters</h3>

        <button
          onClick={() => setFilters(defaultFilters)}
          className="text-xs font-medium text-blue-600 hover:text-blue-700"
        >
          Clear All
        </button>
      </div>

      <div className="mt-6 space-y-6">
        {/* Keywords */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Keywords
          </label>

          <input
            type="text"
            value={filters.keyword}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, keyword: e.target.value }))
            }
            placeholder="Job title, skills or company"
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none placeholder:text-slate-400 focus:border-blue-500"
          />
        </div>

        {/* Location */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Location
          </label>

          <div className="relative">
            <select
              value={filters.location}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, location: e.target.value }))
              }
              className="w-full appearance-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-500 outline-none focus:border-blue-500"
            >
              <option value="">All Locations</option>
              <option value="Colombo">Colombo</option>
              <option value="Galle">Galle</option>
              <option value="Kandy">Kandy</option>
              <option value="Negombo">Negombo</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        {/* Job Category */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Job Category
          </label>

          <div className="relative">
            <select
              value={filters.category}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, category: e.target.value }))
              }
              className="w-full appearance-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-500 outline-none focus:border-blue-500"
            >
              <option value="">All Categories</option>
              <option value="Engineering">Engineering</option>
              <option value="Marketing">Marketing</option>
              <option value="Design">Design</option>
              <option value="Business">Business</option>
              <option value="Banking">Banking</option>
              <option value="Finance">Finance</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        {/* Job Type */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            Job Type
          </label>

          <div className="space-y-3 text-sm">
            <label className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.jobTypes.includes("Full-time")}
                  onChange={() => toggleFilter("jobTypes", "Full-time")}
                />
                <span>Full-time</span>
              </div>
              <span className="text-slate-500">{fullTimeCount}</span>
            </label>

            <label className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.jobTypes.includes("Part-time")}
                  onChange={() => toggleFilter("jobTypes", "Part-time")}
                />
                <span>Part-time</span>
              </div>
              <span className="text-slate-500">{partTimeCount}</span>
            </label>

            <label className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.jobTypes.includes("Contract")}
                  onChange={() => toggleFilter("jobTypes", "Contract")}
                />
                <span>Contract</span>
              </div>
              <span className="text-slate-500">{contractCount}</span>
            </label>

            <label className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.jobTypes.includes("Internship")}
                  onChange={() => toggleFilter("jobTypes", "Internship")}
                />
                <span>Internship</span>
              </div>
              <span className="text-slate-500">{internshipCount}</span>
            </label>
          </div>
        </div>

        <hr className="border-slate-200" />

        {/* Experience Level */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            Experience Level
          </label>

          <div className="space-y-3 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={filters.experienceLevels.length === 0}
                onChange={() => {
                  if (filters.experienceLevels.length > 0) {
                    setFilters((prev) => ({ ...prev, experienceLevels: [] }));
                  }
                }}
              />
              <span>All Levels</span>
            </label>

            <label className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.experienceLevels.includes("1-3 Years")}
                  onChange={() => toggleFilter("experienceLevels", "1-3 Years")}
                />
                <span>Entry Level</span>
              </div>
              <span className="text-slate-500">{entryCount}</span>
            </label>

            <label className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.experienceLevels.includes("2-4 Years")}
                  onChange={() => toggleFilter("experienceLevels", "2-4 Years")}
                />
                <span>Mid Level</span>
              </div>
              <span className="text-slate-500">{midCount}</span>
            </label>

            <label className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={filters.experienceLevels.includes("3-5 Years")}
                  onChange={() => toggleFilter("experienceLevels", "3-5 Years")}
                />
                <span>Senior Level</span>
              </div>
              <span className="text-slate-500">{seniorCount}</span>
            </label>
          </div>
        </div>

        {/* Salary Range */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Salary Range
          </label>

          <div className="relative">
            <select
              value={filters.salaryRange}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, salaryRange: e.target.value }))
              }
              className="w-full appearance-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-500 outline-none focus:border-blue-500"
            >
              <option value="">All Salary Ranges</option>
              <option value="LKR 50K - 100K">LKR 50K - 100K</option>
              <option value="LKR 100K - 200K">LKR 100K - 200K</option>
              <option value="LKR 200K - 300K">LKR 200K - 300K</option>
              <option value="LKR 300K+">LKR 300K+</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        {/* Posted Within */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            Posted Within
          </label>

          <div className="space-y-3 text-sm">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="posted"
                checked={filters.postedWithin === "Any Time"}
                onChange={() =>
                  setFilters((prev) => ({ ...prev, postedWithin: "Any Time" }))
                }
              />
              <span>Any Time</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="posted"
                checked={filters.postedWithin === "Last 24 Hours"}
                onChange={() =>
                  setFilters((prev) => ({ ...prev, postedWithin: "Last 24 Hours" }))
                }
              />
              <span>Last 24 Hours</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="posted"
                checked={filters.postedWithin === "Last 7 Days"}
                onChange={() =>
                  setFilters((prev) => ({ ...prev, postedWithin: "Last 7 Days" }))
                }
              />
              <span>Last 7 Days</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="posted"
                checked={filters.postedWithin === "Last 30 Days"}
                onChange={() =>
                  setFilters((prev) => ({ ...prev, postedWithin: "Last 30 Days" }))
                }
              />
              <span>Last 30 Days</span>
            </label>
          </div>
        </div>

        {/* Clear Button */}
        <button
          onClick={() => setFilters(defaultFilters)}
          className="w-full rounded-lg bg-slate-100 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-200"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};