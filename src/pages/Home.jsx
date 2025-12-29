import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <h1 className="hero-title">Track Your Job Applications Smarter</h1>
        <p className="hero-text">
          JobTracker helps you manage all your job applications in one place. 
          Add companies, track application status, and stay organized.
        </p>
        <button className="cta-btn" onClick={() => navigate("/dashboard")}>
          Go to Dashboard
        </button>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2>Why Choose JobTracker?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Easy Tracking</h3>
            <p>Add applications and track status in real-time.</p>
          </div>
          <div className="feature-card">
            <h3>Persistent Data</h3>
            <p>Your data stays in your browser safely using LocalStorage.</p>
          </div>
          <div className="feature-card">
            <h3>Clean Dashboard</h3>
            <p>Professional layout with clear and interactive UI.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="how-it-works">
        <h2>How it Works</h2>
        <div className="steps">
          <div className="step">
            <h4>1. Add Jobs</h4>
            <p>Enter company, role, and status in the dashboard.</p>
          </div>
          <div className="step">
            <h4>2. Track Status</h4>
            <p>Monitor applications: Applied, Interview, Selected, Rejected.</p>
          </div>
          <div className="step">
            <h4>3. Stay Organized</h4>
            <p>All your applications in one place with ease.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="home-cta">
        <h2>Start Tracking Today</h2>
        <button className="cta-btn" onClick={() => navigate("/dashboard")}>
          Go to Dashboard
        </button>
      </section>
    </div>
  );
};

export default Home;
