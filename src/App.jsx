import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Services from "./component/Services";
import Project from "./component/Project";
import About from "./component/About";
import ContactMe from "./component/ContactMe";
import Footer from "./component/Footer";
import MyDetails from "./component/MyDetails";
import UiUx from "./component/UiUx";
import FrontEnd from "./component/FrontEnd";
import BackEnd from "./component/BackEnd";
import FullStack from "./component/FullStack";
import HireMe from "./component/HireMe";
import BackToTopButton from "./component/BackToTopButton";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showTopButton, setShowTopButton] = useState(false);
  const location = useLocation();
  const isRoot = location.pathname === "/";

  // 1. create refs for each section
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // 2. Function to handle the scroll
  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Observation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.35,
      rootMargin: "-10% 0px -35% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe your sections
    if (homeRef.current) observer.observe(homeRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (projectRef.current) observer.observe(projectRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    const animatedElements = document.querySelectorAll(
      ".animate-slideIn, .animate-per-slideIn, .animate-slideFRight, .animate-scaleout, .animate-dropdown, .animate-moveup"
    );

    const animationObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedElements.forEach((element) => animationObserver.observe(element));

    return () => animationObserver.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (!isRoot) {
      setShowTopButton(false);
      return;
    }

    const handleScroll = () => {
      setShowTopButton(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isRoot]);

  const LandingPage = () => (
    <>
      <div id="home" ref={homeRef}>
        <Home />
      </div>
      <div id="services" ref={servicesRef}>
        <Services />
      </div>
      <div id="project" ref={projectRef}>
        {/* <Project /> */}
      </div>
      <div id="about" ref={aboutRef}>
        {/* <About /> */}
      </div>
      <div id="contact" ref={contactRef}>
        {/* <ContactMe /> */}
      </div>
    </>
  );

  return (
      <div className="all">
        {isRoot && (
          <Header
            activeSection={activeSection}
            scrollTo={scrollToSection}
            refs={{ homeRef, servicesRef, projectRef, aboutRef, contactRef }}
          />
        )}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/my-details" element={<MyDetails />} />
          <Route path="/uiux" element={<UiUx />} />
          <Route path="/frontend" element={<FrontEnd />} />
          <Route path="/backend" element={<BackEnd />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="*" element={<LandingPage />} />
          <Route path="/hire-me" element={<HireMe />} />
        </Routes>
        {isRoot && showTopButton && (
          <BackToTopButton
            onClick={() => homeRef.current?.scrollIntoView({ behavior: "smooth" })}
          />
        )}
        <Footer />
      </div>
  );
}
