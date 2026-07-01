import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaBehance,
  FaInstagram,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-section section-p1">
      <div className="footer-top">
        <article className="footer-brand-card">
          <a href="#">
            <div className="logo">AT</div>
          </a>
          <h3>Akindepo Toyeeb</h3>
          <p className="footer-note">
            Frontend developer and UI/UX designer crafting fast, elegant, and
            user-focused digital experiences.
          </p>
        </article>

        <article className="footer-card">
          <h4>Contact</h4>
          <ul className="footer-contact-list">
            <li>
              <Link to="/hire-me" className="footer-contact-item">
                <span className="footer-icon">
                  <HiOutlineMail />
                </span>
                <small>akindepotoyeeb222@gmail.com</small>
              </Link>
            </li>
            <li>
              <a href="tel:+2348137151781" className="footer-contact-item">
                <span className="footer-icon">
                  <FaPhoneAlt />
                </span>
                <small>+234 813 7151 781</small>
              </a>
            </li>
            <li>
              <a
                href="https://akindepotoyeeb.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="footer-contact-item"
              >
                <span className="footer-icon">
                  <FaGlobe />
                </span>
                <small>akindepotoyeeb.netlify.app</small>
              </a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=Lagos,Nigeria"
                target="_blank"
                rel="noreferrer"
                className="footer-contact-item"
              >
                <span className="footer-icon">
                  <FaMapMarkerAlt />
                </span>
                <small>Lagos, Nigeria</small>
              </a>
            </li>
          </ul>
        </article>

        <div className="footer-links-wrap">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-socials">
          <h4>Connect</h4>
          <div className="social-links footer-social-links">
            <a
              href="https://www.facebook.com/toyeeb.akindepo.2025"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/akindepotoyeeb-prog"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/akindepo-toyeeb"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.behance.net/akindepotoyeeb"
              target="_blank"
              rel="noreferrer"
              aria-label="Behance"
            >
              <FaBehance />
            </a>
            <a
              href="https://www.instagram.com/akindepotoyeeb"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Akindepo Toyeeb. All rights reserved.</p>
        <p>Built with React + Vite for modern, responsive experiences.</p>
      </div>
    </footer>
  );
}
