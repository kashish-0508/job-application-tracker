import JobForm from "../components/JobForm.jsx";


const Dashboard = ({ jobs, setJobs }) => {
  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <JobForm jobs={jobs} setJobs={setJobs} />
    </div>
  );
};

export default Dashboard;
