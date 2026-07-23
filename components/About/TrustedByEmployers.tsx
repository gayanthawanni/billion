"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const logos = [
  { src: "/about/employers/Sampath.png", alt: "Sampath" },
  { src: "/about/employers/Softlogic.png", alt: "Softlogic" },
  { src: "/about/employers/Unilever.png", alt: "Unilever" },
  { src: "/about/employers/Virtusa.png", alt: "Virtusa" },
  { src: "/about/employers/WSO2.png", alt: "WSO2" },
  { src: "/about/employers/MAS.png", alt: "MAS" },
  { src: "/about/employers/HNB.png", alt: "HNB" },
  { src: "/about/employers/Dialog.png", alt: "Dialog" },
];

const CARD_W = 190;
const GAP = 40;
const PERIOD = logos.length * (CARD_W + GAP); // seamless loop period
const SPEED = 0.6; // px per frame

export default function TrustedByEmployers() {
  const loopLogos = [...logos, ...logos];
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0); // left-moving: starts at 0, goes to -PERIOD
  const pausedRef = useRef(false);
  const rafRef = useRef<number | undefined>(undefined);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const tick = () => {
      if (!pausedRef.current && trackRef.current) {
        offsetRef.current -= SPEED;
        if (offsetRef.current <= -PERIOD) offsetRef.current += PERIOD;
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
      if (resumeTimer.current !== undefined) clearTimeout(resumeTimer.current);
    };
  }, []);

  const handleNav = (dir: "prev" | "next") => {
    pausedRef.current = true;
    clearTimeout(resumeTimer.current);

    const delta = dir === "prev" ? CARD_W + GAP : -(CARD_W + GAP);
    offsetRef.current += delta;
    if (offsetRef.current >= 0) offsetRef.current -= PERIOD;
    if (offsetRef.current < -PERIOD) offsetRef.current += PERIOD;

    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.35s ease";
      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      setTimeout(() => {
        if (trackRef.current) trackRef.current.style.transition = "";
      }, 350);
    }

    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, 3000);
  };

  return (
    <section className="w-full bg-white pt-8 pb-12 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:max-w-[85%] lg:px-0">
        <div className="mb-5">
          <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#2563eb]">
            Trusted By Leading Employers
          </span>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

          <button
            onClick={() => handleNav("prev")}
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-[#e8ecf0] bg-white text-slate-400 shadow-sm transition hover:border-[#2563eb] hover:text-[#2563eb]"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => handleNav("next")}
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-[#e8ecf0] bg-white text-slate-400 shadow-sm transition hover:border-[#2563eb] hover:text-[#2563eb]"
          >
            <ChevronRight size={18} />
          </button>

          <div ref={trackRef} className="flex w-max items-center gap-10">
            {loopLogos.map((logo, index) => (
              <div
                key={index}
                className="flex h-[100px] w-[190px] shrink-0 items-center justify-center rounded-xl border border-[#d1d9e2] bg-white px-6"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={44}
                  className="h-auto max-h-[42px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
