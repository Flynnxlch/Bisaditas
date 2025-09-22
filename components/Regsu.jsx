"use client";

import Image from "next/image";
import Link from "next/link";

export default function Regsu(props) {
  const { onGoLogin, onGoHome } = props || {};
  return (
    <div className="max-w-md w-full mx-auto">
      <Link href="/" className="inline-flex items-center gap-2 mb-8">
        <span className="relative w-8 h-8">
          <Image src="/logos/logox.png" alt="BisaDitas" fill className="object-contain" />
        </span>
        <span className="text-sm font-semibold leading-none text-slate-900">BisaDitas</span>
      </Link>

      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Selamat! Akun Anda Berhasil Terdaftar.</h1>
      <p className="text-slate-500 text-sm mb-8">Akun Anda telah terdaftar. Silahkan untuk login kembali.</p>

      <div className="space-y-4">
        {onGoLogin ? (
          <button
            type="button"
            onClick={onGoLogin}
            className="w-full inline-flex items-center justify-center px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow transition"
          >
            Login Sekarang
          </button>
        ) : (
          <Link href="/auth/login" className="w-full inline-flex items-center justify-center px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow transition">Login Sekarang</Link>
        )}

        {onGoHome ? (
          <button
            type="button"
            onClick={onGoHome}
            className="w-full inline-flex items-center justify-center px-4 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium transition"
          >
            Kembali Ke Home
          </button>
        ) : (
          <Link href="/" className="w-full inline-flex items-center justify-center px-4 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium transition">Kembali Ke Home</Link>
        )}
      </div>
    </div>
  );
}


