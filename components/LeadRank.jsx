"use client";

import Image from "next/image";
import { FaArrowDown, FaArrowUp, FaBuilding, FaClock, FaFire, FaStar } from "react-icons/fa";

export default function LeadRank({ theme = "primary", selectedPeriod = "Harian" }) {
  // Badge options for randomization
  const badgeOptions = [
    "UI UX Design", "Streak Master", "Code Warrior", "Learning Champion", 
    "Tech Explorer", "Digital Ninja", "Skill Builder", "Progress Pro",
    "Knowledge Seeker", "Achievement Hunter", "Study Star", "Course Master",
    "Learning Legend", "Tech Titan", "Skill Surgeon", "Code Crusader"
  ];

  // Function to get random badges
  const getRandomBadges = () => {
    const shuffled = [...badgeOptions].sort(() => 0.5 - Math.random());
    const numBadges = Math.floor(Math.random() * 4) + 3; // 3-6 badges total
    return shuffled.slice(0, numBadges);
  };

  // Function to get displayed badges (max 2) and additional count
  const getDisplayBadges = (allBadges) => {
    const displayedBadges = allBadges.slice(0, 2); // Show only first 2
    const additionalCount = allBadges.length - 2; // Count of remaining badges
    return { displayedBadges, additionalCount };
  };

  // Fixed leaderboard data for each time period
  const periodData = {
    Harian: [
      // Top 4 from MiniLead.jsx (Daily focus)
      { id: 1, name: "Leonardo", username: "@leonardo", streak: 7, streakLabel: "Beruntun", points: 150, rank: 1, avatar: "/avatars/manwc.png", classesCompleted: 2, studyHours: 3, allBadges: ["UI UX Design", "Streak Master", "Daily Champion"], rankChange: "up" },
      { id: 2, name: "Cepa", username: "@cepa", streak: 6, streakLabel: "Beruntun", points: 140, rank: 2, avatar: "/avatars/manwc.png", classesCompleted: 2, studyHours: 2, allBadges: ["Code Warrior", "Learning Champion", "Daily Focus"], rankChange: "up" },
      { id: 3, name: "Sarah", username: "@sarah", streak: 5, streakLabel: "Beruntun", points: 130, rank: 3, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 1, studyHours: 2, allBadges: ["Tech Explorer", "Study Star", "Consistent Learner"], rankChange: "up" },
      { id: 4, name: "Ahmad", username: "@ahmad", streak: 4, streakLabel: "Beruntun", points: 120, rank: 4, avatar: "/avatars/manwc.png", classesCompleted: 1, studyHours: 1, allBadges: ["Digital Ninja", "Progress Pro", "Skill Builder"], rankChange: "up" },
      { id: 5, name: "Maya Sari", username: "@maya_sari", streak: 3, streakLabel: "Beruntun", points: 110, rank: 5, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 1, studyHours: 1, allBadges: ["Knowledge Seeker", "Achievement Hunter"], rankChange: "up" },
      { id: 6, name: "Rizky Pratama", username: "@rizky_p", streak: 3, streakLabel: "Beruntun", points: 100, rank: 6, avatar: "/avatars/manwc.png", classesCompleted: 1, studyHours: 1, allBadges: ["Course Master", "Learning Legend"], rankChange: "up" },
      { id: 7, name: "Dina Wulandari", username: "@dina_w", streak: 2, streakLabel: "Beruntun", points: 90, rank: 7, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 1, studyHours: 1, allBadges: ["Tech Titan", "Skill Surgeon"], rankChange: "up" },
      { id: 8, name: "Budi Santoso", username: "@budi_s", streak: 2, streakLabel: "Beruntun", points: 80, rank: 8, avatar: "/avatars/manwc.png", classesCompleted: 1, studyHours: 1, allBadges: ["Code Crusader", "Daily Warrior"], rankChange: "up" },
      { id: 9, name: "Sari Indah", username: "@sari_i", streak: 1, streakLabel: "Beruntun", points: 70, rank: 9, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 1, studyHours: 1, allBadges: ["UI UX Design", "Beginner Star"], rankChange: "down" },
      { id: 10, name: "Fajar Nugroho", username: "@fajar_n", streak: 1, streakLabel: "Beruntun", points: 60, rank: 10, avatar: "/avatars/manwc.png", classesCompleted: 1, studyHours: 1, allBadges: ["Learning Champion", "Newcomer"], rankChange: "down" },
      { id: 11, name: "Lina Putri", username: "@lina_p", streak: 1, streakLabel: "Beruntun", points: 50, rank: 11, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 1, studyHours: 1, allBadges: ["Tech Explorer", "Fresh Start"], rankChange: "down" },
      { id: 12, name: "Hendra Wijaya", username: "@hendra_w", streak: 1, streakLabel: "Beruntun", points: 40, rank: 12, avatar: "/avatars/manwc.png", classesCompleted: 1, studyHours: 1, allBadges: ["Digital Ninja", "First Steps"], rankChange: "down" }
    ],
    Bulanan: [
      // Monthly focus - higher numbers
      { id: 1, name: "Leonardo", username: "@leonardo", streak: 28, streakLabel: "Beruntun", points: 850, rank: 1, avatar: "/avatars/manwc.png", classesCompleted: 8, studyHours: 15, allBadges: ["UI UX Design", "Streak Master", "Monthly Champion", "Consistent Learner"], rankChange: "up" },
      { id: 2, name: "Cepa", username: "@cepa", streak: 25, streakLabel: "Beruntun", points: 780, rank: 2, avatar: "/avatars/manwc.png", classesCompleted: 7, studyHours: 14, allBadges: ["Code Warrior", "Learning Champion", "Monthly Focus", "Progress Pro"], rankChange: "up" },
      { id: 3, name: "Sarah", username: "@sarah", streak: 22, streakLabel: "Beruntun", points: 720, rank: 3, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 6, studyHours: 12, allBadges: ["Tech Explorer", "Study Star", "Monthly Achiever", "Skill Builder"], rankChange: "up" },
      { id: 4, name: "Ahmad", username: "@ahmad", streak: 20, streakLabel: "Beruntun", points: 680, rank: 4, avatar: "/avatars/manwc.png", classesCompleted: 5, studyHours: 10, allBadges: ["Digital Ninja", "Progress Pro", "Monthly Warrior", "Knowledge Seeker"], rankChange: "up" },
      { id: 5, name: "Maya Sari", username: "@maya_sari", streak: 18, streakLabel: "Beruntun", points: 620, rank: 5, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 4, studyHours: 9, allBadges: ["Achievement Hunter", "Course Master", "Monthly Star"], rankChange: "up" },
      { id: 6, name: "Rizky Pratama", username: "@rizky_p", streak: 15, streakLabel: "Beruntun", points: 580, rank: 6, avatar: "/avatars/manwc.png", classesCompleted: 4, studyHours: 8, allBadges: ["Learning Legend", "Tech Titan", "Monthly Explorer"], rankChange: "up" },
      { id: 7, name: "Dina Wulandari", username: "@dina_w", streak: 12, streakLabel: "Beruntun", points: 540, rank: 7, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 3, studyHours: 7, allBadges: ["Skill Surgeon", "Code Crusader", "Monthly Builder"], rankChange: "up" },
      { id: 8, name: "Budi Santoso", username: "@budi_s", streak: 10, streakLabel: "Beruntun", points: 500, rank: 8, avatar: "/avatars/manwc.png", classesCompleted: 3, studyHours: 6, allBadges: ["Daily Warrior", "UI UX Design", "Monthly Learner"], rankChange: "up" },
      { id: 9, name: "Sari Indah", username: "@sari_i", streak: 8, streakLabel: "Beruntun", points: 460, rank: 9, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 2, studyHours: 5, allBadges: ["Beginner Star", "Learning Champion"], rankChange: "down" },
      { id: 10, name: "Fajar Nugroho", username: "@fajar_n", streak: 6, streakLabel: "Beruntun", points: 420, rank: 10, avatar: "/avatars/manwc.png", classesCompleted: 2, studyHours: 4, allBadges: ["Newcomer", "Tech Explorer"], rankChange: "down" },
      { id: 11, name: "Lina Putri", username: "@lina_p", streak: 4, streakLabel: "Beruntun", points: 380, rank: 11, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 1, studyHours: 3, allBadges: ["Fresh Start", "Digital Ninja"], rankChange: "down" },
      { id: 12, name: "Hendra Wijaya", username: "@hendra_w", streak: 2, streakLabel: "Beruntun", points: 340, rank: 12, avatar: "/avatars/manwc.png", classesCompleted: 1, studyHours: 2, allBadges: ["First Steps", "Progress Pro"], rankChange: "down" }
    ],
    Keseluruhan: [
      // Overall/All-time focus - highest numbers
      { id: 1, name: "Leonardo", username: "@leonardo", streak: 128, streakLabel: "Beruntun", points: 2500, rank: 1, avatar: "/avatars/manwc.png", classesCompleted: 25, studyHours: 50, allBadges: ["UI UX Design", "Streak Master", "Overall Champion", "Consistent Learner", "Learning Legend"], rankChange: "up" },
      { id: 2, name: "Cepa", username: "@cepa", streak: 95, streakLabel: "Beruntun", points: 2200, rank: 2, avatar: "/avatars/manwc.png", classesCompleted: 22, studyHours: 45, allBadges: ["Code Warrior", "Learning Champion", "Overall Focus", "Progress Pro", "Tech Titan"], rankChange: "up" },
      { id: 3, name: "Sarah", username: "@sarah", streak: 87, streakLabel: "Beruntun", points: 2000, rank: 3, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 20, studyHours: 40, allBadges: ["Tech Explorer", "Study Star", "Overall Achiever", "Skill Builder", "Course Master"], rankChange: "up" },
      { id: 4, name: "Ahmad", username: "@ahmad", streak: 72, streakLabel: "Beruntun", points: 1800, rank: 4, avatar: "/avatars/manwc.png", classesCompleted: 18, studyHours: 35, allBadges: ["Digital Ninja", "Progress Pro", "Overall Warrior", "Knowledge Seeker", "Achievement Hunter"], rankChange: "up" },
      { id: 5, name: "Maya Sari", username: "@maya_sari", streak: 68, streakLabel: "Beruntun", points: 1600, rank: 5, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 15, studyHours: 30, allBadges: ["Monthly Star", "Learning Legend", "Overall Explorer"], rankChange: "up" },
      { id: 6, name: "Rizky Pratama", username: "@rizky_p", streak: 60, streakLabel: "Beruntun", points: 1400, rank: 6, avatar: "/avatars/manwc.png", classesCompleted: 12, studyHours: 25, allBadges: ["Tech Titan", "Skill Surgeon", "Overall Builder"], rankChange: "up" },
      { id: 7, name: "Dina Wulandari", username: "@dina_w", streak: 55, streakLabel: "Beruntun", points: 1200, rank: 7, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 10, studyHours: 20, allBadges: ["Code Crusader", "Monthly Learner", "Overall Achiever"], rankChange: "up" },
      { id: 8, name: "Budi Santoso", username: "@budi_s", streak: 50, streakLabel: "Beruntun", points: 1000, rank: 8, avatar: "/avatars/manwc.png", classesCompleted: 8, studyHours: 15, allBadges: ["Daily Warrior", "UI UX Design", "Overall Learner"], rankChange: "up" },
      { id: 9, name: "Sari Indah", username: "@sari_i", streak: 45, streakLabel: "Beruntun", points: 800, rank: 9, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 6, studyHours: 12, allBadges: ["Beginner Star", "Learning Champion"], rankChange: "down" },
      { id: 10, name: "Fajar Nugroho", username: "@fajar_n", streak: 40, streakLabel: "Beruntun", points: 600, rank: 10, avatar: "/avatars/manwc.png", classesCompleted: 4, studyHours: 8, allBadges: ["Newcomer", "Tech Explorer"], rankChange: "down" },
      { id: 11, name: "Lina Putri", username: "@lina_p", streak: 35, streakLabel: "Beruntun", points: 400, rank: 11, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 2, studyHours: 5, allBadges: ["Fresh Start", "Digital Ninja"], rankChange: "down" },
      { id: 12, name: "Hendra Wijaya", username: "@hendra_w", streak: 30, streakLabel: "Beruntun", points: 200, rank: 12, avatar: "/avatars/manwc.png", classesCompleted: 1, studyHours: 2, allBadges: ["First Steps", "Progress Pro"], rankChange: "down" }
    ],
    Tahunan: [
      // Yearly focus - highest possible numbers
      { id: 1, name: "Leonardo", username: "@leonardo", streak: 365, streakLabel: "Beruntun", points: 5000, rank: 1, avatar: "/avatars/manwc.png", classesCompleted: 50, studyHours: 200, allBadges: ["UI UX Design", "Streak Master", "Yearly Champion", "Consistent Learner", "Learning Legend", "Tech Titan"], rankChange: "up" },
      { id: 2, name: "Cepa", username: "@cepa", streak: 300, streakLabel: "Beruntun", points: 4500, rank: 2, avatar: "/avatars/manwc.png", classesCompleted: 45, studyHours: 180, allBadges: ["Code Warrior", "Learning Champion", "Yearly Focus", "Progress Pro", "Course Master", "Achievement Hunter"], rankChange: "up" },
      { id: 3, name: "Sarah", username: "@sarah", streak: 250, streakLabel: "Beruntun", points: 4000, rank: 3, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 40, studyHours: 160, allBadges: ["Tech Explorer", "Study Star", "Yearly Achiever", "Skill Builder", "Learning Legend", "Digital Ninja"], rankChange: "up" },
      { id: 4, name: "Ahmad", username: "@ahmad", streak: 200, streakLabel: "Beruntun", points: 3500, rank: 4, avatar: "/avatars/manwc.png", classesCompleted: 35, studyHours: 140, allBadges: ["Progress Pro", "Yearly Warrior", "Knowledge Seeker", "Tech Titan", "Skill Surgeon"], rankChange: "up" },
      { id: 5, name: "Maya Sari", username: "@maya_sari", streak: 180, streakLabel: "Beruntun", points: 3000, rank: 5, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 30, studyHours: 120, allBadges: ["Yearly Star", "Learning Legend", "Overall Explorer", "Code Crusader"], rankChange: "up" },
      { id: 6, name: "Rizky Pratama", username: "@rizky_p", streak: 150, streakLabel: "Beruntun", points: 2500, rank: 6, avatar: "/avatars/manwc.png", classesCompleted: 25, studyHours: 100, allBadges: ["Tech Titan", "Skill Surgeon", "Yearly Builder", "Achievement Hunter"], rankChange: "up" },
      { id: 7, name: "Dina Wulandari", username: "@dina_w", streak: 120, streakLabel: "Beruntun", points: 2000, rank: 7, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 20, studyHours: 80, allBadges: ["Code Crusader", "Yearly Learner", "Overall Achiever", "Progress Pro"], rankChange: "up" },
      { id: 8, name: "Budi Santoso", username: "@budi_s", streak: 100, streakLabel: "Beruntun", points: 1500, rank: 8, avatar: "/avatars/manwc.png", classesCompleted: 15, studyHours: 60, allBadges: ["Yearly Warrior", "UI UX Design", "Overall Learner", "Learning Champion"], rankChange: "up" },
      { id: 9, name: "Sari Indah", username: "@sari_i", streak: 80, streakLabel: "Beruntun", points: 1000, rank: 9, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 10, studyHours: 40, allBadges: ["Yearly Star", "Learning Champion", "Tech Explorer"], rankChange: "down" },
      { id: 10, name: "Fajar Nugroho", username: "@fajar_n", streak: 60, streakLabel: "Beruntun", points: 800, rank: 10, avatar: "/avatars/manwc.png", classesCompleted: 8, studyHours: 30, allBadges: ["Yearly Newcomer", "Tech Explorer", "Digital Ninja"], rankChange: "down" },
      { id: 11, name: "Lina Putri", username: "@lina_p", streak: 40, streakLabel: "Beruntun", points: 600, rank: 11, avatar: "/avatars/sarahjohnson.jpg", classesCompleted: 5, studyHours: 20, allBadges: ["Yearly Fresh Start", "Digital Ninja", "Progress Pro"], rankChange: "down" },
      { id: 12, name: "Hendra Wijaya", username: "@hendra_w", streak: 20, streakLabel: "Beruntun", points: 400, rank: 12, avatar: "/avatars/manwc.png", classesCompleted: 2, studyHours: 10, allBadges: ["Yearly First Steps", "Progress Pro", "Learning Champion"], rankChange: "down" }
    ]
  };

  // Get leaderboard data based on selected period
  const leaderboardData = periodData[selectedPeriod] || periodData.Harian;

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

  const getRankBadgeIcon = (rank) => {
    switch (rank) {
      case 1:
        return "🥇";
      case 2:
        return "🥈";
      case 3:
        return "🥉";
      default:
        return "";
    }
  };

  const topThree = leaderboardData.slice(0, 3);
  const remainingUsers = leaderboardData.slice(3);

  return (
    <div className="space-y-6">
      {/* Top 3 Cards Section */}
      <div className="flex justify-center items-end gap-4 relative">
        {/* Rank 2 - Left */}
        <div className="relative z-10">
          <div className="rounded-2xl p-6 shadow-lg border w-64 theme-transition" style={{
            borderColor: 'var(--border-color)',
            backgroundColor: 'var(--card-bg)'
          }}>
            {/* Rank Badge */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white text-xl">
                {getRankBadgeIcon(2)}
              </div>
            </div>
            
            {/* User Info */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image 
                    src={topThree[1].avatar} 
                    alt={topThree[1].name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm theme-transition" style={{color: 'var(--text-primary)'}}>
                  {topThree[1].name}
                </h3>
                <p className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
                  {topThree[1].username}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <FaStar className="w-3 h-3 text-blue-500" />
                  <span className="text-xs font-medium theme-transition" style={{color: 'var(--text-primary)'}}>
                    {topThree[1].points}
                  </span>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <FaFire className="w-3 h-3 text-blue-500" />
                </div>
                <div className="text-xs font-bold theme-transition" style={{color: 'var(--text-primary)'}}>
                  {topThree[1].streak} Hari
                </div>
                <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
                  {topThree[1].streakLabel}
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <FaBuilding className="w-3 h-3 text-blue-500" />
                </div>
                <div className="text-xs font-bold theme-transition" style={{color: 'var(--text-primary)'}}>
                  {topThree[1].classesCompleted}
                </div>
                <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
                  Kelas Selesai
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <FaClock className="w-3 h-3 text-blue-500" />
                </div>
                <div className="text-xs font-bold theme-transition" style={{color: 'var(--text-primary)'}}>
                  {topThree[1].studyHours} Jam
                </div>
                <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
                  Jam Belajar
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-1">
              {(() => {
                const { displayedBadges, additionalCount } = getDisplayBadges(topThree[1].allBadges);
                return (
                  <>
                    {displayedBadges.map((badge, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                        {badge}
                      </span>
                    ))}
                    {additionalCount > 0 && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                        +{additionalCount}
                      </span>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Rank 1 - Center (Elevated) */}
        <div className="relative z-20 transform -translate-y-4">
          <div className="rounded-2xl p-6 shadow-xl border w-72 theme-transition" style={{
            borderColor: 'var(--border-color)',
            backgroundColor: 'var(--card-bg)'
          }}>
            {/* Rank Badge */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-white text-2xl">
                {getRankBadgeIcon(1)}
              </div>
            </div>
            
            {/* User Info */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                  <Image 
                    src={topThree[0].avatar} 
                    alt={topThree[0].name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base theme-transition" style={{color: 'var(--text-primary)'}}>
                  {topThree[0].name}
                </h3>
                <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>
                  {topThree[0].username}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <FaStar className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium theme-transition" style={{color: 'var(--text-primary)'}}>
                    {topThree[0].points}
                  </span>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <FaFire className="w-4 h-4 text-blue-500" />
                </div>
                <div className="text-sm font-bold theme-transition" style={{color: 'var(--text-primary)'}}>
                  {topThree[0].streak} Hari
                </div>
                <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
                  {topThree[0].streakLabel}
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <FaBuilding className="w-4 h-4 text-blue-500" />
                </div>
                <div className="text-sm font-bold theme-transition" style={{color: 'var(--text-primary)'}}>
                  {topThree[0].classesCompleted}
                </div>
                <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
                  Kelas Selesai
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <FaClock className="w-4 h-4 text-blue-500" />
                </div>
                <div className="text-sm font-bold theme-transition" style={{color: 'var(--text-primary)'}}>
                  {topThree[0].studyHours} Jam
                </div>
                <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
                  Jam Belajar
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-1">
              {(() => {
                const { displayedBadges, additionalCount } = getDisplayBadges(topThree[0].allBadges);
                return (
                  <>
                    {displayedBadges.map((badge, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                        {badge}
                      </span>
                    ))}
                    {additionalCount > 0 && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                        +{additionalCount}
                      </span>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Rank 3 - Right */}
        <div className="relative z-10">
          <div className="rounded-2xl p-6 shadow-lg border w-64 theme-transition" style={{
            borderColor: 'var(--border-color)',
            backgroundColor: 'var(--card-bg)'
          }}>
            {/* Rank Badge */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl">
                {getRankBadgeIcon(3)}
              </div>
            </div>
            
            {/* User Info */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image 
                    src={topThree[2].avatar} 
                    alt={topThree[2].name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm theme-transition" style={{color: 'var(--text-primary)'}}>
                  {topThree[2].name}
                </h3>
                <p className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
                  {topThree[2].username}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <FaStar className="w-3 h-3 text-blue-500" />
                  <span className="text-xs font-medium theme-transition" style={{color: 'var(--text-primary)'}}>
                    {topThree[2].points}
                  </span>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <FaFire className="w-3 h-3 text-blue-500" />
                </div>
                <div className="text-xs font-bold theme-transition" style={{color: 'var(--text-primary)'}}>
                  {topThree[2].streak} Hari
                </div>
                <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
                  {topThree[2].streakLabel}
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <FaBuilding className="w-3 h-3 text-blue-500" />
                </div>
                <div className="text-xs font-bold theme-transition" style={{color: 'var(--text-primary)'}}>
                  {topThree[2].classesCompleted}
                </div>
                <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
                  Kelas Selesai
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <FaClock className="w-3 h-3 text-blue-500" />
                </div>
                <div className="text-xs font-bold theme-transition" style={{color: 'var(--text-primary)'}}>
                  {topThree[2].studyHours} Jam
                </div>
                <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
                  Jam Belajar
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-1">
              {(() => {
                const { displayedBadges, additionalCount } = getDisplayBadges(topThree[2].allBadges);
                return (
                  <>
                    {displayedBadges.map((badge, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                        {badge}
                      </span>
                    ))}
                    {additionalCount > 0 && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                        +{additionalCount}
                      </span>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard List Section */}
      <div className="rounded-2xl overflow-hidden shadow-lg border theme-transition" style={{
        borderColor: 'var(--border-color)',
        backgroundColor: 'var(--card-bg)'
      }}>
        {/* Header */}
        <div className="px-6 py-4 border-b theme-transition" style={{
          borderColor: 'var(--border-color)',
          backgroundColor: 'var(--hover-bg)'
        }}>
          <div className="grid grid-cols-6 gap-4 text-sm font-semibold theme-transition" style={{color: 'var(--text-secondary)'}}>
            <div>Posisi</div>
            <div>Nama Pengguna</div>
            <div>Materi Selesai</div>
            <div>Runtutan Harian</div>
            <div>Badge</div>
            <div>Point</div>
          </div>
        </div>

        {/* List Items */}
        <div className="divide-y theme-transition" style={{borderColor: 'var(--border-color)'}}>
          {remainingUsers.map((user, index) => (
            <div key={user.id} className="px-6 py-4 transition-colors theme-transition" style={{
              '--hover-bg': 'var(--hover-bg)'
            }} onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--hover-bg)';
            }} onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}>
              <div className="grid grid-cols-6 gap-4 items-center">
                {/* Posisi */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium theme-transition" style={{color: 'var(--text-primary)'}}>
                    {user.rank}
                  </span>
                  {user.rankChange === "up" ? (
                    <FaArrowUp className="w-3 h-3 text-green-500" />
                  ) : (
                    <FaArrowDown className="w-3 h-3 text-red-500" />
                  )}
                </div>

                {/* Nama Pengguna */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                    <Image 
                      src={user.avatar} 
                      alt={user.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium theme-transition" style={{color: 'var(--text-primary)'}}>
                      {user.name}
                    </div>
                    <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
                      {user.username}
                    </div>
                  </div>
                </div>

                {/* Materi Selesai */}
                <div className="text-sm theme-transition" style={{color: 'var(--text-primary)'}}>
                  {user.classesCompleted} Materi
                </div>

                {/* Runtutan Harian */}
                <div className="text-sm theme-transition" style={{color: 'var(--text-primary)'}}>
                  {user.streak} Runtutan
                </div>

                {/* Badge */}
                <div className="flex flex-wrap gap-1">
                  {(() => {
                    const { displayedBadges, additionalCount } = getDisplayBadges(user.allBadges);
                    return (
                      <>
                        {displayedBadges.map((badge, badgeIndex) => (
                          <span key={badgeIndex} className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                            {badge}
                          </span>
                        ))}
                        {additionalCount > 0 && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                            +{additionalCount}
                          </span>
                        )}
                      </>
                    );
                  })()}
                </div>

                {/* Point */}
                <div className="flex items-center gap-1">
                  <FaStar className="w-3 h-3 text-blue-500" />
                  <span className="text-sm font-medium theme-transition" style={{color: 'var(--text-primary)'}}>
                    {user.points}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
