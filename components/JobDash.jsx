"use client";

export default function JobDash() {
  return (
    <aside className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold theme-transition" style={{color: 'var(--text-primary)'}}>Lowongan Kerja Terbaru</div>
        <a href="#" className="text-xs text-blue-600">See All</a>
      </div>
      {[1,2,3].map((i) => (
        <div key={i} className="rounded-xl p-3 flex items-start justify-between theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-green-100 text-green-600 text-xs font-bold">UI</span>
            <div className="leading-tight">
              <div className="text-[12px] font-semibold theme-transition" style={{color: 'var(--text-primary)'}}>Junior Programmer</div>
              <div className="text-[10px] theme-transition" style={{color: 'var(--text-secondary)'}}>At Tokopedia</div>
            </div>
          </div>
          <span className="text-[10px] text-red-500 font-semibold">ASAP</span>
        </div>
      ))}
    </aside>
  );
}
