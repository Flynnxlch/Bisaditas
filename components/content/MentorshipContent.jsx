"use client";

import Image from "next/image";

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
      thumbnail: "/thumbnail/thumb1.png",
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
      thumbnail: "/thumbnail/thumb1.png",
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
      thumbnail: "/thumbnail/thumb1.png",
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
      thumbnail: "/thumbnail/thumb1.png",
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
      thumbnail: "/thumbnail/thumb1.png",
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
      thumbnail: "/thumbnail/thumb1.png",
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
        <div className="rounded-2xl p-6 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl" style={{backgroundColor: 'var(--accent-color)', opacity: 0.1}}>
              <svg className="w-6 h-6" style={{color: 'var(--accent-color)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>2</span>
          </div>
          <h3 className="font-semibold mb-1 theme-transition" style={{color: 'var(--text-primary)'}}>Active</h3>
          <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>Mentorships</p>
        </div>

        <div className="rounded-2xl p-6 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl" style={{backgroundColor: '#10b981', opacity: 0.1}}>
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>24</span>
          </div>
          <h3 className="font-semibold mb-1 theme-transition" style={{color: 'var(--text-primary)'}}>Sessions</h3>
          <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>This month</p>
        </div>

        <div className="rounded-2xl p-6 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl" style={{backgroundColor: '#f59e0b', opacity: 0.1}}>
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>4.8</span>
          </div>
          <h3 className="font-semibold mb-1 theme-transition" style={{color: 'var(--text-primary)'}}>Avg Rating</h3>
          <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>From mentors</p>
        </div>

        <div className="rounded-2xl p-6 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl" style={{backgroundColor: '#8b5cf6', opacity: 0.1}}>
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
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
                    <span className="px-2 py-1 rounded-full text-xs font-medium text-green-600 bg-green-100">
                      {mentorship.status}
                    </span>
                    <span className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>
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
                <button className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90" style={{backgroundColor: 'var(--accent-color)'}}>
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
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    mentor.availability === 'Available' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-orange-500 text-white'
                  }`}>
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
                    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
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
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {mentor.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
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
                  <button className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90" style={{backgroundColor: 'var(--accent-color)'}}>
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

