"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-[#09090B]">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div>
          <div className="mb-5 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300">
            Premium Energy & Power Solutions
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight text-zinc-900 dark:text-white md:text-6xl">
            Powering The Future
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              With Reliable Energy
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Trusted supplier of automotive batteries, inverter systems,
            industrial power solutions, UPS systems, and solar energy products
            with nationwide distribution and export capability.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/services"
              className="rounded-xl bg-blue-700 px-7 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-600"
            >
              Explore Products
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-zinc-300 px-7 py-4 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              Contact Us
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <div>
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">
                500+
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                Products
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">
                PAN India
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                Distribution
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">
                Export
              </h3>
              <p className="mt-1 text-sm text-zinc-500">
                Ready
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src="/infi.jpeg"
              alt="Anay Infinity"
              width={1400}
              height={900}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}