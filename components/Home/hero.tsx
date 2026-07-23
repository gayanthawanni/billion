"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
    Search,
    MapPin,
    X,
    Briefcase,
    MapPinned,
    Tag,
    Rocket
} from "lucide-react";

export default function Hero() {
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const categories = [
        "All Categories",
        "Technology",
        "Finance",
        "Healthcare",
        "Marketing",
        "Design",
        "Sales"
    ];

    useEffect(() => {
        if (showMobileSearch) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showMobileSearch]);

    return (
        <section className="relative overflow-hidden bg-[#071a35] [clip-path:inset(0px)]">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero/1.png')" }}
            />

            <div className="relative z-10 mx-auto max-w-[85%] px-5">
                <div className="grid min-h-[750px] items-center gap-6 lg:grid-cols-2">

                    {/* ── LEFT CONTENT ── */}
                    <div className="relative z-20 flex flex-col items-center text-center pt-10 pb-4 lg:translate-x-[-2cm] lg:items-start lg:py-0 lg:text-left">

                        <div className="flex flex-col items-center lg:-translate-y-22 lg:items-start">
                            <div className="mb-2 inline-flex items-center rounded-80 border border-white/20 bg-white/10 px-2 sm:px-4 rounded-3xl py-1 text-sm text-slate-200 backdrop-blur-sm">
                                Sri Lanka&apos;s Smarter Way to Find Jobs
                                <Rocket size={16} className="ml-1 text-red-500" />
                            </div>

                            <h1 className="text-[213%] font-extrabold leading-tight text-white sm:text-5xl lg:text-[390%]">
                                Find Your Next
                                <span className="block bg-gradient-to-r from-[#0716f1] via-[#3b82f6] to-[#05f1f1] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(59,130,246,0.45)]">
                                    Opportunity
                                </span>
                            </h1>

                            <p className="mt-4 max-w-sm text-base leading-7 text-slate-300 lg:max-w-xl lg:text-lg">
                                Explore thousands of jobs from top companies
                                and take the next step in your career.
                            </p>
                        </div>

                        {/* Search Box - Desktop only */}
                        <div className="hidden relative z-50 mx-auto mt-6 w-full md:block md:w-[85%] lg:mx-0 lg:w-[calc(175%+2.5rem)] lg:translate-y-[-1.5cm]">
                            <div className="rounded-[14px] border border-slate-200 bg-white p-2 shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
                                <div className="flex h-[62px] items-center gap-3">
                                    <div className="flex h-10 flex-1 items-center gap-3 rounded-lg border border-slate-200 bg-white px-5">
                                        <Search size={18} strokeWidth={2.25} className="shrink-0 text-slate-500" />
                                        <input
                                            type="text"
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            placeholder="Job title, keyword or company"
                                            className="w-full bg-transparent text-sm font-medium text-slate-700 placeholder:text-slate-500 outline-none"
                                        />
                                    </div>
                                    <div className="flex h-10 flex-1 items-center gap-3 rounded-lg border border-slate-200 bg-white px-5">
                                        <MapPin size={18} strokeWidth={2.25} className="shrink-0 text-slate-500" />
                                        <input
                                            type="text"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            placeholder="Location"
                                            className="w-full bg-transparent text-sm font-medium text-slate-700 placeholder:text-slate-500 outline-none"
                                        />
                                    </div>
                                    {/* Category Select */}
                                    <div className="relative flex h-10 flex-1 items-center rounded-lg border border-slate-200 bg-white px-4">
                                        <Tag size={18} strokeWidth={2.25} className="mr-3 shrink-0 text-slate-500" />
                                        <select
                                            value={selectedCategory}
                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                            className="w-full bg-transparent text-sm font-medium text-slate-700 outline-none appearance-none cursor-pointer"
                                        >
                                            {categories.map((cat) => (
                                                <option key={cat} value={cat}>
                                                    {cat}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <button className="flex h-10 min-w-[130px] items-center justify-center gap-1 rounded-lg bg-[#2563eb] px-7 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d4ed8]">
                                        <Search size={18} strokeWidth={2.5} />
                                        Search Jobs
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Mobile: Search Button */}
                        <div className="md:hidden flex flex-col items-center w-full gap-12 mt-6 relative z-50">
                            <button
                                onClick={() => setShowMobileSearch(true)}
                                className="flex w-45 items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-6 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-[#1d4ed8] active:scale-95"
                            >
                                <Search size={19} />
                                Search Jobs
                            </button>
                        </div>

                        {/* Trending - Desktop */}
                        <div className="relative z-50 mt-4 w-full lg:mx-0 lg:flex lg:w-[calc(175%+2.5rem)] lg:flex-wrap lg:items-center lg:gap-3 lg:translate-y-[-0.8cm]">
                            <div className="hidden lg:flex flex-col items-center text-center w-full lg:flex-row lg:text-left">
                                <span className="mb-3 block text-sm font-medium text-white/80 lg:mb-0 lg:mr-3">
                                    Trending Searches :
                                </span>
                                <div className="flex flex-wrap items-center justify-center gap-2">
                                    {["Software Engineer", "Marketing", "Accountant", "Designer", "Sales"].map((item) => (
                                        <button
                                            key={item}
                                            className="rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs text-white backdrop-blur-sm transition hover:bg-white/20"
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT — Image ── */}
                    <div className="relative z-10 flex justify-center lg:mt-0 lg:justify-center">
                        <Image
                            src="/hero/3.png"
                            alt="Job Seekers"
                            width={550}
                            height={550}
                            className="h-auto w-[85%] max-w-[320px] translate-y-[-2cm] lg:translate-y-0 lg:w-120 lg:max-w-162.5 lg:translate-x-5 [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Search Modal */}
            {showMobileSearch && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:hidden"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        backdropFilter: 'blur(8px)',
                    }}
                    onClick={() => setShowMobileSearch(false)}
                >
                    <div
                        className="bg-white rounded-2xl w-80 max-w-[300px] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="px-5 pt-3 pb-2 border-b border-slate-100">
                            <div className="relative flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-slate-800">Find Jobs</h3>
                                    <p className="text-xs text-slate-400 mt-0.5">Search from 15,000+ opportunities</p>
                                </div>
                                <button
                                    onClick={() => setShowMobileSearch(false)}
                                    className="absolute right-0 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition"
                                >
                                    <X size={18} className="text-slate-500" />
                                </button>
                            </div>
                        </div>

                        <div className="p-4 space-y-2.5 text-center">
                            <div>
                                <label className="flex items-center justify-center gap-1 text-sm font-semibold text-center mb-1.5">
                                    <Briefcase size={16} className="text-[#2563eb]" />
                                    What are you looking for?
                                </label>
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Job title, skills, or company"
                                    className="w-60 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-[#2563eb]"
                                    autoFocus
                                />
                            </div>

                            <div>
                                <label className="flex items-center justify-center gap-1 text-sm font-semibold text-center mb-1.5">
                                    <MapPinned size={16} className="text-[#2563eb]" />
                                    Where do you want to work?
                                </label>
                                <input
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="City, province or remote"
                                    className="w-60 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-[#2563eb]"
                                />
                            </div>

                            <div>
                                <label className="flex items-center justify-center gap-1 text-sm font-semibold text-center mb-1.5">
                                    <Tag size={16} className="text-[#2563eb]" />
                                    Select Category
                                </label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-60 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 outline-none focus:border-[#2563eb] cursor-pointer"
                                >
                                    {categories.map((cat) => (
                                        <option key={cat} value={cat}>
                                            {cat}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="text-center pt-1">
                                <p className="text-[10px] font-bold tracking-wider text-slate-400 mb-1.5 uppercase">Recent Searches</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    <button onClick={() => setSearch("Software Engineer")} className="text-xs px-3.5 py-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition whitespace-nowrap">Software Engineer</button>
                                    <button onClick={() => setLocation("Colombo")} className="text-xs px-3.5 py-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition whitespace-nowrap">Design</button>
                                    <button onClick={() => setSearch("Marketing")} className="text-xs px-3.5 py-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition whitespace-nowrap">Marketing</button>
                                </div>
                            </div>

                            <div className="flex justify-center pt-1">
                                <button
                                    onClick={() => setShowMobileSearch(false)}
                                    className="w-35 flex items-center justify-center gap-1 rounded-xl bg-[#2563eb] py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#1d4ed8] active:scale-[0.98]"
                                >
                                    <Search size={16} />
                                    Search Jobs
                                </button>
                            </div>
                        </div>

                        <div className="px-5 py-2 bg-slate-50 border-t border-slate-100 text-center">
                            <p className="flex items-center justify-center gap-1 text-xs text-slate-400">
                                <Rocket size={16} />
                                Join 50,000+ job seekers who found their dream job
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
