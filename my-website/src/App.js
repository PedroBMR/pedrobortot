import { useTranslation } from 'react-i18next';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import DownloadResume from './components/DownloadResume';
import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#home">{t('nav.home')}</a></li>
            <li><a href="#projects">{t('nav.projects')}</a></li>
            <li><a href="#skills">{t('nav.skills')}</a></li>
            <li><a href="#about">{t('nav.about')}</a></li>
            <li><a href="#experience">{t('nav.experience')}</a></li>
            <li><a href="#contact">{t('nav.contact')}</a></li>
          </ul>
        </nav>
      </header>
      <main id="conteudo">
        <Main />
        <Projects />
        <Skills />
        <About />
        <Experience />
        <Contact />
      </main>
      <footer>
        <DownloadResume />
      </footer>
    </div>
  );
}

export default App;
