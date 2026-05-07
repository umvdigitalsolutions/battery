"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full overflow-x-hidden border-b border-slate-800 bg-[#0B1220] shadow-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex min-w-0 items-center gap-3"
        >
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-white p-1 sm:h-12 sm:w-12">
            <Image
              src="/infi.jpeg"
              alt="ANAY INFINITY"
              width={48}
              height={48}
              className="h-full w-full rounded-lg object-cover"
              priority
            />
          </div>

          <div className="min-w-0">
            <h1 className="max-w-[150px] truncate text-sm font-bold tracking-wide text-white sm:max-w-none sm:text-lg">
              ANAY INFINITY
            </h1>
            <p className="max-w-[150px] truncate text-[11px] text-slate-300 sm:max-w-none sm:text-xs">
              Batteries | Solar | UPS
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 shadow-sm md:flex lg:mr-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 p-2 text-white shadow-sm transition hover:bg-white/20 md:hidden"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Premium Mobile Dropdown */}
      {open && (
        <div className="border-t border-white/10 bg-[#0B1220] px-4 pb-4 pt-2 shadow-2xl md:hidden">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-2 shadow-lg backdrop-blur">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
                >
                  <span>{item.name}</span>

                  <span className="text-base text-slate-400 transition group-hover:translate-x-1 group-hover:text-white">
                    →
                  </span>
                </Link>
              ))}

              <div className="mt-2 rounded-xl border border-blue-400/20 bg-blue-500/10 px-4 py-3">
                <p className="text-xs font-medium text-blue-200">
                  Premium Energy & Power Solutions
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Batteries • Solar • UPS
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}