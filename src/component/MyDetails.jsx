import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { FaRegFilePdf } from "react-icons/fa";

export default function MyDetails() {
  const design = [
    { id: 1, name: "Figma", percentage: "100%", color: "#00d945" },
    { id: 2, name: "Wireframing", percentage: "90%", color: "#008000" },
    { id: 3, name: "Prototyping", percentage: "90%", color: "#008000" },
    {
      id: 4,
      name: "User Interface Design",
      percentage: "99%",
      color: "#00d945",
    },
    {
      id: 5,
      name: "user Experience Design",
      percentage: "95%",
      color: "#00d945",
    },
    { id: 6, name: "Designs Systems", percentage: "100%", color: "#00d945" },
  ];

  const frontend = [
    { id: 1, name: "HTML", percentage: "99%", color: "#00d945" },
    { id: 2, name: "CSS", percentage: "95%", color: "#00d945" },
    { id: 3, name: "JavaScript", percentage: "80%", color: "#9ad81d" },
    { id: 4, name: "React", percentage: "90%", color: "#00d945" },
    { id: 5, name: "Responsive Design", percentage: "99%", color: "#00d945" },
    { id: 6, name: "Tailwind", percentage: "95%", color: "#00d945" },
  ];

  const backend = [
    { id: 1, name: "Python", percentage: "75%", color: "#d0a805" },
    { id: 2, name: "FastAPI", percentage: "70%", color: "#d0a805" },
    {
      id: 3,
      name: "Authentication System",
      percentage: "80%",
      color: "#9ad81d",
    },
    { id: 4, name: "Database Management", percentage: "90%", color: "#00d945" },
    { id: 5, name: "Django", percentage: "89%", color: "#00d945" },
    { id: 6, name: "Docker", percentage: "70%", color: "#d0a805" },
  ];

  const tools = [
    { id: 1, name: "Git", grade: "Expert", color: "red" },
    { id: 2, name: "GitHub", grade: "Expert", color: "red" },
    { id: 3, name: "VS Code", grade: "Expert", color: "red" },
    { id: 4, name: "Postman", grade: "Intermidiate", color: "blue" },
    { id: 5, name: "Docker", grade: "Average", color: "green" },
    { id: 6, name: "MySQL & PostgreSQL", grade: "Expert", color: "red" },
  ];

  return (
    <section style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          backgroundColor: "var(--bg-color)",
          position: "sticky",
          zIndex: "10",
          top: "0",
          right: "0",
        }}
      >
        <div className="abt-flex animate-slideIn">
          <Link to="/" className="button back-link">
            <HiOutlineArrowNarrowLeft /> <span>Back</span>
          </Link>
          <h2 className="animate-dropdown">About Me</h2>
        </div>
      </div>
      <div className="detail-page section-p1">
        <div className="detail-top animate-moveup">
          <div className="dleft">
            <div className="paragaph">
              <div className="ppp">
                <div className="image-wrap">
                  <img src="/images/Toyeeb-pics.jpg" alt="about-image" />
                </div>
                <div className="about-text">
                  <h4>Hi, I'm Toyeeb</h4>
                  <p>
                    I am a passionate Full-Stack Developer and UI/UX Designer
                    dedicated to creating digital products that combine
                    beautiful design with powerful functionality. I enjoy
                    transforming ideas into meaningful experiences that solve
                    real-word problems and provide value to user.
                  </p>
                </div>
              </div>
              <p style={{ marginTop: "0" }}>
                Driven by curiosity and a commitment to excellence, I constantly
                seek opportunities to learn, improve, and challenge myself. I
                beleive that every project is an opportunity to grow, refine my
                skills, and create meaningful solutions that make a positive
                impact. My journey in technology and design is fueled by a
                desire to bridge creativity and functionality, ensuring that
                every product I build is both engaging and effective. with a
                growth mindset and strong attention to detail, I embrace new
                challenges, adapt to evolving technologies, and remain dedicated
                to delivering work that exceeds expectations and creates lasting
                value.
              </p>
              <h4>My juurney</h4>
              <p>
                My juurney into technology began with a strong interest in
                creativity and problem-solving. As a Mass Communication
                graduate, I develop communication and storytelling skills that
                later became valuable in design and product development. Over
                time, I expanded my expertise into UI/UX design and software
                development, learning how to create both visually appearling
                interfaces fuctional web application
              </p>
              <p>
                Today, I focus on designing and building modern digital
                solutions that are user-friendly, scalable, and impactful.
              </p>
            </div>
          </div>
          <div className="detail-card">
            <div className="detail-copy">
              <h4>My mission</h4>
              <p>
                I enjoy transforming ideas into meaningful experiences that
                solve real-world problems and provide value to users.
              </p>
            </div>
            <div className="detail-copy">
              <h4>What I do</h4>
              <p>I specialize in</p>
              <ul>
                <li>UI/UX Design</li>
                <li>User Research and Prototyping</li>
                <li>Frontend Development</li>
                <li>React-based Frontend Development</li>
                <li>Responsive Website Design</li>
                <li>Backend APIs and Database work</li>
                <li>Web Application Development</li>
                <li>Complete Full-Stack Project Delivery</li>
              </ul>
              <p>
                From wireframes and prototypes to complete web applications, I
                enjoy bringing ideas to life through thoughtful design and
                clean, efficient code.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <h4 style={{ marginBottom: "20px" }}>Skills & Technologgies</h4>
          <div className="skills">
            <div className="design">
              <p>Design</p>
              {design.map((skill) => (
                <ul>
                  <li>
                    <div>
                      <p>{skill.name}</p>
                      <span style={{ color: skill.color }}>
                        {skill.percentage}
                      </span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "4px",
                        backgroundColor: "var(--skill-track)",
                        borderRadius: "5px",
                        marginTop: "13px",
                        marginBottom: "6px",
                        cursor: "pointer",
                        zIndex: "10",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        className="animate-per-slideIn"
                        style={{
                          backgroundColor: "var(--brand-color)",
                          width: skill.percentage,
                        }}
                        id=""
                      ></div>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
            <div>
              <p>Frontend</p>
              {frontend.map((skill) => (
                <ul>
                  <li>
                    <div>
                      <p>{skill.name}</p>
                      <span style={{ color: skill.color }}>
                        {skill.percentage}
                      </span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "4px",
                        backgroundColor: "var(--skill-track)",
                        borderRadius: "5px",
                        marginTop: "13px",
                        marginBottom: "6px",
                        cursor: "pointer",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        className="animate-per-slideIn"
                        style={{
                          backgroundColor: "var(--brand-color)",
                          width: skill.percentage,
                        }}
                        id=""
                      ></div>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
            <div>
              <p>Backend</p>
              {backend.map((skill) => (
                <ul>
                  <li>
                    <div>
                      <p>{skill.name}</p>
                      <span style={{ color: skill.color }}>
                        {skill.percentage}
                      </span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "4px",
                        backgroundColor: "var(--skill-track)",
                        borderRadius: "5px",
                        marginTop: "13px",
                        marginBottom: "6px",
                        cursor: "pointer",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        className="animate-per-slideIn"
                        style={{
                          backgroundColor: "var(--brand-color)",
                          width: skill.percentage,
                        }}
                        id=""
                      ></div>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
            <div style={{ overflow: "hidden" }}>
              <p>Tools</p>
              {tools.map((tool) => (
                <ul>
                  <li
                    className="animate-scaleout"
                    style={{
                      display: "flex",
                      fontSize: "15px",
                      fontWeight: "600",
                      padding: "8px 10px",
                      justifyContent: "space-between",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ fontSize: "13px" }}>{tool.name}</span>
                    <span
                      style={{
                        fontSize: "10px",
                        backgroundColor: "var(--box-bg)",
                        padding: "3px 8px",
                        borderRadius: "15px",
                        fontWeight: "bold",
                        color: tool.color,
                        border: "var(--border)",
                      }}
                    >
                      {tool.grade}
                    </span>
                  </li>
                </ul>
              ))}

              <div
                className="animate-moveup"
                style={{
                  height: "fit-content",
                  marginTop: "40px",
                  backgroundColor: "var(--resume-card-bg)",
                  padding: "4px",
                  border: "1px dashed var(--resume-card-border)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaRegFilePdf
                  style={{ color: "var(--brand-color)", margin: "10px 0 10px 15px" }}
                />
                <div
                  style={{
                    height: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "transparent",
                    margin: "auto",
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <h5 style={{ marginBottom: "3px", fontSize: "12px", color: "var(--text-1)" }}>
                    My — Resume
                  </h5>
                  <p
                    style={{
                      marginTop: "0",
                      marginBottom: "0",
                      fontSize: "14px",
                      fontWeight: "lighter",
                      color: "var(--text-2)",
                    }}
                  >
                    click open PDF for preview
                  </p>
                </div>
                <a
                  href="/resume/Akindepo Toyeeb full-stack CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "var(--brand-color)",
                    color: "white",
                    padding: "4px 8px",
                    borderRadius: "3px",
                    fontSize: "12px",
                    marginRight: "10px",
                    textDecoration: "none",
                    textAlign: "center",
                    width: "110px",
                  }}
                >
                  open PDF
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="Edu animate-moveup">
          <div>
            <div>
              <h4>Education & Countinuous Learning</h4>
              <p>
                Higher National Diploma (HND) in{" "}
                <strong>Mass Communication</strong> | Diploma in{" "}
                <strong>UI/UX</strong> | Diploma in{" "}
                <strong>Fullstack Developing</strong>
                <br />
                <strong>
                  Westland Polytechnic Ilobu, osun state | Sound Foundation
                  Edtech Academy
                </strong>
              </p>
              <p>
                I believe learning never stops. I continously improve my skills
                through personal projects, research, and hands-on development.
                Every project is an opportunity to learn something new and
                become a better designer and developer.
              </p>
              <p>
                I remain committed to lifelong learning, embracing emerging
                technologies, refining my technical expertise, strengthening
                problem-solving abilities, collaborating effectively, and
                continuosly delivering innovative, user-focused solutions that
                create meaningful value and lasting impact.
              </p>
            </div>
          </div>
          <div>
            <div>
              <h4>Goals & Vision</h4>
              <p>
                My goal is to build digital products that make people's lives
                easier while helping businesses grow, I am committed to creating
                innovative, user-centered solutions and developing a career that
                allows me to make a meaningful impact through technology.
              </p>
              <p>
                I also aspire to work on global projects, earn internationally,
                and use my skills to support my family and contribute positively
                to my community.
              </p>
            </div>
            <div>
              <h4>Beyond Technology</h4>
              <p>
                When I'm not designing or coding, I enjoy exploring new
                technologies, improving my skills, and working on creative
                projects. I believe that consistency, curiosity, and continuous
                growth are the keys to long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
