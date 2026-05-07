"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-x-hidden border-t border-zinc-200 bg-white">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-[-60px] h-[220px] w-[220px] rounded-full bg-red-100 blur-3xl sm:left-0 sm:h-[250px] sm:w-[250px]" />
        <div className="absolute right-[-60px] top-0 h-[220px] w-[220px] rounded-full bg-blue-100 blur-3xl sm:right-0 sm:h-[250px] sm:w-[250px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {/* Company */}
          <div className="min-w-0 text-center sm:text-left">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm sm:h-14 sm:w-14">
                <Image
                  src="/infi.jpeg"
                  alt="ANAY INFINITY"
                  width={58}
                  height={58}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <h3 className="break-words text-xl font-black text-zinc-900">
                  ANAY INFINITY
                </h3>

                <p className="text-sm text-zinc-500">
                  Batteries | Solar | UPS
                </p>
              </div>
            </div>

            <p className="justified-copy mx-auto mt-6 max-w-sm text-sm leading-7 text-zinc-600 sm:mx-0 sm:text-base">
              Trusted supplier of premium batteries, solar energy systems, UPS
              solutions, and industrial power products across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="min-w-0 text-center sm:text-left">
            <h4 className="text-lg font-bold text-zinc-900">Quick Links</h4>

            <div className="mt-5 flex flex-col items-center gap-3 sm:mt-6 sm:items-start sm:gap-4">
              <Link
                href="/"
                className="text-zinc-600 transition hover:text-blue-700"
              >
                Home
              </Link>

              <Link
                href="/products"
                className="text-zinc-600 transition hover:text-blue-700"
              >
                Products
              </Link>

              <Link
                href="/contact"
                className="text-zinc-600 transition hover:text-blue-700"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="min-w-0 text-center sm:text-left">
            <h4 className="text-lg font-bold text-zinc-900">Contact</h4>

            <div className="mt-5 space-y-4 text-sm text-zinc-600 sm:mt-6 sm:text-base">
              <p>Jodhpur, Rajasthan, India</p>

              <a
                href="mailto:ansh@anayinfinity.com"
                className="block break-all transition hover:text-blue-700 sm:break-words"
              >
                ansh@anayinfinity.com
              </a>

              <a
                href="tel:+919468849961"
                className="block transition hover:text-blue-700"
              >
                +91 94688 49961
              </a>

              <a
                href="https://wa.me/919468849961"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-[220px] items-center justify-center rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-800 sm:w-auto sm:max-w-none"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-zinc-200 pt-6 sm:mt-14">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-zinc-500 sm:text-sm">
              © {year} ANAY INFINITY Pvt Ltd. All rights reserved.
            </p>

            <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 sm:text-sm">
              <span>Website by</span>

              <Image
                src="/umv.png"
                alt="UMV Digital Solutions"
                width={45}
                height={16}
                className="h-4 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}