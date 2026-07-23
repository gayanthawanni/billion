"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-[#0A0A0A]">
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
        
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center px-8 py-24 lg:px-20"
        >
          <div className="max-w-xl">

            <span className="text-xs uppercase tracking-[0.35em] text-[#C89B53]">
              ABOUT BILLION CORP
            </span>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-white">
              Investing in Vision.
              <br />
              Growing Exceptional
              <br />
              Businesses.
            </h2>

            <div className="mt-8 h-[2px] w-16 bg-[#C89B53]" />

            <p className="mt-8 text-[17px] leading-8 text-white/70">
              Founded with a vision to create sustainable long-term
              value, Billion Corp is the parent company behind a
              growing portfolio of businesses operating across
              multiple industries.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-white/70">
              We invest in companies with strong brands,
              exceptional leadership and scalable business
              models while providing strategic direction,
              governance and capital to accelerate growth.
            </p>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-[#C89B53] transition hover:gap-5"
            >
              Read More About Us

              <ArrowRight size={18} />
            </Link>

          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative min-h-[650px]"
        >
          <Image
            src="/home/about/1.png"
            alt="About Billion"
            fill
            className="object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}