"use client";

import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group"
      aria-label={`Switch to ${theme === 'primary' ? 'secondary' : 'primary'} theme`}
    >
      <div className="relative w-6 h-6">
        {/* Sun Icon - shown when primary theme */}
        <svg
          className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-500 ${
            theme === 'primary' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-180 scale-75'
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>

        {/* Moon Icon - shown when secondary theme */}
        <svg
          className={`absolute inset-0 w-6 h-6 text-slate-600 transition-all duration-500 ${
            theme === 'secondary' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-180 scale-75'
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>
    </button>
  );
}
