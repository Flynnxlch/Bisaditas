"use client";

import Image from "next/image";

export default function MateriContent() {
  const materiItems = [
    {
      id: 1,
      title: "Fundamentals of Web Development",
      description: "Learn the basics of HTML, CSS, and JavaScript to build modern web applications",
      category: "Web Development",
      duration: "4 weeks",
      progress: 75,
      thumbnail: "/thumbnail/thumb1.png",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 1250
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      description: "Master advanced React concepts including hooks, context, and performance optimization",
      category: "Frontend Development",
      duration: "6 weeks",
      progress: 45,
      thumbnail: "/thumbnail/thumb1.png",
      instructor: "Mike Chen",
      rating: 4.9,
      students: 890
    },
    {
      id: 3,
      title: "Database Design & SQL",
      description: "Learn database design principles and SQL queries for efficient data management",
      category: "Backend Development",
      duration: "3 weeks",
      progress: 90,
      thumbnail: "/thumbnail/thumb1.png",
      instructor: "Alex Rodriguez",
      rating: 4.7,
      students: 2100
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      description: "Create beautiful and user-friendly interfaces with modern design principles",
      category: "Design",
      duration: "5 weeks",
      progress: 30,
      thumbnail: "/thumbnail/thumb1.png",
      instructor: "Emma Wilson",
      rating: 4.6,
      students: 1680
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Build cross-platform mobile applications using React Native",
      category: "Mobile Development",
      duration: "8 weeks",
      progress: 60,
      thumbnail: "/thumbnail/thumb1.png",
      instructor: "David Kim",
      rating: 4.8,
      students: 950
    },
    {
      id: 6,
      title: "Cloud Computing & AWS",
      description: "Master cloud services and deployment strategies for scalable applications",
      category: "Cloud Computing",
      duration: "7 weeks",
      progress: 20,
      thumbnail: "/thumbnail/thumb1.png",
      instructor: "Lisa Thompson",
      rating: 4.9,
      students: 1100
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 theme-transition" style={{color: 'var(--text-primary)'}}>
          Learning Materials
        </h1>
        <p className="text-lg theme-transition" style={{color: 'var(--text-secondary)'}}>
          Explore our comprehensive collection of courses and learning resources
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="rounded-2xl p-6 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl" style={{backgroundColor: 'var(--accent-color)', opacity: 0.1}}>
              <svg className="w-6 h-6" style={{color: 'var(--accent-color)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>24</span>
          </div>
          <h3 className="font-semibold mb-1 theme-transition" style={{color: 'var(--text-primary)'}}>Active Courses</h3>
          <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>Currently available</p>
        </div>

        <div className="rounded-2xl p-6 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl" style={{backgroundColor: '#10b981', opacity: 0.1}}>
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>12</span>
          </div>
          <h3 className="font-semibold mb-1 theme-transition" style={{color: 'var(--text-primary)'}}>Completed</h3>
          <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>This month</p>
        </div>

        <div className="rounded-2xl p-6 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl" style={{backgroundColor: '#f59e0b', opacity: 0.1}}>
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>156h</span>
          </div>
          <h3 className="font-semibold mb-1 theme-transition" style={{color: 'var(--text-primary)'}}>Study Time</h3>
          <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>This month</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['All', 'Web Development', 'Frontend Development', 'Backend Development', 'Design', 'Mobile Development', 'Cloud Computing'].map((category) => (
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

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materiItems.map((item) => (
          <div key={item.id} className="rounded-2xl overflow-hidden theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
            <div className="relative aspect-video">
              <Image 
                src={item.thumbnail} 
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 rounded-full text-xs font-medium text-white" style={{backgroundColor: 'var(--accent-color)'}}>
                  {item.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg theme-transition" style={{color: 'var(--text-primary)'}}>
                  {item.title}
                </h3>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium theme-transition" style={{color: 'var(--text-primary)'}}>
                    {item.rating}
                  </span>
                </div>
              </div>
              
              <p className="text-sm mb-4 theme-transition" style={{color: 'var(--text-secondary)'}}>
                {item.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4 text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {item.students}
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium theme-transition" style={{color: 'var(--text-primary)'}}>
                    Progress
                  </span>
                  <span className="text-sm font-medium theme-transition" style={{color: 'var(--accent-color)'}}>
                    {item.progress}%
                  </span>
                </div>
                <div className="w-full rounded-full h-2 theme-transition" style={{backgroundColor: 'var(--hover-bg)'}}>
                  <div 
                    className="h-2 rounded-full transition-all duration-300"
                    style={{backgroundColor: 'var(--accent-color)', width: `${item.progress}%`}}
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full theme-transition" style={{backgroundColor: 'var(--text-secondary)'}} />
                  <div>
                    <p className="text-sm font-medium theme-transition" style={{color: 'var(--text-primary)'}}>
                      {item.instructor}
                    </p>
                    <p className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
                      Instructor
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90" style={{backgroundColor: 'var(--accent-color)'}}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

