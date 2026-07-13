import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Experience.css';
import { useTranslation } from 'react-i18next';

function Experience() {
  const { t } = useTranslation();
  const companies = t('experience.items', { returnObjects: true });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className="experience-section">
      <h2>{t('experience.title')}</h2>
      <div className="timeline">
        {companies.map((company, index) => {
          const isOpen = openIndex === index;
          return (
            <div className="timeline-entry" key={company.company}>
              <div className="timeline-marker">
                <span className="timeline-dot" />
                {index < companies.length - 1 && <span className="timeline-line" />}
              </div>
              <motion.div
                className="timeline-card"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
              >
                <button
                  type="button"
                  className="timeline-header"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <div>
                    <h3>{company.company}</h3>
                    <span className="timeline-location">{company.location}</span>
                  </div>
                  <span className={`timeline-toggle ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="timeline-roles"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      {company.roles.map((role) => (
                        <div className="timeline-role" key={role.title}>
                          <div className="timeline-role-head">
                            <h4>{role.title}</h4>
                            <span className="timeline-period">{role.period}</span>
                          </div>
                          <p>{role.description}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
