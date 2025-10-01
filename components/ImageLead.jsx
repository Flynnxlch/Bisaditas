"use client";

import { useState } from "react";

export default function ImageLead({ 
  title = "Leaderboard Pengguna",
  subtitle = "Akses materi baru dan cek lowongan kerja terbaru.",
  selectedPeriod = "Bulanan",
  onPeriodChange = () => {},
  className = "",
  theme = "primary"
}) {
  const [activePeriod, setActivePeriod] = useState(selectedPeriod);
  
  const periods = [
    { key: "Harian", label: "Harian" },
    { key: "Bulanan", label: "Bulanan" },
    { key: "Tahunan", label: "Tahunan" }
  ];

  const handlePeriodChange = (period) => {
    setActivePeriod(period);
    onPeriodChange(period);
  };

  return (
    <div className={`flex items-center justify-between ${className}`}>
      {/* Left side - Title and Subtitle */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-2 theme-transition" style={{color: 'var(--text-primary)'}}>
          {title}
        </h1>
        <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>
          {subtitle}
        </p>
      </div>

      {/* Right side - Segmented Control */}
      <div className="flex rounded-lg p-1 shadow-sm border theme-transition" style={{
        borderColor: 'var(--border-color)',
        backgroundColor: 'var(--card-bg)'
      }}>
        {periods.map((period) => (
          <button
            key={period.key}
            onClick={() => handlePeriodChange(period.key)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              activePeriod === period.key
                ? 'text-white shadow-sm'
                : 'hover:text-gray-700'
            }`}
            style={{
              backgroundColor: activePeriod === period.key ? 'var(--accent-color)' : 'transparent',
              color: activePeriod === period.key ? 'white' : 'var(--text-secondary)'
            }}
            onMouseEnter={(e) => {
              if (activePeriod !== period.key) {
                e.target.style.color = 'var(--text-primary)';
              }
            }}
            onMouseLeave={(e) => {
              if (activePeriod !== period.key) {
                e.target.style.color = 'var(--text-secondary)';
              }
            }}
          >
            {period.label}
          </button>
        ))}
      </div>
    </div>
  );
}
