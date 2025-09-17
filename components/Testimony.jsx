// components/Testimony.jsx
"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Apakah BisaDitas Hanya Untuk Penyandang Disabilitas?",
    a: "Ya, BisaDitas didedikasikan khusus untuk membantu penyandang disabilitas menemukan peluang kerja yang sesuai dengan potensi mereka. Namun, perusahaan juga dapat bergabung untuk membuka lowongan kerja inklusif.",
  },
  { q: "Apakah Menggunakan BisaDitas Berbayar?", a: "Tidak, kandidat dapat menggunakan platform secara gratis." },
  { q: "Jenis Pekerjaan Apa Saja Yang Tersedia Di BisaDitas?", a: "Berbagai posisi dari junior hingga senior, remote maupun onsite." },
  { q: "Bagaimana Cara Melamar Pekerjaan Di BisaDitas?", a: "Buat profil, unggah CV, lalu lamar pekerjaan yang sesuai." },
  { q: "Apakah Perusahaan Bisa Bekerja Sama Dengan BisaDitas?", a: "Bisa, perusahaan dapat membuka pekerjaan inklusif bersama kami." },
];

function StarRow() {
  return (
    <div className="inline-flex items-center gap-0.5 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function TestiCard({ text, name, role }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5 bg-white">
      <p className="text-slate-600 text-sm mb-5">“{text}”</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-slate-200 inline-block" />
          <div>
            <div className="font-semibold text-slate-900 text-sm">{name}</div>
            <div className="text-xs text-slate-500">{role}</div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-slate-600 text-xs">
          <StarRow />
          <span className="ml-1">4.5/5</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimony() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* FAQ + CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
              FAQ Tentang BisaDitas
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-3">
              Pertanyaan Yang Sering
              <br className="hidden sm:block" /> Ditanyakan
              <span className="relative inline-block align-middle ml-2 rotate-6">
                <svg width="28" height="28" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
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
            </h3>
            <p className="text-slate-500 text-sm sm:text-base mb-5 max-w-lg">
              Semua yang perlu Anda ketahui tentang BisaDitas ada di sini. Cari jawabannya atau langsung hubungi kami.
            </p>
            <a href="#" className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white text-sm shadow">Tanya BisaDitas</a>
          </div>

          <div>
            <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 overflow-hidden bg-white">
              {faqs.map((item, idx) => (
                <li key={idx} className="p-4 sm:p-5">
                  <button
                    className="w-full flex items-center justify-between text-left text-slate-900 font-medium text-sm sm:text-base"
                    onClick={() => setOpen(open === idx ? -1 : idx)}
                  >
                    {item.q}
                    <span className="text-slate-400">{open === idx ? "▾" : "▸"}</span>
                  </button>
                  {open === idx && (
                    <p className="mt-2 text-xs sm:text-sm text-slate-600">{item.a}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Testimony heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            Testimoni
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Suara Pengguna BisaDitas Tentang
            <br className="hidden sm:block" /> BisaDitas
          </h3>
          <p className="text-slate-500 text-sm sm:text-base max-w-3xl mx-auto mt-3">
            Ribuan penyandang disabilitas telah terbantu menemukan pekerjaan yang sesuai, serta perusahaan menemukan talenta terbaik bersama BisaDitas.
          </p>
          <div className="text-xs text-slate-500 mt-2">
            Trusted by <span className="font-semibold text-slate-700">7.000+ users</span> <StarRow /> <span className="ml-1 align-middle">4.5/5</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <TestiCard text="BisaDitas sangat membantu saya menemukan pekerjaan yang sesuai dengan kemampuan saya. Prosesnya mudah dan perusahaan yang saya temukan sangat ramah." name="Yoga Tonari" role="Mahasiswa" />
          <TestiCard text="BisaDitas sangat membantu saya menemukan pekerjaan yang sesuai dengan kemampuan saya. Prosesnya mudah dan perusahaan yang saya temukan sangat ramah." name="Yoga Tonari" role="Mahasiswa" />
          <TestiCard text="BisaDitas sangat membantu saya menemukan pekerjaan yang sesuai dengan kemampuan saya. Prosesnya mudah dan perusahaan yang saya temukan sangat ramah." name="Yoga Tonari" role="Mahasiswa" />
        </div>
      </div>
    </section>
  );
}


