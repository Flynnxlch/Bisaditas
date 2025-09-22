"use client";

import Regsu from "@/components/Regsu";
import Link from "next/link";

export default function RegisterSuccessPage() {
  return (
    <section className="min-h-screen bg-white relative">
      <Link href="/" aria-label="Kembali" className="hidden lg:inline-flex items-center justify-center absolute left-9 top-7 text-slate-700 hover:text-slate-900">
        <span className="text-3xl leading-none">&#8249;</span>
      </Link>
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 lg:pt-20 lg:pb-12 flex items-start lg:items-center">
        <Regsu />
      </div>
    </section>
  );
}


