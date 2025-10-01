"use client";

import Image from "next/image";

export default function JobBann({ onExploreJobs }) {
  return (
    <div className="relative w-full overflow-visible">
      {/* Banner background with star pattern */}
      <div className="relative rounded-3xl bg-slate-900 text-white p-10 md:p-12 min-h-[220px] overflow-hidden">
        {/* Star pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, white 1px, transparent 1px),
                            radial-gradient(circle at 80% 40%, white 1px, transparent 1px),
                            radial-gradient(circle at 40% 80%, white 1px, transparent 1px),
                            radial-gradient(circle at 90% 10%, white 1px, transparent 1px),
                            radial-gradient(circle at 10% 90%, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px, 60px 60px, 40px 40px, 70px 70px, 30px 30px'
          }} />
        </div>
        
        {/* Diagonal Tags on Left Side - Better positioned with more space */}
        <div className="absolute left-8 top-12 z-10">
          {/* Upper tag - angled down-right */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-black text-sm font-medium transform rotate-8 origin-left">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l8 6-8 6-8-6 8-6z"/>
            </svg>
            Work With
          </div>
        </div>
        
        <div className="absolute left-12 top-32 z-10">
          {/* Lower tag - angled up-right */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-black text-sm font-medium transform -rotate-8 origin-left">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l8 6-8 6-8-6 8-6z"/>
            </svg>
            Disability
          </div>
        </div>
        
        {/* Centered Main Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="text-center">
            <div className="text-xl md:text-2xl font-medium mb-2">Eksplor Pekerjaan Yang Sesuai Dengan</div>
            <div className="text-3xl md:text-4xl font-semibold mb-8">Minat dan Kapabilitas Anda!</div>
            
            {/* Centered Button */}
            <button 
              onClick={onExploreJobs}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white text-base font-medium hover:bg-blue-700 transition-colors"
            >
              Eksplor Sekarang
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Man image - positioned so head breaks out above banner */}
      <div className="absolute right-0 bottom-0 hidden sm:block pointer-events-none z-20" style={{ transform: 'translateY(0%) translateX(10%)' }}>
        <div className="relative w-64 md:w-72 lg:w-80 h-80 md:h-88 lg:h-96">
          <Image 
            src="/avatars/manwc.png" 
            alt="Man in wheelchair with laptop" 
            fill 
            className="object-contain object-bottom" 
          />
        </div>
      </div>
    </div>
  );
}

