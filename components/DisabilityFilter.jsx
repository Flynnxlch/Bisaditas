"use client";

import { useState } from "react";

export default function DisabilityFilter({ onFilterChange }) {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const disabilityTypes = [
    { id: 'visual', label: 'Visual', icon: '👁️', description: 'Tunanetra' },
    { id: 'hearing', label: 'Hearing', icon: '👂', description: 'Tunarungu' },
    { id: 'mobility', label: 'Mobility', icon: '♿', description: 'Tuna Daksa' },
    { id: 'cognitive', label: 'Cognitive', icon: '🧠', description: 'Tuna Grahita' },
    { id: 'speech', label: 'Speech', icon: '🗣️', description: 'Tuna Wicara' },
    { id: 'autism', label: 'Autisme', icon: '🌟', description: 'Autisme' }
  ];

  const handleFilterToggle = (disabilityId) => {
    const newFilters = selectedFilters.includes(disabilityId)
      ? selectedFilters.filter(id => id !== disabilityId)
      : [...selectedFilters, disabilityId];
    
    setSelectedFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
    onFilterChange([]);
  };

  return (
    <div className="rounded-lg shadow-md p-4 mb-6 theme-transition" style={{backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', borderWidth: '1px'}}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold theme-transition" style={{color: 'var(--text-primary)'}}>
          Filter Berdasarkan Disabilitas
        </h3>
        {selectedFilters.length > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-sm font-medium theme-transition hover:opacity-80" 
            style={{color: 'var(--accent-color)'}}
          >
            Hapus Semua Filter
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {disabilityTypes.map((disability) => (
          <button
            key={disability.id}
            onClick={() => handleFilterToggle(disability.id)}
            className={`p-3 rounded-lg border-2 transition-all duration-200 theme-transition ${
              selectedFilters.includes(disability.id)
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'hover:opacity-80'
            }`}
            style={{
              borderColor: selectedFilters.includes(disability.id) ? '#3b82f6' : 'var(--border-color)',
              backgroundColor: selectedFilters.includes(disability.id) ? '#eff6ff' : 'var(--card-bg)',
              color: selectedFilters.includes(disability.id) ? '#1d4ed8' : 'var(--text-primary)'
            }}
          >
            <div className="text-center">
              <div className="text-2xl mb-1">{disability.icon}</div>
              <div className="text-sm font-medium">{disability.label}</div>
              <div className="text-xs mt-1 theme-transition" style={{color: 'var(--text-secondary)'}}>{disability.description}</div>
            </div>
          </button>
        ))}
      </div>

      {selectedFilters.length > 0 && (
        <div className="mt-4 pt-4 theme-transition" style={{borderColor: 'var(--border-color)', borderTopWidth: '1px'}}>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>Filter aktif:</span>
            {selectedFilters.map((filterId) => {
              const disability = disabilityTypes.find(d => d.id === filterId);
              return (
                <span
                  key={filterId}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium theme-transition"
                  style={{backgroundColor: 'var(--hover-bg)', color: 'var(--text-primary)'}}
                >
                  <span>{disability.icon}</span>
                  {disability.label}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

