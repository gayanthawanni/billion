import React from "react";
import { Bell } from "lucide-react";

export const JobAlert = () => {
    return (
        <section className="mt-5 flex justify-center">
            <div className="mt-8 mb-8 w-full lg:w-[83%] rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 px-5 py-4">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                    {/* Left Side */}
                    <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">

                        {/* Icon */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2563eb] shadow-sm sm:h-14 sm:w-14">
                            <Bell
                                size={22}
                                className="fill-white text-white"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                                Get new jobs in your inbox
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                                Create a job alert and receive the latest opportunities
                                that match your preferences.
                            </p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="w-full md:w-auto">
                        <button className="flex h-11 w-full items-center justify-center rounded-xl bg-[#2563eb] px-6 text-sm font-semibold text-white transition hover:bg-[#1d4ed8] md:w-auto">
                            Create Job Alert
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};