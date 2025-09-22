"use client";

import Image from "next/image";

export default function MemberDashboardBanner() {
  return (
    <div className="relative w-full rounded-3xl bg-slate-900 text-white p-5 md:p-6 flex items-center justify-between min-h-[110px] overflow-visible">
      <div>
        <div className="text-lg md:text-xl font-medium mb-1">Anda Belum Melengkapi</div>
        <div className="text-2xl md:text-3xl font-semibold">Identitas Diri!</div>
        <a href="#" className="inline-flex items-center mt-4 px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-medium hover:bg-white/90">Join Now</a>
      </div>
      <div
        className="absolute right-4 bottom-0 hidden sm:block h-full w-56 md:w-72 lg:w-80 pointer-events-none"
        style={{ clipPath: "inset(-60% 0 0 0)" }}
      >
        <div className="relative h-[110%] w-full">
          <Image src="/avatars/manwc.png" alt="Illustration" fill className="object-contain object-bottom" />
        </div>
      </div>
    </div>
  );
}


