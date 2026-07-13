import { motion } from 'framer-motion';
import './About.css';
import { useTranslation } from 'react-i18next';
import pedroluiz from './assets/pedroluiz.jpeg';

function About() {
  const { t } = useTranslation();
  const highlights = t('about.highlights', { returnObjects: true });
  const educationItems = t('about.education.items', { returnObjects: true });
  const certificationItems = t('about.studies.items', { returnObjects: true });

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('about.title')}</h2>
          <p>{t('about.summary')}</p>

          <div className="about-block">
            <h3>{t('about.labels.highlights', { defaultValue: 'Highlights' })}</h3>
            <ul>
              {highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="about-columns">
            <div className="about-block">
              <h3>{t('about.education.title')}</h3>
              <ul>
                {educationItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="about-block">
              <h3>{t('about.studies.title')}</h3>
              <ul>
                {certificationItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <img src={pedroluiz} alt="Pedro Luiz" />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
