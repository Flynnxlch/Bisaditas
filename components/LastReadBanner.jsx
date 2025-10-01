"use client";

import Image from "next/image";

export default function LastReadBanner({ 
  title = "Fundamentals of Web Development",
  description = "Learn the basics of HTML, CSS, and JavaScript to build modern web applications",
  progress = 75,
  thumbnail = "/thumbnail/thumb1.png"
}) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4 theme-transition" style={{color: 'var(--text-primary)'}}>
        Materi Dibaca Terakhir
      </h2>
      <div className="relative rounded-3xl px-6 pt-6 pb-4 overflow-hidden" style={{backgroundColor: '#374151', height: '135px'}}>
        {/* Sparkle Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 left-8 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-8 right-12 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-12 left-16 w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="absolute bottom-8 right-8 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute bottom-12 left-12 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-6 right-20 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-6 left-20 w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
        
        <div className="relative flex items-center gap-6 h-full">
          {/* Thumbnail */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-xl overflow-hidden">
              <Image 
                src={thumbnail} 
                alt={title}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          {/* Course Info */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-white mb-2">
              {title}
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              {description}
            </p>
            
            {/* Progress Bar */}
            <div className="flex items-center gap-4">
              <div className="flex-grow">
                <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full transition-all duration-300"
                    style={{width: `${progress}%`}}
                  />
                </div>
              </div>
              <span className="text-white font-medium text-sm">{progress}%</span>
            </div>
          </div>
          
          {/* Continue Button */}
          <div className="flex-shrink-0">
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors">
              <span>Lanjut Belajar</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
