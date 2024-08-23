import React from 'react';
import Main from './components/Main';
import BackgroundVideo from './components/BackgroundVideo';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Courses from './components/Courses';
import DownloadResume from './components/DownloadResume';
import './App.css';

function App() {
  return (
    <div className="App">
      <BackgroundVideo />
      <Main />
      <About />
      <Skills />          
      <Experience />      
      <Projects />        
      <Courses />   
      <DownloadResume />              
    </div>
  );
}

export default App;
