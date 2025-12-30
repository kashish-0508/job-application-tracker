import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";

function App() {
  const [jobs, setJobs] = useState([]);

  // Load jobs
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(saved);
  }, []);

  // Save jobs
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  return (
  <Router>
    <div className="app-layout">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={<Dashboard setJobs={setJobs} />}
          />
          <Route
            path="/applications"
            element={<Applications jobs={jobs} setJobs={setJobs} />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  </Router>
);
}

export default App;
