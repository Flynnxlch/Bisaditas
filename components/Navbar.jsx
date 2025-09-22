// components/Navbar.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/product" },
    { label: "Solutions", href: "/solutions" },
    { label: "Resources", href: "/resources" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur border-b border-[#EFEFEF]">
      <div className="w-full mx-auto px-6 py-4 md:py-5 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-1 group">
          <div className="relative w-8 h-8">
            <Image src="/logos/logox.png" alt="BisaDitas" fill className="object-contain" />
          </div>
          <span className="hidden sm:block text-base md:text-lg font-semibold leading-none text-slate-900">BisaDitas</span>
        </Link>

        
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm px-3 py-2 rounded-full transition-all duration-300 ${
                  active
                    ? "text-blue-700 font-semibold bg-blue-50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 group`}
              >
                {item.label}
                {active && <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full" />}
                {/* Hover border bottom effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            );
          })}
        </nav>

        
        <div className="flex items-center gap-4">
          <Link
            href="/auth/login"
            className="hidden md:inline-flex items-center px-8 py-2 rounded-full bg-black text-white text-[13px] tracking-wide transition-transform hover:opacity-95 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            aria-label="Login"
          >
            Daftar
          </Link>

         
          <button className="md:hidden p-2 rounded-md bg-slate-100 hover:bg-slate-200 active:scale-[0.98] transition" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
