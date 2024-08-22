import React from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <a href="mailto:pedroluizbmr@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={40} />
        </a>
        <a href="https://www.linkedin.com/in/pedroluizbmr/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} />
        </a>
        <a href="https://github.com/PedroBMR" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
