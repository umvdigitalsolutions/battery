"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Carousel({ images = [], interval = 4000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images, interval]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative">
      <div className="relative h-72 md:h-96 rounded-[28px] overflow-hidden border border-zinc-200 bg-white">
        {images.map((src, i) => (
          <div
            key={src + i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
          >
            <Image src={src} alt={`slide-${i}`} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
          </div>
        ))}
      </div>

      <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow">
        ‹
      </button>
      <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow">
        ›
      </button>

      <div className="mt-3 flex items-center justify-center gap-2">
        {images.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`h-2 w-8 rounded-full transition ${i===index?"bg-blue-700":"bg-zinc-300"}`} aria-label={`Go to slide ${i+1}`}></button>
        ))}
      </div>
    </div>
  );
}
