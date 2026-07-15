import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { MdOutlineConstruction } from "react-icons/md";

export default function BackEnd() {
  return (
    <section style={{ width: "100%" }}>
      <div style={{ width: "100%", backgroundColor: "#c3c3c3" }}>
        <div className="abt-flex animate-slideIn">
          <Link to="/" className="button back-link">
            <HiOutlineArrowNarrowLeft /> <span>Back</span>
          </Link>
          <h2 className="animate-dropdown">Back-End Development</h2>
        </div>
      </div>
      <div className="detail-page section-p1">
        <div
          style={{
            textAlign: "center",
            color: "#aaaaaa",
            backgroundColor: "#ebebeb",
            margin: "20px",
            padding: "10px",
            borderRadius: "15px",
            border: "1px solid #aaaaaa",
            
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#aaaaaa",
              backgroundColor: "#ebebeb",
              marginBottom: "10px",
              padding: "10px",
              fontSize: "30px",
            }}
          >
            Under Constuction ⚒⛏
          </h1>
          <div
            style={{
              width: "200px",
              height: "200px",
              textAlign: "center",
              color: "#aaaaaa",
              margin: "auto",
              fontSize: "200px",
              borderRadius: "15px",
              border: "1px solid #aaaaaa",
            }}
          >
            <MdOutlineConstruction />
          </div>
        </div>
        {/* <div className="pro-details animate-moveup">
          <div className="detail-top">
            <h4>Building Secure, Scalable & Reliable Backend Systems</h4>
            <p>
              I develop robust backend solutions that power modern web
              applications. My focus is on creating secure APIs, managing
              databases, implementing authentication, and building systems that
              are scalable, maintainable, and efficient.
            </p>
            <h4>About Backend Development</h4>
            <p>
              Backend development is the foundation of every successful web
              application. I enjoy designing server-side logic that ensures
              applications are secure, reliable, and capable of handling
              real-world business requirements. My approach emphasizes clean
              architecture, performance, and maintainable code.
            </p>
          </div>
          <div className="detail-card">
            <h4>Development Process</h4>
            <ul>
              <li>
                <h5>Requirement Analysis</h5>
                <p>
                  Understand the application's goals, data flow, and business
                  logic.
                </p>
              </li>
              <li>
                <h5>Architecture</h5>
                <p>
                  Design scalable models, database structures, and API
                  endpoints.
                </p>
              </li>
              <li>
                <h5>Development</h5>
                <p>
                  Build secure and maintainable backend functionality using
                  modern development practices.
                </p>
              </li>
              <li>
                <h5>Testing</h5>
                <p>
                  Verify functionality, data integrity, and API performance.
                </p>
              </li>
              <li>
                <h5>Deployment & Maintenance</h5>
                <p>
                  Deploy applications, monitor performance, and continuously
                  improve reliability.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="pros animate-moveup">
          <h4>Projects</h4>
          <div className="projectCon">
            <div className="image">
              <img src="/images/pro-images/e-commerce-img.png" alt="e-commerce" />
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
              <img src="/images/pro-images/weather-image.png" alt="" />
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
              I build backend systems that provide a strong foundation for
              modern applications. My goal is to develop secure, scalable, and
              efficient solutions that support seamless user experiences and
              long-term business growth.
            </p>
          </div>
          <div>
            <h4>Call to Action</h4>
            <p>
              <strong>Let's Build Something Amazing Together</strong>
              <br />
              Need a reliable backend for your next project? Let's build secure
              APIs, efficient databases, and scalable server-side solutions that
              keep your application running smoothly.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
