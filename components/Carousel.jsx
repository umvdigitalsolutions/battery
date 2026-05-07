"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Carousel({ images = [], interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images, interval]);

  const prev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };

  if (!images || images.length === 0) return null;

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;

    const delta = touchStartX.current - touchEndX.current;

    if (Math.abs(delta) > 50) {
      if (delta > 0) next();
      else prev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="relative w-full max-w-full overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative h-52 w-full max-w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white sm:h-72 sm:rounded-[28px] md:h-96">
        {images.map((src, i) => (
          <div
            key={src + i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`slide-${i + 1}`}
              fill
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 50vw, 600px"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl font-bold text-zinc-800 shadow-md backdrop-blur transition hover:bg-white sm:left-3 sm:h-10 sm:w-10 sm:text-2xl"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl font-bold text-zinc-800 shadow-md backdrop-blur transition hover:bg-white sm:right-3 sm:h-10 sm:w-10 sm:text-2xl"
          >
            ›
          </button>

          <div className="mt-3 flex w-full max-w-full flex-wrap items-center justify-center gap-1.5 overflow-hidden px-2 sm:gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-5 bg-blue-700 sm:w-8"
                    : "w-2 bg-zinc-300 sm:w-4"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}