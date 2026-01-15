import React from 'react';
import './Main.css';
import BackgroundVideo from './BackgroundVideo';
import { useTranslation } from 'react-i18next';
import flagEn from '../components/assets/flags/flag_en.png';
import flagPt from '../components/assets/flags/flag_pt.png';
import resumeEn from '../components/assets/resume_en.pdf';
import resumePt from '../components/assets/resume_pt.pdf';

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
      <BackgroundVideo />
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

        <div className="content">
          <h1 className="hero-title">{t('home.hero.title')}</h1>
          <div className="hero-subtitle">
            {subtitleLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <div className="hero-cta">
            <a className="primary-button" href="#projects">
              {t('home.hero.ctaPrimary')}
            </a>
            <a className="secondary-button" href={resumeFile} download>
              {t('home.hero.ctaSecondary')}
            </a>
          </div>
        </div>

        <div className="highlights-section">
          <h2>{t('home.highlights.title')}</h2>
          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div className="highlight-card" key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
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
