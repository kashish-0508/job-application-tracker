import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Applications from "./pages/Applications.jsx";

function App() {
  const [jobs, setJobs] = useState([]);

  // Load saved jobs
  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(savedJobs);
  }, []);

  // Save to localStorage
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
              element={<Dashboard jobs={jobs} setJobs={setJobs} />}
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
