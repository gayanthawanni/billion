"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Companies", href: "#" },
  { label: "Career Resources", href: "#" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubscribing, setIsSubscribing] = useState(false);

  async function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubscribing) {
      return;
    }

    setIsSubscribing(true);
    setNewsletterStatus(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to complete your subscription.");
      }

      setNewsletterEmail("");
      setNewsletterStatus({
        type: "success",
        message: "Subscription confirmed. Please check your inbox for our welcome email.",
      });
    } catch (error) {
      setNewsletterStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to complete your subscription.",
      });
    } finally {
      setIsSubscribing(false);
    }
  }

  return (      
      <footer className="bg-[#0a1628] text-white">
        <div className="footer-inner">

          {/* ── TOP GRID ── */}
          <div className="footer-grid">

            {/* Brand */}
            <div className="footer-brand col-span-1">
              <Link href="/" aria-label="Jobs360.lk home" className="inline-flex">
                <Image
                  src="/logo22.png"
                  alt="Jobs360.lk"
                  width={1000}
                  height={320}
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <p className="mt-3 text-[13px] leading-relaxed text-white/60 max-w-55">
                Connecting talent with opportunity. Find jobs, build your career and achieve your dreams.
              </p>
              <div className="mt-4 flex gap-2">
                {[
                  { src: "/footer/1.png", alt: "Facebook" },
                  { src: "/footer/2.png", alt: "LinkedIn" },
                  { src: "/footer/3.png", alt: "Instagram" },
                  { src: "/footer/4.png", alt: "YouTube" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h3 className="mb-4 text-sm font-semibold text-white">Quick Links</h3>
              <div className="flex flex-col gap-2.5">
                {quickLinks.map(item => (
                  <Link 
                    key={item.label} 
                    href={item.href} 
                    className="text-[13px] text-white/60 no-underline hover:text-white/80"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Job Seekers */}
            <div className="footer-col">
              <h3 className="mb-4 text-sm font-semibold text-white">Job Seekers</h3>
              <div className="flex flex-col gap-2.5">
                {["Create Profile", "My Applications", "Saved Jobs", "Job Alerts", "Career Advice"].map(item => (
                  <Link 
                    key={item} 
                    href="#" 
                    className="text-[13px] text-white/60 no-underline hover:text-white/80"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Employers */}
            <div className="footer-col">
              <h3 className="mb-4 text-sm font-semibold text-white">Employers</h3>
              <div className="flex flex-col gap-2.5">
                {["Post a Job", "Browse CVs", "Pricing Plans", "Employer Login", "Hiring Solutions"].map(item => (
                  <Link 
                    key={item} 
                    href="#" 
                    className="text-[13px] text-white/60 no-underline hover:text-white/80"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer-newsletter">
              <h3 className="mb-3 text-sm font-semibold text-white">Stay Updated</h3>
              <p className="mb-3.5 text-[13px] leading-relaxed text-white/60">
                Subscribe to get the latest job updates and career tips.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="newsletter-row">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(event) => setNewsletterEmail(event.target.value)}
                  placeholder="Enter your email"
                  required
                  className="h-11 flex-1 bg-white border-none outline-none px-3.5 text-[13px] text-slate-700 min-w-0"
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="h-11 bg-blue-600 border-none px-4 text-[13px] font-semibold text-white cursor-pointer whitespace-nowrap hover:bg-blue-700 transition-colors disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
              {newsletterStatus && (
                <p
                  className={`mt-3 rounded-md px-3 py-2 text-[12px] font-medium leading-relaxed ${
                    newsletterStatus.type === "success"
                      ? "bg-emerald-500/10 text-emerald-200"
                      : "bg-red-500/10 text-red-200"
                  }`}
                >
                  {newsletterStatus.message}
                </p>
              )}
            </div>

          </div>

          {/* ── BOTTOM BAR ── */}
          <div className="footer-bottom">
            <p className="flex-1 text-[13px] text-white/40">
              © 2026 Jobs360.lk. All Rights Reserved.
            </p>
            <p className="flex-1 text-center text-[13px] text-white/40">
              Designed &amp; Developed by{" "}
              <Link
                href="https://www.cloudedesign.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/60 no-underline hover:text-white"
              >
                CloudeDesign
              </Link>
            </p>
            <div className="footer-legal flex flex-1 items-center justify-end gap-2 text-[13px] text-white/40">
              <Link href="#" className="text-white/40 no-underline hover:text-white/60">Privacy Policy</Link>
              <span className="opacity-30">|</span>
              <Link href="#" className="text-white/40 no-underline hover:text-white/60">Terms of Use</Link>
              <span className="opacity-30">|</span>
              <Link href="#" className="text-white/40 no-underline hover:text-white/60">Sitemap</Link>
            </div>
          </div>

        </div>
      </footer>
  );
}
