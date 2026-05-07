"use client";

import Link from "next/link";
import Carousel from "../components/Carousel";

export default function Hero() {
  return (
    <section className="relative w-full overflow-x-hidden bg-white py-8 sm:py-16 lg:py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-40px] top-0 h-44 w-44 rounded-full bg-red-100 blur-2xl sm:left-0 sm:h-72 sm:w-72 md:h-[420px] md:w-[420px]" />
        <div className="absolute right-[-40px] bottom-0 h-44 w-44 rounded-full bg-blue-100 blur-2xl sm:right-0 sm:h-72 sm:w-72 md:h-[420px] md:w-[420px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8 md:grid-cols-2 md:gap-10">
        {/* LEFT CONTENT */}
        <div className="min-w-0 text-center md:text-left">
          <div className="mb-4 inline-flex max-w-full items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 sm:mb-5 sm:px-4 sm:text-sm">
            ANAY INFINITY Pvt Ltd
          </div>

          <h1 className="balanced-heading max-w-full break-words text-3xl font-black leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Powering progress.
            <span className="block bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Built on trust.
            </span>
          </h1>

          <p className="justified-copy mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-600 sm:mt-6 sm:text-lg sm:leading-8 md:mx-0">
            Scalable energy and trading solutions across battery distribution,
            solar EPC, power backup systems, and global exports - supported by
            a strong dealer network and nationwide logistics.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex w-full flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <Link
              href="/products"
              className="inline-flex w-full max-w-[240px] items-center justify-center rounded-xl bg-blue-700 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:bg-blue-800 sm:w-auto sm:max-w-none sm:px-6"
            >
              Explore Products
            </Link>

            <Link
              href="/contact"
              className="inline-flex w-full max-w-[240px] items-center justify-center rounded-xl border border-zinc-300 bg-white px-4 py-3 text-center text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100 sm:w-auto sm:max-w-none sm:px-6"
            >
              Contact Us
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-zinc-200 pt-6 sm:mt-12 sm:gap-6 sm:pt-8">
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-red-600 sm:text-3xl">
                20+
              </h3>
              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                Years Legacy
              </p>
            </div>

            <div className="min-w-0">
              <h3 className="text-xl font-bold text-blue-700 sm:text-3xl">
                390+
              </h3>
              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                Dealers Network
              </p>
            </div>

            <div className="min-w-0">
              <h3 className="text-xl font-bold text-red-600 sm:text-3xl">
                Pan India
              </h3>
              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                Operational Reach
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Carousel */}
        <div className="relative mx-auto mt-6 w-full max-w-md overflow-hidden md:mt-0 md:max-w-none">
          <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-r from-red-200 to-blue-200 blur-2xl sm:-inset-4 sm:rounded-[32px]" />

          <div className="relative w-full overflow-hidden p-2 sm:p-6">
            <Carousel
              images={[
                "/microtek.jpg",
                "/LUMINOUS.jpg",
                "/inverter.png",
                "/hbl.png",
                "/exideindustrial.png",
                "/exide.jpg",
                "/automotive.png",
                "/nexvolt5.jpeg",
                "/nexvolt4.jpeg",
                "/nexvolt3 (1).jpeg",
                "/nexvolt2.png",
                "/nexvolt1.png",
                "/solar.png",
                "/sf.jpeg",
                "/okayaindustrial.png",
                "/ups.png",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}