import { useState } from "react";

const JobForm = ({ jobs, setJobs }) => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company || !role) return;

    const newJob = { id: Date.now(), company, role, status };

    // Update state + localStorage
    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));

    // Clear form
    setCompany("");
    setRole("");
    setStatus("Applied");

    // Show success message
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="job-form-container">
      {success && <div className="success-message">Application Added ✅</div>}
      <form className="job-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Selected</option>
          <option>Rejected</option>
        </select>
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default JobForm;
