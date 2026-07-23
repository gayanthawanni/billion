import React from 'react'
import { Search, MapPin, Briefcase, ChevronDown } from "lucide-react";

interface HeroProps {
  search: string;
  setSearch: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
}

export const Hero = ({ 
  search, 
  setSearch, 
  location, 
  setLocation, 
  category, 
  setCategory 
}: HeroProps) => {
  return (
    <section className="relative min-h-[520px] md:min-h-[400px] overflow-hidden bg-[url('/jobs/hero/2.webp')] bg-no-repeat bg-[length:300px_auto] bg-[position:right_-150px_top_35px] md:bg-[length:420px_auto] md:bg-[position:right_-140px_top_15px] lg:bg-contain lg:bg-[position:right_-100px]">

      <div className="relative z-10 mx-auto w-full lg:w-[83%] px-4 md:px-6 lg:px-6 pt-10 md:pt-14 lg:pt-14 pb-8 md:pb-6 lg:pb-6">
        <div className="relative z-20 max-w-[600px] pt-4 md:pt-6 lg:pt-10 text-center md:text-left mx-auto md:mx-0">
          <h1 className="text-[34px] md:text-[42px] lg:text-[42px] leading-tight lg:leading-normal font-bold text-[#0f172a]">
            Find Jobs
          </h1>

          <p className="mt-3 text-base md:text-lg lg:text-lg text-slate-500">
            Discover the right opportunity and take the next step in your career.
          </p>
        </div>

        {/* Search Box */}
        <div className="relative z-30 mt-8">
          <div className="w-full rounded-2xl border border-slate-200 bg-white p-3 md:p-4 lg:p-4 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_0.9fr_180px]">

              {/* Job Search */}
              <div className="flex h-[54px] min-w-0 flex-1 items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 md:px-5 lg:px-5 md:col-span-2 lg:col-span-1">
                <Search
                  size={18}
                  strokeWidth={2.25}
                  className="shrink-0 text-slate-500"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Job title, keyword or company"
                  className="w-full min-w-0 bg-transparent text-sm font-medium text-slate-700 placeholder:text-slate-500 outline-none"
                />
              </div>

              {/* Location */}
              <div className="flex h-[54px] min-w-0 flex-1 items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 md:px-5 lg:px-5">
                <MapPin
                  size={18}
                  strokeWidth={2.25}
                  className="shrink-0 text-slate-500"
                />

                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                  className="w-full min-w-0 bg-transparent text-sm font-medium text-slate-700 placeholder:text-slate-500 outline-none"
                />
              </div>

              {/* Category */}
              <div className="relative flex h-[54px] min-w-0 flex-1 items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 md:px-5 lg:px-5">
                <Briefcase
                  size={18}
                  strokeWidth={2.25}
                  className="shrink-0 text-slate-500"
                />

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full min-w-0 appearance-none bg-transparent pr-6 text-sm font-medium text-slate-700 outline-none cursor-pointer"
                >
                  <option value="">All Categories</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Design">Design</option>
                  <option value="Business">Business</option>
                  <option value="Banking">Banking</option>
                  <option value="Finance">Finance</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Technology">Technology</option>
                  <option value="Sales">Sales</option>
                </select>

                <ChevronDown
                  size={18}
                  className="absolute right-4 text-slate-400 pointer-events-none"
                />
              </div>

              {/* Search Button */}
              <button className="flex h-[54px] w-full lg:w-[180px] items-center justify-center gap-2 lg:gap-0 rounded-lg bg-[#2563eb] px-8 font-semibold text-white hover:bg-[#1d4ed8] md:col-span-2 lg:col-span-1">
                <Search size={18} />
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
