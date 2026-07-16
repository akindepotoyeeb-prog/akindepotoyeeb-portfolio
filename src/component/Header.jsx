import React from "react";
import { TiTimes } from "react-icons/ti";
import { IoMenu, IoShirt, IoShirtOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ activeSection, scrollTo, refs, theme, toggleTheme, isThemeBouncing }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDark = theme === "dark";

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const handleNavClick = (sectionRef) => {
    scrollTo(sectionRef);
    closeMenu();
  };

  return (
    <header className="">
      <div className="header-container">
        <a href="#">
          <div className="logo">AT</div>
        </a>
        <div className="nav">
          <ul id="navbar" className={`navbar ${isMenuOpen ? "active" : ""}`}>
            <h3
              className="navname"
              style={{ color: "var(--brand-color)", marginBottom: "10px" }}
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
            
          </li> */}
          </ul>
          <div className="hire">

            {/* Theme  */}


            <button
              type="button"
              id="themeBtn"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
            >
              <span id="themeIcon" className={`theme-icon ${isThemeBouncing ? "theme-bounce" : ""}`}>
                {isDark ? <IoShirtOutline /> : <IoShirt />}
              </span>
            </button>
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
