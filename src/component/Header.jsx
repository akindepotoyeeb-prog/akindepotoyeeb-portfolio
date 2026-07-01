import React from "react";
import { TiTimes } from "react-icons/ti";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ activeSection, scrollTo, refs }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const handleNavClick = (sectionRef) => {
    scrollTo(sectionRef);
    closeMenu();
  };

  return (
    <header className="">
      <div className="header">
        <a href="#">
          <div className="logo">AT</div>
        </a>
        <div className="nav">
          <ul id="navbar" className={`navbar ${isMenuOpen ? "active" : ""}`}>
            <h3
              className="navname"
              style={{ color: "#1d4ed8", marginBottom: "10px" }}
            >
              Akindepo Toyeeb
            </h3>
            <li>
              <button
                type="button"
                className={activeSection === "home" ? "nav-active" : ""}
                onClick={() => handleNavClick(refs.homeRef)}
              >
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                className={activeSection === "services" ? "nav-active" : ""}
                onClick={() => handleNavClick(refs.servicesRef)}
              >
                Services
              </button>
            </li>
            <li>
              <button
                type="button"
                className={activeSection === "project" ? "nav-active" : ""}
                onClick={() => handleNavClick(refs.projectRef)}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                type="button"
                className={activeSection === "about" ? "nav-active" : ""}
                onClick={() => handleNavClick(refs.aboutRef)}
              >
                About
              </button>
            </li>
            <li>
              <button
                type="button"
                className={activeSection === "contact" ? "nav-active" : ""}
                onClick={() => handleNavClick(refs.contactRef)}
              >
                Contact
              </button>
            </li>
            {/* <li className="close-wrapper" onClick={closeMenu}>
            <button type="button" id="close" aria-label="Close menu">
              <TiTimes
                style={{
                  color: "#1d4ed8",
                  textAlign: "center",
                  alignItems: "center",
                }}
              />{" "}
              Cancel
            </button>
          </li> */}
          </ul>
          <div className="hire">
            <button
              type="button"
              id="menu"
              onClick={toggleMenu}
              aria-label="Open menu"
            >
              {isMenuOpen ? "Close" : "Menu"}
              <IoMenu />
            </button>
            <Link to="/hire-me" id="HR">
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
