import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export default function FullStack() {
  return (
    <section style={{ width: "100%" }}>
      <div style={{ width: "100%", backgroundColor: "#c3c3c3" }}>
        <div className="abt-flex animate-slideIn">
          <Link to="/" className="button back-link">
            <HiOutlineArrowNarrowLeft /> <span>Back</span>
          </Link>
          <h2 className="animate-dropdown">Full-Stack Development</h2>
        </div>
      </div>
      <div className="detail-page section-p1">
        <div className="pro-details animate-moveup">
          <div className="detail-top">
            <h4>
              Building Complete Digital Solutions from Concept to Deployment
            </h4>
            <p>
              I develop full-stack web applications by combining intuitive UI/UX
              design, responsive frontend development, and secure backend
              architecture. My goal is to create scalable, high-performance
              digital products that deliver seamless user experiences and solve
              real-world problems.
            </p>
            <h4>About Full-Stack Development</h4>
            <p>
              Full-stack development allows me to transform ideas into fully
              functional web applications. From designing intuitive interfaces
              to developing responsive frontends and building secure backend
              systems, I enjoy working across the entire development lifecycle.
              This end-to-end approach helps me create products that are
              efficient, scalable, and user-focused.
            </p>
          </div>
          <div className="detail-card">
            <h3>Development Process</h3>
            <ul>
              <li>
                <h5>Discovery</h5>
                <p>
                  Understand project goals, user needs, and business
                  requirements.
                </p>
              </li>
              <li>
                <h5>Design</h5>
                <p>Create wireframes, user flows, and modern UI designs.</p>
              </li>
              <li>
                <h5>Frontend Development</h5>
                <p>
                  Develop responsive, interactive, and accessible user
                  interfaces.
                </p>
              </li>
              <li>
                <h5>Backend Development</h5>
                <p>
                  Build secure APIs, manage databases, and implement business
                  logic.
                </p>
              </li>
              <li>
                <h5>Testing & Optimizing</h5>
                <p>
                  Ensure performance, security, responsiveness, and reliability.
                </p>
              </li>
              <li>
                <h5>Deployment</h5>
                <p>
                  Launch the application and provide ongoing improvements and
                  maintenance.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="pros animate-moveup">
          <h4>Projects</h4>
          <div className="projectCon">
            <div className="image">
              <img src="/images/UIUX 2.png" alt="" />
              <div className="des">
                <div>
                  <h5>UI/UX Projects</h5>
                  <p>
                    Explore modern and user-focused interface designs,
                    wireframes, prototypes, and mobile app experiences.
                  </p>
                </div>
                <a className="preview" href="#" target="_blank">
                  Preview
                </a>
              </div>
            </div>
            <div className="image">
              <img src="/images/frontend.png" alt="" />
              <div className="des">
                <div>
                  <h5>Frontend Projects</h5>
                  <p>
                    Responsive and interactive web interfaces built with clean
                    code and smooth user experiences.
                  </p>
                </div>
                <a className="preview" href="#" target="_blank">
                  Preview
                </a>
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
                <a className="preview" href="#" target="_blank">
                  Preview
                </a>
              </div>
            </div>
            <div className="image">
              <img src="/images/full-stack.png" alt="" />
              <div className="des">
                <div>
                  <h5>Full-Stack Projects</h5>
                  <p>
                    Complete web applications combining modern frontend design
                    with powerful backend functionality.
                  </p>
                </div>
                <a className="preview" href="#" target="_blank">
                  Preview
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="work-with-me animate-moveup">
          <div>
            <h4>Why Work With Me?</h4>
            <p>
              As a full-stack developer, I bridge the gap between design and
              development. I understand how to create intuitive user experiences
              while building reliable backend systems that power them. This
              allows me to deliver complete, high-quality solutions from concept
              to deployment with consistency and attention to detail.
            </p>
          </div>
          <div>
            <h4>Call to Action</h4>
            <p>
              <strong>Let's Build Something Amazing Together</strong> <br />
              Whether you need a modern website, a business platform, or a
              custom web application, I'm ready to help turn your vision into a
              secure, scalable, and user-friendly solution. Let's create
              something impactful together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
