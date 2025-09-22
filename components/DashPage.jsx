"use client";

import MemberDashboardBanner from "@/components/MemberDashboardBanner";
import Image from "next/image";

export default function DashPage() {
  return (
    <div>
      <div className="mb-6">
        <MemberDashboardBanner />
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {[1,2,3].map((i) => (
          <div key={i} className="rounded-2xl p-4 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
                <span className="w-2 h-2 rounded-full bg-blue-600 inline-block"/>
                Course Selesai
              </div>
              <button className="theme-transition" style={{color: 'var(--text-secondary)'}}>•••</button>
            </div>
            <div className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>
              15<span className="text-sm align-top theme-transition" style={{color: 'var(--text-secondary)'}}>/20</span>
            </div>
            <button className="mt-2 text-[11px] text-blue-600">+5 Course</button>
          </div>
        ))}
      </div>

      {/* Courses list */}
      <div className="mb-3 text-[13px] font-semibold theme-transition" style={{color: 'var(--text-primary)'}}>Course Yang Sedang dipelajari</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1,2,3].map((i) => (
          <article key={i} className="rounded-2xl p-4 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-3">
              <Image src="/thumbnail/thumb1.png" alt="Course thumbnail" fill className="object-cover" />
            </div>
            <div className="text-[13px] font-semibold theme-transition" style={{color: 'var(--text-primary)'}}>Creating Mobile App Design</div>
            <div className="text-[11px] mb-3 theme-transition" style={{color: 'var(--text-secondary)'}}>UI/UX Design</div>
            <div className="flex items-center justify-between text-[11px] theme-transition" style={{color: 'var(--text-secondary)'}}>
              <div>Progress</div>
              <div className="text-blue-600">75%</div>
            </div>
            <div className="mt-2 h-2 w-full rounded-full overflow-hidden theme-transition" style={{backgroundColor: 'var(--hover-bg)'}}>
              <div className="h-full bg-blue-600 w-3/4" />
            </div>
            <div className="mt-2 text-[11px] theme-transition" style={{color: 'var(--text-secondary)'}}>3 Days Left</div>
          </article>
        ))}
      </div>
    </div>
  );
}
