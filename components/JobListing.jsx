"use client";

import { useMemo, useState } from "react";
import DisabilityFilter from "./DisabilityFilter";
import JobCard from "./JobCard";

export default function JobListing() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  // Randomized job data
  const jobData = [
    {
      id: 1,
      title: "Junior Programmer",
      description: "Membuat website dengan menggunakan teknologi modern seperti React, Node.js, dan database MySQL. Bekerja dalam tim yang inklusif dan mendukung pengembangan karir.",
      level: "Junior",
      duration: "3 Bulan",
      salary: "Rp 2.000.000",
      urgency: "ASAP",
      disabilitySupport: ["mobility", "speech"]
    },
    {
      id: 2,
      title: "UI/UX Designer",
      description: "Mendesain interface yang user-friendly dan accessible untuk aplikasi web dan mobile. Menggunakan tools seperti Figma dan Adobe Creative Suite.",
      level: "Mid",
      duration: "6 Bulan",
      salary: "Rp 3.500.000",
      urgency: "Urgent",
      disabilitySupport: ["mobility", "autism"]
    },
    {
      id: 3,
      title: "Content Writer",
      description: "Menulis konten yang engaging dan SEO-friendly untuk website dan social media. Bekerja remote dengan fleksibilitas waktu yang tinggi.",
      level: "Junior",
      duration: "Freelance",
      salary: "Rp 1.500.000",
      urgency: "Normal",
      disabilitySupport: ["mobility", "speech"]
    },
    {
      id: 4,
      title: "Data Analyst",
      description: "Menganalisis data bisnis menggunakan Python, SQL, dan tools visualisasi seperti Tableau. Membuat laporan dan dashboard untuk stakeholders.",
      level: "Mid",
      duration: "12 Bulan",
      salary: "Rp 4.000.000",
      urgency: "ASAP",
      disabilitySupport: ["speech", "hearing"]
    },
    {
      id: 5,
      title: "Digital Marketing Specialist",
      description: "Mengelola kampanye digital marketing di berbagai platform. Mengoptimalkan ROI dan engagement melalui strategi yang data-driven.",
      level: "Senior",
      duration: "Permanent",
      salary: "Rp 5.000.000",
      urgency: "Urgent",
      disabilitySupport: ["autism", "mobility"]
    },
    {
      id: 6,
      title: "Customer Service Representative",
      description: "Memberikan layanan pelanggan melalui chat, email, dan telepon. Bekerja dalam shift yang fleksibel dengan training yang komprehensif.",
      level: "Junior",
      duration: "6 Bulan",
      salary: "Rp 2.200.000",
      urgency: "Normal",
      disabilitySupport: ["mobility"]
    },
    {
      id: 7,
      title: "Graphic Designer",
      description: "Membuat desain visual untuk brand, marketing materials, dan digital assets. Menggunakan Adobe Creative Suite dan tools design modern.",
      level: "Mid",
      duration: "9 Bulan",
      salary: "Rp 3.000.000",
      urgency: "ASAP",
      disabilitySupport: ["autism", "mobility"]
    },
    {
      id: 8,
      title: "Project Manager",
      description: "Mengelola proyek IT dari planning hingga delivery. Berkoordinasi dengan tim cross-functional dan memastikan timeline serta budget.",
      level: "Senior",
      duration: "Permanent",
      salary: "Rp 6.000.000",
      urgency: "Urgent",
      disabilitySupport: ["mobility"]
    },
    {
      id: 9,
      title: "Quality Assurance Tester",
      description: "Melakukan testing manual dan automated untuk aplikasi web dan mobile. Membuat test cases dan melaporkan bugs dengan detail.",
      level: "Junior",
      duration: "4 Bulan",
      salary: "Rp 2.500.000",
      urgency: "Normal",
      disabilitySupport: ["visual", "cognitive"]
    },
    {
      id: 10,
      title: "Social Media Manager",
      description: "Mengelola presence brand di social media platforms. Membuat konten, menjalankan kampanye, dan menganalisis engagement metrics.",
      level: "Mid",
      duration: "8 Bulan",
      salary: "Rp 3.200.000",
      urgency: "ASAP",
      disabilitySupport: ["mobility", "speech", "hearing"]
    },
    {
      id: 11,
      title: "DevOps Engineer",
      description: "Mengelola infrastructure dan deployment pipeline. Menggunakan tools seperti Docker, Kubernetes, dan cloud platforms.",
      level: "Senior",
      duration: "Permanent",
      salary: "Rp 7.000.000",
      urgency: "Urgent",
      disabilitySupport: ["hearing", "mobility", "autism"]
    },
    {
      id: 12,
      title: "Technical Writer",
      description: "Menulis dokumentasi teknis, user manuals, dan API documentation. Bekerja dengan development team untuk memastikan akurasi konten.",
      level: "Mid",
      duration: "6 Bulan",
      salary: "Rp 3.800.000",
      urgency: "Normal",
      disabilitySupport: ["mobility", "speech", "hearing", "autism"]
    },
    {
      id: 13,
      title: "Software Developer",
      description: "Mengembangkan aplikasi web dan mobile dengan teknologi modern. Bekerja dalam tim yang mendukung inklusivitas dan fleksibilitas kerja.",
      level: "Mid",
      duration: "Permanent",
      salary: "Rp 4.500.000",
      urgency: "ASAP",
      disabilitySupport: ["autism", "hearing", "speech"]
    },
    {
      id: 14,
      title: "Marketing Coordinator",
      description: "Mengkoordinasi kampanye marketing dan event. Bekerja dengan tim kreatif untuk menghasilkan konten yang engaging dan accessible.",
      level: "Junior",
      duration: "8 Bulan",
      salary: "Rp 2.800.000",
      urgency: "Urgent",
      disabilitySupport: ["autism", "mobility", "speech"]
    },
    {
      id: 15,
      title: "Business Analyst",
      description: "Menganalisis kebutuhan bisnis dan mengembangkan solusi teknologi. Bekerja dengan stakeholders untuk memahami requirements dan proses bisnis.",
      level: "Senior",
      duration: "Permanent",
      salary: "Rp 6.500.000",
      urgency: "Normal",
      disabilitySupport: ["autism", "hearing", "visual"]
    },
    {
      id: 16,
      title: "Video Editor",
      description: "Mengedit video untuk konten marketing dan edukasi. Menggunakan software editing profesional dengan fokus pada accessibility dan inklusivitas.",
      level: "Mid",
      duration: "Freelance",
      salary: "Rp 3.200.000",
      urgency: "ASAP",
      disabilitySupport: ["autism", "mobility"]
    }
  ];

  // Filter jobs based on selected disability filters (AND logic - must support ALL selected disabilities)
  const filteredJobs = useMemo(() => {
    if (selectedFilters.length === 0) {
      return jobData;
    }
    
    return jobData.filter(job => 
      selectedFilters.every(filter => 
        job.disabilitySupport.includes(filter)
      )
    );
  }, [selectedFilters]);

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Filter Section */}
      <DisabilityFilter onFilterChange={handleFilterChange} />
      
      {/* Results Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold theme-transition mb-2" style={{color: 'var(--text-primary)'}}>
          Lowongan Pekerjaan
        </h2>
        <p className="theme-transition" style={{color: 'var(--text-secondary)'}}>
          Menampilkan {filteredJobs.length} dari {jobData.length} lowongan pekerjaan
          {selectedFilters.length > 0 && (
            <span className="ml-2 theme-transition" style={{color: 'var(--accent-color)'}}>
              (menyediakan dukungan untuk semua disabilitas yang dipilih)
            </span>
          )}
        </p>
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* No Results Message */}
      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="theme-transition text-6xl mb-4" style={{color: 'var(--text-secondary)'}}>🔍</div>
          <h3 className="text-lg font-medium theme-transition mb-2" style={{color: 'var(--text-primary)'}}>
            Tidak ada lowongan yang sesuai
          </h3>
          <p className="theme-transition" style={{color: 'var(--text-secondary)'}}>
            Coba pilih lebih sedikit filter disabilitas atau hapus semua filter untuk melihat semua lowongan.
            <br />
            <span className="text-sm theme-transition mt-2 block" style={{color: 'var(--text-secondary)'}}>
              Filter saat ini mencari pekerjaan yang mendukung SEMUA disabilitas yang dipilih.
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

