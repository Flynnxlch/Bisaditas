"use client";

import EyeToggle from "@/components/EyeToggle";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm(props) {
  const { onSwitchToRegister } = props || {};
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Simple validation for prototype
    if (!email || !password) {
      alert('Email dan password harus diisi');
      return;
    }

    setIsLoading(true);

    // Simulate loading for better UX
    setTimeout(() => {
      // Direct navigation to dashboard (bypassing actual authentication)
      router.push('/member/dashboard');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <Link href="/" className="inline-flex items-center gap-2 mb-8">
        <span className="relative w-8 h-8">
          <Image src="/logos/logox.png" alt="BisaDitas" fill className="object-contain" />
        </span>
        <span className="text-sm font-semibold leading-none text-slate-900">BisaDitas</span>
      </Link>

      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Selamat Datang Kembali!</h1>
      <p className="text-slate-500 text-sm mb-8">Silahkan masukkan Gmail dan Password milik Anda.</p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm text-slate-700 mb-1">Gmail <span className="text-red-500">*</span></label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan Gmail Anda....." 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/60" 
          />
        </div>
        <div>
          <label className="block text-sm text-slate-700 mb-1">Password <span className="text-red-500">*</span></label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan Password Anda"
              className="w-full pr-12 px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
            />
            <div className="absolute inset-y-0 right-3 flex items-center">
              <EyeToggle open={showPassword} onToggle={() => setShowPassword(!showPassword)} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <label className="inline-flex items-center gap-2 text-sm text-slate-600">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
            Ingat Saya?
          </label>
          <Link href="#" className="text-sm text-blue-600 hover:text-blue-700">Lupa Password</Link>
        </div>
        <button 
          type="submit" 
          onClick={handleLogin}
          disabled={isLoading}
          className="w-full inline-flex items-center justify-center px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium shadow transition"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Memproses...
            </>
          ) : (
            'Login'
          )}
        </button>
        <div className="flex items-center gap-4 my-4">
          <span className="flex-1 h-px bg-slate-200" />
          <span className="text-xs text-slate-400">Atau Login dengan</span>
          <span className="flex-1 h-px bg-slate-200" />
        </div>
        <button 
          type="button" 
          onClick={handleLogin}
          disabled={isLoading}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 disabled:bg-slate-100 disabled:text-slate-400 text-slate-700 font-medium transition"
        >
          <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fill="#FFC107" d="M43.6 20.5h-1.3V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.9 0-12.5-5.6-12.5-12.5S17.1 11 24 11c3.2 0 6.1 1.2 8.3 3.2l5.7-5.7C34.5 5.1 29.5 3 24 3 12.3 3 3 12.3 3 24s9.3 21 21 21 21-9.3 21-21c0-1.3-.1-2.7-.4-4z"/>
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.2 0 6.1 1.2 8.3 3.2l5.7-5.7C34.5 5.1 29.5 3 24 3 15.3 3 7.8 8 6.3 14.7z"/>
            <path fill="#4CAF50" d="M24 45c5.4 0 10.5-2.1 14.3-5.7l-6.6-5.4C29.5 35.1 26.9 36 24 36c-5.3 0-9.8-3.4-11.4-8.1l-6.6 5.1C7.4 40.7 15.1 45 24 45z"/>
            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3C33.7 33.1 29.5 36 24 36c-4.2 0-7.8-2.4-9.6-5.9l-6.6 5.1C11.1 40.7 17.1 45 24 45c9 0 16.7-6.1 19.3-14.3.5-1.6.8-3.3.8-5.2 0-1.4-.1-2.8-.5-4z"/>
          </svg>
          Login Melalui Google
        </button>
        <p className="text-xs text-slate-500 text-center mt-4">
          Belum Memiliki Akun? {onSwitchToRegister ? (
            <button type="button" onClick={onSwitchToRegister} className="text-blue-600 hover:text-blue-700 font-medium">Daftar Disini</button>
          ) : (
            <Link href="/auth/register" className="text-blue-600 hover:text-blue-700 font-medium">Daftar Disini</Link>
          )}
        </p>
      </form>
    </div>
  );
}