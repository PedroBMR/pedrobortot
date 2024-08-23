import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Main.css';
import BackgroundVideo from './BackgroundVideo';
import { useTranslation } from 'react-i18next'; // Importa o hook de tradução
import flagEn from '../components/assets/flags/flag_en.png';
import flagPt from '../components/assets/flags/flag_pt.png';

function Main() {
  const { t, i18n } = useTranslation(); // Acessa a função t para usar traduções
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: t('main.titles', { returnObjects: true }), // Usando as traduções das strings
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, [t]); // Dependência de t para atualizar as strings quando o idioma mudar

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="content-box">
      <BackgroundVideo />
      <div className="main-section">
        <div className="language-selector">
          <button onClick={() => changeLanguage('en')} className="flag-button">
            <img src={flagEn} alt="English" className="flag-icon" />
          </button>
          <button onClick={() => changeLanguage('ptBR')} className="flag-button">
            <img src={flagPt} alt="Português" className="flag-icon" />
          </button>
        </div>
        <div className="content">
          <p className="greeting">{t('main.greeting')}</p> {/* Saudação traduzida */}
          <h2>
            <div className="p1">{t('main.intro1')}</div> {/* Introdução traduzida */}
            <div className="p2">
              <span ref={typedElement}></span> {/* Texto animado */}
            </div>
          </h2>
        </div>
        <div className="scroll-down-indicator" onClick={handleScroll}>
          <img src={require('../components/assets/tech-icons/arrow.svg').default} alt="Scroll Down" className="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Main;
