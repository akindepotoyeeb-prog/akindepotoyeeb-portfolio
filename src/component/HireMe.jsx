import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function HireMe() {
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
    <section style={{ width: "100%" }}>
      <div style={{ width: "100%", backgroundColor: "#c3c3c3" }}>
        <motion.div
          className="abt-flex"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link to="/" className="button back-link">
            <HiOutlineArrowNarrowLeft /> Back to home
          </Link>
          <h2 className="animate-dropdown">Hire Me</h2>
        </motion.div>
      </div>

      <motion.div
        className="Hire-me section-p1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          Hire Me
        </motion.h2>
        <motion.form
          ref={form}
          className="contact-form"
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
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
        </motion.form>
      </motion.div>
    </section>
  );
}
