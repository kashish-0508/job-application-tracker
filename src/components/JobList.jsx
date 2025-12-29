import JobCard from "./JobCard.jsx";

const JobList = ({ jobs, setJobs }) => {
  if (jobs.length === 0) {
    return <p>No applications added yet.</p>;
  }

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} setJobs={setJobs} />
      ))}
    </div>
  );
};

export default JobList;
