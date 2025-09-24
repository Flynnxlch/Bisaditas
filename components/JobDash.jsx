"use client";

export default function JobDash() {
  const jobListings = [
    { id: 1, title: "Junior Programmer", company: "Tokopedia", urgency: "ASAP", category: "UI" },
    { id: 2, title: "Frontend Developer", company: "Gojek", urgency: "2 Days", category: "FE" },
    { id: 3, title: "Backend Engineer", company: "Shopee", urgency: "1 Week", category: "BE" },
    { id: 4, title: "UI/UX Designer", company: "Traveloka", urgency: "3 Days", category: "UX" }
  ];

  return (
    <aside className="space-y-3 max-h-96 overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold theme-transition" style={{color: 'var(--text-primary)'}}>Lowongan Kerja Terbaru</div>
        <a href="#" className="text-xs text-blue-600">See All</a>
      </div>
      <div className="space-y-3">
        {jobListings.map((job) => (
          <div key={job.id} className="rounded-xl p-3 flex items-start justify-between theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-green-100 text-green-600 text-xs font-bold">{job.category}</span>
              <div className="leading-tight">
                <div className="text-[12px] font-semibold theme-transition" style={{color: 'var(--text-primary)'}}>{job.title}</div>
                <div className="text-[10px] theme-transition" style={{color: 'var(--text-secondary)'}}>At {job.company}</div>
              </div>
            </div>
            <span className="text-[10px] text-red-500 font-semibold">{job.urgency}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
