"use client";

export default function UserST() {
  const studyData = [
    { week: "W1", hours: 20 },
    { week: "W2", hours: 18 },
    { week: "W3", hours: 30 },
    { week: "W4", hours: 22 }
  ];

  const maxHours = 30;
  const highlightedWeek = "W2"; // W2 is highlighted in the image

  return (
    <div className="rounded-2xl p-4 theme-transition" style={{backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', borderWidth: '1px'}}>
      {/* Title */}
      <h3 className="text-sm font-semibold mb-4 theme-transition" style={{color: 'var(--text-primary)'}}>
        Waktu Belajar
      </h3>

      {/* Chart Container */}
      <div className="relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
          <span>30</span>
          <span>25</span>
          <span>20</span>
          <span>15</span>
          <span>10</span>
          <span>5</span>
          <span>0</span>
        </div>

        {/* Chart Area */}
        <div className="ml-8 mr-2">
          {/* Bars */}
          <div className="flex items-end justify-between h-32 gap-2">
            {studyData.map((data) => {
              const height = (data.hours / maxHours) * 100;
              const isHighlighted = data.week === highlightedWeek;
              
              return (
                <div key={data.week} className="flex flex-col items-center flex-1">
                  {/* Bar */}
                  <div 
                    className="w-full rounded-t-sm transition-all duration-300"
                    style={{
                      height: `${height}%`,
                      backgroundColor: isHighlighted ? '#3b82f6' : '#93c5fd',
                      minHeight: '4px'
                    }}
                  />
                  
                  {/* Week Label */}
                  <span className="text-xs mt-2 theme-transition" style={{color: 'var(--text-secondary)'}}>
                    {data.week}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Grid Lines */}
        <div className="absolute inset-0 ml-8 mr-2">
          {[0, 5, 10, 15, 20, 25, 30].map((value, index) => {
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
    </div>
  );
}
