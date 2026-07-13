import { motion } from 'framer-motion';
import './Main.css';
import HeroBackground from './HeroBackground';
import { useTranslation } from 'react-i18next';
import flagEn from '../components/assets/flags/flag_en.png';
import flagPt from '../components/assets/flags/flag_pt.png';
import resumeEn from '../components/assets/resume_en.pdf';
import resumePt from '../components/assets/resume_pt.pdf';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

function Main() {
  const { t, i18n } = useTranslation();
  const subtitleLines = t('home.hero.subtitle', { returnObjects: true });
  const highlights = t('home.highlights.items', { returnObjects: true });
  const resumeFile = i18n.language === 'ptBR' ? resumePt : resumeEn;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section id="home" className="content-box">
      <HeroBackground />
      <div className="main-section">
        <div className="language-selector">
          <button
            type="button"
            onClick={() => changeLanguage('en')}
            className="flag-button"
            aria-pressed={i18n.language === 'en'}
            aria-label={t('language.english')}
          >
            <img src={flagEn} alt="" aria-hidden="true" className="flag-icon" />
            EN
          </button>
          <button
            type="button"
            onClick={() => changeLanguage('ptBR')}
            className="flag-button"
            aria-pressed={i18n.language === 'ptBR'}
            aria-label={t('language.portuguese')}
          >
            <img src={flagPt} alt="" aria-hidden="true" className="flag-icon" />
            PT
          </button>
        </div>

        <motion.div
          className="content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.span className="hero-eyebrow" custom={0} variants={fadeUp}>
            {t('home.hero.eyebrow')}
          </motion.span>
          <motion.h1 className="hero-title" custom={0.1} variants={fadeUp}>
            {t('home.hero.title')}
          </motion.h1>
          <motion.div className="hero-subtitle" custom={0.2} variants={fadeUp}>
            {subtitleLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </motion.div>
          <motion.div className="hero-cta" custom={0.3} variants={fadeUp}>
            <a className="primary-button" href="#projects">
              {t('home.hero.ctaPrimary')}
            </a>
            <a className="secondary-button" href={resumeFile} download>
              {t('home.hero.ctaSecondary')}
            </a>
          </motion.div>
        </motion.div>

        <div className="highlights-section">
          <h2>{t('home.highlights.title')}</h2>
          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <motion.div
                className="highlight-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="home-cta">
          <h2>{t('home.cta.title')}</h2>
          <p>{t('home.cta.description')}</p>
          <a className="primary-button" href="#projects">
            {t('home.cta.buttonText')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Main;
