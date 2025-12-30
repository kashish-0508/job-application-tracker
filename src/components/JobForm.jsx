import { useState } from "react";

const JobForm = ({ setJobs }) => {
  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.company || !form.role) return;

    const newJob = {
      id: Date.now(),
      ...form,
    };

    setJobs((prev) => [newJob, ...prev]);

    setForm({ company: "", role: "", status: "Applied" });
  };

  return (
    <form onSubmit={handleSubmit} className="job-form">
      <input
        type="text"             
        placeholder="Company"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />

      <input
        type="text"             
        placeholder="Role"
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      />

      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option value="Applied">Applied</option>
        <option value="Selected">Selected</option>
        <option value="Interviewed">Interviewed</option>
        <option value="Rejected">Rejected</option>
      </select>

      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
