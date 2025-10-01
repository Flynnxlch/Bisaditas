import { useState } from 'react';
import ProgressIndicator from '../components/ProgressIndicator';

const ProgressExample = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const steps = [
    "Informasi Pengguna",
    "Peminatan Pengguna", 
    "Persetujuan Pengguna"
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Indicator */}
        <ProgressIndicator
          title="Form Identitas Diri"
          subtitle="Pengisian Identitas diri pengguna"
          currentStep={currentStep}
          totalSteps={totalSteps}
          steps={steps}
        />

        {/* Form Content Area */}
        <div className="bg-white rounded-lg p-6 mt-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">
            Step {currentStep}: {steps[currentStep - 1]}
          </h2>
          
          <div className="mb-6">
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Masukkan email"
                  />
                </div>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bidang Minat
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Pilih bidang minat</option>
                    <option>Teknologi</option>
                    <option>Bisnis</option>
                    <option>Desain</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pengalaman
                  </label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    placeholder="Ceritakan pengalaman Anda"
                  />
                </div>
              </div>
            )}
            
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="font-medium text-blue-900 mb-2">Persetujuan</h3>
                  <p className="text-blue-800 text-sm">
                    Dengan melanjutkan, Anda menyetujui syarat dan ketentuan yang berlaku.
                  </p>
                </div>
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="agreement"
                    className="mr-2"
                  />
                  <label htmlFor="agreement" className="text-sm text-gray-700">
                    Saya menyetujui syarat dan ketentuan
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={`px-4 py-2 rounded-md ${
                currentStep === 1 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              Sebelumnya
            </button>
            
            <button
              onClick={handleNext}
              disabled={currentStep === totalSteps}
              className={`px-4 py-2 rounded-md ${
                currentStep === totalSteps 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {currentStep === totalSteps ? 'Selesai' : 'Selanjutnya'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressExample;
