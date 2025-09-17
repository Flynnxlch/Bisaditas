"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoginCarousel() {
  const slides = ["/janish.png", "/janish.png", "/janish.png"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative rounded-[32px] overflow-hidden shadow-lg">
      <div className="relative w-[520px] h-[640px] bg-slate-100">
        {slides.map((src, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}>
            <Image src={src} alt="carousel" fill className="object-cover" priority={i === 0} />
          </div>
        ))}

        <div className="absolute left-6 right-6 bottom-24 text-white z-10">
          <h4 className="text-xl font-extrabold leading-snug">
            Kegiatan Edukasi Di Kebumen, Jateng.
          </h4>
          <p className="text-sm text-white/90 mt-2">
          Lorem ipsum dolor sit amet consectetur. Lectus arcu sed leo nulla ut leo facilisi....
          </p>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-2 z-10">
          {slides.map((_, i) => (
            <button key={i} aria-label={`Slide ${i + 1}`} onClick={() => setIndex(i)} className={`h-2 w-2 rounded-full ${index === i ? "bg-blue-500" : "bg-white/70"}`} />
          ))}
        </div>

        {/* gradients: top white fade, bottom dark for caption */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/20 to-transparent z-0 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/60 to-transparent z-0" />
      </div>
    </div>
  );
}


