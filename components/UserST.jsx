"use client";

import { useState } from "react";

export default function UserST() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  const studyData = [
    { week: "W1", hours: 26, courses: 3, certificates: 1 },
    { week: "W2", hours: 24, courses: 2, certificates: 0 },
    { week: "W3", hours: 32, courses: 4, certificates: 2 },
    { week: "W4", hours: 28, courses: 3, certificates: 1 }
  ];

  const maxHours = 35;
  const highlightedWeek = "W2"; // W2 is highlighted in the image

  // Calculate statistics
  const totalHours = studyData.reduce((sum, data) => sum + data.hours, 0);
  const totalCourses = studyData.reduce((sum, data) => sum + data.courses, 0);
  const totalCertificates = studyData.reduce((sum, data) => sum + data.certificates, 0);
  const averageHours = Math.round(totalHours / studyData.length);
  const averageCourses = Math.round(totalCourses / studyData.length);
  const maxWeekHours = Math.max(...studyData.map(d => d.hours));
  const minWeekHours = Math.min(...studyData.map(d => d.hours));
  const currentWeekHours = studyData[studyData.length - 1].hours;
  const previousWeekHours = studyData[studyData.length - 2].hours;
  const weeklyChange = currentWeekHours - previousWeekHours;
  const weeklyChangePercent = Math.round((weeklyChange / previousWeekHours) * 100);

  return (
    <div className="rounded-2xl p-4 theme-transition" style={{backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', borderWidth: '1px'}}>
      <style jsx>{`
        @keyframes growUp {
          from { 
            height: 0px; 
            opacity: 0;
          }
          to { 
            height: var(--target-height); 
            opacity: 1;
          }
        }
        .bar-animate {
          animation: growUp 0.8s ease-out forwards;
        }
        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .fade-in-delay-1 {
          animation: fadeIn 0.6s ease-out 0.1s forwards;
        }
        .fade-in-delay-2 {
          animation: fadeIn 0.6s ease-out 0.2s forwards;
        }
        .fade-in-delay-3 {
          animation: fadeIn 0.6s ease-out 0.3s forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .transition-container {
          transition: all 0.5s ease-out;
        }
      `}</style>
      
      {/* Title */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold theme-transition" style={{color: 'var(--text-primary)'}}>
          Waktu Belajar Mingguan
        </h3>
        <button 
          onClick={toggleExpanded}
          className="p-1 rounded hover:bg-opacity-50 theme-transition" 
          style={{backgroundColor: 'var(--hover-bg)'}}
          aria-label={isExpanded ? "Minimize" : "Expand"}
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={`transition-transform duration-400 ease-out ${isExpanded ? 'rotate-180' : ''}`}
            style={{color: 'var(--text-secondary)'}}
          >
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
      </div>

      {/* Statistics Summary - Only show when expanded */}
      {isExpanded && (
        <div className="grid grid-cols-2 gap-4 mb-6 transition-container fade-in">
        <div className="text-center">
          <div className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>
            {totalHours}
          </div>
          <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
            Total Jam
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>
            {totalCourses}
          </div>
          <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
            Total Course
          </div>
        </div>
      </div>
      )}

      {/* Additional Summary Stats - Only show when expanded */}
      {isExpanded && (
        <div className="grid grid-cols-3 gap-3 mb-6 transition-container fade-in-delay-1">
        <div className="text-center p-2 rounded-lg theme-transition" style={{backgroundColor: 'var(--hover-bg)'}}>
          <div className="text-lg font-semibold theme-transition" style={{color: 'var(--text-primary)'}}>
            {averageHours}
          </div>
          <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
            Hours
          </div>
        </div>
        <div className="text-center p-2 rounded-lg theme-transition" style={{backgroundColor: 'var(--hover-bg)'}}>
          <div className="text-lg font-semibold theme-transition" style={{color: 'var(--text-primary)'}}>
            {averageCourses}
          </div>
          <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
            Course
          </div>
        </div>
        <div className="text-center p-2 rounded-lg theme-transition" style={{backgroundColor: 'var(--hover-bg)'}}>
          <div className="text-lg font-semibold theme-transition" style={{color: 'var(--text-primary)'}}>
            {totalCertificates}
          </div>
          <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
            Sertifikat
          </div>
        </div>
      </div>
      )}

      {/* Weekly Change Indicator - Only show when expanded */}
      {isExpanded && (
        <div className="flex items-center justify-between mb-4 p-3 rounded-lg theme-transition transition-container fade-in-delay-2" style={{backgroundColor: 'var(--hover-bg)'}}>
        <div>
          <div className="text-sm font-medium theme-transition" style={{color: 'var(--text-primary)'}}>
            Minggu Ini
          </div>
          <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
            vs Minggu Lalu
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className={`text-sm font-bold ${weeklyChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {weeklyChange >= 0 ? '+' : ''}{weeklyChange} jam
          </div>
          <div className={`text-xs px-2 py-1 rounded-full ${weeklyChange >= 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {weeklyChange >= 0 ? '+' : ''}{weeklyChangePercent}%
          </div>
        </div>
      </div>
      )}

      {/* Chart Container */}
      <div className={`relative transition-all duration-500 ease-out ${isExpanded ? 'mt-6 mb-6' : 'mt-2 mb-2'}`}>
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-32 flex flex-col justify-between text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
          <span>35</span>
          <span>30</span>
          <span>25</span>
          <span>20</span>
          <span>15</span>
          <span>10</span>
          <span>5</span>
          <span>0</span>
        </div>

        {/* Chart Area */}
        <div className="ml-8 mr-2 pb-6">
          {/* Bars */}
          <div className="flex items-end justify-between h-32 gap-2 relative">
            {/* Base line at level 5 */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300 opacity-50"></div>
            
            {studyData.map((data, index) => {
              // Calculate height from level 5 (not from 0)
              // Level 5 = 18.3px from bottom (5/35 * 128)
              // Bar height = (value - 5) / (35 - 5) * available_height
              const availableHeight = 128 - (5/35 * 128); // Height available above level 5
              const barHeight = ((data.hours - 5) / (35 - 5)) * availableHeight;
              const isHighlighted = data.week === highlightedWeek;
              const animationDelay = index * 0.2; // Delay each bar by 0.2s
              
              return (
                <div key={data.week} className="flex flex-col items-center flex-1">
                  {/* Bar */}
                  <div 
                    className="w-full rounded-t-sm transition-all duration-500 bar-animate"
                    style={{
                      height: `${barHeight}px`,
                      backgroundColor: isHighlighted ? '#3b82f6' : '#93c5fd',
                      minHeight: '4px',
                      '--target-height': `${barHeight}px`,
                      animationDelay: `${animationDelay}s`
                    }}
                  />
                  
                  {/* Week Label positioned below the chart */}
                  <span className="text-xs absolute bottom-0 theme-transition" style={{color: 'var(--text-secondary)', transform: 'translateY(calc(100% + 2px))'}}>
                    {data.week}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Grid Lines */}
        <div className="absolute top-0 left-0 h-32 ml-8 mr-2 w-full">
          {[0, 5, 10, 15, 20, 25, 30, 35].map((value, index) => {
            const position = (value / maxHours) * 100;
            return (
              <div
                key={value}
                className="absolute w-full border-t opacity-20"
                style={{
                  top: `${100 - position}%`,
                  borderColor: 'var(--border-color)'
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Additional Stats - Only show when expanded */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t theme-transition transition-container fade-in-delay-3" style={{borderColor: 'var(--border-color)'}}>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-semibold theme-transition" style={{color: 'var(--text-primary)'}}>
              {maxWeekHours}
            </div>
            <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
              Tertinggi
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold theme-transition" style={{color: 'var(--text-primary)'}}>
              {minWeekHours}
            </div>
            <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
              Terendah
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold theme-transition" style={{color: 'var(--text-primary)'}}>
              {studyData.length}
            </div>
            <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
              Minggu
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
