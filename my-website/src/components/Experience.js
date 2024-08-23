import React from 'react';
import './Experience.css';
import { useTranslation } from 'react-i18next'; // Importa o hook de tradução

function Experience() {
  const { t } = useTranslation(); // Acessa a função t para usar traduções

  const experiences = t('experience.experiences', { returnObjects: true }); // Carrega a lista de experiências traduzidas

  return (
    <section id="experience" className="experience-section">
      <h2>{t('experience.title')}</h2> {/* Título traduzido */}
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <span className="duration">{exp.duration}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
