import React from 'react';
import { useTranslation } from 'react-i18next';
import Main from './components/Main';
import BackgroundVideo from './components/BackgroundVideo';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Courses from './components/Courses';
import DownloadResume from './components/DownloadResume';
import Playground from './components/Playground';
import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#about">{t('about.title')}</a></li>
            <li><a href="#skills">{t('skills.title')}</a></li>
            <li><a href="#experience">{t('experience.title')}</a></li>
            <li><a href="#projects">{t('projects.title')}</a></li>
            <li><a href="#courses">{t('courses.title')}</a></li>
          </ul>
        </nav>
      </header>
      <main id="conteudo">
        {false && <Playground />}
        <BackgroundVideo />
        <Main />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Courses />
      </main>
      <footer>
        <DownloadResume />
      </footer>
    </div>
  );
}

export default App;
