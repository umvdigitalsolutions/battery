"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-zinc-200 bg-white">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 bottom-0 h-[250px] w-[250px] rounded-full bg-red-100 blur-3xl" />
        <div className="absolute right-0 top-0 h-[250px] w-[250px] rounded-full bg-blue-100 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14">
        
        <div className="grid gap-12 md:grid-cols-3">

          {/* Company */}
          <div>
            <div className="flex items-center gap-4">
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                <Image
                  src="/infi.jpeg"
                  alt="ANAY INFINITY"
                  width={58}
                  height={58}
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-black text-zinc-900">
                  ANAY INFINITY
                </h3>

                <p className="text-sm text-zinc-500">
                  Batteries • Solar • UPS
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-sm leading-7 text-zinc-600">
              Trusted supplier of premium batteries, solar energy systems,
              UPS solutions, and industrial power products across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-zinc-900">
              Quick Links
            </h4>

            <div className="mt-6 flex flex-col gap-4">
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
          <div>
            <h4 className="text-lg font-bold text-zinc-900">
              Contact
            </h4>

            <div className="mt-6 space-y-4 text-zinc-600">
              <p>Jodhpur, Rajasthan, India</p>

              <a
                href="mailto:ansh@anayinfinity.com"
                className="block transition hover:text-blue-700"
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
                className="inline-flex rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-800"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500">
          © {year} ANAY INFINITY Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}