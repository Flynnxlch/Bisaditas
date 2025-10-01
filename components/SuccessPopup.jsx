
const SuccessPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      
      {/* Popup */}
      <div 
        className="relative rounded-2xl p-8 mx-4 max-w-md w-full shadow-2xl theme-transition"
        style={{backgroundColor: 'var(--card-bg)'}}
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-blue-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
            </div>
            {/* Checkmark */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <svg 
                className="w-4 h-4 text-blue-600" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 
          className="text-2xl font-bold text-center mb-3 theme-transition"
          style={{color: 'var(--text-primary)'}}
        >
          Berhasil Menyimpan Perubahan!
        </h2>

        {/* Message */}
        <p 
          className="text-center mb-8 theme-transition"
          style={{color: 'var(--text-secondary)'}}
        >
          Perubahan informasi data pribadi anda telah tersimpan ke dalam sistem
        </p>

        {/* Button */}
        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Kembali Ke Dashboard
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
