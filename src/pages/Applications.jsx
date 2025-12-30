import { useState } from "react";
import JobCard from "../components/JobCard.jsx";

const Applications = ({ jobs, setJobs }) => {
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="applications-page">
      <h2>All Applications</h2>

      <input
        type="text"
        placeholder="Search by company or role..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredJobs.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <div className="job-list">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onDelete={handleDelete}   
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Applications;
