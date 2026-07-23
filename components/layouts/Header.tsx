"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  BriefcaseBusiness,
  UserRound,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  "Home",
  "Jobs",
  "Companies",
  "Career Resources",
  "Employers",
  "About Us",
  "Contact",
];

const navHrefs: Record<string, string> = {
  Home: "/",
  Jobs: "/jobs",
  "About Us": "/about",
  Contact: "/contact",
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const activeItem =
    navLinks.find((item) => navHrefs[item] === pathname) ?? "Home";

  return (
    <header className="sticky top-0 z-50 w-full bg-[#031835] shadow-lg shadow-blue-950/0">
      <div className="mx-auto flex h-[9vh] min-h-16 max-h-20 max-w-[97%] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        {/* LOGO */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo22.png"
            alt="Jobs360.lk"
            width={1000}
            height={320}
            className="h-[6vh] min-h-[26px] max-h-[32px] w-auto"
            priority
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 xl:flex xl:gap-7">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={navHrefs[item] ?? "#"}
              className="relative whitespace-nowrap pb-1 text-[14px] font-medium text-white/85 transition-all duration-200 hover:text-white"
            >
              <span className="flex items-center gap-1">
                {item}
                {item === "Career Resources" && (
                  <ChevronDown size={13} strokeWidth={2} />
                )}
              </span>

              {item === activeItem && (
                <span className="absolute bottom-0 left-0 h-[2.5px] w-full rounded-full bg-[#38bdf8]" />
              )}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex shrink-0 items-center gap-4">
          {/* Recruiter Login */}
          <button className="hidden h-10 items-center gap-2 rounded-lg border border-white/20 bg-transparent px-6 text-[14px] font-medium text-white transition-all duration-150 hover:bg-white/10 md:flex">
            <BriefcaseBusiness size={16} />
            <span className="hidden lg:inline">Recruiter Login</span>
            <span className="lg:hidden">Recruiter</span>
          </button>

          {/* Job Seeker Login */}
          <Link
            href="/login/jobseeker"
            className="hidden h-10 items-center gap-2 rounded-lg bg-[#2563eb] px-6 text-[14px] font-semibold text-white shadow-md shadow-blue-950/30 transition-all duration-150 hover:bg-[#1d4ed8] sm:flex"
          >
            <UserRound size={16} />
            <span className="hidden lg:inline">Job Seeker Login</span>
            <span className="lg:hidden">Job Seeker</span>
          </Link>

          {/* Mobile only — icon button */}
          <Link
            href="/login/jobseeker"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2563eb] text-white sm:hidden"
            aria-label="Job Seeker Login"
          >
            <UserRound size={18} />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-white/10 xl:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE / TABLET DROPDOWN MENU */}
      <div
        className={`xl:hidden overflow-hidden bg-[#0a1628] transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-[650px] border-t border-white/10 shadow-2xl"
            : "invisible max-h-0"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-md flex-col gap-1.5 px-6 py-4 text-center">
          {/* Nav Links */}
          {navLinks.map((item) => (
            <Link
              key={item}
              href={navHrefs[item] ?? "#"}
              onClick={() => setMenuOpen(false)}
              className="group flex w-full items-center justify-center rounded-lg px-3 py-2.5 text-[15px] font-medium text-white/80 transition-all duration-150 hover:bg-white/5 hover:text-white"
            >
              <span className="flex items-center gap-1 tracking-wide">
                {item}
                {item === "Career Resources" && (
                  <ChevronDown
                    size={16}
                    className="text-white/40 transition-colors group-hover:text-white"
                  />
                )}
              </span>
            </Link>
          ))}

          {/* Divider */}
          <div className="my-2 w-full border-t border-white/10" />

          {/* Buttons Layout */}
          <div className="flex w-full flex-col items-center gap-3 pb-2 pt-1">
            <button className="flex h-12 w-48 items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-4 text-[14px] font-medium text-white transition-all duration-150 hover:bg-white/10">
              <BriefcaseBusiness size={16} />
              Recruiter Login
            </button>

            <Link
              href="/login/jobseeker"
              onClick={() => setMenuOpen(false)}
              className="flex h-12 w-48 items-center justify-center gap-2 rounded-lg bg-[#2563eb] px-4 text-[14px] font-semibold text-white shadow-md shadow-blue-950/30 transition-all duration-150 hover:bg-[#1d4ed8]"
            >
              <UserRound size={16} />
              Job Seeker Login
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
