// components/Hero.jsx
"use client";

import RevealOnScroll from "@/components/RevealOnScroll";

function PlaceholderLogo({ width = 96, height = 32 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 96 32"
      xmlns="http://www.w3.org/2000/svg"
      className="text-slate-400"
    >
      <rect x="0.5" y="0.5" width="95" height="31" rx="6" fill="white" stroke="#E5E7EB" />
      <g fill="currentColor">
        <rect x="10" y="9" width="14" height="14" rx="3" fill="#E5E7EB" />
        <rect x="30" y="12" width="52" height="8" rx="4" />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FCFCFC] mt-[64px] md:mt-[72px]">
      <RevealOnScroll threshold={0.6} className="max-w-6xl mx-auto px-6 py-20 lg:py-28 relative">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            Strategisasi BisaDitas
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-slate-900 mb-6">
          <span className="whitespace-nowrap">
            Temukan Pekerjaan {" "}
            <span className="relative inline-block text-blue-600 font-extrabold">
              Strategis
              {/* underline extended and more curved */}
              <svg className="absolute -bottom-2 left-0 w-[135%] h-4 text-blue-500" viewBox="0 0 140 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 14 C 30 4, 90 22, 138 10" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {/* trophy -> emoji */}
              <span className="absolute -right-12 -top-4 hidden sm:block text-3xl drop-shadow rotate-[28deg]">🏆</span>
            </span>
          </span>
          <br className="hidden sm:block" />
          Anda dengan {" "}
          <span className="relative">BisaDitas</span>.
        </h1>

        {/* Subheading */}
        <p className="text-center text-slate-500 max-w-3xl mx-auto mb-10">
          Membuka akses kerja inklusif bagi penyandang disabilitas, sekaligus membangun ekosistem
          kerja yang adil dan berkelanjutan.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md hover:shadow-lg transition hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
            Coba Solusi Kami
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
            Kontak Kami
          </a>
        </div>

        {/* Users improving skill */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-16">
          <img src="/avatars/user-group.svg" alt="user group" className="h-6 sm:h-7 w-auto" />
          <div className="text-sm text-slate-600 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            User Sedang Meningkatkan Skill
          </div>
        </div>

        {/* Floating testimonial card (left) */}
        <div className="hidden md:flex items-center gap-3 px-3 py-2 bg-black text-white rounded-xl shadow-lg absolute left-0 md:left-[10px] lg:left-[40px] top-[56%] -translate-y-1/2">
          <img src="/avatars/partner.svg" alt="partner" className="w-8 h-8 rounded-lg ring-2 ring-white/20" />
          <div className="leading-tight">
            <div className="text-xs font-medium">Vinzo Bareli</div>
            <div className="text-[10px] text-white/70">HR di Dibimbing</div>
          </div>
          <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-black" />
        </div>

        {/* Floating profile badge (top-right) */}
        <div className="hidden md:flex items-center gap-3 px-3 py-2 bg-blue-600 text-white rounded-xl shadow-lg absolute right-6 lg:right-20 top-4">
          <img src="/avatars/partner.svg" alt="partner" className="w-8 h-8 rounded-lg ring-2 ring-white/30" />
          <div className="leading-tight">
            <div className="text-xs font-medium">Vinzo Bareli</div>
            <div className="text-[10px] text-blue-100">HR di Dibimbing</div>
          </div>
        </div>

        {/* Removed floating trophy bubble; now attached to Strategis word */}
      </RevealOnScroll>

      {/* radial circular background behind heading & subheading */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-6 -z-10">
        <div className="w-[1100px] h-[1100px] rounded-full bg-blue-200/30 blur-[120px]"></div>
      </div>
    </section>
  );
}
