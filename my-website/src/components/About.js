import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './About.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  useEffect(() => {
    ScrollReveal().reveal('.about-content', {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: false,
    });

    ScrollReveal().reveal('.about-image', {
      origin: 'right',
      distance: '50px',
      duration: 1000,
      delay: 400,
      reset: false,
    });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2>{t('about.title')}</h2> {/* Título traduzido */}
          <p>{t('about.paragraphs.0')}</p> {/* Primeiro parágrafo */}
          <p>{t('about.paragraphs.1')}</p> {/* Segundo parágrafo */}
          <p>{t('about.paragraphs.2')}</p> {/* Terceiro parágrafo */}
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
        </div>
        <div className="about-image">
          <img src={require('./assets/pedroluiz.jpeg')} alt="Pedro Luiz" />
        </div>
      </div>
    </section>
  );
}

export default About;
