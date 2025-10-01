import { useState } from 'react';

const UseEntInf = ({ onNext }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    gmail: '',
    province: '',
    city: '',
    district: '',
    village: '',
    nik: '',
    physicalDisability: ''
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Profile Image:', profileImage);
    // Call onNext to proceed to next step
    if (onNext) {
      onNext();
    }
  };

  return (
    <div 
      className="min-h-screen p-8 theme-transition"
      style={{backgroundColor: 'var(--bg-primary)'}}
    >
      <div className="max-w-6xl mx-auto">
        <div 
          className="rounded-lg shadow-sm p-8 theme-transition"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border-color)',
            borderWidth: '1px'
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Profile Photo Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Profile Photo */}
              <div className="lg:col-span-1">
                <label 
                  className="block text-sm font-medium mb-4 theme-transition"
                  style={{color: 'var(--text-primary)'}}
                >
                  Foto Profil Pengguna<span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col items-center space-y-4">
                  {/* Profile Image Placeholder */}
                  <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300">
                    {profileImage ? (
                      <img 
                        src={URL.createObjectURL(profileImage)} 
                        alt="Profile" 
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <svg 
                        className="w-8 h-8 text-gray-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                        />
                      </svg>
                    )}
                  </div>
                  
                  {/* Upload Button */}
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <div className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors">
                      Unggah Foto
                    </div>
                  </label>
                </div>
              </div>

              {/* Right Columns - Personal Information */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label 
                    className="block text-sm font-medium mb-2 theme-transition"
                    style={{color: 'var(--text-primary)'}}
                  >
                    Nama Depan<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-transition"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                      borderWidth: '1px'
                    }}
                    placeholder="Masukkan nama depan Anda"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label 
                    className="block text-sm font-medium mb-2 theme-transition"
                    style={{color: 'var(--text-primary)'}}
                  >
                    Nama Belakang<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-transition"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                      borderWidth: '1px'
                    }}
                    placeholder="Masukkan nama belakang Anda"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label 
                    className="block text-sm font-medium mb-2 theme-transition"
                    style={{color: 'var(--text-primary)'}}
                  >
                    No. Telepon<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-transition"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                      borderWidth: '1px'
                    }}
                    placeholder="Masukkan nomor telepon Anda"
                  />
                </div>

                {/* Gmail */}
                <div>
                  <label 
                    className="block text-sm font-medium mb-2 theme-transition"
                    style={{color: 'var(--text-primary)'}}
                  >
                    Gmail<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="gmail"
                    value={formData.gmail}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-transition"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)',
                      borderWidth: '1px'
                    }}
                    placeholder="Masukkan Gmail Anda"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Province */}
              <div>
                <label 
                  className="block text-sm font-medium mb-2 theme-transition"
                  style={{color: 'var(--text-primary)'}}
                >
                  Provinsi<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="province"
                  value={formData.province}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-transition"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                    borderWidth: '1px'
                  }}
                  placeholder="Masukkan provinsi Anda"
                />
              </div>

              {/* City */}
              <div>
                <label 
                  className="block text-sm font-medium mb-2 theme-transition"
                  style={{color: 'var(--text-primary)'}}
                >
                  Kota<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-transition"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                    borderWidth: '1px'
                  }}
                  placeholder="Masukkan kota Anda"
                />
              </div>

              {/* District */}
              <div>
                <label 
                  className="block text-sm font-medium mb-2 theme-transition"
                  style={{color: 'var(--text-primary)'}}
                >
                  Kecamatan<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-transition"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                    borderWidth: '1px'
                  }}
                  placeholder="Masukkan kecamatan Anda"
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Village */}
              <div>
                <label 
                  className="block text-sm font-medium mb-2 theme-transition"
                  style={{color: 'var(--text-primary)'}}
                >
                  Kelurahan<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="village"
                  value={formData.village}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-transition"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                    borderWidth: '1px'
                  }}
                  placeholder="Masukkan kelurahan Anda"
                />
              </div>

              {/* NIK */}
              <div>
                <label 
                  className="block text-sm font-medium mb-2 theme-transition"
                  style={{color: 'var(--text-primary)'}}
                >
                  NIK<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nik"
                  value={formData.nik}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-transition"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                    borderWidth: '1px'
                  }}
                  placeholder="Masukkan NIK Anda"
                />
              </div>

              {/* Physical Disability Type */}
              <div>
                <label 
                  className="block text-sm font-medium mb-2 theme-transition"
                  style={{color: 'var(--text-primary)'}}
                >
                  Tipe Kekurangan Fisik<span className="text-red-500">*</span>
                </label>
                <select
                  name="physicalDisability"
                  value={formData.physicalDisability}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent theme-transition"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)',
                    borderWidth: '1px'
                  }}
                >
                  <option value="">Pilih tipe kekurangan fisik</option>
                  <option value="tidak-ada">Tidak Ada</option>
                  <option value="tunanetra">Tunanetra</option>
                  <option value="tunarungu">Tunarungu</option>
                  <option value="tunawicara">Tunawicara</option>
                  <option value="tunadaksa">Tunadaksa</option>
                  <option value="tunagrahita">Tunagrahita</option>
                  <option value="tunalaras">Tunalaras</option>
                  <option value="kesulitan-belajar">Kesulitan Belajar</option>
                  <option value="lambat-belajar">Lambat Belajar</option>
                  <option value="autis">Autis</option>
                  <option value="hiperaktif">Hiperaktif</option>
                  <option value="indigo">Indigo</option>
                  <option value="down-syndrome">Down Syndrome</option>
                  <option value="tunaganda">Tunaganda</option>
                </select>
              </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-end pt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Selanjutnya
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UseEntInf;
