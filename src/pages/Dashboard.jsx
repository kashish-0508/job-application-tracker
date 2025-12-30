import { useState } from "react";

const Dashboard = ({ setJobs }) => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [msg, setMsg] = useState("");

  const handleAdd = () => {
    if (!company || !role) return;

    const newJob = {
      id: Date.now(),
      company,
      role,
      status,
    };

    setJobs((prev) => [newJob, ...prev]); // ✅ STATE UPDATE

    setMsg("✅ Application Added Successfully!");
    setCompany("");
    setRole("");
    setStatus("Applied");

    setTimeout(() => setMsg(""), 2000);
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-card">
        <h2>Add Job Application</h2>

        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          type="text"
          placeholder="Job Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Applied">Applied</option>
          <option value="Interviewed">Interviewed</option>
          <option value="Selected">Selected</option>
          <option value="Rejected">Rejected</option>
        </select>

        <button onClick={handleAdd}>Add Application</button>

        {msg && <p className="success-msg">{msg}</p>}
      </div>
    </div>
  );
};

export default Dashboard;
