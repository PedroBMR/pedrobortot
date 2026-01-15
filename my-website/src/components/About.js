import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './About.css';
import { useTranslation } from 'react-i18next';
import pedroluiz from './assets/pedroluiz.jpeg';

function About() {
  const { t } = useTranslation();
  const highlights = t('about.highlights', { returnObjects: true });
  const studies = t('about.studies.items', { returnObjects: true });

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
          <h2>{t('about.title')}</h2>
          <p>{t('about.summary')}</p>

          <div className="about-block">
            <h3>{t('about.labels.highlights', { defaultValue: 'Diferenciais' })}</h3>
            <ul>
              {highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="about-block">
            <h3>{t('about.studies.title')}</h3>
            <ul>
              {studies.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="about-image">
          <img src={pedroluiz} alt="Pedro Luiz" />
        </div>
      </div>
    </section>
  );
}

export default About;
