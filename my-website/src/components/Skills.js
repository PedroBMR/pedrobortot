import React from 'react';
import './Skills.css';
import { useTranslation } from 'react-i18next';

function Skills() {
  const { t } = useTranslation();
  const categories = t('skills.categories', { returnObjects: true });
  const processSteps = t('skills.process.steps', { returnObjects: true });

  return (
    <section id="skills" className="skills-section">
      <h2>{t('skills.title')}</h2>
      <div className="skills-grid">
        {categories.map((category, index) => (
          <div className="skill-card" key={index}>
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="skills-process">
        <h3>{t('skills.process.title')}</h3>
        <ol>
          {processSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Skills;
