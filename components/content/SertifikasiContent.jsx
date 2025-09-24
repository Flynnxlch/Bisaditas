"use client";

import Image from "next/image";

export default function SertifikasiContent() {
  const certifications = [
    {
      id: 1,
      title: "Google Cloud Professional Developer",
      description: "Validate your expertise in developing and deploying applications on Google Cloud Platform",
      provider: "Google Cloud",
      level: "Professional",
      duration: "3 hours",
      price: "$200",
      thumbnail: "/thumbnail/thumb1.png",
      rating: 4.9,
      students: 15000,
      badge: "Popular"
    },
    {
      id: 2,
      title: "AWS Certified Solutions Architect",
      description: "Demonstrate your ability to design distributed systems on AWS",
      provider: "Amazon Web Services",
      level: "Associate",
      duration: "2.5 hours",
      price: "$150",
      thumbnail: "/thumbnail/thumb1.png",
      rating: 4.8,
      students: 25000,
      badge: "Trending"
    },
    {
      id: 3,
      title: "Microsoft Azure Developer Associate",
      description: "Prove your skills in developing Azure solutions using various programming languages",
      provider: "Microsoft",
      level: "Associate",
      duration: "2 hours",
      price: "$165",
      thumbnail: "/thumbnail/thumb1.png",
      rating: 4.7,
      students: 12000,
      badge: null
    },
    {
      id: 4,
      title: "Certified Kubernetes Administrator",
      description: "Validate your ability to install, configure, and manage Kubernetes clusters",
      provider: "Cloud Native Computing Foundation",
      level: "Professional",
      duration: "3 hours",
      price: "$300",
      thumbnail: "/thumbnail/thumb1.png",
      rating: 4.9,
      students: 8500,
      badge: "Hot"
    },
    {
      id: 5,
      title: "React Developer Certification",
      description: "Showcase your expertise in building modern web applications with React",
      provider: "Meta",
      level: "Professional",
      duration: "2 hours",
      price: "$99",
      thumbnail: "/thumbnail/thumb1.png",
      rating: 4.6,
      students: 18000,
      badge: null
    },
    {
      id: 6,
      title: "Docker Certified Associate",
      description: "Demonstrate your knowledge of Docker containerization technology",
      provider: "Docker Inc.",
      level: "Associate",
      duration: "1.5 hours",
      price: "$195",
      thumbnail: "/thumbnail/thumb1.png",
      rating: 4.8,
      students: 11000,
      badge: "New"
    }
  ];

  const myCertifications = [
    {
      id: 1,
      title: "Google Cloud Professional Developer",
      completedDate: "2024-01-15",
      score: 92,
      status: "Active",
      thumbnail: "/thumbnail/thumb1.png"
    },
    {
      id: 2,
      title: "AWS Certified Solutions Architect",
      completedDate: "2023-11-20",
      score: 88,
      status: "Active",
      thumbnail: "/thumbnail/thumb1.png"
    }
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 theme-transition" style={{color: 'var(--text-primary)'}}>
          Certifications
        </h1>
        <p className="text-lg theme-transition" style={{color: 'var(--text-secondary)'}}>
          Earn industry-recognized certifications to advance your career
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="rounded-2xl p-6 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl" style={{backgroundColor: 'var(--accent-color)', opacity: 0.1}}>
              <svg className="w-6 h-6" style={{color: 'var(--accent-color)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <span className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>2</span>
          </div>
          <h3 className="font-semibold mb-1 theme-transition" style={{color: 'var(--text-primary)'}}>Earned</h3>
          <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>Certifications</p>
        </div>

        <div className="rounded-2xl p-6 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl" style={{backgroundColor: '#10b981', opacity: 0.1}}>
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>4</span>
          </div>
          <h3 className="font-semibold mb-1 theme-transition" style={{color: 'var(--text-primary)'}}>In Progress</h3>
          <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>Certifications</p>
        </div>

        <div className="rounded-2xl p-6 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl" style={{backgroundColor: '#f59e0b', opacity: 0.1}}>
              <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>89%</span>
          </div>
          <h3 className="font-semibold mb-1 theme-transition" style={{color: 'var(--text-primary)'}}>Average Score</h3>
          <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>Last 6 months</p>
        </div>

        <div className="rounded-2xl p-6 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl" style={{backgroundColor: '#8b5cf6', opacity: 0.1}}>
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>12</span>
          </div>
          <h3 className="font-semibold mb-1 theme-transition" style={{color: 'var(--text-primary)'}}>Available</h3>
          <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>Certifications</p>
        </div>
      </div>

      {/* My Certifications Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 theme-transition" style={{color: 'var(--text-primary)'}}>
          My Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {myCertifications.map((cert) => (
            <div key={cert.id} className="rounded-2xl p-6 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden">
                  <Image src={cert.thumbnail} alt={cert.title} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 theme-transition" style={{color: 'var(--text-primary)'}}>
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-2 py-1 rounded-full text-xs font-medium text-green-600 bg-green-100">
                      {cert.status}
                    </span>
                    <span className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>
                      Score: {cert.score}%
                    </span>
                  </div>
                  <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>
                    Completed on {new Date(cert.completedDate).toLocaleDateString()}
                  </p>
                </div>
                <button className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90" style={{backgroundColor: 'var(--accent-color)'}}>
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Certifications Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6 theme-transition" style={{color: 'var(--text-primary)'}}>
          Available Certifications
        </h2>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['All', 'Cloud', 'Development', 'Security', 'Data', 'DevOps'].map((category) => (
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

        {/* Certification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="rounded-2xl overflow-hidden theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
              <div className="relative aspect-video">
                <Image 
                  src={cert.thumbnail} 
                  alt={cert.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 rounded-full text-xs font-medium text-white" style={{backgroundColor: 'var(--accent-color)'}}>
                    {cert.level}
                  </span>
                </div>
                {cert.badge && (
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      cert.badge === 'Popular' ? 'bg-red-500 text-white' :
                      cert.badge === 'Trending' ? 'bg-orange-500 text-white' :
                      cert.badge === 'Hot' ? 'bg-pink-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {cert.badge}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg theme-transition" style={{color: 'var(--text-primary)'}}>
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium theme-transition" style={{color: 'var(--text-primary)'}}>
                      {cert.rating}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm mb-4 theme-transition" style={{color: 'var(--text-secondary)'}}>
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {cert.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {cert.students.toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium theme-transition" style={{color: 'var(--text-primary)'}}>
                      {cert.provider}
                    </p>
                    <p className="text-lg font-bold theme-transition" style={{color: 'var(--accent-color)'}}>
                      {cert.price}
                    </p>
                  </div>
                  <button className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90" style={{backgroundColor: 'var(--accent-color)'}}>
                    Enroll Now
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

