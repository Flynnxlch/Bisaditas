// components/Hero.jsx
"use client";

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
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28 relative">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            Strategisasi BisaDitas
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900 mb-6">
          <span className="whitespace-nowrap">
            Temukan Pekerjaan {" "}
            <span className="relative inline-block text-blue-600 font-extrabold">
              Strategis
              {/* underline extended and more curved */}
              <svg className="absolute -bottom-2 left-0 w-[135%] h-4 text-blue-500" viewBox="0 0 140 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 14 C 30 4, 90 22, 138 10" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {/* trophy badge stylized to match design */}
              <span className="absolute -right-14 -top-3 hidden sm:block drop-shadow">
                <svg width="52" height="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                  <g transform="rotate(12 26 26)">
                    <rect x="6" y="6" width="40" height="40" rx="11" fill="#2563EB"/>
                    <g stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none">
                      {/* bowl */}
                      <path d="M18 20h16v1c0 4-4 7-8 7s-8-3-8-7v-1z"/>
                      {/* stem */}
                      <path d="M24 28v4h4v-4"/>
                      {/* base */}
                      <path d="M20 34h12v3H20z"/>
                      {/* handles */}
                      <path d="M18 21h-3c-2.5 0-3 5 1 5h2"/>
                      <path d="M34 21h3c2.5 0 3 5-1 5h-2"/>
                    </g>
                  </g>
                </svg>
              </span>
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
      </div>

      {/* subtle radial backdrop glow, keeps base background white */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-24 -z-10 w-[900px] h-[520px] rounded-full bg-blue-100/50 blur-3xl"></div>
    </section>
  );
}
