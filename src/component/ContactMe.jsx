import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaBehance,
  FaInstagram,
} from "react-icons/fa6";

export default function ContactMe() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        form.current, // <-- Make sure this says form.current
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        alert("Error sending message.");
        console.log(error);
      });
  };

  return (
    <section className="contact contact-hire animate-moveup" id="contact-page">
      <div className="contact section-p1">
        <div className="contact-intro">
          <p className="eyebrow">Contact</p>
          <h2>Let’s build something remarkable together.</h2>
          <p className="lead-text">
            Whether you need a clean portfolio, a modern web app, or a polished
            UI/UX concept, I’m ready to help turn your ideas into reality.
          </p>
        </div>

        <div className="contact-grid">
          <aside className="contact-panel info-panel">
            <h3>Contact Info</h3>
            <p className="panel-copy">
              Reach out for freelance work, collaborations, or any project
              discussion.
            </p>

            <a className="info-card" href="tel:+2348137151781">
              <span className="info-icon">
                <FaPhoneAlt />
              </span>
              <span>
                <strong>Phone</strong>
                <small>+234 813 7151 781</small>
              </span>
            </a>

            <a
              className="info-card"
              href="https://akindepo-toyeeb-portfolio.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <span className="info-icon">
                <FaGlobe />
              </span>
              <span>
                <strong>Website</strong>
                <small>akindepo-toyeeb-portfolio.netlify.app</small>
              </span>
            </a>

            <a
              className="info-card"
              href="https://maps.google.com/?q=Lagos,Nigeria"
              target="_blank"
              rel="noreferrer"
            >
              <span className="info-icon">
                <FaMapMarkerAlt />
              </span>
              <span>
                <strong>Location</strong>
                <small>Lagos, Nigeria</small>
              </span>
              {/* location */}
            </a>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243773.158492375!2d3.1191458148055795!3d6.548028244365821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e1!3m2!1sen!2sng!4v1782225202644!5m2!1sen!2sng"
                width="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  border: 0,
                  borderRadius: "10px",
                }}
              ></iframe> */}

              <div className="social-box">
                <h4>Follow Me</h4>
                <div className="social-links">
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
          </aside>

          <article className="contact-panel form-panel">
            <h3>Send a Message</h3>
            <p className="panel-copy">
              Share your idea and I’ll get back to you with a clear plan and
              next steps.
            </p>

            <form ref={form} className="contact-form" onSubmit={sendEmail}>
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Akindepo Toyeeb"
                required
              />

              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                required
              />

              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Project inquiry"
                required
              />

              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="5"
                name="message"
                placeholder="Tell me about your project, goals, and timeline."
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </article>
        </div>
      </div>

      <div className="hire-banner section-p1">
        <div>
          <p className="eyebrow">Ready to start?</p>
          <h3>Have a project in mind?</h3>
          <p>
            I’d love to help you bring it to life with a modern, responsive
            design.
          </p>
        </div>
        <Link to="/hire-me" className="hire-btn">
          Hire Me Now
        </Link>
      </div>
    </section>
  );
}
