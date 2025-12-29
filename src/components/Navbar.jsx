import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">JobTracker</h2>

        <div className={`nav-links ${open ? "active" : ""}`}>
          <span className="close-btn" onClick={() => setOpen(false)}>
            ✕
          </span>

          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/dashboard" onClick={() => setOpen(false)}>
            Dashboard
          </NavLink>

          <NavLink to="/applications" onClick={() => setOpen(false)}>
            Applications
          </NavLink>
        </div>

        <div className="hamburger" onClick={() => setOpen(true)}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
