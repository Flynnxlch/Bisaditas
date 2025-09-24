"use client";

import { FaBookOpen, FaFire, FaStar, FaTrophy } from "react-icons/fa";

export default function UserStat({ 
  userName = "Chris Miguel", 
  userTitle = "UIUX Designer", 
  points = 700,
  streakDays = 128,
  rank = 90,
  classes = 10,
  avatar = "/avatars/manwc.png",
  theme = "primary" // "primary" or "secondary"
}) {
  const isPrimary = theme === "primary";
  
  const cardStyles = {
    backgroundColor: isPrimary ? 'white' : 'var(--card-bg)',
    borderColor: isPrimary ? 'transparent' : 'var(--border-color)',
    borderWidth: isPrimary ? '0' : '1px',
    color: isPrimary ? '#1e293b' : 'var(--text-primary)'
  };

  const nameStyles = {
    color: isPrimary ? '#1e293b' : 'var(--text-primary)'
  };

  const titleStyles = {
    color: isPrimary ? '#64748b' : 'var(--text-secondary)'
  };

  const pointsStyles = {
    color: isPrimary ? '#64748b' : 'var(--text-secondary)'
  };

  const statValueStyles = {
    color: isPrimary ? '#1e293b' : 'var(--text-primary)'
  };

  const statLabelStyles = {
    color: isPrimary ? '#64748b' : 'var(--text-secondary)'
  };

  const iconBgColor = isPrimary ? '#3b82f6' : 'var(--accent-color)';

  return (
    <div 
      className="rounded-3xl px-4 pt-4 pb-2 shadow-lg transition-all duration-300"
      style={cardStyles}
    >
      {/* User Profile Section */}
      <div className="flex items-center gap-3 mb-3">
        {/* Avatar */}
        <div className="relative">
          <div 
            className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center"
            style={{ backgroundColor: '#d4d4aa' }}
          >
            <img 
              src={avatar} 
              alt={userName}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* User Info */}
        <div className="flex-grow">
          <h3 className="text-lg font-bold mb-1" style={nameStyles}>
            {userName}
          </h3>
          <p className="text-xs mb-1" style={titleStyles}>
            {userTitle}
          </p>
          
          {/* Points */}
          <div className="flex items-center gap-1">
            <div 
              className="w-4 h-4 rounded-md flex items-center justify-center"
              style={{ backgroundColor: iconBgColor }}
            >
              <FaStar className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-xs font-medium" style={pointsStyles}>
              {points} Points
            </span>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-3 gap-3">
        {/* Streak Days */}
        <div className="text-center">
          <div 
            className="w-6 h-6 mx-auto mb-1 rounded-md flex items-center justify-center"
            style={{ backgroundColor: iconBgColor }}
          >
            <FaFire className="w-3 h-3 text-white" />
          </div>
          <div className="text-sm font-bold mb-1" style={statValueStyles}>
            {streakDays} Hari
          </div>
          <div className="text-xs" style={statLabelStyles}>
            Beruntun
          </div>
        </div>

        {/* Rank */}
        <div className="text-center">
          <div 
            className="w-6 h-6 mx-auto mb-1 rounded-md flex items-center justify-center"
            style={{ backgroundColor: iconBgColor }}
          >
            <FaTrophy className="w-3 h-3 text-white" />
          </div>
          <div className="text-sm font-bold mb-1" style={statValueStyles}>
            #{rank}
          </div>
          <div className="text-xs" style={statLabelStyles}>
            Klasemen
          </div>
        </div>

        {/* Classes */}
        <div className="text-center">
          <div 
            className="w-6 h-6 mx-auto mb-1 rounded-md flex items-center justify-center"
            style={{ backgroundColor: iconBgColor }}
          >
            <FaBookOpen className="w-3 h-3 text-white" />
          </div>
          <div className="text-sm font-bold mb-1" style={statValueStyles}>
            {classes}
          </div>
          <div className="text-xs" style={statLabelStyles}>
            Kelas
          </div>
        </div>
      </div>
    </div>
  );
}
