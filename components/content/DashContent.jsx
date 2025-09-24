"use client";

import MemberDashboardBanner from "@/components/MemberDashboardBanner";
import Image from "next/image";
import { useState } from "react";

export default function DashContent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
      <div className="mb-6">
        <MemberDashboardBanner />
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {[1,2,3].map((i) => (
          <div key={i} className="rounded-2xl p-4 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs theme-transition" style={{color: 'var(--text-secondary)'}}>
                <span className="w-2 h-2 rounded-full bg-blue-600 inline-block"/>
                Course Selesai
              </div>
              <button className="theme-transition" style={{color: 'var(--text-secondary)'}}>•••</button>
            </div>
            <div className="text-2xl font-bold theme-transition" style={{color: 'var(--text-primary)'}}>
              15<span className="text-sm align-top theme-transition" style={{color: 'var(--text-secondary)'}}>/20</span>
            </div>
            <button className="mt-2 text-[11px] text-blue-600">+5 Course</button>
          </div>
        ))}
      </div>

      {/* Courses list */}
      <div className="mb-3 text-[13px] font-semibold theme-transition" style={{color: 'var(--text-primary)'}}>Course Yang Sedang dipelajari</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {[1,2,3].map((i) => (
          <article key={i} className="rounded-2xl p-4 theme-transition" style={{borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)', borderWidth: '1px'}}>
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-3">
              <Image src="/thumbnail/thumb1.png" alt="Course thumbnail" fill className="object-cover" />
            </div>
            <div className="text-[13px] font-semibold theme-transition" style={{color: 'var(--text-primary)'}}>Creating Mobile App Design</div>
            <div className="text-[11px] mb-3 theme-transition" style={{color: 'var(--text-secondary)'}}>UI/UX Design</div>
            <div className="flex items-center justify-between text-[11px] theme-transition" style={{color: 'var(--text-secondary)'}}>
              <div>Progress</div>
              <div className="text-blue-600">75%</div>
            </div>
            <div className="mt-2 h-2 w-full rounded-full overflow-hidden theme-transition" style={{backgroundColor: 'var(--hover-bg)'}}>
              <div className="h-full bg-blue-600 w-3/4" />
            </div>
            <div className="mt-2 text-[11px] theme-transition" style={{color: 'var(--text-secondary)'}}>3 Days Left</div>
          </article>
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
