"use client";

import DashContent from "@/components/content/DashContent";
import JobDash from "@/components/JobDash";
import MiniLead from "@/components/MiniLead";
import NavDash from "@/components/NavDash";
import SidebarMe from "@/components/SidebarMe";
import { useState } from "react";

export default function MemberDashboardPage() {
  const [showIdentform, setShowIdentform] = useState(false);

  const handleFormToggle = (isShowing) => {
    setShowIdentform(isShowing);
  };

  return (
    <section className="min-h-screen theme-transition" style={{backgroundColor: 'var(--bg-primary)'}}>
      <div className="w-full flex gap-[6px]">
        <SidebarMe />
        <main className="flex-1 min-w-0 p-6 lg:p-8 overflow-x-hidden">
          <NavDash />
          
          {/* Two-column content: main + right rail */}
          <div className={`grid gap-6 items-start ${showIdentform ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-[1fr_300px]'}`}>
            {/* Main content column */}
            <DashContent hideSidebar={showIdentform} onFormToggle={handleFormToggle} />

            {/* Right rail: latest jobs and leaderboard - hidden when form is shown */}
            {!showIdentform && (
              <div className="space-y-6">
                <JobDash />
                <MiniLead />
              </div>
            )}
          </div>
        </main>
      </div>
    </section>
  );
}


