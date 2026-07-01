import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLaptopCode, FaGears } from "react-icons/fa6";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { LuBrainCircuit } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Project() {
  return (
    <div className="project section-p1 section-m1 animate-moveup">
      <h2>MY PROJECTS</h2>
      <h4>
        The Latest Project That's <span>Life On The Net.</span>
      </h4>
      <div className="projectCon">
        <div className="image">
          <img src="/images/UIUX 2.png" alt="" />
          <div className="des">
            <div>
              <h5>UI/UX Projects</h5>
              <p>
                Explore modern and user-focused interface designs, wireframes,
                prototypes, and mobile app experiences.
              </p>
            </div>
            <Link to="/uiux">
              <div className="arrow">
                <HiOutlineArrowNarrowRight />
              </div>
            </Link>
          </div>
        </div>
        <div className="image">
          <img src="/images/frontend.png" alt="" />
          <div className="des">
            <div>
              <h5>Frontend Projects</h5>
              <p>
                Responsive and interactive web interfaces built with clean code
                and smooth user experiences.
              </p>
            </div>
            <Link to="/frontend">
              <div className="arrow">
                <HiOutlineArrowNarrowRight />
              </div>
            </Link>
          </div>
        </div>
        <div className="image">
          <img src="/images/backend.png" alt="" />
          <div className="des">
            <div>
              <h5>Backend Projects</h5>
              <p>
                Secure and scalable APIs, databases, and server-side systems
                built for performance and reliability.
              </p>
            </div>
            <Link to="/backend">
              <div className="arrow">
                <HiOutlineArrowNarrowRight />
              </div>
            </Link>
          </div>
        </div>
        <div className="image">
          <img src="/images/full-stack.png" alt="full stack image" loading="eager" />
          <div className="des">
            <div>
              <h5>Full-Stack Projects</h5>
              <p>
                Complete web applications combining modern frontend design with
                powerful backend functionality.
              </p>
            </div>
            <Link to="/fullstack">
              <div className="arrow">
                <HiOutlineArrowNarrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
