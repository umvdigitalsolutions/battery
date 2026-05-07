"use client";

import { useState } from "react";
import Image from "next/image";

const products = [
  {
    title: "Battery Distribution",
    desc: "Reliable supply of automotive, inverter, UPS, and industrial batteries.",
    img: "/automotive.png",
    categories: [
      "Automotive Batteries",
      "Inverter Batteries",
      "UPS Batteries",
      "Industrial Batteries",
      "SMF Batteries",
      "Tubular Batteries",
    ],
  },
  {
    title: "Solar EPC & Energy Solutions",
    desc: "Complete solar energy solutions for homes, businesses, and industries.",
    img: "/solar.png",
    categories: [
      "Solar Panels",
      "Solar Inverters",
      "Solar Batteries",
      "On-Grid Solar System",
      "Off-Grid Solar System",
      "Commercial Solar EPC",
    ],
  },
  {
    title: "UPS & Power Backup Systems",
    desc: "Advanced UPS systems and uninterrupted backup infrastructure.",
    img: "/inverter.png",
    categories: [
      "Online UPS",
      "Offline UPS",
      "Commercial UPS",
      "Home Inverters",
      "Stabilizers",
      "Power Backup Systems",
    ],
  },
  {
    title: "Global Exports & Trading",
    desc: "International export and sourcing of premium energy products.",
    img: "/export.png",
    categories: [
      "Battery Export",
      "Solar Product Export",
      "Industrial Components",
      "Energy Products",
      "Trading Solutions",
      "Bulk Supply",
    ],
  },
  {
    title: "Industrial Batteries",
    desc: "Heavy-duty battery systems for industrial applications.",
    img: "/industrial.png",
    categories: [
      "Forklift Batteries",
      "Traction Batteries",
      "Telecom Batteries",
      "Railway Batteries",
      "Industrial Backup Batteries",
      "Heavy-Duty Battery Banks",
    ],
  },
  {
    title: "EV & Energy Storage",
    desc: "EV battery packs and smart energy storage technologies.",
    img: "/ev.png",
    categories: [
      "EV Battery Packs",
      "Lithium Batteries",
      "Energy Storage Systems",
      "Charging Solutions",
      "Battery Management Systems",
      "Custom Battery Packs",
    ],
  },
];

export default function ProductsList() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="relative w-full overflow-x-hidden bg-white py-6 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 sm:mb-10">
            <p className="justified-copy max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              High-performance energy products designed for reliability,
              efficiency, and long-term performance across residential,
              commercial, industrial, and export markets.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {products.map((p) => (
              <button
                key={p.title}
                type="button"
                onClick={() => setSelectedProduct(p)}
                className="group w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:rounded-[28px]"
              >
                <div className="relative h-48 overflow-hidden sm:h-64">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                <div className="p-5 sm:p-7">
                  <h3 className="balanced-heading mb-3 text-xl font-bold text-zinc-900 sm:text-2xl">
                    {p.title}
                  </h3>

                  <p className="justified-copy text-sm leading-7 text-zinc-600">
                    {p.desc}
                  </p>

                  <span className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-blue-700 px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:opacity-90 sm:mt-7 sm:w-auto sm:px-6">
                    View Categories
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 backdrop-blur-sm sm:p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl animate-[popup_0.25s_ease] overflow-y-auto rounded-2xl bg-white shadow-2xl sm:rounded-[32px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl font-bold text-zinc-900 shadow-lg hover:bg-zinc-100 sm:right-4 sm:top-4"
            >
              ×
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[220px] bg-zinc-100 sm:min-h-[360px]">
                <Image
                  src={selectedProduct.img}
                  alt={selectedProduct.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 60vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-5 sm:p-8 md:p-10">
                <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
                  Product Categories
                </div>

                <h3 className="balanced-heading text-2xl font-black text-zinc-900 sm:text-3xl">
                  {selectedProduct.title}
                </h3>

                <p className="justified-copy mt-3 text-zinc-600">
                  {selectedProduct.desc}
                </p>

                <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                  {selectedProduct.categories.map((item) => (
                    <div
                      key={item}
                      className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-4 text-left text-sm font-semibold text-zinc-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg sm:rounded-2xl sm:px-5 sm:py-5"
                    >
                      <div className="h-3 w-3 rounded-full bg-gradient-to-r from-red-600 to-blue-700" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-blue-700 px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:opacity-90 sm:w-auto sm:px-6"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes popup {
          from {
            opacity: 0;
            transform: scale(0.92) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  );
}