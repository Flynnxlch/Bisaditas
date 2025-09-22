"use client";

export default function NavDash() {
  return (
    <div className="flex items-center justify-between gap-4 mb-5">
      <div className="flex-1 relative">
        <input 
          type="text" 
          placeholder="Search your course here..." 
          className="w-full h-10 rounded-full pr-10 pl-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/60 theme-transition" 
          style={{
            borderColor: 'var(--border-color)',
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text-primary)',
            borderWidth: '1px'
          }}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 theme-transition" style={{color: 'var(--text-secondary)'}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.3-4.3"/>
          </svg>
        </span>
      </div>
      <button className="hidden md:inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-opacity-50 theme-transition" 
              style={{
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)',
                borderWidth: '1px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--hover-bg)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
              aria-label="Filter">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 5h18"/>
          <path d="M7 12h10"/>
          <path d="M10 19h4"/>
        </svg>
      </button>
      <div className="hidden md:flex items-center gap-3">
        <button className="p-2 rounded-full hover:bg-opacity-50 theme-transition" 
                style={{'--hover-bg': 'var(--hover-bg)'}}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--hover-bg)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
                aria-label="notif">🔔</button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full theme-transition" style={{backgroundColor: 'var(--text-secondary)'}} />
          <div className="leading-tight">
            <div className="text-xs font-semibold theme-transition" style={{color: 'var(--text-primary)'}}>Chris Miguel</div>
            <div className="text-[10px] theme-transition" style={{color: 'var(--text-secondary)'}}>Freelancer</div>
          </div>
        </div>
      </div>
    </div>
  );
}
