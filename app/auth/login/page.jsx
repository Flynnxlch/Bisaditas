"use client";

import LoginCarousel from "@/components/LoginCarousel";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <section className="min-h-screen bg-white relative">
      {/* Back to landing - large chevron, no circle */}
      <Link href="/" aria-label="Kembali" className="hidden lg:inline-flex items-center justify-center absolute left-9 top-7 text-slate-700 hover:text-slate-900">
        <span className="text-3xl leading-none">&#8249;</span>
      </Link>

      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 lg:pt-20 lg:pb-12 flex flex-col lg:flex-row items-start lg:items-center gap-10">
        <div className="relative w-full">
          <div className={`transition-opacity duration-300 ${isRegister ? "opacity-0 pointer-events-none absolute inset-0" : "opacity-100 relative"}`}>
            <LoginForm onSwitchToRegister={() => setIsRegister(true)} />
          </div>
          <div className={`transition-opacity duration-300 ${isRegister ? "opacity-100 relative" : "opacity-0 pointer-events-none absolute inset-0"}`}>
            <RegisterForm onSwitchToLogin={() => setIsRegister(false)} />
          </div>
        </div>
        <span className="hidden lg:block w-[3px] self-stretch bg-transparent" />
        <div className="hidden lg:block">
          <LoginCarousel />
        </div>
      </div>
    </section>
  );
}


