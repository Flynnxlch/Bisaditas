"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFire } from "react-icons/fa";

export default function MiniLead() {
  // Sample leaderboard data - limit to 4 items for deployment
  const leaderboardData = [
    {
      id: 1,
      name: "Leonardo",
      streak: "128 Hari",
      points: 700,
      rank: 1,
      avatar: "/avatars/avatar1.png" // You can replace with actual avatar paths
    },
    {
      id: 2,
      name: "Cepa",
      streak: "95 Hari",
      points: 650,
      rank: 2,
      avatar: "/avatars/avatar2.png"
    },
    {
      id: 3,
      name: "Sarah",
      streak: "87 Hari",
      points: 580,
      rank: 3,
      avatar: "/avatars/avatar3.png"
    },
    {
      id: 4,
      name: "Ahmad",
      streak: "72 Hari",
      points: 520,
      rank: 4,
      avatar: "/avatars/avatar4.png"
    }
  ];

  const getRankBadgeColor = (rank) => {
    switch (rank) {
      case 1:
        return "bg-yellow-500";
      case 2:
        return "bg-gray-400";
      case 3:
        return "bg-orange-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes fire-flicker {
          0% {
            transform: scale(1) rotate(-2deg);
            filter: drop-shadow(0 0 3px rgba(251, 146, 60, 0.5)) brightness(1);
          }
          25% {
            transform: scale(1.05) rotate(1deg);
            filter: drop-shadow(0 0 5px rgba(251, 146, 60, 0.7)) brightness(1.1);
          }
          50% {
            transform: scale(1.1) rotate(-1deg);
            filter: drop-shadow(0 0 7px rgba(251, 146, 60, 0.8)) brightness(1.2);
          }
          75% {
            transform: scale(1.05) rotate(2deg);
            filter: drop-shadow(0 0 5px rgba(251, 146, 60, 0.7)) brightness(1.1);
          }
          100% {
            transform: scale(1) rotate(-2deg);
            filter: drop-shadow(0 0 3px rgba(251, 146, 60, 0.5)) brightness(1);
          }
        }
      `}</style>
      <aside className="space-y-3 max-h-96 overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold theme-transition" style={{color: 'var(--text-primary)'}}>Leaderboard</div>
        <Link href="/member/leaderboard" className="text-xs text-blue-600 hover:text-blue-800 transition-colors">See All</Link>
      </div>
      
      <div className="space-y-3">
        {leaderboardData.map((user) => (
          <div key={user.id} className="flex items-center gap-3 p-3 rounded-xl theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
            {/* Profile Picture with Rank Badge */}
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                <Image 
                  src={user.avatar} 
                  alt={user.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a default avatar or placeholder
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm font-semibold" style={{display: 'none'}}>
                  {user.name.charAt(0)}
                </div>
              </div>
              {/* Rank Badge */}
              <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold ${getRankBadgeColor(user.rank)}`}>
                {user.rank}
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold theme-transition truncate" style={{color: 'var(--text-primary)'}}>
                {user.name}
              </div>
              <div className="flex items-center gap-1 text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
                <FaFire 
                  className="text-orange-500 animate-pulse" 
                  style={{
                    filter: 'drop-shadow(0 0 3px rgba(251, 146, 60, 0.5))',
                    animation: 'fire-flicker 1.5s ease-in-out infinite alternate'
                  }}
                />
                {user.streak}
              </div>
            </div>

            {/* Points */}
            <div className="flex items-center gap-1 text-xs theme-transition" style={{color: 'var(--text-primary)'}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="font-semibold">{user.points}</span>
              <span className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>Points</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
    </>
  );
}
