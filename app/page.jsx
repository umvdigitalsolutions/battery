"use client";

import Link from "next/link";
import Image from "next/image";
import Carousel from "../components/Carousel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-red-100 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-100 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div>
          <div className="mb-5 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
            ANAY INFINITY Pvt Ltd
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight text-zinc-900 md:text-6xl">
            Powering progress.
            <span className="block bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Built on trust.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Scalable energy and trading solutions across battery distribution,
            solar EPC, power backup systems, and global exports — supported by
            a strong dealer network and nationwide logistics.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="rounded-xl bg-blue-700 px-7 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-800"
            >
              Explore Products
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-zinc-300 bg-white px-7 py-4 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              Contact Us
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-zinc-200 pt-8">
            <div>
              <h3 className="text-3xl font-bold text-red-600">20+</h3>
              <p className="mt-1 text-sm text-zinc-500">Years Legacy</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-700">390+</h3>
              <p className="mt-1 text-sm text-zinc-500">Dealers Network</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-red-600">Pan India</h3>
              <p className="mt-1 text-sm text-zinc-500">Operational Reach</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Carousel */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-r from-red-200 to-blue-200 blur-2xl" />

          <div className="relative p-6">
            {/* Carousel shows multiple images from public/ */}
              <Carousel images={[
          
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
              ]} />
          </div>
        </div>
      </div>
    </section>
  );
}