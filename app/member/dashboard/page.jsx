"use client";

import DashPage from "@/components/DashPage";
import JobDash from "@/components/JobDash";
import NavDash from "@/components/NavDash";
import SidebarMe from "@/components/SidebarMe";

export default function MemberDashboardPage() {
  return (
    <section className="min-h-screen theme-transition" style={{backgroundColor: 'var(--bg-primary)'}}>
      <div className="w-full flex gap-[6px]">
        <SidebarMe />
        <main className="flex-1 min-w-0 p-6 lg:p-8 overflow-x-hidden">
          <NavDash />
          
          {/* Two-column content: main + right rail */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">
            {/* Main content column */}
            <DashPage />

            {/* Right rail: latest jobs */}
            <JobDash />
          </div>
        </main>
      </div>
    </section>
  );
}


