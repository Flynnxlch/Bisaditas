"use client";

import JobBann from "../JobBann";
import JobListing from "../JobListing";

export default function JobContent() {
  const handleExploreJobs = () => {
    // Scroll to job listing section
    const jobListing = document.getElementById('job-listing');
    if (jobListing) {
      jobListing.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Job Banner Section */}
      <div className="mb-8">
        <JobBann onExploreJobs={handleExploreJobs} />
      </div>

      {/* Job Listing Section */}
      <div id="job-listing">
        <JobListing />
      </div>
    </div>
  );
}

