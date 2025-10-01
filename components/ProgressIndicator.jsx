
const ProgressIndicator = ({ 
  title = "Form Identitas Diri",
  subtitle = "Pengisian Identitas diri pengguna",
  currentStep = 1,
  totalSteps = 3,
  steps = [
    "Informasi Pengguna",
    "Peminatan Pengguna", 
    "Persetujuan Pengguna"
  ]
}) => {
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div 
      className="w-full p-6 rounded-lg theme-transition"
      style={{backgroundColor: 'var(--card-bg)'}}
    >
      {/* Header */}
      <div className="mb-6">
        <h1 
          className="text-2xl font-bold mb-2 theme-transition"
          style={{color: 'var(--text-primary)'}}
        >
          {title}
        </h1>
        <p 
          className="text-sm theme-transition"
          style={{color: 'var(--text-secondary)'}}
        >
          {subtitle}
        </p>
      </div>

      {/* Progress Section */}
      <div className="flex items-center justify-between mb-4">
        {/* Current Step Counter */}
        <div className="text-blue-600 font-semibold text-lg">
          {currentStep}/{totalSteps}
        </div>

        {/* Progress Bar */}
        <div className="flex-1 mx-6 relative">
          {/* Background Line */}
          <div 
            className="h-1 rounded-full theme-transition"
            style={{backgroundColor: 'var(--hover-bg)'}}
          >
            {/* Active Progress */}
            <div 
              className="h-1 bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          {/* Step Markers */}
          <div className="absolute top-0 left-0 w-full h-1 flex justify-between items-center">
            {steps.map((_, index) => {
              const stepNumber = index + 1;
              const isActive = stepNumber <= currentStep;
              const isCurrent = stepNumber === currentStep;
              
              return (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isActive 
                      ? 'bg-blue-600 border-blue-600' 
                      : 'bg-white border-gray-300'
                  } ${isCurrent ? 'scale-110' : ''}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Step Labels */}
      <div className="flex justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber <= currentStep;
          
          return (
            <div
              key={index}
              className={`text-sm transition-colors duration-300 theme-transition ${
                isActive ? 'font-medium' : ''
              }`}
              style={{ 
                width: `${100 / totalSteps}%`,
                textAlign: index === 0 ? 'left' : index === totalSteps - 1 ? 'right' : 'center',
                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)'
              }}
            >
              {step}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressIndicator;
