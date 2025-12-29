import { useState } from "react";

const Dashboard = () => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");

  const handleAdd = () => {
    if (!company || !role) return;

    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const newJob = {
      id: Date.now(),
      company,
      role,
      status: "Applied",
    };

    localStorage.setItem("jobs", JSON.stringify([...jobs, newJob]));
    setMsg("✅ Application Added Successfully!");
    setCompany("");
    setRole("");

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

        <button onClick={handleAdd}>Add Application</button>

        {msg && <p className="success-msg">{msg}</p>}
      </div>
    </div>
  );
};

export default Dashboard;
