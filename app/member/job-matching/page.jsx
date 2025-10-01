"use client";

import JobMatchingContent from "@/components/content/JobMatchingContent";
import NavDash from "@/components/NavDash";
import SidebarMe from "@/components/SidebarMe";

export default function MemberJobMatchingPage() {
  return (
    <section className="min-h-screen theme-transition" style={{backgroundColor: 'var(--bg-primary)'}}>
      <div className="w-full flex gap-[6px]">
        <SidebarMe />
        <main className="flex-1 min-w-0 p-6 lg:p-8 overflow-x-hidden">
          <NavDash />
          
          {/* Main content */}
          <JobMatchingContent />
        </main>
      </div>
    </section>
  );
}
