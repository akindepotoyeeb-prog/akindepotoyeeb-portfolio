import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export default function UiUx() {
  return (
    <section className="detail-page section-p1">
      <div className="abt-flex animate-slideIn">
        <Link to="/" className="button back-link">
          <HiOutlineArrowNarrowLeft /> Back to home
        </Link>
        <h2 className="animate-dropdown">UI/UX Design</h2>
      </div>
      <div className="pro-details animate-moveup">
        <div className="detail-top">
          <h4>Designing Experiences That Matter</h4>
          <p>
            I create intuitive, user-centered digital experiences that solve
            real problems. My approach combines research, creativity, and
            usability to design interfaces that are visually appealing,
            accessible, and easy to use.
          </p>
          <h4>About My UI/UX Journey</h4>
          <p>
            My passion for UI/UX design comes from understanding how thoughtful
            design can improve everyday digital experiences. I enjoy
            transforming ideas into functional, user-friendly interfaces through
            research, wireframing, prototyping, and visual design. Every project
            is an opportunity to create meaningful experiences that balance user
            needs with business goals.
          </p>
        </div>
        <div className="detail-card">
          <h4>Design Process</h4>
          <ul>
            <li>
              <h5>Research</h5>
              <p>
                Understanding users, business objectives, and project
                requirements.
              </p>
            </li>
            <li>
              <h5>Define</h5>
              <p>
                Identifying user pain points and creating clear problem
                statements.
              </p>
            </li>
            <li>
              <h5>Wireframe</h5>
              <p>
                Planning layouts and user flows before adding visual elements.
              </p>
            </li>
            <li>
              <h5>Visual design systems</h5>
              <p>Creating clean, modern, and accessible interfaces.</p>
            </li>
            <li>
              <h5>prototype</h5>
              <p>
                Building interactive prototypes to simulate the user experience.
              </p>
            </li>
            <li>
              <h5>Usability testing & iteration</h5>
              <p>
                Gathering feedback, refining designs, and improving usability.
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
                <h5>SkillUp-Online Learning</h5>
                <p>
                  SkillUp was designed as a modern educational platform that
                  provides user with an easy and engaging way to learn online.
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
                <h5>AgroStack Ecosystem</h5>
                <p>
                  AgroStack Ecosystem is a design platform to connect farmers,
                  buyers, and traders in one digital space.
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
                <h5>Smart College Navigation App</h5>
                <p>
                  Smart campus navigation is a mobile application designed to
                  help students, staff, and visitors easily find their way
                  around school environment.
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
            I believe great design goes beyond aesthetics. My goal is to create
            digital products that are intuitive, engaging, and impactful while
            maintaining a balance between user satisfaction and business
            objectives.
          </p>
        </div>
        <div>
          <h4>Call to Action</h4>
          <p>
            Have an idea you'd like to bring to life? Let's collaborate to
            create digital experiences that users will love.
          </p>
        </div>
      </div>
    </section>
  );
}
