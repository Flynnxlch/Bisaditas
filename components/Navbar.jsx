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
    <header className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <Image src="/logos/logobd.jpg" alt="BisaDitas" fill className="object-contain" />
          </div>
          <span className="text-base font-semibold text-slate-900">BisaDitas</span>
        </Link>

        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm ${active ? "text-blue-600 font-medium" : "text-slate-600 hover:text-slate-900"}`}
              >
                {item.label}
                {active && <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full" />}
              </Link>
            );
          })}
        </nav>

        
        <div className="flex items-center gap-4">
          <Link
            href="/auth/register"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-sm hover:opacity-95"
            aria-label="Register"
          >
            Register
          </Link>

         
          <button className="md:hidden p-2 rounded-md bg-slate-100" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
