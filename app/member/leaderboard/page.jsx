"use client";

import ImageLead from '@/components/ImageLead';
import LeadRank from '@/components/LeadRank';
import NavDash from '@/components/NavDash';
import SidebarMe from '@/components/SidebarMe';
import { useTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';

function LeaderboardPage() {
  const { theme, toggleTheme } = useTheme();
  const [selectedPeriod, setSelectedPeriod] = useState("Bulanan");

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    console.log('Selected period:', period);
  };

  return (
    <section className="min-h-screen theme-transition" style={{backgroundColor: 'var(--bg-primary)'}}>
      <div className="w-full flex gap-[6px]">
        <SidebarMe />
        <main className="flex-1 min-w-0 p-6 lg:p-8 overflow-x-hidden">
          <NavDash />
          
          <div className="max-w-7xl mx-auto space-y-8">
            {/* ImageLead Component */}
            <ImageLead 
              title="Papan Tertinggi Pengguna"
              subtitle="Akses materi baru dan cek lowongan kerja terbaru."
              selectedPeriod={selectedPeriod}
              onPeriodChange={handlePeriodChange}
              theme={theme}
            />
            
            {/* LeadRank Component */}
            <LeadRank theme={theme} selectedPeriod={selectedPeriod} />
          </div>
        </main>
      </div>
    </section>
  );
}

export default LeaderboardPage;