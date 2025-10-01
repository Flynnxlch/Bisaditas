import { useState } from 'react';
import ProgressIndicator from './ProgressIndicator';
import SuccessPopup from './SuccessPopup';
import UseEntInf from './UseEntInf';

const Identform = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const totalSteps = 3;

  const steps = [
    "Informasi Pengguna",
    "Peminatan Pengguna", 
    "Persetujuan Pengguna"
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Form completed, show success popup
      setShowSuccessPopup(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBackToDashboard = () => {
    onComplete();
  };

  const handlePopupClose = () => {
    setShowSuccessPopup(false);
    onComplete();
  };

  return (
    <div 
      className="min-h-screen p-8 theme-transition"
      style={{backgroundColor: 'var(--bg-primary)'}}
    >
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
            <button
              onClick={handleBackToDashboard}
              className="flex items-center gap-2 transition-colors theme-transition"
              style={{color: 'var(--text-secondary)'}}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--text-secondary)';
              }}
            >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            Kembali ke Dashboard
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <ProgressIndicator
            title="Form Identitas Diri"
            subtitle="Pengisian Identitas diri pengguna"
            currentStep={currentStep}
            totalSteps={totalSteps}
            steps={steps}
          />
        </div>

        {/* Form Content */}
        <div 
          className="rounded-lg shadow-sm theme-transition"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border-color)',
            borderWidth: '1px'
          }}
        >
          {currentStep === 1 && (
            <UseEntInf onNext={handleNext} />
          )}

          {currentStep === 2 && (
              <div className="p-8">
                <h2 
                  className="text-xl font-semibold mb-6 theme-transition"
                  style={{color: 'var(--text-primary)'}}
                >
                  Peminatan Pengguna
                </h2>
              <div className="space-y-6">
                <div>
                  <label 
                    className="block text-sm font-medium mb-2 theme-transition"
                    style={{color: 'var(--text-primary)'}}
                  >
                    Bidang Minat<span className="text-red-500">*</span>
                  </label>
                  <select 
                    className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-transition"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                      borderWidth: '1px'
                    }}
                  >
                    <option value="">Pilih bidang minat</option>
                    <option value="teknologi">Teknologi</option>
                    <option value="bisnis">Bisnis</option>
                    <option value="desain">Desain</option>
                    <option value="marketing">Marketing</option>
                    <option value="pendidikan">Pendidikan</option>
                  </select>
                </div>
                
                <div>
                  <label 
                    className="block text-sm font-medium mb-2 theme-transition"
                    style={{color: 'var(--text-primary)'}}
                  >
                    Level Keahlian<span className="text-red-500">*</span>
                  </label>
                  <select 
                    className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-transition"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                      borderWidth: '1px'
                    }}
                  >
                    <option value="">Pilih level keahlian</option>
                    <option value="pemula">Pemula</option>
                    <option value="menengah">Menengah</option>
                    <option value="mahir">Mahir</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>

                <div>
                  <label 
                    className="block text-sm font-medium mb-2 theme-transition"
                    style={{color: 'var(--text-primary)'}}
                  >
                    Pengalaman<span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-transition"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                      borderWidth: '1px'
                    }}
                    rows="4"
                    placeholder="Ceritakan pengalaman Anda dalam bidang yang dipilih"
                  />
                </div>

                <div>
                  <label 
                    className="block text-sm font-medium mb-2 theme-transition"
                    style={{color: 'var(--text-primary)'}}
                  >
                    Tujuan Belajar<span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-transition"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                      borderWidth: '1px'
                    }}
                    rows="3"
                    placeholder="Apa yang ingin Anda capai dengan belajar di platform ini?"
                  />
                </div>
              </div>
              
              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePrev}
                  className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  Sebelumnya
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="p-8">
                <h2 
                  className="text-xl font-semibold mb-6 theme-transition"
                  style={{color: 'var(--text-primary)'}}
                >
                  Persetujuan Pengguna
                </h2>
              <div className="space-y-6">
                <div 
                  className="p-6 rounded-lg theme-transition"
                  style={{backgroundColor: 'var(--hover-bg)'}}
                >
                  <h3 
                    className="font-medium mb-3 theme-transition"
                    style={{color: 'var(--text-primary)'}}
                  >
                    Syarat dan Ketentuan
                  </h3>
                  <div 
                    className="text-sm space-y-2 theme-transition"
                    style={{color: 'var(--text-secondary)'}}
                  >
                    <p>1. Data yang Anda berikan akan digunakan untuk keperluan platform pembelajaran.</p>
                    <p>2. Kami akan menjaga kerahasiaan data pribadi Anda sesuai dengan kebijakan privasi.</p>
                    <p>3. Anda bertanggung jawab atas keakuratan data yang diberikan.</p>
                    <p>4. Platform berhak melakukan verifikasi data yang diberikan.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="agreement1"
                      className="mt-1 mr-3"
                    />
                    <label 
                      htmlFor="agreement1" 
                      className="text-sm theme-transition"
                      style={{color: 'var(--text-primary)'}}
                    >
                      Saya menyetujui syarat dan ketentuan yang berlaku
                    </label>
                  </div>
                  
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="agreement2"
                      className="mt-1 mr-3"
                    />
                    <label 
                      htmlFor="agreement2" 
                      className="text-sm theme-transition"
                      style={{color: 'var(--text-primary)'}}
                    >
                      Saya memberikan persetujuan untuk penggunaan data pribadi
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="agreement3"
                      className="mt-1 mr-3"
                    />
                    <label 
                      htmlFor="agreement3" 
                      className="text-sm theme-transition"
                      style={{color: 'var(--text-primary)'}}
                    >
                      Saya bersedia menerima notifikasi dan update dari platform
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePrev}
                  className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  Sebelumnya
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Selesai & Simpan
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Success Popup */}
      <SuccessPopup 
        isOpen={showSuccessPopup} 
        onClose={handlePopupClose} 
      />
    </div>
  );
};

export default Identform;
