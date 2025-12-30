const JobCard = ({ job, onDelete }) => {
  return (
    <div className="job-card">
      <div>
        <h3>{job.company}</h3>
        <p>{job.role}</p>

        {/* footer wrapper added */}
        <div className="job-card-footer">
          <span className={`status ${job.status.toLowerCase()}`}>
            {job.status}
          </span>

          <button
            className="delete-btn"
            onClick={() => onDelete(job.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
