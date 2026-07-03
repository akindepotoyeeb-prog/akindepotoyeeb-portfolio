import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export default function FrontEnd() {
  return (
    <section style={{ width: "100%" }}>
      <div style={{ width: "100%", backgroundColor: "#c3c3c3" }}>
        <div className="abt-flex animate-slideIn">
          <Link to="/" className="button back-link">
            <HiOutlineArrowNarrowLeft /> <span>Back to home</span>
          </Link>
          <h2 className="animate-dropdown">Front-End Development</h2>
        </div>
      </div>
      <div className="detail-page section-p1">
        <div className="pro-details animate-moveup">
          <div className="detail-top">
            <h4>Building Fast, Responsive & interactive Web Experiences</h4>
            <p>
              I develop modern, responsive, and user-friendly websites that
              combine clean code with exceptional user experiences. My focus is
              on performance, accessibility, and creating interfaces that work
              seamlessly across all devices.
            </p>
            <h4>About Frontend Development</h4>
            <p>
              Frontend development is where creativity meets functionality. I
              enjoy transforming UI/UX designs into fully responsive,
              interactive web applications using modern technologies and best
              coding practices. Every project is built with scalability,
              maintainability, and user experience in mind.
            </p>
          </div>
          <div className="detail-card">
            <h4>Development Process</h4>
            <ul>
              <li>
                <h5>Planning</h5>
                <p>
                  Understand project goals, user requirements, and design
                  specifications.
                </p>
              </li>
              <li>
                <h5>Development</h5>
                <p>
                  Write clean, maintainable, and reusable code using modern
                  frontend technologies.
                </p>
              </li>
              <li>
                <h5>Integration</h5>
                <p>
                  Connect applications with APIs and external services to
                  deliver dynamic functionality.
                </p>
              </li>
              <li>
                <h5>Testing</h5>
                <p>
                  Ensure responsiveness, browser compatibility, accessibility,
                  and performance.
                </p>
              </li>
              <li>
                <h5>Deployment</h5>
                <p>
                  Prepare projects for production and continuous improvements.
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
                  <h5>E-Commerce</h5>
                  <p>
                    This E-commerce website was developed to help users to buy
                    goods and services online and deliver to the door step.
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
                  <h5>Outfyt</h5>
                  <p>
                    This OutFit website is developed to help user for their
                    outing fit.
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
                  <h5>Movie Search</h5>
                  <p>
                    This website was developed completely to help user search
                    for any movie by name.
                  </p>
                </div>
                <a
                  className="preview"
                  target="_blank"
                  href="https://akin-movie-search.netlify.app/"
                >
                  Visit
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
              I build websites that are not only visually appealing but also
              functional, responsive, and optimized for performance. My goal is
              to create digital experiences that deliver value to users while
              meeting business objectives through clean and efficient code.
            </p>
          </div>
          <div>
            <h4>Call to Action</h4>
            <p>
              <strong> Let's Build Something Amazing Together</strong> <br />
              Whether it's a landing page, business website, portfolio, or
              modern web application, I'm ready to turn your ideas into fast,
              responsive, and engaging digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
