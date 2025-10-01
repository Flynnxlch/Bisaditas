"use client";

import Identform from "@/components/Identform";
import LastReadBanner from "@/components/LastReadBanner";
import MemberDashboardBanner from "@/components/MemberDashboardBanner";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DashContent({ hideSidebar = false, onFormToggle }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showIdentform, setShowIdentform] = useState(false);
  const [showLastReadBanner, setShowLastReadBanner] = useState(false);
  
  // Stats data
  const statsData = {
    completedCourses: {
      title: "Course Selesai",
      current: 2,
      total: 6,
      icon: "✓",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    ongoingCourses: {
      title: "Course Sedang Dipelajari",
      current: 4,
      total: 6,
      icon: "📚",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    }
  };

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Slightly longer for better UX
    return () => clearTimeout(timer);
  }, []);
  
  // Course data yang sedang dipelajari
  const courseItems = [
    {
      id: 1,
      title: "Fundamentals of Web Development",
      description: "Learn the basics of HTML, CSS, and JavaScript to build modern web applications",
      category: "UI/UX Design",
      duration: "3 weeks",
      progress: 75,
      thumbnail: "/thumbnail/thumb1.png",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 1250
    },
    {
      id: 2,
      title: "Advanced Web Development",
      description: "Master advanced web development techniques and modern frameworks",
      category: "Web Development",
      duration: "4 weeks",
      progress: 60,
      thumbnail: "/thumbnail/thumb1.png",
      instructor: "Mike Chen",
      rating: 4.9,
      students: 890
    },
    {
      id: 3,
      title: "Database Management",
      description: "Learn database design principles and efficient data management",
      category: "Backend Development",
      duration: "2 weeks",
      progress: 90,
      thumbnail: "/thumbnail/thumb1.png",
      instructor: "Alex Rodriguez",
      rating: 4.7,
      students: 2100
    }
  ];

  // Sample recommendation data
  const recommendations = [
    {
      id: 1,
      title: "Creating Design App UIUX",
      description: "Membuat sebuah UIUX dari sebuah apl",
      category: "UI UX Design",
      difficulty: "Menengah",
      rating: "4.5/5",
      isPopular: true
    },
    {
      id: 2,
      title: "Advanced Mobile Development",
      description: "Belajar pengembangan aplikasi mobile",
      category: "Mobile Development",
      difficulty: "Tinggi",
      rating: "4.8/5",
      isPopular: true
    },
    {
      id: 3,
      title: "Web Design Fundamentals",
      description: "Dasar-dasar desain web modern",
      category: "Web Design",
      difficulty: "Pemula",
      rating: "4.3/5",
      isPopular: false
    },
    {
      id: 4,
      title: "Data Science Basics",
      description: "Pengantar ilmu data dan analisis",
      category: "Data Science",
      difficulty: "Menengah",
      rating: "4.6/5",
      isPopular: true
    },
    {
      id: 5,
      title: "Digital Marketing Strategy",
      description: "Strategi pemasaran digital efektif",
      category: "Marketing",
      difficulty: "Pemula",
      rating: "4.2/5",
      isPopular: false
    },
    {
      id: 6,
      title: "Cloud Computing Essentials",
      description: "Fundamental komputasi awan",
      category: "Cloud Computing",
      difficulty: "Menengah",
      rating: "4.7/5",
      isPopular: true
    }
  ];

  // Create extended array for seamless looping
  const extendedRecommendations = [...recommendations, ...recommendations, ...recommendations];
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };

  const handleCompleteForm = () => {
    setShowIdentform(true);
    if (onFormToggle) {
      onFormToggle(true);
    }
  };

  const handleFormComplete = () => {
    setShowIdentform(false);
    setShowLastReadBanner(true); // Switch to LastReadBanner after form completion
    if (onFormToggle) {
      onFormToggle(false);
    }
  };

  // Get the three cards to display (current, next, previous for looping effect)
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % recommendations.length;
      cards.push(recommendations[index]);
    }
    return cards;
  };

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-6 rounded w-3/4 mb-3 theme-transition" style={{backgroundColor: 'var(--hover-bg)'}}></div>
      <div className="h-8 rounded w-1/2 mb-3 theme-transition" style={{backgroundColor: 'var(--hover-bg)'}}></div>
      <div className="w-full rounded-full h-2 mb-3 theme-transition" style={{backgroundColor: 'var(--hover-bg)'}}></div>
      <div className="h-3 rounded w-1/4 theme-transition" style={{backgroundColor: 'var(--hover-bg)'}}></div>
    </div>
  );

  // If showing identform, render it instead of dashboard content
  if (showIdentform) {
    return <Identform onComplete={handleFormComplete} />;
  }

  return (
    <div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-count-up {
          animation: countUp 0.8s ease-out;
        }
      `}</style>
      
      <div className="mb-6">
        {showLastReadBanner ? (
          <LastReadBanner 
            title="Fundamentals of Web Development"
            description="Learn the basics of HTML, CSS, and JavaScript to build modern web applications"
            progress={75}
            thumbnail="/thumbnail/thumb1.png"
          />
        ) : (
          <MemberDashboardBanner onCompleteForm={handleCompleteForm} />
        )}
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {Object.entries(statsData).map(([key, stat]) => (
          <div key={key} className="rounded-2xl p-6 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${stat.bgColor}`}>
                  {stat.icon}
                </div>
                <div>
                  <div className="text-sm font-medium theme-transition" style={{color: 'var(--text-secondary)'}}>
                    {stat.title}
                  </div>
                  <div className="text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
                    Progress Anda
                  </div>
                </div>
              </div>
              <div className={`text-xs px-2 py-1 rounded-full ${stat.bgColor} ${stat.color} font-medium transition-all duration-300`}>
                {isLoading ? (
                  <span className="animate-pulse">Loading...</span>
                ) : (
                  `${Math.round((stat.current / stat.total) * 100)}%`
                )}
              </div>
            </div>
            
            {isLoading ? (
              <LoadingSkeleton />
            ) : (
              <>
                <div className="text-3xl font-bold theme-transition mb-2 animate-fade-in" style={{color: 'var(--text-primary)'}}>
                  <span className="animate-count-up">{stat.current}</span>
                  <span className="text-lg font-normal theme-transition" style={{color: 'var(--text-secondary)'}}>
                    /{stat.total}
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full rounded-full h-2 mb-3 theme-transition" style={{backgroundColor: 'var(--hover-bg)'}}>
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      key === 'completedCourses' ? 'bg-green-500' : 'bg-blue-500'
                    }`}
                    style={{width: `${(stat.current / stat.total) * 100}%`}}
                  ></div>
                </div>
                
                <div className="flex items-center justify-between text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
                  <span>{stat.total - stat.current} course tersisa</span>
                  <span className={`${stat.color} font-medium`}>
                    {stat.current === stat.total ? "Selesai!" : "Lanjutkan"}
                  </span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Courses list */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>
            Course Yang Sedang Dipelajari
          </h2>
          <button className="text-sm font-medium theme-transition hover:opacity-80 transition-opacity" style={{color: 'var(--accent-color)'}}>
            Lihat Semua ({courseItems.length})
          </button>
        </div>
        <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>
          Lanjutkan pembelajaran Anda dengan course-course berikut
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {courseItems.map((item) => (
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


      {/* Recommendations Carousel */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[13px] font-semibold theme-transition" style={{color: 'var(--text-primary)'}}>Rekomendasi Untuk Anda</h3>
          <div className="flex items-center gap-2">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full hover:bg-opacity-50 theme-transition" 
              style={{
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)',
                borderWidth: '1px',
                backgroundColor: 'var(--card-bg)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--hover-bg)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--card-bg)';
              }}
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full hover:bg-opacity-50 theme-transition" 
              style={{
                borderColor: 'var(--border-color)',
                color: 'var(--text-secondary)',
                borderWidth: '1px',
                backgroundColor: 'var(--card-bg)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--hover-bg)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--card-bg)';
              }}
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {getVisibleCards().map((course, index) => (
              <article key={`${course.id}-${currentIndex}-${index}`} className="rounded-2xl overflow-hidden hover:shadow-md transition-all theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src="/thumbnail/thumb1.png" alt={course.title} fill className="object-cover" />
                  {course.isPopular && (
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs flex items-center gap-1 theme-transition" style={{backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)'}}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      Populer
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 rounded-full text-xs font-medium theme-transition" style={{backgroundColor: 'var(--hover-bg)', color: 'var(--text-primary)'}}>
                      {course.category}
                    </span>
                  </div>
                  <h4 className="font-semibold mb-1 theme-transition" style={{color: 'var(--text-primary)'}}>{course.title}</h4>
                  <p className="text-sm mb-3 theme-transition" style={{color: 'var(--text-secondary)'}}>{course.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 theme-transition" style={{color: 'var(--text-secondary)'}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 3h18v18H3zM9 9h6v6H9z"/>
                        <path d="M9 3v6M15 3v6M9 15v6M15 15v6"/>
                      </svg>
                      {course.difficulty}
                    </div>
                    <div className="flex items-center gap-1 theme-transition" style={{color: 'var(--text-secondary)'}}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      {course.rating}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        
        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {recommendations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="w-2 h-2 rounded-full transition-colors theme-transition"
              style={{
                backgroundColor: index === currentIndex ? 'var(--text-primary)' : 'var(--text-secondary)'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
