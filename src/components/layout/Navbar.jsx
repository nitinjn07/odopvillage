import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Sticky navbar logic
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const navHeight = document.querySelector(".navbar")?.offsetHeight || 0;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - navHeight - 20;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navHeight = document.querySelector(".navbar")?.offsetHeight || 0;

    if (element) {
      window.scrollTo({
        top: element.offsetTop - navHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark mp-navbar sticky-top ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h4>ODOP VILLAGE ACCELERATOR</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "home" ? "active" : ""
                }`}
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "about" ? "active" : ""
                }`}
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "benefits" ? "active" : ""
                }`}
                href="#benefits"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("benefits");
                }}
              >
                Benefits
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "program" ? "active" : ""
                }`}
                href="#program"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("program");
                }}
              >
                Program
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeSection === "success-stories" ? "active" : ""
                }`}
                href="#success-stories"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("success-stories");
                }}
              >
                Success Stories
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link mp-btn-outline ${
                  activeSection === "apply" ? "active" : ""
                }`}
                href="#apply"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("apply");
                }}
              >
                Apply Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
