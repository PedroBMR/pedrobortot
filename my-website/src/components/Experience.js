import React from 'react';
import './Experience.css';
import { useTranslation } from 'react-i18next';

function Experience() {
  const { t } = useTranslation();
  const experiences = t('experience.items', { returnObjects: true });

  return (
    <section id="experience" className="experience-section">
      <h2>{t('experience.title')}</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.role}</h3>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
