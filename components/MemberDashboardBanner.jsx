"use client";

import Image from "next/image";

export default function MemberDashboardBanner() {
  return (
    <div className="relative w-full overflow-visible">
      {/* Banner background with star pattern */}
      <div className="relative rounded-3xl bg-slate-900 text-white p-5 md:p-6 flex items-center justify-between min-h-[120px] overflow-hidden">
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
        
        {/* Content */}
        <div className="relative z-10">
          <div className="text-lg md:text-xl font-medium mb-1">Anda Belum Melengkapi</div>
          <div className="text-2xl md:text-3xl font-semibold">Identitas Diri!</div>
          <button className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">
            Lengkapi Sekarang
            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <svg className="w-2 h-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
      
      {/* Man image - positioned so head breaks out above banner */}
      <div className="absolute right-0 bottom-0 hidden sm:block pointer-events-none z-20" style={{ transform: 'translateY(0%) translateX(10%)' }}>
        <div className="relative w-56 md:w-64 lg:w-72 h-72 md:h-80 lg:h-96">
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


