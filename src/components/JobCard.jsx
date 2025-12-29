const JobCard = ({ job, setJobs }) => {
  const handleDelete = () => {
    const confirmDel = window.confirm("Delete this application?");
    if (confirmDel) {
      const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
      const newJobs = savedJobs.filter((j) => j.id !== job.id);
      localStorage.setItem("jobs", JSON.stringify(newJobs));
      setJobs(newJobs);
    }
  };

  return (
    <div className="job-card">
      <h4>{job.company}</h4>
      <p>{job.role}</p>
      <span className={`status ${job.status.toLowerCase()}`}>{job.status}</span>
      <button className="delete-btn" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default JobCard;
