import React from 'react';
import Main from './components/Main';
import BackgroundVideo from './components/BackgroundVideo';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';


function App() {
  return (
    <div className="App">
      <BackgroundVideo />
      <Main />
      <About />
      <Projects />
    </div>
  );
}

export default App;
