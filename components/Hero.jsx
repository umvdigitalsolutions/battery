"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-x-hidden bg-white py-10 sm:py-16 lg:py-24 dark:bg-[#09090B]">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl sm:h-[500px] sm:w-[500px]" />
        <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl sm:h-[300px] sm:w-[300px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* LEFT CONTENT */}
        <div className="min-w-0 text-center lg:text-left">
          <div className="mb-5 inline-flex max-w-full items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300 sm:px-4 sm:text-sm">
            Premium Energy & Power Solutions
          </div>

          <h1 className="max-w-full break-words text-4xl font-black leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl">
            Powering The Future
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              With Reliable Energy
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
            Trusted supplier of automotive batteries, inverter systems,
            industrial power solutions, UPS systems, and solar energy products
            with nationwide distribution and export capability.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <Link
              href="/services"
              className="inline-flex w-full max-w-[260px] items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-600 sm:w-auto sm:max-w-none sm:px-7 sm:py-4"
            >
              Explore Products
            </Link>

            <Link
              href="/contact"
              className="inline-flex w-full max-w-[260px] items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-center text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-200 dark:hover:bg-zinc-800 sm:w-auto sm:max-w-none sm:px-7 sm:py-4"
            >
              Contact Us
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-zinc-200 pt-6 dark:border-zinc-800 sm:mt-14 sm:gap-6 sm:pt-8">
            <div className="min-w-0">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white sm:text-3xl">
                500+
              </h3>
              <p className="mt-1 text-[11px] text-zinc-500 sm:text-sm">
                Products
              </p>
            </div>

            <div className="min-w-0">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white sm:text-3xl">
                PAN India
              </h3>
              <p className="mt-1 text-[11px] text-zinc-500 sm:text-sm">
                Distribution
              </p>
            </div>

            <div className="min-w-0">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white sm:text-3xl">
                Export
              </h3>
              <p className="mt-1 text-[11px] text-zinc-500 sm:text-sm">
                Ready
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-2xl sm:-inset-4 sm:rounded-[32px]" />

          <div className="relative overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-[32px]">
            <Image
              src="/infi.jpeg"
              alt="Anay Infinity"
              width={1400}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}