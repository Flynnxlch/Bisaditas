"use client";

import Image from "next/image";
import { useState } from "react";

export default function MateriContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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

  // Sample recommendation data
  const recommendations = [
    {
      id: 1,
      title: "Creating Design App UIUX",
      description: "Membuat sebuah UIUX dari sebuah aplikasi mobile yang modern dan user-friendly",
      category: "UI UX Design",
      difficulty: "Menengah",
      rating: "4.5/5",
      isPopular: true
    },
    {
      id: 2,
      title: "Advanced Mobile Development",
      description: "Belajar pengembangan aplikasi mobile dengan teknologi terbaru",
      category: "Mobile Development",
      difficulty: "Tinggi",
      rating: "4.8/5",
      isPopular: true
    },
    {
      id: 3,
      title: "Web Design Fundamentals",
      description: "Dasar-dasar desain web modern dengan prinsip-prinsip terbaik",
      category: "Web Design",
      difficulty: "Pemula",
      rating: "4.3/5",
      isPopular: false
    },
    {
      id: 4,
      title: "Data Science Basics",
      description: "Pengantar ilmu data dan analisis untuk pemula",
      category: "Data Science",
      difficulty: "Menengah",
      rating: "4.6/5",
      isPopular: true
    },
    {
      id: 5,
      title: "Digital Marketing Strategy",
      description: "Strategi pemasaran digital yang efektif dan terukur",
      category: "Marketing",
      difficulty: "Pemula",
      rating: "4.2/5",
      isPopular: false
    },
    {
      id: 6,
      title: "Cloud Computing Essentials",
      description: "Fundamental komputasi awan untuk pengembang modern",
      category: "Cloud Computing",
      difficulty: "Menengah",
      rating: "4.7/5",
      isPopular: true
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);
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

  return (
    <div>
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>
            Materi Yang Sedang Dipelajari
          </h2>
          <button className="text-sm font-medium theme-transition hover:opacity-80 transition-opacity" style={{color: 'var(--accent-color)'}}>
            Lihat Semua ({materiItems.length})
          </button>
        </div>
        <p className="text-sm theme-transition" style={{color: 'var(--text-secondary)'}}>
          Lanjutkan pembelajaran Anda dengan materi-materi berikut
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materiItems.slice(0, 3).map((item) => (
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
      <div className="mt-16 mb-8">
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

