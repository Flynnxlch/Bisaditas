"use client";

import Image from "next/image";
import {
    FaAward,
    FaCertificate,
    FaCheckCircle,
    FaClock,
    FaDownload,
    FaEye,
    FaRocket,
    FaShieldAlt,
    FaStar,
    FaUsers
} from "react-icons/fa";

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
        <div className="rounded-2xl p-6 theme-transition hover:shadow-lg transition-all duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <FaCertificate className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>2</span>
          </div>
          <h3 className="font-semibold mb-1 theme-transition" style={{color: 'var(--text-primary)'}}>Earned</h3>
          <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>Certifications</p>
        </div>

        <div className="rounded-2xl p-6 theme-transition hover:shadow-lg transition-all duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white">
              <FaRocket className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>4</span>
          </div>
          <h3 className="font-semibold mb-1 theme-transition" style={{color: 'var(--text-primary)'}}>In Progress</h3>
          <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>Certifications</p>
        </div>

        <div className="rounded-2xl p-6 theme-transition hover:shadow-lg transition-all duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white">
              <FaAward className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>89%</span>
          </div>
          <h3 className="font-semibold mb-1 theme-transition" style={{color: 'var(--text-primary)'}}>Average Score</h3>
          <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>Last 6 months</p>
        </div>

        <div className="rounded-2xl p-6 theme-transition hover:shadow-lg transition-all duration-300" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white">
              <FaShieldAlt className="w-6 h-6" />
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
                    <span className="px-2 py-1 rounded-full text-xs font-medium text-green-600 bg-green-100 flex items-center gap-1">
                      <FaCheckCircle className="w-3 h-3" />
                      {cert.status}
                    </span>
                    <span className="text-sm theme-transition flex items-center gap-1" style={{color: 'var(--text-secondary)'}}>
                      <FaAward className="w-3 h-3" />
                      Score: {cert.score}%
                    </span>
                  </div>
                  <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>
                    Completed on {new Date(cert.completedDate).toLocaleDateString()}
                  </p>
                </div>
                <button className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90 flex items-center gap-2" style={{backgroundColor: 'var(--accent-color)'}}>
                  <FaEye className="w-4 h-4" />
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
                    <FaStar className="w-4 h-4 text-amber-400" />
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
                      <FaClock className="w-4 h-4" />
                      {cert.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUsers className="w-4 h-4" />
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
                  <button className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:opacity-90 flex items-center gap-2" style={{backgroundColor: 'var(--accent-color)'}}>
                    <FaDownload className="w-4 h-4" />
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

