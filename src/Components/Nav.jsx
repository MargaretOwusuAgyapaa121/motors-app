import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="container-fluid position-relative nav-bar p-0">
      <div className="position-relative px-lg-4" style={{ zIndex: 9 }}>
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar py-1 px-3">
          {/* Logo */}
          <Link to="/">
            <img
              src="/assets/AP luxury/new-logo.png"
              alt="logo"
              style={{
                height: "3.5rem",
                marginTop: "5px",
                cursor: "pointer",
              }}
            />
          </Link>

          {/* Toggle for mobile */}
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto py-0">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/garage" className="nav-item nav-link">
                Garage
              </Link>

              {/* Pages Dropdown */}
              <div
                className={`nav-item dropdown custom-dropdown ${
                  dropdownOpen ? "clicked" : ""
                }`}
                onClick={handleDropdownToggle}
                onMouseLeave={handleDropdownClose}
              >
                <span className="nav-link dropdown-toggle" style={{ cursor: "pointer" }}>
                  Pages
                </span>
                <div className="dropdown-menu rounded-0 m-0">
                  <Link to="/team" className="dropdown-item">
                    The Team
                  </Link>
                </div>
              </div>

              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
