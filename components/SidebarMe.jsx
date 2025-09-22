"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

function NavIcon({ name }) {
  const common = {
    className: "w-[18px] h-[18px]",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "dashboard":
      return (<svg {...common}><path d="M3 13h8V3H3v10zm10 8h8v-6h-8v6zM3 21h8v-6H3v6zm10-8h8V3h-8v10z"/></svg>);
    case "materi":
      return (<svg {...common}><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20"/><path d="M4 4v15"/><path d="M8 4h12v16H8z"/></svg>);
    case "sertifikasi":
      return (<svg {...common}><path d="M12 15l3.5 2-1-4 3-2.9-4-.3L12 6l-1.5 3.8-4 .3 3 2.9-1 4z"/><path d="M12 17v5"/><path d="M9 22h6"/></svg>);
    case "mentorship":
      return (<svg {...common}><circle cx="9" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><path d="M2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1"/></svg>);
    case "jobs":
      return (<svg {...common}><path d="M4 7h16v10H4z"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>);
    case "leaderboard":
      return (<svg {...common}><path d="M7 21V9"/><path d="M17 21V3"/><path d="M12 21v-6"/></svg>);
    case "bell":
      return (<svg {...common}><path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5"/><path d="M9 17v1a3 3 0 0 0 6 0v-1"/></svg>);
    case "settings":
      return (<svg {...common}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .7.4 1.33 1.02 1.64.3.16.64.26.98.26H21a2 2 0 1 1 0 4h-.09c-.7 0-1.33.4-1.51 1z"/></svg>);
    case "support":
      return (<svg {...common}><path d="M12 21c4.97 0 9-3.58 9-8s-4.03-8-9-8-9 3.58-9 8c0 2.95 1.64 5.55 4.14 6.98L7 22l2.4-1.2c.82.13 1.66.2 2.6.2z"/></svg>);
    case "logout":
      return (<svg {...common}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>);
    default:
      return null;
  }
}

export default function SidebarMe() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const dragStartXRef = useRef(null);

  const items = [
    { label: "Dashboard", href: "/member/dashboard", icon: "dashboard" },
    { label: "Materi", href: "/member/materi", icon: "materi" },
    { label: "Sertifikasi", href: "/member/sertifikasi", icon: "sertifikasi", badge: true },
    { label: "Mentorship", href: "/member/mentorship", icon: "mentorship" },
    { label: "Job Matching", href: "/member/job-matching", icon: "jobs" },
    { label: "Leaderboard", href: "/member/leaderboard", icon: "leaderboard" },
    { label: "Notifications", href: "/member/notifications", icon: "bell" },
    { label: "Settings", href: "/member/settings", icon: "settings" },
    { label: "Support", href: "/member/support", icon: "support" },
    { label: "Logout", href: "/auth/login", icon: "logout", isLogout: true },
  ];

  const onHandleMouseDown = (e) => {
    dragStartXRef.current = e.clientX;
    const onMove = (ev) => {
      if (dragStartXRef.current == null) return;
      const dx = ev.clientX - dragStartXRef.current;
      if (dx < -30 && !collapsed) setCollapsed(true);
      if (dx > 30 && collapsed) setCollapsed(false);
    };
    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      dragStartXRef.current = null;
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  return (
    <div className="relative">
      <aside className={`${collapsed ? "w-[76px]" : "w-[300px]"} transition-all shrink-0 h-screen sticky top-0 flex flex-col rounded-r-lg theme-transition`} 
             style={{
               backgroundColor: 'var(--sidebar-bg)',
               borderColor: 'var(--border-color)',
               borderRightWidth: '1px'
             }}>
        <div className="px-4 pt-6 pb-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="relative w-8 h-8">
              <Image src="/logos/logox.png" alt="BisaDitas" fill className="object-contain" />
            </span>
            {!collapsed && <span className="text-sm font-semibold leading-none theme-transition" style={{color: 'var(--text-primary)'}}>BisaDitas</span>}
          </Link>
        </div>

        {/* Drag/click handle outside the sidebar border */}
        <button
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => setCollapsed(!collapsed)}
          onMouseDown={onHandleMouseDown}
          className="absolute -top-1 -right-4 z-20 w-6 h-20 rounded-xl shadow-sm flex items-center justify-center cursor-ew-resize group theme-transition"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border-color)',
            borderWidth: '1px'
          }}
        >
          <svg 
            className={`w-4 h-4 transition-colors ${collapsed ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            style={{color: 'var(--text-secondary)'}}
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

      {/* Fixed navigation content */}
      <div className="flex-1 flex flex-col">
        {/* All navigation items */}
        <nav className={`${collapsed ? "px-2" : "px-6"} py-2 space-y-2` }>
          {items.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center ${collapsed ? "justify-center" : "gap-3"} px-3 py-3 rounded-2xl transition-all w-full theme-transition ${
                  active ? "shadow" : "hover:bg-opacity-50"
                }`}
                style={{
                  backgroundColor: active ? 'var(--accent-color)' : 'transparent',
                  color: active ? 'white' : (item.isLogout ? '#dc2626' : 'var(--text-secondary)'),
                  '--hover-bg': 'var(--hover-bg)'
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.target.style.backgroundColor = 'var(--hover-bg)';
                    e.target.style.color = item.isLogout ? '#dc2626' : 'var(--text-primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = item.isLogout ? '#dc2626' : 'var(--text-secondary)';
                  }
                }}
              >
                <span className="inline-flex items-center justify-center w-5 h-5">
                  <NavIcon name={item.icon} />
                </span>
                {!collapsed && <span className="flex-1 text-sm font-medium">{item.label}</span>}
                {item.badge && <span className="inline-block w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_0_3px_rgba(37,99,235,0.25)]" />}
              </Link>
            );
          })}
        </nav>
      </div>
      </aside>
    </div>
  );
}

