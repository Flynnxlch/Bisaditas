// components/Jobland.jsx
export default function Jobland() {
  const jobs = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: "Junior Programmer",
    desc:
      i < 2
        ? "Membuat website dengan menggunakan teknologi modern dan best practice."
        : "Lorem ipsum dolor sit amet consectetur. Lectus arcu.",
    level: "Junior",
    duration: "3 Bulan",
    salary: "Rp 2.000.000",
    urgent: true,
  }));

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-16">
        {/* Header */}
        <div className="flex items-start justify-between gap-6 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
              Peluang Kerja BisaDitas
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-snug">
              Peluang Kerja Terbaru di
              <br className="hidden sm:block" />
              <span className="relative inline-block mt-1">
                BisaDitas
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-500" viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10 C 25 2, 75 14, 98 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>.
              <span className="align-middle ml-2 inline-block rotate-6">
                <svg width="36" height="36" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                  <g transform="rotate(12 26 26)">
                    <rect x="6" y="6" width="40" height="40" rx="11" fill="#2563EB"/>
                    <g stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
                      <path d="M18 20h16v1c0 4-4 7-8 7s-8-3-8-7v-1z"/>
                      <path d="M24 28v4h4v-4"/>
                      <path d="M20 34h12v3H20z"/>
                      <path d="M18 21h-3c-2.5 0-3 5 1 5h2"/>
                      <path d="M34 21h3c2.5 0 3 5-1 5h-2"/>
                    </g>
                  </g>
                </svg>
              </span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl text-sm sm:text-base">
              Peluang kerja inklusif kini ada di genggaman Anda. Daftar sekarang dan
              mulailah perjalanan karir bersama BisaDitas.
            </p>
          </div>

          <a
            href="#"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm shadow hover:shadow-md self-start transition hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
          >
            Lihat Pekerjaan Lainnya
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job) => (
            <article key={job.id} className="relative rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md transition-all">
              {/* status chip */}
              {job.urgent && (
                <span className="absolute right-4 top-4 text-[11px] font-semibold text-red-500">ASAP</span>
              )}

              {/* header icon */}
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/30">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 7l-8-4-8 4 8 4 8-4z"/>
                    <path d="M4 7v10l8 4 8-4V7"/>
                  </svg>
                </span>
              </div>

              <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1">{job.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 mb-4">{job.desc}</p>

              <div className="grid grid-cols-3 gap-3 text-[11px] sm:text-xs text-slate-600 mb-4">
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 7h18M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2M6 7v12m12-12v12M3 19h18"/>
                  </svg>
                  {job.level}
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  {job.duration}
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1v22M5 6h14M5 12h14M5 18h14"/>
                  </svg>
                  Salary
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-900">{job.salary}</div>
                <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 rounded-md px-1">Lamar</a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA on mobile */}
        <div className="sm:hidden mt-6 text-center">
          <a href="#" className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm shadow hover:shadow-md transition hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">Lihat Pekerjaan Lainnya</a>
        </div>
      </div>
    </section>
  );
}




