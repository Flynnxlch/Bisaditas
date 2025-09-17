"use client";

export default function EyeToggle(props) {
  const { open, onToggle, className = "", size = 20, title } = props || {};

  return (
    <button
      type="button"
      aria-label={open ? "Sembunyikan password" : "Tampilkan password"}
      title={title || (open ? "Sembunyikan" : "Tampilkan")}
      onClick={onToggle}
      className={`inline-flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors ${className}`}
   >
      <span className="relative inline-block" style={{ width: size, height: size }}>
        {/* Eye base */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={`transition-transform duration-200 ${open ? "scale-100" : "scale-95"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Outer eye */}
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12" />
          {/* Pupil */}
          <circle cx="12" cy="12" r={open ? 3 : 0} className="transition-all duration-200" />
        </svg>
        {/* Slash for closed state */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          className={`absolute inset-0 transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 21L21 3" />
        </svg>
      </span>
    </button>
  );
}


