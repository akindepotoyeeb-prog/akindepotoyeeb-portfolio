import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaPython,
  FaDocker,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";

import { SiMongodb, SiPostgresql } from "react-icons/si";

const leftOrbitIcons = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JS", icon: FaJs, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "GitHub", icon: FaGithub, color: "#181717" },
];

const rightOrbitIcons = [
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
];

export default function About() {
  return (
    <div className="about section-p1 section-m1 animate-moveup">
      <h2>ABOUT ME</h2>
      <h4>Turning Ideas into Meaningful Digital Experiences</h4>
      <div className="hero-left about-left">
        <div className="about-visual">
          <img src="/images/Toyeeb.png" alt="profile" className="profile" loading="eager" />

          <motion.div
            className="orbit-ring orbit-left"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            {leftOrbitIcons.map((item, index) => {
              const angle = (360 / leftOrbitIcons.length) * index;
              return (
                <div
                  key={item.name}
                  className="orbit-icon"
                  style={{
                    background: item.color,
                    "--rotation": `${angle}deg`,
                    // the icons should stand straigth
                  }}
                >
                  <item.icon size={18} color="#fff" />
                </div>
              );
            })}
          </motion.div>

          <motion.div
            className="orbit-ring orbit-right"
            animate={{ rotate: -360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {rightOrbitIcons.map((item, index) => {
              const angle = (360 / rightOrbitIcons.length) * index;
              return (
                <div
                  key={item.name}
                  className="orbit-icon"
                  style={{
                    background: item.color,
                    "--rotation": `${angle}deg`,
                  }}
                >
                  <item.icon size={18} color="#fff" />
                </div>
              );
            })}
          </motion.div>

          {/* <div>
            <div className="uiux hang">UI/UX Designer</div>
            <div className="frontend hang">Front-End Developer</div>
            <div className="backend hang">Back-End Developer</div>
          </div> */}
        </div>
        <div className="about-right">
          <h2>
            Who's Behind All This <span>Great work?</span>
          </h2>
          <p>
            Hi, I'm Toyeeb, a passionate UI/UX Designer and Full-Stack Developer
            dedicated to building digital products that are both visually
            appealing and highly functional, I enjoy transforming ideas into
            seamless user experiences and scalable web applications that solve
            real-world problems.
          </p>
          <div className="skills">
            <h5>Skills & Expertise</h5>
            <ul>
              <li>UI/UX</li>
              <li>Wireframing & Prototyping</li>
              <li>Responsive Web Design</li>
              <li>React.js Development</li>
              <li>Backend Development</li>
              <li>Rest API Development</li>
              <li>Database Design</li>
              <li>Full-Stack Web Applications</li>
            </ul>
          </div>
          <div className="scope">
            <div className="client">
              <p>CLIENTS</p>
              <h2>200+</h2>
            </div>
            <div className="project">
              <p>PROJECTS</p>
              <h2>52+</h2>
            </div>
          </div>
          <Link to="/my-details" className="button read normal">
            READ MORE
            <div>
              <HiOutlineArrowNarrowRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
