"use client";


export default function JobCard({ job }) {
  const getDisabilityIcon = (type) => {
    const icons = {
      'visual': '👁️',
      'hearing': '👂',
      'mobility': '♿',
      'cognitive': '🧠',
      'speech': '🗣️',
      'autism': '🌟'
    };
    return icons[type] || '♿';
  };

  const getDisabilityColor = (type) => {
    const colors = {
      'visual': 'bg-blue-100 text-blue-800',
      'hearing': 'bg-green-100 text-green-800',
      'mobility': 'bg-purple-100 text-purple-800',
      'cognitive': 'bg-orange-100 text-orange-800',
      'speech': 'bg-pink-100 text-pink-800',
      'autism': 'bg-yellow-100 text-yellow-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="rounded-lg shadow-md p-4 hover:shadow-lg transition-all cursor-pointer theme-transition" style={{backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', borderWidth: '1px'}}>
      {/* Top Section */}
      <div className="flex justify-between items-start mb-3">
        {/* Job Icon */}
        <div className="w-8 h-8 rounded flex items-center justify-center theme-transition" style={{backgroundColor: 'var(--accent-color)'}}>
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        
        {/* Urgency Tag */}
        <span className="text-xs font-medium px-2 py-1 rounded theme-transition" style={{backgroundColor: 'var(--hover-bg)', color: 'var(--text-primary)'}}>
          {job.urgency}
        </span>
      </div>

      {/* Job Title */}
      <h3 className="text-lg font-semibold theme-transition mb-2" style={{color: 'var(--text-primary)'}}>
        {job.title}
      </h3>

      {/* Job Description */}
      <p className="text-sm mb-4 line-clamp-2 theme-transition" style={{color: 'var(--text-secondary)'}}>
        {job.description}
      </p>

      {/* Job Details */}
      <div className="space-y-2 mb-4">
        {/* Level */}
        <div className="flex items-center gap-2 text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span>{job.level}</span>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span>{job.duration}</span>
        </div>

        {/* Salary */}
        <div className="flex items-center gap-2 text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span>Salary</span>
          <span className="font-medium theme-transition" style={{color: 'var(--accent-color)'}}>{job.salary}</span>
        </div>
      </div>

      {/* Disability Support Labels */}
      {job.disabilitySupport && job.disabilitySupport.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {job.disabilitySupport.map((disability, index) => (
              <span
                key={index}
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getDisabilityColor(disability)}`}
              >
                <span>{getDisabilityIcon(disability)}</span>
                {disability.charAt(0).toUpperCase() + disability.slice(1)}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Apply Button */}
      <div className="flex justify-end">
        <button className="font-medium text-sm transition-colors theme-transition hover:opacity-80" style={{color: 'var(--accent-color)'}}>
          Lamar
        </button>
      </div>
    </div>
  );
}

