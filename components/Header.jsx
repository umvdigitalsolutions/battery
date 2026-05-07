"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-[#0B1220] shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <div className="overflow-hidden rounded-xl bg-white p-1">
            <Image
              src="/infi.jpeg"
              alt="ANAY INFINITY"
              width={54}
              height={54}
              className="rounded-lg object-cover"
            />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-wide text-white">
              ANAY INFINITY
            </h1>

            <p className="text-sm text-slate-300">
              Batteries • Solar • UPS Solutions
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-slate-200 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-sm font-medium text-slate-200 transition hover:text-white"
          >
            Products
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-slate-200 transition hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu */}
        <button className="rounded-lg border border-white/20 px-3 py-2 text-white md:hidden">
          ☰
        </button>
      </div>
    </header>
  );
}