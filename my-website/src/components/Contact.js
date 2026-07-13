import { motion } from 'framer-motion';
import './Contact.css';
import { useTranslation } from 'react-i18next';
import resumeEn from '../components/assets/resume_en.pdf';
import resumePt from '../components/assets/resume_pt.pdf';

function Contact() {
  const { t, i18n } = useTranslation();
  const resumeFile = i18n.language === 'ptBR' ? resumePt : resumeEn;

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <h2>{t('contact.title')}</h2>
        <p className="contact-cta">{t('contact.cta')}</p>
        <p className="contact-description">{t('contact.description')}</p>
        <div className="contact-buttons">
          <a className="contact-button" href="mailto:pedroluizbmr@gmail.com">
            {t('contact.buttons.email')}
          </a>
          <a
            className="contact-button"
            href="https://www.linkedin.com/in/pedroluizbmr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('contact.buttons.linkedin')}
          </a>
          <a
            className="contact-button"
            href="https://github.com/PedroBMR"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('contact.buttons.github')}
          </a>
          <a className="contact-button" href={resumeFile} download>
            {t('contact.buttons.cv')}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
