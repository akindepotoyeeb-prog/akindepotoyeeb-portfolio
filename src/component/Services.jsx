import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { FaRegLightbulb, FaLaptop } from "react-icons/fa";
import { FaLaptopCode, FaGears } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useState, useEffect } from "react";

const images = [
  "/images/UIUX 1.png",
  "/images/design-img2.jfif",
  "/images/frontend.jfif",
  "/images/backend.jfif",
];

export default function Services() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="services section-p1 section-m1 animate-moveup">
      <h5>MY SERVICES</h5>
      <h3>
        I Provide Modern Digital Solutions That Help Brands, Startups, And
        Businesses <span>Build Strong Online Experiences.</span>
      </h3>
      <div className="serviceCon">
        <div className="service-left">
          <div className="skill">
            <div className="icon">
              <FaRegLightbulb />
            </div>
            <div className="details">
              <div className="delIt">
                <h5>UI/UX Design</h5>
                <p>
                  I design clean, User-friendly, and modern interfaces focused
                  on usability, accessibility, and user experience.
                </p>
              </div>
              <Link to="/uiux" className="service-link">
                <div className="arrow">
                  <HiOutlineArrowNarrowRight />
                </div>
              </Link>
            </div>
          </div>
          <div className="skill">
            <div className="icon">
              <FaLaptopCode />
            </div>
            <div className="details">
              <div className="delIt">
                <h5>FrontEnd Development</h5>
                <p>
                  I build responsive and interactive websites using modern
                  frontend technologies with optimized performance.
                </p>
              </div>
              <Link to="/frontend" className="service-link">
                <div className="arrow">
                  <HiOutlineArrowNarrowRight />
                </div>
              </Link>
            </div>
          </div>
          <div className="skill">
            <div className="icon">
              <FaGears />
            </div>
            <div className="details">
              <div className="delIt">
                <h5>BackEnd Development</h5>
                <p>
                  I develop scalable backend systems and REST APIs with secure
                  authentication and database management.
                </p>
              </div>
              <Link to="/backend" className="service-link">
                <div className="arrow">
                  <HiOutlineArrowNarrowRight />
                </div>
              </Link>
            </div>
          </div>
          <div className="skill">
            <div className="icon">
              <LuBrainCircuit />
            </div>
            <div className="details">
              <div className="delIt">
                <h5>Full-Stack Development</h5>
                <p>
                  I combine frontend and backend technologies to build complete,
                  functional, and scalable web applications.
                </p>
              </div>
              <Link to="/fullstack" className="service-link">
                <div className="arrow">
                  <HiOutlineArrowNarrowRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="image">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Service showcase"
              loading="eager"
              className={index === current ? "active" : ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
