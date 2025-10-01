"use client";

import Image from "next/image";
import {
    FaBookmark,
    FaCalendarAlt,
    FaChartLine,
    FaCheckCircle,
    FaClock,
    FaGraduationCap,
    FaPlay,
    FaStar,
    FaUsers,
    FaUserTie
} from "react-icons/fa";

export default function MentorshipContent() {
  const mentors = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Software Engineer at Google",
      expertise: ["React", "Node.js", "AWS", "Leadership"],
      experience: "8 years",
      rating: 4.9,
      sessions: 150,
      price: "$80/hour",
      thumbnail: "/avatars/sarahjohnson.jpg",
      availability: "Available",
      description: "Passionate about helping developers grow their careers and technical skills"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Principal Engineer at Microsoft",
      expertise: ["Python", "Machine Learning", "Azure", "System Design"],
      experience: "12 years",
      rating: 4.8,
      sessions: 200,
      price: "$120/hour",
      thumbnail: "/avatars/sarahjohnson.jpg",
      availability: "Available",
      description: "Expert in AI/ML with a focus on practical applications and career guidance"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      title: "Product Manager at Meta",
      expertise: ["Product Strategy", "User Research", "Agile", "Team Management"],
      experience: "6 years",
      rating: 4.9,
      sessions: 180,
      price: "$100/hour",
      thumbnail: "/avatars/sarahjohnson.jpg",
      availability: "Limited",
      description: "Helping aspiring PMs break into product management and excel in their roles"
    },
    {
      id: 4,
      name: "David Kim",
      title: "Staff Engineer at Netflix",
      expertise: ["Scalability", "Microservices", "Kubernetes", "Architecture"],
      experience: "10 years",
      rating: 4.7,
      sessions: 120,
      price: "$150/hour",
      thumbnail: "/avatars/sarahjohnson.jpg",
      availability: "Available",
      description: "Specialized in building large-scale distributed systems and mentoring engineers"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      title: "UX Director at Airbnb",
      expertise: ["UX Design", "Design Systems", "User Research", "Leadership"],
      experience: "9 years",
      rating: 4.8,
      sessions: 160,
      price: "$90/hour",
      thumbnail: "/avatars/sarahjohnson.jpg",
      availability: "Available",
      description: "Design leader passionate about creating user-centered experiences and growing design teams"
    },
    {
      id: 6,
      name: "Alex Wilson",
      title: "Data Science Lead at Spotify",
      expertise: ["Data Science", "Python", "SQL", "Statistics"],
      experience: "7 years",
      rating: 4.9,
      sessions: 140,
      price: "$110/hour",
      thumbnail: "/avatars/sarahjohnson.jpg",
      availability: "Available",
      description: "Data science expert helping professionals transition into data-driven roles"
    }
  ];

  const myMentorships = [
    {
      id: 1,
      mentor: "Sarah Johnson",
      topic: "React Advanced Patterns",
      nextSession: "2024-02-15",
      status: "Active",
      progress: 60,
      thumbnail: "/thumbnail/thumb1.png"
    },
    {
      id: 2,
      mentor: "Michael Chen",
      topic: "Machine Learning Fundamentals",
      nextSession: "2024-02-18",
      status: "Active",
      progress: 30,
      thumbnail: "/thumbnail/thumb1.png"
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 theme-transition" style={{color: 'var(--text-primary)'}}>
          Mentorship
        </h1>
        <p className="text-lg theme-transition" style={{color: 'var(--text-secondary)'}}>
          Connect with industry experts and accelerate your career growth
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="rounded-2xl p-6 theme-transition hover:shadow-lg transition-all duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <FaUsers className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>2</span>
          </div>
          <h3 className="font-semibold mb-1 theme-transition" style={{color: 'var(--text-primary)'}}>Active</h3>
          <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>Mentorships</p>
        </div>

        <div className="rounded-2xl p-6 theme-transition hover:shadow-lg transition-all duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white">
              <FaCheckCircle className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>24</span>
          </div>
          <h3 className="font-semibold mb-1 theme-transition" style={{color: 'var(--text-primary)'}}>Sessions</h3>
          <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>This month</p>
        </div>

        <div className="rounded-2xl p-6 theme-transition hover:shadow-lg transition-all duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white">
              <FaStar className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>4.8</span>
          </div>
          <h3 className="font-semibold mb-1 theme-transition" style={{color: 'var(--text-primary)'}}>Avg Rating</h3>
          <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>From mentors</p>
        </div>

        <div className="rounded-2xl p-6 theme-transition hover:shadow-lg transition-all duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <FaChartLine className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>85%</span>
          </div>
          <h3 className="font-semibold mb-1 theme-transition" style={{color: 'var(--text-primary)'}}>Progress</h3>
          <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>Overall</p>
        </div>
      </div>

      {/* My Mentorships Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 theme-transition" style={{color: 'var(--text-primary)'}}>
          My Active Mentorships
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {myMentorships.map((mentorship) => (
            <div key={mentorship.id} className="rounded-2xl p-6 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden">
                  <Image src={mentorship.thumbnail} alt={mentorship.mentor} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 theme-transition" style={{color: 'var(--text-primary)'}}>
                    {mentorship.topic}
                  </h3>
                  <p className="text-sm mb-3 theme-transition" style={{color: 'var(--text-secondary)'}}>
                    with {mentorship.mentor}
                  </p>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-2 py-1 rounded-full text-xs font-medium text-green-600 bg-green-100 flex items-center gap-1">
                      <FaCheckCircle className="w-3 h-3" />
                      {mentorship.status}
                    </span>
                    <span className="text-sm theme-transition flex items-center gap-1" style={{color: 'var(--text-secondary)'}}>
                      <FaCalendarAlt className="w-3 h-3" />
                      Next: {new Date(mentorship.nextSession).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium theme-transition" style={{color: 'var(--text-primary)'}}>
                        Progress
                      </span>
                      <span className="text-sm font-medium theme-transition" style={{color: 'var(--accent-color)'}}>
                        {mentorship.progress}%
                      </span>
                    </div>
                    <div className="w-full rounded-full h-2 theme-transition" style={{backgroundColor: 'var(--hover-bg)'}}>
                      <div 
                        className="h-2 rounded-full transition-all duration-300"
                        style={{backgroundColor: 'var(--accent-color)', width: `${mentorship.progress}%`}}
                      />
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90 flex items-center gap-2" style={{backgroundColor: 'var(--accent-color)'}}>
                  <FaPlay className="w-4 h-4" />
                  Join Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Mentors Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6 theme-transition" style={{color: 'var(--text-primary)'}}>
          Available Mentors
        </h2>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['All', 'Engineering', 'Product', 'Design', 'Data Science', 'Leadership'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                category === 'All' 
                  ? 'text-white' 
                  : 'theme-transition'
              }`}
              style={{
                backgroundColor: category === 'All' ? 'var(--accent-color)' : 'transparent',
                color: category === 'All' ? 'white' : 'var(--text-secondary)',
                borderColor: 'var(--border-color)',
                borderWidth: '1px'
              }}
              onMouseEnter={(e) => {
                if (category !== 'All') {
                  e.target.style.backgroundColor = 'var(--hover-bg)';
                  e.target.style.color = 'var(--text-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (category !== 'All') {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="rounded-2xl overflow-hidden theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
              <div className="relative aspect-video">
                <Image 
                  src={mentor.thumbnail} 
                  alt={mentor.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                    mentor.availability === 'Available' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-orange-500 text-white'
                  }`}>
                    <FaUserTie className="w-3 h-3" />
                    {mentor.availability}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg theme-transition" style={{color: 'var(--text-primary)'}}>
                    {mentor.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <FaStar className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-medium theme-transition" style={{color: 'var(--text-primary)'}}>
                      {mentor.rating}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm mb-3 theme-transition" style={{color: 'var(--text-secondary)'}}>
                  {mentor.title}
                </p>
                
                <p className="text-sm mb-4 theme-transition" style={{color: 'var(--text-secondary)'}}>
                  {mentor.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {mentor.expertise.map((skill) => (
                    <span key={skill} className="px-2 py-1 rounded-full text-xs font-medium theme-transition" style={{backgroundColor: 'var(--hover-bg)', color: 'var(--text-primary)'}}>
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>
                    <span className="flex items-center gap-1">
                      <FaClock className="w-4 h-4" />
                      {mentor.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaGraduationCap className="w-4 h-4" />
                      {mentor.sessions} sessions
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold theme-transition" style={{color: 'var(--accent-color)'}}>
                      {mentor.price}
                    </p>
                    <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>
                      per session
                    </p>
                  </div>
                  <button className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90 flex items-center gap-2" style={{backgroundColor: 'var(--accent-color)'}}>
                    <FaBookmark className="w-4 h-4" />
                    Book Session
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

