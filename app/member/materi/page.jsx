"use client";

import MateriContent from "@/components/content/MateriContent";
import LastReadBanner from "@/components/LastReadBanner";
import MiniLead from "@/components/MiniLead";
import NavDash from "@/components/NavDash";
import SidebarMe from "@/components/SidebarMe";
import UserST from "@/components/UserST";
import UserStat from "@/components/UserStat";

export default function MemberMateriPage() {
  return (
    <section className="min-h-screen theme-transition" style={{backgroundColor: 'var(--bg-primary)'}}>
      <div className="w-full flex gap-[6px]">
        <SidebarMe />
        <main className="flex-1 min-w-0 p-6 lg:p-8 overflow-x-hidden">
          <NavDash />
          
          {/* Greeting Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 theme-transition" style={{color: 'var(--text-primary)'}}>
              Selamat Pagi, Chris
            </h1>
            <p className="text-lg theme-transition" style={{color: 'var(--text-secondary)'}}>
              Akses Materi baru dan Cek Lowongan Kerja Terbaru
            </p>
          </div>

          {/* Banner and UserStat Row */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 mb-6 items-start">
            <LastReadBanner />
            <UserStat theme="secondary" />
          </div>

          {/* Two-column content: main + right rail */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
            {/* Main content column */}
            <MateriContent />

            {/* Right rail: leaderboard and study time */}
            <div className="space-y-6">
              <MiniLead />
              <UserST />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
