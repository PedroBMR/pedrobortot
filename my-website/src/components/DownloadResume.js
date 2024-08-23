import React from 'react';
import './DownloadResume.css';
import { useTranslation } from 'react-i18next'; // Importa o hook de tradução
import resumeEn from '../components/assets/resume_en.pdf'; // Currículo em inglês
import resumePt from '../components/assets/resume_pt.pdf'; // Currículo em português

function DownloadResume() {
  const { t, i18n } = useTranslation(); // Acessa a função t e o idioma atual

  // Seleciona o currículo com base no idioma atual
  const resumeFile = i18n.language === 'ptBR' ? resumePt : resumeEn;

  return (
    <section id="download-resume" className="download-resume-section">
      <h2>{t('downloadResume.title')}</h2> {/* Título traduzido */}
      <p>{t('downloadResume.description')}</p> {/* Descrição traduzida */}
      <a href={resumeFile} download className="download-btn">
        {t('downloadResume.buttonText')} {/* Texto do botão traduzido */}
      </a>
    </section>
  );
}

export default DownloadResume;
